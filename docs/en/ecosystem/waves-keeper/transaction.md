# Transaction Format for Waves Keeper API

Waves Keeper API supports the following types of transactions:

- 3 — issue transaction;
- 4 — transfer transaction;
- 5 — reissue transacton;
- 6 — burn transaction;
- 8 — lease transaction;
- 9 — lease cancel transaction;
- 10 — create alias transaction;
- 11 — mass transfer transaction;
- 12 — date transaction;
- 13 — set script transaction;
- 14 — sponsor fee transaction;
- 15 — set asset script transaction.
- 16 — invoke script.

In Waves Keeper API transaction format is different from [Node REST API](/ru/waves-node/node-api). The `signTransaction`, `signAndPublishTransaction`, and `signTransactionPackage` accept transactions as follows

```js
{
    type: number //transaction type,
    data: {
        ... //transaction data
    }
}
```

Legend keys:

* \* – optional field, data are automatically supplied from WavesKeeper.
* [x,y] – length limit from x to y.
* [,x] – length limit to x.
* [y,] – length limit from y.
* [x-y] – number from x to y.
* x/y – x or y.
* (JLM) – JAVA LONG MAX = 9 223 372 036 854 775 807.
* MoneyLike – price.

MoneyLike could look as:

- `{ tokens: 1, assetId: "WAVES" }`
- `{ coins: 100000000, assetId: "WAVES" }`

In both messages, the same price of 1 WAVES is indicated. You can easily convert `coins`into `tokens`and back, if you know in what asset the price is indicated and you have received its precision `tokens = coins / (10 ** precision)` \
If the field contains other types than MoneyLike, for instance, string/MoneyLike , the sum is indicated as a number in  `coins`.

[Calculating transaction fees](/en/blockchain/transaction/transaction-fee).

## Issue Transaction (type 3)

- `name` [4, 16] string – token name,
- `description` [0, 1000] string – token description,
- `quantity` [0 - (JLM)] number/string - quantity,
- `precision` [0 - 8] number - precision,
- `reissuable` true|false – reissuble,
- `*fee` MoneyLike -fee
- `*script` string – [asset script](/en/building-apps/smart-contracts/what-is-smart-asset)
- `*senderPublicKey` string – sender's public key in base58
- `*timestamp` number/string – time in ms

