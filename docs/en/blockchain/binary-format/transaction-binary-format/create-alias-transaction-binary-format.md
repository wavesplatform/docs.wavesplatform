# Create Alias Transaction Binary Format

> Learn more about [Create Alias transaction](/en/blockchain/transaction-type/create-alias-transaction).

## Version 3

Binary format of version 3 is defined in [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto) protobuf scheme. The fields that are common to all types of transactions are described in the [Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/) article.

Version 3 is enabled by feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.

```
message CreateAliasTransactionData {
    string alias = 1;
};
```

| Field | Size | Description |
| :--- | :--- | :--- |
| alias | From 4 to 30 bytes | [Alias](/en/blockchain/account/alias) |

## Version 2

| # | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag| | [Byte](/en/blockchain/blockchain/blockchain-data-types)  | 1 | Indicates the transaction version is 2 or higher.<br> Value must be 0 |
| **2** | [Transaction type ID](/en/blockchain/transaction-type/) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types)  | 1 | Value must be 10 |
| **3** | Transaction version | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be  2 |
| **4** | Public key of the transaction sender |senderPublicKey| Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| **5** | [Alias](/en/blockchain/account/alias) length | | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | Number of characters in the alias name |
| **6** | Alias |alias| [String](/en/blockchain/blockchain/blockchain-data-types) | from 4 to 30 |  |
| **7** | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **8** | Transaction timestamp | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 9 | [Transaction proofs](/en/blockchain/transaction/transaction-proof) | proofs | See [Transaction Proofs Binary Format](/en/blockchain/binary-format/transaction-proof-binary-format) | `S` | If the array is empty, then `S` = 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + 64 × `N`, where `N` is the number of proofs in the array.<br>The maximum number of proofs in the array is 8. The size of each proof is 64 bytes |

> The fields numbered in bold are the transaction body bytes.

## JSON Representation of Transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/5CZV9RouJs7uaRkZY741WDy9zV69npX1FTZqxo5fsryL) in Node API.

## Version 1

| # | Field | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- |
| **1** | [Transaction type ID](/en/blockchain/transaction-type/) | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | The value must be 10 |
| **2** | Public key of the transaction sender | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| **3** | [Alias](/en/blockchain/account/alias) length | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | Number of characters in the alias name |
| **4** | Alias | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | from 4 to 30 |  |
| **5** | [Transaction fee](/en/blockchain/transaction/transaction-fee) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **6** | Transaction timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 7 | [Transaction signature](/en/blockchain/transaction/transaction-proof) | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 64 |  |  |

> The fields numbered in bold are the transaction body bytes.
