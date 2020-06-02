# Бинарный формат транзакции вызова скрипта

> Узнать больше о [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction).

## Версия 2

Бинарный формат версии 2 соответствует protobuf-схеме [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto). Описание полей, общих для всех типов транзакций, представлено в разделе [Бинарный формат транзакции](/ru/blockchain/binary-format/transaction-binary-format/).

Версия 2 добавлена в версии ноды 1.2.0 и включается с активацией фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”. В настоящее время версии 1.2.x доступны только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

```
message InvokeScriptTransactionData {
    Recipient d_app = 1;
    bytes function_call = 2;
    repeated Amount payments = 3;
};

message Recipient {
    oneof recipient {
        bytes public_key_hash = 1;
        string alias = 2;
    };
};

message Amount {
    bytes asset_id = 1;
    int64 amount = 2;
};
```

| Поле | Размер | Описание |
| :--- | :--- | :--- |
| d_app.public_key_hash | 20 байт | Хеш открытого ключа аккаунта dApp (компонент адреса, см. раздел [Бинарный формат адреса](/ru/blockchain/binary-format/address-binary-format)) |
| d_app.alias | От 4 до 30 байт | [Псевдоним адреса](/ru/blockchain/account/alias) аккаунта dApp |
| function_call | | Имя и аргументы вызываемой функции. Бинарный формат вызова аналогичен [версии 1](#версия-1) (см. п. 13 в таблице) |
| payments.asset_id | • 32 байта для ассета<br>• 0 для WAVES | ID токена в платеже |
| payments.amount | 8 байт | Количество токена в платеже, в минимальных единицах («копейках») токена |

Количество платежей — не более 2.

Максимальный размер `d_app` + `function_call` + `payments` — 5120 байт.

## Версия 1

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Указывает, что [версия транзакции](/ru/blockchain/transaction/transaction-version) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/ru/blockchain/transaction-type/) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 16 |
| 3 | [Версия транзакции](/ru/blockchain/transaction/transaction-version) | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 1 |
| 4 | [Байт сети](/ru/blockchain/blockchain-network/chain-id) |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 84 — для [тестовой сети](/ru/blockchain/blockchain-network/test-network)<br>87 — для [основной сети](/ru/blockchain/blockchain-network/main-network)<br>83 — для [экспериментальной сети](/ru/blockchain/blockchain-network/stage-network) |
| 5 | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 6 | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) | dApp | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | Если первым байтом поля является 1, то за ним следует адрес. `S` в этом случае равняется 26.<br>Если первым байтом поля является 2, то за ним следует псевдоним. В этом случае 8 <= `S` <= 34 |
| 7 | Флаг адреса или псевдонима |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 1 — для идентификации отправителя используется адрес.<br>2 — для идентификации отправителя используется псевдоним. |
| 8 | Байт сети |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Дублирует указанный выше байт сети |
| 9 | Хеш адреса |  | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 20 |  |
| 10 | [Контрольная сумма](https://ru.wikipedia.org/wiki/Контрольная_сумма) адреса |  | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 4 |  |
| 11 | Длина псевдонима |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 |  |
| 12 | Имя псевдонима |  | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | От 4 до 30 байтов |  |
| 13.1 | Флаг наличия функции |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — в dApp должна быть вызвана функция по умолчанию.<br>1 — в dApp должна быть вызвана функция из текущей транзакции. |
| 13.2 | Идентификатор вызова функции |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Константа. Значение должно быть равно 9 |
| 13.3 | Идентификатор типа функции |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Константа. Значение должно быть равно 1 |
| 13.4 | Имя функции | function | [String](/ru/blockchain/blockchain/blockchain-data-types) | До 255 |  |
| 13.5.1 | Количество аргументов функции |  | [Integer](/ru/blockchain/blockchain/blockchain-data-types) | 4 |  |
| 13.5.2 | ID типа аргумента 1 | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — типом аргумента является длинное целое.<br>1 — типом аргумента является массив байтов.<br>2 — типом аргумента является строка.<br>6 — типом аргумента является логическое значение True.<br>7 — типом аргумента является логическое значение False.<br>11 - типом аргумента является список.<br>Возможность передавать список в качестве аргумента добавлена в версии ноды 1.2.3 и включается после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”. Версии 1.2.x в настоящее время доступны только на [Stagenet](/ru/blockchain/blockchain-network/stage-network) |
| 13.5.3 | Аргумент 1 | value | - [Long](/ru/blockchain/blockchain/blockchain-data-types)<br>- Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)]<br>- [String](/ru/blockchain/blockchain/blockchain-data-types)<br>- логическое значение True<br>- логическое значение False<br>- [List](/ru/ride/data-types/list) | `S` | `S` = 8, если типом является длинное целое.<br>Eсли типом является массив байтов, строка или список, то ограничение на размер поля отсутствует. Объем хранимых в поле данных не должен превышать 5 Килобайт.<br>Если типом является список, то<br>- его длина не должна превышать 1000 элементов,<br>- количество элементов в нем представляют первые 4 байта текущего поля,<br>- каждый элемент сериализуется так же, как и аргумент функции: сначала размещается ID типа элемента, затем его значение.<br>`S` = 0, если типом является логическое значение True или False |
| 13.5.4 | ID типа аргумента 2 | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — типом аргумента является длинное целое.<br>1 — типом аргумента является массив байтов.<br>2 — типом аргумента является строка.<br>6 — типом аргумента является логическое значение True.<br>7 — типом аргумента является логическое значение False.<br>11 - типом аргумента является список.<br>Возможность передавать список в качестве аргумента добавлена в версии ноды 1.2.3 и включается после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”. Версии 1.2.x в настоящее время доступны только на [Stagenet](/ru/blockchain/blockchain-network/stage-network) |
| 13.5.5 | Аргумент 2 | value | - [Long](/ru/blockchain/blockchain/blockchain-data-types)<br>- Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)]<br>- [String](/ru/blockchain/blockchain/blockchain-data-types)<br>- логическое значение True<br>- логическое значение False<br>- [List](/ru/ride/data-types/list) | `S` | `S` = 8, если типом является длинное целое.<br>Eсли типом является массив байтов, строка или список, то ограничение на размер поля отсутствует. Объем хранимых в поле данных не должен превышать 5 Килобайт.<br>Если типом является список, то<br>- его длина не должна превышать 1000 элементов,<br>- количество элементов в нем представляют первые 4 байта текущего поля,<br>- каждый элемент сериализуется так же, как и аргумент функции: сначала размещается ID типа элемента, затем его значение.<br>`S` = 0, если типом является логическое значение True или False |
| ... | ... | ... | ... | ... | ... |
| 13.5.[2 × N] | ID типа аргумента N | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — типом аргумента является длинное целое.<br>1 — типом аргумента является массив байтов.<br>2 — типом аргумента является строка.<br>6 — типом аргумента является логическое значение True.<br>7 — типом аргумента является логическое значение False.<br>11 - типом аргумента является список.<br>Возможность передавать список в качестве аргумента добавлена в версии ноды 1.2.3 и включается после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”. Версии 1.2.x в настоящее время доступны только на [Stagenet](/ru/blockchain/blockchain-network/stage-network) |
| 13.5.[2 × N + 1] | Аргумент N | value | - [Long](/ru/blockchain/blockchain/blockchain-data-types)<br>- Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)]<br>- [String](/ru/blockchain/blockchain/blockchain-data-types)<br>- логическое значение True<br>- логическое значение False<br>- [List](/ru/ride/data-types/list) | `S` | `S` = 8, если типом является длинное целое.<br>Eсли типом является массив байтов, строка или список, то ограничение на размер поля отсутствует. Объем хранимых в поле данных не должен превышать 5 Килобайт.<br>Если типом является список, то<br>- его длина не должна превышать 1000 элементов,<br>- количество элементов в нем представляют первые 4 байта текущего поля,<br>- каждый элемент сериализуется так же, как и аргумент функции: сначала размещается ID типа элемента, затем его значение.<br>`S` = 0, если типом является логическое значение True или False |
| 14.1 | Количество платежей |  | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 14.2 | Количество токена в платеже 1 | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 14.3 | ID токена платежа 1 | assetId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 14.4 | Флаг токена платежа 1 |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — WAVES.<br>1 — другой токен |
| 14.5 | ID токена платежа 1 |  | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 | Поле применимо, если токен не является WAVES |
| 14.6 | Количество токена в платеже 2 | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 14.7 | ID токена платежа 2 | assetId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 14.8 | Флаг токена платежа 2 |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — [WAVES](/ru/blockchain/token/waves).<br>1 — другой токен |
| 14.9 | ID токена платежа 2 |  | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 | Поле применимо, если токен не является WAVES |
| ... | ... | ... | ... | ... | ... |
| 14.[4 × N + 2] | Количество токена в платеже N | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 14.[4 × N + 3] | ID токена платежа N | assetId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 14.[4 × N + 4] | Флаг токена платежа N |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — WAVES.<br>1 — другой токен |
| 14.[4 × N + 5] | ID токена платежа N |  | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 | Поле применимо, если токен не является WAVES |
| 15 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 16 | ID ассета комиссии | feeAssetId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0, если токеном является WAVES.<br>`S` = 32, если это другой токен |
| 17 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 18 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) | proofs | [Подтверждения](/ru/blockchain/transaction/transaction-proof) | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br>`N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер `N`-го подтверждения в байтах. Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesnodes.com/transactions/info/7CVjf5KGRRYj6UyTC2Etuu4cUxx9qQnCJox8vw9Gy9yq) в Node API.
