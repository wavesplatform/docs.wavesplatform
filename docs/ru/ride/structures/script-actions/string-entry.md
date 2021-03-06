# StringEntry

`StringEntry` — cтруктура, задающая ключ и значение записи [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage) строкового типа. Cоздание или изменение записи выполняется, только если структура включена в [результирующее выражение](/ru/ride/functions/callable-function#invocation-result) вызываемой функции.

## Конструктор

```ride
BinaryEntry(key: String, value: String)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/data-types/string) | Ключ записи.  Максимальный размер — 400 байт |
| 2 | value| [String](/ru/ride/data-types/byte-vector) | Значение записи. Максимальный размер — 5 Кбайт |
