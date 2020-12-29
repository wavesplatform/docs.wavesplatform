# [Ride v5] BooleanEntry

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/structures/script-actions/boolean-entry)

`BooleanEntry` — cтруктура, задающая ключ и значение записи [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage) логического типа. Cоздание или изменение записи выполняется, только если структура включена в [результирующее выражение](/ru/ride/v5/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции.

## Конструктор

```ride
BooleanEntry(key: String, value: Boolean)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/v5/data-types/string) | Ключ записи. Максимальный размер — 400 байт |
| 2 | value| [Boolean](/ru/ride/v5/data-types/boolean) | Значение записи |
