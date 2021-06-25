# [Ride v3] ScriptResult

:warning: Это документация Стандартной библиотеки версии 4 и 3. Рекомендуем использовать версию 5.

> :warning: Структура ScriptResult не входит в [Стандартную библиотеку](/ru/ride/script/standard-library) версии 4. Используйте List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry|ScriptTranfer|Issue|Reissue|Burn] вместо этой структуры.

**ScriptResult** - cтруктура, используемая, когда в результате вызова [вызываемой функции](/ru/ride/v4/functions/callable-function) должны быть выполнены как переводы токенов, так и добавление/изменение записей хранилища данных аккаунта. Принимает в качестве параметров [TransferSet](/ru/ride/v4/structures/script-results/transfer-set) и [WriteSet](/ru/ride/v4/structures/script-results/write-set).

## Конструктор для стандартной библиотеки версии 3

``` ride
ScriptResult(writeSet: WriteSet, transferSet: TransferSet)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | writeSet | [WriteSet](/ru/ride/v4/structures/script-results/write-set) | Список записей [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage) |
| 2 | transferSet | [TransferSet](/ru/ride/v4/structures/script-results/transfer-set) | Список переводов токенов |
