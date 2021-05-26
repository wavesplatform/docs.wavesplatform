# [Ride v4 и v3] AttachedPayment

:warning: Это документация Стандартной библиотеки версии 4 и 3. Рекомендуем использовать версию 5. [Перейти к&nbsp;версии&nbsp;5](/ru/ride/structures/common-structures/attached-payment)

Структура платежа транзакции вызова скрипта.

## Конструктор

``` ride
AttachedPayment(assetId: ByteVector|Unit, amount: Int)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/ru/ride/v4/data-types/byte-vector)&#124;[Unit](/ru/ride/v4/data-types/unit) | ID [токена](/ru/blockchain/token/) |
| 2 | amount | [Int](/ru/ride/v4/data-types/int) | Сумма платежа |
