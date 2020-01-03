# Invocation

Структура сокращенного представления [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction).

## Конструктор

``` ride
Invocation(caller: Address, callerPublicKey: ByteVector, payment: AttachedPayment|Unit, transactionId: ByteVector, fee: Int, feeAssetId: ByteVector|Unit)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | caller | [Address](/ru/ride/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) аккаунта, который отправил транзакцию |
| 2 | callerPublicKey | [ByteVector](/ru/ride/data-types/byte-vector) | Открытый ключ аккаунта, который отправил транзакцию |
| 3 | payment | [AttachedPayment](/ru/ride/structures/common-structures/attached-payment)&#124;[Unit](/ru/ride/data-types/unit) | Приложенный платеж |
| 4 | transactionId | [ByteVector](/ru/ride/data-types/byte-vector) | ID транзакции |
| 5 | fee | [Int](/ru/ride/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 6 | feeAssetId | [ByteVector](/ru/ride/data-types/byte-vector)&#124;[Unit](/ru/ride/data-types/unit) | [Токен](/ru/blockchain/token) комиссии за отправку транзакции |
