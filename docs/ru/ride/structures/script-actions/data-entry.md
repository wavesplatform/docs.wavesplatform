# DataEntry (доступно в Стандартной библиотеке версии 3)

> :warning: Структура `DataEntry` не входит в [Стандартную библиотеку](/ru/ride/script/standard-library) версии 4. Используйте `BinaryEntry`, `BooleanEntry`, `IntegerEntry`, и `StringEntry` вместо этой структуры.

**DataEntry** - cтруктура, задающая ключ и значение записи [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage), которая создается или изменяется в результате вызова [вызываемой функции](/ru/ride/functions/callable-function).

## Конструктор

``` ride
DataEntry(key: String, value: Int|Boolean|ByteVector|String)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/data-types/string) | Ключ записи |
| 2 | value | [Int](/ru/ride/data-types/int)&#124;[Boolean](/ru/ride/data-types/boolean)&#124;[ByteVector](/ru/ride/data-types/byte-vector)&#124;[String](/ru/ride/data-types/string) | Значение записи |
