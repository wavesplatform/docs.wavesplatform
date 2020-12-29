# [Ride v5] Reissue

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/structures/script-actions/reissue)

`Reissue` — cтруктура, задающая параметры довыпуска токена. Довыпуск выполняется, только если структура включена в [результирующее выражение](/ru/ride/v5/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции.

Довыпуск доступен только для токена, который выпущен аккаунтом dApp. 

Если токен является смарт-ассетом, то скрипт ассета верифицирует действие `Reissue` как [ReissueTransaction](/ru/ride/v5/structures/transaction-structures/reissue-transaction) с комиссией 0 и версией 0. Если скрипт ассета отклоняет действие, то транзакция, которая вызвала скрипт dApp, либо отклоняется, либо сохраняется на блокчейне как неуспешная, см. раздел [Валидация транзакций](/ru/blockchain/transaction/transaction-validation).

## Конструктор

```ride
Reissue(assetId: ByteVector, quantity: Int, isReissuable: Boolean)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/ru/ride/v5/data-types/byte-vector) | [ID токена](/ru/blockchain/token/token-id) для довыпуска |
| 2 | quantity | [Int](/ru/ride/v5/data-types/int) | Количество токена |
| 3 | isReissuable | [Boolean](/ru/ride/v5/data-types/boolean) | Флаг возможности довыпуска |
