# [Ride v4] IntegerEntry

:warning: Это документация Стандартной библиотеки версии 4 и 3. Рекомендуем использовать версию 5. [Перейти к&nbsp;версии&nbsp;5](/ru/ride/structures/script-actions/int-entry)

> :warning: Структура `IntegerEntry` добавлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**.

`IntegerEntry` — cтруктура, задающая ключ и значение записи [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage) целочисленного типа. Cоздание или изменение записи выполняется, только если структура включена в [результирующее выражение](/ru/ride/v4/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции.


## Конструктор

```ride
IntegerEntry(key: String, value: Int)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/v4/data-types/string) | Ключ записи. Максимальный размер — 400 байт |
| 2 | value | [Int](/ru/ride/v4/data-types/int) | Значение записи |
