# [Ride v4 и v3] GenesisTransaction

:warning: Это документация Стандартной библиотеки версии 4 и 3. Рекомендуем использовать версию 5. [Перейти к&nbsp;версии&nbsp;5](/ru/ride/structures/transaction-structures/genesis-transaction)

Структура [транзакции генезиса](/ru/blockchain/transaction-type/genesis-transaction).

## Конструктор

``` ride
GenesisTransaction(amount: Int, recipient: Address|Alias, id: ByteVector, fee: Int, timestamp: Int, version: Int)
```

## Поля структуры

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | amount | [Int](/ru/ride/v4/data-types/int) | Количество [токена](/ru/blockchain/token/) |
| 2 | recipient | [Address](/ru/ride/v4/structures/common-structures/address)&#124;[Alias](/ru/ride/v4/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) получателя токена |
| 3 | id | [ByteVector](/ru/ride/v4/data-types/byte-vector) | ID транзакции |
| 4 | fee | [Int](/ru/ride/v4/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 5 | timestamp | [Int](/ru/ride/v4/data-types/int) | Временная метка транзакции |
| 6 | version | [Int](/ru/ride/v4/data-types/int) | Версия транзакции |
