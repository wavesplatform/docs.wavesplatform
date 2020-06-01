# Бинарный формат блока

> Подробнее о [блоке](/ru/blockchain/block).

Блоки хранятся на блокчейне в бинарном формате (байтовом представлении). [Расширения](/ru/waves-node/extensions) ноды, в частности [gRPC-сервер](/ru/waves-node/extensions/grpc-server), могут работать непосредственно с данными в бинарном формате.

## Версия 5

Бинарный формат блока версии 5 соответствует protobuf-схеме [block.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/block.proto). См. [Protocol Buffers Developer Guide](https://developers.google.com/protocol-buffers/docs/overview?hl=ru).

Версия 5 добавлена в версии ноды 1.2.0 и включается с активацией [фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”](/ru/waves-node/features/). В настоящее время версии 1.2.x доступны только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

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

| Поле | Описание |
| :--- | :--- |
| chain_id | [Байт сети](/ru/blockchain/blockchain-network/chain-id) |
| reference | • В первом блоке версии 5, то есть на высоте активации фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions” — `signature` предыдущего блока<br>• В последующих блоках: хеш BLAKE2b-256 заголовка предыдущего блока |
| base_target | [Базовая цель](/ru/blockchain/block/block-generation/base-target) — переменная, используемая в алгоритме генерации блоков |
| generation_signature | [Подпись генерирования](/ru/blockchain/block/block-generation/) — переменная, используемая в алгоритме генерации блоков (32 байта) |
| feature_votes | Список фич, за которые голосует генератор блока, см. раздел [Фичи](/ru/waves-node/features) |
| timestamp | [Временная метка блока](/ru/blockchain/block/block-timestamp): Unix-время в миллисекундах |
| version | Версия блока: 5 |
| generator | Открытый ключ аккаунта генератора блока (32 байта) |
| reward_vote | Размер [вознаграждения за генерацию блока](/ru/blockchain/mining/mining-reward), за который голосует генератор блока. Значение -1 означает, что генератор блока голосует за текущий размер вознаграждения |
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
| 8 | Количество [фич](/ru/waves-node/features), за которые голосует генератор блока | 4 | [Integer](/ru/blockchain/blockchain/blockchain-data-types) | |
| 9.1 | Фича 1 | 2 | [Short](/ru/blockchain/blockchain/blockchain-data-types) | |
| ... | ... | ... | ... | ... |
| 9.[M] | Фича M | 2 | [Short](/ru/blockchain/blockchain/blockchain-data-types) | |
| 10 | Размер [вознаграждения за генерацию блока](/ru/blockchain/mining/mining-reward), за который голосует генератор блока | 8 | [Long](/ru/blockchain/blockchain/blockchain-data-types)| Значение -1 означает, что генератор блока голосует за текущий размер вознаграждения |
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
