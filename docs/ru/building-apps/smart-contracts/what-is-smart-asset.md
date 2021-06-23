---
sidebarDepth: 3
---

# Что такое смарт-ассет

Любой пользователь может не только создать собственный [токен](/ru/blockchain/token/) на блокчейне Waves, но и задать правила его обращения, прикрепив к нему скрипт. Например, для смарт-ассета, используемого в качестве игровой валюты, может быть установлено разрешение совершать сделки только между персонажами, обладающими определенными свойствами. Токен с прикрепленным скриптом называется **смарт-ассетом**, а прикрепляемый скрипт — **скриптом ассета**.

## Скрипт ассета

Скрипт ассета проверяет [транзакции](/ru/blockchain/transaction/) с участием ассета на соответствие заданным условиям. Скрипт содержит логическое [выражение](/ru/ride/base-concepts/expression). Возможными результатами вычисления выражения являются:
* `true` — транзакция разрешена,
* `false` — транзакция отклонена,
* ошибка — транзакция отклонена.

С помощью оператора [match ... case](/ru/ride/operators/match-case) можно настроить разные условия в зависимости от типа транзакции.

Скрипту ассета недоступны [подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) (`proofs`).

[Подробнее о формате и особенностях скрипта ассета](/ru/ride/script/script-types/asset-script)

## Примеры применения смарт-ассета

### Заморозка токена

