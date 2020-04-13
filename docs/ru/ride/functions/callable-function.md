# Вызываемая функция

**Вызываемая функция** — функция [dApp-скрипта](/ru/ride/script/script-types/dapp-script), которая может быть вызвана извне при помощи [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction).

dApp-скрипт может содержать несколько вызываемых функций.

Возможности вызываемых функций зависят от версии [стандартной библиотеки](/ru/ride/script/standard-library).

| Стандартная библиотека v3 | Стандартная библиотека v4 |
|---|---|
| Добавление и изменение записей в [хранилище данных аккаунта](/ru/blockchain/account/account-data-storage) | Добавление, изменение, удаление записей в [хранилище данных аккаунта](/ru/blockchain/account/account-data-storage) |
| Переводы токенов | Переводы токенов |
|   | Выпуск, довыпуск, сжигание токенов |

К транзакции вызова скрипта можно приложить платежи в пользу dApp. В переводы токенов могут быть включены средства, полученные в этих платежах.

> Стандартная библиотека версии 4 доступна начиная с версии ноды 1.2.0 после активации функциональности "Ride V4 and multiple attached payments for Invoke Script Transaction" (№ 16). См. [Протокол активации](/ru/blockchain/waves-protocol/activation-protocol).

## Вызываемые функции в стандартной библиотеке v3

### Аргументы вызываемой функции

Вызываемая функция может принимать аргументы следующих типов:

* [Boolean](/ru/ride/data-types/boolean),
* [ByteVector](/ru/ride/data-types/byte-vector),
* [Int](/ru/ride/data-types/int),
* [String](/ru/ride/data-types/string),
* [Union](/ru/ride/data-types/union), элементы которого относятся к перечисленным выше типам данных.

### Результат выполнения вызываемой функции

Результат выполнения вызываемой функции представляет собой действия (добавление записи, перевод токена и т.п.), которые передаются в перечисленные ниже структуры Ride в качестве аргументов.

