# Invoke Script Transaction Binary Format

> Learn more about [invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction).

## Version 2

Binary format of version 2 is defined in [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto) protobuf scheme. The fields that are common to all types of transactions are described in the [Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/) article.

Version 2 is available since activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.

```
message InvokeScriptTransactionData {
    Recipient d_app = 1;
    bytes function_call = 2;
    repeated Amount payments = 3;
};

message Recipient {
    oneof recipient {
        bytes public_key_hash = 1;
        string alias = 2;
    };
};

message Amount {
    bytes asset_id = 1;
    int64 amount = 2;
};
```

| Field | Size | Description |
| :--- | :--- | :--- |
| d_app.public_key_hash | 20 bytes | dApp account public key hash (a component of an address, see the [Address binary format](/en/blockchain/binary-format/address-binary-format) article) |
| d_app.alias | From 4 to 30 bytes | dApp [alias](/en/blockchain/account/alias) |
| function_call | | Function name and arguments. Binary format of function call is the same as in [version 1](#version-1) (see item 7 in table) |
| payments.asset_id | • 32 bytes for asset<br>• 0 for WAVES | ID of token in payment |
| payments.amount | 8 bytes | Amount of token in payment, specified in the [atomic units](/en/blockchain/token/#atomic-unit) |

The maximum number of payments is 2.

Starting from node version 1.3.1, after activation of feature #16 “Ride V5, dApp-to-dApp invocations”, the maximum number of payments is 10. Versions 1.3.x are now available for [Stagenet](/en/blockchain/blockchain-network/) only.

The maximum size of `d_app` + `function_call` + `payments` is 5120 bytes.

## Version 1

| # | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag |  | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Indicates the transaction version is 2 or higher.<br>Value must be 0 |
| **2** | [Transaction type ID](/en/blockchain/transaction-type/) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 16 |
| **3** | Transaction version | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 1 |
| **4** | [Chain ID](/en/blockchain/blockchain-network/#chain-id) |  | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 87 — for Mainnet<br>84 — for Testnet<br>83 — for Stagenet |
| **5** | Public key of the transaction sender | senderPublicKey | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| **6** | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) | dApp | See [Address Binary Format](/en/blockchain/binary-format/address-binary-format), [Alias Binary Format](/en/blockchain/binary-format/alias-binary-format) | `S` | If the first byte of the field is 1, then it is followed by address. `S` in this case equals 26<br>If the first byte of the field is 2, then it is followed by alias. In this case 8&nbsp;<=&nbsp;`S`&nbsp;<=&nbsp;34 |
| **7.1** | Function presence flag |  | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — default function should be invoked in the dApp.<br>1 — function from the current transaction should be invoked in the dApp |
| **7.2** | Function call ID |  | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Constant. The value must be 9 |
| **7.3** | Function type ID |  | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Constant. The value must be 1 |
| **7.4** | Function name length | | [Int](/en/blockchain/blockchain/blockchain-data-types) | 4 |  |
| **7.5** | Function name | function | [String](/en/blockchain/blockchain/blockchain-data-types) | Up to 255 |  |
| **7.6.1** | Amount of arguments of the function |  | [Int](/en/blockchain/blockchain/blockchain-data-types) | 4 |  |
| **7.6.2** | ID of argument 1 type | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — argument type is long.<br>1 — argument type is an array of bytes.<br>2 — argument type is a string.<br>6 — argument type is logical True.<br>7 — argument type is logical False.<br>11 – argument type is list.<br>Ability to pass the list as argument is added in node version 1.2.3 and enabled after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions” |
| **7.6.3** | Argument 1 | value | - [Long](/en/blockchain/blockchain/blockchain-data-types)<br>- Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)]<br>- [String](/en/blockchain/blockchain/blockchain-data-types)<br>- Logical True<br>- Logical False<br>- [List](/en/ride/data-types/list) | `S` | `S` = 8, if argument type is long.<br>If the argument type is an array of bytes, string, or list, the field size is limited only by the total transaction size.<br> If the type is list, then<br>- its length must not exceed 1000 elements,<br>- amount of its elements represents first 4 bytes of the current field,<br>- each list element is serialized similarly to the function argument: the element type ID takes first place followed by the element's value.<br>`S` = 0, if argument type is logical True or False |
| **7.6.4** | ID of argument 2 type | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — argument type is long.<br>1 — argument type is an array of bytes.<br>2 — argument type is a string.<br>6 — argument type is logical True.<br>7 — argument type is logical False.<br>11 – argument type is list.<br>Ability to pass the list as argument is added in node version 1.2.3 and enabled after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions” |
| **7.6.5** | Argument 2 | value | - [Long](/en/blockchain/blockchain/blockchain-data-types)<br>- Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)]<br>- [String](/en/blockchain/blockchain/blockchain-data-types)<br>- Logical True<br>- Logical False<br>- [List](/en/ride/data-types/list) | `S` | `S` = 8, if argument type is long.<br>If the argument type is an array of bytes, string, or list, the field size is limited only by the total transaction size.<br> If the type is list, then<br>- its length must not exceed 1000 elements,<br>- amount of its elements represents first 4 bytes of the current field,<br>- each list element is serialized similarly to the function argument: the element type ID takes first place followed by the element's value.<br>`S` = 0, if argument type is logical True or False |
| ... | ... | ... | ... | ... | ... |
| **7.6.[2&nbsp;×&nbsp;N]** | ID of argument N type | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — argument type is long.<br>1 — argument type is an array of bytes.<br>2 — argument type is a string.<br>6 — argument type is logical True.<br>7 — argument type is logical False.<br>11 – argument type is list.<br>Ability to pass the list as argument is added in node version 1.2.3 and enabled after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions” |
| **7.6.[2&nbsp;×&nbsp;N&nbsp;+&nbsp;1]** | Argument N | value | - [Long](/en/blockchain/blockchain/blockchain-data-types)<br>- Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)]<br>- [String](/en/blockchain/blockchain/blockchain-data-types)<br>- Logical True<br>- Logical False<br>- [List](/en/ride/data-types/list) | S | S = 8, if argument type is long.<br>If the argument type is an array of bytes, string, or list, the field size is limited only by the total transaction size.<br> If the type is list, then<br>- its length must not exceed 1000 elements,<br>- amount of its elements represents first 4 bytes of the current field,<br>- each list element is serialized similarly to the function argument: the element type ID takes first place followed by the element's value.<br>S = 0, if argument type is logical True or False |
| **8.1** | Amount of payments |  | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 |  |
| **8.2** | Payment 1 length |  | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 |  |
| **8.3** | Amount of token in payment 1 | amount | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **8.4** | Flag of payment 1 token |  | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — WAVES.<br>1 — other token |
| **8.5** | ID of payment 1 token |  | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | Field is applicable if the token is not WAVES |
| ... | ... | ... | ... | ... | ... |
| **8.[4&nbsp;×&nbsp;N&nbsp;–&nbsp;2]** | Payment N length |  | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 |  |
| **8.[4&nbsp;×&nbsp;N&nbsp;–&nbsp;1]** | Amount of token in payment N | amount | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **8.[4&nbsp;×&nbsp;N]** | Flag of payment N token |  | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — WAVES.<br>1 — other token |
| **8.[4&nbsp;×&nbsp;N&nbsp;+&nbsp;1]** | ID of payment N token |  | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | Field is applicable if the token is not WAVES |
| **9** | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **10.1** | Flag of fee token | | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — WAVES.<br>1 — other token |
| **10.2** | Fee token ID | feeAssetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0, if token is WAVES.<br>`S` = 32, if it is other token |
| **11** | Transaction timestamp | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 12 | [Transaction proofs](/en/blockchain/transaction/transaction-proof) | proofs | See [Transaction Proofs Binary Format](/en/blockchain/binary-format/transaction-proof-binary-format) | `S` | If the array is empty, then `S` = 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + 64 × `N`, where `N` is the number of proofs in the array.<br>The maximum number of proofs in the array is 8. The size of each proof is 64 bytes |

> The fields numbered in bold are the transaction body bytes.

The maximum size of transaction including proofs is 5120 bytes.

## JSON Representation of Transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/7CVjf5KGRRYj6UyTC2Etuu4cUxx9qQnCJox8vw9Gy9yq) in Node API.
