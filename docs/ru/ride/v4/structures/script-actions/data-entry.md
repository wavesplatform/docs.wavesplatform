# [Ride v3] DataEntry

:warning: Это документация Стандартной библиотеки версии 4 и 3. Рекомендуем использовать версию 5.

> :warning: Структура `DataEntry` не входит в [Стандартную библиотеку](/ru/ride/script/standard-library) версии 4. Используйте `BinaryEntry`, `BooleanEntry`, `IntegerEntry`, и `StringEntry` вместо этой структуры.

`DataEntry` — cтруктура, задающая ключ и значение записи [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage). Cоздание или изменение записи выполняется, только если структура включена в [результирующее выражение](/ru/ride/v4/functions/callable-function#резуnьтат-выпоnнения) вызываемой функции.

## Конструктор

``` ride
DataEntry(key: String, value: Int|Boolean|ByteVector|String)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/v4/data-types/string) | Ключ записи |
| 2 | value | [Int](/ru/ride/v4/data-types/int)&#124;[Boolean](/ru/ride/v4/data-types/boolean)&#124;[ByteVector](/ru/ride/v4/data-types/byte-vector)&#124;[String](/ru/ride/v4/data-types/string) | Значение записи |
