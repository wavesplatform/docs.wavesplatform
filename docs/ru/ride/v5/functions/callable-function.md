# [Ride v5] Вызываемая функция

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/functions/callable-function)

**Вызываемая функция** — функция [dApp-скрипта](/ru/ride/script/script-types/dapp-script), которая может быть вызвана с помощью [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction) или функции [Invoke](/ru/ride/v5/functions/built-in-functions/dapp-to-dapp).

dApp-скрипт может содержать несколько вызываемых функций.

Вызываемая функция может выполнять следующие действия:

* Добавление, изменение, удаление записей в [хранилище данных аккаунта](/ru/blockchain/account/account-data-storage) dApp;
* Переводы токенов.
* Выпуск токенов от имени dApp, довыпуск и сжигание токенов.
* Настройка [спонсирования](/ru/blockchain/waves-protocol/sponsored-fee).
* Лизинг, отмена лизинга.

> Набор доступных действий зависит от версии [Стандартной библиотеки](/ru/ride/script/standard-library).

Вызываемая функция может возвращать значение, которое в случае [вызова dApp из dApp](/ru/ride/advanced/dapp-to-dapp) передается в вызывающую функцию.

Вызов может содержать платежи в пользу dApp. Токены, полученные в этих платежах, могут использоваться в действиях вызываемой функции, а также в платежах, приложенных к вложенным вызовам.

:warning: Оплата комиссии за транзакцию вызова скрипта за счет средств, переведенных dApp-скриптом отправителю, невозможна с момента активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”. Если баланс отправителя недостаточен для оплаты комиссии, dApp-скрипт не выполняется.

## Аннотация

Вызываемая функция помечается аннотацией `@Callable(i)`, где `i` — структура [Invocation](/ru/ride/v5/structures/common-structures/invocation), которая содержит поля вызова скрипта, доступные вызываемой функции. Имя переменной в аннотации обязательно, даже если вызываемая функция ее не использует.

## Аргументы

Вызываемая функция может принимать аргументы следующих типов:

* [Boolean](/ru/ride/v5/data-types/boolean),
* [ByteVector](/ru/ride/v5/data-types/byte-vector),
* [Int](/ru/ride/v5/data-types/int),
* [String](/ru/ride/v5/data-types/string),
* [Union](/ru/ride/v5/data-types/union), элементы которого относятся к перечисленным выше типам данных.
* [List](/ru/ride/v5/data-types/list), элементы которого могут относиться к следующим типам:
  * [Boolean](/ru/ride/v5/data-types/boolean),
  * [ByteVector](/ru/ride/v5/data-types/byte-vector),
  * [Int](/ru/ride/v5/data-types/int),
  * [String](/ru/ride/v5/data-types/string),
  * [List](/ru/ride/v5/data-types/list).

## Результат выполнения<a id="result"/>

Результат выполнения вызываемой функции представляет собой [кортеж](/ru/ride/v5/data-types/tuple) из двух элементов:
* Список действий скрипта. Действия будут выполнены в порядке, в котором они перечислены в списке.
* Возвращаемое значение, которое передается в вызывающую функцию в случае [вызова dApp из dApp](/ru/ride/advanced/dapp-to-dapp).

Пример:

```scala
(
  [
    BooleanEntry("key1", true),
    IntegerEntry("key2", 42),
    StringEntry("key3", "some string"),
    BinaryEntry("key4", base58'encoded'),
    DeleteEntry("key5"),
    ScriptTransfer(Address(base58'3Ms8fSfAxBLDjKvNVgACRzQoBLCtCWxtawu'), 100, base58'someAssetid'),
    Issue("RegularToken", "This is an ordinary token", 10000, 2, true),
    Reissue("4ZzED8WJXsvuo2MEm2BmZ87Azw8Sx7TVC6ufSUA5LyTV", 1000, true),
    Burn("4ZzED8WJXsvuo2MEm2BmZ87Azw8Sx7TVC6ufSUA5LyTV", 1000)]
    SponsorFee("4ZzED8WJXsvuo2MEm2BmZ87Azw8Sx7TVC6ufSUA5LyTV", 300),
    Lease(Address(base58'3Mn5hzck8nYd52Ytd2ZjzoiQLVoMcn1VAs9',1000),
    LeaseCancel(base58'Pxaf8pGKHS5ufGhqjmwRRcHQtC9T3h4d1XaJMnkhR1Vt')
  ],
  42
)
```

