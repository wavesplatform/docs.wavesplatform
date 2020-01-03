# BurnTransaction

Структура [транзакции сжигания токена](/ru/blockchain/transaction-type/burn-transaction.md).

## Конструктор

``` ride
BurnTransaction(quantity: Int, assetId: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/ru/ride/data-types/int.md) | Количество сжигаемого [токена](/ru/blockchain/token.md) |
| 2 | assetId | [ByteVector](/ru/ride/data-types/byte-vector.md) | [ID сжигаемого токена](/ru/blockchain/token/token-id.md) |
| 3 | id | [ByteVector](/ru/ride/data-types/byte-vector.md) | [ID транзакции](/ru/blockchain/transaction/transaction-id.md) |
| 4 | fee | [Int](/ru/ride/data-types/int.md) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee.md) |
| 5 | timestamp | [Int](/ru/ride/data-types/int.md) | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp.md) |
| 6 | version | [Int](/ru/ride/data-types/int.md) | [Версия транзакции](/ru/blockchain/transaction/transaction-version.md) |
| 7 | sender | [Address](/ru/ride/structures/common-structures/address.md) | [Адрес](/ru/blockchain/account/address.md) отправителя транзакции |
| 8 | senderPublicKey | [ByteVector](/ru/ride/data-types/byte-vector.md) | Открытый ключ отправителя транзакции |
| 9 | bodyBytes | [ByteVector](/ru/ride/data-types/byte-vector.md) | [Байты тела транзакции](/ru/blockchain/transaction/transaction-body-bytes.md) |
| 10 | proofs | [List](/ru/ride/data-types/list.md)[[ByteVector](/ru/ride/data-types/byte-vector.md)] | Список [подтверждений](/ru/blockchain/transaction/transaction-proof.md) |
