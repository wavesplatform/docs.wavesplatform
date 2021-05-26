# WriteSet (доступно в Стандартной библиотеке версии 3)

> :warning: Структура WriteSet не входит в [Стандартную библиотеку](/ru/ride/script/standard-library) версии 4. Используйте `BinaryEntry`, `BooleanEntry`, `IntegerEntry` и `StringEntry` напрямую, см. раздел [Вызываемая функция](/ru/ride/v4/functions/callable-function).

**WriteSet** - cтруктура, объединяющая несколько структур [DataEntry](/ru/ride/v4/structures/script-actions/script-transfer). Добавления/изменения записей хранилища данных аккаунта, заданные при помощи структур DataEntry, будут выполнены в результате вызова [вызываемой функции](/ru/ride/v4/functions/callable-function).

## Конструктор

``` ride
WriteSet(data: List[DataEntry])
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | data | [List](/ru/ride/v4/data-types/list)[[DataEntry](/ru/ride/v4/structures/script-actions/data-entry)] | Список записей хранилища данных аккаунта |
