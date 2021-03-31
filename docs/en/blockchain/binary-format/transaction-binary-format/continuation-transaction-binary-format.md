# Continuation Transaction Binary Format / Under Construction

> Learn more about [Continuation transaction](/en/blockchain/transaction-type/continuation-transaction).

The Continuation transaction is added in node version 1.4.0.

Binary format is defined in [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto) protobuf scheme. The fields that are common to all types of transactions are described in the [Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/) article.

> Please note: a Continuation transaction is not sent on behalf of any account. It does not have `senderPublicKey`, `proofs`, `timestamp`, and `feeAssetId` fields.

```
message ContinuationTransactionData {
    bytes invoke_transaction_id = 1;
    int32 nonce = 2;
};
```

| Field | Size | Description |
| :--- | :--- | :--- |
| invoke_transaction_id | 32 bytes | ID of the Invoke Script transaction that starts the computation sequence |
| nonce | 4 bytes | Number that is unique in the computation sequence. It is used to calculate the transaction ID |
