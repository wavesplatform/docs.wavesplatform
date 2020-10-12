# Вызываемая функция

**Вызываемая функция** — функция [dApp-скрипта](/ru/ride/script/script-types/dapp-script), которая может быть вызвана извне при помощи [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction).

dApp-скрипт может содержать несколько вызываемых функций.

Возможности вызываемых функций зависят от версии [стандартной библиотеки](/ru/ride/script/standard-library).

| Версия 3 | Версия 4 |
|---|---|
| Добавление и изменение записей в [хранилище данных аккаунта](/ru/blockchain/account/account-data-storage) | Добавление, изменение, удаление записей в [хранилище данных аккаунта](/ru/blockchain/account/account-data-storage) |
| Переводы токенов | Переводы токенов |
|   | Выпуск, довыпуск, сжигание токенов |
|   | Настройка [спонсирования](/ru/blockchain/waves-protocol/sponsored-fee) |

К транзакции вызова скрипта можно приложить платежи в пользу dApp. В переводы токенов могут быть включены средства, полученные в этих платежах.

> Стандартная библиотека версии 4 доступна начиная с версии ноды 1.2.0 после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”.

:warning: После активации фичи № 15 становится невозможной оплата комиссии за транзакцию вызова скрипта за счет средств, переведенных dApp-скриптом отправителю. Если баланс отправителя недостаточен для оплаты комиссии, dApp-скрипт не выполняется.

## Аннотация

Вызываемая функция помечается аннотацией `@Callable(i)`, где `i` — структура [Invocation](/ru/ride/structures/common-structures/invocation), которая содержит поля транзакции вызова скрипта, доступные вызываемой функции. Имя переменной в аннотации обязательно, даже если вызываемая функция ее не использует.

## Версия 3

### Аргументы

Вызываемая функция может принимать аргументы следующих типов:

* [Boolean](/ru/ride/data-types/boolean),
* [ByteVector](/ru/ride/data-types/byte-vector),
* [Int](/ru/ride/data-types/int),
* [String](/ru/ride/data-types/string),
* [Union](/ru/ride/data-types/union), элементы которого относятся к перечисленным выше типам данных.

### Результат выполнения

Результат выполнения вызываемой функции в Стандартной библиотеке версии 3 представляет собой одну из следующих структур:

* [WriteSet](/ru/ride/structures/script-results/write-set) — содержит список действий над записями хранилища данных аккаунта.

   Пример:
   
   ```
   WriteSet([
         DataEntry("key", true),
         DataEntry("another_key", base58'someBase58VaLue'),
         DataEntry("yet_another_key", 42),
         DataEntry("one_more_key", "value")
      ])
   ```

* [TransferSet](/ru/ride/structures/script-results/transfer-set) — содержит список переводов.

   Пример:

   ```
   TransferSet([ScriptTransfer(Address(base58'3Ms8fSfAxBLDjKvNVgACRzQoBLCtCWxtawu'), 100, base58'someAssetid')])
   ```

* [ScriptResult](/ru/ride/structures/script-results/script-result) — содержит `WriteSet` и `TransferSet`.

   Пример:

   ```
   ScriptResult(
        WriteSet([
          DataEntry("key", true),
          DataEntry("other_key", base58'someBase58VaLue'),
          DataEntry("yet_another_key", 42), DataEntry("one_more_key", "value")
        ]),
        TransferSet([ScriptTransfer(Address(base58'3Ms8fSfAxBLDjKvNVgACRzQoBLCtCWxtawu'), 100, base58'someAssetid')])
      )
   ```

### Действия скрипта

Действия скрипта, выполняемые вызываемой функцией, задаются при помощи структур Ride.

| Структура Ride, задающая действие | Описание |
|---|---|
| [DataEntry](/ru/ride/structures/script-actions/data-entry) | - Если в хранилище данных аккаунта запись с указанным в DataEntry ключом отсутствует, то запись будет добавлена.<br>- Если в хранилище данных аккаунта присутствует запись с указанным в DataEntry ключом, то запись будет изменена |
| [ScriptTransfer](/ru/ride/structures/script-actions/script-transfer) | Перевод токена |

