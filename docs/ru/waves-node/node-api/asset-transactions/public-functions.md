# Публичные функции

## GET /assets/balance/{address}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Балансы по всем активам, которые когда-либо имел данный аккаунт (кроме WAVES)

```
"address" - адрес аккаунта в формате Base58
```

**Параметры ответа:**

```
"address" -  адрес аккаунта в формате Base58
"balances" - список балансов всех активов, которые когда-либо имел данный аккаунт
"assetId" - ID ассета в формате Base58
"balance" - баланс этого ассета на аккаунте
"quantity" - общее число выпущенных ассетов
"reissuable" - является ли ассет перевыпускаемым
"issueTransaction" - транзакция создания данного ассета
"minSponsoredAssetFee" - минимальное комиссия в спонсорских токенах
"sponsorBalance" - спонсорский баланс в waves
```

**Пример ответа в JSON:**

```js
{
  "address": "3Mv61qe6egMSjRDZiiuvJDnf3Q1qW9tTZDB",
  "balances": [
    {
      "assetId": "Ax9T4grFxx5m3KPUEKjMdnQkCKtBktf694wU2wJYvQUD",
      "balance": 4879179221,
      "quantity": 48791792210,
      "reissuable": true,
      "minSponsoredAssetFee" : 100,
      "sponsorBalance" : 1233221,
      "issueTransaction" : {
         "type" : 3,
         ...
      }
    },
    {
      "assetId": "49KfHPJcKvSAvNKwM7CTofjKHzL87SaSx8eyADBjv5Wi",
      "balance": 10,
      "quantity": 10000000000,
      "reissuable": false,
      "issueTransaction" : {
         "type" : 3,
         ...
      }
    }
  ]
}
```

## GET /assets/balance/{address}/{assetId} <a id="getassetbalance"></a>

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Баланс аккаунта для заданного ассета.

```
  "address" - адрес аккаунта в формате Base58
  "assetId" - ID ассета в формате Base58
```

**Пример ответа в JSON:**

```js
{
  "address": "3Mv61qe6egMSjRDZiiuvJDnf3Q1qW9tTZDB",
  "assetId": "Ax9T4grFxx5m3KPUEKjMdnQkCKtBktf694wU2wJYvQUD",
  "balance": 4879179221
}
```

## GET /assets/details/{assetId}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Описание ассета.

```
  "assetId" – ID ассета в формате Base58
```

**Пример ответа в JSON:**
```js
{
  "assetId" : "8tdULCMr598Kn2dUaKwHkvsNyFbDB1Uj5NxvVRTQRnMQ",
  "issueHeight" : 140194,
  "issueTimestamp" : 1504015013373,
  "issuer" : "3NCBMxgdghg4tUhEEffSXy11L6hUi6fcBpd",
  "name" : "name",
  "description" : "Sponsored asset",
  "decimals" : 1,
  "reissuable" : true,
  "quantity" : 1221905614,
  "script" : null,
  "scriptText" : null,
  "complexity" : 0,
  "extraFee": 0,
  "minSponsoredAssetFee" : 100000 // null assume no sponsorship, number - amount of assets for minimal fee
}
```

## GET /assets/details/?id={assetId1}&id={assetId2}&...

Описание заданных ассетов.

> :warning: Данный метод доступен начиная с версии ноды 1.2.0, после активации фичи "Ride V4 and multiple attached payments for Invoke Script Transaction" (No. 16) см.[Протокол активации](/ru/blockchain/waves-protocol/activation-protocol). Версия 1.2.x в настоящий момент доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

**Параметры запроса:**

```
  assetIdN – Asset ID in Base58 format
```

