# Set asset script transaction binary format

> Learn more about [set asset script transaction](/en/blockchain/transaction-type/set-asset-script-transaction)

## Transaction version 2

The second version of the transaction binary format is based on [protobuf scheme](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto).

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
  
message SetAssetScriptTransactionData {
    bytes asset_id = 1;
    Script script = 2;
};
```

## Transaction version 1

| Field order number | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag | | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Indicates the [transaction version](/en/blockchain/transaction/transaction-version) is version 2 or higher.<br>Value must be 0 |
| 2 | [Transaction type ID](/en/blockchain/transaction-type) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 15 |
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

## JSON representation of the transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/FwYSpmVDbWQ2BA5NCBZ9z5GSjY39PSyfNZzBayDiMA88) in Node API.
