# MassTransferTransaction

Structure of a [mass transfer transaction](/en/blockchain/transaction-type/mass-transfer-transaction.md).

## Constructor

``` ride
MassTransferTransaction(feeAssetId: ByteVector|Unit, assetId: ByteVector|Unit, totalAmount: Int, transfers: List[Transfer], transferCount: Int, attachment: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | feeAssetId | [ByteVector](/en/ride/data-types/byte-vector.md)&#124;[Unit](/en/ride/data-types/unit.md) | [Transaction fee](/en/blockchain/transaction/transaction-fee.md) token.<br>Only [WAVES](/en/blockchain/token/waves.md) is currently allowed |
| 2 | assetId | [ByteVector](/en/ride/data-types/byte-vector.md)&#124;[Unit](/en/ride/data-types/unit.md) | [Token ID](/en/blockchain/token/token-id.md) |
| 3 | totalAmount | [Int](/en/ride/data-types/int.md) | Amount of the token to be transferred |
| 4 | transfers | [List](/en/ride/data-types/list.md)[[Transfer](/en/ride/structures/common-structures/transfer.md)] | Transfers |
| 5 | transferCount | [Int](/en/ride/data-types/int.md) | Number of transfers |
| 6 | attachment | [ByteVector](/en/ride/data-types/byte-vector.md) | Optional data attached to the transaction. This field is often used to attach a comment to the transaction.<br>The maximum data size is 140 bytes |
| 7 | id | [ByteVector](/en/ride/data-types/byte-vector.md) | [Transaction ID](/en/blockchain/transaction/transaction-id.md) |
| 8 | fee | [Int](/en/ride/data-types/int.md) | [Transaction fee](/en/blockchain/transaction/transaction-fee.md) |
| 9 | timestamp | [Int](/en/ride/data-types/int.md) | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp.md) |
| 10 | version | [Int](/en/ride/data-types/int.md) | [Transaction version](/en/blockchain/transaction/transaction-version.md) |
| 11 | sender | [Address](/en/ride/structures/common-structures/address.md) | [Address](/en/blockchain/account/address.md) of the transaction sender |
| 12 | senderPublicKey | [ByteVector](/en/ride/data-types/byte-vector.md) | Public key of the transaction sender |
| 13 | bodyBytes | [ByteVector](/en/ride/data-types/byte-vector.md) | [Transaction body bytes](/en/blockchain/transaction/transaction-body-bytes.md) |
| 14 | proofs | [List](/en/ride/data-types/list.md)[[ByteVector](/en/ride/data-types/byte-vector.md)] | [Proofs](/en/blockchain/transaction/transaction-proof.md) |
