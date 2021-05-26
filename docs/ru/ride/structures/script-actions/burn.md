# Burn

`Burn` — cтруктура, задающая параметры сжигания токена. Cжигание токена выполняется, только если структура включена в [результирующее выражение](/ru/ride/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции.

Если токен является смарт-ассетом, то скрипт ассета верифицирует действие `Burn` как [BurnTransaction](/ru/ride/structures/transaction-structures/burn-transaction) с комиссией 0 и версией 0. Если скрипт ассета отклоняет действие, то транзакция, которая вызвала скрипт dApp, либо отклоняется, либо сохраняется на блокчейне как неуспешная, см. раздел [Валидация транзакций](/ru/blockchain/transaction/transaction-validation).

## Конструктор

```ride
Burn(assetId: ByteVector, quantity: Int)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/ru/ride/data-types/byte-vector) | [ID токена](/ru/blockchain/token/token-id), предназначенного для сжигания |
| 2 | quantity | [Int](/ru/ride/data-types/int) | Количество токена |
