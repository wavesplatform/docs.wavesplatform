# ScriptResult (доступно в Стандартной библиотеке версии 3)

> :warning: Структура ScriptResult не входит в [Стандартную библиотеку](/ru/ride/script/standard-library) версии 4. Используйте List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry|ScriptTranfer|Issue|Reissue|Burn] вместо этой структуры.

**ScriptResult** - cтруктура, используемая, когда в результате вызова [вызываемой функции](/ru/ride/functions/callable-function) должны быть выполнены как переводы токенов, так и добавление/изменение записей хранилища данных аккаунта. Принимает в качестве параметров [TransferSet](/ru/ride/structures/script-results/transfer-set) и [WriteSet](/ru/ride/structures/script-results/write-set).

## Конструктор для стандартной библиотеки версии 3

``` ride
ScriptResult(writeSet: WriteSet, transferSet: TransferSet)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | writeSet | [WriteSet](/ru/ride/structures/common-structures/write-set) | Список записей [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage) |
| 2 | transferSet | [TransferSet](/ru/ride/structures/common-structures/transfer-set) | Список переводов токенов |
