# DataEntry (доступно в Стандартной библиотеке версии 3)

> [!WARNING]
> Структура DataEntry не входит в [Стандартную библиотеку](/ru/ride/script/standard-library.md) версии 4. Используйте `BinaryEntry`, `BooleanEntry`, `IntEntry`, и `StringEntry` вместо этой структуры.

Структура записи [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage.md).

## Конструктор

``` ride
DataEntry(key: String, value: Int|Boolean|ByteVector|String)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/data-types/string.md) | Ключ записи |
| 2 | value | [Int](/ru/ride/data-types/int.md)&#124;[Boolean](/ru/ride/data-types/boolean.md)&#124;[ByteVector](/ru/ride/data-types/byte-vector.md)&#124;[String](/ru/ride/data-types/string.md) | Значение записи |
