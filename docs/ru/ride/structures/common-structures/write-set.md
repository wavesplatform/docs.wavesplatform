# WriteSet (доступно в Стандартной библиотеке версии 3)

<note type="warning" title="">Структура WriteSet не входит в [Стандартную библиотеку](/ru/ride/script/standard-library) версии 4. Используйте `BinaryEntry`, `BooleanEntry`, `IntEntry` и `StringEntry` напрямую, см. раздел [Вызываемая функция](/ru/ride/functions/callable-function).</note>

Структура списка записей [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage).

## Конструктор

``` ride
WriteSet(data: List[DataEntry])
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | data | [List](/ru/ride/data-types/list)[[DataEntry](/ru/ride/structures/common-structures/data-entry)] | Список записей хранилища данных аккаунта |
