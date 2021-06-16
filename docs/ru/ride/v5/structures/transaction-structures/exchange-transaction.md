# [Ride v5] Exchange transaction

:warning: Это документация Стандартной библиотеки **версии 5**, которая доступна с момента активации фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations”. [Перейти к&nbsp;версии&nbsp;4](/ru/ride/structures/transaction-structures/exchange-transaction)

Структура [транзакции обмена](/ru/blockchain/transaction-type/exchange-transaction).

## Конструктор

``` ride
ExchangeTransaction(buyOrder: Order, sellOrder: Order, price: Int, amount: Int, buyMatcherFee: Int, sellMatcherFee: Int, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | buyOrder | [Order](/ru/ride/v5/structures/common-structures/order) | [Бинарный формат ордера](/ru/blockchain/binary-format/transaction-binary-format/) на покупку |
| 2 | sellOrder | [Order](/ru/ride/v5/structures/common-structures/order) | Ордер на продажу |
| 3 | price | [Int](/ru/ride/v5/data-types/int) | Стоимость токена |
| 4 | amount | [Int](/ru/ride/v5/data-types/int) | Количество токенов |
| 5 | buyMatcherFee | [Int](/ru/ride/v5/data-types/int) | Комиссия [матчера](https://docs.waves.exchange/ru/waves-matcher/) за покупку |
| 6 | sellMatcherFee | [Int](/ru/ride/v5/data-types/int) | Комиссия матчера за продажу |
| 7 | id | [ByteVector](/ru/ride/v5/data-types/byte-vector) | ID транзакции |
| 8 | fee | [Int](/ru/ride/v5/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 9 | timestamp | [Int](/ru/ride/v5/data-types/int) | Временная метка транзакции |
| 10 | version | [Int](/ru/ride/v5/data-types/int) | Версия транзакции |
| 11 | sender | [Address](/ru/ride/v5/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) отправителя транзакции |
| 12 | senderPublicKey | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Открытый ключ отправителя транзакции |
| 13 | bodyBytes | [ByteVector](/ru/ride/v5/data-types/byte-vector) | [Байты тела транзакции](/ru/blockchain/glossary#б) |
| 14 | proofs | [List](/ru/ride/v5/data-types/list)[[ByteVector](/ru/ride/v5/data-types/byte-vector)] | Список [подтверждений](/ru/blockchain/transaction/transaction-proof) |
