# IntegerEntry

`IntegerEntry` — cтруктура, задающая ключ и значение записи [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage) целочисленного типа. Cоздание или изменение записи выполняется, только если структура включена в [результирующее выражение](/ru/ride/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции.


## Конструктор

```ride
IntegerEntry(key: String, value: Int)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/data-types/string) | Ключ записи. Максимальный размер — 400 байт |
| 2 | value | [Int](/ru/ride/data-types/int) | Значение записи |
