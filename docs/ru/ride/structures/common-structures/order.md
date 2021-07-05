# Order

Структура [ордера](/ru/blockchain/order). Используется:
* при проверке исходящего ордера [скриптом аккаунта](/ru/ride/script/script-types/account-script) или функцией-верификатором [dApp-скрипта](/ru/ride/script/script-types/dapp-script);
* в структуре [InvokeScriptTransaction](/ru/ride/structures/transaction-structures/invoke-script-transaction).

## Конструктор

``` ride
Order(id: ByteVector, matcherPublicKey: ByteVector, assetPair: AssetPair, orderType: Buy|Sell, price: Int, amount: Int, timestamp: Int, expiration: Int, matcherFee: Int, matcherFeeAssetId: ByteVector|Unit, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | id | [ByteVector](/ru/ride/data-types/byte-vector) | ID ордера |
| 2 | matcherPublicKey | [ByteVector](/ru/ride/data-types/byte-vector) | Открытый ключ аккаунта матчера |
| 3 | assetPair | [AssetPair](/ru/ride/structures/common-structures/asset-pair) | Пара токенов |
| 4 | orderType | Buy&#124;Sell | Тип ордера — продажа или покупка |
| 5 | price | [Int](/ru/ride/data-types/int) | Цена обмениваемого токена |
| 6 | amount | [Int](/ru/ride/data-types/int) | Количество обмениваемых токенов |
| 7 | timestamp | [Int](/ru/ride/data-types/int) | [Unix-время](https://ru.wikipedia.org/wiki/Unix-время) валидации ордера матчером |
| 8 | expiration | [Int](/ru/ride/data-types/int) | Unix-время, когда невыполненный ордер будет отменен |
| 9 | matcherFee | [Int](/ru/ride/data-types/int) | Комиссия за исполнение ордера |
| 10 | matcherFeeAssetId | [ByteVector](/ru/ride/data-types/byte-vector)&#124;[Unit](/ru/ride/data-types/unit) | Токен [комиссии за транзакцию](/ru/blockchain/transaction/transaction-fee). В настоящее время возможен только WAVES |
| 11 | sender | [Address](/ru/ride/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) отправителя ордера |
| 12 | senderPublicKey | [ByteVector](/ru/ride/data-types/byte-vector) | Открытый ключ аккаунта отправителя ордера |
| 13 | bodyBytes | [ByteVector](/ru/ride/data-types/byte-vector) | Массив байтов ордера |
| 14 | proofs | [List](/ru/ride/data-types/list)[[ByteVector](/ru/ride/data-types/byte-vector)] | Массив [подтверждений](/ru/blockchain/transaction/transaction-proof) |

## Пример

Приведенный ниже скрипт разрешает совершать с аккаунта покупку:

- только заданного ассета,
- только по заданной цене,
- только за WAVES.

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}

let myAssetId = base58'8LLpj6yQLUu37KUt3rVo1S69j2gWMbgbM6qqgt2ac1Vb'

match tx {
   case o: Order =>
        let isWavesPriceAsset = !isDefined(o.assetPair.priceAsset)
        let rightPair = (o.assetPair.amountAsset == myAssetId) && isWavesPriceAsset
        sigVerify(o.bodyBytes, o.proofs[0], o.senderPublicKey)
        && rightPair
        && o.price == 500000
        && o.orderType == Buy
   case _ => false
}
```
