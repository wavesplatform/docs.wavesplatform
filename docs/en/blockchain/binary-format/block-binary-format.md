# Block binary format

> Learn more about [block](/en/blockchain/block/).

Blocks are stored on the blockchain in a binary format (byte representation). [Node extensions](/en/waves-node/extensions/) such as [gRPC server](/en/waves-node/extensions/grpc-server/) can work directly with data in binary format.

## Version 5

Binary format of block version 5 is defined in [block.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/block.proto) protobuf scheme. For more information about protobuf see [Protocol Buffers Developer Guide](https://developers.google.com/protocol-buffers/docs/overview?hl=ru).

Version 5 is enabled by feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.

```protobuf
message Block {
    message Header {
        int32 chain_id = 1;
        bytes reference = 2;
        int64 base_target = 3;
        bytes generation_signature = 4;
        repeated uint32 feature_votes = 5;
        int64 timestamp = 6;
        int32 version = 7;
        bytes generator = 8;
        int64 reward_vote = 9;
        bytes transactions_root = 10;
    }
 
    Header header = 1;
    bytes signature = 2;
    repeated SignedTransaction transactions = 3;
}
```

| Field | Description |
| :--- | :--- |
| chain_id | [Chain ID](/en/blockchain/blockchain-network/#chain-id) |
| reference | • For the first block of version 5, that is, at the height of activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”: `signature` of the previous block.<br>• For the next blocks: BLAKE2b-256 hash of the previous block header |
| base_target | [Base target](/en/blockchain/block/block-generation/base-target): а variable that is used in the block generation algorithm |
| generation_signature | [Generation signature](/en/blockchain/block/block-generation/): а variable that is used in the block generation algorithm (32 bytes) |
| feature_votes | List of features for which the block generator votes. See the [Features](/en/waves-node/features/) |
| timestamp | [Block timestamp](/en/blockchain/block/block-timestamp): Unix time in milliseconds |
| version | Block version: 5 |
| generator | Block generator’s account public key (32 bytes) |
| reward_vote | [Block generation reward](/en/blockchain/mining/mining-reward) for which the block generator votes. -1 means that block generator votes for the current reward size |
| transactions_root | [Transactions Root Hash](/en/blockchain/block/merkle-root) (32 bytes) |
| signature | [Block header signature](/en/blockchain/block/block-signature) (64 bytes) |
| transactions | For each transaction:<br>• Body bytes: up to 165,487 bytes<br>• Proofs: up to 531 bytes.<br>See the [Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/) article |

## Version 4

| # | Field | Field type | Field size in bytes | Comments |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Block version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | The value must be 4 |
| 2 | [Block timestamp](/en/blockchain/block/block-timestamp) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | Unix time in milliseconds |
| 3 | [Signature](/en/blockchain/block/block-signature) of the previous block | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 64 | |
| 4 | [Base target](/en/blockchain/block/block-generation/base-target) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 5 | [Genaration signature](/en/blockchain/block/block-generation/) | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| 6 | Number of transactions in the block | [Integer](/en/blockchain/blockchain/blockchain-data-types) | 4 | |
| 7.1 | Transaction 1 | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | Body bytes: up to 165,996 bytes<br>Proofs: up to 531 bytes | Bytes of the 1st transaction in [binary format](/en/blockchain/binary-format/transaction-binary-format/) |
| 7.2 | Transaction 2 | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | Body bytes: up to 165,996 bytes<br>Proofs: up to 531 bytes| Bytes of the 2nd transaction in binary format |
| ... | ... | ... | ... | ... |
| 7.[N] | Transaction N | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | Body bytes: up to 165,996 bytes<br>Proofs: up to 531 bytes | Bytes of the Nth transaction in binary format |
| 8 | Number of [features](/en/waves-node/features/) for which the block generator votes | 4 | [Integer](/en/blockchain/blockchain/blockchain-data-types) | |
| 9.1 | Feature 1 | 2 | [Short](/en/blockchain/blockchain/blockchain-data-types) | |
| ... | ... | ... | ... | ... |
| 9.[M] | Feature M | 2 | [Short](/en/blockchain/blockchain/blockchain-data-types) | |
| 10 | [Block generation reward](/en/blockchain/mining/mining-reward) for which the block generator votes | 8 | [Long](/en/blockchain/blockchain/blockchain-data-types)| -1 means that block generator votes for the current reward size |
| 11 | Block generator’s account public key | 32 | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | |
| 12 | [Block signature](/en/blockchain/block/block-signature) | 64  | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)]| | |

## Version 3

| # | Field | Field type | Field size in bytes | Comments |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Block version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | The value must be 3 |
| 2 | [Block timestamp](/en/blockchain/block/block-timestamp) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | Unix time in milliseconds |
| 3 | [Signature](/en/blockchain/block/block-signature) of the previous block | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 64 | |
| 4 | [Base target](/en/blockchain/block/block-generation/base-target) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 5 | [Generation signature](/en/blockchain/block/block-generation/) | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| 6 | Number of transactions in the block | [Integer](/en/blockchain/blockchain/blockchain-data-types) | 4 | |
| 7.1 | Transaction 1 | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | Body bytes: up to 165,996 bytes<br>Proofs: up to 531 bytes | Bytes of the 1st transaction in [binary format](/en/blockchain/binary-format/transaction-binary-format/) |
| 7.2 | Transaction 2 | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | Body bytes: up to 165,996 bytes<br>Proofs: up to 531 bytes | Bytes of the 2nd transaction in binary format |
| ... | ... | ... | ... | ... |
| 7.[N] | Transaction N | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | Body bytes: up to 165,996 bytes<br>Proofs: up to 531 bytes | Bytes of the Nth transaction in binary format |
| 8 | Block generator’s account public key | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| 9 | [Block signature](/en/blockchain/block/block-signature) | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 64 | | |
