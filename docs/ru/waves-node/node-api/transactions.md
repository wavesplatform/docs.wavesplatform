# Transactions

## GET /transactions/info/{id}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Возвращает данные транзакции по ID.

**Параметры запроса:**

```
"id" - ID транзакции
```

**Пример ответа в JSON:**

```js
{
  "type": 4,
  "id": "52GG9U2e6foYRKp5vAzsTQ86aDAABfRJ7synz7ohBp19",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "recipient": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "amount": 100000,
  "feeAsset": null,
  "fee": 100000,
  "timestamp": 1479313236091,
  "attachment": "string",
  "signature": "GknccUA79dBcwWgKjqB7vYHcnsj7caYETfncJhRkkaetbQon7DxbpMmvK9LYqUkirJp17geBJCRTNkHEoAjtsUm",
  "height": 7782
}
```

## GET /transactions/address/{address}/limit/{limit}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Возвращает заданное количество последних транзакций по указанному адресу аккаунта.

**Параметры запроса:**

```
"address" - Адрес аккаунта в Base58
"limit" - Количество последних транзакций, max = 50.
```

**Пример ответа в JSON:**

```js
[
  [
    {
      "type": 2,
      "id": "4XE4M9eSoVWVdHwDYXqZsXhEc4q8PH9mDMUBegCSBBVHJyP2Yb1ZoGi59c1Qzq2TowLmymLNkFQjWp95CdddnyBW",
      "fee": 100000,
      "timestamp": 1479313097422,
      "signature": "4XE4M9eSoVWVdHwDYXqZsXhEc4q8PH9mDMUBegCSBBVHJyP2Yb1ZoGi59c1Qzq2TowLmymLNkFQjWp95CdddnyBW",
      "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
      "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
      "recipient": "3N9iRMou3pgmyPbFZn5QZQvBTQBkL2fR6R1",
      "amount": 1000000000
    }
  ]
]
```

### GET /transactions/merkleProof?id=some1&id=some2

Возвращает объект `transactionsRoot` содержащий Merkle Root Hash транзакций блока.

**Параметры запроса**

`id` - ID транзакции.

**Параметры ответа**

- `id` - ID транзакции.
- `transactionIndex` - индекс транзакции (порядковый номер).
- 'merkleProof' - массив пруф хэшей с нижнего уровня до высшего.

**Пример ответа**

```js
[
    {
        "id": "A7MKi9CmBuzAeDrheewQ4xgYDy3U1AodbGUXKCsQU3H8",
        "transactionIndex": 2345,
        "merkleProof": [
            "48o9DxiMexUutLpw7edbjHyM3wGAKrKE9fjuNb2crQa4CBV5bk4N67q2aDXDJGKtRp917Z3mR6nBGZonsXnYsGqr",
            "3wHRy6bzcSfEZTqTvHpbtsVRebVGj4BQrDT5MfZirofjkUb3KuALk9aHJtCcNJWXZfkpQUfpxB1GkqqMp5bf72bY"
        ]
    }
]
```

## GET /transactions/unconfirmed

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Возвращает список неподтвержденных транзакций в пуле ноды.

**Пример ответа в JSON:**

```js
[
  {
    "type": 4,
    "id": "52GG9U2e6foYRKp5vAzsTQ86aDAABfRJ7synz7ohBp19",
    "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
    "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
    "recipient": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
    "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
    "amount": 100000,
    "feeAsset": null,
    "fee": 100000,
    "timestamp": 1479313236091,
    "attachment": "string",
    "signature": "GknccUA79dBcwWgKjqB7vYHcnsj7caYETfncJhRkkaetbQon7DxbpMmvK9LYqUkirJp17geBJCRTNkHEoAjtsUm"
  }
]
```

## GET /transactions/unconfirmed/size

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Возвращает количество неподтвержденных транзакций в UTX пуле.

**Пример ответа в JSON:**

```js
{
  "size": 3
}
```

## GET /transactions/unconfirmed/info/{id}
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Возвращает неподтвержденную транзакцию по ID.

