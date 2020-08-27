# Reissue Transaction Binary Format

> Learn more about [reissue transaction](/en/blockchain/transaction-type/reissue-transaction).

## Version 3

Binary format of version 3 is defined in [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto) protobuf scheme. The fields that are common to all types of transactions are described in the [Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/) article.

Version 3 is added in node version 1.2.0 and becomes available after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.

```
message ReissueTransactionData {
    Amount asset_amount = 1;
    bool reissuable = 2;
};

message Amount {
    bytes asset_id = 1;
    int64 amount = 2;
};
```

| Field | Size | Description |
| :--- | :--- | :--- |
| asset_amount.asset_id | 32 bytes | ID of token to reissue |
| asset_amount.amount | 8 bytes | Amount of token to reissue, specified in the minimum fraction (“cents”) |
| reissuable | 1 byte | Reissue availability flag |

## Version 2

| # | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag | | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Indicates the transaction version is 2 or higher.<br>Value must be 0 |
| **2** | [Transaction type ID](/en/blockchain/transaction-type/) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 5 |
| **3** | Transaction version | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 2 |
| **4** | [Chain ID](/en/blockchain/blockchain-network/#chain-id) | chainId | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 87 — for Mainnet<br>84 — for Testnet<br>83 — for Stagenet |
| **5** | Public key of the transaction sender | senderPublicKey | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| **6** | [Token ID](/en/blockchain/token/token-id) | assetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| **7** | Amount of [token](/en/blockchain/token/) that will be reissued | quantity | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **8** | Reissue flag | reissuable | [Boolean](/en/blockchain/blockchain/blockchain-data-types) | 1 | If the value is 0, then token reissue is not possible.<br>If the value is 1, then token reissue is possible |
| **9** | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **10** | Transaction timestamp | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 11 | [Transaction proofs](/en/blockchain/transaction/transaction-proof) | proofs | See [Transaction Proofs Binary Format](/en/blockchain/binary-format/transaction-proof-binary-format) | `S` | If the array is empty, then `S` = 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + 64 × `N`, where `N` is the number of proofs in the array.<br>The maximum number of proofs in the array is 8. The size of each proof is 64 bytes |

> The fields numbered in bold are the transaction body bytes.

## JSON Representation of Transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/27ETigYaHym2Zbdp4x1gnXnZPF1VJCqQpXmhszC35Qac) in Node API.

## Version 1

| Field order number | Field | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [Transaction type ID](/en/blockchain/transaction-type/) | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 5 |
| 2 | [Transaction signature](/en/blockchain/transaction/transaction-proof) | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 64 | | |
| **3** | Transaction type ID | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | This field duplicates field 1 |
| **4** | Public key of the transaction sender | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| **5** | [Token ID](/en/blockchain/token/token-id) | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| **6** | Amount of [token](/en/blockchain/token/) that will be reissued | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **7** | Reissue flag | [Boolean](/en/blockchain/blockchain/blockchain-data-types) | 1 | If the value is 0, then token reissue is not possible.<br>If the value is 1, then token reissue is possible |
| **8** | [Transaction fee](/en/blockchain/transaction/transaction-fee) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **9** | Transaction timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |

> The fields numbered in bold are the transaction body bytes.
