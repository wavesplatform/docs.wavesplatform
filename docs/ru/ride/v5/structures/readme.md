# [Ride v5] Структуры

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/structures/)

Все структуры в Ride являются встроенными — вы не можете создавать свои собственные структуры.

У всех структур есть конструктор.

## Примеры

Код, который создает экземпляр структуры `IntegerEntry` и читает из него ключ и значение.

``` ride
let data = IntegerEntry("Age", 33)
let key  = data.key
let val = data.value
```