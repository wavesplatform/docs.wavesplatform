# Transaction Binary Format

> Learn more about [transaction](/en/blockchain/transaction/).

Transactions are stored on the blockchain in a binary format (byte representation). [Node extensions](/en/waves-node/extensions/) such as [gRPC server](/en/waves-node/extensions/grpc-server/) can work directly with data in binary format.

The transaction signature and ID are also formed on the basis of the binary format, namely the transaction body bytes. The contents of transaction body bytes is given in the description of the binary format of each type and version of the transaction. Normally the transaction body bytes include all transaction fields, with the exception of the following fields:
- transaction ID (it is not stored on the blockchain),
- version flag,
- `proofs` or `signature`, depending on the version of the transaction.

The guideline for generating a signature and ID is given in the [Cryptographic practical details](/en/blockchain/waves-protocol/cryptographic-practical-details#signing) article.

All strings are UTF-8 encoded.

### Protobuf

Binary format of the latest versions of transactions is defined in [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto) protobuf scheme. Protobuf facilitates the development of client libraries for the Waves blockchain, as it avoids serialization errors and streamlines the creation of a correctly signed transaction.

How to generate a transacton signature using Protobuf:

1. Download the [Protocol Buffers package](https://github.com/protocolbuffers/protobuf/releases/) for your programming language. Generate the `Transaction` class on the basis of `transaction.proto`.
2. Fill in the transaction fields.

   :warning: Please note:
   * Asset IDs should be specified in the binary format.
   * Adresses should be specified in the shortened binary format (without the first two and the last four bytes). See the [Address binary format](/en/blockchain/binary-format/address-binary-format) article.

3. Serialize the transaction object to get transaction body bytes.

   Detailed instructions for various programming languages are provided in [Protocol Buffers Tutorials](https://developers.google.com/protocol-buffers/docs/tutorials).

4. Generate the signature for the transaction body bytes with the [Curve25519](https://en.wikipedia.org/wiki/Curve25519) function using sender private key bytes.

:warning: The byte representation of a transaction based on the protobuf schema must not contain default values. Make sure that your Protocol Buffers compiler does not write the field value when serializing if it is equal to the default value for this data type, otherwise the transaction signature will be invalid. For default values, see the [Default Values](https://developers.google.com/protocol-buffers/docs/proto3#default) section in the Protocol Buffers documentation.

Send the signed transaction to a node:

* If you use your own node and [gRPC server](/en/waves-node/extensions/grpc-server/), send the `SignedTransaction` object.
* If you use Node REST API, compose the JSON representation of transaction and add the base58-encoded signature to the `proofs` array. Send the transactrion to a node using `POST ​/transactions​/broadcast` method.

The protobuf-based binary format is added in node version 1.2.0 and becomes available after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.

```protobuf
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
        UpdateAssetInfoTransactionData update_asset_info = 117;
        ContinuationTransactionData continuation = 118;
    };
};

message Amount {
    bytes asset_id = 1;
    int64 amount = 2;
};
```

| Field | Size | Description |
| :--- | :--- | :--- |
| chain_id | 1 byte | [Chain ID](/en/blockchain/blockchain-network/#chain-id) |
| sender_public_key | 32 bytes | Public key of the transaction sender |
| fee.amount | 8 bytes | [Transaction fee ](/en/blockchain/transaction/transaction-fee) in the minimum fraction (“cent”) of the fee asset |
| fee.asset_id | • 32 bytes for the fee in a sponsored asset<br> • 0 for the fee in WAVES | ID of the token of the fee.<br>The fee in a sponsored asset is only available for invoke script transactions and transfer transactions. See the [Sponsored Fee](/en/blockchain/waves-protocol/sponsored-fee) article |
| timestamp | 8 bytes | Transaction timestamp: Unix time in milliseconds. The transaction won't be added to the blockchain if the timestamp value is more than 2 hours back or 1.5 hours forward of the current block timestamp |
| version | 1 byte | Transaction version |
| proofs | Each proof up to 64 bytes,<br>up to 8 proofs | [Transaction proofs](/en/blockchain/transaction/transaction-proof) that are used to check the validity of the transaction. The array can contain several transaction signatures (but not limited to signatures only) |

The fields that depend on the type of transaction are described in the following articles:

* [Burn transaction binary format](/en/blockchain/binary-format/transaction-binary-format/burn-transaction-binary-format)
* [Create alias transaction binary format](/en/blockchain/binary-format/transaction-binary-format/create-alias-transaction-binary-format)
* [Data transaction binary format](/en/blockchain/binary-format/transaction-binary-format/data-transaction-binary-format)
* [Exchange transaction binary format](/en/blockchain/binary-format/transaction-binary-format/exchange-transaction-binary-format)
* [Genesis transaction binary format](/en/blockchain/binary-format/transaction-binary-format/genesis-transaction-binary-format)
* [Invoke script transaction binary format](/en/blockchain/binary-format/transaction-binary-format/invoke-script-transaction-binary-format)
* [Issue transaction binary format](/en/blockchain/binary-format/transaction-binary-format/issue-transaction-binary-format)
* [Lease cancel transaction binary format](/en/blockchain/binary-format/transaction-binary-format/lease-cancel-transaction-binary-format)
* [Lease transaction binary format](/en/blockchain/binary-format/transaction-binary-format/lease-transaction-binary-format)
* [Mass transfer transaction binary format](/en/blockchain/binary-format/transaction-binary-format/mass-transfer-transaction-binary-format)
* [Reissue transaction binary format](/en/blockchain/binary-format/transaction-binary-format/reissue-transaction-binary-format)
* [Set asset script transaction binary format](/en/blockchain/binary-format/transaction-binary-format/set-asset-script-transaction-binary-format)
* [Set script transaction binary format](/en/blockchain/binary-format/transaction-binary-format/set-script-transaction-binary-format)
* [Sponsor fee transaction binary format](/en/blockchain/binary-format/transaction-binary-format/sponsor-fee-transaction-binary-format)
* [Transfer transaction binary format](/en/blockchain/binary-format/transaction-binary-format/transfer-transaction-binary-format)
* [Update asset info transaction binary format](/en/blockchain/binary-format/transaction-binary-format/update-asset-info-transaction-binary-format)
* [Continuation transaction](/en/blockchain/binary-format/transaction-binary-format/continuation-transaction-binary-format)