**Параметры запроса:**

```
"id" - ID транзакции.
```

**Пример ответа в JSON:**

```js
{
  "type": 4,
  "id": "F4SPn6SNHiQB6DCATrVMqsM3s4RKTPVq8c7uPZEJ8YRN",
  "sender": "3PBST44zh2rDhxXW97AEkYYtufFLtf2CuWP",
  "senderPublicKey": "4NQqZba92s8NpQBMQhcb53d5oVpn9fWR2VEX5uhDHZiD",
  "fee": 100000,
  "timestamp": 1548847534028,
  "signature": "28cq23pr8YezgqrwSuHKTTqUuSDJPBdfC9ACQQ15jAzxYZXowfmJFfcXmHsC5L1uUmBLPZySLCY4X4tsmetsLEx2",
  "proofs": [
    "28cq23pr8YezgqrwSuHKTTqUuSDJPBdfC9ACQQ15jAzxYZXowfmJFfcXmHsC5L1uUmBLPZySLCY4X4tsmetsLEx2"
  ],
  "version": 1,
  "recipient": "3P7wD8Un2FpT8XC3p5ADgiRJEyeycWxs2Tj",
  "assetId": "C9XD25wtUf4MTqbyDX8zqxpY2aXk6recZd5Bwtq7CUJS",
  "feeAssetId": null,
  "feeAsset": null,
  "amount": 1000000000000,
  "attachment": ""
}
```

или

```js
{
  "status": "error",
  "details": "Transaction is not in UTX"
}
```

## POST /transactions/calculateFee

