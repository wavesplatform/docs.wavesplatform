# Бинарный формат ордера

> Подробнее об ордере читайте на странице [Биржевая заявка](/ru/blockchain/order).

В [транзакции обмена версии 3](/ru/blockchain/binary-format/transaction-binary-format/exchange-transaction-binary-format#версия-4) могут использоваться версии [4](#v4), [3](#v3), [2](#v2) и [1](#v1) ордера.

В [транзакции обмена версии 2](/ru/blockchain/binary-format/transaction-binary-format/exchange-transaction-binary-format#версия-2) могут использоваться версии [3](#v3), [2](#v2) и [1](#v1) ордера.

В [транзакции обмена версии 1](/ru/blockchain/binary-format/transaction-binary-format/exchange-transaction-binary-format#версия-1) может использоваться только версия [1](#v1) ордера.

## Версия 4 <a id="v4"></a>

Бинарный формат ордера версии 4 соответствует protobuf-схеме [order.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/order.proto). См. [Protocol Buffers Developer Guide](https://developers.google.com/protocol-buffers/docs/overview?hl=ru).

Версия 4 добавлена в версии ноды 1.2.0 и включается с активацией фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”.

```protobuf
message AssetPair {
    bytes amount_asset_id = 1;
    bytes price_asset_id = 2;
};

message Order {
    enum Side {
        BUY = 0;
        SELL = 1;
    };

    int32 chain_id = 1;
    bytes sender_public_key = 2;
    bytes matcher_public_key = 3;
    AssetPair asset_pair = 4;
    Side order_side = 5;
    int64 amount = 6;
    int64 price = 7;
    int64 timestamp = 8;
    int64 expiration = 9;
    Amount matcher_fee = 10;
    int32 version = 11;
    repeated bytes proofs = 12;
};

message Amount {
    bytes asset_id = 1;
    int64 amount = 2;
};
```

| Поле | Размер | Описание |
| :--- | :--- | :--- |
| chain_id | 1 байт | [Байт сети](/ru/blockchain/blockchain-network/#байт-сети) |
| sender_public_key | 32 байта | Открытый ключ аккаунта отправителя ордера |
| matcher_public_key | 32 байта | Открытый ключ матчера |
| asset_pair.amount_asset_id | • 32 байта для ассета<br>• 0 для WAVES | ID amount-ассета |
| asset_pair.price_asset_id | • 32 байта для ассета<br>• 0 для WAVES | ID price-ассета |
| order_side | 1 байт | Тип ордера: покупка или продажа |
| amount | 8 байт | Количество amount-ассета в минимальных единицах («копейках») |
| price | 8 байт | Стоимость 1 amount-ассета, выраженная в price-ассете, умноженная на 10<sup>8</sup> |
| timestamp | 8 байт | Временная метка: Unix-время в миллисекундах |
| expiration | 8 байт | Окончание срока действия ордера: Unix-время в миллисекундах |
| matcher_fee.asset_id | • 32 байта для ассета<br>• 0 для WAVES | ID токена, в котором выражена комиссия матчера |
| matcher_fee.amount | 8 байт | [Комиссия матчера](/ru/blockchain/transaction-type/exchange-transaction#комиссия-матчера) |
| version | 1 байт | Версия ордера: 4 |
| proofs | Размер каждого подтверждения — до 64 байт,<br>до 8 подтверждений | Подтверждения ордера, используемые для проверки валидности |

## Версия 3 <a id="v3"></a>

| Порядковый номер поля | Название поля | Название JSON-поля | Тип поля | Размер поля в байтах | Описание поля |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Номер версии бинарного формата [ордера](/ru/blockchain/order) | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types)| 1 | Значение должно быть равно 3 |
| 2 | Открытый ключ отправителя ордера | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 3 | Открытый ключ [матчера](https://docs.waves.exchange/ru/waves-matcher/) | matcherPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 4.1 | Флаг токена Б |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Если токен [WAVES](/ru/blockchain/token/waves), то значение 0, иначе — 1 |
| 4.2 | [ID токена](/ru/blockchain/token/token-id) Б | amountAsset | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | Если токен не WAVES, то `S` = 32, иначе — поле не должно присутствовать в бинарном формате |
| 5.1 | Флаг токена А |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Если токен WAVES, то значение 0, иначе — 1 |
| 5.2 | ID токена А | priceAsset | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | Если токен не WAVES, то `S` = 32, иначе — поле не должно присутствовать в бинарном формате |
| 6 | Тип ордера | orderType | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Если ордер на покупку, то значение 0, если на продажу — 1 |
| 7 | Количество токена Б, которое отправитель ордера предлагает за один токен А | price | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 8 | Количество токена А, которое отправитель ордера хочет купить или продать в зависимости от типа ордера | amount | Long | 8 |  |
| 9 | Количество миллисекунд с начала [эпохи Unix](https://ru.wikipedia.org/wiki/Unix-время) до момента валидации ордера матчером | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 10 | Количество миллисекунд с начала эпохи Unix до момента [отмены](/ru/blockchain/order#cancel) невыполненного ордера | expiration | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 11 | [Комиссия матчера](/ru/blockchain/transaction-type/exchange-transaction#комиссия-матчера) | matcherFee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 12 | Флаг токена комиссии матчера |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Если токен WAVES, то значение 0, иначе — 1 |
| 13 | Токен комиссии матчера | matcherFeeAssetId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `F` | Если токен комиссии не WAVES, то `F` = 32, иначе — поле не должно присутствовать в бинарном формате |
| 14 | [Подтверждения](/ru/blockchain/transaction/transaction-proof) | proofs | Array[[Подтверждение](/ru/blockchain/transaction/transaction-proof)] | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br>`N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер N-го подтверждения в байтах.<br>Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление ордера версии 3

``` json
{
  "version": 3,
  "senderPublicKey": "FMc1iASTGwTC1tDwiKtrVHtdMkrVJ1S3rEBQifEdHnT2",
  "matcherPublicKey": "7kPFrHDiGw1rCm7LPszuECwWYL3dMf6iMifLRDJQZMzy",
  "assetPair": {
    "amountAsset": "BrjUWjndUanm5VsJkbUip8VRYy6LWJePtxya3FNv4TQa",
    "priceAsset": null
  },
  "orderType": "buy",
  "amount": 150000000,
  "timestamp": 1548660872383,
  "expiration": 1551252872383,
  "matcherFee": 300000,
  "proofs": [
    "YNPdPqEUGRW42bFyGqJ8VLHHBYnpukna3NSin26ERZargGEboAhjygenY67gKNgvP5nm5ZV8VGZW3bNtejSKGEa"
  ],
  "id": "Ho6Y16AKDrySs5VTa983kjg3yCx32iDzDHpDJ5iabXka",
  "sender": "3PEFvFmyyZC1n4sfNWq6iwAVhzUT87RTFcA",
  "price": 1799925005,
  
}
```

## Ордер версии 2 <a id="v2"></a>

| Порядковый номер поля | Название поля | Тип поля | Размер поля в байтах | Описание поля |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Номер версии бинарного формата [ордера](/ru/blockchain/order) | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 2 |
| 2 | Открытый ключ отправителя ордера | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 3 | Открытый ключ [матчера](https://docs.waves.exchange/ru/waves-matcher/) | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 4.1 | Флаг токена А | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Если токен [WAVES](/ru/blockchain/token/waves), то значение 0, иначе — 1 |
| 4.2 | [ID токена](/ru/blockchain/token/token-id) А | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | Если токен не WAVES, то `S` = 32, иначе — поле не должно присутствовать в бинарном формате |
| 5.1 | Флаг токена Б | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Если токен WAVES, то значение 0, иначе — 1 |
| 5.2 | ID токена Б | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | Если токен не WAVES, то `S` = 32, иначе — поле не должно присутствовать в бинарном формате |
| 6 | Тип ордера | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Если ордер на покупку, то значение 0, если на продажу — 1 |
| 7 | Количество токена А | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 | Количество токена А, которое отправитель ордера предлагает за один токен Б |
| 8 | Количество токена Б | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 | Количество токена Б, которое отправитель ордера хочет купить |
| 9 | Количество миллисекунд с начала [эпохи Unix](https://ru.wikipedia.org/wiki/Unix-время) до момента валидации ордера матчером | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 10 | Количество миллисекунд с начала эпохи Unix до момента [отмены](/ru/blockchain/order#cancel) невыполненного ордера | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 | Максимальное значение: время отправки ордера + 30 дней |
| 11 | [Комиссия матчера](/ru/blockchain/transaction-type/exchange-transaction#комиссия-матчера) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 12 | [Подтверждения](/ru/blockchain/transaction/transaction-proof) | Array[[Подтверждение](/ru/blockchain/transaction/transaction-proof)] | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br>`N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер N-го подтверждения в байтах.<br>Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## Ордер версии 1 <a id="v1"></a>

| Порядковый номер поля | Название поля | Тип поля | Размер поля в байтах | Описание поля |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Открытый ключ отправителя [ордера](/ru/blockchain/order) | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 2 | Открытый ключ [матчера](https://docs.waves.exchange/ru/waves-matcher/) | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 3.1 | Флаг токена A | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Если [WAVES](/ru/blockchain/token/waves), то значение 0, иначе — 1 |
| 3.2 | [ID токена](/ru/blockchain/token/token-id) А | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | Если токен не WAVES, то `S` = 32, иначе — поле не должно присутствовать в бинарном формате |
| 4.1 | Флаг токена Б | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Если WAVES, то значение 0, иначе — 1 |
| 4.2 | ID токена Б | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | Если токен не WAVES, то `S` = 32, иначе — поле не должно присутствовать в бинарном формате |
| 5 | Тип ордера | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Если ордер на покупку, то значение 0, если на продажу — 1 |
| 6 | Количество токена А, которое отправитель ордера предлагает за единицу токена Б  | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 7 | Количество токена Б, которое отправитель ордера хочет купить | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 8 | Количество миллисекунд с начала [эпохи Unix](https://ru.wikipedia.org/wiki/Unix-время) до момента валидации ордера матчером | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 9 | Количество миллисекунд с начала эпохи Unix до момента [отмены](/ru/blockchain/order#cancel) невыполненного ордера | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 10 | [Комиссия матчера](/ru/blockchain/transaction-type/exchange-transaction#комиссия-матчера) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 11 | Подпись отправителя ордера | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 64 |  |
