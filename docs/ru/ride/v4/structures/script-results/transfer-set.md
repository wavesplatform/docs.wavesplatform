# TransferSet (доступно в Стандартной библиотеке версии 3)

> :warning: Структура TransferSet не входит в [Стандартную библиотеку](/ru/ride/script/standard-library) версии 4. Начиная с версии 4, используйте `ScriptTransfer` напрямую, см. раздел [Вызываемая функция](/ru/ride/functions/callable-function).

**TransferSet** - cтруктура, объединяющая несколько структур [ScriptTransfer](/ru/ride/structures/script-actions/script-transfer). Переводы токенов, заданные при помощи структур ScriptTransfer, будут выполнены в результате вызова [вызываемой функции](/ru/ride/functions/callable-function).

## Конструктор

``` ride
TransferSet(transfers: List[ScriptTransfer])
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | transfers | [List](/ru/ride/data-types/list)[[ScriptTransfer](/ru/ride/structures/script-actions/script-transfer)] | Список переводов токенов |
