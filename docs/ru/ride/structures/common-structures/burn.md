# Burn

> [!WARNING]
> Структура Burn представлена в [Стандартной библиотеке](/ru/ride/script/standard-library.md) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network.md).

Структура [сжигания токена](/ru/blockchain/transaction-type/burn-transaction.md).

## Конструктор

```ride
Burn(assetId: ByteVector, quantity: Int)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/ru/ride/data-types/byte-vector.md) | [ID токена](/ru/blockchain/token/token-id.md), предназначенного для сжигания |
| 2 | quantity | [Int](/ru/ride/data-types/int.md) | Количество токена |
