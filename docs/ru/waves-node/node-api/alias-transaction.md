# Alias

## POST /alias/broadcast/create

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Создать подписанную транзакцию алиаса для адреса отправителя.

**Параметры запроса**

```
"senderPublicKey" - Публичный ключ аккаунта в Base58.
"fee" - Комиссия транзакции.
"alias" - Алиас для адреса отправителя.
"timestamp" - Временная отметка транзакции.
"signature" - Подпись всех данных транзакции в Base58.
```

**Пример запроса в JSON**

```js
 {
 "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
 "fee": 100000,
 "alias": "ALIAS",
 "timestamp": 1488807184731,
 "signature": "3aB6cL1osRNopWyqBYpJQCVCXNLibkwM58dvK85PaTK5sLV4voMhe5E8zEARM6YDHnQP5YE3WX8mxdFp3ciGwVfy"
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

## POST /alias/create
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

**Параметры запроса**

```
"sender" - Адрес отправителя в Base58.
"fee" - Комиссия транзакции.
"alias" - Алиас для адреса отправителя.
```

**Пример запроса в JSON**

```js
 {
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

## GET /alias/by-alias/{alias}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

**Параметры запроса**

```
"alias" - Алиас
```

**Пример ответа в JSON**

```js
{

"address": "address:3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7"

}
```

## GET /alias/by-address/{address}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

**Параметры запроса**

```
"address" - Адрес
```

**Пример ответа в JSON**

```js
[

"alias:HUMANREADABLE1",
"alias:HUMANREADABLE2",
"alias:HUMANREADABLE3",

]
```
