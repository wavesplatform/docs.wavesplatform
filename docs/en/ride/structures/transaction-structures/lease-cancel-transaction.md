# LeaseCancelTransaction

Structure of a [lease cancel transaction](/en/blockchain/transaction-type/lease-cancel-transaction).

### Constructor

``` ride
LeaseCancelTransaction(leaseId: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

### Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | leaseId | [ByteVector](/en/ride/data-types/byte-vector) | Leasing ID |
| 2 | id | [ByteVector](/en/ride/data-types/byte-vector) | [Transaction ID](/en/blockchain/transaction/transaction-id) |
| 3 | fee | [Int](/en/ride/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 4 | timestamp | [Int](/en/ride/data-types/int) | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) |
| 5 | version | [Int](/en/ride/data-types/int) | [Transaction version](/en/blockchain/transaction/transaction-version) |
| 6 | sender | [Address](/en/ride/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the transaction sender |
| 7 | senderPublicKey | [ByteVector](/en/ride/data-types/byte-vector) | Public key of the transaction sender |
| 8 | bodyBytes | [ByteVector](/en/ride/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/transaction/transaction-body-bytes) |
| 9 | proofs | [List](/en/ride/data-types/list)[[ByteVector](/en/ride/data-types/byte-vector)] | [Proofs](/en/blockchain/transaction/transaction-proof) |
