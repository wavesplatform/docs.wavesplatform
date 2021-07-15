---
sidebarDepth: 3
---

# Функции вызова dApp из dApp

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [invoke](#invoke) | Вызывает вызываемую функцию dApp, c ограничением на [повторные вызовы](#reentrancy) исходного dApp | 75 |
| [reentrantInvoke](#reentrantinvoke) | Вызывает вызываемую функцию dApp, без ограничения на повторные вызовы исходного dApp | 75 |

## invoke

Вызывает [вызываемую функцию](/en/ride/functions/callable-function) dApp, с ограничением на повторные вызовы.

```ride
invoke(dApp: Address|Alias, function: String, arguments: List[Any], payments: List[AttachedPayments]): Any
```

`Any` означает любой допустимый тип.

Функция `invoke` может использоваться только вызываемой функцией [dApp-скрипта](/ru/ride/script/script-types/dapp-script), но не [функцией-верификатором](/ru/ride/functions/verifier-function), [скриптом аккаунта](/ru/ride/script/script-types/account-script) или [скриптом ассета](/ru/ride/script/script-types/asset-script).

С помощью функции `invoke` вызываемая функция может вызвать вызываемую функцию другого dApp или того же самого dApp, в том числе сама себя, а затем использовать результаты вызова в дальнейших вычислениях. Подробнее в разделе [Вызов dApp из dApp](/ru/ride/advanced/dapp-to-dapp).

:bulb: Чтобы гарантировать порядок выполнения вызываемых функций и применения действий скрипта, присвойте возвращаемое значение `invoke` [ нетерпеливой переменной](/ru/ride/variables/).

Вызов может содержать платежи, которые будут переведены с баланса исходного dApp на баланс вызываемого. Платежи запрещены, если dApp вызывает сам себя.

Если токен в платеже является смарт-ассетом, то скрипт ассета верифицирует вызов `invoke` как [InvokeScriptTransaction](/ru/ride/structures/transaction-structures/invoke-script-transaction) с полями:
* `dApp`, `payments`, `function`, `args` — значения, указанные в функции `invoke`;
* `sender`, `senderPublicKey` — параметры dApp, который вызвал функцию;
* `id`, `timestamp`, `fee`, `feeAssetId` — как в транзакции вызова скрипта;
* `version` = 0.

Если скрипт ассета отклоняет действие, то транзакция, которая вызвала скрипт dApp, либо отбрасывается, либо сохраняется на блокчейне как неуспешная, см. раздел [Валидация транзакций](/ru/blockchain/transaction/transaction-validation).

### Ограничение повторных вызовов<a id="reentrancy"></a>

Стек вызовов, порожденный функцией `invoke`, не должен содержать вызовы исходного dApp после вызова другого dApp.

Пусть исходный dApp A вызывает dApp B c помощью функции `invoke`. Независимо от того, какую функцию использует dApp B — `invoke` или `reentrantInvoke`, следующие последовательности вызовов завершатся **ошибкой**:

```
→ dApp A
   → dapp B
       → dApp A
```

```
→ dApp A
   → dapp B
      → dApp C
         → dApp A
```

Следующие последовательности вызовов **допустимы**:

```
→ dApp A
   → dapp A
      → dapp A
```

```
→ dApp N
   → dapp A
   → dApp A
```

```
→ dapp N
   → dapp A
      → dapp B
   → dapp B
      → dapp A
      → dapp C
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| dApp: [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) dApp, функция которого вызывается |
| function: [String](/ru/ride/data-types/string)&#124;[Unit](/ru/ride/data-types/unit) | Имя вызываемой функции. `unit` — вызов функции по умолчанию |
| arguments: [List](/ru/ride/data-types/list)[[Any](/ru/ride/data-types/any)] | Параметры вызываемой функции. `unit` в случае вызова функции по умолчанию |
| payments: [List](/ru/ride/data-types/list)[[AttachedPayment](/ru/ride/structures/common-structures/attached-payment)] | Платежи в пользу вызываемого dApp, не более 10 |

### Пример

Пользователь с помощью транзакции вызова скрипта вызывает функцию `foo` dApp1.

Функция `foo` вызывает функцию `bar` dApp2, передавая число `a` и прикладывая платеж 1 USDN.

Функция `bar` переводит dApp1 1 WAVES и возвращает удвоенное число `a`.

Функция `foo` записывает в хранилище данных dApp1:
* значение, возвращенное функцией `bar`.
* новый баланс dApp2 (уменьшенный на 1 WAVES, переведенный функцией `bar`).

dApp1:

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}

@Callable(i)
func foo(dapp2: String, a: Int, key1: String, key2: String) = {
   strict res = invoke(addressFromStringValue(dapp2),"bar",[a],[AttachedPayment(base58'DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p',1000000)])
   match res {
     case r : Int => 
      (
         [
           IntegerEntry(key1, r),
           IntegerEntry(key2, wavesBalance(addressFromStringValue(dapp2)).regular)
         ],
         unit
      )
     case _ => throw("Incorrect invoke result") 
   }
}
```

dApp2:

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}

@Callable(i)
func bar(a: Int) = {
   (
      [
         ScriptTransfer(i.caller, 100000000, unit)
      ],
      a*2
   )
}
```

## reentrantInvoke

Вызывает [вызываемую функцию](/ru/ride/functions/callable-function) dApp. Отличается от функции [invoke](#invoke) только отсутствием ограничения на [повторные вызовы](#reentrancy) исходного dApp, который использовал `reentrantInvoke`.

Однако, если исходный dApp был вызван повторно и на этот раз использовал функцию `invoke`, то в этом стеке вызовов нельзя вызвать исходный dApp еще раз.

Например, последовательность вызовов

```
→ dApp A
   → dapp B
      → dApp A
         → dApp C
            → dApp A
```

* **допустима**, если dApp A вызывает и dApp B, и dApp С с помощью функции `reentrantInvoke`;
* **завершается ошибкой**, если dApp A вызывает dApp B с помощью функции `reentrantInvoke`, а dApp С — с помощью функции `invoke`.

```ride
reentrantInvoke(dApp: Address|Alias, function: String, arguments: List[Any], payments: List[AttachedPayments]): Any
```
