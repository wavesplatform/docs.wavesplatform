# ReissueTransaction

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/structures/transaction-structures/reissue-transaction)

Structure of a [reissue transaction](/en/blockchain/transaction-type/reissue-transaction).

## Constructor

``` ride
ReissueTransaction(quantity: Int, assetId: ByteVector, reissuable: Boolean, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/en/ride/v5/data-types/int) | Amount of the [token](/en/blockchain/token/) |
| 2 | assetId | [ByteVector](/en/ride/v5/data-types/byte-vector) | [Token ID](/en/blockchain/token/token-id) |
| 3 | reissuable | [Boolean](/en/ride/v5/data-types/boolean) | Reissue flag |
| 4 | id | [ByteVector](/en/ride/v5/data-types/byte-vector) | Transaction ID |
| 5 | fee | [Int](/en/ride/v5/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 6 | timestamp | [Int](/en/ride/v5/data-types/int) | Transaction timestamp |
| 7 | version | [Int](/en/ride/v5/data-types/int) | Transaction version |
| 8 | sender | [Address](/en/ride/v5/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the transaction sender |
| 9 | senderPublicKey | [ByteVector](/en/ride/v5/data-types/byte-vector) | Public key of the transaction sender |
| 10 | bodyBytes | [ByteVector](/en/ride/v5/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/glossary#t) |
| 11 | proofs | [List](/en/ride/v5/data-types/list)[[ByteVector](/en/ride/v5/data-types/byte-vector)] | [Proofs](/en/blockchain/transaction/transaction-proof) |
