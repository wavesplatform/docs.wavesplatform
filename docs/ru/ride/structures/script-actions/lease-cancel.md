# LeaseCancel

`LeaseCancel` — структура, задающая параметры отмены лизинга. Лизинг отменяется, только если структура включена в [результирующее выражение](/ru/ride/functions/callable-function#invocation-result) вызываемой функции.

## Конструктор

```ride
LeaseCancel(leaseId: ByteVector)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | leaseId | [ByteVector](/ru/ride/data-types/byte-vector) | ID лизинга |
