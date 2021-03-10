# Бинарный формат транзакции продолжения (проект)

> Узнать больше о [транзакции продолжения](/ru/blockchain/transaction-type/continuation-transaction).

Транзакция продолжения добавлена в версии ноды 1.4.0.

Бинарный формат транзакции соответствует protobuf-схеме [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto). Описание полей, общих для всех типов транзакций, представлено в разделе [Бинарный формат транзакции](/ru/blockchain/binary-format/transaction-binary-format/).

> Обратите внимание: транзакция продолжения не отправляется от имени аккаунта. У нее отсутствуют поля `senderPublicKey`, `proofs`, `timestamp` и `feeAssetId`.

```
message ContinuationTransactionData {
    bytes invoke_transaction_id = 1;
    int32 nonce = 2;
}
```

| Поле | Размер | Описание |
| :--- | :--- | :--- |
| invoke_transaction_id | 32 байта | Идентификатор транзакции вызова скрипта, в которой начались вычисления |
| nonce | 4 байта | Произвольный номер, уникальный в цепочке вычислений. Используется для вычисления ID транзакции |
