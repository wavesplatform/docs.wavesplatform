# Blocks

## GET /blocks/headers/last

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Return the last block header

**Response JSON example:**

```js
{
  "id": "tQ4XRTngbcJd7a8zGDMjV8ixiSSGyJi9fvcEnp6wt2ZJ6kn7NDCjjGZGrG7qr1RMzBzHtdVEZ7ecacqxDdLLWQP",
  "timestamp": 0,
  "version": 0,
  "height": 0,
  "totalFee": 0,
  "reference": "string",
  "generator": "string",
  "signature": "string",
  "nxt-consensus": {
    "base-target": 0,
    "generation-signature": "string"
  },
  "blocksize": 0,
  "transactionCount": 0,
  "features": [
    0
  ],
  "reward": 0,
  "desiredReward": 0
}
```

## GET /blocks/headers/seq/{from}/{to}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Return block headers at the given height range

**Response JSON example:**

```js
[
  {
    "id": "GctZGqdDq4wDGTaQnjPf7tMJHJkDX7GitizVidZpGjCdazrRMcLcx7jg8y8NS91ZnvJ6rbVR6zW7Scn2xEBQLeE",
    "timestamp": 0,
    "version": 0,
    "height": 0,
    "totalFee": 0,
    "reference": "string",
    "generator": "string",
    "signature": "string",
    "nxt-consensus": {
      "base-target": 0,
      "generation-signature": "string"
    },
    "blocksize": 0,
    "transactionCount": 0,
    "features": [
      0
    ],
    "reward": 0,
    "desiredReward": 0
  }
]
```

## GET /blocks/headers/at/{height}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Get block header at specified height

**Response JSON example:**

```js
{
  "id": "d8z2GZ7e1cVJHXCpJTrMG6DnxZG8rjavZjztGEn6cftiSBxtWzELaN4dGkLDiQVcjD9cnw77iRJ7RqSgdqbPyMQ",
  "timestamp": 0,
  "version": 0,
  "height": 0,
  "totalFee": 0,
  "reference": "string",
  "generator": "string",
  "signature": "string",
  "nxt-consensus": {
    "base-target": 0,
    "generation-signature": "string"
  },
  "blocksize": 0,
  "transactionCount": 0,
  "features": [
    0
  ],
  "reward": 0,
  "desiredReward": 0
}
```

## GET /blocks/height

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Return the current blockchain height

**Response JSON example:**

```js
{
  "height": 7788
}
```

## GET /blocks/height/{signature}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Return the block height by its signature

**Response JSON example:**

```js
{
  "id": "jMen8Tt7xtE6qiczGRkvLjtfQqDz9gXpnG7ajabHJJDc2WQx7J8riSGVVZNLnC4rPZdRdDMZzc1ywdicB6G7ESG",
  "height": 7788
}
```

## GET /blocks/last

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Return the last block data

**Response JSON example:**

```js
{
  "id": "Tbarna9LnEWRjQrDjiGCMJ8cRcLtd6V4McVS1XDENzg7dPyJ27Zt78icJGefzvSGGitznGxHw7QDkxpqZjB6Zqd",
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

Return block data at the given height

**Response JSON example:**

```js
{
  "id": "JcwMn1qVtGZqJMV4LGcWncRnaBDdDrziQTGr27z87y7dSDa9iSX7P6GbQZJjZtcEv8kjxNdGCgpexi6ztERjHLf",
  "transactions": [
    {
      "id": "string",
      "timestamp": 0,
      "version": 2,
      "...": "..."
    }
  ],
  "timestamp": 0,
  "version": 0,
  "height": 0,
  "totalFee": 0,
  "reference": "string",
  "generator": "string",
  "signature": "string",
  "nxt-consensus": {
    "base-target": 0,
    "generation-signature": "string"
  },
  "blocksize": 0,
  "transactionCount": 0,
  "features": [
    0
  ],
  "reward": 0,
  "desiredReward": 0
}
```

## GET /blocks/seq/{from}/{to}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Return block data at the given height range

## GET /blocks/signature/{signature}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Return block data by a specified Base58encoded signature

**Response JSON example:**

```js
{
  "id": "7vij7qSfGCgG6jxtyRZiZnNQJcJqnEMdpr8iTct8rJ1kLbEnGDDxQwPcHzcGja769VWzD2eGSLMazVB4tRXdZ7d",
  "transactions": [
    {
      "id": "string",
      "timestamp": 0,
      "version": 2,
      "...": "..."
    }
  ],
  "timestamp": 0,
  "version": 0,
  "height": 0,
  "totalFee": 0,
  "reference": "string",
  "generator": "string",
  "signature": "string",
  "nxt-consensus": {
    "base-target": 0,
    "generation-signature": "string"
  },
  "blocksize": 0,
  "transactionCount": 0,
  "features": [
    0
  ],
  "reward": 0,
  "desiredReward": 0
}
```

## GET /blocks/address/{address}/{from}/{to}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Get list of blocks generated by specified address

**Response JSON example:**

```js
[
  {
    "id": "zfxLJzXiStkiGnHQr9ign6VqRarDCdEj2tLn7jGZeGZwVdz7cbcNj17MvxGpqcEJW4dM8DTR8SB6JQDyt7PGcZa",
    "transactions": [
      {
        "id": "string",
        "timestamp": 0,
        "version": 2,
        "...": "..."
      }
    ],
    "timestamp": 0,
    "version": 0,
    "height": 0,
    "totalFee": 0,
    "reference": "string",
    "generator": "string",
    "signature": "string",
    "nxt-consensus": {
      "base-target": 0,
      "generation-signature": "string"
    },
    "blocksize": 0,
    "transactionCount": 0,
    "features": [
      0
    ],
    "reward": 0,
    "desiredReward": 0
  }
]
```
