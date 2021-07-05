# AssetPair

Structure of a pair of [tokens](/en/blockchain/token/) of an order within the [Order](/en/ride/structures/common-structures/order) structure.

## Constructor

``` ride
AssetPair(amountAsset: ByteVector|Unit, priceAsset: ByteVector|Unit)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | amountAsset | [ByteVector](/en/ride/data-types/byte-vector)&#124;[Unit](/en/ride/data-types/unit) | The first token of a pair |
| 2 | priceAsset | [ByteVector](/en/ride/data-types/byte-vector)&#124;[Unit](/en/ride/data-types/unit) | The second token of a pair |
