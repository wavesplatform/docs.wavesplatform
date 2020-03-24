# BlockInfo

Structure of a [block](/en/blockchain/block).

## Constructor

``` ride
BlockInfo(timestamp: Int, height: Int, baseTarget: Int, generationSignature: ByteVector, generator: Address, generatorPublicKey: ByteVector, transactionsRoot: ByteVector)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | timestamp | [Int](/en/ride/data-types/int) | [Block timestamp](/en/blockchain/block/block-timestamp) |
| 2 | height | [Int](/en/ride/data-types/int) | [Block height](/en/blockchain/block/block-height) |
| 3 | baseTarget | [Int](/en/ride/data-types/int) | [Base target](/en/blockchain/block/block-generation/base-target) |
| 4 | generationSignature | [ByteVector](/en/ride/data-types/byte-vector) | Signature of a key block |
| 5 | generator | [Address](/en/ride/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the [account](/en/blockchain/account) that created a block |
| 6 | generatorPublicKey | [ByteVector](/en/ride/data-types/byte-vector) | Public key of the account that created a block |
| 7 | transactionsRoot | [ByteVector](/en/ride/data-types/byte-vector) | [Transactions root hash](/en/blockchain/block/merkle-root).<br>The field introduced in [Standard library](/en/ride/script/standard-library) **version 4** that is currenlty available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only |
