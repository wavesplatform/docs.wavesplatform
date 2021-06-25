# [Ride v4 and v3] BlockInfo

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/structures/common-structures/block-info)

Structure of a [block](/en/blockchain/block/).

## Constructor

For [Standard library](/en/ride/script/standard-library) **version 3**:

``` ride
BlockInfo(timestamp: Int, height: Int, baseTarget: Int, generationSignature: ByteVector, generator: Address, generatorPublicKey: ByteVector)
```

For Standard library **version 4**:

``` ride
BlockInfo(timestamp: Int, height: Int, baseTarget: Int, generationSignature: ByteVector, generator: Address, generatorPublicKey: ByteVector, vrf: ByteVector|Unit)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | timestamp | [Int](/en/ride/v4/data-types/int) | [Block timestamp](/en/blockchain/block/block-timestamp) |
| 2 | height | [Int](/en/ride/v4/data-types/int) | [Block height](/en/blockchain/block/block-height) |
| 3 | baseTarget | [Int](/en/ride/v4/data-types/int) | [Base target](/en/blockchain/block/block-generation/base-target) |
| 4 | generationSignature | [ByteVector](/en/ride/v4/data-types/byte-vector) | [Generation signature](/en/blockchain/block/block-generation/) |
| 5 | generator | [Address](/en/ride/v4/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the [account](/en/blockchain/account/) that created a block |
| 6 | generatorPublicKey | [ByteVector](/en/ride/v4/data-types/byte-vector) | Public key of the account that created a block |
| 7 | vrf | [ByteVector](/en/ride/v4/data-types/byte-vector)&#124;[Unit](/en/ride/v4/data-types/byte-vector) | [VRF](/en/blockchain/block/block-generation/generation-signature) for block version 5, `unit` otherwise.<br>The field is added in Standard library version 4 |
