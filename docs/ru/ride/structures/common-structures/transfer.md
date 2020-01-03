# Transfer

Структура перевода [токенов](/ru/blockchain/token) транзакции массового перевода.

## Конструктор

``` ride
Transfer(recipient: Address|Alias, amount: Int)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | recipient | [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | Адрес получателя |
| 2 | amount | [Int](/ru/ride/data-types/int) | Количество токенов |
