# BinaryEntry

`BinaryEntry` — cтруктура, задающая ключ и значение бинарной записи [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage). Cоздание или изменение записи выполняется, только если структура включена в [результирующее выражение](/ru/ride/functions/callable-function#invocation-result) вызываемой функции.

## Конструктор

```ride
BinaryEntry(key: String, value: ByteVector)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/data-types/string) | Ключ записи. Максимальный размер — 400 байт |
| 2 | value| [ByteVector](/ru/ride/data-types/byte-vector) | Значение записи. Максимальный размер — 5 Кбайт |
