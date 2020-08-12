# Бинарный формат транзакции вызова скрипта

> Узнать больше о [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction).

## Версия 2

Бинарный формат версии 2 соответствует protobuf-схеме [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto). Описание полей, общих для всех типов транзакций, представлено в разделе [Бинарный формат транзакции](/ru/blockchain/binary-format/transaction-binary-format/).

Версия 2 добавлена в версии ноды 1.2.0 и включается с активацией фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”.

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
| function_call | | Имя и аргументы вызываемой функции. Бинарный формат вызова аналогичен [версии 1](#версия-1) (см. п. 7 в таблице) |
| payments.asset_id | • 32 байта для ассета<br>• 0 для WAVES | ID токена в платеже |
| payments.amount | 8 байт | Количество токена в платеже, в минимальных единицах («копейках») токена |

Количество платежей — не более 2.

Максимальный размер `d_app` + `function_call` + `payments` — 5120 байт.

## Версия 1

| № | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Указывает, что [версия транзакции](/ru/blockchain/transaction/transaction-version) является второй или выше.<br>Значение должно быть равно 0 |
| **2** | [ID типа транзакции](/ru/blockchain/transaction-type/) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 16 |
| **3** | [Версия транзакции](/ru/blockchain/transaction/transaction-version) | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 1 |
| **4** | [Байт сети](/ru/blockchain/blockchain-network/#байт-сети) |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 87 — для Mainnet<br>84 — для Testnet<br>83 — для Stagenet |
| **5** | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| **6** | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) | dApp | См. [Бинарный формат адреса](/ru/blockchain/binary-format/address-binary-format), [Бинарный формат псевдонима](/ru/blockchain/binary-format/alias-binary-format) | `S` | Если первым байтом поля является 1, то за ним следует адрес. В этом случае `S` = 26.<br>Если первым байтом поля является 2, то за ним следует псевдоним. В этом случае 8&nbsp;<=&nbsp;`S`&nbsp;<=&nbsp;34 |
| **7.1** | Флаг наличия функции |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — в dApp должна быть вызвана функция по умолчанию.<br>1 — в dApp должна быть вызвана функция из текущей транзакции |
| **7.2** | Идентификатор вызова функции |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Константа. Значение должно быть равно 9 |
| **7.3** | Идентификатор типа функции |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Константа. Значение должно быть равно 1 |
| **7.4** | Длина имени функции | | [Int](/ru/blockchain/blockchain/blockchain-data-types) | 4 |  |
| **7.5** | Имя функции | function | [String](/ru/blockchain/blockchain/blockchain-data-types) | До 255 |  |
| **7.6.1** | Количество аргументов функции |  | [Int](/ru/blockchain/blockchain/blockchain-data-types) | 4 |  |
| **7.6.2** | ID типа аргумента 1 | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — длинное целое.<br>1 — массив байтов.<br>2 — строка.<br>6 — логическое значение True.<br>7 — логическое значение False.<br>11 — список.<br>Возможность передавать список в качестве аргумента добавлена в версии ноды 1.2.3 и включается после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions” |
| **7.6.3** | Аргумент 1 | value | - [Long](/ru/blockchain/blockchain/blockchain-data-types)<br>- Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)]<br>- [String](/ru/blockchain/blockchain/blockchain-data-types)<br>- логическое значение True<br>- логическое значение False<br>- [List](/ru/ride/data-types/list) | `S` | `S` = 8, если типом является длинное целое.<br>Eсли типом является массив байтов, строка или список, то размер поля ограничен только общим размером транзакции.<br>Если типом является список, то<br>- его длина не должна превышать 1000 элементов,<br>- количество элементов в нем представляют первые 4 байта текущего поля,<br>- каждый элемент сериализуется так же, как и аргумент функции: сначала размещается ID типа элемента, затем его значение.<br>`S` = 0, если типом является логическое значение True или False |
| **7.6.4** | ID типа аргумента 2 | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — длинное целое.<br>1 — массив байтов.<br>2 — строка.<br>6 — логическое значение True.<br>7 — логическое значение False.<br>11 — список.<br>Возможность передавать список в качестве аргумента добавлена в версии ноды 1.2.3 и включается после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions” |
| **7.6.5** | Аргумент 2 | value | - [Long](/ru/blockchain/blockchain/blockchain-data-types)<br>- Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)]<br>- [String](/ru/blockchain/blockchain/blockchain-data-types)<br>- логическое значение True<br>- логическое значение False<br>- [List](/ru/ride/data-types/list) | `S` | `S` = 8, если типом является длинное целое.<br>Eсли типом является массив байтов, строка или список, то размер поля ограничен только общим размером транзакции.<br>Если типом является список, то<br>- его длина не должна превышать 1000 элементов,<br>- количество элементов в нем представляют первые 4 байта текущего поля,<br>- каждый элемент сериализуется так же, как и аргумент функции: сначала размещается ID типа элемента, затем его значение.<br>`S` = 0, если типом является логическое значение True или False |
| ... | ... | ... | ... | ... | ... |
| **7.6.[2&nbsp;×&nbsp;N]** | ID типа аргумента N | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — длинное целое.<br>1 — массив байтов.<br>2 — строка.<br>6 — логическое значение True.<br>7 — логическое значение False.<br>11 — список.<br>Возможность передавать список в качестве аргумента добавлена в версии ноды 1.2.3 и включается после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions” |
| **7.6.[2&nbsp;×&nbsp;N&nbsp;+&nbsp;1]** | Аргумент N | value | - [Long](/ru/blockchain/blockchain/blockchain-data-types)<br>- Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)]<br>- [String](/ru/blockchain/blockchain/blockchain-data-types)<br>- логическое значение True<br>- логическое значение False<br>- [List](/ru/ride/data-types/list) | `S` | `S` = 8, если типом является длинное целое.<br>Eсли типом является массив байтов, строка или список, то размер поля ограничен только общим размером транзакции.<br>Если типом является список, то<br>- его длина не должна превышать 1000 элементов,<br>- количество элементов в нем представляют первые 4 байта текущего поля,<br>- каждый элемент сериализуется так же, как и аргумент функции: сначала размещается ID типа элемента, затем его значение.<br>`S` = 0, если типом является логическое значение True или False |
| **8.1** | Количество платежей |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 |  |
| **8.2** | Длина платежа 1 | | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | |
| **8.3** | Количество токена в платеже 1 | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **8.4** | Флаг токена платежа 1 |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — WAVES.<br>1 — другой токен |
| **8.5** | ID токена платежа 1 | assetId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| **8.6** | Длина платежа 2 | | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | |
| **8.7** | Количество токена в платеже 2 | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **8.8** | Флаг токена платежа 2 |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — [WAVES](/ru/blockchain/token/waves).<br>1 — другой токен |
| **8.9** | ID токена платежа 2 | assetId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| **9** | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **10.1** | Флаг токена комиссии | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — WAVES<br>1 — другой токен |
| **10.2** | ID токена комиссии | feeAssetId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0, если токеном является WAVES.<br>`S` = 32, если это другой токен |
| **11** | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 12 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) | proofs | См. раздел [Бинарный формат подтверждений](/ru/blockchain/binary-format/transaction-proof-binary-format) | `S` | Если массив пустой, то `S` = 3. <br>Если массив не пустой, то `S` = 3 + 2 × `N` + 64 × `N`, где `N` — количество подтверждений в массиве.<br>Максимальное количество подтверждений в массиве — 8. Размер каждого подтверждения — 64 байта |

> Поля, номера которых выделены жирным шрифтом, составляют байты тела транзакции.

Максимальный размер транзакции, включая `proofs`, — 5120 байт.

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesnodes.com/transactions/info/7CVjf5KGRRYj6UyTC2Etuu4cUxx9qQnCJox8vw9Gy9yq) в Node API.
