# [Ride v5] Transfer

:warning: Это документация Стандартной библиотеки **версии 5**, которая доступна с момента активации фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations”. [Перейти к&nbsp;версии&nbsp;4](/ru/ride/structures/common-structures/transfer)

Структура единичного перевода в составе структуры [MassTransferTransaction](/ru/ride/v5/structures/transaction-structures/mass-transfer-transaction).

## Конструктор

``` ride
Transfer(recipient: Address|Alias, amount: Int)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | recipient | [Address](/ru/ride/v5/structures/common-structures/address)&#124;[Alias](/ru/ride/v5/structures/common-structures/alias) | Адрес получателя |
| 2 | amount | [Int](/ru/ride/v5/data-types/int) | Количество токенов |
