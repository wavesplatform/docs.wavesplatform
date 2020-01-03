# Order

Structure of an [order](/en/blockchain/binary-format/order-binary-format.md).

## Constructor

``` ride
Order(id: ByteVector, matcherPublicKey: ByteVector, assetPair: AssetPair, orderType: Buy|Sell, price: Int, amount: Int, timestamp: Int, expiration: Int, matcherFee: Int, matcherFeeAssetId: ByteVector|Unit, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | id | [ByteVector](/en/ride/data-types/byte-vector.md) | ID of an order |
| 2 | matcherPublicKey | [ByteVector](/en/ride/data-types/byte-vector.md) | Public key of a matcher |
| 3 | assetPair | [AssetPair](/en/ride/structures/common-structures/asset-pair.md) | Pair of [tokens](/en/blockchain/token.md) |
| 4 | orderType | Buy&#124;Sell | Type of an order — selling or buying |
| 5 | price | [Int](/en/ride/data-types/int.md) | Price of a token to exchange |
| 6 | amount | [Int](/en/ride/data-types/int.md) | Number of tokens to exchange |
| 7 | timestamp | [Int](/en/ride/data-types/int.md) | [Unix time](https://en.wikipedia.org/wiki/Unix-time) of the validation of an order by a matcher  |
| 8 | expiration | [Int](/en/ride/data-types/int.md) | Unix time when an uncompleted order will be cancelled |
| 9 | matcherFee | [Int](/en/ride/data-types/int.md) | [Transaction fee](/en/blockchain/transaction/transaction-fee.md) |
| 10 | matcherFeeAssetId | [ByteVector](/en/ride/data-types/byte-vector.md)&#124;[Unit](/en/ride/data-types/unit.md) | Token of a transaction fee.<br>It can only be [WAVES](/en/blockchain/token/waves.md) |
| 11 | sender | [Address](/en/ride/structures/common-structures/address.md) | [Address](/en/blockchain/account/address.md) of the sender of an order |
| 12 | senderPublicKey | [ByteVector](/en/ride/data-types/byte-vector.md) | Public key of the sender of an order |
| 13 | bodyBytes | [ByteVector](/en/ride/data-types/byte-vector.md) | Array of bytes of an order |
| 14 | proofs | [List](/en/ride/data-types/list.md)[[ByteVector](/en/ride/data-types/byte-vector.md)] | Array of [proofs](/en/blockchain/transaction/transaction-proof.md) |
