# Lease Transaction Binary Format

> Learn more about [lease transaction](/en/blockchain/transaction-type/lease-transaction).

## Version 3

Binary format of version 3 is defined in [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto) protobuf scheme. The fields that are common to all types of transactions are described in the [Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/) article.

Version 3 is added in node version 1.2.0 and becomes available after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”. Versions 1.2.x are currently available on [Stagenet](/en/blockchain/blockchain-network/) only.

```
message LeaseTransactionData {
     Recipient recipient = 1;
     int64 amount = 2;
};

message Recipient {
    oneof recipient {
        bytes public_key_hash = 1;
        string alias = 2;
    };
};
```

| Field | Size | Description |
| :--- | :--- | :--- |
| recipient.public_key_hash | 20 байт | Recipient's account public key hash (a component of an address, see the [Address binary format](/en/blockchain/binary-format/address-binary-format) article) |
| recipient.alias | From 4 to 30 bytes | Recipient's [alias](/en/blockchain/account/alias) |
| amount | 8 байт | Amount of WAVELETs to lease (that is, amount of WAVES multiplied by 10<sup>8</sup>) |

## Version 2

| # | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag |  | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Indicates the [transaction version](/en/blockchain/transaction/transaction-version) is version 2 or higher.<br>Value must be 0 |
| **2** | [Transaction type ID](/en/blockchain/transaction-type/) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 8 |
| **3** | [Transaction version](/en/blockchain/transaction/transaction-version) | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 2 |
| **4** | Reserved field | | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be equal to 0 |
| **5** | Public key of the transaction sender  | senderPublicKey | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| **6** | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the recipient |  recipient | See [Address Binary Format](/en/blockchain/binary-format/address-binary-format), [Alias Binary Format](/en/blockchain/binary-format/alias-binary-format) | `S` | If the first byte of the field is 1, then it is followed by address. `S` in this case equals 26<br>If the first byte of the field is 2, then it is followed by alias. In this case 8 <= `S` <= 34 |
| **7** | Amount of [WAVES](/en/blockchain/token/waves) that will be leased to the [account](/en/blockchain/account/) | amount | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **8** | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **9** | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 10 | [Transaction proofs](/en/blockchain/transaction/transaction-proof) | proofs | See [Transaction Proofs Binary Format](/en/blockchain/binary-format/transaction-proof-binary-format) | `S` | If the array is empty, then `S` = 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + 64 × `N`, where `N` is the number of proofs in the array.<br>The maximum number of proofs in the array is 8. The size of each proof is 64 bytes |

> The fields numbered in bold are the transaction body bytes.

## JSON Representation of Transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/J6jZCzLpWJX8EDVhopKFx1mcbFizLGHVb44dvqPzH4QS) in Node API.

## Version 1

| # | Field | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- |
| **1** | [Transaction type ID](/en/blockchain/transaction-type/) | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 8 |
| **2** | Public key of the transaction sender  | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| **3** | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the recipient | See [Address Binary Format](/en/blockchain/binary-format/address-binary-format), [Alias Binary Format](/en/blockchain/binary-format/alias-binary-format) | `S` | If the first byte of the field is 1, then it is followed by address. `S` in this case equals 26.<br>If the first byte of the field is 2, then it is followed by alias. In this case 8 <= `S` <= 34 |
| **4** | Amount of [WAVES](/en/blockchain/token/waves) that will be leased to the [account](/en/blockchain/account/) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **5** | [Transaction fee](/en/blockchain/transaction/transaction-fee) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **6** | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 7 | [Transaction signature](/en/blockchain/transaction/transaction-signature) | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 64 | | |

> The fields numbered in bold are the transaction body bytes.
