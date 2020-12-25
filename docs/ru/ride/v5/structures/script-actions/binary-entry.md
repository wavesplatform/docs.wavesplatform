# [Ride v5] BinaryEntry

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/structures/script-actions/binary-entry)

`BinaryEntry` — cтруктура, задающая ключ и значение бинарной записи [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage). Cоздание или изменение записи выполняется, только если структура включена в [результирующее выражение](/ru/ride/v5/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции.

## Конструктор

```ride
BinaryEntry(key: String, value: ByteVector)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/v5/data-types/string) | Ключ записи. Максимальный размер — 400 байт |
| 2 | value| [ByteVector](/ru/ride/v5/data-types/byte-vector) | Значение записи. Максимальный размер — 5 Кбайт |
