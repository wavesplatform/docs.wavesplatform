# Приватные функции

Следующие приватные методы устарели:

* `POST /assets/issue`
* `POST /assets/transfer`
* `POST /assets/reissue`
* `POST /assets/burn`
* `POST /assets/masstransfer`

Используйте вместо них метод `POST /transactions/sign`, указав в теле запроса тип транзакции. Подробности и примеры см. в разделе [Работа с транзакциями в REST API ноды](/ru/waves-node/transactions).

## POST /assets/issue

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Выпустить новый ассет для адреса, кошелька ноды.

**Параметры запроса:**

    Как в [Broadcast Issue Assets] кроме `senderPublicKey`, `timestamp` и `signature`.
    "sender" - Адрес аккаунта отправителя, которые есть в кошельке ноды, Base58.

**Пример запроса в JSON:**

```js
{
  "name": "Test Asset 1",
  "quantity": 100000000000,
  "description": "Some description",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "decimals": 8,
  "reissuable": true,
  "fee": 100000000
}
```

**Параметры ответа:**

```
Как в [Broadcast Issue Assets]
```

**Пример ответа в JSON:**

```
Как в [Broadcast Issue Assets]
```

## POST /assets/reissue 

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Выпуск дополнительного количества ассетов.

**Параметры запроса:**

    Как в [Broadcast Reissue Assets] кроме `senderPublicKey`, `timestamp` и `signature`.
    "sender" - Аккаунт отправителя, который существует в кошельке ноды, Base58.

**Пример ответа в JSON:**

```js
{
  "quantity": 22300000000,
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "reissuable": true,
  "fee": 100000
}
```

**Параметры ответа:**

```
Как в [Broadcast Reissue Assets]
```

**Пример ответа в JSON:**

```
Как в [Broadcast Reissue Assets]
```

## POST /assets/burn

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Сжечь заданное количество ассетов.

**Параметры запроса:**

```
"assetId" - ID ранее выпущенного ассета, Base58.
"sender" - Адрес отправителя, Base58.
"fee" - Комиссия за транзакцию, min = 100000
"amount" - количество неделимых единиц ассета ('lets) чтобы сжечь.
```

**Пример запроса в JSON:**

```js
{
  "sender" : "EHDZiTW9uhZmpfKRyJtusHXCQ3ABwJ3t9dxZdiPp2GZC",
  "fee" : 100000000,
  "assetId" : "AP5dp4LsmdU7dKHDcgm6kcWmeaqzWi2pXyemrn4yTzfo",
  "amount" : 50000
}
```

**Пример ответа в JSON:**

```js
{
  "type" : 6,
  "id" : "AoqmyXSurAoLqH5zbcKPtksdPwadgudhE7tZ495cQDWs",
  "sender" : "3HRUALDoUaWAmAndWRqhbiQFoqgamhAVggE",
  "senderPublicKey" : "EHDZiTW9uhZmpfKRyJtusHXCQ3ABwJ3t9dxZdiPp2GZC",
  "fee" : 100000000,
  "timestamp" : 1495623946088,
  "signature" : "4sWPrZFpR379XC4Med1y8AK2Avmx8nVUxVAzsE4QMzEeMtQyHgjzfQsi2Y5VY7diCqMAzohy9ZSTP3yfiB3QPQMd",
  "assetId" : "AP5dp4LsmdU7dKHDcgm6kcWmeaqzWi2pXyemrn4yTzfo",
  "amount" : 50000
}
```

## POST /assets/transfer

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Создать транзакцию перевода с одного адреса на другой.

**Параметры запроса:**

    Как в [Broadcast Transfer Assets] кроме `senderPublicKey`, `timestamp` и `signature`.
    "sender" - Аккаунт отправителя, который существует в кошельке ноды, Base58.

**Пример запроса в JSON:**

```js
{
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "recipient": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7",
  "fee": 100000,
  "amount": 5500000000,
  "attachment": "BJa6cfyGUmzBFTj3vvvaew"
}
```

**Параметры ответа:**

```
Как в [Broadcast Transfer Assets]
```

**Пример ответа в JSON:**

```
Как в [Broadcast Transfer Assets]
```

## POST /assets/masstransfer

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Создать транзакцию перевода ассетов одновременно на несколько адресов.

**Параметры запроса:**

```
"sender" - Адрес отправителя, Base58.
"assetId" - ID ассета для отправки. По умолчанию, WAVES.
"transfers" - список (recipient, amount) парб где:
   "recipient" адрес в получателя в Base58
   "amount" количество ассетов для отправки на адрес.
"fee" - Комиссия транзакции, по умолчанию 100000 + 50000 * (количество переводов)
"attachment" - Опционально - сообщение в Base58 encoded, max 140 байт.
```

**Пример запроса в JSON:**

```js
{
  "sender" : "3HhQxe5kLwuTfE3psYcorrhogY4fCwz2BSh",
  "fee" : 200000,
  "assetId" : null,
  "attachment" : "59QuUcqP6p",
  "transfers" : [ {
    "recipient" : "3HUQa6qtLhNvBJNyPV1pDRahbrcuQkaDQv2",
    "amount" : 100000000
  }, {
    "recipient" : "3HaAdZcCXAqhvFj113Gbe3Kww4rCGMUZaEZ",
    "amount" : 200000000
  } ]
}
```

**Пример ответа в JSON:**

```js
{
  "type" : 11,
  "id" : "BG7MQF8KffVU6MMbJW5xPowVQsohwJhfEJ4wSF8cWdC2",
  "sender" : "3HhQxe5kLwuTfE3psYcorrhogY4fCwz2BSh",
  "senderPublicKey" : "7eAkEXtFGRPQ9pxjhtcQtbH889n8xSPWuswKfW2v3iK4",
  "fee" : 200000,
  "timestamp" : 1518091313964,
  "signature" : "4Ph6RpcPFfBhU2fx6JgcHLwBuYSpnEzfHvuAHaVVi8mPjn9D69LX7UaCtBEGjtaTJ7uBwhF38nc7wMEZDL4rYLDV",
  "assetId" : null,
  "attachment" : "59QuUcqP6p",
  "transfers" : [ {
    "recipient" : "3HUQa6qtLhNvBJNyPV1pDRahbrcuQkaDQv2",
    "amount" : 100000000
  }, {
    "recipient" : "3HaAdZcCXAqhvFj113Gbe3Kww4rCGMUZaEZ",
    "amount" : 200000000
  } ]
}
```
