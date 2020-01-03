# BurnTransaction

Structure of a [burn transaction](/en/blockchain/transaction-type/burn-transaction.md).

## Constructor

``` ride
BurnTransaction(quantity: Int, assetId: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/en/ride/data-types/int.md) | Amount of the [token](/en/blockchain/token.md) to burn |
| 2 | assetId | [ByteVector](/en/ride/data-types/byte-vector.md) | [ID of the token](/en/blockchain/token/token-id.md) to burn |
| 3 | id | [ByteVector](/en/ride/data-types/byte-vector.md) | [Transaction ID](/en/blockchain/transaction/transaction-id.md) |
| 4 | fee | [Int](/en/ride/data-types/int.md) | [Transaction fee](/en/blockchain/transaction/transaction-fee.md) |
| 5 | timestamp | [Int](/en/ride/data-types/int.md) | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp.md) |
| 6 | version | [Int](/en/ride/data-types/int.md) | [Transaction version](/en/blockchain/transaction/transaction-version.md) |
| 7 | sender | [Address](/en/ride/structures/common-structures/address.md) | [Address](/en/blockchain/account/address.md) of the transaction sender |
| 8 | senderPublicKey | [ByteVector](/en/ride/data-types/byte-vector.md) | Public key of the transaction sender  |
| 9 | bodyBytes | [ByteVector](/en/ride/data-types/byte-vector.md) | [Transaction body bytes](/en/blockchain/transaction/transaction-body-bytes.md) |
| 10 | proofs | [List](/en/ride/data-types/list.md)[[ByteVector](/en/ride/data-types/byte-vector.md)] | Array of [proofs](/en/blockchain/transaction/transaction-proof.md) |
