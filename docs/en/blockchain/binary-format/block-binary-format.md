# Block binary format

> Learn more about [block](/en/blockchain/block).

Blocks are stored on the blockchain in a binary format (byte representation). [Node extensions](/en/waves-node/extensions) such as [gRPC server](/en/waves-node/extensions/grpc-server) can work directly with data in binary format.

## Version 5

Binary format of block version 5 is defined in [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto) protobuf scheme. For more information about protobuf see [Protocol Buffers Developer Guide](https://developers.google.com/protocol-buffers/docs/overview?hl=ru).

Version 5 is added in node version 1.2.0 and becomes available after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”. Versions 1.2.x are currently available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

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
| chain_id | [Chain ID](/en/blockchain/blockchain-network/chain-id) |
| reference | • For the first block of version 5, that is, at the height of activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”: `signature` of the previous block<br>• Foк the next blocks: BLAKE2b-256 hash of the previous block header |
| base_target | [Базовая цель](/ru/blockchain/block/block-generation/base-target) — переменная, используемая в алгоритме генерации блоков |
| generation_signature | [Подпись генерирования](/ru/blockchain/block/block-generation/) — переменная, используемая в алгоритме генерации блоков (32 байта) |
| feature_votes | 2 байта для каждой фичи | Список фич, за которые голосует генератор блока, см. раздел [Фичи](/ru/waves-node/features/) |
| timestamp | [Временная метка блока](/ru/blockchain/block/block-timestamp): Unix-время в миллисекундах |
| version | Версия блока: 5 |
| generator | Открытый ключ аккаунта генератора блока (32 байта) |
| reward_vote | Размер [вознаграждения за генерацию блока](/ru/blockchain/mining/mining-reward), за который голосует генератор блока |
| transactions_root | [Корневой хеш транзакций блока](/ru/blockchain/block/merkle-root) (32 байта) |
| signature | [Подпись заголовка блока](/ru/blockchain/block/block-signature) (64 байта) |
| transactions | Для каждой транзакции:<br>• Тело транзакции — до 165&nbsp;487 байт<br>• Подтверждения (`proofs`) — до 531 байта.<br>См. раздел [Бинарный формат транзакции](/ru/blockchain/binary-format/transaction-binary-format/) |

## Версия 4

| Порядковый номер поля | Поле | Тип поля | Размер поля в байтах | Комментарии |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Версия блока | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение равно 4 |
| 2 | [Временная метка блока](/ru/blockchain/block/block-timestamp) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 | Unix-время в миллисекундах |
| 3 | [Подпись](/ru/blockchain/block/block-signature) предыдущего блока | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 64 | |
| 4 | [Базовая цель](/en/blockchain/block/block-generation/base-target) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 | |
| 5 | [Подпись генерирования](/ru/blockchain/block/block-generation/) | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 | |
| 6 | Количество транзакций в блоке | [Integer](/ru/blockchain/blockchain/blockchain-data-types) | 4 | |
| 7.1 | Транзакция 1 | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | Тело транзакции — до 165&nbsp;996 байт<br>Подтверждения (`proofs`) — до 531 байта | Байты первой транзакции в [бинарном формате](/ru/blockchain/binary-format/transaction-binary-format) |
| 7.2 | Транзакция 2 | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | Тело транзакции — до 165&nbsp;996 байт<br>Подтверждения (`proofs`) — до 531 байта | Байты второй транзакции в [бинарном формате](/ru/blockchain/binary-format/transaction-binary-format) |
| ... | ... | ... | ... | ... |
| 7.[N] | Транзакция N | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | Тело транзакции — до 165&nbsp;996 байт<br>Подтверждения (`proofs`) — до 531 байта | Байты N-й транзакции в [бинарном формате](/ru/blockchain/binary-format/transaction-binary-format) |
| 8 | Количество [фич](/ru/waves-node/features/), за которые голосует генератор блока | 4 | [Integer](/ru/blockchain/blockchain/blockchain-data-types) | |
| 9.1 | Фича 1 | 2 | [Short](/ru/blockchain/blockchain/blockchain-data-types) | |
| ... | ... | ... | ... | ... |
| 9.[M] | Фича M | 2 | [Short](/ru/blockchain/blockchain/blockchain-data-types) | |
| 10 | Размер [вознаграждения за генерацию блока](/ru/blockchain/mining/mining-reward), за который голосует генератор блока | 8 | [Long](/ru/blockchain/blockchain/blockchain-data-types)| |
| 11 | Открытый ключ аккаунта генератора блока | 32 | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | |
| 12 | [Подпись блока](/en/blockchain/block/block-signature) | 64  | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)]| | |