**Пример ответа в JSON:**
```js
[
  {
    "assetId": "7TG1nzpVhqqafTh4yeP4XXbEwtE4SnqHkqR2PfbLiA3U",
    "issueHeight": 1714607,
    "issueTimestamp": 1568977278682,
    "issuer": "3PMno2s9naUyUbbnkBHfWpjgtzvRKyAzwkW",
    "name": "Museician",
    "description": "A token to help musicians in all facets of their careers from the live side to the studio side and everything in between.",
    "decimals": 8,
    "reissuable": true,
    "quantity": 999989995499039700,
    "scripted": false,
    "minSponsoredAssetFee": 50000000
  },
  {
  "assetId" : "8tdULCMr598Kn2dUaKwHkvsNyFbDB1Uj5NxvVRTQRnMQ",
  "issueHeight" : 140194,
  "issueTimestamp" : 1504015013373,
  "issuer" : "3NCBMxgdghg4tUhEEffSXy11L6hUi6fcBpd",
  "name" : "name",
  "description" : "Sponsored asset",
  "decimals" : 1,
  "reissuable" : true,
  "quantity" : 1221905614,
  "script" : null,
  "scriptText" : null,
  "complexity" : 0,
  "extraFee": 0,
  "minSponsoredAssetFee": 100000
  } 
]
```

## GET /assets/nft/{address}/limit/{limit}?after={after}

NFT баланс аккаунта.

После активации фичи 16 данный метод возвращает только ассеты, которые созданы после активации фичи 13 в качестве NFT ассетов (amount: 1, decimal places: 0, reissuable: false).

До активации фичи 16, данный метод возвращает все ассеты, которые созданы как NFT (amount: 1, decimal places: 0, reissuable: false).

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

**Параметры запроса:**

```
  address – адрес аккаунта в формате Base58
  limit — количество токенов
  after — Id токена для нумерации после
```

**Пример ответа в JSON:**

```js
[
  {
    "assetId": "7TG1nzpVhqqafTh4yeP4XXbEwtE4SnqHkqR2PfbLiA3U",
    "issueHeight": 1714607,
    "issueTimestamp": 1568977278682,
    "issuer": "3PMno2s9naUyUbbnkBHfWpjgtzvRKyAzwkW",
    "name": "Museician",
    "description": "A token to help musicians in all facets of their careers from the live side to the studio side and everything in between.",
    "decimals": 0,
    "reissuable": false,
    "quantity": 1,
    "scripted": false,
    "minSponsoredAssetFee": 50000000,
    "originTransactionId": "8RwwkZJ373Nm6fJCgV2Lefe6FeWawUY2APujcsauUNMR"
  },
  {
    "assetId": "7TG1nzpVhqqafTh4yeP4XXbEwtE4SnqHkqR2PfbLiA3U",
    "issueHeight": 1714607,
    "issueTimestamp": 1568977278682,
    "issuer": "3PMno2s9naUyUbbnkBHfWpjgtzvRKyAzwkW",
    "name": "Museician",
    "description": "A token to help musicians in all facets of their careers from the live side to the studio side and everything in between.",
    "decimals": 0,
    "reissuable": false,
    "quantity": 1,
    "scripted": false,
    "minSponsoredAssetFee": 50000000,
    "originTransactionId": "8RwwkZJ373Nm6fJCgV2Lefe6FeWawUY2APujcsauUNMR"
  } 
]
```

## POST /assets/broadcast/issue

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Опубликуйте подписанную транзакцию выпуска актива в сети.

**Параметры запроса:**

```
"name" - Имя ассета, может повторяться, длина от 4 до 16 байт, plain text.
"description" - Описание ассета, макси длина 1000 байт, plain text.
"sender" - Адрес аккаунта отправителя в кошельке ноды, Base58.
"senderPublicKey" - Публичный ключ аккаунта отправителя, Base58.
"fee" - Комиссия за транзакцию выпуска ассета, min = 100000000 (1WAVES).
"decimals" - Количество знаков после запятой, max = 8.
"quantity" - Количество индивидуальнх недилимых единиц ассета (asset'lets) для выпуска.
"reissuable" - Boolean флаг. Задает возможность/невозможность перевыпуска ассета.
"signature" - Подпись всех данных странзакции, Base58.
```

**Пример запроса в JSON:**

