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
  "blocksize": 450,
  "reward": 600000000,
  "signature": "58sTXJfXP6MLZDBsyWRexDMuyxAoinS6G7r6g3AYD4VqzDtxGgTx6cEJdEEfMbvQVYUp56uuxwXhppdGWP3deeCG",
  "fee": 100000,
  "generator": "3Mi63XiwniEj6mTC557pxdRDddtpj7fZMMw",
  "generatorPublicKey": "6CixnBTJeWC85SvqrwXUpquYW57PRPGyumcPYtMcqgZh",
  "VRF": "2QLVWdxoBR8YFbFVBmg98Kmjh2q3mWjrP9fBTQCWV6JN",
  "transactions": [
    {
      "senderPublicKey": "J8UMVioZFSSvxHeTsZkPK2uwL91H9HA3Gae9Mkk3LTav",
      "amount": 1000000000,
      "applicationStatus": "succeeded",
      "fee": 100000,
      "type": 4,
      "version": 2,
      "attachment": "",
      "sender": "3MgSuT5FfeMrwwZCbztqLhQpcJNxySaFEiT",
      "feeAssetId": null,
      "proofs": [
        "2xEy28NK6Yv32VK5Z4P62dEA4UbnGp5pia1kPbjScggL3Cosmgq7AGCoZauPHqo9DSS2Rw6vRDy9gLMgWDQhSQP2"
      ],
      "assetId": null,
      "recipient": "3Mm2tJ6BQ4o7GuxWggA75iYedkSQVHFnfyT",
      "feeAsset": null,
      "id": "DbxyFtMZ4KybtVtSefTk5ubfSFSrbiq5UKTwgQj2cmaf",
      "timestamp": 1591706446879
    }
  ],
  "version": 5,
  "reference": "KFVsiHwAc9Rk1uY2AbWXVQq8Q2WbRbWY5bYdGWSqHZv",
  "features": [],
  "totalFee": 100000,
  "transactionsRoot": "CpjLaM3z5Umt9yGjZtEmgbtMvKXTUCz8wUSC2j53iQqx",
  "nxt-consensus": {
    "base-target": 1233,
    "generation-signature": "iiG3xMgM8Lng9ohSXDkXsferirtz56scQKRbDbUhC2bNxFRkkeV4JsK9TnjyXSEw5GvstgbKhRkBxznPaDjXRKSCKFP2nXBBzSvzS8wEEkHHVn3fQaoXHbNHg6Vsda74bDC"
  },
  "desiredReward": 700000000,
  "id": "BmxLQiYiXYAZGZYd5zHHPjDYqYSrmuKNwg4MBmYshXT2",
  "transactionCount": 1,
  "timestamp": 1591706375932,
  "height": 408226
}
```

## GET /blocks/seq/{from}/{to}

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Return block data at the given height range

**Response JSON example:**

```js
[
  {
    "id": "MyiExGCjnWZva7G749tStwS7JtDi7QjpEPBRdzLfdzGJRiVXdG6x2ZzcVarnQn1qNgce6ZbTjc8DLJMkHcr8DGq",
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