Транзакции со смарт-ассетом могут быть запрещены до (или после) момента, когда [блокчейн](/ru/blockchain/blockchain/) наберет определенную [высоту](/ru/blockchain/glossary#blockchain-height).

```scala
let targetHeight = 100500
height >= targetHeight
```

### Несжигаемый токен

Для смарт-ассета в примере запрещена транзакция сжигания токена.

```scala
match tx {
  case t : BurnTransaction => false
   case _ => true
}
```

### Комиссия за перевод только в указанном ассете

Следующий скрипт разрешает перевод смарт-ассета, только если комиссия за перевод указана в спонсорском ассете `oWgJN6YGZFtZrV8BWQ1PGktZikgg7jzGmtm16Ktyvjd`. Скрипт также запрещает массовый перевод, поскольку для него комиссия в спонсорском ассете не предусмотрена.

Комиссия в спонсорском ассете означает, что спонсор получает сумму комиссии в спонсорском ассете со счета отправителя транзакции, а со счета спонсора списывается эквивалентное количество WAVES в пользу генераторов блоков. Спонсор может продавать спонсорский ассет пользователям по более высокой цене и таким образом получать прибыль. [Подробнее о спонсировании](/ru/blockchain/waves-protocol/sponsored-fee)


```scala
match tx {
   case t : TransferTransaction =>
      t.feeAssetId == base58'oWgJN6YGZFtZrV8BWQ1PGktZikgg7jzGmtm16Ktyvjd'
   case t : MassTransferTransaction => false
   case _ => true
}
```


## Черные/белые списки

Перевод смарт-ассета может быть запрещен на указанные [адреса](/ru/blockchain/account/address) или, наоборот, разрешен только на указанные адреса.

В этом скрипте список разрешенных адресов хранится на аккаунте `3P6ms9EotRX8JwSrebeTXYVnzpsGCrKWLv4`: ключ записи — разрешенный адрес, значение — `true`.

match tx {
   case t : TransferTransaction =>
      let allowlist = Address(base58'3P6ms9EotRX8JwSrebeTXYVnzpsGCrKWLv4')
      #убеждаемся, что в стейте эмитента содержится ID текущей транзакции
      getBooleanValue(allowlist,addressFromRecipient(t.recipient).bytes.toBase58String)
   case _ => false
}

### Покупка только за BTC

:warning: Покупка и продажа смарт-ассетов на бирже [Waves.Exchange](https://waves.exchange/), разработанной сторонней командой из сообщества, временно недоступна.

Код смарт-ассета может проверять только транзакции, но не [ордера](/ru/blockchain/order). Однако при проверке [транзакции обмена](/ru/blockchain/transaction-type/exchange-transaction) можно использовать параметры ордеров в ее составе.

Смарт-ассет с приведенным ниже скриптом можно покупать только за BTC.

```scala
let BTCId = base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS'
match tx {
   case t : ExchangeTransaction =>
      t.sellOrder.assetPair.priceAsset == BTCId || t.sellOrder.assetPair.amountAsset == BTCId
   case _ => true
}
```

### Покупка только за BTC

:warning: Покупка и продажа смарт-ассетов на бирже [Waves.Exchange](https://waves.exchange/), разработанной сторонней командой из сообщества, временно недоступна.

Код смарт-ассета может проверять только транзакции, но не [ордера](/ru/blockchain/order). Однако при проверке [транзакции обмена](/ru/blockchain/transaction-type/exchange-transaction) можно использовать параметры ордеров в ее составе.

Смарт-ассет с приведенным ниже скриптом можно покупать только за BTC.

```scala
let BTCId = base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS'
match tx {
   case t : ExchangeTransaction =>
     t.sellOrder.assetPair.priceAsset == BTCId || t.sellOrder.assetPair.amountAsset == BTCId
   case _ => true
}
```

### Покупка по заданной цене

В скрипте смарт-ассета можно задать разрешение на торговлю только по цене, зафиксированной в хранилище данных оракула.

```scala
let oracle = Address(base58'3PLNmokt22NrSiNvCLvwMUP84LCMJqbXwAD')
let assetId = toBase58String(base58'3JmaWyFqWo8YSA8x3DXCBUW7veesxacvKx19dMv7wTMg')

match tx {
  #запрещаем передачу ассета
  case t: TransferTransaction | MassTransferTransaction | InvokeScriptTransaction => false
  case e: ExchangeTransaction =>
    #убеждаемся, что торговля происходит по цене, заданной в стейте оракла для этого ассета
    let correctPrice = e.price == extract(getInteger(oracle, assetId + "_" + toString(e.version)))
    #убеждаемся, что торговля происходит в обмен на WAVES
    let correctPriceAsset = !isDefined(e.sellOrder.assetPair.priceAsset)
    let correctVersion
    correctPrice && correctPriceAsset
  case _ => true
}
```

Обратите внимание: если ID ассета не определен, значит, это WAVES. 

## Создание смарт-ассета

:warning: Обратите внимание:
- Если токен выпущен без скрипта, то скрипт нельзя добавить позже. Однако вы можете выпустить токен со скриптом, всегда возвращающим `true`, а в дальнейшем изменить скрипт.
- Смарт-ассет нельзя сделать спонсорским.

Чтобы создать смарт-ассет, нужно отправить [транзакцию вызова скрипта](/ru/blockchain/transaction-type/issue-transaction) версии 2 и выше, указав в ней скомпилированный скрипт в кодировке base64. Удобнее всего сделать это в [Waves IDE](https://waves-ide.com/), см. раздел [Выпуск смарт-ассета](/ru/building-apps/smart-contracts/tools/waves-ide#выпуск-смарт-ассета). Минимальная комиссия за транзакцию — 1 WAVES.

## Изменение скрипта смарт-ассета

Изменить скрипт может только тот аккаунт, который выпустил смарт-ассет, и только в том случае, если это не запрещено самим скриптом ассета (а также [скриптом аккаунта](/ru/blockchain/account/dapp), выпустившего смарт-ассет).

Например, следующий скрипт разрешает использовать ассет только в транзакциях вызова скрипта, поэтому изменить такой скрипт невозможно.

```scala
match tx {
  case t : InvokeScriptTransaction => true
  case _ => false
}
```

Для изменения скрипта предназначена [транзакция установки скрипта ассета](/ru/blockchain/transaction-type/issue-transaction). Минимальная комиссия за транзакцию — 1 WAVES.

Удалить скрипт и сделать смарт-ассет обычным ассетом невозможно. Однако возможно установить скрипт, который всегда возвращает `true`, то есть разрешает все транзакции.

## Комиссии смарт-ассетов

Минимальная комиссия за любую транзакцию, кроме транзакций вызова скрипта, увеличивается на 0,004 WAVES за каждый участвующий смарт-ассет.

Примеры:

* Минимальная комиссия за транзакцию перевода составляет 0,001 WAVES, а в случае перевода смарт-ассета — 0,005 WAVES.
* Минимальная комиссия за транзакцию обмена — 0,003 WAVES. В случае обмена смарт-ассета на обычный ассет — 0,007 WAVES, обмена двух смарт-ассетов — 0,011 WAVES. (Комиссию за транзакцию обмена уплачивает матчер. Подробнее в разделе [Транзакция обмена](/ru/blockchain/transaction-type/exchange-transaction).)

:warning: Покупка и продажа смарт-ассетов на бирже [Waves.Exchange](https://waves.exchange/), разработанной сторонней командой из сообщества, временно недоступна.

## Статьи о смарт-ассетах

* [Смарт-ассеты Waves: «черные» и «белые» списки, интервальный трейдинг](https://habr.com/ru/company/waves/blog/444686/) _(21 мартa 2019)_
* [Применение смарт-аккаунтов и смарт-ассетов Waves в финансовых инструментах](https://habr.com/ru/company/waves/blog/443836/) _(15 мартa 2019)_
