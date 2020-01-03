# DataEntry (доступно в Стандартной библиотеке версии 3)

<note type="warning" title="">Структура DataEntry не входит в [Стандартную библиотеку](/ru/ride/script/standard-library) версии 4. Используйте `BinaryEntry`, `BooleanEntry`, `IntEntry`, и `StringEntry` вместо этой структуры.</note>

Структура записи [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage).

## Конструктор

``` ride
DataEntry(key: String, value: Int|Boolean|ByteVector|String)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/data-types/string) | Ключ записи |
| 2 | value | [Int](/ru/ride/data-types/int)&#124;[Boolean](/ru/ride/data-types/boolean)&#124;[ByteVector](/ru/ride/data-types/byte-vector)&#124;[String](/ru/ride/data-types/string) | Значение записи |
