# Бинарный формат транзакции выпуска

> Узнать больше о [транзакции выпуска](/ru/blockchain/transaction-type/issue-transaction).

## Версия 3

Бинарный формат версии 3 соответствует protobuf-схеме [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto). Описание полей, общих для всех типов транзакций, представлено в разделе [Бинарный формат транзакции](/ru/blockchain/binary-format/transaction-binary-format/).

Версия 3 добавлена в версии ноды 1.2.0 и включается с активацией фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”. В настоящее время версии 1.2.x доступны только на [Stagenet](/ru/blockchain/blockchain-network/).

```
message IssueTransactionData {
    string name = 1;
    string description = 2;
    int64 amount = 3;
    int32 decimals = 4;
    bool reissuable = 5;
    bytes script = 6;
};
```

| Поле | Размер | Описание |
| :--- | :--- | :--- |
| name | От 4 до 16 байт | Название токена |
| description | От 0 до 1000 байт | Описание токена |
| amount | 8 байт | Количество токена в минимальных единицах («копейках») токена |
| decimals | 1 байт | Количество знаков после запятой |
| reissuable | 1 байт | Флаг возможности довыпуска |
| script | До 8192 байт | [Скрипт ассета](/ru/ride/script/script-types/asset-script) |

## Версия 2

| № | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Указывает, что [версия транзакции](/ru/blockchain/transaction/transaction-version) является второй или выше.<br>Значение должно быть равно 0 |
| **2** | [ID типа транзакции](/ru/blockchain/transaction-type/) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 3 |
| **3** | [Версия транзакции](/ru/blockchain/transaction/transaction-version) | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 2 |
| **4** | [Байт сети](/ru/blockchain/blockchain-network/#байт-сети) | chainId | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 87 — для Mainnet<br>84 — для Testnet<br>83 — для Stagenet |
| **5** | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| **6.1** | Длина названия токена |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 |  |
| **6.2** | Название токена | name | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | От 4 до 16 включительно |  |
| **7.1** | Длина описания токена |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 |  |
| **7.2** | Описание токена | description | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | От 0 до 1000 включительно |  |
| **8** | Количество токенов, которые будут выпущены | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **9** | Число знаков после запятой у токена | decimals | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 |  |
| **10** | Флаг возможности довыпуска | reissuable | [Boolean](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Если значение равно 0, то довыпуск невозможен.<br>Если значение равно 1, то довыпуск возможен |
| **11** | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **12** | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **13.1** | Флаг наличия скрипта |  | [Boolean](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Если значение равно 0, то токен не имеет скрипт.<br>Если значение равно 1, то токен имеет скрипт |
| **13.2** | Длина скрипта |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | `S` | `S` = 0, если значение поля "Флаг наличия скрипта" равно 0.<br>`S` = 2, если значение поля "Флаг наличия скрипта" равно 1 |
| **13.3** | [Скрипт ассета](/ru/ride/script/script-types/asset-script) | script | [String](/ru/blockchain/blockchain/blockchain-data-types) | `S` | `S` = 0, если значение поля "Флаг наличия скрипта" равно 0.<br>0 < `S` ≤ 8192, если значение поля "Флаг наличия скрипта" равно 1 |
| 14 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) | proofs | См. раздел [Бинарный формат подтверждений](/ru/blockchain/binary-format/transaction-proof-binary-format) | `S` | Если массив пустой, то `S`= 3. <br>Если массив не пустой, то `S`= 3 + 2 × `N` + 64 × `N`, где `N` — количество подтверждений в массиве.<br>Максимальное количество подтверждений в массиве — 8. Размер каждого подтверждения — 64 байта |

> Поля, номера которых выделены жирным шрифтом, составляют байты тела транзакции.

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesnodes.com/transactions/info/FTQvw9zdYirRksUFCKDvor3hiu2NiUjXEPTDEcircqti) в Node API.

## Версия 1

| № | Название поля | Тип поля | Размер поля в байтах | Описание |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [ID типа транзакции](/ru/blockchain/transaction-type/) | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 3 |
| 2 | Подпись транзакции | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 64 |  |
| **3** | ID типа транзакции | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Дублирует поле 1 |
| **4** | Открытый ключ аккаунта отправителя транзакции | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| **5** | Длина имени токена | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 |  |
| **6** | Имя токена | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | От 4 до 16 включительно |  |
| **7** | Длина описания токена | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 |  |
| **8** | Описание токена | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | От 0 до 1000 включительно |  |
| **9** | Количество токенов | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **10** | Количество знаков после запятой у токена | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 |  |
| **11** | Флаг возможности довыпуска | [Boolean](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Если значение равно 0, то довыпуск невозможен.<br>Если значение равно 1, то довыпуск возможен |
| **12** | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **13** | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |  |

> Поля, номера которых выделены жирным шрифтом, составляют байты тела транзакции.
