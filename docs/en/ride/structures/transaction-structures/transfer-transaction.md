# TransferTransaction

Structure of a [transfer transaction](/en/blockchain/transaction-type/transfer-transaction.md).

## Constructor

``` ride
TransferTransaction(feeAssetId: ByteVector|Unit, amount: Int, assetId: ByteVector|Unit, recipient: Address|Alias, attachment: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | feeAssetId | [ByteVector](/en/ride/data-types/byte-vector.md)&#124;[Unit](/en/ride/data-types/unit.md) | [Token](/en/blockchain/token.md) to pay the commission. Currently it can be [WAVES](/en/blockchain/token/waves.md) only |
| 2 | amount | [Int](/en/ride/data-types/int.md) | Amount of tokens to transfer |
| 3 | assetId | [ByteVector](/en/ride/data-types/byte-vector.md)&#124;[Unit](/en/ride/data-types/unit.md) | ID of a token |
| 4 | recipient | [Address](/en/ride/structures/common-structures/address.md)&#124;[Alias](/en/ride/structures/common-structures/alias.md) | [Address](/en/blockchain/account/address.md) or [alias](/en/blockchain/account/alias.md) of the recipient |
| 5 | attachment | [ByteVector](/en/ride/data-types/byte-vector.md) | Arbitrary data attached to transfer |
| 6 | id | [ByteVector](/en/ride/data-types/byte-vector.md) | [Transaction ID](/en/blockchain/transaction/transaction-id.md) |
| 7 | fee | [Int](/en/ride/data-types/int.md) | [Transaction fee](/en/blockchain/transaction/transaction-fee.md) |
| 8 | timestamp | [Int](/en/ride/data-types/int.md) | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp.md) |
| 9 | version | [Int](/en/ride/data-types/int.md) | [Transaction version](/en/blockchain/transaction/transaction-version.md) |
| 10 | sender | [Address](/en/ride/structures/common-structures/address.md) | [Address](/en/blockchain/account/address.md) of a transaction sender |
| 11 | senderPublicKey | [ByteVector](/en/ride/data-types/byte-vector.md) | Account public key of a sender |
| 12 | bodyBytes | [ByteVector](/en/ride/data-types/byte-vector.md) | [Transaction body bytes](/en/blockchain/transaction/transaction-body-bytes.md) |
| 13 | proofs | [List](/en/ride/data-types/list.md)[[ByteVector](/en/ride/data-types/byte-vector.md)] | Array of [proofs](/en/blockchain/transaction/transaction-proof.md) |
