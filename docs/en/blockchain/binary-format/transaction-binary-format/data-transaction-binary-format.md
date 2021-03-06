# Data Transaction Binary Format

> Learn more about [Data transaction](/en/blockchain/transaction-type/data-transaction).

## Version 2

Binary format of version 2 is defined in [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto) protobuf scheme. The fields that are common to all types of transactions are described in the [Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/) article.

Version 2 is enabled by feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.

```
message DataTransactionData {
    message DataEntry {
        string key = 1;
        oneof value {
            int64 int_value = 10;
            bool bool_value = 11;
            bytes binary_value = 12;
            string string_value = 13;
        };
    };
    repeated DataEntry data = 1;
};
```

| Field | Size | Description |
| :--- | :--- | :--- |
| key | Up to 400 bytes | Entry key |
| value | Up to 32,767 bytes | Entry value. If omitted, the transaction deletes the entry |

The maximum number of entries is 100.

The maximum data size (keys + values) is 165,890 bytes.

## Version 1

| # | Field | JSON field name  | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | Version flag | | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Indicates the transaction version is 2 or higher.<br>Value must be 0 |
| **2** | [Transaction type ID](/en/blockchain/transaction-type/) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types)  | 1 | Value must be 12 |
| **3** | Transaction version | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 1 |
| **4** | Public key of the transaction sender | senderPublicKey | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| **5** | Length of the data array | | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | |
| **6.1** | Key 1 length | | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | |
| **6.2** | Key 1 | key | [String](/en/blockchain/blockchain/blockchain-data-types) | Up to 400 | Maximum of 100 characters |
| **6.3** | Value 1 type | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — [Long](/en/blockchain/blockchain/blockchain-data-types)<br>1 — [Boolean](/en/blockchain/blockchain/blockchain-data-types)<br>2 — Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)]<br>3 — [String](/en/blockchain/blockchain/blockchain-data-types) |
| **6.4** |  Value 1 length |   |  [Short](/en/blockchain/blockchain/blockchain-data-types) | 2  | This field is present only if the value is of type of array of bytes or a string.<br>If the value is of type of integer or a boolean, this field should not be included in the data structure  |
| **6.5** | Value 1 | value | `T` | `S` | `T` is one of the following: <br> - [Long](/en/blockchain/blockchain/blockchain-data-types), `S` = 8<br> - [Boolean](/en/blockchain/blockchain/blockchain-data-types), `S` = 1 <br> - Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)], `S` ⩽ 32,767<br>- [String](/en/blockchain/blockchain/blockchain-data-types), `S` ⩽ 32,767 |
| **6.6** | Key 2 length | | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | |
| **6.7** | Key 2 | key | [String](/en/blockchain/blockchain/blockchain-data-types) | Up to 400 | Maximum of 100 characters |
| **6.8** | Value 2 type | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — [Long](/en/blockchain/blockchain/blockchain-data-types)<br>1 — [Boolean](/en/blockchain/blockchain/blockchain-data-types)<br>2 — Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)]<br>3 — [String](/en/blockchain/blockchain/blockchain-data-types) |
| **6.9** |  Value 2 length |   |  [Short](/en/blockchain/blockchain/blockchain-data-types) |  2 | This field is present only if the value is of type of array of bytes or a string. <br>If the value is of type of integer or a boolean, this field should not be included in the data structure |
| **6.10** | Value 2 | value | `T` | `S` | `T` is one of the following: <br> - [Long](/en/blockchain/blockchain/blockchain-data-types), `S` = 8<br> - [Boolean](/en/blockchain/blockchain/blockchain-data-types), `S` = 1 <br> - Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)], `S` ⩽ 32,767<br>- [String](/en/blockchain/blockchain/blockchain-data-types), `S` ⩽ 32,767 |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| **6.[5&nbsp;×&nbsp;N&nbsp;-&nbsp;4]** | N-th key length | | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | |
| **6.[5&nbsp;×&nbsp;N&nbsp;-&nbsp;3]** | N-th key | key | [String](/en/blockchain/blockchain/blockchain-data-types) | Up to 400 | Maximum of 100 characters |
| **6.[5&nbsp;×&nbsp;N&nbsp;-&nbsp;2]** | N-th value type | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — [Long](/en/blockchain/blockchain/blockchain-data-types)<br>1 — [Boolean](/en/blockchain/blockchain/blockchain-data-types)<br>2 — Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)]<br>3 — [String](/en/blockchain/blockchain/blockchain-data-types) |
| **6.[5&nbsp;×&nbsp;N&nbsp;-&nbsp;1]** | N-th value length |  | [Short](/en/blockchain/blockchain/blockchain-data-types)  | 2  |  This field is present only if the value is of type of array of bytes or a string. <br>If the value is of type of integer or a boolean, this field should not be included in the data structure |
| **6.[5&nbsp;×&nbsp;N]** | N-th value | value | `T` | `S` | `T` is one of the following: <br> - [Long](/en/blockchain/blockchain/blockchain-data-types), `S` = 8<br> - [Boolean](/en/blockchain/blockchain/blockchain-data-types), `S` = 1 <br> - Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)], `S` ⩽ 32,767<br>- [String](/en/blockchain/blockchain/blockchain-data-types), `S` ⩽ 32,767 |
| **7** | Transaction timestamp | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **8** | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 9 | [Transaction proofs](/en/blockchain/transaction/transaction-proof) | proofs | See [Transaction Proofs Binary Format](/en/blockchain/binary-format/transaction-proof-binary-format) | `S` | If the array is empty, then `S` = 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + 64 × `N`, where `N` is the number of proofs in the array.<br>The maximum number of proofs in the array is 8. The size of each proof is 64 bytes |

> The fields numbered in bold are the transaction body bytes.

The maximum number of records is 100.

The maximum size of transaction body bytes is 153,600 bytes.

## JSON Representation of Transaction <a id="#json-representation"></a>

See the [example](https://nodes.wavesnodes.com/transactions/info/EByjQAWDRGrmc8uy7xRGy2zsQXZQq59bav7h8oTTJyHC) in Node API.
