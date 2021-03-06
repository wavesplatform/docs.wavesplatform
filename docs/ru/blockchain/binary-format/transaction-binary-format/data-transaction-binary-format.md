# Бинарный формат транзакции данных

> Узнать больше о [транзакции данных](/ru/blockchain/transaction-type/data-transaction).

## Версия 2

Бинарный формат версии 2 соответствует protobuf-схеме [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto). Описание полей, общих для всех типов транзакций, представлено в разделе [Бинарный формат транзакции](/ru/blockchain/binary-format/transaction-binary-format/).

Версия 2 появилась с момента активации фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”.

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

| № | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии | | [Byte](/ru/blockchain/blockchain/blockchain-data-types)  | 1 | Указывает, что версия транзакции является второй или выше.<br>Значение должно быть равно 0 |
| **2** | [ID типа транзакции](/ru/blockchain/transaction-type/) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 12 |
| **3** | Версия транзакции | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 1 |
| **4** | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| **5** | Количество элементов в массиве данных | | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | |
| **6.1** | Длина ключа 1-го элемента | | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | |
| **6.2** | Ключ 1-го элемента | key | [String](/ru/blockchain/blockchain/blockchain-data-types) | 4 × `L` | `L` — длина ключа, не более 100 символов |
| **6.3** | Тип данных 1-го элемента | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | |
| **6.4** | Длина данных 1-го элемента |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | Поле присутствует, только если значением поля данных является массив байтов или строка.<br>Поле отсутствует, если значением поля данных является целое число или логический тип |
| **6.5** | Данные 1-го элемента | value | `T` | До 32&nbsp;767 | `T` — один из следующих: <br> - [Long](/ru/blockchain/blockchain/blockchain-data-types)<br> - Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)]<br> - [Boolean](/ru/blockchain/blockchain/blockchain-data-types)<br> - [String](/ru/blockchain/blockchain/blockchain-data-types) |
| **6.6** | Длина ключа 2-го элемента | | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | |
| **6.7** | Ключ 2-го элемента | key | [String](/ru/blockchain/blockchain/blockchain-data-types) | 4 × `L` | `L` — длина ключа, не более 100 символов |
| **6.8** | Тип данных 2-го элемента | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | |
| **6.9** | Длина данных 2-го элемента |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | Поле присутствует, только если значением поля данных является массив байтов или строка.<br>Поле отсутствует, если значением поля данных является целое число или логический тип |
| **6.10** | Данные 2-го элемента | value | `T` | До 32&nbsp;767 | `T` — один из следующих: <br> - [Long](/ru/blockchain/blockchain/blockchain-data-types)<br> - Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)]<br> - [Boolean](/ru/blockchain/blockchain/blockchain-data-types)<br> - [String](/ru/blockchain/blockchain/blockchain-data-types) |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| **6.[5&nbsp;×&nbsp;N&nbsp;-&nbsp;4]** | Длина ключа N-го элемента | | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | |
| **6.[5&nbsp;×&nbsp;N&nbsp;-&nbsp;3]** | Ключ N-го элемента | key | [String](/ru/blockchain/blockchain/blockchain-data-types) | 4 × `L` | `L` — длина ключа, не более 100 символов |
| **6.[5&nbsp;×&nbsp;N&nbsp;-&nbsp;2]** | Тип данных N-го элемента | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | |
| **6.[5&nbsp;×&nbsp;N&nbsp;-&nbsp;1]** | Длина данных N-го элемента |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | Поле присутствует, только если значением поля данных является массив байтов или строка.<br>Поле отсутствует, если значением поля данных является целое число или логический тип |
| **6.[5&nbsp;×&nbsp;N]** | Данные N-го элемента | value | `T` | До 32&nbsp;767 | `T` — один из следующих: <br> - [Long](/ru/blockchain/blockchain/blockchain-data-types)<br> - Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)]<br> - [Boolean](/ru/blockchain/blockchain/blockchain-data-types)<br> - [String](/ru/blockchain/blockchain/blockchain-data-types) |
| **7** | Временная метка транзакции | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **8** | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 9 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) | proofs | См. раздел [Бинарный формат подтверждений](/ru/blockchain/binary-format/transaction-proof-binary-format) | `S` | Если массив пустой, то `S` = 3. <br>Если массив не пустой, то `S` = 3 + 2 × `N` + 64 × `N`, где `N` — количество подтверждений в массиве.<br>Максимальное количество подтверждений в массиве — 8. Размер каждого подтверждения — 64 байта |

> Поля, номера которых выделены жирным шрифтом, составляют байты тела транзакции.

Количество записей — не более 100.

Максимальный размер тела транзакции — 153&nbsp;600 байт.

## JSON-представление транзакции <a id="json-representation"></a>

Смотрите [пример](https://nodes.wavesnodes.com/transactions/info/EByjQAWDRGrmc8uy7xRGy2zsQXZQq59bav7h8oTTJyHC) в Node API.
