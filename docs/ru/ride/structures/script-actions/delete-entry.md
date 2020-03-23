# DeleteEntry

> Возможность использования DeleteEntry доступна с версии ноды 1.2.0. Возможность включается с активацией на ноде функциональности "Ride V4 and multiple attached payments for Invoke Script Transaction" (№16).
На данный момент версии 1.2.x доступны на [stagenet](/ru/blockchain/blockchain-network/stage-network)

**DeleteEntry** - cтруктура, задающая параметры удаления записи из [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage), которое выполняется в результате вызова [вызываемой функции](/ru/ride/functions/callable-function).

## Конструктор

`DeleteEntry(key: String)`

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/data-types/string) | Ключ записи |

## Пример

```ride
{-# STDLIB_VERSION 4 #-}
{-# SCRIPT_TYPE ACCOUNT #-}
    
@Callable(inv)
func default() = {
  [ DeleteEntry(inv.caller.toString()) ]
}
```
