# Transfer Transaction Binary Format

> Learn more about [Transfer transaction](/en/blockchain/transaction-type/transfer-transaction).

## Version 3

Binary format of version 3 is defined in [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto) protobuf scheme. The fields that are common to all types of transactions are described in the [Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/) article.

Version 3 is enabled by feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.

```
message TransferTransactionData {
    Recipient recipient = 1;
    Amount amount = 2;
    bytes attachment = 3;
};

message Recipient {
    oneof recipient {
        bytes public_key_hash = 1;
        string alias = 2;
    };

message Amount {
    bytes asset_id = 1;
    int64 amount = 2;
};
```

| Field | Size | Description |
| :--- | :--- | :--- |
| recipient.public_key_hash | 20 bytes | Recipient's account public key hash (a component of an address, see the [Address binary format](/en/blockchain/binary-format/address-binary-format) article) |
| recipient.alias | From 4 to 30 bytes | Recipient's [alias](/en/blockchain/account/alias) |
| amount.asset_id |32 bytes | ID of token to transfer |
| amount.amount | 8 bytes | Amount of token to transfer, specified in the minimum fraction (“cents”) |
| attachment | Up to 140 bytes | Arbitrary data (typically a comment to transfer) |

## Version 2

| # | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag | | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Indicates the transaction version is 2 or higher.<br>Value must be 0 |
| **2** | [Transaction type ID](/en/blockchain/transaction-type/) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 4 |
| **3** | Transaction version | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 2 |
| **4** | Public key of the transaction sender  | senderPublicKey | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| **5.1** | Transferring token type flag | | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Value is 0 for transferring [WAVES](/en/blockchain/token/waves).<br>Value is 1 for transferring other [token](/en/blockchain/token/) |
| **5.2** | Transferring [token ID](/en/blockchain/token/token-id) | assetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0 if the value of the flag 5.1 is 0.<br>`S` = 32 if the value of the flag 5.1 is 1 |
| **6.1** | Fee token type flag | | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Value is 0 for fee in [WAVES](/en/blockchain/token/waves).<br>Value is 1 for fee in other [token](/en/blockchain/token/) |
| **6.2** | Fee token ID | feeAssetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | `S` | [Token](/en/blockchain/token/) to pay the fee<br>`S` = 0 if the value of the flag 6.1 is 0.<br>`S` = 32 if the value of the flag 6.1 field is 1 |
| **7** | Transaction timestamp | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **8** | Amount of [token](/en/blockchain/token/) in the transfer | amount | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **9** | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **10** | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) | recipient | See [Address Binary Format](/en/blockchain/binary-format/address-binary-format), [Alias Binary Format](/en/blockchain/binary-format/alias-binary-format) | `S` | If the first byte of the field is 1, then it is followed by address. `S` in this case equals 26<br>If the first byte of the field is 2, then it is followed by alias. In this case 8 <= `S` <= 34 |
| **11.1** | Attachment length | | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | |
| **11.2** | Attachment | attachment | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | Up to 140 bytes | Arbitrary data attached to the transaction |
| 12 | [Transaction proofs](/en/blockchain/transaction/transaction-proof) | proofs | See [Transaction Proofs Binary Format](/en/blockchain/binary-format/transaction-proof-binary-format) | `S` | If the array is empty, then `S` = 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + 64 × `N`, where `N` is the number of proofs in the array.<br>The maximum number of proofs in the array is 8. The size of each proof is 64 bytes |

> The fields numbered in bold are the transaction body bytes.

## JSON Representation of Transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/2UMEGNXwiRzyGykG8voDgxnwHA7w5aX5gmxdcf9DZZjL) in Node API. In the JSON representation, values of `feeAsset` and `feeAssetId` fields are identical.

## Version 1

| # | Field | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [Transaction type ID](/en/blockchain/transaction-type/) | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 4 |
| 2 | [Transaction signature](/en/blockchain/transaction/transaction-proof) | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 64 | | |
| **3** | Transaction type ID | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | This field duplicates field 1 |
| **4** | Public key of the transaction sender  | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| **5.1** | Transferring token type flag | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Value is 0 for transferring [WAVES](/en/blockchain/token/waves).<br>Value is 1 for transferring other [token](/en/blockchain/token/) |
| **5.2** | Transferring [token ID](/en/blockchain/token/token-id) | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0 if the value of the flag 5.1 is 0.<br>`S` = 32 if the value of the flag 5.1 is 1 |
| **6.1** | Fee token type flag | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Value is 0 for fee in [WAVES](/en/blockchain/token/waves).<br>Value is 1 for fee in other [token](/en/blockchain/token/) |
| **6.2** | Fee token ID | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | `S` | [Token](/en/blockchain/token/) to pay the fee<br>`S` = 0 if the value of the flag 6.1 is 0.<br>`S` = 32 if the value of the flag 6.1 field is 1 |
| **7** | Transaction timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **8** | Amount of [token](/en/blockchain/token/) in the transfer | amount | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **9** | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **10** | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) | recipient | See [Address Binary Format](/en/blockchain/binary-format/address-binary-format), [Alias Binary Format](/en/blockchain/binary-format/alias-binary-format) | `S` | If the first byte of the field is 1, then it is followed by address. `S` in this case equals 26<br>If the first byte of the field is 2, then it is followed by alias. In this case 8 <= `S` <= 34 |
| **11.1** | Attachment length | | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | |
| **11.2** | Attachment | attachment | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | Up to 140 bytes | Arbitrary data attached to the transaction |

> The fields numbered in bold are the transaction body bytes.
