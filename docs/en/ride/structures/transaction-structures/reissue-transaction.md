# ReissueTransaction

Structure of a [reissue transaction](/en/blockchain/transaction-type/reissue-transaction).

## Constructor

``` ride
ReissueTransaction(quantity: Int, assetId: ByteVector, reissuable: Boolean, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/en/ride/data-types/int) | Amount of the [token](/en/blockchain/token/) |
| 2 | assetId | [ByteVector](/en/ride/data-types/byte-vector) | [Token ID](/en/blockchain/token/token-id) |
| 3 | reissuable | [Boolean](/en/ride/data-types/boolean) | Reissue flag |
| 4 | id | [ByteVector](/en/ride/data-types/byte-vector) | [Transaction ID](/en/blockchain/transaction/transaction-id) |
| 5 | fee | [Int](/en/ride/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 6 | timestamp | [Int](/en/ride/data-types/int) | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) |
| 7 | version | [Int](/en/ride/data-types/int) | [Transaction version](/en/blockchain/transaction/transaction-version) |
| 8 | sender | [Address](/en/ride/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the transaction sender |
| 9 | senderPublicKey | [ByteVector](/en/ride/data-types/byte-vector) | Public key of the transaction sender |
| 10 | bodyBytes | [ByteVector](/en/ride/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/transaction/transaction-body-bytes) |
| 11 | proofs | [List](/en/ride/data-types/list)[[ByteVector](/en/ride/data-types/byte-vector)] | [Proofs](/en/blockchain/transaction/transaction-proof) |
