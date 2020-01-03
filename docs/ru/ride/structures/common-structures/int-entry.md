# IntEntry

<note type="warning" title="">Структура IntEntry представлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).</note>

Структура записи целочисленного типа [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage).

## Конструктор

```ride
IntEntry(key: String, value: Int)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/data-types/string) | Ключ записи. Максимальная длина - 100 символов |
| 2 | value | [Int](/ru/ride/data-types/int) | Value of a record |
