# [Ride v5] Burn

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/structures/script-actions/burn)

`Burn` — cтруктура, задающая параметры сжигания токена. Cжигание токена выполняется, только если структура включена в [результирующее выражение](/ru/ride/v5/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции.

Если токен является смарт-ассетом, то скрипт ассета верифицирует действие `Burn` как [BurnTransaction](/ru/ride/v5/structures/transaction-structures/burn-transaction) с комиссией 0 и версией 0. Если скрипт ассета отклоняет действие, то транзакция, которая вызвала скрипт dApp, либо отклоняется, либо сохраняется на блокчейне как неуспешная, см. раздел [Валидация транзакций](/ru/blockchain/transaction/transaction-validation).

## Конструктор

```ride
Burn(assetId: ByteVector, quantity: Int)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/ru/ride/v5/data-types/byte-vector) | [ID токена](/ru/blockchain/token/token-id), предназначенного для сжигания |
| 2 | quantity | [Int](/ru/ride/v5/data-types/int) | Количество токена |
