# Private Functions

Private functions require API Key to be provided in every HTTP request using `X-Api-Key` header. Securely hashed header value is stored in `rest-api.api-key-hash` setting in the waves.conf configuration file. See [API Key](/en/waves-node/node-api/api-key) article and [/utils/hash/secure](/en/waves-node/node-api/utils) method for more information.

## POST /transactions/sign + POST /transactions/broadcast

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

The following private functions have been deprecated:

* POST /assets/issue (transaction type 3)
* POST /assets/transfer (transaction type 4)
* POST /assets/reissue (transaction type 5)
* POST /assets/burn (transaction type 6)
* POST /assets/masstransfer (transaction type 11)

You can use the combination of [POST /transactions/sign](/en/waves-node/node-api/transactions#post-transactions-sign) + [POST /transactions/broadcast](/en/waves-node/node-api/transactions#post-transactions-broadcast) instead and provide the transaction type in the request body. This works for transaction type 3, 4, 5, 6, 11.

For example, if you want to use the deprecated **POST /assets/transfer** function, use the [POST /transactions/sign](/en/waves-node/node-api/transactions#post-transactions-sign) function instead and add the transaction type (`"type": 4,`) in the request body:

**Request JSON example:**

```js
{
  "type": 4,
  "sender": "3MtQQX9NwYH5URGGcS2e6ptEgV7wTFesaRW",
  "fee": 100000,
  "feeAssetId": null,
  "version": 1,
  "recipient": "3MtQQX9NwYH5URGGcS2e6ptEgV7wTFesaRW",
  "assetId": null,
  "feeAsset": null,
  "amount": 100,
  "attachment": ""
}
```

**Response JSON example:**

```JS
{
  "type": 4,
  "id": "GSxH6ksfcXDnkuvpv6xAvYNo9zjWTzzR9ujf74JW2LUk",
  "sender": "3MtQQX9NwYH5URGGcS2e6ptEgV7wTFesaRW",
  "senderPublicKey": "3ikUmWkNpbkeVZaoA7fogfDjKw5hn4ZWVbP4gW7dMQNi",
  "fee": 100000,
  "feeAssetId": null,
  "timestamp": 1602067930149,
  "proofs": [
    "4V6JMFcs2Dy77mQHuTxchZTSzHeYwxkn6ZCrp6rmjGEpQDJxJ93WazohUV9G3vA3JcvG1FQS3HXzTaZ6XXM3YtLS"
  ],
  "signature": "4V6JMFcs2Dy77mQHuTxchZTSzHeYwxkn6ZCrp6rmjGEpQDJxJ93WazohUV9G3vA3JcvG1FQS3HXzTaZ6XXM3YtLS",
  "version": 1,
  "recipient": "3MtQQX9NwYH5URGGcS2e6ptEgV7wTFesaRW",
  "assetId": null,
  "feeAsset": null,
  "amount": 100,
  "attachment": ""
}
```

Then use the resulting response as a request body in the [POST /transactions/broadcast](/en/waves-node/node-api/transactions#post-transactions-broadcast) function.

**Response JSON example:**

```js
{
  "type": 4,
  "id": "GSxH6ksfcXDnkuvpv6xAvYNo9zjWTzzR9ujf74JW2LUk",
  "sender": "3MtQQX9NwYH5URGGcS2e6ptEgV7wTFesaRW",
  "senderPublicKey": "3ikUmWkNpbkeVZaoA7fogfDjKw5hn4ZWVbP4gW7dMQNi",
  "fee": 100000,
  "feeAssetId": null,
  "timestamp": 1602067930149,
  "proofs": [
    "4V6JMFcs2Dy77mQHuTxchZTSzHeYwxkn6ZCrp6rmjGEpQDJxJ93WazohUV9G3vA3JcvG1FQS3HXzTaZ6XXM3YtLS"
  ],
  "signature": "4V6JMFcs2Dy77mQHuTxchZTSzHeYwxkn6ZCrp6rmjGEpQDJxJ93WazohUV9G3vA3JcvG1FQS3HXzTaZ6XXM3YtLS",
  "version": 1,
  "recipient": "3MtQQX9NwYH5URGGcS2e6ptEgV7wTFesaRW",
  "assetId": null,
  "feeAsset": null,
  "amount": 100,
  "attachment": ""
}
```

The resulting response body will be the same as the request body. This means that the transaction has been successfully broadcasted.

## POST /assets/issue

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

:warning: This function has been deprecated.

Issue a new Asset for an address that exists in the node's wallet.

**Request params:**

    The same as in [Broadcast Issue Assets] besides `senderPublicKey`, `timestamp` and `signature` params.
    "sender" - Sender account's address that exists in the node's wallet, Base58-encoded

**Request JSON example:**

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

**Response params:**

```
The same as in [Broadcast Issue Assets]
```

**Response JSON example:**

```
The same as in [Broadcast Issue Assets]
```

## POST /assets/reissue

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

:warning: This function has been deprecated.

Re-issue an additional quantity of the Asset

**Request params:**

    The same as in [Broadcast Reissue Assets] besides `senderPublicKey`, `timestamp` and `signature` params.
    "sender" - Sender account's address that exists in the node's wallet, Base58-encoded

**Request JSON example:**

```js
{
  "quantity": 22300000000,
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "reissuable": true,
  "fee": 100000
}
```

**Response params:**

```
The same as in [Broadcast Reissue Assets]
```

**Response JSON example:**

```
The same as in [Broadcast Reissue Assets]
```

## POST /assets/burn

:warning: This function has been deprecated.

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Burn quantity of the Asset.

**Request params:**

```
"assetId" - Asset ID previously issued, Base58-encoded
"sender" - Sender address, Base58-encoded
"fee" - Transaction fee for Asset issue, min = 100000
"amount" - amount of asset'lets to burn (number of indivisible pieces of assets)
```

**Request JSON example:**

```js
{
  "sender" : "EHDZiTW9uhZmpfKRyJtusHXCQ3ABwJ3t9dxZdiPp2GZC",
  "fee" : 100000000,
  "assetId" : "AP5dp4LsmdU7dKHDcgm6kcWmeaqzWi2pXyemrn4yTzfo",
  "amount" : 50000
}
```

**Response JSON example:**

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

:warning: This function has been deprecated.

Create transaction to transfer assets from one address to another.

**Request params:**

    The same as in [Broadcast Transfer Assets] besides `senderPublicKey`, `timestamp` and `signature` params.
    "sender" - Sender account's address that exists in the node's wallet, Base58-encoded

**Request JSON example:**

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

**Response params:**

```
The same as in [Broadcast Transfer Assets]
```

**Response JSON example:**

```
The same as in [Broadcast Transfer Assets]
```

## POST /assets/masstransfer

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

:warning: This function has been deprecated.

Create transaction to transfer an asset to several recipient addresses at once.

**Request params:**

```
"sender" - Sender address, Base58-encoded
"assetId" - ID of the asset to send. By default, WAVES is assumed.
"transfers" - list of (recipient, amount) pairs where
   "recipient" is a Base58 address, and
   "amount" is the amount to send to that address.
"fee" - Transaction fee, by default 100000 + 50000 * (number of transfers)
"attachment" - Arbitrary message, Base58 encoded, 140 bytes max.
```

**Request JSON example:**

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

**Response JSON example:**

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
