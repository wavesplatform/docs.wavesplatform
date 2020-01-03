# Exchange transaction

Структура [транзакции обмена](/ru/blockchain/transaction-type/exchange-transaction.md).

## Конструктор

``` ride
ExchangeTransaction(buyOrder: Order, sellOrder: Order, price: Int, amount: Int, buyMatcherFee: Int, sellMatcherFee: Int, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | buyOrder | [Order](/ru/ride/structures/common-structures/order.md) | [Бинарный формат ордера](/ru/blockchain/binary-format/transaction-binary-format.md) на покупку |
| 2 | sellOrder | [Order](/ru/ride/structures/common-structures/order.md) | Ордер на продажу |
| 3 | price | [Int](/ru/ride/data-types/int.md) | Стоимость токена |
| 4 | amount | [Int](/ru/ride/data-types/int.md) | Количество токенов |
| 5 | buyMatcherFee | [Int](/ru/ride/data-types/int.md) | Комиссия [матчера](/ru/waves-node/extensions/matcher.md) за покупку |
| 6 | sellMatcherFee | [Int](/ru/ride/data-types/int.md) | Комиссия матчера за продажу |
| 7 | id | [ByteVector](/ru/ride/data-types/byte-vector.md) | [ID транзакции](/ru/blockchain/transaction/transaction-id.md) |
| 8 | fee | [Int](/ru/ride/data-types/int.md) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee.md) |
| 9 | timestamp | [Int](/ru/ride/data-types/int.md) | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp.md) |
| 10 | version | [Int](/ru/ride/data-types/int.md) | [Версия транзакции](/ru/blockchain/transaction/transaction-version.md) |
| 11 | sender | [Address](/ru/ride/structures/common-structures/address.md) | [Адрес](/ru/blockchain/account/address.md) отправителя транзакции |
| 12 | senderPublicKey | [ByteVector](/ru/ride/data-types/byte-vector.md) | Открытый ключ отправителя транзакции |
| 13 | bodyBytes | [ByteVector](/ru/ride/data-types/byte-vector.md) | [Байты тела транзакции](/ru/blockchain/transaction/transaction-body-bytes.md) |
| 14 | proofs | [List](/ru/ride/data-types/list.md)[[ByteVector](/ru/ride/data-types/byte-vector.md)] | Список [подтверждений](/ru/blockchain/transaction/transaction-proof.md) |
