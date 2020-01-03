# BinaryEntry

<note type="warning" title="">Структура BinaryEntry представлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).</note>

Структура бинарной записи [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage).

## Конструктор

```ride
BinaryEntry(key: String, value: ByteVector)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/data-types/string) | Ключ записи. Максимальная длина - 100 символов |
| 2 | value| [ByteVector](/ru/ride/data-types/byte-vector) | Значение записи. Максимальный размер - 5 Кбайт |
