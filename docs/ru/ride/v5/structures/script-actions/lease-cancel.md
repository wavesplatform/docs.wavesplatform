# [Ride v5] LeaseCancel

:warning: Это документация Стандартной библиотеки **версии 5**, которая доступна с момента активации фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations”.

`LeaseCancel` — структура, задающая параметры отмены лизинга. Лизинг отменяется, только если структура включена в [результирующее выражение](/ru/ride/v5/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции.

## Конструктор

```ride
LeaseCancel(leaseId: ByteVector)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | leaseId | [ByteVector](/ru/ride/v5/data-types/byte-vector) | ID лизинга |
