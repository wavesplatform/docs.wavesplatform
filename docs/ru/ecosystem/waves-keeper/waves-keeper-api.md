---
sidebarDepth: 2
---

# Waves Keeper API

## Введение

На страницах браузера, работающих по протоколу http / https (а не на локальных страницах с протоколом file: //) с установленным расширением Waves Keeper, становится доступен глобальный объект Waves Keeper, содержащий следующие методы:

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

Все методы, кроме `on`, работают асинхронно и возвращают [promises](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise).

В коде можно использовать [TypeScript types](https://github.com/wavesplatform/waveskeeper-types)

При инициализации `window.WavesKeeper` не имеет методов API.
Вы можете использовать `WavesKeeper.initialPromise` для ожидания завершения инициализации API.

Пример:

```
    WavesKeeper.initialPromise
        .then((keeperApi) => {
            /*...init app*/
            keeperApi.publicState().then( state => startApp(state));
        })

```

В Waves Keeper для большей безопасности и простоты использования каждый новый веб-сайт, использующий API, должен быть разрешен пользователем. При первой попытке использовать API (кроме `on`) пользователь увидит запрос на доступ веб-сайта к Waves Keeper. Если пользователь выдаст доступ, веб-сайт считается доверенным и может использовать API на своих страницах. В противном случае веб-сайт блокируется, и в ответ на все запросы будет отображаться сообщение об ошибке `{message:" Api отклонен пользователем ", код: 12}.` Пользователи не будут видеть новые уведомления. Чтобы предоставить доступ, пользователь должен пометить веб-сайт как надежный в интерфейсе Keeper.

## Описание методов

### publicState

Если это доверенный веб-сайт, будут возвращены общедоступные данные Waves Keeper.

Пример:

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

или

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

Ответ:

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

Описание полей query return:

- `initialized` - boolean keeper initialized
- `locked` - boolean keeper in wait mode
- `account` – current account, if the user allowed access to the website, or null
- `network` – current Waves network, node and matcher addresses
- `messages` – signature request statuses
- `txVersion` – available transaction versions for each type

Возможные ошибки:

- `{ message: "Init Waves Keeper and add account" }` – Waves Keeper is not initialized
- `{ message: "Add Waves Keeper account" }` – Waves Keeper accessed, but there are no accounts
- `{ message: "User denied message" }` – the user denied the website operation with Waves Keeper

### notification

Отправка сообщения в Waves Keeper. Вы можете отправлять сообщения 1 раз в 30 секунд для доверенных сайтов с разрешением на отправку.

`notification` facilitates input of the following data:

- `title` - string (20 chars max) (required field)
- `message` - string (250 chars max) (optional field)

return Promise

Пример:

```js
       WavesKeeper.notification({
            title: 'Hello!',
            message: 'Congratulation!!!'
       });
```

Возможные ошибки:

- `{message: "Incorrect notification data", data: "title has more than 20 characters", code: "19"}` - Incorrect notification title
- `{message: "Incorrect notification data", data: null, code: "19"}` - Incorrect notification data
- `{message: "Can't sent notification", data: {msg: "Min notification interval 30s. Wait 28.017s."}, code: "18"}` - try send later, you can send 1 message in 30 sec
- `{message: "Api rejected by user", code: 12}` the user denied the request or the website is not trusted.

### encryptMessage

Вы можете зашифровать строковые сообщения для учетной записи в сети Waves.
Вы должны иметь publicKey получателя.

WavesKeeper.encryptMessage(`*string to encrypt*`, `*public key in base58 string*`, `*prefix is secret app string need for encoding*`)

Пример:

```js
       WavesKeeper.encryptMessage('My message', '416z9d8DQDy5MPTqDhvReRBaPb19gEyVRWvHcewpP6Nc', 'my app')
       .then((encryptedMessage) => {
            console.log(encryptedMessage);
       });
```

Возможные ошибки:

- `{ message: "Init Waves Keeper and add account" }` – Waves Keeper is not initialized
- `{ message: "App is locked" }` – Waves Keeper is locked
- `{ message: "Add Waves Keeper account" }` – Waves Keeper accessed, but there are no accounts
- `{ message: "User denied message" }` – the user denied the website operation with Waves Keeper

### decryptMessage

Вы можете расшифровать строковые сообщения из учетной записи в сети Waves.
Вам нужно иметь publicKey отправителя и зашифрованное сообщение.

WavesKeeper.decryptMessage(`*string to decrypt*`, `*public key in base58 string*`, `*prefix is secret app string need for encoding*`)

Пример:

```js
       WavesKeeper.decryptMessage('**encrypted msg**', '416z9d8DQDy5MPTqDhvReRBaPb19gEyVRWvHcewpP6Nc', 'my app')
       .then((message) => {
            console.log(message);
       });
```

Возможные ошибки:

- `{ message: "Init Waves Keeper and add account" }` – Waves Keeper is not initialized
- `{ message: "App is locked" }` – Waves Keeper is locked
- `{ message: "Add Waves Keeper account" }` – Waves Keeper accessed, but there are no accounts
- `{ message: "User denied message" }` – the user denied the website operation with Waves Keeper

### on

Позволяет подписаться на события Waves Keeper.

Поддерживает события:

- `update` – subscribe to updates of the state

Пример:

```js   
   WavesKeeper.on("update", state => {
        //state object as from WavesKeeper.publicState
   });
```

Если веб-сайт не является доверенным, события не будут отображаться.

### auth

Этот метод позволяет получить подпись пользователя на некоторых произвольных данных. Проверив достоверность подписи, вы сможете убедиться, что аккаунт Waves принадлежит именно этому пользователю.

Пример:

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

или

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

`auth` содержит следующие данные:

- `name` – name of the service (optional field)
- `data` – a string line with any data (required field)
- `referrer` – a websites' full URL for redirect (optional field)
- `icon` – path to the logo relative to the `referrer`or origin of the website (optional field)
- `successPath` – relative path to the website's Auth API (optional field)

Пример:

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

Если верификация прошла успешно, Waves Keeper вернет в promise объект, содержащий данные для верификации подписи:

- `host` – a host that requested a signature
- `name` – the name of an application that requested a signature
- `prefix` – a prefix participating in the signature
- `address` – an address in Waves network
- `publicKey` – the user's public key
- `signature` - signature
- `version` – API version

Ошибки:

- `{message: "Invalid data", data: "[{"field":"data","type":"string","message":"field is required"}]", code: 9}` – signature data contain errors
- `{message: "User denied message", code: 10}` – the user denied the request
- `{message: "Api rejected by user", code: 12}` - the website is not trusted

#### Как проверить валидность подписи <a id="validity"></a>

Подписанные данные состоят из трех частей: `prefix` (строка `WavesWalletAuthentication`) + `host` + предоставленные вами данные. Все строки конвертируются в `length bytes` + `value bytes`, как в транзакции данных. `prefix` и `host` нужны в целях безопасности, на случай, если вредоносный сервис попытается использовать данные и подпись.

Мы рекомендуем использовать валидацию адреса на случай, если подпись и открытый ключ действительны, но адрес был подменен.

##### Пример кода на TypeScript

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

##### Пример кода на JS

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

##### Пример кода на Python

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

##### Пример кода на PHP

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

Метод для подписания транзакций. Описание формата транзакций см. в разделе [Формат транзакций](/ru/ecosystem/waves-keeper/transaction).

Пример:

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

API возвращает строки, а не объект, поскольку в javascript точность теряется при работе с 8-byte integers.

Описание поддерживаемых типов транзакций приведено ниже.

В этом примере мы подписываем транзакцию для передачи WAVES псевдониму `test` в сети Waves.

ответ:

`{"version":2,"assetId":"", "amount":156700000,"feeAssetId":"",fee:100000, "recipient":"recipient","attachment":"", "timestamp":1548770230589,"senderPublicKey":"public key","proofs":["signature"],"type":4}`

Ошибки:

- `{message: "User denied message", code: 10}` – The user denied the request.
- `{message: "Api rejected by user", code: 12}` – The website is not trusted.
- `{message: "Invalid data", data: "Reason", code: 9}` – invalid/incomplete request data.

### signAndPublishTransaction

Похоже на `signTransaction`, но также транслирует транзакцию на блокчейн. Описание формата транзакций см. в разделе [Формат транзакций](/ru/ecosystem/waves-keeper/transaction).

Пример:

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

Ответ: 

Cтрока, содержащая всю прошедшую транзакцию.

Ошибки:

- Same as `signTransaction`
- `{message: "Filed request", data: "Error description", code: 15}` – a request was signed but not broadcasted

### signTransactionPackage

Подписание пакета транзакций. Иногда необходимо одновременно подписать несколько транзакций, и для удобства пользователя можно одновременно подписать до семи транзакций. Описание формата транзакций см. в разделе [Формат транзакций](/ru/ecosystem/waves-keeper/transaction).

Пример:

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

Подписание двух транзакций:

- Перевод 1,567 WAVES на псевдоним test
- Перевод 0,51 WAVES на псевдоним merry

Ответ:

Блок из двух строк: транзакции, которые подписаны и готовы к трансляции.

Ошибки:

Такие же, как в `signTransaction`.

### signOrder

Метод Waves Keeper для подписания заявки на матчере. В качестве входных данных он принимает объект, похожий на транзакцию, подобную этой:

```js
    {
        type: 1002,
        data: {
            ...data
        }
    }

```
- `*version` 1,2,3
- `amount` MoneyLike - amount
- `price` MoneyLike - price
- `orderType` 'sell'/'buy' – order type
- `matcherFee` MoneyLike - fee (0.003 WAVES minimum),
- `matcherPublicKey` string - the public key of the exchange service
- `expiration` string/number – the order's expiration time
- `*timestamp` string/number - current time
- `*senderPublicKey` string - public key in base58

Пример:

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

Ответ: Строка с данными для отправки матчеру.

Ошибки:

- `{ message: "User denied message", code: 10 }` – the user rejected the request
- `{ message: "Api rejected by user", code: 12 }` – The website is not trusted
- `{ message: "Invalid data", data: "Reason", code: 9 }` - invalid/incomplete request data

### signAndPublishOrder

Метод Waves Keeper для создания ордера для матчера идентичен `signOrder`, но он также пытается отправить данные матчеру.

Ответ: ответ матчера об успешном создании ордера.

Ошибки:

- Те же, что у `signOrder`
- `{message: "Filed request", data: "Error description", code: 15}` – a request has been signed, but not sent to the matcher

### signCancelOrder

Метод Waves Keeper для подписания отмены ордера для матчера. В качестве входных данных он принимает объект, похожий на транзакцию, подобную этой:

```js
    {
        type: 1003,
        data: {
            ...data
        }
    }

```

- `id` string – order ID
- `*senderPublicKey` - string - sender's public key in base58

Пример:

```js
    WavesKeeper.signCancelOrder({
        type: 1003,
        data: {
            id: '31EeVpTAronk95TjCHdyaveDukde4nDr9BfFpvhZ3Sap'
        }
    });
```

Ответ: Строка данных для отправки матчеру.

Ошибки:

- `{ message: "User denied message", code: 10 }` – the user rejected the request
- `{ message: "Api rejected by user", code: 12 }` – The website is not trusted
- `{ message: "Invalid data", data: "Reason", code: 9 }` - invalid/incomplete request data

### signAndPublishCancelOrder

Метод Waves Keeper для отмены заявки матчеру. Он работает идентично `signCancelOrder`,
но также пытается отправить данные матчеру. Для API нужно знать также 2 поля `priceAsset` и `amountAsset` ордера.

Пример:

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

Ответ: Данные, которые пришли от матчера.

Ошибки:

- Same as for `signCancelOrder`
- `{message: "Filed request", data: "Error description", code: 15}` – a request has been signed, but not sent to the matcher.

### signRequest

Метод Waves Keeper для подписи типизированных данных, для подписания запросов на различные сервисы. В качестве входных данных он принимает объект, похожий на транзакцию, подобную этой:

```js
    {
        type: number,
        data: {
            ...data
        }
    }
```

В настоящее время метод поддерживает следующие типы:

**1001 – signing data for a request to the matcher for your orders**

- `timestamp` number/string
- `*senderPublicKey` string public key in base58

Пример:

```js
    WavesKeeper.signRequest({
        type: 1001,
        data: {
            timestamp: 234234242423423
        }
    });
```

Ответ: строка с подписью в base58.

Ошибки:

- `{ message: "User denied message", code: 10 }` – the user rejected the request
- `{ message: "Api rejected by user", code: 12 }` – The website is not trusted
- `{ message: "Invalid data", data: "Reason", code: 9 }` - invalid/incomplete request data

**1004 – signing data for a request to gateway**

- `timestamp` number/string

Запрос:

```js
    WavesKeeper.signRequest({
        type: 1004,
        data: {
            timestamp: 234234242423423
        }
    });
```

Ответ: строка с подписью в base58.

Ошибки:

- `{ message: "User denied message", code: 10 }` – the user rejected the request
- `{ message: "Api rejected by user", code: 12 }` – The website is not trusted
- `{ message: "Invalid data", data: "Reason", code: 9 }` - invalid/incomplete request data

### signCustomData

Метод Waves Keeper для подписи пользовательских данных для разных сервисов, он принимает объект:

#### version 1

- `version` 1
- `binary` string 'base64:....'

Note: Этот метод добавляет префикс `[255, 255, 255, 1]` к подписанным байтам. Это было сделано для того, чтобы в этом методе было невозможно подписать данные транзакций, что может привести к транзакциям, не прошедшим проверку подлинности, и фишингу. [Подробности см. В методе serializeCustomData в библиотеке waves-транзакции](https://github.com/wavesplatform/waves-transactions/blob/master/src/requests/custom-data.ts#L60)

Пример:

```js
    WavesKeeper.signCustomData({
         version: 1,
         binary: 'base64:AADDEE=='
    });
```

Ответ:

```
   {
        version: 1,
        binary: 'base64:AADDEE==',
        signature: '...',
        publicKey: '...'
   }
```

Ошибки:

- `{ message: "User denied message", code: 10 }` – the user rejected the request
- `{ message: "Api rejected by user", code: 12 }` – The website is not trusted
- `{ message: "Invalid data", data: "Reason", code: 9 }` - invalid/incomplete request data

#### version 2

- `version` 2
- `data` Array of
  - `type` "binary"/string/"integer"/"boolean" - field type,
  - `key` string - field name
  - `value` /string/string/number/boolean

Байты для подписи: [255, 255, 255, 2, ...(from data Array to bin)]
[waves-transaction library](https://github.com/wavesplatform/waves-transactions/blob/master/src/requests/custom-data.ts)

Пример:

```js
    WavesKeeper.signCustomData({
         version: 2,
         data: [{ type: 'string', key: 'name', value: 'Mr. First' }]
    });
```

Ответ:

```
   {
        version: 2,
        data: [{ type: 'string', key: 'name', value: 'Mr. First' }]
        signature: '...',
        publicKey: '...'
   }
```

Ошибки:

- `{ message: "User denied message", code: 10 }` – the user rejected the request
- `{ message: "Api rejected by user", code: 12 }` – The website is not trusted
- `{ message: "Invalid data", data: "Reason", code: 9 }` - invalid/incomplete request data

### verifyCustomData

Валидация custom data:

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

Пример:

```js
    WavesKeeper.verifyCustomData({
        "version" : 1,
        "binary" : "base64:AADDEE==",
        "publicKey" : "3BvAsKuGZe2LbSwKr9SA7eSXcNDKnRqN1j2K2bZaTn5X",
        "signature": "2bLJYR68pwWrUUoatGbySz2vfY76VtzR8TScg1tt5f9DVDsFDCdecWrUiR4x6gFBnwF4Y51uszpouAwtSrg7EcGg"
    }).then(result => { console.log(result) });
```

Ответ: true/false

- `{ message: "User denied message", code: 10 }` – the user rejected the request
- `{ message: "Api rejected by user", code: 12 }` – The website is not trusted

### resourceIsApproved

Проверка allow API status для вашего origin.

Пример:

```js
    WavesKeeper.resourceIsApproved().then(result => { console.log(result) });
```

Ответ: true/false

### resourceIsBlocked

Проверка статуса block API для вашего origin.

Пример:

```js
    WavesKeeper.resourceIsBlocked().then(result => { console.log(result) });
```

Ответ: true/false
