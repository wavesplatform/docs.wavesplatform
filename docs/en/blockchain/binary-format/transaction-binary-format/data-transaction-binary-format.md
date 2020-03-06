# Data transaction binary format

> Learn more about [data transaction](/en/blockchain/transaction-type/data-transaction)

## Protobuf scheme

> protobuf-schemas/proto/waves/transaction.proto

```
// Transactions
syntax = "proto3";
package waves;
  
option java_package = "com.wavesplatform.protobuf.transaction";
option csharp_namespace = "Waves";
  
import "waves/amount.proto";
import "waves/script.proto";
import "waves/recipient.proto";
import "waves/order.proto";
  
message SignedTransaction {
    Transaction transaction = 1;
    repeated bytes proofs = 2;
}
  
message Transaction {
    int32 chain_id = 1;
    bytes sender_public_key = 2;
    Amount fee = 3;
    int64 timestamp = 4;
    int32 version = 5;
  
    oneof data {
        GenesisTransactionData genesis = 101;
        PaymentTransactionData payment = 102;
        IssueTransactionData issue = 103;
        TransferTransactionData transfer = 104;
        ReissueTransactionData reissue = 105;
        BurnTransactionData burn = 106;
        ExchangeTransactionData exchange = 107;
        LeaseTransactionData lease = 108;
        LeaseCancelTransactionData lease_cancel = 109;
        CreateAliasTransactionData create_alias = 110;
        MassTransferTransactionData mass_transfer = 111;
        DataTransactionData data_transaction = 112;
        SetScriptTransactionData set_script = 113;
        SponsorFeeTransactionData sponsor_fee = 114;
        SetAssetScriptTransactionData set_asset_script = 115;
        InvokeScriptTransactionData invoke_script = 116;
        UpdateAssetInfoTransactionData UpdateAssetInfo = 117;
    };
};
  
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

## Transaction version 1

| Field order number | Field | JSON field name  | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag | | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Indicates the [transaction version](/en/blockchain/transaction/transaction-version) is version 2 or higher.<br>Value must be 0 |
| 2 | [Transaction type ID](/en/blockchain/transaction-type) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types)  | 1 | Value must be 12 |
| 3 | [Transaction version](/en/blockchain/transaction/transaction-version) | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 1 |
| 4 | Public key of the transaction sender | senderPublicKey | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 5 | Length of the data array | | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | |
| 6.1 | Key 1 length | | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | |
| 6.2 | Key 1 | key | [String](/en/blockchain/blockchain/blockchain-data-types) | 4 × `L` | `L` is a key length |
| 6.3 | Value 1 type | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — integer<br>1 — boolean<br>2 — array of bytes<br>3 — string |
| 6.4 |  Value 1 length |   |  [Short](/en/blockchain/blockchain/blockchain-data-types) | 2  | This field is present only if the value is of type of array of bytes or a string.<br>If the value is of type of integer or a boolean, this field should not be included in the data structure  |
| 6.5 | Value 1 | value | `T` | Depends on the size of the value | `T` is one of the following: <br> - [Long](/en/blockchain/blockchain/blockchain-data-types)<br> - Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)]<br> - [Boolean](/en/blockchain/blockchain/blockchain-data-types)<br> - [String](/en/blockchain/blockchain/blockchain-data-types)  |
| 6.6 | Key 2 length | | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | |
| 6.7 | Key 2 | key | [String](/en/blockchain/blockchain/blockchain-data-types) | 4 × `L` | `L` is a key length |
| 6.8 | Value 2 type | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — integer <br>1 — boolean <br> 2 — array of bytes <br> 3 — string |
| 6.9 |  Value 2 length |   |  [Short](/en/blockchain/blockchain/blockchain-data-types) |  2 | This field is present only if the value is of type of array of bytes or a string. <br>If the value is of type of integer or a boolean, this field should not be included in the data structure |
| 6.10| Value 2 | value | `T` | Depends on the size of the value | `T` is one of the following: <br> - [Long](/en/blockchain/blockchain/blockchain-data-types)<br> - Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)]<br> - [Boolean](/en/blockchain/blockchain/blockchain-data-types)<br> - [String](/en/blockchain/blockchain/blockchain-data-types) |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| 6.[5 × N - 4] | N-th key length | | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | |
| 6.[5 × N - 3] | N-th key | key | [String](/en/blockchain/blockchain/blockchain-data-types) | 4 × `L` | `L` is a key length |
| 6.[5 × N - 2] | N-th value type | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 0 — integer <br>1 — boolean <br> 2 — array of bytes <br>3 — string |
| 6.[5 × N - 1] | N-th value length |  | [Short](/en/blockchain/blockchain/blockchain-data-types)  | 2  |  This field is present only if the value is of type of array of bytes or a string. <br>If the value is of type of integer or a boolean, this field should not be included in the data structure |
| 6.[5 × N] | N-th value | value | `T` | Depends on the size of the value | `T` is one of the following: <br> - [Long](/en/blockchain/blockchain/blockchain-data-types)<br> - Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)]<br> - [Boolean](/en/blockchain/blockchain/blockchain-data-types)<br> - [String](/en/blockchain/blockchain/blockchain-data-types) |
| 7 | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 8 | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 9 | [Transaction proofs](/en/blockchain/transaction/transaction-proof) | proofs | [Proofs](/en/blockchain/transaction/transaction-proof) | `S` | If the array is empty, then `S` = 3. If the array is not empty, then `S` = 3 + 2 × `N` + (`P1` + `P2` + ... + `P`<sub>`n`</sub>), where `N` is the number of proofs in the array, `P`<sub>`n`</sub> is the size of `N`-th proof in bytes. The maximum number of proofs in the array is 8. The maximum size of each proof is 64 bytes |

## JSON representation of the transaction <a id="#json-representation"></a>

See the [example](https://nodes.wavesplatform.com/transactions/info/EByjQAWDRGrmc8uy7xRGy2zsQXZQq59bav7h8oTTJyHC) in Node API.
