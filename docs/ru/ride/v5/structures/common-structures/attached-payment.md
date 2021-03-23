# [Ride v5] AttachedPayment

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/structures/common-structures/attached-payment)

Структура платежа, приложенного к вызову скрипта и доступного [вызываемой функции](/ru/ride/v5/functions/callable-function). Используется:
* в структуре [Invocation](/ru/ride/v5/structures/common-structures/invocation);
* в структуре [InvokeScriptTransaction](/ru/ride/v5/structures/transaction-structures/invoke-script-transaction);
* в функции [Invoke](/ru/ride/v5/functions/built-in-functions/dapp-to-dapp).

## Конструктор

``` ride
AttachedPayment(assetId: ByteVector|Unit, amount: Int)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/ru/ride/v5/data-types/byte-vector)&#124;[Unit](/ru/ride/v5/data-types/unit) | ID [токена](/ru/blockchain/token/) |
| 2 | amount | [Int](/ru/ride/v5/data-types/int) | Сумма платежа |
