# AttachedPayment

Структура платежа транзакции вызова скрипта.

## Конструктор

``` ride
AttachedPayment(assetId: ByteVector|Unit, amount: Int)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/ru/ride/data-types/byte-vector)&#124;[Unit](/ru/ride/data-types/unit) | ID [токена](/ru/blockchain/token) |
| 2 | amount | [Int](/ru/ride/data-types/int) | Сумма платежа |