Example:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 3,
        data: {
             "name": "Best Token",
             "description": "Greate token",
             "quantity": 1000000,
             "precision": 2,
             "reissuable": true,
             fee: {
                 "tokens": "1",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've created my asset!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

In case of a success, we are issuing a new asset in the quantity of 1,000,000, and your balance will show 10,000.00 Best Token.

## Transfer Transaction (type 4)

- `amount` MoneyLike - amount,
- `recipient` string – recipient's address or alias
- `attachment`[,140 bytes] string or byte Array – additional info in text
- `*fee` MoneyLike - fee
- `*senderPublicKey` string – sender's public key in base58
- `*timestamp` number/string – time in ms

Example:

```js
    WavesKeeper.signAndPublishTransaction({
        type: 4,
        data: {
            amount: { tokens: "3.3333333", assetId: "WAVES" },
            fee: { tokens: "0.001", assetId: "WAVES"},
            recipient: "merry"
        }
    }).then((tx) => {
         console.log("Hurray! I've been able to send WAVES!!!");
    }).catch((error) => {
         console.error("Something went wrong", error);
    });
```

## Reissue Transaction (Type 5)

- `assetId` string - "asset ID",
- `quantity` [0 - (JLM)] number/string/MoneyLike - quantity,
- `reissuable` false – deny reissue
- `*fee` MoneyLike -fee
- `*senderPublicKey` string – sender's public key in base58
- `*timestamp` number/string – time in ms

Example:

```js
      WavesKeeper.signAndPublishTransaction({
           type: 5,
           data: {
                "quantity": 1000,
                "assetId": "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS",
                "reissuable": true,
                fee: {
                    "tokens": "1",
                    "assetId": "WAVES"
                }
           }
      }).then((tx) => {
           console.log("Hurray! I've reissued my asset!!!");
      }).catch((error) => {
           console.error("Something went wrong", error);
      });
```

In case of a success, we are re-issuing new asset in the quantity of 1,000,000, and your balance will show 10,000.00 Best Token

## Burn Transaction (Type 6)

- `assetId` string – asset ID,
- `amount` [0 - (JLM)] number/string/MoneyLike - quantity,
- `*fee` MoneyLike -fee
- `*senderPublicKey` string - sender's public key in base58
- `*timestamp` number/string – time in ms

Example:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 6,
        data: {
             amount: 1000,
             assetId: "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS",
             fee: {
                 "tokens": "0.001",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've burned unneeded tokens!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

In case of a success, 1,000 coins `are burned`.

## Lease Transaction (Type 8)

- `recipient` string – recipient's address or alias,
- `amount` [0 - (JLM)] number/string/MoneyLike - quantity,
- `*fee` MoneyLike -fee
- `*senderPublicKey` string - sender's public key in base58
- `*timestamp` number/string – time in ms

Example:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 8,
        data: {
             "amount": 1000,
             "recipient": "merry",
             fee: {
                 "tokens": "0.001",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've been able to lease tokens!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

In case of a success, 0.00001000 WAVES is leased.

## Lease Cancel Transaction (Type 9)

- `leaseId` string – leasing transaction ID,
- `*fee` MoneyLike -fee
- `*senderPublicKey` string - sender's public key in base58
- `*timestamp` number/string – time in ms

Example:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 9,
        data: {
             leaseId: "6frvwF8uicAfyEfTfyC2sXqBJH7V5C8he5K4YH3BkNiS",
             fee: {
                 "tokens": "0.001",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've cancelled leasing!!!");
   }).catch((error) => {
        console.error("Something went wrong ", error);
   });
```

In case of a success, the leasing transaction is cancelled.

## Create Alias Transaction (Type 10)

- `alias`[4, 30] string - alias
- `*fee` MoneyLike -fee
- `*senderPublicKey` string - sender's public key in base58
- `*timestamp` number/string – time in ms

Example:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 10,
        data: {
             alias: "testAlias",
             fee: {
                 "tokens": "0.001",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! Now I have an alias!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

In case of a success, an alias (another name) is created.

## Mass Transfer Transaction (Тype 11)

- `totalAmount` moneyLike – total to be sent // instead of calculating the amount you may insert { assetId: "ID of the asset to be sent", coins: 0},
- `transfers`  a mass of objects
  { `recipient`: string - address/alias, amount: number/string/moneyLike }
- `*fee` MoneyLike -fee
- `attachment` [,140 bytes в base58] string – additional info
- `*senderPublicKey` string - sender's public key in base58
- `*timestamp` number/string – time in ms

Example:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 11,
        data: {
             totalAmount: { assetId: "WAVES", coins: 0},
             transfers: [
                { recipient: "alias1", amount: "200000" },
                { recipient: "alias2", amount: "200000" },
             ],
             fee: {
                 "tokens": "0.002",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've sent hi to my friends!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

In case of a success, 0.002 WAVES will be sent to alias1 and alias2.

## Data Transaction (Type 12)

- `data`  mass of objects
  - `type` "binary"/string/"integer"/"boolean" - type,
  - `key` string – field name
  - `value` /string/string/number/boolean depends on the type
- `*fee` MoneyLike - fee
- `*senderPublicKey` string - sender's public key in base58
- `*timestamp` number/string – time in ms

Field:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 12,
        data: {
             data: [
                  { key: "string", value: "testVdfgdgf dfgdfgdfg dfg dfg al", type: "string" },
                  { key: "binary", value: "base64:AbCdAbCdAbCdAbCdAbCdAbCdAbCdAbCdAbCdAbCdAbCd", type: "binary" },
                  { key: "integer", value: 20, type: "integer" },
                  { key: "boolean", value: false, type: "boolean" },
             ],
             fee: {
                 "tokens": "0.01",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've saved data!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

In case of a success, new data will be stored in the state.

## Set Script Transaction (Type 13)

- `script` string - [account script](/en/building-apps/smart-contracts/what-is-smart-account) or [dApp script](/en/building-apps/smart-contracts/what-is-a-dapp).
- `*fee` MoneyLike -fee
- `*senderPublicKey` string - sender's public key in base58
- `*timestamp` number/string – time in ms

For cancelling a script the field `script` has to be "". [Script development on RIDE](https://ide.wavesplatform.com/)

Example:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 13,
        data: {
             script: "",
             fee: {
                 "tokens": "0.04",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've cancelled a script!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

In case of a success, the script will be removed from the account.

Example 2:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 13,
        data: {
             script: "base64:AQa3b8tHAQa3b8tHAQa3b8tHAQa3b8tHAQa3b8tHAQa3b8tHAQa3b8tHAQa3b8tHAQa3b8tHAQa3b8tHAQa3b8tH",
             fee: {
                 "tokens": "0.01",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've added a script!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

In case of a success, a new script will be added to the account, allowing any transactions without a signature (be careful!).

## Sponsor Fee Transaction (Type 14)

- `minSponsoredAssetFee` MoneyLike – fee price in the asset.
- `*fee` MoneyLike - fee
- `*senderPublicKey` string - sender's public key in base58
- `*timestamp` number/string – time in ms

Example:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 14,
        data: {
             minSponsoredAssetFee: {
                assetId: "6frvwF8uicAfyEfTfyC2sXqBJH7V5C8he5K4YH3BkNiS",
                tokens: 0.1
             },
             fee: {
                 "tokens": "1",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've become a sponsor!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

In case of a success, a transfer fee can be paid in the asset.

## Set Asset Script Transaction (Type 15)

- `assetId` string – asset ID
- `script` string – [asset script](/en/building-apps/smart-contracts/what-is-smart-asset)
- `*fee` MoneyLike – fee
- `*senderPublicKey` string - sender's public key in base58
- `*timestamp` number/string – time in ms

It's now impossible to cancel a script, you can only add a new script. [Script development on RIDE](https://ide.wavesplatform.com/)

Example:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 15,
        data: {
             assetId: "",
             script: "base64:AQa3b8tH",
             fee: {
                 "tokens": "0.01",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I have reset a script to the asset!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

In case of a success, the asset's script will be reset.

## Invoke Script Transaction (Type 16)

- `dApp` string – address script account
- `call` object –
  - `function` string function name
  - `args` array
    - `type` "binary"/string/"integer"/"boolean" - type,
    - `value` /string/string/number/boolean - value for type
- `*fee` MoneyLike – fee
- `*payment` array MoneyLike (at now can use only 1 payment)
- `*senderPublicKey` string - public key in base58
- `*timestamp` number/string - number/string – time in ms

Example:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 16,
        data: {
             fee: {
                 "tokens": "0.05",
                 "assetId": "WAVES"
             },
             dApp: '3N27HUMt4ddx2X7foQwZRmpFzg5PSzLrUgU',
             call: {
             		function: 'tellme',
             		args: [
             		    {
             		      "type": "string",
             		      "value": "Will?"
             		    }]
             	}, payment: [{assetId: "WAVES", tokens: 2}]
        }
   }).then((tx) => {
        console.log("Ура! Я выполнил скрипт!!!");
   }).catch((error) => {
        console.error("Что-то пошло не так", error);
   });

```

In case of a success, invoke script function `tellme` in testnet account `3N27HUMt4ddx2X7foQwZRmpFzg5PSzLrUgU`.
