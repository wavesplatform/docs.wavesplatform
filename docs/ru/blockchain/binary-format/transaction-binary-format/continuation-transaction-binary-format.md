# Бинарный формат транзакции продолжения

> Узнать больше о [транзакции продолжения](/ru/blockchain/transaction-type/continuation-transaction).

Транзакция продолжения добавлена в версии ноды 1.3.0 и включается с активацией фичи № 16 “Continuation”. Версии 1.3.x в настоящее время доступны только на [Stagenet](/ru/blockchain/blockchain-network/).

Бинарный формат транзакции соответствует protobuf-схеме [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto). Описание полей, общих для всех типов транзакций, представлено в разделе [Бинарный формат транзакции](/ru/blockchain/binary-format/transaction-binary-format/).

> Обратите внимание: транзакция продолжения не отправляется от имени аккаунта, поэтому для нее отсутствуют поля `senderPublicKey`, `proofs`, а также `timestamp` и `version`.

```
message ContinuationTransactionData {
    bytes invoke_id = 1;
    int32 nonce = 4;
};
```

| Поле | Размер | Описание |
| :--- | :--- | :--- |
| invoke_id | 32 байта | Идентификатор транзакции вызова скрипта, в которой начались вычисления |
| nonce | 1 байт | Порядковый номер продолжения (начиная с 0) |
