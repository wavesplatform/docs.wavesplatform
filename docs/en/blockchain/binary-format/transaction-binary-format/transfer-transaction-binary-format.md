# Transfer transaction binary format

> Learn more about [transfer transaction](/en/blockchain/transaction-type/transfer-transaction)

## Protobuf-схема

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

message Attachment {
    oneof attachment {
        int64 int_value = 1;
        bool bool_value = 2;
        bytes binary_value = 3;
        string string_value = 4;
    };
}

message TransferTransactionData {
    Recipient recipient = 1;
    Amount amount = 2;
    Attachment attachment = 3;
};
```

## Transaction version 2

| Field order number | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag | | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Indicates the[ transaction version](/en/blockchain/transaction/transaction-version) is version 2 or higher.<br>Value must be 0 |
| 2 | [Transaction type ID](/en/blockchain/transaction-type) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 4 |
| 3 | [Transaction version](/en/blockchain/transaction/transaction-version) | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 2 |
| 4 | Public key of the transaction sender  | senderPublicKey | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| 5.1 | Token type flag | | | 1 | Value is 0 for transferring [WAVES](/en/blockchain/token/waves).<br>Value is 1 for transferring other [tokens](/en/blockchain/token) |
| 5.2 | [Token ID](/en/blockchain/token/token-id) | assetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | `S` | `S`= 0 if the value of the "flag WAVES/token" field is 0.<br>`S` = 32 if the value of the "flag WAVES/token" field is 1 |
| 6.1 | Fee token type ID | | | 1 | Value is 0 for transferring [WAVES](/en/blockchain/token/waves).<br>Value is 1 for transferring other [tokens](/en/blockchain/token) |
| 6.2 | Token fee | feeAssetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | `S` | [Token](/en/blockchain/token) to pay the commission. Currently it can be [WAVES](/en/blockchain/token/waves) only.<br>`S` = 0 if the value of the "flag WAVES/token" field is 0.<br>`S` = 32 if the value of the "flag WAVES/token" field is 1 |
| 7 | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 8 | Amount of [tokens](/en/blockchain/token) in the transfer | amount | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 9 | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 10 | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) |  recipient | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | `S` | If the first byte of the field is 1, then it is followed by address. `S` in this case equals 26<br>If the first byte of the field is 2, then it is followed by alias. In this case 8 <= `S` <= 34 |
| 11.1 | Attachment length | | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | |
| 11.2 | Attachment | attachment | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 2 | Arbitrary data attached to the transaction. Attachment size can not exceed 140 bytes |
| 12 | [Transaction proofs](/en/blockchain/transaction/transaction-proof) | proofs | [Proofs](/en/blockchain/transaction/transaction-proof) | S | If the array is empty, then `S` = 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>), where `N` is the number of proofs in the array, `P`<sub>n</sub> is the size on `N`-th proof in bytes. <br>The maximum number of proofs in the array is 8. The maximum size of each proof is 64 bytes |

## JSON representation of the transaction

See the [example](https://nodes.wavesplatform.com/transactions/info/2UMEGNXwiRzyGykG8voDgxnwHA7w5aX5gmxdcf9DZZjL) in Node API. In the JSON representation, values of `feeAsset` and `feeAssetId` fields are identical.

## Transaction version 1

| Field order number | Field | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [Transaction type ID](/en/blockchain/transaction-type) | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 4 |
| 2 | Public key of the transaction sender  | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| 3.1 | Flag [WAVES](/en/blockchain/token/waves)/[token](/en/blockchain/token) | | 1 | Value is 0 for transferring [WAVES](/en/blockchain/token/waves).<br>Value is 1 for transferring other [tokens](/en/blockchain/token) |
| 3.2 | [Token ID](/en/blockchain/token/token-id) | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0 if the value of the "flag WAVES/token" field is 0.<br>`S` = 32 if the value of the "flag WAVES/token" field is 1 |
| 3.3 | Token fee | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | `S` | [Token](/en/blockchain/token) to pay the commission. Currently it can be [WAVES](/en/blockchain/token/waves) only.<br>`S` = 0 if the value of the "flag WAVES/token" field is 0.<br>`S` = 32 if the value of the "flag WAVES/token" field is 1 |
| 4 | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) |  recipient | `S` | If the first byte of the field is 1, then it is followed by address. `S` in this case equals 26<br>If the first byte of the field is 2, then it is followed by alias. In this case 8 <= `S` <= 34 |
| 5 | Amount of [tokens](/en/blockchain/token) in the transfer | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 6 | [Transaction fee](/en/blockchain/transaction/transaction-fee) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 7 | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 8.1 | Attachment length | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | |
| 8.2 | Attachment | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 2 | Arbitrary data attached to the transaction. Attachment size can not exceed 140 bytes |
| 9 | [Transaction signature](/en/blockchain/transaction/transaction-signature) | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 64 | | |
