# Что такое смарт-аккаунт

Функциональность обычного [аккаунта](/ru/blockchain/account/) позволяет лишь удостовериться, что выпущенная с него [транзакция](/ru/blockchain/transaction/) в действительности была отправлена с этого аккаунта.

К аккаунту можно прикрепить [скрипт аккаунта](/ru/ride/script/script-types/account-script), и тогда он будет уметь гораздо большее, а именно — проверять исходящие транзакции на соответствие условиям, указанным в скрипте. Аккаунт с прикрепленным к нему скриптом называется **смарт-аккаунтом**. Со смарт-аккаунта могут быть отправлены только те транзакции, которые прошли валидацию. Например, владелец аккаунта может установить правило, согласно которому транзакции могут отправляться с адреса только в том случае, если [высота блокчейна](/ru/blockchain/glossary#высота-бnoкчейна) превышает N. Другой пример — можно разрешить отправку транзакций только определённого типа. Либо вообще отменить какую-либо проверку, установив правило, согласно которому все транзакции, отправляемые с [адреса](/ru/blockchain/account/address), должны считаться валидными.

Для проверок могут быть использованы следующие параметры:

- [Подтверждения или подпись транзакции](/ru/blockchain/transaction/transaction-proof).
- Текущая высота блокчейна.
- Произвольные данные, существующие в блокчейне, например, данные [оракулов](/ru/blockchain/oracle).

## Прикрепление скрипта аккаунта к аккаунту

Как мы уже упоминали выше, аккаунт без скрипта валидирует транзакции при помощи механизма [валидации транзакции](/ru/blockchain/transaction/transaction-validation). Работа этого механизма эквивалентна работе следующего скрипта:

```ride
sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPk)
```

Чтобы прикрепить собственный скрипт к аккаунту, необходимо отправить с него [транзакцию установки скрипта](/ru/blockchain/transaction-type/set-script-transaction). К аккаунту можно прикрепить только один скрипт. "Открепить" скрипт от смарт-аккаунта или заместить старый скрипт аккаунта новым можно только если старый скрипт не запрещает это. Для "открепления" или замены скрипта требуется отправить новую транзакцию установки скрипта. Комиссия за транзакцию установки скрипта составляет 0.01 [WAVES](/ru/blockchain/token/waves).

## Структура скрипта аккаунта

### Директива

Директива должна размещаться в самом начале скрипта. Рассмотрим пример директивы:

```ride
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}
```

Приведенная директива состоит из трёх аннотаций и сообщает компилятору следующую информацию:

- в скрипте используется версия 5 библиотеки стандартных функций,
- типом содержимого данного скрипта является Expression,
- типом переменной `this` будет `Address`.

Если директива отсутствует, то будут приняты значения аннотаций по умолчанию:

- STDLIB_VERSION 2
- CONTENT_TYPE EXPRESSION
- SCRIPT_TYPE ACCOUNT

## Выражение

Выражение проверяет отправляемые аккаунтом транзакции на соответствие заданным условиям. Если условия не соблюдаются, транзакция не будет отправлена. Возможными результатами выполнения выражения являются

- `true` (транзакция разрешена),
- `false` (транзакция запрещена),
- ошибка.

## Смарт-аккаунты и трейдинг

Смарт-аккаунты позволяют устанавливать правила (ограничения) не только для транзакций, но и для торговых операций, выполняемых с аккаунта. Примеры этих правил рассматриваются ниже.

## Примеры скриптов смарт-аккаунтов

### Покупка или продажа только BTC

Аккаунт с приведенным ниже скриптом может совершать сделки купли-продажи только в отношении BTC:

```ride
let cooperPubKey = base58'BVqYXrapgJP9atQccdBPAgJPwHDKkh6A8'
let BTCId = base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS'
match tx {
   case o: Order =>
      sigVerify(o.bodyBytes, o.proofs[0], cooperPubKey ) && (o.assetPair.priceAsset == BTCId || o.assetPair.amountAsset == BTCId)
   case _ => sigVerify(tx.bodyBytes, tx.proofs[0], cooperPubKey )
}
```

### Покупка заданного ассета

Приведенный ниже скрипт разрешает совершать с аккаунта покупки

- только заданного ассета
- только по заданной цене
- только за WAVES

```ride
let myAssetId = base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS'
let cooperPubKey = base58'BVqYXrapgJP9atQccdBPAgJPwHDKkh6A8'
 
match tx {
   case o: Order =>
      sigVerify(o.bodyBytes, o.proofs[0], cooperPubKey ) && o.assetPair.priceAsset == null && o.assetPair.amountAsset == myAssetId && o.price == 500000 && o.amount == 1000 && o.orderType == Buy
   case _ => sigVerify(tx.bodyBytes, tx.proofs[0], cooperPubKey )
}
```

## Комиссии смарт-аккаунтов

Если сложность скрипта аккаунта больше [порога сложности отправителя](/ru/ride/limits/), то минимальная комиссия за каждую транзакцию, отправленную со смарт-аккаунта, увеличивается на 0,004 WAVES.

## Статьи в блоге Waves Tech

* [The Hitchhiker’s Guide to Waves Smart Contracts. Part 1](https://medium.com/wavesprotocol/the-hitchhikers-guide-to-waves-smart-contracts-part-1-b80aa47a745a) _(14 сентября 2018)_
* [The Hitchhiker’s Guide to Waves Smart Contracts. Part 2](https://medium.com/wavesprotocol/the-hitchhikers-guide-to-waves-smart-contracts-part-2-44621fd5a007) _(18 сентября 2018)_
* [Stateful Smart Accounts. Part 1 ](https://medium.com/wavesprotocol/stateful-smart-accounts-part-1-315731d8c06) _(17 сентября 2018)_
* [Stateful Smart Accounts. Part 2](https://medium.com/wavesprotocol/stateful-smart-accounts-part-2-implementing-erc-20-and-nft-erc-721-step-by-step-7bac364fdadb) _(3 октября 2018)_
* [Применение смарт-аккаунтов Waves: от аукционов до бонусных программ](https://habr.com/en/company/waves/blog/442238/) _(1 мартa 2019)_
* [Применение смарт-аккаунтов и смарт-ассетов Waves в финансовых инструментах](https://habr.com/ru/company/waves/blog/443836/) _(15 мартa 2019)_
