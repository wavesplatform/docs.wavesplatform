# Бинарный формат транзакции обновления информации ассета

Транзакция обновления информации ассета появилась с момента активации фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”.

> Узнать больше о [транзакции обновления информации ассета](/ru/blockchain/transaction-type/update-asset-info-transaction).

## Версия 1

Бинарный формат соответствует protobuf-схеме [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto). Описание полей, общих для всех типов транзакций, представлено в разделе [Бинарный формат транзакции](/ru/blockchain/binary-format/transaction-binary-format/).

```
message UpdateAssetInfoTransactionData {
    bytes asset_id = 1;
    string name = 2;
    string description = 3;
}
```

| Поле | Размер | Описание |
| :--- | :--- | :--- |
| asset_id | 32 байта | ID токена |
| name | От 4 до 16 байт | Название токена |
| description | От 0 до 1000 байт | Описание токена |