```js
{
  "name": "Test Asset 1",
  "description": "Some description",  
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "quantity": 100000000000,
  "decimals": 8,
  "reissuable": true,
  "fee": 100000000,
  "timestamp": 1479287120875,
  "signature": "3cCKi3D17ysyEVg2cd3JGpCzm6ovL3HF8qDksX41oPLEqiRmMVZ2C8QJjs2Utd9YfQfzuEVRyzLsqPer89qAfo1A"
}
```

**Параметры ответа:**

```
"type" - Тип транзакции (3 для IssueTransaction).
"id" - Id(hash) транзакции в формате Base58.
"assetId" - ID ассета в формате Base58, равна tx id.
"fee" - Комиссия транзакции.
"timestamp" - Временная отметка транзакции.
"sender" - Адрес аккаунта отправителя, Base58.
"senderPublicKey" - Публичный ключ аккаунта отправителя, Base58.
"name" - Имя ассета.
"description" - Описание ассета.
"quantity" - Количество неделимых единиц ассета ('lets).
"decimals" - Количество знаков после запятой.
"reissuable" - Boolean флаг. Задает возможность/невозможность перевыпуска ассета.
"signature" - Подпись всех данных транзакции, Base58.
```

**Пример ответа в JSON:**

```js
{
  "type": 3,
  "id": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "name": "2bNcNL6HTQeVaJe9v",
  "description": "BJa6cfyHD5f9r6B4A9kEmB",
  "quantity": 100000000000,
  "decimals": 8,
  "reissuable": true,
  "fee": 100000000,
  "timestamp": 1479210401734,
  "signature": "4AKyeVcMMx9hUNpqQpeF5QPf5oWquyWk8avy524ZCXM6KdbYWpQZYf72NidzqSF3Prc6HA3DKEgdrCEhCcqw6Xbq"
}
```

## POST /assets/broadcast/reissue

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Перевыпустить дополнительное количество ассетов. Опубликовать в сеть подписанную транзакцию перевыпуска ассета.

**Параметры запроса:**

```
"assetId" - ID ранее выпущенного ассета, Base58.
"senderPublicKey" - Публичный ключ отправителя, Base58.
"fee" - Комиссия за транзакцию выпуска ассета, min = 100000.
"quantity" - Количество дополнительных неделимых единиц ('lets) для выпусука.
"reissuable" - Boolean флаг. Задает возможность/невозможность перевыпуска ассета.
"timestamp" - Временная отметка транзакции.
"signature" - Подпись всех данных транзакции, Base58.
```

**Пример ответа в JSON:**

```js
{
  "quantity": 22300000000,
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "reissuable": true,
  "fee": 100000,
  "timestamp": 1479221697312,
  "signature": "49Gp5qit4GF5723LxQLjsBRoyJKKH41LpNUzwwi2ZM6dXuE9a18ApAJt9sfK3uMpjD1PiHXshS31nN9NtpYm8veu"
}
```

**Параметры ответа:**

```
"type" - Тип транзакции (5 для ReissueTransaction)
другие - Также как в [Broadcast Issue Assets]
```

**Пример ответа в JSON:**

```js
{
  "type": 5,
  "id": "2fA4nzfCXrPmpAscwGrLoL6JHTa1u4eRLv5vbohzVxBn",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "quantity": 22300000000,
  "reissuable": true,
  "fee": 100000,
  "timestamp": 1479221697312,
  "signature": "49Gp5qit4GF5723LxQLjsBRoyJKKH41LpNUzwwi2ZM6dXuE9a18ApAJt9sfK3uMpjD1PiHXshS31nN9NtpYm8veu"
}
```

## POST /assets/broadcast/burn
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Сжечь заданное количество ассетов. Опубликовать в сети подписанную транзакцию сжигания ассета.

**Параметры ответа:**

```
"assetId" - ID ранее выпущенного ассета, Base58.
"senderPublicKey" - Публичный ключ аккаунта отпраителя, Base58.
"fee" - Комиссия за выпуск ассета, min = 100000
"quantity" - Количество неделимых единиц ассетов ('lets) чтобы сжечь.
"timestamp" - Временная отметка транзакции.
"signature" - Подпись всех данных транзакции, Base58.
```

