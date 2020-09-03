# InvokeScriptTransaction

Структура [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction).

## Конструктор

В Стандартной библиотеке **версии 3**:

```ride
InvokeScriptTransaction(dApp: Address|Alias, payment: AttachedPayment|Unit, feeAssetId: ByteVector|Unit, function: String, args: List[Boolean|ByteVector|Int|String], id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

В Стандартной библиотеке **версии 4**:

```ride
InvokeScriptTransaction(dApp: Address|Alias, payments: List[AttachedPayments], feeAssetId: ByteVector|Unit, function: String, args: List[Boolean|ByteVector|Int|String|List[Boolean|ByteVector|Int|String]], id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

Стандартная библиотека версии 4 доступна начиная с версии ноды 1.2.0 после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”.

## Поля структуры

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | dApp | [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) [аккаунта](/ru/blockchain/account/), который вызывает функцию |
| 2 | payment | [AttachedPayment](/ru/ride/structures/common-structures/attached-payment)&#124;[Unit](/ru/ride/data-types/unit) | Приложенный платеж.<br>:warning: Поле удалено в Стандартной библиотеке версии 4 |
| 2 | payments | List[[AttachedPayment](/ru/ride/structures/common-structures/attached-payment)] | Приложенные платежи.<br>Поле добавлено в Стандартной библиотеке версии 4 |
| 3 | feeAssetId | [ByteVector](/ru/ride/data-types/byte-vector)&#124;[Unit](/ru/ride/data-types/unit) | [Токен](/ru/blockchain/token/) комиссии. В настоящее время им может быть только [WAVES](/ru/blockchain/token/waves) |
| 4 | function | [String](/ru/ride/data-types/string) | Имя [функции](/ru/ride/functions/) |
| 5 | args | В версии 3: [List](/ru/ride/data-types/list)[[Boolean](/ru/ride/data-types/boolean)&#124;[ByteVector](/ru/ride/data-types/byte-vector)&#124;[Int](/ru/ride/data-types/int)&#124;[String](/ru/ride/data-types/string)]<br>В версии 4: [List](/ru/ride/data-types/list)[[Boolean](/ru/ride/data-types/boolean)&#124;[ByteVector](/ru/ride/data-types/byte-vector)&#124;[Int](/ru/ride/data-types/int)&#124;[String](/ru/ride/data-types/string)&#124;[List](/ru/ride/data-types/list)[[Boolean](/ru/ride/data-types/boolean)&#124;[ByteVector](/ru/ride/data-types/byte-vector)&#124;[Int](/ru/ride/data-types/int)&#124;[String](/ru/ride/data-types/string)]]  | Параметры[ функции](/ru/ride/functions/) |
| 6 | id | [ByteVector](/ru/ride/data-types/byte-vector) | ID транзакции |
| 7 | fee | [Int](/ru/ride/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 8 | timestamp | [Int](/ru/ride/data-types/int) | Временная метка транзакции |
| 9 | version | [Int](/ru/ride/data-types/int) | Версия транзакции |
| 10 | sender | [Address](/ru/ride/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) отправителя транзакции |
| 11 | senderPublicKey | [ByteVector](/ru/ride/data-types/byte-vector) | Открытый ключ отправителя транзакции |
| 12 | bodyBytes | [ByteVector](/ru/ride/data-types/byte-vector) | Байты тела транзакции |
| 13 | proofs | [List](/ru/ride/data-types/list)[[ByteVector](/ru/ride/data-types/byte-vector)] | Список [подтверждений](/ru/blockchain/transaction/transaction-proof) |
