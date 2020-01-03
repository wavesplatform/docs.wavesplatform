# ScriptResult

<note type="warning" title="">Структура ScriptResult не входит в [Стандартную библиотеку](/ru/ride/script/standard-library) версии 4. Используйте List[BinaryEntry|BooleanEntry|IntEntry|StringEntry|ScriptTranfer|Issue|Reissue|Burn] вместо этой структуры.</note>

Структура результата выполнения [вызываемой функции](/ru/ride/functions/callable-function).

## Конструктор для стандартной библиотеки версии 3

``` ride
ScriptResult(writeSet: WriteSet, transferSet: TransferSet)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | writeSet | [WriteSet](/ru/ride/structures/common-structures/write-set) | Список записей [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage) |
| 2 | transferSet | [TransferSet](/ru/ride/structures/common-structures/transfer-set) | Список переводов токенов |
