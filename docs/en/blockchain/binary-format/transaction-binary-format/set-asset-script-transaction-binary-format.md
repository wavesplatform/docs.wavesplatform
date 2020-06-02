# Set Asset Script Transaction Binary Format

> Learn more about [set asset script transaction](/en/blockchain/transaction-type/set-asset-script-transaction).

## Version 2

Binary format of version 2 is defined in [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto) protobuf scheme. The fields that are common to all types of transactions are described in the [Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/) article.

Version 2 is added in node version 1.2.0 and becomes available after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”. Versions 1.2.x are currently available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

```
message SetAssetScriptTransactionData {
    bytes asset_id = 1;
    bytes script = 2;
};
```

| Field | Size | Description |
| :--- | :--- | :--- |
| asset_id | 32 bytes | ID of asset |
| script | Up to 8192 bytes | [Asset script](/en/ride/script/script-types/asset-script) |

## Version 1

| Field order number | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag | | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Indicates the [transaction version](/en/blockchain/transaction/transaction-version) is version 2 or higher.<br>Value must be 0 |
| 2 | [Transaction type ID](/en/blockchain/transaction-type/) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 15 |
| 3 | [Transaction version](/en/blockchain/transaction/transaction-version) | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 1 |
| 4 | [Chain ID](/en/blockchain/blockchain-network/chain-id) | chainId | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 84 — for [test network](/en/blockchain/blockchain-network/test-network)<br>87 — for [main network](/en/blockchain/blockchain-network/main-network)<br>83 — for [stage network](/en/blockchain/blockchain-network/stage-network) |
| 5 | Public key of the transaction sender  | senderPublicKey | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| 6 | [Token ID](/en/blockchain/token/token-id) to which the asset script is attached | assetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| 7.1 | Script existence flag | | [Boolean](/en/blockchain/blockchain/blockchain-data-types) | 1 | If the value is 0, then the token does not have a script.<br>If the value is 1, then the token has a script |
| 7.2 | Script size in bytes | | [Short](/en/blockchain/blockchain/blockchain-data-types) | S | `S = 0` if the value of the "Script existence flag" field is 0.<br>`S = 2` if the value of the "Script existence flag" field is 1 |
| 7.3 | [Asset script](/en/ride/script/script-types/asset-script) | script | [String](/en/blockchain/blockchain/blockchain-data-types) | S | `S = 0` if the value of the "Script existence flag" field is 0.<br>0 &lt; `S` ≤ 8192, if the value of the "Script existence flag" field is 1 |
| 8 | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 9 | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 10 | [Transaction proofs](/en/blockchain/transaction/transaction-proof) | proofs | Array[[Proof](/en/blockchain/transaction/transaction-proof)] | S | If the array is empty, then `S`= 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>), where `N` is the number of proofs in the array, `P`<sub>n</sub> is the size on `N`-th proof in bytes. <br>The maximum number of proofs in the array is 8. The maximum size of each proof is 64 bytes |

## JSON Representation of Transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/FwYSpmVDbWQ2BA5NCBZ9z5GSjY39PSyfNZzBayDiMA88) in Node API.
