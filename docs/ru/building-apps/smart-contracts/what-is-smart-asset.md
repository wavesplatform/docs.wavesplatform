---
sidebarDepth: 3
---

# Что такое смарт-ассет

Любой пользователь может не только создать собственный [токен](/ru/blockchain/token/) на блокчейне Waves, но и установить правила его обращения, прикрепив к нему скрипт. Например, для игровой валюты могут быть разрешены сделки только между персонажами, обладающими определенными свойствами. Токен с прикрепленным скриптом называется **смарт-ассетом**, а прикрепляемый скрипт — **скриптом ассета**.

## Скрипт ассета

Скрипт ассета проверяет [транзакции](/ru/blockchain/transaction/) с участием ассета на соответствие заданным условиям. Скрипт содержит логическое [выражение](/ru/ride/base-concepts/expression). Возможными результатами вычисления выражения являются:
* `true` — транзакция разрешена,
* `false` — транзакция отклонена,
* ошибка — транзакция отклонена.

Если скрипт ассета отклонил транзакцию, она будет либо отброшена, либо сохранена на блокчейне как неуспешная. В случае сохранения неуспешной транзакции с отправителя взимается комиссия, и больше никаких изменений на блокчейне не происходит. Подробнее в разделе [Валидация транзакции](/ru/blockchain/transaction/transaction-validation).

С помощью оператора [match ... case](/ru/ride/operators/match-case) можно настроить разные условия в зависимости от типа транзакции.

Скрипт ассета может использовать данные блокчейна: текущую высоту, балансы аккаунтов, записи в хранилищах данных аккаунтов, параметры самого ассета и других токенов. Скрипту также доступны поля текущей транзакции, за исключением [подтверждений](/ru/blockchain/transaction/transaction-proof) (`proofs`).

[Подробнее о формате и особенностях скрипта ассета](/ru/ride/script/script-types/asset-script)

## Примеры применения смарт-ассета

### Заморозка токена

Транзакции со смарт-ассетом могут быть запрещены до (или после) момента, когда [блокчейн](/ru/blockchain/blockchain/) наберет определенную [высоту](/ru/blockchain/glossary#blockchain-height).

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}

let targetHeight = 100500
height >= targetHeight
```

### Несжигаемый токен

Для смарт-ассета в примере запрещена транзакция сжигания токена.

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}

match tx {
  case t : BurnTransaction => false
   case _ => true
}
```

### Комиссия в спонсорском ассете

Следующий скрипт разрешает [транзакцию перевода](/ru/blockchain/transaction-type/transfer-transaction) смарт-ассета, только если комиссия за перевод указана в спонсорском ассете `R9yNZwP1VkUksacNjtLqua6CePGGX9dYwBEj2TyjYkv`. Аналогичное условие действует для [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction), к которой приложен платеж в смарт-ассете.

Комиссия в спонсорском ассете означает, что спонсор получает сумму комиссии в спонсорском ассете со счета отправителя транзакции, а со счета спонсора списывается эквивалентное количество WAVES в пользу генераторов блоков. Спонсор может продавать спонсорский ассет пользователям по более высокой цене и таким образом получать прибыль. [Подробнее о спонсировании](/ru/blockchain/waves-protocol/sponsored-fee)

Скрипт ассета также запрещает [транзакции массового перевода](/ru/blockchain/transaction-type/mass-transfer-transaction), поскольку для них комиссия в спонсорском ассете не предусмотрена.

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}

match tx {
   case t : TransferTransaction|InvokeScriptTransaction =>
      t.feeAssetId == base58'R9yNZwP1VkUksacNjtLqua6CePGGX9dYwBEj2TyjYkv'
   case m : MassTransferTransaction => false
   case _ => true
}
```

### Черный/белый список

Перевод смарт-ассета может быть запрещен на указанные [адреса](/ru/blockchain/account/address) или, наоборот, разрешен только на указанные адреса.

В этом скрипте список разрешенных адресов хранится на аккаунте `3MsuUWABLwFDU4FY5n1zHqbDYnPUspJHeuF` в следующем формате: ключ записи — разрешенный адрес, значение — `true`.

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}

match tx {
   case t : TransferTransaction =>
      let allowlist = Address(base58'3MsuUWABLwFDU4FY5n1zHqbDYnPUspJHeuF')
      # Убеждаемся, что адрес есть в списке разрешенных
      getBooleanValue(allowlist,toBase58String(addressFromRecipient(t.recipient).bytes))
   case _ => false
}
```

### Покупка только за BTC

:warning: Покупка и продажа смарт-ассетов на бирже [Waves.Exchange](https://waves.exchange/), разработанной сторонней командой из сообщества, временно недоступна.

Скрипт ассета не может проверить непосредственно [ордер](/ru/blockchain/order), однако при проверке [транзакции обмена](/ru/blockchain/transaction-type/exchange-transaction) может использовать параметры ордеров в ее составе.

Смарт-ассет с приведенным ниже скриптом можно покупать только за BTC.

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}

