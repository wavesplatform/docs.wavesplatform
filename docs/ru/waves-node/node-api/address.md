# Address

## GET /addresses

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Получить список всех адресов аккаунта в кошелька ноды.

**Ответ:**

```js
[
"3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
"3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7"
]
```

### GET /addresses/seq/{from}/{to}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Получить список адресов аккаунта кошелька ноды с индексами в заданном диапазоне.

**Ответ:**

```js
[
"3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",  
"3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7"
]
```

## POST /addresses

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Сгенерировать новый адрес аккаунта в кошельке. Потребуется API KEY.

**Параметры запроса:**

```
  "address" - адрес аккаунта в Base58.
```

**Пример ответа в JSON:**

```js
{

"address": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7"

}
```

## GET /addresses/balance/details/{address}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Получить детали баланса:

```
"address" - адре аккаунта в Base58.
"Regular" — столько Waves у вас есть, включая переданные в лизинг;
"Available" — как regular, но без Waves, переданных в лизинг;
"Effective" — available плюс Waves переданные в лизинг вам;
"Generating" — минимальные effective за последные 1000 блоков;
```

**Пример ответа в JSON:**

```js
{
  "address": "3P2HNUd5VUPLMQkJmctTPEeeHumiPN2GkTb",
  "regular": 1498883844,
  "generating": 1066926675599895,
  "available": 1498883844,
  "effective": 1067913688974251
}
```

## GET /addresses/balance/{address} <a id="get-addressesbalance"></a>

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Получить баланс аккаунта в WAVES {address}:

```
  "address" - адрес аккаунта в Base58.
```

**Пример ответа а JSON:**

```js
{

  "address": "3N3keodUiS8WLEw9W4BKDNxgNdUpwSnpb3K",
  "confirmations": 0,
  "balance": 100945889661986

}
```

## GET /addresses/balance/{address}/{confirmations}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Получить баланс в WAVES по {address} после подтверждений {confirmations}:

```
  "address" - адрес аккаунта в Base58.
  "confirmations" - N количетво подтверждений.
```

**Пример ответа в JSON:**

```js
{

"address": "3N3keodUiS8WLEw9W4BKDNxgNdUpwSnpb3K",

"confirmations": 500,

"balance": 100945388397565

}
```

## GET /addresses/scriptInfo/{address}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg) ![master](https://img.shields.io/badge/node->%3D0.13.3-4bc51d.svg)

Получить инфрмацию скрипта по адресу.

```
  "address" - Адрес аккаунта в Base58.
  "script" - Base58 представление собранного скрипта. Данное поле отсутствует если скрипт не задан для адреса.
  "scriptText" - Текстовое представление скрипта. Данное поле отсутствует если скрипт не задан для адреса.
  "complexity" - Насколько сложный скрипт.
  "extraFee" - Дополнительная комиссия за все транзакции, отправленные с данного аккаунта, если это майнер нода.
```

**Пример ответа в JSON:**

```js
{
  "address": "3N3keodUiS8WLEw9W4BKDNxgNdUpwSnpb3K",
  "script": "3rbFDtbPwAvSp2vBvqGfGR9nRS1nBVnfuSCN3HxSZ7fVRpt3tuFG5JSmyTmvHPxYf34SocMRkRKFgzTtXXnnv7upRHXJzZrLSQo8tUW6yMtEiZ",
  "scriptText": "ScriptV1(BLOCK(LET(x,CONST_LONG(1)),FUNCTION_CALL(FunctionHeader(==,List(LONG, LONG)),List(FUNCTION_CALL(FunctionHeader(+,List(LONG, LONG)),List(REF(x,LONG), CONST_LONG(1)),LONG), CONST_LONG(2)),BOOLEAN),BOOLEAN))",
  "complexity": 11,
  "extraFee": 10001
}
```