## Действия скрипта

Действия скрипта, выполняемые вызываемой функцией, задаются при помощи структур Ride.

| Структура | Описание |
|---|---|
| [BinaryEntry](/ru/ride/v5/structures/script-actions/binary-entry)<br>[BooleanEntry](/ru/ride/v5/structures/script-actions/boolean-entry)<br>[IntegerEntry](/ru/ride/v5/structures/script-actions/int-entry)<br>[StringEntry](/ru/ride/v5/structures/script-actions/string-entry) | Добавление/изменение записи хранилища данных аккаунта. Тип структуры должен соответствовать типу добавляемой/изменяемой записи.<br>- Если в хранилище запись с указанным в структуре ключом отсутствует, то запись будет добавлена.<br>- Если в хранилище присутствует запись с указанным в структуре ключом, то запись будет изменена |
| [DeleteEntry](/ru/ride/v5/structures/script-actions/delete-entry) | Удаление записи |
| [Issue](/ru/ride/v5/structures/script-actions/issue) | Выпуск токена |
| [Reissue](/ru/ride/v5/structures/script-actions/reissue) | Довыпуск токена |
| [Burn](/ru/ride/v5/structures/script-actions/burn) | Сжигание токена |
| [SponsorFee](/ru/ride/v5/structures/script-actions/sponsor-fee) | Настройка спонсирования |
| [ScriptTransfer](/ru/ride/v5/structures/script-actions/script-transfer) | Перевод токена |
| [Lease](/ru/ride/v5/structures/script-actions/lease) | Лизинг |
| [LeaseCancel](/ru/ride/v5/structures/script-actions/issue) | Отмена лизинга |

## Ограничения

* Общее количество действий скрипта `Issue`, `Reissue`, `Burn`, `SponsorFee`, `ScriptTransfer`, `Lease`, `LeaseCancel`, выполняемых всеми вызываемыми функциями в одной транзакции, — не более 30.
* Общее количество действий скрипта `BinaryEntry`, `BooleanEntry`, `IntegerEntry`, `StringEntry`, `DeleteEntry`, выполняемых всеми вызываемыми функциями в одной транзакции, — не более 100.
* Количество платежей в пользу dApp, приложенных к вызову скрипта, — не более 10.

См. также раздел [Ограничения](/ru/ride/v5/limits/).

## Пример

Приведенный ниже пример представляет собой приложение-кошелек, которое позволяет отправлять WAVES на адрес и выводить только собственные средства с этого адреса (вывод чужих WAVES запрещен). В примере используются две вызываемые функции:

* `deposit` — обеспечивает размещение токенов,
* `withdraw` — обеспечивает вывод токенов.

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}

@Callable(i)
func deposit() = {
  let pmt =
    if i.payments.size() == 1 then
      i.payments[0]
    else throw("Attached payment is required")
  if (isDefined(pmt.assetId))
    then throw("works with waves only")
    else {
     let currentKey = toBase58String(i.caller.bytes)
     let currentAmount = match getInteger(this, currentKey) {
       case a:Int => a
       case _ => 0
     }
     let newAmount = currentAmount + pmt.amount
     (
       [
         IntegerEntry(currentKey, newAmount)
       ],
       unit
     )
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
      else (
        [
          IntegerEntry(currentKey, newAmount),
          ScriptTransfer(i.caller, amount, unit)
        ],
        unit
      )
}

@Verifier(tx)
func verify() = false
```

## Порог сложности для сохранения неуспешных транзакций

Транзакция вызова скрипта сохраняется на блокчейне и с отправителя взимается комиссия, даже если результат выполнения dApp-скрипта или скрипта ассета был неудачным (при условии что транзакция прошла проверку подписи отправителя или проверку скриптом аккаунта).

Однако если вызываемая функция завершилась ошибкой или [выбрасыванием исключения](/ru/ride/exceptions) прежде, чем [сложность](/ru/ride/base-concepts/complexity) выполненных вычислений превысила [порог для сохранения неуспешных транзакций](/ru/ride/v5/limits/), транзакция вызова скрипта отклоняется и комиссия не взимается.

Этот порядок действует с момента активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions” независимо от используемой версии Стандартной библиотеки. Учитывайте его при разработке dApp-скрипта. Подробнее см. в разделе [Валидация транзакции](/ru/blockchain/transaction/transaction-validation).
