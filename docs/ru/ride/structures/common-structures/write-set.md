# WriteSet (доступно в Стандартной библиотеке версии 3)

> [!WARNING]
> Структура WriteSet не входит в [Стандартную библиотеку](/ru/ride/script/standard-library.md) версии 4. Используйте `BinaryEntry`, `BooleanEntry`, `IntEntry` и `StringEntry` в `ScriptResult`.

Структура списка записей [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage.md).

## Конструктор

``` ride
WriteSet(data: List[DataEntry])
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | data | [List](/ru/ride/data-types/list.md)[[DataEntry](/ru/ride/structures/common-structures/data-entry.md)] | Список записей хранилища данных аккаунта |
