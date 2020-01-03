# Invocation

Структура сокращенного представления [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction.md).

## Конструктор

``` ride
Invocation(caller: Address, callerPublicKey: ByteVector, payment: AttachedPayment|Unit, transactionId: ByteVector, fee: Int, feeAssetId: ByteVector|Unit)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | caller | [Address](/ru/ride/structures/common-structures/address.md) | [Адрес](/ru/blockchain/account/address.md) аккаунта, который отправил транзакцию |
| 2 | callerPublicKey | [ByteVector](/ru/ride/data-types/byte-vector.md) | Открытый ключ аккаунта, который отправил транзакцию |
| 3 | payment | [AttachedPayment](/ru/ride/structures/common-structures/attached-payment.md)&#124;[Unit](/ru/ride/data-types/unit.md) | Приложенный платеж |
| 4 | transactionId | [ByteVector](/ru/ride/data-types/byte-vector.md) | ID транзакции |
| 5 | fee | [Int](/ru/ride/data-types/int.md) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee.md) |
| 6 | feeAssetId | [ByteVector](/ru/ride/data-types/byte-vector.md)&#124;[Unit](/ru/ride/data-types/unit.md) | [Токен](/ru/blockchain/token.md) комиссии за отправку транзакции |
