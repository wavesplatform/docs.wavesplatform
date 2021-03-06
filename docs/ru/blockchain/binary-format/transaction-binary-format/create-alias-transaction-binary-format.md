# Бинарный формат транзакции создания псевдонима

> Узнать больше о [транзакции создания псевдонима](/ru/blockchain/transaction-type/create-alias-transaction).

## Версия 3

Бинарный формат версии 3 соответствует protobuf-схеме [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto). Описание полей, общих для всех типов транзакций, представлено в разделе [Бинарный формат транзакции](/ru/blockchain/binary-format/transaction-binary-format/).

Версия 3 появилась с момента активации фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”.

```
message CreateAliasTransactionData {
    string alias = 1;
};
```

| Поле | Размер | Описание |
| :--- | :--- | :--- |
| alias | От 4 до 30 байт | [Псевдоним адреса](/ru/blockchain/account/alias) |

## Версия 2

| № | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Указывает, что версия транзакции является второй или выше.<br>Значение должно быть равно 0 |
| **2** | [ID типа транзакции](/ru/blockchain/transaction-type/) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types)  | 1 | Значение должно быть равно 10 |
| **3** | Версия транзакции | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 2 |
| **4** | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| **5** | Длина [псевдонима](/ru/blockchain/account/alias) | | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | Количество символов в имени псевдонима |
| **6** | Псевдоним | alias | [String](/ru/blockchain/blockchain/blockchain-data-types) | от 4 до 30 |  |
| **7** | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **8** | Временная метка транзакции | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 9 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) | proofs | См. раздел [Бинарный формат подтверждений](/ru/blockchain/binary-format/transaction-proof-binary-format) | `S` | Если массив пустой, то `S` = 3. <br>Если массив не пустой, то `S` = 3 + 2 × `N` + 64 × `N`, где `N` — количество подтверждений в массиве.<br>Максимальное количество подтверждений в массиве — 8. Размер каждого подтверждения — 64 байта |

> Поля, номера которых выделены жирным шрифтом, составляют байты тела транзакции.

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesnodes.com/transactions/info/5CZV9RouJs7uaRkZY741WDy9zV69npX1FTZqxo5fsryL) в Node API.

## Версия 1

| № | Поле | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- |
| **1** | [ID типа транзакции](/ru/blockchain/transaction-type/) | [Byte](/ru/blockchain/blockchain/blockchain-data-types)  | 1 | Значение должно быть равно 6 |
| **2** | Открытый ключ аккаунта отправителя транзакции | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| **3** | Длина [псевдонима](/ru/blockchain/account/alias) | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | Количество символов в имени псевдонима |
| **4** | Псевдоним | [String](/ru/blockchain/blockchain/blockchain-data-types) | от 4 до 30 |  |
| **5** | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **6** | Временная метка транзакции | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 7 | [Подпись транзакции](/ru/blockchain/transaction/transaction-proof) | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 64 |  |  |

> Поля, номера которых выделены жирным шрифтом, составляют байты тела транзакции.
