# ReissueTransaction

Structure of a [reissue transaction](/en/blockchain/transaction-type/reissue-transaction.md).

## Constructor

``` ride
ReissueTransaction(quantity: Int, assetId: ByteVector, reissuable: Boolean, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/en/ride/data-types/int.md) | Amount of the [token](/en/blockchain/token.md) |
| 2 | assetId | [ByteVector](/en/ride/data-types/byte-vector.md) | [Token ID](/en/blockchain/token/token-id.md) |
| 3 | reissuable | [Boolean](/en/ride/data-types/boolean.md) | Reissue flag |
| 4 | id | [ByteVector](/en/ride/data-types/byte-vector.md) | [Transaction ID](/en/blockchain/transaction/transaction-id.md) |
| 5 | fee | [Int](/en/ride/data-types/int.md) | [Transaction fee](/en/blockchain/transaction/transaction-fee.md) |
| 6 | timestamp | [Int](/en/ride/data-types/int.md) | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp.md) |
| 7 | version | [Int](/en/ride/data-types/int.md) | [Transaction version](/en/blockchain/transaction/transaction-version.md) |
| 8 | sender | [Address](/en/ride/structures/common-structures/address.md) | [Address](/en/blockchain/account/address.md) of the transaction sender |
| 9 | senderPublicKey | [ByteVector](/en/ride/data-types/byte-vector.md) | Public key of the transaction sender |
| 10 | bodyBytes | [ByteVector](/en/ride/data-types/byte-vector.md) | [Transaction body bytes](/en/blockchain/transaction/transaction-body-bytes.md) |
| 11 | proofs | [List](/en/ride/data-types/list.md)[[ByteVector](/en/ride/data-types/byte-vector.md)] | [Proofs](/en/blockchain/transaction/transaction-proof.md) |
