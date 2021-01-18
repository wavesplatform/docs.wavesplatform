# MassTransferTransaction

Structure of a [mass transfer transaction](/en/blockchain/transaction-type/mass-transfer-transaction).

## Constructor

``` ride
MassTransferTransaction(assetId: ByteVector|Unit, totalAmount: Int, transfers: List[Transfer], transferCount: Int, attachment: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/en/ride/data-types/byte-vector)&#124;[Unit](/en/ride/data-types/unit) | [Token ID](/en/blockchain/token/token-id) |
| 2 | totalAmount | [Int](/en/ride/data-types/int) | Amount of the token to be transferred |
| 3 | transfers | [List](/en/ride/data-types/list)[[Transfer](/en/ride/structures/common-structures/transfer)] | Transfers |
| 4 | transferCount | [Int](/en/ride/data-types/int) | Number of transfers |
| 5 | attachment | [ByteVector](/en/ride/data-types/byte-vector) | Optional data attached to the transaction. This field is often used to attach a comment to the transaction.<br>The maximum data size is 140 bytes |
| 6 | id | [ByteVector](/en/ride/data-types/byte-vector) | Transaction ID |
| 7 | fee | [Int](/en/ride/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 8 | timestamp | [Int](/en/ride/data-types/int) | Transaction timestamp |
| 9 | version | [Int](/en/ride/data-types/int) | Transaction version |
| 10 | sender | [Address](/en/ride/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the transaction sender |
| 11 | senderPublicKey | [ByteVector](/en/ride/data-types/byte-vector) | Public key of the transaction sender |
| 12 | bodyBytes | [ByteVector](/en/ride/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/glossary#t) |
| 13 | proofs | [List](/en/ride/data-types/list)[[ByteVector](/en/ride/data-types/byte-vector)] | [Proofs](/en/blockchain/transaction/transaction-proof) |
