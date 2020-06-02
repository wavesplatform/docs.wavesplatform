# Бинарный формат транзакции данных

> Узнать больше о [транзакции данных](/ru/blockchain/transaction-type/data-transaction).

## Версия 2

Бинарный формат версии 2 соответствует protobuf-схеме [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto). Описание полей, общих для всех типов транзакций, представлено в разделе [Бинарный формат транзакции](/ru/blockchain/binary-format/transaction-binary-format).

Версия 2 добавлена в версии ноды 1.2.0 и включается с активацией фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”. В настоящее время версии 1.2.x доступны только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

```
message DataTransactionData {
    message DataEntry {
        string key = 1;
        oneof value {
            int64 int_value = 10;
            bool bool_value = 11;
            bytes binary_value = 12;
            string string_value = 13;
        };
    };
    repeated DataEntry data = 1;
};
```

| Поле | Размер | Описание |
| :--- | :--- | :--- |
| key | До 400 байт | Ключ записи |
| value | До 32&nbsp;767 байт | Значение записи. Если отсутствует, запись будет удалена |

Количество записей — не более 100.

Максимальный размер данных (ключи + значения) — 165&nbsp;890 байт.

## Версия 1

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии | | [Byte](/ru/blockchain/blockchain/blockchain-data-types)  | 1 | Указывает, что [версия транзакции](/ru/blockchain/transaction/transaction-version) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/ru/blockchain/transaction-type) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 12 |
| 3 | [Версия транзакции](/ru/blockchain/transaction/transaction-version) | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 1 |
| 4 | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 5 | Количество элементов в массиве данных | | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | |
| 6.1 | Длина ключа 1-го элемента | | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | |
| 6.2 | Ключ 1-го элемента | key | [String](/ru/blockchain/blockchain/blockchain-data-types) | 4 × `L` | `L` — длина ключа, не более 100 символов |
| 6.3 | Тип данных 1-го элемента | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | |
| 6.4 | Длина данных 1-го элемента |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | Поле присутствует, только если значением поля данных является массив байтов или строка.<br>Поле отсутствует, если значением поля данных является целое число или логический тип |
| 6.5 | Данные 1-го элемента | value | `T` | До 32&nbsp;767 | `T` — один из следующих: <br> - [Long](/ru/blockchain/blockchain/blockchain-data-types)<br> - Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)]<br> - [Boolean](/ru/blockchain/blockchain/blockchain-data-types)<br> - [String](/ru/blockchain/blockchain/blockchain-data-types) |
| 6.6 | Длина ключа 2-го элемента | | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | |
| 6.7 | Ключ 2-го элемента | key | [String](/ru/blockchain/blockchain/blockchain-data-types) | 4 × `L` | `L` — длина ключа, не более 100 символов |
| 6.8 | Тип данных 2-го элемента | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | |
| 6.9 | Длина данных 2-го элемента |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | Поле присутствует, только если значением поля данных является массив байтов или строка.<br>Поле отсутствует, если значением поля данных является целое число или логический тип |
| 6.10 | Данные 2-го элемента | value | `T` | До 32&nbsp;767 | `T` — один из следующих: <br> - [Long](/ru/blockchain/blockchain/blockchain-data-types)<br> - Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)]<br> - [Boolean](/ru/blockchain/blockchain/blockchain-data-types)<br> - [String](/ru/blockchain/blockchain/blockchain-data-types) |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| 6.[5 × N - 4] | Длина ключа N-го элемента | | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | |
| 6.[5 × N - 3] | Ключ N-го элемента | key | [String](/ru/blockchain/blockchain/blockchain-data-types) | 4 × `L` | `L` — длина ключа, не более 100 символов |
| 6.[5 × N - 2] | Тип данных N-го элемента | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | |
| 6.[5 × N - 1] | Длина данных N-го элемента |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | Поле присутствует, только если значением поля данных является массив байтов или строка.<br>Поле отсутствует, если значением поля данных является целое число или логический тип |
| 6.[5 × N] | Данные N-го элемента | value | `T` | До 32&nbsp;767 | `T` — один из следующих: <br> - [Long](/ru/blockchain/blockchain/blockchain-data-types)<br> - Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)]<br> - [Boolean](/ru/blockchain/blockchain/blockchain-data-types)<br> - [String](/ru/blockchain/blockchain/blockchain-data-types) |
| 7 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 8 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 9 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) | proofs | [Подтверждения](/ru/blockchain/transaction/transaction-proof) | `S` | Если массив пустой, то `S`= 3. <br>Если массив не пустой, то `S`= 3 + 2 × `N` + \(`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>\), <br>где <br>`N` — количество подтверждений в массиве, <br>`P`<sub>n</sub> — размер `N`-го подтверждения в байтах.<br> Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

Количество записей — не более 100.

Максимальный размер тела транзакции — 153&nbsp;600 байт.

## JSON-представление транзакции <a id="json-representation"></a>

Смотрите [пример](https://nodes.wavesnodes.com/transactions/info/EByjQAWDRGrmc8uy7xRGy2zsQXZQq59bav7h8oTTJyHC) в Node API.