let BTCId = base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS'
match tx {
   case e : ExchangeTransaction =>
     e.sellOrder.assetPair.priceAsset == BTCId || e.sellOrder.assetPair.amountAsset == BTCId
   case _ => true
}
```

### Покупка по заданной цене

:warning: Покупка и продажа смарт-ассетов на бирже [Waves.Exchange](https://waves.exchange/), разработанной сторонней командой из сообщества, временно недоступна.

В скрипте ассета можно задать разрешение на обмен только по цене, указанной в [оракуле](/ru/blockchain/oracle).

В примере ниже оракулом служит аккаунт `3MqBeuDhyc9Zr5MM54CtYm7PivApGEYrEDB`. Его хранилище данных содержит цены в формате: в ключ записи — ID токена, значение — цена токена в WAVES. 

ID смарт-ассета можно получить через встроенную переменную `this`. В скрипте ассета переменная `this` содержит структуру [Asset](/ru/ride/structures/common-structures/asset) с параметрами ассета, к которому этот скрипт прикреплен.

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}

let oracle = Address(base58'3MqBeuDhyc9Zr5MM54CtYm7PivApGEYrEDB')

match tx {
  # Запрещается передача ассета
  case t: TransferTransaction | MassTransferTransaction | InvokeScriptTransaction =>
    false
  case e: ExchangeTransaction =>
    # Проверка, что цена обмена равна цене, указанной в оракуле
    let correctPrice = e.price == getIntegerValue(oracle, toBase58String(this.id))
    # Проверка, что смарт-ассет обменивается на WAVES
    # Если ID ассета не определен, значит, это WAVES
    let correctPriceAsset = !isDefined(e.sellOrder.assetPair.priceAsset)
    correctPrice && correctPriceAsset
  case _ => true
}
```

## Создание смарт-ассета

:warning: Обратите внимание:
- Если токен выпущен без скрипта, то скрипт нельзя добавить позже. Однако вы можете выпустить токен со скриптом, всегда возвращающим `true`, а в дальнейшем изменить скрипт.
- Смарт-ассет нельзя сделать спонсорским.

Чтобы создать смарт-ассет, нужно отправить [транзакцию выпуска](/ru/blockchain/transaction-type/issue-transaction) версии 2 и выше, указав в ней скомпилированный скрипт в кодировке base64. Удобнее всего сделать это в [Waves IDE](https://waves-ide.com/), см. инструкцию в разделе [Выпуск смарт-ассета](/ru/building-apps/smart-contracts/tools/waves-ide#выпуск-смарт-ассета). Минимальная комиссия за транзакцию — 1 WAVES.

## Изменение скрипта смарт-ассета

Для изменения скрипта предназначена [транзакция установки скрипта ассета](/ru/blockchain/transaction-type/set-asset-script-transaction). Минимальная комиссия за транзакцию — 1 WAVES.

Изменить скрипт может только тот аккаунт, который выпустил смарт-ассет, и только в том случае, если это не запрещено самим скриптом ассета (а также [скриптом аккаунта](/ru/blockchain/account/dapp), выпустившего смарт-ассет).

Например, следующий скрипт запрещает все типы транзакций, кроме транзакций перевода, в том числе запрещает и транзакцию установки скрипта ассета, поэтому изменить такой скрипт невозможно.

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}

match tx {
  case t : TransferTransaction => true
  case _ => false
}
```

Удаление скрипта не предусмотрено, нельзя превратить смарт-ассет в обычный ассет. Однако возможно установить скрипт, который всегда возвращает `true`, то есть разрешает все транзакции.

## Комиссии смарт-ассетов

Минимальная комиссия за любую транзакцию, кроме транзакций вызова скрипта, увеличивается на 0,004 WAVES за каждый участвующий смарт-ассет.

Примеры:

* Минимальная комиссия за транзакцию перевода составляет 0,001 WAVES, а в случае перевода смарт-ассета — 0,005 WAVES.
* Минимальная комиссия за транзакцию обмена — 0,003 WAVES. В случае обмена смарт-ассета на обычный ассет — 0,007 WAVES, обмена двух смарт-ассетов — 0,011 WAVES. (Комиссию за транзакцию обмена уплачивает матчер. Подробнее в разделе [Транзакция обмена](/ru/blockchain/transaction-type/exchange-transaction).)

:warning: Покупка и продажа смарт-ассетов на бирже [Waves.Exchange](https://waves.exchange/), разработанной сторонней командой из сообщества, временно недоступна.

## Статьи о смарт-ассетах

* [Смарт-ассеты Waves: «черные» и «белые» списки, интервальный трейдинг](https://habr.com/ru/company/waves/blog/444686/) _(21 мартa 2019)_
* [Применение смарт-аккаунтов и смарт-ассетов Waves в финансовых инструментах](https://habr.com/ru/company/waves/blog/443836/) _(15 мартa 2019)_
