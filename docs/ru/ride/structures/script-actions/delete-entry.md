# DeleteEntry

> Структура `DeleteEntry` доступна с версии ноды 1.2.0. Возможность включается после активации фичи №&nbps;15 “Ride V4, VRF, Protobuf, Failed transactions”. Версии 1.2.x в настоящее время работают только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

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
