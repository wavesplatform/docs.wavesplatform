# Burn Transaction Binary Format

> Learn more about [burn transaction](/en/blockchain/transaction-type/burn-transaction).

## Version 3

Binary format of version 3 is defined in [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto) protobuf scheme. The fields that are common to all types of transactions are described in the [Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format) article.

Version 3 is added in node version 1.2.0 and becomes available after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”. Versions 1.2.x are currently available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

```
message BurnTransactionData {
    Amount asset_amount = 1;
};

message Amount {
    bytes asset_id = 1;
    int64 amount = 2;
};
```

| Field | Size | Description |
| :--- | :--- | :--- |
| asset_amount.amount | 8 bytes | Amount of token to burn, specified in the minimum fraction (“cents”) |
| asset_amount.asset_id | 32 bytes | ID of token to burn |

## Version 2

| Field order number | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag | | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Indicates the [transaction version](/en/blockchain/transaction/transaction-version) is version 2 or higher.<br>Value must be 0 |
| 2 | [Transaction type ID](/en/blockchain/transaction-type) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 6 |
| 3 | [Transaction version](/en/blockchain/transaction/transaction-version) | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 2 |
| 4 | [Chain ID](/en/blockchain/blockchain-network/chain-id) | chainId | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 84 — for [test network](/en/blockchain/blockchain-network/test-network)<br>87 — for [main network](/en/blockchain/blockchain-network/main-network)<br>83 — for [stage network](/en/blockchain/blockchain-network/stage-network) |
| 5 | Public key of the transaction sender | senderPublicKey | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 6 | [ID](/en/blockchain/token/token-id) of the token to burn | assetId| Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 7 | Amount of tokens to burn | amount | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 8 | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 9 | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 10 | [Transaction proofs](/en/blockchain/transaction/transaction-proof) | proofs | [Proofs](/en/blockchain/transaction/transaction-proof) | `S` | If the array is empty, then `S`= 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>), where `N` is the number of proofs in the array, `P`<sub>n</sub> is the size on `N`-th proof in bytes. <br>The maximum number of proofs in the array is 8. The maximum size of each proof is 64 bytes |

## JSON Representation of Transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/csr25XQHT1c965Fg7cY2vJ7XHYVsudPYrUbdaFqgaqL) in Node API.

## Version 1

| Field order number | Field | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [Transaction type ID](/en/blockchain/transaction-type) | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 6 |
| 2 | Public key of the transaction sender | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 3 | [ID](/en/blockchain/token/token-id) of the token to burn | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 4 | Amount of tokens to burn | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 5 | [Transaction fee](/en/blockchain/transaction/transaction-fee) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 6 | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 7 | [Transaction signature](/en/blockchain/transaction/transaction-signature) | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 64 |  |  |
