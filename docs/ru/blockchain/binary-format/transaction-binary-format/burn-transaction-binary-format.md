# Бинарный формат транзакции сжигания токена

> Узнать больше о [транзакции сжигания токена](/ru/blockchain/transaction-type/burn-transaction).

## Версия 3

Бинарный формат версии 3 соответствует protobuf-схеме [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto). Описание полей, общих для всех типов транзакций, представлено в разделе [Бинарный формат транзакции](/ru/blockchain/binary-format/transaction-binary-format/).

Версия 3 добавлена в версии ноды 1.2.0 и включается с активацией фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”. В настоящее время версии 1.2.x доступны только на [Stagenet](/ru/blockchain/blockchain-network/).

```
message BurnTransactionData {
    Amount asset_amount = 1;
};

message Amount {
    bytes asset_id = 1;
    int64 amount = 2;
};
```

| Поле | Размер | Описание |
| :--- | :--- | :--- |
| asset_amount.amount | 8 байт | Количество сжигаемого токена в минимальных единицах («копейках») токена |
| asset_amount.asset_id | 32 байта | ID сжигаемого токена |

## Версия 2

| № | Поле | Название JSON-поля |Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии | | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Указывает, что [версия транзакции](/ru/blockchain/transaction/transaction-version) является второй или выше.<br>Значение должно быть равно 0 |
| **2** | [ID типа транзакции](/ru/blockchain/transaction-type/) |type| [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 6 |
| **3** | [Версия транзакции](/ru/blockchain/transaction/transaction-version) |version| [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 2 |
| **4** | [Байт сети](/ru/blockchain/blockchain-network/#байт-сети) |chainId| [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 87 — для Mainnet<br>84 — для Testnet<br>83 — для Stagenet |
| **5** | Открытый ключ аккаунта отправителя транзакции |senderPublicKey| Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| **6** | [ID](/ru/blockchain/token/token-id) сжигаемого токена |assetId| Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| **7** | Количество сжигаемых токенов |amount| [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **8** | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **9** | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) |timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 10 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) |proofs| [Подтверждения](/ru/blockchain/transaction/transaction-proof) | `S` | Если массив пустой, то `S`= 3. <br>Если массив не пустой, то `S`= 3 + 2 × `N` + \(`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>\), <br>где <br>`N` — количество подтверждений в массиве, <br>`P`<sub>n</sub> — размер `N`-го подтверждения в байтах.<br> Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

> Поля, номера которых выделены жирным шрифтом, составляют байты тела транзакции.

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesnodes.com/transactions/info/csr25XQHT1c965Fg7cY2vJ7XHYVsudPYrUbdaFqgaqL) в Node API.

## Версия 1

| № | Поле | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- |
| **1** | [ID типа транзакции](/ru/blockchain/transaction-type/) | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 6 |
| **2** | Открытый ключ аккаунта отправителя транзакции | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| **3** | [ID](/ru/blockchain/token/token-id) сжигаемого токена | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| **4** | Количество сжигаемых токенов | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **5** | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **6** | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 7 | [Подпись транзакции](/ru/blockchain/transaction/transaction-signature) | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 64 |  |  |

> Поля, номера которых выделены жирным шрифтом, составляют байты тела транзакции.
