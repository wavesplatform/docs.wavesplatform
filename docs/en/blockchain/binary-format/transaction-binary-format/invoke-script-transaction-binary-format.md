# Invoke script transaction binary format

> Learn more about [invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction)

## Transaction version 1

| Field order number | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag |  | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Indicates the [transaction version](/en/blockchain/transaction/transaction-version) is version 2 or higher.<br>Value must be 0 |
| 2 | [Transaction type ID](/en/blockchain/transaction-type) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 16 |
| 3 | [Transaction version](/en/blockchain/transaction/transaction-version) | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 1 |
| 4 | [Chain ID](/en/blockchain/blockchain-network/chain-id) |  | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 84 — for [test network](/en/blockchain/blockchain-network/test-network)<br>87 — for [main network](/en/blockchain/blockchain-network/main-network)<br>83 — for [stage network](/en/blockchain/blockchain-network/stage-network) |
| 5 | Public key of the transaction sender | senderPublicKey | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 6 | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) | dApp | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 26 | Address or alias of the dApp whose script should be invoked |
| 7 | Address or alias flag |  | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 1 — address is used to identify the sender.<br>2 — alias is used to identify the sender |
| 8 | Chain ID |  | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Duplicates the network byte mentioned above |
| 9 | Hash of the address |  | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 20 |  |
| 10 | Address [checksum](https://en.wikipedia.org/wiki/Checksum) |  | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 4 |  |
| 11 | Alias length |  | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 |  |
| 12 | Alias name |  | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | From 4 to 30 bytes |  |
| 13.1 | Function presence flag |  | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — default function should be invoked in the dApp.<br>1 — function from the current transaction should be invoked in the dApp |
| 13.2 | Function call ID |  | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Constant. The value must be 9 |
| 13.3 | Function type ID |  | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Constant. The value must be 1 |
| 13.4 | Function name | function | [String](/en/blockchain/blockchain/blockchain-data-types) | Up to 255 |  |
| 13.5.1 | Amount of arguments of the function |  | [Integer](/en/blockchain/blockchain/blockchain-data-types) | 4 |  |
| 13.5.2 | ID of argument 1 type | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — argument type is long.<br>1 — argument type is an array of bytes.<br>2 — argument type is a string.<br>6 — argument type is logical True.<br>7 — argument type is logical False.<br>11 - argument type is list.<br>Ability to pass the list as argument is enabled after activation of "Ride V4 and multiple attached payments for Invoke Script Transaction" (No.16) feature. See [Activation protocol](/en/blockchain/waves-protocol/activation-protocol) |
| 13.5.3 | Argument 1 | value | - [Long](/en/blockchain/blockchain/blockchain-data-types)<br>- Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)]<br>- [String](/en/blockchain/blockchain/blockchain-data-types)<br>- Logical True<br>- Logical False | S | S = 8, if argument type is long.<br>If the argument type is an array of bytes or a byte array, string or list, then there is no limit on the size of the field. The amount of data stored in the field should not exceed 5 kilobytes.<br> If the type is list, then<br>- its length must not exceed 1000 elements,<br>- amount of its elements represents first 4 bytes of the current field,<br>- each list element is serialized similarly to the function argument: the element type ID takes first place followed by the element's value.<br>S = 1, if argument type is logical True or False |
| 13.5.4 | ID of argument 2 type | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — argument type is long.<br>1 — argument type is an array of bytes.<br>2 — argument type is a string.<br>6 — argument type is logical True.<br>7 — argument type is logical False.<br>11 - argument type is list.<br>Ability to pass the list as argument is enabled after activation of "Ride V4 and multiple attached payments for Invoke Script Transaction" (No.16) feature. See [Activation protocol](/en/blockchain/waves-protocol/activation-protocol) |
| 13.5.5 | Argument 2 | value | - [Long](/en/blockchain/blockchain/blockchain-data-types)<br>- Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)]<br>- [String](/en/blockchain/blockchain/blockchain-data-types)<br>- Logical True<br>- Logical False | S | S = 8, if argument type is long.<br>If the argument type is an array of bytes or a byte array, string or list, then there is no limit on the size of the field. The amount of data stored in the field should not exceed 5 kilobytes.<br> If the type is list, then<br>- its length must not exceed 1000 elements,<br>- amount of its elements represents first 4 bytes of the current field,<br>- each list element is serialized similarly to the function argument: the element type ID takes first place followed by the element's value.<br>S = 1, if argument type is logical True or False |
| ... | ... | ... | ... | ... | ... |
| 13.5.[2 × N] | ID of argument N type | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — argument type is long.<br>1 — argument type is an array of bytes.<br>2 — argument type is a string.<br>6 — argument type is logical True.<br>7 — argument type is logical False.<br>11 - argument type is list.<br>Ability to pass the list as argument is enabled after activation of "Ride V4 and multiple attached payments for Invoke Script Transaction" (No.16) feature. See [Activation protocol](/en/blockchain/waves-protocol/activation-protocol) |
| 13.5.[2 × N + 1] | Argument N | value | - [Long](/en/blockchain/blockchain/blockchain-data-types)<br>- Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)]<br>- [String](/en/blockchain/blockchain/blockchain-data-types)<br>- Logical True<br>- Logical False | S | S = 8, if argument type is long.<br>If the argument type is an array of bytes or a byte array, string or list, then there is no limit on the size of the field. The amount of data stored in the field should not exceed 5 kilobytes.<br> If the type is list, then<br>- its length must not exceed 1000 elements,<br>- amount of its elements represents first 4 bytes of the current field,<br>- each list element is serialized similarly to the function argument: the element type ID takes first place followed by the element's value.<br>S = 1, if argument type is logical True or False |
| 14.1 | Amount of payments |  | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 14.2 | Amount of token in payment 1 | amount | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 14.3 | ID of payment 1 token | assetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 14.4 | Flag of payment 1 token |  | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — WAVES.<br>1 — other token |
| 14.5 | ID of payment 1 token |  | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | Field is applicable if the token is not WAVES |
| 14.6 | Amount of token in payment 2 | amount | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 14.7 | ID of payment 2 token | assetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 14.8 | Flag of payment 2 token |  | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — WAVES.<br>1 — other token |
| 14.9 | ID of payment 2 token |  | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | Field is applicable if the token is not WAVES |
| ... | ... | ... | ... | ... | ... |
| 14.[4 × N + 2] | Amount of token in payment N | amount | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 14.[4 × N + 3] | ID of payment N token | assetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 14.[4 × N + 4] | Flag of payment N token |  | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — WAVES.<br>1 — other token |
| 14.[4 × N + 5] | ID of payment N token |  | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | Field is applicable if the token is not WAVES |
| 15 | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 16 | Fee asset ID | feeAssetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0, if token is WAVES.<br>`S` = 32, if it is other token |
| 17 | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 18 | [Transaction proofs](/en/blockchain/transaction/transaction-proof) | proofs | [Proofs](/en/blockchain/transaction/transaction-proof) | `S` | If the array is empty, then `S` = 3.<br>If the array is not empty, then `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>where<br>`N` is the number of proofs in the array,<br>`P`<sub>n</sub> is the size on N-th proof in bytes.<br>The maximum number of proofs in the array is 8. The maximum size of each proof is 64 bytes |

## JSON representation of the transaction

See the [example](https://nodes.wavesplatform.com/transactions/info/7CVjf5KGRRYj6UyTC2Etuu4cUxx9qQnCJox8vw9Gy9yq) in Node API.
