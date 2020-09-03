# UpdateAssetInfoTransaction

Структура [транзакции обновления информации ассета](/ru/blockchain/transaction-type/update-asset-info-transaction).

## Конструктор

``` ride
UpdateAssetInfoTransaction(name: String, assetId: ByteVector, description: String, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля

| # | Имя | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | name | [String](/ru/ride/data-types/string) | Название [токена](/ru/blockchain/token/) |
| 2 | assetId | [ByteVector](/ru/ride/data-types/byte-vector) | [ID токена](/ru/blockchain/token/token-id) |
| 3 | description | [String](/ru/ride/data-types/string) | Описание токена |
| 4 | id | [ByteVector](/ru/ride/data-types/byte-vector) | ID транзакции |
| 5 | fee | [Int](/ru/ride/data-types/int) | [[Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 6 | timestamp | [Int](/ru/ride/data-types/int) | Временная метка транзакции |
| 7 | version | [Int](/ru/ride/data-types/int) | Версия транзакции |
| 8 | sender | [Address](/ru/ride/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) отправителя транзакции |
| 9 | senderPublicKey | [ByteVector](/ru/ride/data-types/byte-vector) | Открытый ключ отправителя транзакции |
| 10 | bodyBytes | [ByteVector](/ru/ride/data-types/byte-vector) | [Байты тела транзакции](/ru/blockchain/glossary#б) |
| 11 | proofs | [List](/ru/ride/data-types/list)[[ByteVector](/ru/ride/data-types/byte-vector)] | Список [подтверждений](/ru/blockchain/transaction/transaction-proof) |
