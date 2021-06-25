# Update Asset Info Transaction Binary Format

> Learn more about [Update Asset Info transaction](/en/blockchain/transaction-type/update-asset-info-transaction).

Update Asset Info transaction type is enabled by feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.

## Version 1

Binary format is defined in [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto) protobuf scheme. The fields that are common to all types of transactions are described in the [Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/) article.

```
message UpdateAssetInfoTransactionData {
    bytes asset_id = 1;
    string name = 2;
    string description = 3;
}
```

| Field | Size | Description |
| :--- | :--- | :--- |
| asset_id | 32 bytes | Token ID |
| name | From 4 to 16 bytes | Token name |
| description | From 0 to 1000 bytes | Token description |
