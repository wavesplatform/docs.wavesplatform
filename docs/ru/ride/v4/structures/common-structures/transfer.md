# [Ride v4 и v3] Transfer

:warning: Это документация Стандартной библиотеки версии 4 и 3. Рекомендуем использовать версию 5. [Перейти к&nbsp;версии&nbsp;5](/ru/ride/structures/common-structures/transfer)

Структура перевода [токенов](/ru/blockchain/token/) транзакции массового перевода.

## Конструктор

``` ride
Transfer(recipient: Address|Alias, amount: Int)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | recipient | [Address](/ru/ride/v4/structures/common-structures/address)&#124;[Alias](/ru/ride/v4/structures/common-structures/alias) | Адрес получателя |
| 2 | amount | [Int](/ru/ride/v4/data-types/int) | Количество токенов |
