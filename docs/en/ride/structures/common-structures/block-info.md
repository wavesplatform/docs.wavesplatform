# BlockInfo

Structure of a [block](/en/blockchain/block.md).

## Constructor

``` ride
BlockInfo(timestamp: Int, height: Int, baseTarget: Int, generationSignature: ByteVector, generator: Address, generatorPublicKey: ByteVector)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | timestamp | [Int](/en/ride/data-types/int.md) | [Block timestamp](/en/blockchain/block/block-timestamp.md) |
| 2 | height | [Int](/en/ride/data-types/int.md) | [Block height](/en/blockchain/block/block-height.md) |
| 3 | baseTarget | [Int](/en/ride/data-types/int.md) | [Base target](/en/blockchain/block/block-generation/base-target.md) |
| 4 | generationSignature | [ByteVector](/en/ride/data-types/byte-vector.md) | Signature of a key block |
| 5 | generator | [Address](/en/ride/structures/common-structures/address.md) | [Address](/en/blockchain/account/address.md) of the [account](/en/blockchain/account.md) that created a block |
| 6 | generatorPublicKey | [ByteVector](/en/ride/data-types/byte-vector.md) | Public key of the account that created a block |
