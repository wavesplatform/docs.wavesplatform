# ReissueTransaction

Структура [транзакции довыпуска](/ru/blockchain/transaction-type/reissue-transaction).

## Конструктор

``` ride
ReissueTransaction(quantity: Int, assetId: ByteVector, reissuable: Boolean, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| № | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/ru/ride/data-types/int) | Количество [токена](/ru/blockchain/token) |
| 2 | assetId | [ByteVector](/ru/ride/data-types/byte-vector) | [ID токена](/ru/blockchain/token/token-id) |
| 3 | reissuable | [Boolean](/ru/ride/data-types/boolean) | Флаг довыпуска |
| 4 | id | [ByteVector](/ru/ride/data-types/byte-vector) | [ID транзакции](/ru/blockchain/transaction/transaction-id) |
| 5 | fee | [Int](/ru/ride/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 6 | timestamp | [Int](/ru/ride/data-types/int) | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) |
| 7 | version | [Int](/ru/ride/data-types/int) | [Версия транзакции](/ru/blockchain/transaction/transaction-version) |
| 8 | sender | [Address](/ru/ride/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) отправителя транзакции |
| 9 | senderPublicKey | [ByteVector](/ru/ride/data-types/byte-vector) | Открытый ключ отправителя транзакции |
| 10 | bodyBytes | [ByteVector](/ru/ride/data-types/byte-vector) | [Байты тела транзакции](/ru/blockchain/transaction/transaction-body-bytes) |
| 11 | proofs | [List](/ru/ride/data-types/list)[[ByteVector](/ru/ride/data-types/byte-vector)] | [Подтверждения](/ru/blockchain/transaction/transaction-proof) |
