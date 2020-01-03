# Order

Structure of an [order](/en/blockchain/binary-format/order-binary-format).

## Constructor

``` ride
Order(id: ByteVector, matcherPublicKey: ByteVector, assetPair: AssetPair, orderType: Buy|Sell, price: Int, amount: Int, timestamp: Int, expiration: Int, matcherFee: Int, matcherFeeAssetId: ByteVector|Unit, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | id | [ByteVector](/en/ride/data-types/byte-vector) | ID of an order |
| 2 | matcherPublicKey | [ByteVector](/en/ride/data-types/byte-vector) | Public key of a matcher |
| 3 | assetPair | [AssetPair](/en/ride/structures/common-structures/asset-pair) | Pair of [tokens](/en/blockchain/token) |
| 4 | orderType | Buy&#124;Sell | Type of an order — selling or buying |
| 5 | price | [Int](/en/ride/data-types/int) | Price of a token to exchange |
| 6 | amount | [Int](/en/ride/data-types/int) | Number of tokens to exchange |
| 7 | timestamp | [Int](/en/ride/data-types/int) | [Unix time](https://en.wikipedia.org/wiki/Unix-time) of the validation of an order by a matcher  |
| 8 | expiration | [Int](/en/ride/data-types/int) | Unix time when an uncompleted order will be cancelled |
| 9 | matcherFee | [Int](/en/ride/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 10 | matcherFeeAssetId | [ByteVector](/en/ride/data-types/byte-vector)&#124;[Unit](/en/ride/data-types/unit) | Token of a transaction fee.<br>It can only be [WAVES](/en/blockchain/token/waves) |
| 11 | sender | [Address](/en/ride/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the sender of an order |
| 12 | senderPublicKey | [ByteVector](/en/ride/data-types/byte-vector) | Public key of the sender of an order |
| 13 | bodyBytes | [ByteVector](/en/ride/data-types/byte-vector) | Array of bytes of an order |
| 14 | proofs | [List](/en/ride/data-types/list)[[ByteVector](/en/ride/data-types/byte-vector)] | Array of [proofs](/en/blockchain/transaction/transaction-proof) |
