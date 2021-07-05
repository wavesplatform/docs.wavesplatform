# AttachedPayment

Структура платежа, приложенного к вызову скрипта и доступного [вызываемой функции](/ru/ride/functions/callable-function). Используется:
* в структуре [Invocation](/ru/ride/structures/common-structures/invocation);
* в структуре [InvokeScriptTransaction](/ru/ride/structures/transaction-structures/invoke-script-transaction);
* в функциях [invoke](/ru/ride/functions/built-in-functions/dapp-to-dapp#invoke) и [reentrantInvoke](/ru/ride/functions/built-in-functions/dapp-to-dapp#reentrantinvoke).

## Конструктор

``` ride
AttachedPayment(assetId: ByteVector|Unit, amount: Int)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/ru/ride/data-types/byte-vector)&#124;[Unit](/ru/ride/data-types/unit) | ID [токена](/ru/blockchain/token/) |
| 2 | amount | [Int](/ru/ride/data-types/int) | Сумма платежа |
