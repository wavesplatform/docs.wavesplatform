# DeleteEntry

> :warning: Структура `DeleteEntry` добавлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**.

`DeleteEntry` — cтруктура, задающая параметры удаления записи из [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage). Удаление записи выполняется, только если структура включена в [результирующее выражение](/ru/ride/v4/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции.

## Конструктор

`DeleteEntry(key: String)`

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/v4/data-types/string) | Ключ записи.  Максимальный размер — 400 байт |

## Пример

```ride
{-# STDLIB_VERSION 4 #-}
{-# SCRIPT_TYPE ACCOUNT #-}
    
@Callable(inv)
func default() = {
  [ DeleteEntry(inv.caller.toString()) ]
}
```