### Ограничения

* Количество записей в хранилище данных аккаунта dApp, которое может быть добавлено/изменено в рамках транзакции вызова скрипта, — до 100 записей.
* Количество переводов токенов, которое dApp может выполнить в рамках транзакции вызова скрипта, — до 10 включительно.
* Количество платежей в пользу dApp, приложенных к транзакции вызова скрипта, — 1.

### Пример <a id="example3"></a>

Приведенный ниже пример представляет собой приложение-кошелек, которое позволяет отправлять [WAVES](/ru/blockchain/token/waves) на адрес и выводить только собственные средства с этого адреса (вывод чужих WAVES запрещен). В примере используются две вызываемые функции:

* `deposit` — обеспечивает размещение токенов,
* `withdraw` — обеспечивает вывод токенов.

```
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
@Callable(i)
func deposit() = {
 let pmt = extract(i.payment)
 if (isDefined(pmt.assetId))
    then throw("works with waves only")
    else {
     let currentKey = toBase58String(i.caller.bytes)
     let currentAmount = match getInteger(this, currentKey) {
       case a:Int => a
       case _ => 0
     }
     let newAmount = currentAmount + pmt.amount
     WriteSet([DataEntry(currentKey, newAmount)])
   }
 }
@Callable(i)
func withdraw(amount: Int) = {
 let currentKey = toBase58String(i.caller.bytes)
 let currentAmount = match getInteger(this, currentKey) {
   case a:Int => a
   case _ => 0
 }
 let newAmount = currentAmount - amount
 if (amount < 0)
   then throw("Can't withdraw negative amount")
   else if (newAmount < 0)
     then throw("Not enough balance")
     else ScriptResult(
       WriteSet([DataEntry(currentKey, newAmount)]),
       TransferSet([ScriptTransfer(i.caller, amount, unit)])
      )
 }
@Verifier(tx)
func verify() = false
```

## Версия 4

### Аргументы

Вызываемая функция может принимать аргументы следующих типов:

* [Boolean](/ru/ride/data-types/boolean),
* [ByteVector](/ru/ride/data-types/byte-vector),
* [Int](/ru/ride/data-types/int),
* [String](/ru/ride/data-types/string),
* [Union](/ru/ride/data-types/union), элементы которого относятся к перечисленным выше типам данных.
* [List](/ru/ride/data-types/list), элементы которого могут относиться к следующим типам:
  * [Boolean](/ru/ride/data-types/boolean),
  * [ByteVector](/ru/ride/data-types/byte-vector),
  * [Int](/ru/ride/data-types/int),
  * [String](/ru/ride/data-types/string),
  * [List](/ru/ride/data-types/list).

### Результат выполнения

Результат выполнения вызываемой функции в Стандартной библиотеке версии 4 представляет собой список действий скрипта. Действия будут выполнены в порядке, в котором они перечислены в списке.

Пример:

```
[
   BooleanEntry("key1", true),
   IntegerEntry("key2", 42),
   StringEntry("key3", "some string"),
   BinaryEntry("key4", base58'encoded'),
   DeleteEntry("key4"),
   ScriptTransfer(Address(base58'3Ms8fSfAxBLDjKvNVgACRzQoBLCtCWxtawu'), 100, base58'someAssetid'),
   Issue("RegularToken", "This is an ordinary token", 10000, 2, true),
   Reissue("4ZzED8WJXsvuo2MEm2BmZ87Azw8Sx7TVC6ufSUA5LyTV", 1000, true),
   Burn("4ZzED8WJXsvuo2MEm2BmZ87Azw8Sx7TVC6ufSUA5LyTV", 1000)]
   SponsorFee("4ZzED8WJXsvuo2MEm2BmZ87Azw8Sx7TVC6ufSUA5LyTV", 300)
]
```

### Действия скрипта <a id="actions4"></a>

Действия скрипта, выполняемые вызываемой функцией, задаются при помощи структур Ride.

