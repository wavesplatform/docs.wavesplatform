# BinaryEntry

> [!ВНИМАНИЕ]
> Структура BinaryEntry представлена в [Стандартной библиотеке](/ru/ride/script/standard-library.md) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network.md).

Структура бинарной записи [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage.md).

## Конструктор

```ride
BinaryEntry(key: String, value: ByteVector)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/data-types/string.md) | Ключ записи. Максимальная длина - 100 символов |
| 2 | value| [ByteVector](/ru/ride/data-types/byte-vector.md) | Значение записи. Максимальный размер - 5 Кбайт |
