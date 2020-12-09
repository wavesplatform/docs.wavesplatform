# Функция вызова dApp из dApp

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/).

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [Invoke](#invoke) | Вызывает вызываемую функцию dApp | ?? |

## Invoke

Вызывает вызываемую функцию dApp.

Функция `Invoke` может быть вызвана только при выполнении [вызываемой функции](/ru/ride/v5/functions/callable-function) [dApp-скрипта](/ru/ride/script/script-types/dapp-script), но не при выполнении [функции-верификатора](/ru/ride/functions/verifier-function), [скрипта аккаунта](/ru/ride/script/script-types/account-script) или [скрипта ассета](/ru/ride/script/script-types/asset-script).

С помощью функции `Invoke` вызываемая функция может вызвать вызываемую функцию другого dApp или того же самого dApp, в том числе сама себя, а затем использовать результаты вызова в дальнейших вычислениях. Вызов может содержать платежи, которые будут переведены с баланса вызывающего dApp на баланс вызываемого. Подробнее в разделе [Вызов dApp из dApp](/ru/ride/advanced/dapp-to-dapp).

```ride
Invoke(dApp: Address|Alias, function: String, arguments: List[Boolean|ByteVector|Int|String|List[Boolean|ByteVector|Int|String]], payments: List[AttachedPayments])
```

## Параметры

| Параметр | Описание |
| :--- | :--- |
| dApp: [Address](/ru/ride/v5/structures/common-structures/address)&#124;[Alias](/ru/ride/v5/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) [аккаунта](/ru/blockchain/account/), функция которого вызывается |
| function: [String](/ru/ride/v5/data-types/string) | Имя вызываемой функции |
| arguments | [List](/ru/ride/v5/data-types/list)[[Boolean](/ru/ride/v5/data-types/boolean)&#124;[ByteVector](/ru/ride/data-types/byte-vector)&#124;[Int](/ru/ride/data-types/int)&#124;[String](/ru/ride/data-types/string)&#124;[List](/ru/ride/data-types/list)[[Boolean](/ru/ride/data-types/boolean)&#124;[ByteVector](/ru/ride/data-types/byte-vector)&#124;[Int](/ru/ride/data-types/int)&#124;[String](/ru/ride/data-types/string)]] | Параметры вызываемой функции |
| payments: [List](/ru/ride/data-types/list)[[AttachedPayment](/ru/ride/structures/common-structures/attached-payment)] | Приложенные платежи, не более 2 |

## Пример

Пользователь с помощью транзакции вызова скрипта вызывает функцию `foo` dApp1.

Функция `foo` вызывает функцию `bar` dApp2, передавая число `a` и прикладывая платеж 1 USDN.

Функция `bar` переводит dApp1 1 WAVES и возвращает удвоенное число `a`.

Функция `foo` записывает в хранилище данных dApp1 результат, возвращенный функцией `bar`.

dApp1:

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}

@Callable(i)
func foo(dapp2: String, key: String) = {
   let a = getIntegerValue(this,key)
   strict r = Invoke(addressFromStringValue(dapp2),bar,[a],[AttachedPayment(base58'DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p',1000000)])
   (
      [
         IntegerEntry(toBase58String(i.caller.bytes), r)
      ],
      unit
   )
}
```

dApp2:

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}

@Callable(i)
func bar(a: Int) = {
   let 
   (
      [
         ScriptTransfer(i.caller, 100000000, unit),
      ],
      a*2
   )
}
```

