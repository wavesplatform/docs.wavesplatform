# Blocks

## GET /blocks/height

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Возвращает текущую высоту блокчейна

**Пример ответа в JSON:**

```js
{
  "height": 7788
}
```

## GET /blocks/last

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Возвращает данные последнего блока

**Пример ответа в JSON:**

```js
{
    "blocksize": 46975,
    "reward": 600000000,
    "signature": "SMgKYvA8giihiWXDSrdUmjXLkmLZ5VfqLRBdc1rthbTjnMkE88osJfWeDjbQPySiNMfw38owiXx6g8kkVcDCKvk",
    "generator": "3P9DEDP5VbyXQyKtXDUt2crRPn5B7gs6ujc",
    "version": 4,
    "reference": "3wHRy6bzcSfEZTqTvHpbtsVRebVGj4BQrDT5MfZirofjkUb3KuALk9aHJtCcNJWXZfkpQUfpxB1GkqqMp5bf72bY",
    "features": [],
    "totalFee": 71900000,
    "nxt-consensus": {
        "base-target": 63,
        "generation-signature": "92HpzxipriiykyT5CyXib4KBneLbygPfCbsvQDqMdYfz"
    },
    "desiredReward": -1,
    "transactionCount": 135,
    "timestamp": 1574339162061,
    "height": 1805279,
    "transactionsRoot": "3wHRy6bzcSfEZTqTvHpbtsVRebVGj4BQrDT5MfZirofjkUb3KuALk9aHJtCcNJWXZfkpQUfpxB1GkqqMp5bf72bY",
}
```

## GET /blocks/at/{height}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Возвращает данные блока на заданной высоте

## GET /blocks/seq/{from}/{to}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Возвращает данные блока на заданном диапазоне высот

## GET /blocks/signature/{signature}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Возвращает данные блока по заданной подписи в Base58encoded

## GET /blocks/address/{address}/{from}/{to}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Получить список блоков сгенерированных заданным адресом