**Пример запроса в JSON:**

```js
{
  "senderPublicKey" : "EHDZiTW9uhZmpfKRyJtusHXCQ3ABwJ3t9dxZdiPp2GZC",
  "fee" : 100000000,
  "timestamp" : 1495623946088,
  "signature" : "4sWPrZFpR379XC4Med1y8AK2Avmx8nVUxVAzsE4QMzEeMtQyHgjzfQsi2Y5VY7diCqMAzohy9ZSTP3yfiB3QPQMd",
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

## POST /assets/broadcast/transfer
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Опубликовать в сети подписанную транзакцию перевода ассета с одного адреса на другой.

**Параметры запроса:**

* Подписанный запрос на перевод:

    ```
    "assetId" [optional] - ID ассета к отправке. Параметр не указывается для переводов WAVES, Base58.
    "senderPublicKey" - Публичный ключ аккаунта отправителя, Base58.
    "recipient" - Адрес аккаунта получателя, Base58.
    "fee" - Комиссия за транзакцию перевода ассетов, min = 100000 (WAVElets)
    "feeAssetId" [optional] - ID ассета комиссии транзакции. По умолчанию WAVES, если не задан.
    "amount" - Количество неделимых единиц ассетов ('lets) к отправке.
    "attachment" - Опционально дополнительные данные о транзакции, max длина 140 байт, Base58.
    "timestamp" - Временная отметка транзакции.
    "signature" - Подпись всех данных транзакции, Base58.
    ```

* Подписанный запрос на перевод с версией:

    ```
    "assetId" [optional] - ID ассета к отправке. Параметр не указывается для переводов WAVES, Base58.
    "senderPublicKey" - Публичный ключ аккаунта отпраителя, Base58.
    "recipient" - Адрес аккаунта получателя, Base58.
    "fee" - Комиссия за транзакцию перевода ассетов, min = 100000 (WAVElets)
    "amount" - Количество неделимых единиц ассетов ('lets) к отправке.
    "attachment" - Опционально дополнительные данные о транзакции, max длина 140 байт, Base58.
    "timestamp" - Временная отметка транзакции.
    "verson" - Версия транзакции. Всегда 2.
    "proofs" - Пруфы, Base58. Может быть подписью или секретным словом, которое можно посмотреть в смарт контракте.
    ```

**Пример запроса в JSON:**

```js
{
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "recipient": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7",
  "fee": 100000,
  "amount": 5500000000,
  "attachment": "BJa6cfyGUmzBFTj3vvvaew",
  "timestamp": 1479222433704,
  "signature": "2TyN8pNS7mS9gfCbX2ktpkWVYckoAmRmDZzKH3K35DKs6sUoXHArzukV5hvveK9t79uzT3cA8CYZ9z3Utj6CnCEo"
}
```

**Парметры ответа:**

* Подписанный ответ на запрос на перевод:

    ```
    "type" - Тип транзакции (4 для TransferTransaction).
    "id" - Id(hash) транзакции, Base58.
    "assetId" - ID ассета в Base58, равен id транзакции.
    "timestamp" - Временная отметка транзакции.
    "sender" - Адрес аккаунта отправителя, Base58.
    "senderPublicKey" - Публичный ключ аккаунта отпраителя, Base58.
    "recipient" - Адрес аккаунта получателя, Base58.
    "feeAsset" - ID ассета комиссии транзакции, в данный момент null, то есть WAVES.
    "fee" - Комиссия за транзакцию.
    "attachment" - Вложение, Base58.
    "signature" - Подпись всех данных транзакции, Base58.
    ```

* Подписанный ответ на запрос на перевод с версией:

    ```
    "type" - Тип транзакции (4 для TransferTransaction).
    "id" - Id(hash) транзакции, Base58.
    "sender" - Адрес аккаунта отправителя, Base58.
    "senderPublicKey" - Публичный ключ аккаунта отпраителя, Base58.
    "fee" - Комиссия за транзакцию.
    "timestamp" - Временная отметка транзакции.
    "proofs" - Массив пруфов в Base58.
    "version" - Версия транзакции (Всегда 2)
    "recipient" - Адрес аккаунта получателя, Base58.
    "assetId" - ID ассета в Base58, равен id транзакции.
    "amount" - Количество неделимых единиц для перевода.
    "attachment" - Вложение, Base58.
    ```

**Пример ответа в JSON:**

```js
{
  "type": 4,
  "id": "3xPyT73TGV7c5PKEJpicwSsX7PXyi3Lm1JFNQivFRLuy",
  "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
  "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
  "recipient": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7",
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "amount": 5500000000,
  "feeAsset": null,
  "fee": 100000,
  "timestamp": 1479222433704,
  "attachment": "BJa6cfyGUmzBFTj3vvvaew",
  "signature": "2TyN8pNS7mS9gfCbX2ktpkWVYckoAmRmDZzKH3K35DKs6sUoXHArzukV5hvveK9t79uzT3cA8CYZ9z3Utj6CnCEo"
}
```

## POST /assets/broadcast/batch-transfer

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Опубликовать в сети несколько подписанных транзакций передачи активов с одного адреса на другой. Текущее ограничение на размер отправляемого объекта JSON составляет 1 мегабайт.

**Параметры запроса:**

Массив объектов JSON:

* Подписанный запрос на перевод:

    ```
    "assetId" [optional] - ID ассета к отправке. Параметр не указывается для переводов WAVES, Base58.
    "senderPublicKey" - Публичный ключ аккаунта отпраителя, Base58.
    "recipient" - Адрес аккаунта получателя, Base58.
    "fee" - Комиссия за транзакцию, min = 100000 (WAVElets).
    "feeAssetId" [optional] - ID ассета комиссии транзакции, в данный момент null, то есть WAVES.
    "amount" - Количество неделимых единиц для перевода.
    "attachment" - Вложение, Base58.
    "timestamp" - Временная отметка транзакции.
    "signature" - Подпись всех данных транзакции, Base58.
    ```

* Подписанный запрос на перевод с версией:

    ```
    "assetId" [optional] - ID ассета к отправке. Параметр не указывается для переводов WAVES, Base58.
    "senderPublicKey" - Публичный ключ аккаунта отпраителя, Base58.
    "recipient" - Адрес аккаунта получателя, Base58.
    "fee" - Комиссия за транзакцию, min = 100000 (WAVElets).
    "amount" - Количество неделимых единиц для перевода.
    "attachment" - Вложение, Base58, max длина 140 байт.
    "timestamp" - Временная отметка транзакции.
    "verson" - Версия транзакции. Всегда 2.
    "proofs" - Пруфы в Base58. Это может быть подпись или секретное слово, которое можно верифицировать в смарт контракте
    ```

**Пример запроса в JSON:**

```js
[
  {
    "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
    "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
    "recipient": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7",
    "fee": 100000,
    "amount": 5500000000,
    "attachment": "BJa6cfyGUmzBFTj3vvvaew",
    "timestamp": 1479222433704,
    "signature": "2TyN8pNS7mS9gfCbX2ktpkWVYckoAmRmDZzKH3K35DKs6sUoXHArzukV5hvveK9t79uzT3cA8CYZ9z3Utj6CnCEo"
  },
  {
    "assetId": "Aih8nqFiogg9AFaByXrDvoSZnzmXEndPxxyti7zvp3Bp",
    "senderPublicKey": "UpbUnRwjkF9kjYHqGtWkkYJPqCtY4AdaKuwGUdNhcYzX",
    "recipient": "2dmG3TnD1iha2Nr29F1DuZzG9nTH941r9e3",
    "fee": 100000,
    "amount": 5500000000,
    "attachment": "YbFwKyUhKw1r1Ag64dpkbK",
    "timestamp": 1479222433704,
    "version": 2,
    "proofs": [
      "45bw5ynx7wynXMtmS6EEx8hNs3YMFctknUBsnVPQ3YbPmB8vhFoL5CSFHTBMFmnsLVbdNCpvFGGbPjbfZxbLb8j9r8MTWrbgPJQ",
      "HpSmAWoES5pKvaUbo4VdbkgxiwKYMHdRAJEibVhZzwv3BcBJVBr2hNzaF5o7SAgVw8oHdq4Lgw"
    ]
  }
]
```

**Параметры ответа:**

Массив объектов JSON:

* Signed transfer response:

    ```
    "type" - Тип транзакции (4 для TransferTransaction).
    "id" - Id(hash) транзакции, Base58.
    "assetId" - ID ассета в Base58, равен id транзакции.
    "timestamp" - Временная отметка транзакции.
    "sender" - Адрес аккаунта отправителя, Base58.
    "senderPublicKey" - Публичный ключ аккаунта отпраителя, Base58.
    "recipient" - Адрес аккаунта получателя, Base58.
    "feeAsset" - ID ассета комиссии транзакции, в данный момент null, то есть WAVES.
    "fee" - Комиссия за транзакцию.
    "attachment" - Вложение, Base58.
    "signature" - Подпись всех данных транзакции, Base58.
    ```

* Signed versioned transfer response:

    ```
    "type" - Тип транзакции (4 для TransferTransaction).
    "id" - Id(hash) транзакции, Base58.
    "sender" - Адрес аккаунта отправителя, Base58.
    "senderPublicKey" - Публичный ключ аккаунта отпраителя, Base58.
    "fee" - Комиссия за транзакцию.
    "timestamp" - Временная отметка транзакции.
    "proofs" - Массив пруфов в Base58.
    "version" - Версия транзакции (Всегда 2)
    "recipient" - Адрес аккаунта получателя, Base58.
    "assetId" - ID ассета в Base58, равен id транзакции.
    "amount" - Количество неделимых единиц для перевода.
    "attachment" - Вложение, Base58.
    ```

**Пример ответа в JSON:**

```js
[
  {
    "type": 4,
    "id": "3xPyT73TGV7c5PKEJpicwSsX7PXyi3Lm1JFNQivFRLuy",
    "sender": "3NBVqYXrapgJP9atQccdBPAgJPwHDKkh6A8",
    "senderPublicKey": "CRxqEuxhdZBEHX42MU4FfyJxuHmbDBTaHMhM3Uki7pLw",
    "recipient": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7",
    "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
    "amount": 5500000000,
    "feeAsset": null,
    "fee": 100000,
    "timestamp": 1479222433704,
    "attachment": "BJa6cfyGUmzBFTj3vvvaew",
    "signature": "2TyN8pNS7mS9gfCbX2ktpkWVYckoAmRmDZzKH3K35DKs6sUoXHArzukV5hvveK9t79uzT3cA8CYZ9z3Utj6CnCEo"
  },
  {
    "type": 4,
    "id": "3MHxkG7Jp1dR7iZSyYiNPy7G4BMTCUPbs2snAzvv4wu1",
    "sender": "4V4TpBPPfvEXYmzteXLPkK5xwVXWjnQwJ5H",
    "senderPublicKey": "UpbUnRwjkF9kjYHqGtWkkYJPqCtY4AdaKuwGUdNhcYzX",
    "fee": 100000,
    "timestamp": 1479222433704,
    "proofs": [
      "45bw5ynx7wynXMtmS6EEx8hNs3YMFctknUBsnVPQ3YbPmB8vhFoL5CSFHTBMFmnsLVbdNCpvFGGbPjbfZxbLb8j9r8MTWrbgPJQ",
      "HpSmAWoES5pKvaUbo4VdbkgxiwKYMHdRAJEibVhZzwv3BcBJVBr2hNzaF5o7SAgVw8oHdq4Lgw"
    ],
    "version": 2,
    "recipient": "2dmG3TnD1iha2Nr29F1DuZzG9nTH941r9e3",
    "assetId": "Aih8nqFiogg9AFaByXrDvoSZnzmXEndPxxyti7zvp3Bp",
    "amount": 5500000000,
    "attachment": "YbFwKyUhKw1r1Ag64dpkbK"
  }
]
```
