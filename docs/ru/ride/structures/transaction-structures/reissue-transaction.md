# ReissueTransaction

Структура [транзакции довыпуска](/ru/blockchain/transaction-type/reissue-transaction.md).

## Конструктор

``` ride
ReissueTransaction(quantity: Int, assetId: ByteVector, reissuable: Boolean, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| № | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/ru/ride/data-types/int.md) | Количество [токена](/ru/blockchain/token.md) |
| 2 | assetId | [ByteVector](/ru/ride/data-types/byte-vector.md) | [ID токена](/ru/blockchain/token/token-id.md) |
| 3 | reissuable | [Boolean](/ru/ride/data-types/boolean.md) | Флаг довыпуска |
| 4 | id | [ByteVector](/ru/ride/data-types/byte-vector.md) | [ID транзакции](/ru/blockchain/transaction/transaction-id.md) |
| 5 | fee | [Int](/ru/ride/data-types/int.md) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee.md) |
| 6 | timestamp | [Int](/ru/ride/data-types/int.md) | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp.md) |
| 7 | version | [Int](/ru/ride/data-types/int.md) | [Версия транзакции](/ru/blockchain/transaction/transaction-version.md) |
| 8 | sender | [Address](/ru/ride/structures/common-structures/address.md) | [Адрес](/ru/blockchain/account/address.md) отправителя транзакции |
| 9 | senderPublicKey | [ByteVector](/ru/ride/data-types/byte-vector.md) | Открытый ключ отправителя транзакции |
| 10 | bodyBytes | [ByteVector](/ru/ride/data-types/byte-vector.md) | [Байты тела транзакции](/ru/blockchain/transaction/transaction-body-bytes.md) |
| 11 | proofs | [List](/ru/ride/data-types/list.md)[[ByteVector](/ru/ride/data-types/byte-vector.md)] | [Подтверждения](/ru/blockchain/transaction/transaction-proof.md) |
