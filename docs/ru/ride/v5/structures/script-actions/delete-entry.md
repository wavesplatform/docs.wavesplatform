# DeleteEntry

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/structures/script-actions/delete-entry)

`DeleteEntry` — cтруктура, задающая параметры удаления записи из [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage). Удаление записи выполняется, только если структура включена в [результирующее выражение](/ru/ride/v5/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции.

## Конструктор

`DeleteEntry(key: String)`

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/v5/data-types/string) | Ключ записи.  Максимальный размер — 400 байт |

## Пример

```ride
{-# STDLIB_VERSION 5 #-}
{-# SCRIPT_TYPE ACCOUNT #-}
    
@Callable(inv)
func default() = {
  (
    [
      DeleteEntry(inv.caller.toString())
    ],
    null
  )
}
```
