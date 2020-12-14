# [Ride v5] BlockInfo

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/structures/common-structures/block-info)

Structure of a [block](/en/blockchain/block/).

## Constructor

``` ride
BlockInfo(timestamp: Int, height: Int, baseTarget: Int, generationSignature: ByteVector, generator: Address, generatorPublicKey: ByteVector, vrf: ByteVector|Unit)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | timestamp | [Int](/en/ride/v5/data-types/int) | [Block timestamp](/en/blockchain/block/block-timestamp) |
| 2 | height | [Int](/en/ride/v5/data-types/int) | [Block height](/en/blockchain/block/block-height) |
| 3 | baseTarget | [Int](/en/ride/v5/data-types/int) | [Base target](/en/blockchain/block/block-generation/base-target) |
| 4 | generationSignature | [ByteVector](/en/ride/v5/data-types/byte-vector) | [Generation signature](/en/blockchain/block/block-generation/) |
| 5 | generator | [Address](/en/ride/v5/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the [account](/en/blockchain/account/) that created a block |
| 6 | generatorPublicKey | [ByteVector](/en/ride/v5/data-types/byte-vector) | Public key of the account that created a block |
| 7 | vrf | [ByteVector](/en/ride/v5/data-types/byte-vector)&#124;[Unit](/en/ride/v5/data-types/byte-vector) | [VRF](/en/blockchain/block/block-generation/generation-signature) for block version 5, `unit` otherwise. |
