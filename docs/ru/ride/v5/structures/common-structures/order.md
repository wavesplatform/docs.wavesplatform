# Order

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/structures/common-structures/order)

Структура ордера.

### Конструктор

``` ride
Order(id: ByteVector, matcherPublicKey: ByteVector, assetPair: AssetPair, orderType: Buy|Sell, price: Int, amount: Int, timestamp: Int, expiration: Int, matcherFee: Int, matcherFeeAssetId: ByteVector|Unit, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

### Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | id | [ByteVector](/ru/ride/v5/data-types/byte-vector) | ID ордера |
| 2 | matcherPublicKey | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Открытый ключ аккаунта матчера |
| 3 | assetPair | [AssetPair](/ru/ride/v5/structures/common-structures/asset-pair) | Пара токенов |
| 4 | orderType | Buy&#124;Sell | Тип ордера — продажа или покупка |
| 5 | price | [Int](/ru/ride/v5/data-types/int) | Цена обмениваемого токена |
| 6 | amount | [Int](/ru/ride/v5/data-types/int) | Количество обмениваемых токенов |
| 7 | timestamp | [Int](/ru/ride/v5/data-types/int) | [Unix-время](https://ru.wikipedia.org/wiki/Unix-время) валидации ордера матчером |
| 8 | expiration | [Int](/ru/ride/v5/data-types/int) | Unix-время, когда невыполненный ордер будет отменен |
| 9 | matcherFee | [Int](/ru/ride/v5/data-types/int) | Комиссия за исполнение ордера |
| 10 | matcherFeeAssetId | [ByteVector](/ru/ride/v5/data-types/byte-vector)&#124;[Unit](/ru/ride/v5/data-types/unit) | Токен [комиссии за транзакцию](/ru/blockchain/transaction/transaction-fee). В настоящее время возможен только WAVES |
| 11 | sender | [Address](/ru/ride/v5/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) отправителя ордера |
| 12 | senderPublicKey | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Открытый ключ аккаунта отправителя ордера |
| 13 | bodyBytes | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Массив байтов ордера |
| 14 | proofs | [List](/ru/ride/v5/data-types/list)[[ByteVector](/ru/ride/v5/data-types/byte-vector)] | Массив [подтверждений](/ru/blockchain/transaction/transaction-proof) |
