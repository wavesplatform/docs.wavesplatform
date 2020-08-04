# Mass Transfer Transaction Binary Format

> Learn more about [mass transfer transaction](/en/blockchain/transaction-type/mass-transfer-transaction).

## Version 2

Binary format of version 2 is defined in [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto) protobuf scheme. The fields that are common to all types of transactions are described in the [Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/) article.

Version 2 is added in node version 1.2.0 and becomes available after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”. Versions 1.2.x are currently available on [Stagenet](/en/blockchain/blockchain-network/) only.

```
message MassTransferTransactionData {
    message Transfer {
        Recipient recipient = 1;
        int64 amount = 2;
    };
    bytes asset_id = 1;
    repeated Transfer transfers = 2;
    bytes attachment = 3;
};

message Recipient {
    oneof recipient {
        bytes public_key_hash = 1;
        string alias = 2;
    };
}
```

| Field | Size | Description |
| :--- | :--- | :--- |
| asset_id | 32 bytes | ID of token to transfer |
| transfers.recipient.public_key_hash | 20 bytes | Recipient's account public key hash (a component of an address, see the [Address binary format](/en/blockchain/binary-format/address-binary-format) article) |
| transfers.recipient.alias | From 4 to 30 bytes | Recipient's [alias](/en/blockchain/account/alias) |
| transfers.amount | 8 bytes | Amount of token to transfer, specified in the minimum fraction (“cents”) |
| attachment | Up to 140 bytes | Arbitrary data (typically a comment to transfer) |

The maximim number of transfers is 100.

## Version 1

| # | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | [Transaction type ID](/en/blockchain/transaction-type/) | type | Byte | 1 | Value must be 11 |
| **2** | [Transaction version](/en/blockchain/transaction/transaction-version) | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 1 |
| **3** | Public key of the transaction sender  | senderPublicKey | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| **4.1** | Flag [WAVES](/en/blockchain/token/waves)/[token](/en/blockchain/token/) | | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value is 0 for transferring [WAVES](/en/blockchain/token/waves).<br>Value is 1 for transferring other [tokens](/en/blockchain/token/) |
| **4.2** | [Token ID](/en/blockchain/token/token-id) | assetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0 if the value of the "flag WAVES/token" field is 0.<br>`S` = 32 if the value of the "flag WAVES/token" field is 1 |
| **5.1** | Number of transfers | transferCount | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | |
| **5.2** | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the recipient |  recipient | See [Address Binary Format](/en/blockchain/binary-format/address-binary-format), [Alias Binary Format](/en/blockchain/binary-format/alias-binary-format) | `S` | If the first byte of the field is 1, then it is followed by address. `S` in this case equals 26<br>If the first byte of the field is 2, then it is followed by alias. In this case 8 <= `S` <= 34 |
| **5.3** | Amount of [tokens](/en/blockchain/token/) in the transfer 1 | amount | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **5.4** | Address or alias of the recipient |  recipient | See [Address Binary Format](/en/blockchain/binary-format/address-binary-format), [Alias Binary Format](/en/blockchain/binary-format/alias-binary-format) | `S` | If the first byte of the field is 1, then it is followed by address. `S` in this case equals 26<br>If the first byte of the field is 2, then it is followed by alias. In this case 8 <= `S` <= 34 |
| **5.5** | Amount of tokens in the transfer 2 | amount | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| **5.[2 × `N`]** | Address or alias of the recipient |  recipient | See [Address Binary Format](/en/blockchain/binary-format/address-binary-format), [Alias Binary Format](/en/blockchain/binary-format/alias-binary-format) | `S` | If the first byte of the field is 1, then it is followed by address. `S` in this case equals 26<br>If the first byte of the field is 2, then it is followed by alias. In this case 8 <= `S` <= 34 |
| **5.[2 × `N` + 1]** | Amount of tokens in the transfer`N` | amount | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **6** | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **7** | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **8.1** | Attachment length | | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | |
| **8.2** | Attachment | | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 2 | Arbitrary data attached to the transaction |
| 9 | [Transaction proofs](/en/blockchain/transaction/transaction-proof) | proofs | See [Transaction Proofs Binary Format](/en/blockchain/binary-format/transaction-proof-binary-format) | `S` | If the array is empty, then `S` = 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + 64 × `N`, where `N` is the number of proofs in the array.<br>The maximum number of proofs in the array is 8. The size of each proof is 64 bytes |

> The fields numbered in bold are the transaction body bytes.

## JSON Representation of Transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/3LRfudet7avpQcW1AdauiBGb8SSRAaoCugDzngDPLVcv) in Node API.
