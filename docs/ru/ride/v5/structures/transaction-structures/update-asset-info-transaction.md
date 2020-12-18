# [Ride v5] UpdateAssetInfoTransaction

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/structures/transaction-structures/update-asset-info-transaction)

Структура [транзакции обновления информации ассета](/ru/blockchain/transaction-type/update-asset-info-transaction).

## Конструктор

``` ride
UpdateAssetInfoTransaction(name: String, assetId: ByteVector, description: String, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля

| # | Имя | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | name | [String](/ru/ride/v5/data-types/string) | Название [токена](/ru/blockchain/token/) |
| 2 | assetId | [ByteVector](/ru/ride/v5/data-types/byte-vector) | [ID токена](/ru/blockchain/token/token-id) |
| 3 | description | [String](/ru/ride/v5/data-types/string) | Описание токена |
| 4 | id | [ByteVector](/ru/ride/v5/data-types/byte-vector) | ID транзакции |
| 5 | fee | [Int](/ru/ride/v5/data-types/int) | [[Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 6 | timestamp | [Int](/ru/ride/v5/data-types/int) | Временная метка транзакции |
| 7 | version | [Int](/ru/ride/v5/data-types/int) | Версия транзакции |
| 8 | sender | [Address](/ru/ride/v5/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) отправителя транзакции |
| 9 | senderPublicKey | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Открытый ключ отправителя транзакции |
| 10 | bodyBytes | [ByteVector](/ru/ride/v5/data-types/byte-vector) | [Байты тела транзакции](/ru/blockchain/glossary#б) |
| 11 | proofs | [List](/ru/ride/v5/data-types/list)[[ByteVector](/ru/ride/v5/data-types/byte-vector)] | Список [подтверждений](/ru/blockchain/transaction/transaction-proof) |
