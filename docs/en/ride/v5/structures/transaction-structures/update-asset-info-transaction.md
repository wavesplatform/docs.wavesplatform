# UpdateAssetInfoTransaction

Structure of a [update asset info transaction](/en/blockchain/transaction-type/update-asset-info-transaction).

## Constructor

``` ride
UpdateAssetInfoTransaction(name: String, assetId: ByteVector, description: String, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | name | [String](/en/ride/v5/data-types/string) | Name of the [token](/en/blockchain/token/) |
| 2 | assetId | [ByteVector](/en/ride/v5/data-types/byte-vector) | [Token ID](/en/blockchain/token/token-id) |
| 3 | description | [String](/en/ride/v5/data-types/string) | Description of the token |
| 4 | id | [ByteVector](/en/ride/v5/data-types/byte-vector) | Transaction ID |
| 5 | fee | [Int](/en/ride/v5/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 6 | timestamp | [Int](/en/ride/v5/data-types/int) | Transaction timestamp |
| 7 | version | [Int](/en/ride/v5/data-types/int) | Transaction version |
| 8 | sender | [Address](/en/ride/v5/structures/common-structures/address) | [Address](/en/blockchain/account/address) of a transaction sender |
| 9 | senderPublicKey | [ByteVector](/en/ride/v5/data-types/byte-vector) | Account public key of a sender |
| 10 | bodyBytes | [ByteVector](/en/ride/v5/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/glossary#t) |
| 11 | proofs | [List](/en/ride/v5/data-types/list)[[ByteVector](/en/ride/v5/data-types/byte-vector)] | Array of [proofs](/en/blockchain/transaction/transaction-proof) |
