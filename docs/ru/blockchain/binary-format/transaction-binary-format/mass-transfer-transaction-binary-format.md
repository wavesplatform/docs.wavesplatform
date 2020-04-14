# Бинарный формат транзакции массового перевода

> Узнать больше о [транзакции массового перевода](/ru/blockchain/transaction-type/mass-transfer-transaction).

## Версия 2

Бинарный формат версии 3 соответствует protobuf-схеме [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto).

Описание полей, общих для всех типов транзакций, представлено в разделе [Бинарный формат транзакции](/ru/blockchain/binary-format/transaction-binary-format).

```
message MassTransferTransactionData {
    message Transfer {
        Recipient address = 1;
        int64 amount = 2;
    };
    bytes asset_id = 1;
    repeated Transfer transfers = 2;
    Attachment attachment = 3;
};

message Recipient {
    oneof recipient {
        bytes public_key_hash = 1;
        string alias = 2;
    };

message Attachment {
    oneof attachment {
        int64 int_value = 1;
        bool bool_value = 2;
        bytes binary_value = 3;
        string string_value = 4;
    };
}
```

| Поле | Размер | Описание |
| :--- | :--- | :--- |
| asset_id | 32 байта | Идентификатор переводимого токена |
| transfers | | Переводы (не более 100) |
| transfers.address.public_key_hash | 20 байт | Хеш открытого ключа аккаунта получателя (компонент адреса, см. раздел [Бинарный формат адреса](/ru/blockchain/binary-format/address-binary-format)) |
| transfers.address.alias | От 8 до 34 байт | [Псевдоним адреса](/ru/blockchain/account/alias) получателя |
| transfers.amount | 8 байт | Количество токена в платеже, в минимальных единицах токена (то есть умноженное на 10<sup>decimals</sup>) |
| attachment | До 140 байт | Произвольные данные, прикладываемые к транзакции |

## Версия 1

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | [ID типа транзакции](/ru/blockchain/transaction-type) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 11 |
| 2 | [Версия транзакции](/ru/blockchain/transaction/transaction-version) | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 2 |
| 3 | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 4.1 | Флаг WAVES/токен |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Равен 0, если переводится [WAVES](/ru/blockchain/token/waves).<br>Равен 1, если переводится другой токен |
| 4.2 | ID токена | assetId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | S | S = 0 если значение поля "Флаг WAVES/токен" равно 0.<br>S = 32 если значение поля "Флаг WAVES/токен" равно 1 |
| 5.1 | Количество переводов | transferCount | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | Количество переводов токенов в транзакции |
| 5.2 | Сумма всех переводов  | totalAmount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 5.3 | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) получателя перевода 1 | recipient | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | Если первым байтом поля является 1, то за ним следует адрес. `S` в этом случае равняется 26.<br>Если первым байтом поля является 2, то за ним следует псевдоним. В этом случае 8 <= `S` <= 34 |
| 5.4 | Количество токена в переводе 1 | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 5.5 | Адрес или псевдоним получателя перевода 2 | recipient | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | Если первым байтом поля является 1, то за ним следует адрес. `S` в этом случае равняется 26.<br>Если первым байтом поля является 2, то за ним следует псевдоним. В этом случае 8 <= `S` <= 34 |
| 5.6 | Количество токена в переводе 2 | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| 5.[2× N + 1] | Адрес или псевдоним получателя перевода N | recipient | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | Если первым байтом поля является 1, то за ним следует адрес. `S` в этом случае равняется 26.<br>Если первым байтом поля является 2, то за ним следует псевдоним. В этом случае 8 <= `S` <= 34 |
| 5.[2× N + 2] | Количество токена в переводе N | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 6 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 7 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 8.1 | Длина поля "Вложение" |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 |  |
| 8.2 | Вложение |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | Произвольные данные, прикладываемые к транзакции |
| 9 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) | proofs | [Подтверждения](/ru/blockchain/transaction/transaction-proof) | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br> `N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер `N`-го подтверждения в байтах.<br>Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/3LRfudet7avpQcW1AdauiBGb8SSRAaoCugDzngDPLVcv) в Node API.
