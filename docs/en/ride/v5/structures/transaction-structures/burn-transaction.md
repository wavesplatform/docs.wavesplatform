# [Ride v5] BurnTransaction

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/structures/transaction-structures/burn-transaction)

Structure of a [burn transaction](/en/blockchain/transaction-type/burn-transaction).

## Constructor

``` ride
BurnTransaction(quantity: Int, assetId: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/en/ride/v5/data-types/int) | Amount of the [token](/en/blockchain/token/) to burn |
| 2 | assetId | [ByteVector](/en/ride/v5/data-types/byte-vector) | [ID of the token](/en/blockchain/token/token-id) to burn |
| 3 | id | [ByteVector](/en/ride/v5/data-types/byte-vector) | Transaction ID |
| 4 | fee | [Int](/en/ride/v5/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 5 | timestamp | [Int](/en/ride/v5/data-types/int) | Transaction timestamp |
| 6 | version | [Int](/en/ride/v5/data-types/int) | Transaction version |
| 7 | sender | [Address](/en/ride/v5/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the transaction sender |
| 8 | senderPublicKey | [ByteVector](/en/ride/v5/data-types/byte-vector) | Public key of the transaction sender  |
| 9 | bodyBytes | [ByteVector](/en/ride/v5/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/glossary#t) |
| 10 | proofs | [List](/en/ride/v5/data-types/list)[[ByteVector](/en/ride/v5/data-types/byte-vector)] | Array of [proofs](/en/blockchain/transaction/transaction-proof) |
