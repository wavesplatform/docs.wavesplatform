# Invoke script transaction binary format

> Learn more about [invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction.md)

## Transaction version 1

| Field order number | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag |  | [Byte](/en/blockchain/blockchain/blockchain-data-types.md) | 1 | Indicates the [transaction version](/en/blockchain/transaction/transaction-version.md) is version 2 or higher.<br>Value must be 0 |
| 2 | [Transaction type ID](/en/blockchain/transaction-type.md) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 16 |
| 3 | [Transaction version](/en/blockchain/transaction/transaction-version.md) | version | [Byte](/en/blockchain/blockchain/blockchain-data-types.md) | 1 | Value must be 1 |
| 4 | [Chain ID](/en/blockchain/blockchain-network/chain-id.md) |  | [Byte](/en/blockchain/blockchain/blockchain-data-types.md) | 1 | 84 for [test network](/en/blockchain/blockchain-network/test-network.md), 87 for [main network](/en/blockchain/blockchain-network/main-network.md) |
| 5 | Public key of the transaction sender | senderPublicKey | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 6 | [Address](/en/blockchain/account/address.md) or [alias](/en/blockchain/alias.md) | dApp | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types.md)] | 26 | Address or alias of the dApp whose script should be invoked |
| 7 | Address or alias flag |  | [Byte](/en/blockchain/blockchain/blockchain-data-types.md) | 1 | 1 — address is used to identify the sender.<br>2 — alias is used to identify the sender |
| 8 | Chain ID |  | [Byte](/en/blockchain/blockchain/blockchain-data-types.md) | 1 | Duplicates the network byte mentioned above |
| 9 | Hash of the address |  | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types.md)] | 20 |  |
| 10 | Address [checksum](https://en.wikipedia.org/wiki/Checksum) |  | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types.md)] | 4 |  |
| 11 | Alias length |  | [Short](/en/blockchain/blockchain/blockchain-data-types.md) | 2 |  |
| 12 | Alias name |  | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types.md)] | From 4 to 30 bytes |  |
| 13.1 | Function presence flag |  | [Byte](/en/blockchain/blockchain/blockchain-data-types.md) | 1 | 0 — default function should be invoked in the dApp.<br>1 — function from the current transaction should be invoked in the dApp |
| 13.2 | Function call ID |  | [Byte](/en/blockchain/blockchain/blockchain-data-types.md) | 1 | Constant. The value must be 9 |
| 13.3 | Function type ID |  | [Byte](/en/blockchain/blockchain/blockchain-data-types.md) | 1 | Constant. The value must be 1 |
| 13.4 | Function name | function | [String](/en/blockchain/blockchain/blockchain-data-types.md) | Up to 255 |  |
| 13.5.1 | Amount of arguments of the function |  | [Integer](/en/blockchain/blockchain/blockchain-data-types.md) | 4 |  |
| 13.5.2 | ID of argument 1 type | type | [Byte](/en/blockchain/blockchain/blockchain-data-types.md) | 1 | 0 — argument type is long.<br>1 — argument type is an array of bytes.<br>2 — argument type is a string.<br>6 — argument type is logical True.<br>7 — argument type is logical False |
| 13.5.3 | Argument 1 | value | - [Long](/en/blockchain/blockchain/blockchain-data-types.md)<br>- Array[[Byte](/en/blockchain/blockchain/blockchain-data-types.md)]<br>- [String](/en/blockchain/blockchain/blockchain-data-types.md)<br>- Logical True<br>- Logical False | S | S = 8, if argument type is long.<br>If the argument type is an array of bytes or a string, then there is no limit on the size of the field. The amount of data stored in the field should not exceed 5 kilobytes.<br>S = 1, if argument type is logical True or False |
| 13.5.4 | ID of argument 2 type | type | [Byte](/en/blockchain/blockchain/blockchain-data-types.md) | 1 | 0 — argument type is long.<br>1 — argument type is an array of bytes.<br>2 — argument type is a string.<br>6 — argument type is logical True.<br>7 — argument type is logical False |
| 13.5.5 | Argument 2 | value | - [Long](/en/blockchain/blockchain/blockchain-data-types.md)<br>- Array[[Byte](/en/blockchain/blockchain/blockchain-data-types.md)]<br>- [String](/en/blockchain/blockchain/blockchain-data-types.md)<br>- Logical True<br>- Logical False | S | S = 8, if argument type is long.<br>If the argument type is an array of bytes or a string, then there is no limit on the size of the field. The amount of data stored in the field should not exceed 5 kilobytes.<br>S = 1, if argument type is logical True or False |
| ... | ... | ... | ... | ... | ... |
| 13.5.[2 × N] | ID of argument N type | type | [Byte](/en/blockchain/blockchain/blockchain-data-types.md) | 1 | 0 — argument type is long.<br>1 — argument type is an array of bytes.<br>2 — argument type is a string.<br>6 — argument type is logical True.<br>7 — argument type is logical False |
| 13.5.[2 × N + 1] | Argument N | value | - [Long](/en/blockchain/blockchain/blockchain-data-types.md)<br>- Array[[Byte](/en/blockchain/blockchain/blockchain-data-types.md)]<br>- [String](/en/blockchain/blockchain/blockchain-data-types.md)<br>- Logical True<br>- Logical False | S | S = 8, if argument type is long.<br>If the argument type is an array of bytes or a string, then there is no limit on the size of the field. The amount of data stored in the field should not exceed 5 kilobytes.<br>S = 1, if argument type is logical True or False |
| 14.1 | Amount of payments |  | [Long](/en/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 14.2 | Amount of token in payment 1 | amount | [Long](/en/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 14.3 | ID of payment 1 token | assetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 14.4 | Flag of payment 1 token |  | [Byte](/en/blockchain/blockchain/blockchain-data-types.md) | 1 | 0 — WAVES.<br>1 — other token |
| 14.5 | ID of payment 1 token |  | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types.md)] | 32 | Field is applicable if the token is not WAVES |
| 14.6 | Amount of token in payment 2 | amount | [Long](/en/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 14.7 | ID of payment 2 token | assetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 14.8 | Flag of payment 2 token |  | [Byte](/en/blockchain/blockchain/blockchain-data-types.md) | 1 | 0 — WAVES.<br>1 — other token |
| 14.9 | ID of payment 2 token |  | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types.md)] | 32 | Field is applicable if the token is not WAVES |
| ... | ... | ... | ... | ... | ... |
| 14.[4 × N + 2] | Amount of token in payment N | amount | [Long](/en/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 14.[4 × N + 3] | ID of payment N token | assetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 14.[4 × N + 4] | Flag of payment N token |  | [Byte](/en/blockchain/blockchain/blockchain-data-types.md) | 1 | 0 — WAVES.<br>1 — other token |
| 14.[4 × N + 5] | ID of payment N token |  | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types.md)] | 32 | Field is applicable if the token is not WAVES |
| 15 | [Transaction fee](/en/blockchain/transaction/transaction-fee.md) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 16 | Fee asset ID | feeAssetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types.md)] | `S` | `S` = 0, if token is WAVES.<br>`S` = 32, if it is other token |
| 17 | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 18 | [Transaction proofs](/en/blockchain/transaction/transaction-proof.md) | proofs | [Proofs](/en/blockchain/transaction/transaction-proof.md) | `S` | If the array is empty, then `S` = 3.<br>If the array is not empty, then `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>where<br>`N` is the number of proofs in the array,<br>`P`<sub>n</sub> is the size on N-th proof in bytes.<br>The maximum number of proofs in the array is 8. The maximum size of each proof is 64 bytes |

## JSON representation of the transaction

See the [example](https://nodes.wavesplatform.com/transactions/info/7CVjf5KGRRYj6UyTC2Etuu4cUxx9qQnCJox8vw9Gy9yq) in Node API.
