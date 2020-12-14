# [Ride v5] MassTransferTransaction

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/structures/transaction-structures/mass-transfer-transaction)

Structure of a [mass transfer transaction](/en/blockchain/transaction-type/mass-transfer-transaction).

## Constructor

``` ride
MassTransferTransaction(feeAssetId: ByteVector|Unit, assetId: ByteVector|Unit, totalAmount: Int, transfers: List[Transfer], transferCount: Int, attachment: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | feeAssetId | [ByteVector](/en/ride/v5/data-types/byte-vector)&#124;[Unit](/en/ride/v5/data-types/unit) | [Transaction fee](/en/blockchain/transaction/transaction-fee) token.<br>Only [WAVES](/en/blockchain/token/waves) is currently allowed |
| 2 | assetId | [ByteVector](/en/ride/v5/data-types/byte-vector)&#124;[Unit](/en/ride/v5/data-types/unit) | [Token ID](/en/blockchain/token/token-id) |
| 3 | totalAmount | [Int](/en/ride/v5/data-types/int) | Amount of the token to be transferred |
| 4 | transfers | [List](/en/ride/v5/data-types/list)[[Transfer](/en/ride/v5/structures/common-structures/transfer)] | Transfers |
| 5 | transferCount | [Int](/en/ride/v5/data-types/int) | Number of transfers |
| 6 | attachment | [ByteVector](/en/ride/v5/data-types/byte-vector) | Optional data attached to the transaction. This field is often used to attach a comment to the transaction.<br>The maximum data size is 140 bytes |
| 7 | id | [ByteVector](/en/ride/v5/data-types/byte-vector) | Transaction ID |
| 8 | fee | [Int](/en/ride/v5/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 9 | timestamp | [Int](/en/ride/v5/data-types/int) | Transaction timestamp |
| 10 | version | [Int](/en/ride/v5/data-types/int) | Transaction version |
| 11 | sender | [Address](/en/ride/v5/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the transaction sender |
| 12 | senderPublicKey | [ByteVector](/en/ride/v5/data-types/byte-vector) | Public key of the transaction sender |
| 13 | bodyBytes | [ByteVector](/en/ride/v5/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/glossary#t) |
| 14 | proofs | [List](/en/ride/v5/data-types/list)[[ByteVector](/en/ride/v5/data-types/byte-vector)] | [Proofs](/en/blockchain/transaction/transaction-proof) |
