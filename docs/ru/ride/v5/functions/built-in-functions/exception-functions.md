# [Ride v5] Функции исключения

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/functions/built-in-functions/exception-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [throw()](#throw) | Выбрасывает исключение | 1 |
| [throw(String)](#throw-string) | Выбрасывает исключение с сообщением | 1 |

Функция `throw` имеет возвращаемый тип [Nothing](/ru/ride/v5/data-types/).

В Ride нет обработки исключений. После выбрасывания исключения выполнение скрипта прекращается. Транзакция при этом отклоняется либо сохраняется на блокчейне как неуспешная, подробнее см. в разделе [Валидация транзакции](/ru/blockchain/transaction/transaction-validation).

## throw()

Выбрасывает исключение.

``` ride
throw()
```

### Пример

``` ride
let amount = match getInteger(this, toBase58String(i.caller.bytes))
if (amount < 0)
            then throw()
```

## throw(String)

Выбрасывает исключение с сообщением.

``` ride
throw(err: String)
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `err`: String | Сообщение исключения |

### Пример

``` ride
let amount = match getInteger(this, toBase58String(i.caller.bytes))
if (amount < 0)
            then throw("Can't send negative amount")
```
