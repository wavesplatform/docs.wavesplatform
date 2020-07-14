# Burn

> :warning: Структура `Burn` представлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**.

`Burn` — cтруктура, задающая параметры сжигания токена. Cжигание токена выполняется, только если структура включена в [результирующее выражение](/ru/ride/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции.

## Конструктор

```ride
Burn(assetId: ByteVector, quantity: Int)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/ru/ride/data-types/byte-vector) | [ID токена](/ru/blockchain/token/token-id), предназначенного для сжигания |
| 2 | quantity | [Int](/ru/ride/data-types/int) | Количество токена |
