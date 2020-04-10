# BinaryEntry

> :warning: Структура BinaryEntry представлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

**BinaryEntry** - cтруктура, задающая ключ и значение бинарной записи [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage), которая создается или изменяется в результате вызова [вызываемой функции](/ru/ride/functions/callable-function).

## Конструктор

```ride
BinaryEntry(key: String, value: ByteVector)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/data-types/string) | Ключ записи. Максимальная длина - 100 символов |
| 2 | value| [ByteVector](/ru/ride/data-types/byte-vector) | Значение записи. Максимальный размер - 5 Кбайт |
