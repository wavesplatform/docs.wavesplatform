---
sidebarDepth: 2
---

# Waves Keeper API

## Introduction

On browser pages that operate under the http/https (not local pages with file:// protocol) with Waves Keeper extension installed, Waves Keeper global object becomes available, featuring the following methods:

- `auth`
- `publicState`
- `signAndPublishCancelOrder`
- `signAndPublishOrder`
- `signAndPublishTransaction`
- `signCancelOrder`
- `signOrder`
- `signTransaction`
- `signRequest`
- `signTransactionPackage`
- `signCustomData`
- `verifyCustomData`
- `notification`
- `encryptMessage`
- `decryptMessage`
- `resourceIsApproved`
- `resourceIsBlocked`
- `on`

All methods, except for `on` operate asynchronously and return [promises](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise).

In code you can use [TypeScript types](https://github.com/wavesplatform/waveskeeper-types).

On initialize `window.WavesKeeper` has no api methods.
You can use `WavesKeeper.initialPromise` for waiting end initializing api.

Example:

```
    WavesKeeper.initialPromise
        .then((keeperApi) => {
            /*...init app*/
            keeperApi.publicState().then( state => startApp(state));
        })
```

In Waves Keeper, for greater security and ease of use, each new website using API has to be allowed by the user. At the first attempt to use API (except `on`), the user will see a request to allow the website to access Waves Keeper. If the user agrees to allow access, the website is considered trusted and can use API on its pages. Otherwise, the website is blocked, and an error message will be displayed in response to all requests `{message: "Api rejected by user", code: 12}.` The users won't see new notifications. To grant access, the user has to mark the website as trusted in the interface.

## Description of methods

### publicState

If a website is trusted, Waves Keeper public data wiil be returned.

Example:

```js
    WavesKeeper.publicState()
        .then(state => {
            console.log(state); //displaying the result in the console
            /*...processing data */
        }).catch(error => {
            console.error(error); // displaying the result in the console
            /*...processing errors */
        })
```

or

```js
    const getPublicState = async () => {
        try {
            const state = await WavesKeeper.publicState();
            console.log(state); // displaying the result in the console
            /*... processing data*/
        } catch(error) {
            console.error(error); // displaying the result in the console
            /*... processing errors */
        }
      }


      const result = await getPublicState();
```

REPLY:

```js
{
    "initialized": true,
    "locked": true,
    "account": {
        "name": "foo",
        "publicKey": "bar",
        "address": "waves address",
        "networkCode": "network byte",
        "balance": {
            "available": "balance in waves",
            "leasedOut": "leased balance"
        }
    },
    "network": {
        "code": "W",
        "server": "https://nodes.wavesnodes.com/",
        "matcher": "https://matcher.waves.exchange"
    },
    "messages": [],
    "txVersion": {
        "3": [ 2 ],
        "4": [ 2 ],
        "5": [ 2 ],
        ...
    }
}
```

Description of query return fields:

- `initialized` – boolean: Waves Keeper is initialized.
- `locked` – boolean: Waves Keeper is locked (password required).
- `account` – current account, if the user allowed access to the website, or `null`.
- `network` – current Waves network, node and matcher addresses.
- `messages` – signature request statuses.
- `txVersion` – available transaction versions for each type.

Possible errors:

- `{ message: "Init Waves Keeper and add account" }` – Waves Keeper is not initialized.
- `{ message: "Add Waves Keeper account" }` – Waves Keeper accessed, but there are no accounts.
- `{ message: "User denied message" }` – the user denied the website operation with Waves Keeper.

### notification

Send message to Waves Keeper.
You can send message only 1 time in 30 sec for trusted sites with send permission.

`notification` facilitates input of the following data:

- `title` – string, 20 chars max (required field)
- `message` – string, 250 chars max (optional field)

Returns `Promise`.

Example:

```js
       WavesKeeper.notification({
            title: 'Hello!',
            message: 'Congratulation!!!'
       });
```

Possible errors:

- `{message: "Incorrect notification data", data: "title has more than 20 characters", code: "19"}` – incorrect notification title.
- `{message: "Incorrect notification data", data: null, code: "19"}` – incorrect notification data.
- `{message: "Can't sent notification", data: {msg: "Min notification interval 30s. Wait 28.017s."}, code: "18"}` – try send later, you can send 1 message in 30 sec.
- `{message: "Api rejected by user", code: 12}` – the user denied the request or the website is not trusted.

### encryptMessage

You can encrypt string messages to account in Waves network.
You need to have recipient publicKey.

WavesKeeper.encryptMessage(`*string to encrypt*`, `*public key in base58 string*`, `*prefix is secret app string need for encoding*`)

Example:

```js
       WavesKeeper.encryptMessage('My message', '416z9d8DQDy5MPTqDhvReRBaPb19gEyVRWvHcewpP6Nc', 'my app')
       .then((encryptedMessage) => {
            console.log(encryptedMessage);
       });
```

Possible errors:

- `{ message: "Init Waves Keeper and add account" }` – Waves Keeper is not initialized.
- `{ message: "App is locked" }` – Waves Keeper is locked (password required).
- `{ message: "Add Waves Keeper account" }` – Waves Keeper accessed, but there are no accounts.
- `{ message: "User denied message" }` – the user denied the website operation with Waves Keeper.

### decryptMessage

You can decrypt string messages from account in Waves network.
You need to have sender publicKey and the encrypted message.

WavesKeeper.decryptMessage(`*string to decrypt*`, `*public key in base58 string*`, `*prefix is secret app string need for encoding*`)

Example:

```js
       WavesKeeper.decryptMessage('**encrypted msg**', '416z9d8DQDy5MPTqDhvReRBaPb19gEyVRWvHcewpP6Nc', 'my app')
       .then((message) => {
            console.log(message);
       });
```

Possible errors:

- `{ message: "Init Waves Keeper and add account" }` – Waves Keeper is not initialized.
- `{ message: "App is locked" }` – Waves Keeper is locked (password required).
- `{ message: "Add Waves Keeper account" }` – Waves Keeper accessed, but there are no accounts.
- `{ message: "User denied message" }` – the user denied the website operation with Waves Keeper.

### on

Allows subscribing to Waves Keeper events.

Supports events:

- `update` – subscribe to updates of the state

Example:

```js   
   WavesKeeper.on("update", state => {
        //state object as from WavesKeeper.publicState
   });
```

If a website is not trusted, the events won't be displayed.

### auth

This is a method for obtaining a signature of some arbitrary data. If the the signature is valid, be sure that the given blockchain account belongs to that user.

Example:

```js
    const authData = { data: "Auth on my site" };
    WavesKeeper.auth(authData)
        .then(auth => {
            console.log(auth); //displaying the result on the console
            /*...processing data */
        }).catch(error => {
            console.error(error); // displaying the result on the console
            /*...processing errors */
        })
```

or

```js
    const getAuthData = async authData => {
        try {
            const state = await WavesKeeper.auth(authData);
            console.log(state); // displaying the result on the console
            /*... processing data */
        } catch(error) {
            console.error(error); // displaying the result on the console
            /*... processing errors */
        }
    }


    const authData = { data: "Auth on my site" };
    getAuthData(authData);
```

`auth` facilitates input of the following data:

- `name` – name of the service (optional field)
- `data` – a string line with any data (required field)
- `referrer` – a websites' full URL for redirect (optional field)
- `icon` – path to the logo relative to the `referrer`or origin of the website (optional field)
- `successPath` – relative path to the website's Auth API (optional field)

Example:

```js
    const authData = { 
        data: "Generated string from server",
        name: "My test App",
        icon: "/img/icons/waves_logo.svg",
        referrer: "https://example.com/",
        successPath: "login"
    };


    WavesKeeper.auth(authData).then((data) => {
        //data – data from Waves Keeper
        //verifying signature and saving the address...
        console.log(data);
    }).catch((error) => {
        //processing the error
    });
```

If the verification is successful, Waves Keeper will return in the promise an object containing data for signature verification:

- `host` – a host that requested a signature
- `name` – the name of an application that requested a signature
- `prefix` – a prefix participating in the signature
- `address` – an address in Waves network
- `publicKey` – the user's public key
- `signature` – signature
- `version` – API version

Possible errors:

- `{message: "Invalid data", data: "[{"field":"data","type":"string","message":"field is required"}]", code: 9}` – signature data contain errors.
- `{message: "User denied message", code: 10}` – the user denied the request.
- `{message: "Api rejected by user", code: 12}` – the website is not trusted.

#### <a id="validity"></a>How to check signature validity

Signed data consists of three parts: `prefix` (`WavesWalletAuthentication` string) + `host` + provided data. All strings are converted to `length bytes` + `value bytes` as in Data Transactions. Prefix string and the host is required for security purposes if malicious service tries to use data and signature.

We also suggest address validation in case the signature and public key is valid but the address was swapped.

##### TypeScript example code

```typescript
import { verifyAuthData, libs } from '@waves/waves-transactions';


const authValidate = (data: { host: string; data: string }, signature: string, publicKey: string, chainId: string | number): boolean => {
    const chain = typeof chainId === 'string' ? chainId : String.fromCharCode(chainId);
    const address = libs.crypto.address({ publicKey }, chain);
    return verifyAuthData({ publicKey, address, signature }, data);
};

// Example
const data = await WavesKeeper.auth({data: '123'});

authValidate(data, { host: data.host, data: '123' }); // true
```

##### JS example code

```js
import { verifyAuthData, libs } from '@waves/waves-transactions';


const authValidate = (data, signature, publicKey, chainId) => {    
   const chain = typeof chainId === 'string' ? chainId : String.fromCharCode(chainId);
   const address = libs.crypto.address({ publicKey }, chain);
   return verifyAuthData({ publicKey, address, signature }, data);
};

// Example
const data = await WavesKeeper.auth({data: '123'});

authValidate(data, { host: data.host, data: '123' }); // true
```

##### Python example code

```python
import axolotl_curve25519 as curve
import pywaves.crypto as crypto
import base58
from urllib.parse import urlparse, parse_qs
 
 
def str_with_length(string_data):
    string_length_bytes = len(string_data).to_bytes(2, byteorder='big')
    string_bytes = string_data.encode('utf-8')
    return string_length_bytes + string_bytes
 
 
def signed_data(host, data):
    prefix = 'WavesWalletAuthentication'
    return str_with_length(prefix) + str_with_length(host) + str_with_length(data)
 
 
def verify(public_key, signature, message):
    public_key_bytes = base58.b58decode(public_key)
    signature_bytes = base58.b58decode(signature)
 
    return curve.verifySignature(public_key_bytes, message, signature_bytes) == 0
 
 
def verifyAddress(public_key, address):
    public_key_bytes = base58.b58decode(public_key)
    unhashed_address = chr(1) + str('W') + crypto.hashChain(public_key_bytes)[0:20]
    address_hash = crypto.hashChain(crypto.str2bytes(unhashed_address))[0:4]
    address_from_public_key = base58.b58encode(crypto.str2bytes(unhashed_address + address_hash))
 
    return address_from_public_key == address
 
address = '3PCAB4sHXgvtu5NPoen6EXR5yaNbvsEA8Fj'
pub_key = '2M25DqL2W4rGFLCFadgATboS8EPqyWAN3DjH12AH5Kdr'
signature = '2w7QKSkxKEUwCVhx2VGrt5YiYVtAdoBZ8KQcxuNjGfN6n4fi1bn7PfPTnmdygZ6d87WhSXF1B9hW2pSmP7HucVbh'
data_string = '0123456789abc'
host_string = 'example.com'
message_bytes = signed_data(host_string, data_string)
 
print('Address:', address)
print('Public key:', pub_key)
print('Signed Data:', message_bytes)
print('Real signature:', signature)
print('Verified:', verify(pub_key, signature, message_bytes))
print('Address verified:', verifyAddress(pub_key, address))
 
fake_signature = '29qWReHU9RXrQdQyXVXVciZarWXu7DXwekyV1zPivkrAzf4VSHb2Aq2FCKgRkKSozHFknKeq99dQaSmkhUDtZWsw'
 
print('Fake signature:', fake_signature)
print('Fake signature verification:', verify(pub_key, fake_signature, message_bytes))
```

##### PHP example code

```php
<?php

/*
 * Requires WavesKit by deemru
 * https://github.com/deemru/WavesKit
 */

require_once __DIR__ . '/vendor/autoload.php';
use deemru\WavesKit;

function signed_data( $host, $data )
{
    $prefix = 'WavesWalletAuthentication';
    return str_with_length($prefix) . str_with_length($host) . str_with_length($data);    
}

function str_with_length( $data )
{
    return pack('n', strlen($data)).$data;
}

$wk = new WavesKit("W");
$address = '3PCAB4sHXgvtu5NPoen6EXR5yaNbvsEA8Fj';
$pub_key = '2M25DqL2W4rGFLCFadgATboS8EPqyWAN3DjH12AH5Kdr';
$signature = '2w7QKSkxKEUwCVhx2VGrt5YiYVtAdoBZ8KQcxuNjGfN6n4fi1bn7PfPTnmdygZ6d87WhSXF1B9hW2pSmP7HucVbh';
$data_string = '0123456789abc';
$host_string = 'example.com';
$message_bytes = signed_data($host_string, $data_string);

$wk->log('i', 'Address: '. $address);
$wk->log('i', 'Public key:' . $pub_key);
$wk->log('i', 'Signed Data: ' . $message_bytes);
$wk->log('i', 'Real signature: '. $signature);

$wk->setPublicKey( $pub_key );
$is_address_verified = $address === $wk->getAddress();

if ( $is_address_verified === true) 
    $wk->log('s', "Address: Verified: TRUE"); 
else 
    $wk->log('e', "Address: Verified: FALSE");

$signature_verified = $wk->verify($wk->base58Decode($signature), $message_bytes);

if ( $signature_verified === true) 
    $wk->log('s', "Signature Verified: TRUE"); 
else 
    $wk->log('e', "Signature Verified: FALSE");

$fake_signature = '29qWReHU9RXrQdQyXVXVciZarWXu7DXwekyV1zPivkrAzf4VSHb2Aq2FCKgRkKSozHFknKeq99dQaSmkhUDtZWsw';
$wk->log('i', 'Fake Signature: '. $fake_signature);

$signature_verified = $wk->verify($wk->base58Decode($fake_signature), $message_bytes);

if ( $signature_verified === true) 
    $wk->log('e', "Fake Signature Verified: TRUE"); 
else 
    $wk->log('s', "Fake Signature Verified: FALSE");
?>
```

### signTransaction

A method for signing transactions. See [Transaction Format](/en/ecosystem/waves-keeper/transaction).

Example:

```js
    const txData = {
        type: 4,
        data: {
            amount: {
               assetId: "WAVES",
               tokens: "1.567"
            },
            fee: {
                assetId: "WAVES",
                tokens: "0.001"
            },
            recipient: "test"
        }
    };
    WavesKeeper.signTransaction(txData).then((data) => {
        //data – a line ready for sending to Waves network's node (server)
    }).catch((error) => {
        //Processing errors
    });
```

API returns lines, not an object, as in JavaScript precision is lost in operation with 8-byte integers.

In the example, we are signing a transaction for transferring WAVES to the alias `test` in Waves network.

REPLY:

`{"version":2,"assetId":"", "amount":156700000,"feeAssetId":"",fee:100000, "recipient":"recipient","attachment":"", "timestamp":1548770230589,"senderPublicKey":"public key","proofs":["signature"],"type":4}`

Possible errors:

- `{message: "User denied message", code: 10}` – the user denied the request.
- `{message: "Api rejected by user", code: 12}` – the website is not trusted.
- `{message: "Invalid data", data: "Reason", code: 9}` – invalid/incomplete request data.

### signAndPublishTransaction

This is similar to `signTransaction`, but it also broadcasts a transaction to the blockchain. See [Transaction Format](/en/ecosystem/waves-keeper/transaction).

Example:

```js
   const txData = {
           type: 4,
           data: {
               amount: {
                  assetId: "WAVES",
                  tokens: "1.567"
               },
               fee: {
                   assetId: "WAVES",
                   tokens: "0.001"
               },
               recipient: "test"
           }
       };
       WavesKeeper.signAndPublishTransaction(txData).then((data) => {
           //data - a line ready for sending to Waves network's node (server)
       }).catch((error) => {
           //processing errors
       });
```

REPLY:

A line containing the entire past transaction.

Possible errors:

- Same as `signTransaction`.
- `{message: "Filed request", data: "Error description", code: 15}` – a request was signed but not broadcasted.

### signTransactionPackage

A package transaction signature. Sometimes several transactions need to be simultaneously signed, and for user convenience, up to seven transactions can be signed at once. See [Transaction Format](/en/ecosystem/waves-keeper/transaction).

Example:

```js
    const name = "For Test";
    const tx = [{
        type: 4,
        data: {
            amount: {
               assetId: "WAVES",
               tokens: "1.567"
            },
            fee: {
                assetId: "WAVES",
                tokens: "0.001"
            },
            recipient: "test"
    }},{
        type: 4,
        data: {
            amount: {
               assetId: "WAVES",
               tokens: "0.51"
            },
            fee: {
                assetId: "WAVES",
                tokens: "0.001"
            },
            recipient: "merry"
        }
    }];


    WavesKeeper.signTransactionPackage(tx, name)
```

Sign two transaction:

- Transfer 1.567 WAVES to the alias test
- Transfer 0.51 WAVES to the alias merry

REPLY:

A unit of two lines – transactions that are signed and ready to be broadcasted.

Possible errors:

Same as in `signTransaction`.

### signOrder

Waves Keeper's method for signing an order to the matcher. As input, it accepts an object similar to a transaction like this:

```js
    {
        type: 1002,
        data: {
            ...data
        }
    }
```

- `*version`: 1,2,3.
- `amount`: MoneyLike – amount.
- `price`: MoneyLike – price.
- `orderType`: 'sell'/'buy' – order type.
- `matcherFee`: MoneyLike — fee (0.003 WAVES minimum).
- `matcherPublicKey`: string – the public key of the exchange service.
- `expiration`: string/number – the order's expiration time in ms.
- `*timestamp`: string/number - current time in ms.
- `*senderPublicKey`: string - public key in base58.

* \* – optional field, data are automatically supplied from Waves Keeper.

MoneyLike could look as:

- `{ tokens: 1, assetId: "WAVES" }`
- `{ coins: 100000000, assetId: "WAVES" }`

In both messages, the same amount of 1 WAVES is indicated. You can easily convert `coins`into `tokens`and back, if you know in what asset the price is indicated and you have received its precision: `tokens = coins / (10 ** precision)`.

Example:

```js
   WavesKeeper.signOrder({
        type: 1002,
        data: {
             matcherPublicKey: "7kPFrHDiGw1rCm7LPszuECwWYL3dMf6iMifLRDJQZMzy",
             orderType: "sell",
             expiration: Date.now() + 100000,
             amount: {
                 tokens: "100",
                 assetId: "WAVES"
             },
             price: {
                 tokens: "0.01",
                 assetId: "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS"
             },
             matcherFee: {
                 tokens: "0.03",
                 assetId: "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've signed an order!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

Response: a line with data for sending to the matcher.

Possible errors:

- `{ message: "User denied message", code: 10 }` – the user rejected the request.
- `{ message: "Api rejected by user", code: 12 }` – the website is not trusted.
- `{ message: "Invalid data", data: "Reason", code: 9 }` – invalid/incomplete request data.

### signAndPublishOrder

Waves Keeper's method for creating an order to the matcher is identical to `signOrder`, but it also tries to send data to the matcher.

Response: the matcher's reply line about successful creation of an order.

Possible errors:

- Same as for `signOrder`.
- `{message: "Filed request", data: "Error description", code: 15}` – a request has been signed, but not sent to the matcher.

### signCancelOrder

Waves Keeper's method for signing cancellation of an order to the matcher. As input, it accepts an object similar to a transaction like this:

```js
    {
        type: 1003,
        data: {
            ...data
        }
    }
```

- `id`: string – order ID.
- `*senderPublicKey`: string – sender's public key in base58.

Example:

```js
    WavesKeeper.signCancelOrder({
        type: 1003,
        data: {
            id: '31EeVpTAronk95TjCHdyaveDukde4nDr9BfFpvhZ3Sap'
        }
    });
```

Response: A data line for sending to the matcher.

Possible errors:

- `{ message: "User denied message", code: 10 }` – the user rejected the request.
- `{ message: "Api rejected by user", code: 12 }` – the website is not trusted.
- `{ message: "Invalid data", data: "Reason", code: 9 }` – invalid/incomplete request data.

### signAndPublishCancelOrder

Waves Keeper's method for cancelling an order to the matcher. It works identically to `signCancelOrder`,
but also tries to send data to the matcher. You should specify two more fields: `priceAsset` and `amountAsset` from the order.

Example:

```js
    WavesKeeper.signAndPublishCancelOrder({
        type: 1003,
        priceAsset: '8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS',
        amountAsset: 'WAVES',
        data: {
            id: '31EeVpTAronk95TjCHdyaveDukde4nDr9BfFpvhZ3Sap'
        }
    }).then(() => {
        console.log("Hurray! I've cancelled an order");
    }).catch((error) => {
        console.error("Something went wrong", error);
    });
```

Response: data that came from the matcher.

Possible errors:

- Same as for `signCancelOrder`.
- `{message: "Filed request", data: "Error description", code: 15}` – a request has been signed, but not sent to the matcher.

### signRequest

Waves Keeper's method for signing typified data, for signing requests on various services. As input, it accepts an object similar to a transaction like this:

```js
    {
        type: number,
        data: {
            ...data
        }
    }
```

Currently, the method supports the following types:

* **1001 – signing data for a request to the matcher for your orders**

   - `timestamp`: number/string.
   - `*senderPublicKey`: string — public key in base58.

   Example:

   ```js
       WavesKeeper.signRequest({
           type: 1001,
           data: {
               timestamp: 234234242423423
           }
       });
   ```

* **1004 – signing data for a request to gateway**

   - `timestamp`: number/string.

   Request:

   ```js
       WavesKeeper.signRequest({
           type: 1004,
           data: {
               timestamp: 234234242423423
           }
       });
   ```

Response: a line with a signature in base58.

Possible errors:

- `{ message: "User denied message", code: 10 }` – the user rejected the request.
- `{ message: "Api rejected by user", code: 12 }` – the website is not trusted.
- `{ message: "Invalid data", data: "Reason", code: 9 }` – invalid/incomplete request data.

### signCustomData

Waves Keeper's method for signing custom data for different services, it accepts an object:

#### version 1

- `version` 1
- `binary` string 'base64:....'

Note: This method adds the `[255, 255, 255, 1]` prefix to the signed bytes. This was done to make it impossible to sign transaction data in this method, which can lead to unauthenticated transactions and phishing. [For the details check serializeCustomData method in waves-transaction library.](https://github.com/wavesplatform/waves-transactions/blob/master/src/requests/custom-data.ts#L60)

Example:

```js
    WavesKeeper.signCustomData({
         version: 1,
         binary: 'base64:AADDEE=='
    });
```

Response:
```
   {
        version: 1,
        binary: 'base64:AADDEE==',
        signature: '...',
        publicKey: '...'
   }
```

Possible errors:

- `{ message: "User denied message", code: 10 }` – the user rejected the request.
- `{ message: "Api rejected by user", code: 12 }` – the website is not trusted.
- `{ message: "Invalid data", data: "Reason", code: 9 }` – invalid/incomplete request data.

#### version 2

- `version` 2
- `data` Array of
  - `type` "binary"/string/"integer"/"boolean" - field type,
  - `key` string - field name
  - `value` /string/string/number/boolean

Bytes to sign: [255, 255, 255, 2, ...(from data Array to bin)]
[waves-transaction library](https://github.com/wavesplatform/waves-transactions/blob/master/src/requests/custom-data.ts)

Example:

```js
    WavesKeeper.signCustomData({
         version: 2,
         data: [{ type: 'string', key: 'name', value: 'Mr. First' }]
    });
```

Response:
```
   {
        version: 2,
        data: [{ type: 'string', key: 'name', value: 'Mr. First' }]
        signature: '...',
        publicKey: '...'
   }
```

Possible errors:

- `{ message: "User denied message", code: 10 }` – the user rejected the request.
- `{ message: "Api rejected by user", code: 12 }` – the website is not trusted.
- `{ message: "Invalid data", data: "Reason", code: 9 }` – invalid/incomplete request data.

### verifyCustomData

Validate custom data:

```
       {
           version: 1,
           binary: 'base64:AADDEE==',
           signature: '...',
           publicKey: '...'
       }
       или
       {
            version: 2,
            data: [{ type: 'string', key: 'name', value: 'Mr. First' }]
            signature: '...',
            publicKey: '...'
       }
```

Example:

```js
    WavesKeeper.verifyCustomData({
        "version" : 1,
        "binary" : "base64:AADDEE==",
        "publicKey" : "3BvAsKuGZe2LbSwKr9SA7eSXcNDKnRqN1j2K2bZaTn5X",
        "signature": "2bLJYR68pwWrUUoatGbySz2vfY76VtzR8TScg1tt5f9DVDsFDCdecWrUiR4x6gFBnwF4Y51uszpouAwtSrg7EcGg"
    }).then(result => { console.log(result) });
```

REPLY: true/false

- `{ message: "User denied message", code: 10 }` – the user rejected the request
- `{ message: "Api rejected by user", code: 12 }` – The website is not trusted

### resourceIsApproved

Check that user allowed your website to access Waves Keeper.

Example:

```js
    WavesKeeper.resourceIsApproved().then(result => { console.log(result) });
```

REPLY: true/false

### resourceIsBlocked

Check that user blocked your website in Waves Keeper.

Example:

```js
    WavesKeeper.resourceIsBlocked().then(result => { console.log(result) });
```

REPLY: true/false
