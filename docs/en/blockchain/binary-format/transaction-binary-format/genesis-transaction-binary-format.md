# Genesis transaction binary format

> Learn more about [genesis transaction](/en/blockchain/transaction-type/genesis-transaction)

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
  
message GenesisTransactionData {
    bytes recipient_address = 1;
    int64 amount = 2;
};
```

## Transaction version 1

| Field order number | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | [Transaction type ID](/en/blockchain/transaction-type) |type| [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 1 |
| 2 | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 3 | [Address](/en/blockchain/account/address) of the recipient | recipient | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 26 |  |
| 4 | Amount of [WAVES](/en/blockchain/token/waves) that will be transferred to the [account](/en/blockchain/account) | amount | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 5 | [Transaction fee](/en/blockchain/transaction/transaction-fee) |fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 6 | [Transaction signature](/en/blockchain/transaction/transaction-signature) | signature | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 64 |  | |


## JSON representation of the transaction

See the [example](https://nodes.wavesplatform.com/transactions/info/2DVtfgXjpMeFf2PQCqvwxAiaGbiDsxDjSdNQkc5JQ74eWxjWFYgwvqzC4dn7iB1AhuM32WxEiVi1SGijsBtYQwn8) in Node API.
