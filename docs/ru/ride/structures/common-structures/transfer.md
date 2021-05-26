# Transfer

Структура единичного перевода в составе структуры [MassTransferTransaction](/ru/ride/structures/transaction-structures/mass-transfer-transaction).

## Конструктор

``` ride
Transfer(recipient: Address|Alias, amount: Int)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | recipient | [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | Адрес получателя |
| 2 | amount | [Int](/ru/ride/data-types/int) | Количество токенов |
