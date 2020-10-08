# LeaseCancel

> :warning: Структура `LeaseCancel` добавлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 5**, которая в настоящее время доступна только на Stagenet.

`LeaseCancel` — структура, задающая параметры отмены лизинга. Лизинг отменяется, только если структура включена в [результирующее выражение](/ru/ride/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции.

## Конструктор

```ride
LeaseCancel(leaseId: ByteVector)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | leaseId | [ByteVector](/ru/ride/data-types/byte-vector) | ID лизинга |
