# Data transaction

**Data transaction** is a [transaction](/en/blockchain/transaction/) that writes data to an [account data storage](/en/blockchain/account/account-data-storage).

Each data transaction has a **data array** that contains data to be written. In [JSON representation](/en/blockchain/binary-format/transaction-binary-format/data-transaction-binary-format#json-representation) of a transaction the data array is the field `data`.

## Data array of a data transaction

The maximum length of an array is 100 elements.

The maximum size of an array is 150 kilobytes.

Each element of an array is an object that has 3 fields: `key`, `type`, `value`.

An array cannot contain two elements with the same `key` field.

## The `key` field

The `key` field is a non-empty [UTF-8](https://en.wikipedia.org/wiki/UTF-8) string.

At the stage of [transaction validation](/en/blockchain/transaction/transaction-validation), the `key` field is converted from UTF-8 to [UTF-16](https://en.wikipedia.org/wiki/UTF-16) encoding. The size of the resulting array of 16-bit words must not exceed 100 elements. Thus, the size of the `key` must be from 1 to 200 bytes inclusive.

The `key` is being deleted when its `type` and `value` are not specified.

> This functionality becomes available since node version 1.2.0, after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”. Versions 1.2.x are currently available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

When deleting a key using the JSON representation of a transaction, null is used as the type and value of the key. In one data transaction, keys can be used both for writing and deleting records. The maximum number of keys to be deleted in one transaction cannot exceed 100.

## The `type` field

The `type` field specifies the type of the `value` field:

* binary
* boolean
* integer
* string

## The `value` field

The size of `value` field can be from 0 to 32767 bytes.

## JSON Representation

```json
{
  "senderPublicKey": "38bYRUxFCaoa9h822nMnsoTX1qfczqtHJLgouNcNnd8h",
  "data": [
    {
      "type": "boolean",
      "value": true,
      "key": "bool"
    },
    {
      "type": "binary",
      "value": "base64:SGVsbG8gV2F2ZXM=",
      "key": "bin"
    },
    {
      "type": "integer",
      "value": 1234567,
      "key": "int"
    },
    {
      "type": "string",
      "value": "some text",
      "key": "str"
    }
  ],
  "sender": "3N4iKL6ikwxiL7yNvWQmw7rg3wGna8uL6LU",
  "feeAssetId": null,
  "proofs": ["kE1hjN1yW68j8DsYGNB7Gg1ydC4hqRmt3wBaFQUPkftnbiM7QfJCn1gTHgveJ7pCLXvvqffhKBmiF8qS1Uqk6SR"],
  "fee": 100000,
  "id": "3EPJuvQiJYiu9Y5g6mYDQgHVu8GFUfnZurHrVwwF1ViH",
  "type": 12,
  "version": 2,
  "timestamp": 1591351545000,
  "height": 1029815
}
```

| Field | Description |
| :--- | :--- |
| data.key | Entry key. String, up to 400 bytes |
| data.type | Entry type:<br>- binary<br>- boolean<br>- integer<br>- string<br>`null` — delete entry |
| data.value | Entry value. Up to 32 767 байт. Binary value is base64 encoded.<br>`null` — delete entry |

The fields that are common to all types of transactions are described in the [JSON Representation](/en/blockchain/transaction/#json-representation) section.

## Binary Format

See the [Data Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/data-transaction-binary-format).

## Ride Structure

The [DataTransaction](/en/ride/structures/transaction-structures/data-transaction) structure is used for transaction handling in smart contracts.
