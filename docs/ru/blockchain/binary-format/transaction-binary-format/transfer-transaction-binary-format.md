# Бинарный формат транзакции перевода

> Узнать больше о [транзакции перевода](/ru/blockchain/transaction-type/transfer-transaction).

## Версия 3

Бинарный формат версии 3 соответствует protobuf-схеме [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto). Описание полей, общих для всех типов транзакций, представлено в разделе [Бинарный формат транзакции](/ru/blockchain/binary-format/transaction-binary-format).

Версия 3 добавлена в версии ноды 1.2.0 и включается с активацией фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”. В настоящее время версии 1.2.x доступны только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

```
message TransferTransactionData {
    Recipient recipient = 1;
    Amount amount = 2;
    Attachment attachment = 3;
};

message Recipient {
    oneof recipient {
        bytes public_key_hash = 1;
        string alias = 2;
    };

message Amount {
    bytes asset_id = 1;
    int64 amount = 2;
};

message Attachment {
    oneof attachment {
        int64 int_value = 1;
        bool bool_value = 2;
        bytes binary_value = 3;
        string string_value = 4;
    };
};
```

| Поле | Размер | Описание |
| :--- | :--- | :--- |
| recipient.public_key_hash | 20 байт | Хеш открытого ключа аккаунта получателя (компонент адреса, см. раздел [Бинарный формат адреса](/ru/blockchain/binary-format/address-binary-format)) |
| recipient.alias | От 4 до 30 байт | [Псевдоним адреса](/ru/blockchain/account/alias) получателя |
| amount.asset_id | 32 байта | ID токена |
| amount.amount | 8 байт | Количество токена для перевода, в минимальных единицах («копейках») |
| attachment | До 140 байт | Произвольные данные (обычно комментарий к транзакции) |

## Версия 2

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Указывает, что [версия транзакции](/ru/blockchain/transaction/transaction-version) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/ru/blockchain/transaction-type) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 4 |
| 3 | [Версия транзакции](/ru/blockchain/transaction/transaction-version) | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 2 |
| 4 | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 5.1 | Флаг типа переводимого токена |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — [WAVES](/ru/blockchain/token/waves)<br>1 — другой токен |
| 5.2 | [ID](/ru/blockchain/token/token-id) переводимого токена | assetId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0 если значение поля 5 равно 0.<br>`S` = 32 если значение поля 5 не равно 0 |
| 6.1 | Флаг типа токена комиссии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — WAVES<br>1 — другой токен |
| 6.2 | ID токена комиссии | feeAssetId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0 если значение поля 7 равно 0.<br>`S` = 32 если значение поля 7 не равно 0 |
| 7 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 8 | Количество токена для перевода | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 9 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 10 | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) получателя | recipient | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | Если первым байтом поля является 1, то за ним следует адрес. `S` в этом случае равняется 26.<br>Если первым байтом поля является 2, то за ним следует псевдоним. В этом случае 8 <= `S` <= 34 |
| 11.1 | Длина вложения |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 |  |
| 11.2 | Вложение | attachment | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | До 140 включительно | Может включать произвольные данные |
| 12 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) | proofs | Array[[Подтверждение](/ru/blockchain/transaction/transaction-proof)] | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br>`N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер N-го подтверждения в байтах.<br>Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/2UMEGNXwiRzyGykG8voDgxnwHA7w5aX5gmxdcf9DZZjL) в Node API. В JSON-представлении значения полей `feeAsset` и `feeAssetId` идентичны.  

## Версия 1

| Порядковый номер поля | Название поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [ID типа транзакции](/ru/blockchain/transaction-type) | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 4 |
| 2 | [Подпись транзакции](/ru/blockchain/transaction/transaction-signature) | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 64 |  |
| 3 | Открытый ключ аккаунта отправителя транзакции | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 4 | Флаг типа переводимого токена | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — [WAVES](/ru/blockchain/token/waves)<br>1 — другой токен |
| 5 | [ID](/ru/blockchain/token/token-id) переводимого токена | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0 если значение поля 4 равно 0.<br>`S` = 32 если значение поля 4 не равно 0 |
| 6 | Флаг типа токена комиссии | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — WAVES<br>1 — другой токен |
| 7 | ID токена комиссии | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0 если значение поля 4 равно 0.<br>`S` = 32 если значение поля 4 не равно 0 |
| 8 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 9 | Количество токена для перевода | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 10 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 11 | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) получателя | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | Если первым байтом поля является 1, то за ним следует адрес. `S` в этом случае равняется 26<br>Если первым байтом поля является 2, то за ним следует псевдоним. В этом случае 8 <= `S` <= 34  |
| 12 | Длина вложения | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 |  |
| 13 | Вложение | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | До 140 включительно | Может включать произвольные данные |
