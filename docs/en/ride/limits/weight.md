# Data Weight

The weight of each value approximately corresponds to its size in bytes. Weight is used in [limitations](#limitations) on creating and comparing values.

## Weight Calculation

| Data type | Weight of value |
| :--- | :--- |
| Boolean | 1 |
| BigInt | 64 |
| ByteVector | Size in bytes |
| Int | 8 |
| List | See [Weight of List](#weight-of-list) |
| String | Size in bytes |
| Structure | See [Weight of Tuple or Structure](#weight-of-tuple-or-structure) |
| Tuple | See [Weight of Tuple or Structure](#weight-of-tuple-or-structure) |
| Unit | 40 |

### Weight of List

The weight of the list is calculated as follows:

W<sub>list</sub> = 20 + 20 × Q + W<sub>elems</sub>

where:

* Q is a number of elements.
* W<sub>elems</sub> is a total weight of elements.

### Weight of Tuple or Structure

The weight of the tuple or structure is calculated as follows:

W<sub>struct</sub> = 40 + 30 × Q + W<sub>fields</sub>

where:

* Q is a number of fields.
* W<sub>fields</sub> is a total weight of fields.

### Example

Let's consider the [AssetPair](/en/ride/structures/common-structures/asset-pair) structure:

```
AssetPair(amountAsset: ByteVector|Unit, priceAsset: ByteVector|Unit)
```

An asset ID is a `ByteVector` of 32 bytes, its weight is 32. If both assets in the pair are not WAVES, then the weight of the `AssetPair` structure is:

W<sub>AssetPair</sub> = 40 + 30 × 2 + (32 + 32) = 164

If one of the assets is WAVES, then the corresponding field is of type `Unit` and its weight is 40. Then the weight of the `AssetPair` structure is:

W<sub>AssetPair</sub> = 40 + 30 × 2 + (32 + 40) = 172

## Limitations

* The maximum weight of the value is 307200.
* A comparison of values is not allowed if the weight of each value exceeds 13000.

If the limitations are exceeded, the script fails.
