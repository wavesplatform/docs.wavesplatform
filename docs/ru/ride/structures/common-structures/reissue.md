# Reissue

> [!WARNING]
> Структура Reissue представлена в [Стандартной библиотеке](/ru/ride/script/standard-library.md) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network.md).

Структура [довыпуска токена](/ru/blockchain/transaction-type/reissue-transaction.md).

## Конструктор

```ride
Reissuen(assetId: ByteVector, isReissuable: Boolean, quantity: Int)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/ru/ride/data-types/byte-vector.md) | [ID токена](/ru/blockchain/token/token-id.md) для довыпуска |
| 2 | isReissuable | [Boolean](/ru/ride/data-types/boolean.md) | Флаг возможности довыпуска |
| 3 | quantity | [Int](/ru/ride/data-types/int.md) | Количество токена |
