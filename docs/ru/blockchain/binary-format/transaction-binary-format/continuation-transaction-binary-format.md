# Бинарный формат транзакции продолжения

> Узнать больше о [транзакции продолжения](/ru/blockchain/transaction-type/continuation-transaction).

Транзакция продолжения добавлена в версии ноды 1.3.0 и включается с активацией фичи № 16 “Continuation”. Версии 1.3.x в настоящее время доступны только на [Stagenet](/ru/blockchain/blockchain-network/).

Бинарный формат транзакции соответствует protobuf-схеме [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto). Описание полей, общих для всех типов транзакций, представлено в разделе [Бинарный формат транзакции](/ru/blockchain/binary-format/transaction-binary-format/).

> Обратите внимание: транзакция продолжения не отправляется от имени аккаунта, поэтому для нее отсутствуют поля `senderPublicKey` и `proofs`.

```
message ContinuationTransactionData {
    bytes invoke_transaction_id = 1;
    int32 nonce = 2;
}
```

| Поле | Размер | Описание |
| :--- | :--- | :--- |
| invoke_transaction_id | 32 байта | Идентификатор транзакции вызова скрипта, в которой начались вычисления |
| nonce | 1 байт | Произвольный номер, уникальный в цепочке вычислений. Используется для вычисления ID транзакции |
