# UpdateAssetInfoTransaction

Структура [транзакции обновления информации ассета](/ru/blockchain/transaction-type/update-asset-info-transaction.md).

## Конструктор

``` ride
UpdateAssetInfoTransaction(name: String, assetId: ByteVector, description: String, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля

| # | Имя | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | name | [String](/en/ride/data-types/string.md) | Name of the [token](/ru/blockchain/token.md) |
| 2 | assetId | [ByteVector](/ru/ride/data-types/byte-vector.md) | [Token ID](/ru/blockchain/token/token-id.md) |
| 3 | description | [String](/en/ride/data-types/string.md) | Description of the token |
| 4 | id | [ByteVector](/ru/ride/data-types/byte-vector.md) | [Transaction ID](/ru/blockchain/transaction/transaction-id.md) |
| 5 | fee | [Int](/ru/ride/data-types/int.md) | [Transaction fee](/ru/blockchain/transaction/transaction-fee.md) |
| 6 | timestamp | [Int](/ru/ride/data-types/int.md) | [Transaction timestamp](/ru/blockchain/transaction/transaction-timestamp.md) |
| 7 | version | [Int](/ru/ride/data-types/int.md) | [Transaction version](/ru/blockchain/transaction/transaction-version.md) |
| 8 | sender | [Address](/ru/ride/structures/common-structures/address.md) | [Address](/ru/blockchain/account/address.md) of a transaction sender |
| 9 | senderPublicKey | [ByteVector](/ru/ride/data-types/byte-vector.md) | Account public key of a sender |
| 10 | bodyBytes | [ByteVector](/ru/ride/data-types/byte-vector.md) | [Transaction body bytes](/ru/blockchain/transaction/transaction-body-bytes.md) |
| 11 | proofs | [List](/ru/ride/data-types/list.md)[[ByteVector](/ru/ride/data-types/byte-vector.md)] | Array of [proofs](/ru/blockchain/transaction/transaction-proof.md) |