| Структура Ride, задающая результат | Описание | Пример |
|---|---|---|
| [WriteSet](/ru/ride/structures/script-results/write-set) | Используется, если в результате выполнения вызываемой функции должны быть выполнены операции над записями хранилища данных аккаунта, заданные при помощи структур [DataEntry](/ru/ride/structures/script-actions/data-entry) | `WriteSet([DataEntry("key", true), DataEntry("another_key", base58'someBase58VaLue'), DataEntry("yet_another_key", 42), DataEntry("one_more_key", "value")])` |
| [TransferSet](/ru/ride/structures/script-results/write-set) | Используется, если в результате выполнения вызываемой функции должны быть выполнены переводы токенов, заданные при помощи структур [ScriptTransfer](/ru/ride/structures/script-actions/script-transfer) | `TransferSet([ScriptTransfer(Address(base58'3Ms8fSfAxBLDjKvNVgACRzQoBLCtCWxtawu'), 100, base58'someAssetid')])` |
| [ScriptResult](/ru/ride/structures/script-results/script-result) | Используется, если в результате выполнения вызываемой функции должны быть выполнены и операции над записями хранилища данных аккаунта, и переводы токенов, см. [пример](#example3) | `ScriptResult(WriteSet([DataEntry("key", true), DataEntry("other_key", base58'someBase58VaLue'), DataEntry("yet_another_key", 42), DataEntry("one_more_key", "value")]), TransferSet([ScriptTransfer(Address(base58'3Ms8fSfAxBLDjKvNVgACRzQoBLCtCWxtawu'), 100, base58'someAssetid')]))` |

### Действия скрипта

Действия скрипта, выполняемые вызываемой функцией, задаются при помощи структур Ride.

| Структура Ride, задающая действие | Описание |
|---|---|
| [DataEntry](/ru/ride/structures/script-actions/data-entry) | - Если в хранилище данных аккаунта запись с указанным в DataEntry ключом отсутствует, то запись будет добавлена.<br>- Если в хранилище данных аккаунта присутствует запись с указанным в DataEntry ключом, то запись будет изменена |
| [ScriptTransfer](/ru/ride/structures/script-actions/script-transfer) | Структура, задающая параметры перевода токенов |

### Ограничения вызываемой функции

* Количество записей в хранилище данных аккаунта dApp, которое может быть добавлено/изменено в рамках транзакции вызова скрипта — до 100 записей.
* Количество переводов токенов, которое dApp может выполнить в рамках транзакции вызова скрипта — до 10 включительно.
* Количество платежей в пользу dApp, приложенных к транзакции вызова скрипта — 1.

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

## Вызываемые функции в стандартной библиотеке v4

### Аргументы вызываемой функции

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

### Результат выполнения вызываемой функции

Результат выполнения вызываемой функции представляет собой действия (добавление записи, выпуск токена и т.п.), объединенные в список.

| Структура Ride, задающая результат | Описание | Пример |
|---|---|---|
| [List](/ru/ride/data-types/list) | Объединяет предназначенные для выполнения [действия скрипта](#actions4), см. [пример](#example4). Действия будут выполнены в порядке, в котором они перечислены в этом списке | `[BooleanEntry("key1", true), IntegerEntry("key2", 42), StringEntry("key3", "some string"), BinaryEntry("key4", base58'encoded'), DeleteEntry("key4"), ScriptTransfer(Address(base58'3Ms8fSfAxBLDjKvNVgACRzQoBLCtCWxtawu'), 100, base58'someAssetid'), Issue("RegularToken", "This is an ordinary token", 10000, 2, true, unit, 0), Reissue("4ZzED8WJXsvuo2MEm2BmZ87Azw8Sx7TVC6ufSUA5LyTV", true, 1000), Burn("4ZzED8WJXsvuo2MEm2BmZ87Azw8Sx7TVC6ufSUA5LyTV", 1000)]` |

### Действия скрипта <a id="actions4"></a>

Действия скрипта, выполняемые вызываемой функцией, задаются при помощи структур Ride.

| Структура Ride, задающая действие | Описание |
|---|---|
| - [BinaryEntry](/ru/ride/structures/script-actions/binary-entry)<br>- [BooleanEntry](/ru/ride/structures/script-actions/boolean-entry)<br>- [IntegerEntry](/ru/ride/structures/script-actions/int-entry)<br>- [StringEntry](/ru/ride/structures/script-actions/string-entry) | Структуры, задающие параметры добавления/изменения записи хранилища данных аккаунта. Тип структуры должен соответствовать типу добавляемой/изменяемой записи.<br>- Если в хранилище запись с указанным в структуре ключом отсутствует, то запись будет добавлена.<br>- Если в хранилище присутствует запись с указанным в структуре ключом, то запись будет изменена |
| [DeleteEntry](/ru/ride/structures/script-actions/delete-entry) | Структура, при помощи которой выполняется удаление записи |
| [Issue](/ru/ride/structures/script-actions/issue) | Структура, задающая параметры выпускаемого токена |
| [Reissue](/ru/ride/structures/script-actions/reissue) | Структура, задающая параметры перевыпуска токена |
| [Burn](/ru/ride/structures/script-actions/burn) | Структура, задающая параметры сжигания токена |
| [ScriptTransfer](/ru/ride/structures/script-actions/script-transfer) | Структура, задающая параметры перевода токенов |

### Ограничения вызываемой функции

* Количество записей в хранилище данных аккаунта dApp, которое может быть добавлено/изменено/удалено в рамках транзакции вызова скрипта — до 100 записей.
* Количество операций выпуска/довыпуска/сжигания/перевода токенов, которое dApp может выполнить в рамках транзакции вызова скрипта — до 10 включительно.
* Количество платежей в пользу dApp, приложенных к транзакции вызова скрипта — 2.

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
 let pmt = extract(i.payments[0])
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
