# Бинарный формат транзакции закрытия лизинга

> Узнать больше о [транзакции закрытия лизинга](/ru/blockchain/transaction-type/lease-cancel-transaction).

## Версия 3

Бинарный формат версии 3 соответствует protobuf-схеме [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto). Описание полей, общих для всех типов транзакций, представлено в разделе [Бинарный формат транзакции](/ru/blockchain/binary-format/transaction-binary-format/).

Версия 3 добавлена в версии ноды 1.2.0 и включается с активацией фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”.

```
message LeaseCancelTransactionData {
    bytes lease_id = 1;
};
```

| Поле | Размер | Описание |
| :--- | :--- | :--- |
| lease_id | 32 байта | Идентификатор лизинга |

## Версия 2

| № | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Указывает, что версия транзакции является второй или выше.<br>Значение должно быть равно 0 |
| **2** | [ID типа транзакции](/ru/blockchain/transaction-type/) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 9 |
| **3** | Версия транзакции | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 2 |
| **4** | [Байт сети](/ru/blockchain/blockchain-network/#байт-сети) | chainId | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 87 — для Mainnet<br>84 — для Testnet<br>83 — для Stagenet |
| **5** | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| **6** | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **7** | Временная метка транзакции | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **8** | ID лизинга | leaseId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 9 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) | proofs | См. раздел [Бинарный формат подтверждений](/ru/blockchain/binary-format/transaction-proof-binary-format) | `S` | Если массив пустой, то `S` = 3. <br>Если массив не пустой, то `S` = 3 + 2 × `N` + 64 × `N`, где `N` — количество подтверждений в массиве.<br>Максимальное количество подтверждений в массиве — 8. Размер каждого подтверждения — 64 байта |

> Поля, номера которых выделены жирным шрифтом, составляют байты тела транзакции.

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesnodes.com/transactions/info/7siEtrJAvmVzM1WDX6v9RN4qkiCtk7qQEeD5ZhE6955E) в Node API.

## Версия 1

| № | Название поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- |
| **1** | [ID типа транзакции](/ru/blockchain/transaction-type/) | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 9 |
| **2** | Открытый ключ аккаунта отправителя транзакции | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| **3** | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **4** | Временная метка транзакции | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **5** | ID лизинга | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 6 | [Подпись транзакции](/ru/blockchain/transaction/transaction-proof) | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 64 |  |  |

> Поля, номера которых выделены жирным шрифтом, составляют байты тела транзакции.
