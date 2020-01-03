# BooleanEntry

> [!WARNING]
> Структура BooleanEntry представлена в [Стандартной библиотеке](/ru/ride/script/standard-library.md) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network.md).

Структура записи логического типа [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage.md).

## Конструктор

```ride
BooleanEntry(key: String, value: Boolean)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/data-types/string.md) | Ключ записи. Максимальная длина - 100 символов |
| 2 | value| [Boolean](/ru/ride/data-types/boolean.md) | Значение записи |
