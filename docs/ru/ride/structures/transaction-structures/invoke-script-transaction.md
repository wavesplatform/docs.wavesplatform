# InvokeScriptTransaction

Структура [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction.md).

## Конструктор

``` ride
InvokeScriptTransaction(dApp: Address|Alias, payment: AttachedPayment|Unit, feeAssetId: ByteVector|Unit, function: String, args: List[Boolean|ByteVector|Int|String], id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | dApp | [Address](/ru/ride/structures/common-structures/address.md)&#124;[Alias](/ru/ride/structures/common-structures/alias.md) | [Адрес](/ru/blockchain/account/address.md) или [псевдоним](/ru/blockchain/account/alias.md) [аккаунта](/ru/blockchain/account.md), который вызывает функцию |
| 2 | payment | [AttachedPayment](/ru/ride/structures/common-structures/attached-payment.md)&#124;[Unit](/ru/ride/data-types/unit.md) | Платёж, приложенный к [транзакции](/ru/blockchain/transaction.md) |
| 3 | feeAssetId | [ByteVector](/ru/ride/data-types/byte-vector.md)&#124;[Unit](/ru/ride/data-types/unit.md) | [Токен](/ru/blockchain/token.md) комиссии. В настоящее время им может быть только [WAVES](/ru/blockchain/token/waves.md) |
| 4 | function | [String](/ru/ride/data-types/string.md) | Имя [функции](/ru/ride/functions.md) |
| 5 | args | [List](/ru/ride/data-types/list.md)[[Boolean](/ru/ride/data-types/boolean.md)&#124;[ByteVector](/ru/ride/data-types/byte-vector.md)&#124;[Int](/ru/ride/data-types/int.md)&#124;[String](/ru/ride/data-types/string.md)] | Параметры[ функции](/ru/ride/functions.md) |
| 6 | id | [ByteVector](/ru/ride/data-types/byte-vector.md) | [ID транзакции](/ru/blockchain/transaction/transaction-id.md) |
| 7 | fee | [Int](/ru/ride/data-types/int.md) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee.md) |
| 8 | timestamp | [Int](/ru/ride/data-types/int.md) | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp.md) |
| 9 | version | [Int](/ru/ride/data-types/int.md) | [Версия транзакции](/ru/blockchain/transaction/transaction-version.md) |
| 10 | sender | [Address](/ru/ride/structures/common-structures/address.md) | [Адрес](/ru/blockchain/account/address.md) отправителя транзакции |
| 11 | senderPublicKey | [ByteVector](/ru/ride/data-types/byte-vector.md) | Открытый ключ отправителя транзакции |
| 12 | bodyBytes | [ByteVector](/ru/ride/data-types/byte-vector.md) | Байты тела транзакции |
| 13 | proofs | [List](/ru/ride/data-types/list.md)[[ByteVector](/ru/ride/data-types/byte-vector.md)] | Список [подтверждений](/ru/blockchain/transaction/transaction-proof.md) |
