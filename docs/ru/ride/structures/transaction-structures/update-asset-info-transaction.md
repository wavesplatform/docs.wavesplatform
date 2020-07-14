# UpdateAssetInfoTransaction

Структура [транзакции обновления информации ассета](/ru/blockchain/transaction-type/update-asset-info-transaction).

## Конструктор

``` ride
UpdateAssetInfoTransaction(name: String, assetId: ByteVector, description: String, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля

| # | Имя | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | name | [String](/ru/ride/data-types/string) | Name of the [token](/ru/blockchain/token/) |
| 2 | assetId | [ByteVector](/ru/ride/data-types/byte-vector) | [Token ID](/ru/blockchain/token/token-id) |
| 3 | description | [String](/ru/ride/data-types/string) | Description of the token |
| 4 | id | [ByteVector](/ru/ride/data-types/byte-vector) | [Transaction ID](/ru/blockchain/transaction/transaction-id) |
| 5 | fee | [Int](/ru/ride/data-types/int) | [Transaction fee](/ru/blockchain/transaction/transaction-fee) |
| 6 | timestamp | [Int](/ru/ride/data-types/int) | [Transaction timestamp](/ru/blockchain/transaction/transaction-timestamp) |
| 7 | version | [Int](/ru/ride/data-types/int) | [Transaction version](/ru/blockchain/transaction/transaction-version) |
| 8 | sender | [Address](/ru/ride/structures/common-structures/address) | [Address](/ru/blockchain/account/address) of a transaction sender |
| 9 | senderPublicKey | [ByteVector](/ru/ride/data-types/byte-vector) | Account public key of a sender |
| 10 | bodyBytes | [ByteVector](/ru/ride/data-types/byte-vector) | [Transaction body bytes](/ru/blockchain/transaction/transaction-body-bytes) |
| 11 | proofs | [List](/ru/ride/data-types/list)[[ByteVector](/ru/ride/data-types/byte-vector)] | Array of [proofs](/ru/blockchain/transaction/transaction-proof) |