![master](https://img.shields.io/badge/node-&gt;%3D0.14.3-4bc51d.svg)

Рассчитывает комиссию за транзакцию и возвращает ее. Тип транзакции должен быть указан в теле запроса. Бывают следующие типы:

| Код | Тип |
| :--- | :--- |
| 3 | Issue |
| 4 | Transfer |
| 5 | Reissue |
| 6 | Burn |
| 8 | Lease |
| 9 | Lease Cancel |
| 10 | Alias |
| 11 | Mass Transfer |
| 12 | Data |
| 13 | Set Script |
| 14 | Sponsorship |

**Параметры запроса**

```
"type" - Тип транзакции.
"senderPublicKey" - Публичный ключ отправителя.
"sender" Игнорируется
"fee" Игнорируется
и все остальные параметры, подходящие для транзакции данного типа.
```

**Пример запроса в JSON**

```js
{
 "type": 10,
 "timestamp": 1516171819000,
 "sender": "3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
 "alias": "ALIAS",
}
```

или

```js
{
  "type": 4,
  "sender": "3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
  "recipient": "3P8JYPHrnXSfsWP1LVXySdzU1P83FE1ssDa",
  "amount": 1317209272,
  "feeAssetId": "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS",
  "attachment": "string"
}
```

**Пример ответа в JSON**

```
{
  "feeAssetId": null,
  "feeAmount": 10000
}
```

or

```js
{
  "feeAssetId": "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS",
  "feeAmount": 10000
}
```

## POST /transactions/sign

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Подписывает транзакцию. Для этого требуется ключ API и тип транзакции, которые должны быть указаны в теле запроса. Бывают следующие типы:

| Код | Тип |
| :--- | :--- |
| 3 | Issue |
| 4 | Transfer |
| 5 | Reissue |
| 6 | Burn |
| 8 | Lease |
| 9 | Lease Cancel |
| 10 | Alias |
| 11 | Mass Transfer |
| 12 | Data |
| 13 | Set Script |
| 14 | Sponsorship |

Опционально можно задать параметр `timestamp`, временную отметку в миллисекундах. Если параметр не задан, будет использоваться текущее время сервера.

**Параметры запроса**

```
"type" - Тип транзакции.
"timestamp" - [опционально] временная отметка транзакции в миллисекундах.
и все остальные параметры, подходящие для транзакции данного типа.
```

**Пример запроса в JSON**

```js
{
 "type": 10,
 "timestamp": 1516171819000,
 "sender": "3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
 "fee": 100000,
 "alias": "ALIAS",
}
```

или

```js
{
  "type": 4,
  "sender": "3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
  "recipient": "3P8JYPHrnXSfsWP1LVXySdzU1P83FE1ssDa",
  "amount": 1317209272,
  "fee": 100000,
  "attachment": "string"
}
```

**Пример ответа в JSON**

```js
{
 "type":10,
 "id":"9q7X84wFuVvKqRdDQeWbtBmpsHt9SXFbvPPtUuKBVxxr",
 "sender":"3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
 "senderPublicKey":"G6h72icCSjdW2A89QWDb37hyXJoYKq3XuCUJY2joS3EU",
 "fee":100000000,
 "timestamp":46305781705234713,
 "signature":"4gQyPXzJFEzMbsCd9u5n3B2WauEc4172ssyrXCL882oNa8NfNihnpKianHXrHWnZs1RzDLbQ9rcRYnSqxKWfEPJG",
 "alias":"dajzmj6gfuzmbfnhamsbuxivc"
}
```

## POST /transactions/sign/{signerAddress}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Подписывает транзакцию с помощью закрытого ключа сайнера. Для этого требуется, чтобы в теле запроса были указаны ключ API, адрес сайнера и тип транзакции.

`signerAddress` следует создавать с помощью [POST /addresses](/ru/waves-node/node-api/address#post-addresses).

Бывают следующие типы:

| Код | Тип |
| :--- | :--- |
| 3 | Issue |
| 4 | Transfer |
| 5 | Reissue |
| 6 | Burn |
| 8 | Lease |
| 9 | Lease Cancel |
| 10 | Alias |
| 11 | Mass Transfer |
| 12 | Data |
| 13 | Set Script |
| 14 | Sponsorship |

Опционально можно задать параметр `timestamp`, временную отметку в миллисекундах. Если параметр не задан, будет использоваться текущее время сервера.

**Параметры запроса**

```
"type" - Тип транзакции.
"timestamp" - [опционально] временная отметка транзакции в миллисекундах.
и все остальные параметры, подходящие для транзакции данного типа.
```

**Пример запроса в JSON**

```js
{
 "type": 10,
 "timestamp": 1516171819000,
 "sender": "3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
 "fee": 100000,
 "alias": "ALIAS",
}
```

**Пример ответа в JSON**

```js
{
 "type":10,
 "id":"9q7X84wFuVvKqRdDQeWbtBmpsHt9SXFbvPPtUuKBVxxr",
 "sender":"3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
 "senderPublicKey":"G6h72icCSjdW2A89QWDb37hyXJoYKq3XuCUJY2joS3EU",
 "fee":100000000,
 "timestamp":46305781705234713,
 "signature":"4gQyPXzJFEzMbsCd9u5n3B2WauEc4172ssyrXCL882oNa8NfNihnpKianHXrHWnZs1RzDLbQ9rcRYnSqxKWfEPJG",
 "alias":"dajzmj6gfuzmbfnhamsbuxivc"
}
```

## POST /transactions/broadcast

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Трансляция подписанной транзакции любого типа.

**Параметры запроса**

```
"type" - Тип транзакции.
и все остальные параметры, подходящие для транзакции данного типа.
```

**Пример запроса в JSON**

```js
{
 "type":10,
 "senderPublicKey":"G6h72icCSjdW2A89QWDb37hyXJoYKq3XuCUJY2joS3EU",
 "fee":100000000,
 "timestamp":46305781705234713,
 "signature":"4gQyPXzJFEzMbsCd9u5n3B2WauEc4172ssyrXCL882oNa8NfNihnpKianHXrHWnZs1RzDLbQ9rcRYnSqxKWfEPJG",
 "alias":"dajzmj6gfuzmbfnhamsbuxivc"
}
```

**Пример ответа в JSON**

```js
{
 "type":10,
 "id":"9q7X84wFuVvKqRdDQeWbtBmpsHt9SXFbvPPtUuKBVxxr",
 "sender":"3MtrNP7AkTRuBhX4CBti6iT21pQpEnmHtyw",
 "senderPublicKey":"G6h72icCSjdW2A89QWDb37hyXJoYKq3XuCUJY2joS3EU",
 "fee":100000000,
 "timestamp":46305781705234713,
 "signature":"4gQyPXzJFEzMbsCd9u5n3B2WauEc4172ssyrXCL882oNa8NfNihnpKianHXrHWnZs1RzDLbQ9rcRYnSqxKWfEPJG",
 "alias":"dajzmj6gfuzmbfnhamsbuxivc"
}
```

<a id="post-tx-status"></a>

## POST /transactions/status

![master](https://img.shields.io/badge/node-%3E%3D%201.1.7-brightgreen)

Возвращает список статусов транзакций по идентификаторам транзакций. Список транзакций сохраняет порядок идентификаторов транзакций, которые были переданы в запросе. Если идентификаторы транзакций не были указаны, запрос не будет выполнен, и будет возвращена ошибка.

**Параметры запроса**

`id` - ID транзакции.

**Пример запроса в JSON**

```js
[
  {
    "id": "H27nMqvLp514M9fFoKbn4qCvFtG3VGzMGcN7noDyDv6C"
  },
  {
    "id": "Bi2vXQdUTsUPRDLE4tWkCFNVNkLjRtvy9PuvWd5iNP63"
  },
  {
    "id": "Ew2mxDagrDJevuaXKUuA48e8QD5evkDr5Zpv7ERVpCN2"
  }
]
```

**Пример ответа в JSON**

- `id` - ID транзакции.
- `status` - Статус транзакции. `not_found` - транзакция не найдена, `unconfirmed` - транзакция в UTX-pool, `confirmed` - транзакция в блоке или микроблоке.
- `confirmations` - Текущая высота блокчейна минус высота блока, в который включена транзакция.
- `height` - Высота транзакции в блокчейне.

```js
[
  {
    "id": "H27nMqvLp514M9fFoKbn4qCvFtG3VGzMGcN7noDyDv6C",
    "status": "confirmed",
    "confirmations": 120,
    "height": 1772853
  },
  {
    "id": "Bi2vXQdUTsUPRDLE4tWkCFNVNkLjRtvy9PuvWd5iNP63",
    "status": "not_found"
  },
  {
    "id": "Ew2mxDagrDJevuaXKUuA48e8QD5evkDr5Zpv7ERVpCN2",
    "status": "unconfirmed"
  }
]
```

<a id="get-tx-status"></a>

## GET /transactions/status?id=tx1id&id=tx2id

![master](https://img.shields.io/badge/node-%3E%3D%201.1.7-brightgreen)

Возвращает список статусов транзакций по ID. Список транзакций сохраняет порядок идентификаторов транзакций, которые были переданы в запросе. Если идентификаторы транзакций не были указаны, запрос не будет выполнен, и будет возвращена ошибка.

**Пример ответа в JSON**

- `id` - ID транзакции.
- `status` - статус транзакции. `not_found` - транзакция не найдена, `unconfirmed` - транзакция в UTX-pool, `confirmed` - транзакция в блоке или микроблоке.
- `confirmations` - текущая высота блокчейна минус высота блока, в который включена транзакция.
- `height` - высота транзакции в блокчейне.

```js
[
  {
    "id": "H27nMqvLp514M9fFoKbn4qCvFtG3VGzMGcN7noDyDv6C",
    "status": "confirmed",
    "confirmations": 120,
    "height": 1772853
  },
  {
    "id": "Bi2vXQdUTsUPRDLE4tWkCFNVNkLjRtvy9PuvWd5iNP63",
    "status": "not_found"
  },
  {
    "id": "Ew2mxDagrDJevuaXKUuA48e8QD5evkDr5Zpv7ERVpCN2",
    "status": "unconfirmed"
  }
]
```
