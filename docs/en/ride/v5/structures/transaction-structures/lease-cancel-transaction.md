# LeaseCancelTransaction

Structure of a [lease cancel transaction](/en/blockchain/transaction-type/lease-cancel-transaction).

### Constructor

``` ride
LeaseCancelTransaction(leaseId: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

### Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | leaseId | [ByteVector](/en/ride/v5/data-types/byte-vector) | Leasing ID |
| 2 | id | [ByteVector](/en/ride/v5/data-types/byte-vector) | Transaction ID |
| 3 | fee | [Int](/en/ride/v5/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 4 | timestamp | [Int](/en/ride/v5/data-types/int) | Transaction timestamp |
| 5 | version | [Int](/en/ride/v5/data-types/int) | Transaction version |
| 6 | sender | [Address](/en/ride/v5/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the transaction sender |
| 7 | senderPublicKey | [ByteVector](/en/ride/v5/data-types/byte-vector) | Public key of the transaction sender |
| 8 | bodyBytes | [ByteVector](/en/ride/v5/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/glossary#t) |
| 9 | proofs | [List](/en/ride/v5/data-types/list)[[ByteVector](/en/ride/v5/data-types/byte-vector)] | [Proofs](/en/blockchain/transaction/transaction-proof) |
