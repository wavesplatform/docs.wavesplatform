# CreateAliasTransaction

Structure of an [alias transaction](/en/blockchain/transaction-type/alias-transaction).

## Constructor

``` ride
CreateAliasTransaction(alias: String, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | alias | [String](/en/ride/data-types/string) | [Alias](/en/blockchain/account/alias) |
| 3 | id | [ByteVector](/en/ride/data-types/byte-vector) | [Transaction ID](/en/blockchain/transaction/transaction-id) |
| 4 | fee | [Int](/en/ride/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 5 | timestamp | [Int](/en/ride/data-types/int) | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) |
| 6 | version | [Int](/en/ride/data-types/int) | [Transaction version](/en/blockchain/transaction/transaction-version) |
| 7 | sender | [Address](/en/ride/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the transaction sender |
| 8 | senderPublicKey | [ByteVector](/en/ride/data-types/byte-vector) | Public key of the transaction sender  |
| 9 | bodyBytes | [ByteVector](/en/ride/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/transaction/transaction-body-bytes) |
| 10 | proofs | [List](/en/ride/data-types/list)[[ByteVector](/en/ride/data-types/byte-vector)] | Array of [proofs](/en/blockchain/transaction/transaction-proof) |
