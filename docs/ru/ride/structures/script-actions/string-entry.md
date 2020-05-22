# StringEntry

> :warning: Структура `StringEntry` представлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

`StringEntry` — cтруктура, задающая ключ и значение записи [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage) строкового типа. Cоздание или изменение записи выполняется, только если структура включена в [результирующее выражение](/ru/ride/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции.

## Конструктор

```ride
BinaryEntry(key: String, value: String)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/data-types/string) | Ключ записи.  Максимальный размер — 400 байт |
| 2 | value| [String](/ru/ride/data-types/byte-vector) | Значение записи. Максимальный размер — 5 Кбайт |
