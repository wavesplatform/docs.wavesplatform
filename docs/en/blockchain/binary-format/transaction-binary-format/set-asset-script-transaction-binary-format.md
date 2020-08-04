# Set Asset Script Transaction Binary Format

> Learn more about [set asset script transaction](/en/blockchain/transaction-type/set-asset-script-transaction).

## Version 2

Binary format of version 2 is defined in [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto) protobuf scheme. The fields that are common to all types of transactions are described in the [Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/) article.

Version 2 is added in node version 1.2.0 and becomes available after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”. Versions 1.2.x are currently available on [Stagenet](/en/blockchain/blockchain-network/) only.

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

| # | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag | | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Indicates the [transaction version](/en/blockchain/transaction/transaction-version) is version 2 or higher.<br>Value must be 0 |
| **2** | [Transaction type ID](/en/blockchain/transaction-type/) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 15 |
| **3** | [Transaction version](/en/blockchain/transaction/transaction-version) | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 1 |
| **4** | [Chain ID](/en/blockchain/blockchain-network/#chain-id) | chainId | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 87 — for Mainnet<br>84 — for Testnet<br>83 — for Stagenet |
| **5** | Public key of the transaction sender  | senderPublicKey | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| **6** | [Token ID](/en/blockchain/token/token-id) to which the asset script is attached | assetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| **7** | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **8** | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **9.1** | Script existence flag | | [Boolean](/en/blockchain/blockchain/blockchain-data-types) | 1 | If the value is 0, then the token does not have a script.<br>If the value is 1, then the token has a script |
| **9.2** | Script size in bytes | | [Short](/en/blockchain/blockchain/blockchain-data-types) | S | `S = 0` if the value of the "Script existence flag" field is 0.<br>`S = 2` if the value of the "Script existence flag" field is 1 |
| **9.3** | [Asset script](/en/ride/script/script-types/asset-script) | script | [String](/en/blockchain/blockchain/blockchain-data-types) | S | `S = 0` if the value of the "Script existence flag" field is 0.<br>0 &lt; `S` ≤ 8192, if the value of the "Script existence flag" field is 1 |
| 10 | [Transaction proofs](/en/blockchain/transaction/transaction-proof) | proofs | See [Transaction Proofs Binary Format](/en/blockchain/binary-format/transaction-proof-binary-format) | `S` | If the array is empty, then `S`= 3. <br>If the array is not empty, then `S`= 3 + 2 × `N` + 64 × `N`, where `N` is the number of proofs in the array.<br>The maximum number of proofs in the array is 8. The size of each proof is 64 bytes |

> The fields numbered in bold are the transaction body bytes.

## JSON Representation of Transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/FwYSpmVDbWQ2BA5NCBZ9z5GSjY39PSyfNZzBayDiMA88) in Node API.
