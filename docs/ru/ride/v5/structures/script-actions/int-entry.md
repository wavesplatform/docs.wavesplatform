# [Ride v5] IntegerEntry

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/structures/script-actions/int-entry)

`IntegerEntry` — cтруктура, задающая ключ и значение записи [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage) целочисленного типа. Cоздание или изменение записи выполняется, только если структура включена в [результирующее выражение](/ru/ride/v5/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции.


## Конструктор

```ride
IntegerEntry(key: String, value: Int)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/v5/data-types/string) | Ключ записи. Максимальный размер — 400 байт |
| 2 | value | [Int](/ru/ride/v5/data-types/int) | Значение записи |
