# BooleanEntry

> :warning: Структура `BooleanEntry` представлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

**BooleanEntry** - cтруктура, задающая ключ и значение записи [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage) логического типа, которая создается или изменяется в результате вызова [вызываемой функции](/ru/ride/functions/callable-function).

## Конструктор

```ride
BooleanEntry(key: String, value: Boolean)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/data-types/string) | Ключ записи. Максимальный размер — 400 байт |
| 2 | value| [Boolean](/ru/ride/data-types/boolean) | Значение записи |
