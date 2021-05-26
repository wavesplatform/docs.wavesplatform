# [Ride v4 and v3] TransferTransaction

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/structures/transaction-structures/transfer-transaction)

Structure of a [Transfer transaction](/en/blockchain/transaction-type/transfer-transaction).

## Constructor

``` ride
TransferTransaction(feeAssetId: ByteVector|Unit, amount: Int, assetId: ByteVector|Unit, recipient: Address|Alias, attachment: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | feeAssetId | [ByteVector](/en/ride/data-types/byte-vector)&#124;[Unit](/en/ride/data-types/unit) | [Token](/en/blockchain/token/) to pay the commission. Currently it can be [WAVES](/en/blockchain/token/waves) only |
| 2 | amount | [Int](/en/ride/data-types/int) | Amount of tokens to transfer |
| 3 | assetId | [ByteVector](/en/ride/data-types/byte-vector)&#124;[Unit](/en/ride/data-types/unit) | ID of a token |
| 4 | recipient | [Address](/en/ride/structures/common-structures/address)&#124;[Alias](/en/ride/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the recipient |
| 5 | attachment | [ByteVector](/en/ride/data-types/byte-vector) | Arbitrary data attached to transfer.<br>The maximum data size is 140 bytes |
| 6 | id | [ByteVector](/en/ride/data-types/byte-vector) | Transaction ID |
| 7 | fee | [Int](/en/ride/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 8 | timestamp | [Int](/en/ride/data-types/int) | Transaction timestamp |
| 9 | version | [Int](/en/ride/data-types/int) | Transaction version |
| 10 | sender | [Address](/en/ride/structures/common-structures/address) | [Address](/en/blockchain/account/address) of a transaction sender |
| 11 | senderPublicKey | [ByteVector](/en/ride/data-types/byte-vector) | Account public key of a sender |
| 12 | bodyBytes | [ByteVector](/en/ride/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/glossary#t) |
| 13 | proofs | [List](/en/ride/data-types/list)[[ByteVector](/en/ride/data-types/byte-vector)] | Array of [proofs](/en/blockchain/transaction/transaction-proof) |