## Версия 3

| Порядковый номер поля | Поле | Тип поля | Размер поля в байтах | Комментарии |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Версия блока | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение равно 3 |
| 2 | [Временная метка блока](/ru/blockchain/block/block-timestamp) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 | Unix-время в миллисекундах |
| 3 | [Подпись](/ru/blockchain/block/block-signature) предыдущего блока | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 64 | |
| 4 | [Базовая цель](/en/blockchain/block/block-generation/base-target) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 | |
| 5 | [Подпись генерирования](/ru/blockchain/block/block-generation/) | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 | |
| 6 | Количество транзакций в блоке | [Integer](/ru/blockchain/blockchain/blockchain-data-types) | 4 | |
| 7.1 | Транзакция 1 | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | Тело транзакции — до 165&nbsp;996 байт<br>Подтверждения (`proofs`) — до 531 байта | Байты первой транзакции в [бинарном формате](/ru/blockchain/binary-format/transaction-binary-format) |
| 7.2 | Транзакция 2 | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | Тело транзакции — до 165&nbsp;996 байт<br>Подтверждения (`proofs`) — до 531 байта | Байты второй транзакции в [бинарном формате](/ru/blockchain/binary-format/transaction-binary-format) |
| ... | ... | ... | ... | ... |
| 7.[N] | Транзакция N | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | Тело транзакции — до 165&nbsp;996 байт<br>Подтверждения (`proofs`) — до 531 байта | Байты N-й транзакции в [бинарном формате](/ru/blockchain/binary-format/transaction-binary-format) |
| 8 | Открытый ключ аккаунта генератора блока | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 | |
| 9 | [Подпись блока](/en/blockchain/block/block-signature) | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 64 | | |





## Binary format version 3

| # | Field name | Field type | Field size in bytes | Comments |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Version of the binary format of the block | Byte | 1 | The value must be 3 |
| 2 | [Block timestamp](/en/blockchain/block/block-timestamp) | Long | 8 | |
| 3 | [Block signature](/en/blockchain/block/block-signature) of the parent block | Array of bytes | 64 | |
| 4 | [Base target](/en/blockchain/block/block-generation/base-target) | Long | 8 | |
| 5 | Generation signature | Array of bytes | 32 | |
| 6 | Number of [transactions](/en/blockchain/transaction) in the [block](/en/blockchain/block) | Integer | 4 | |
| 7.1 | Transaction 1 | Array of bytes | Up to 100 | Bytes of the [binary format](/en/blockchain/binary-format/transaction-binary-format) of the first transaction |
| 7.2 | Transaction 2 | Array of bytes | Up to 100 | Bytes of the [binary format](/en/blockchain/binary-format/transaction-binary-format) of the second transaction |
| ... | ... | ... | ... | ... |
| 7.[N] | Transaction N | Array of bytes | Up to 100 | Bytes of the [binary format](/en/blockchain/binary-format/transaction-binary-format) of the N-th transaction |
| 8 | Public key of the [mining account](/en/blockchain/mining/mining-account) | Array of bytes | 32 | |
| 9 | [Block signature](/en/blockchain/block/block-signature) | Array of bytes | 64 | | |
