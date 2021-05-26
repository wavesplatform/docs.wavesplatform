# [Ride v4 and v3] AssetPair

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/structures/common-structures/asset-pair)

Structure of a pair of [tokens](/en/blockchain/token/) of an order.

## Constructor

``` ride
AssetPair(amountAsset: ByteVector|Unit, priceAsset: ByteVector|Unit)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | amountAsset | [ByteVector](/en/ride/data-types/byte-vector)&#124;[Unit](/en/ride/data-types/unit) | The first token of a pair |
| 2 | priceAsset | [ByteVector](/en/ride/data-types/byte-vector)&#124;[Unit](/en/ride/data-types/unit) | The second token of a pair |
