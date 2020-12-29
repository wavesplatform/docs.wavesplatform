# [Ride v5] ScriptTransfer

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/structures/script-actions/script-transfer)

`ScriptTransfer` — cтруктура, задающая параметры перевода токенов. Перевод выполняется, только если структура включена в [результирующее выражение](/ru/ride/v5/functions/callable-function#резуnьтат-выпоnнения-вызываемой-функции-2) вызываемой функции.

Если токен является смарт-ассетом, то скрипт ассета верифицирует действие `ScriptTransfer` как [TransferTransaction](/ru/ride/v5/structures/transaction-structures/transfer-transaction) с комиссией 0 и версией 0. Если скрипт ассета отклоняет действие, то транзакция, которая вызвала скрипт dApp, либо отклоняется, либо сохраняется на блокчейне как неуспешная, см. раздел [Валидация транзакций](/ru/blockchain/transaction/transaction-validation).

### Конструктор

``` ride
ScriptTransfer(recipient: Address|Alias, amount: Int, asset: ByteVector|Unit)
```

### Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | recipient | [Address](/ru/ride/v5/structures/common-structures/address)&#124;[Alias](/ru/ride/v5/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) получателя токенов |
| 2 | amount | [Int](/ru/ride/v5/data-types/int) | Количество токенов |
| 3 | asset | [ByteVector](/ru/ride/v5/data-types/byte-vector)&#124;[Unit](/ru/ride/v5/data-types/unit) | ID токена |
