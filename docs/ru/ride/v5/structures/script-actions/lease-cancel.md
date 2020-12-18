# LeaseCancel

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/).

`LeaseCancel` — структура, задающая параметры отмены лизинга. Лизинг отменяется, только если структура включена в [результирующее выражение](/ru/ride/v5/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции.

## Конструктор

```ride
LeaseCancel(leaseId: ByteVector)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | leaseId | [ByteVector](/ru/ride/v5/data-types/byte-vector) | ID лизинга |