| Структура Ride, задающая действие | Описание |
|---|---|
| - [BinaryEntry](/ru/ride/structures/script-actions/binary-entry)<br>- [BooleanEntry](/ru/ride/structures/script-actions/boolean-entry)<br>- [IntegerEntry](/ru/ride/structures/script-actions/int-entry)<br>- [StringEntry](/ru/ride/structures/script-actions/string-entry) | Добавление/изменение записи хранилища данных аккаунта. Тип структуры должен соответствовать типу добавляемой/изменяемой записи.<br>- Если в хранилище запись с указанным в структуре ключом отсутствует, то запись будет добавлена.<br>- Если в хранилище присутствует запись с указанным в структуре ключом, то запись будет изменена |
| [DeleteEntry](/ru/ride/structures/script-actions/delete-entry) | Удаление записи |
| [Issue](/ru/ride/structures/script-actions/issue) | Выпуск токена |
| [Reissue](/ru/ride/structures/script-actions/reissue) | Довыпуск токена |
| [Burn](/ru/ride/structures/script-actions/burn) | Сжигание токена |
| [SponsorFee](/ru/ride/structures/script-actions/sponsor-fee) | Настройка спонсирования |
| [ScriptTransfer](/ru/ride/structures/script-actions/script-transfer) | Перевод токена |

### Ограничения

* Количество `BinaryEntry`, `BooleanEntry`, `IntegerEntry`, `StringEntry`, `DeleteEntry`, выполняемых вызываемой функцией, — не более 100.
* Количество `Issue`, `Reissue`, `Burn`, `SponsorFee`, `ScriptTransfer`, выполняемых вызываемой функцией, — до 10 включительно.
* Количество платежей в пользу dApp, приложенных к транзакции вызова скрипта — 2.

См. также раздел [Ограничения](/ru/ride/limits/).

### Пример <a id="example4"></a>

Приведенный ниже пример представляет собой приложение-кошелек, которое позволяет отправлять WAVES на адрес и выводить только собственные средства с этого адреса (вывод чужих WAVES запрещен). В примере используются две вызываемые функции:

* `deposit` — обеспечивает размещение токенов,
* `withdraw` — обеспечивает вывод токенов.

```
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
@Callable(i)
func deposit() = {
 let pmt = value(i.payments[0])
 if (isDefined(pmt.assetId))
    then throw("works with waves only")
    else {
     let currentKey = toBase58String(i.caller.bytes)
     let currentAmount = match getInteger(this, currentKey) {
       case a:Int => a
       case _ => 0
     }
     let newAmount = currentAmount + pmt.amount;
     [IntegerEntry(currentKey, newAmount)]
   }
 }
@Callable(i)
func withdraw(amount: Int) = {
 let currentKey = toBase58String(i.caller.bytes)
 let currentAmount = match getInteger(this, currentKey) {
   case a:Int => a
   case _ => 0
 }
 let newAmount = currentAmount - amount
 if (amount < 0)
   then throw("Can't withdraw negative amount")
   else if (newAmount < 0)
     then throw("Not enough balance")
     else [
       IntegerEntry(currentKey, newAmount),
       ScriptTransfer(i.caller, amount, unit)
      ]
 }
@Verifier(tx)
func verify() = false
```

## Порог сложности для сохранения неуспешных транзакций

После активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions” транзакция вызова скрипта сохраняется на блокчейне и с отправителя взимается комиссия, даже если результат выполнения dApp-скрипта или скрипта ассета был неудачным (при условии что транзакция прошла проверку подписи отправителя или проверку скриптом аккаунта).

Однако если вызываемая функция завершилась ошибкой или [выбрасыванием исключения](/ru/ride/exceptions) прежде, чем [сложность](/ru/ride/base-concepts/complexity) выполненных вычислений превысила [порог для сохранения неуспешных транзакций](/ru/ride/limits/), транзакция вызова скрипта отклоняется и комиссия не взимается.

Этот порядок действует независимо от используемой версии Стандартной библиотеки. Учитывайте его при разработке dApp-скрипта. Подробнее см. в разделе [Валидация транзакции](/ru/blockchain/transaction/transaction-validation).
