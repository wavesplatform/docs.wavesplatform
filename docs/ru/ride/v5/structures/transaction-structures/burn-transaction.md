# [Ride v5] BurnTransaction

:warning: Это документация Стандартной библиотеки **версии 5**, которая доступна с момента активации фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations”. [Перейти к&nbsp;версии&nbsp;4](/ru/ride/structures/transaction-structures/burn-transaction)

Структура [транзакции сжигания токена](/ru/blockchain/transaction-type/burn-transaction).

## Конструктор

``` ride
BurnTransaction(quantity: Int, assetId: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/ru/ride/v5/data-types/int) | Количество сжигаемого [токена](/ru/blockchain/token/) |
| 2 | assetId | [ByteVector](/ru/ride/v5/data-types/byte-vector) | [ID сжигаемого токена](/ru/blockchain/token/token-id) |
| 3 | id | [ByteVector](/ru/ride/v5/data-types/byte-vector) | ID транзакции |
| 4 | fee | [Int](/ru/ride/v5/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 5 | timestamp | [Int](/ru/ride/v5/data-types/int) | Временная метка транзакции |
| 6 | version | [Int](/ru/ride/v5/data-types/int) | Версия транзакции |
| 7 | sender | [Address](/ru/ride/v5/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) отправителя транзакции |
| 8 | senderPublicKey | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Открытый ключ отправителя транзакции |
| 9 | bodyBytes | [ByteVector](/ru/ride/v5/data-types/byte-vector) | [Байты тела транзакции](/ru/blockchain/glossary#б) |
| 10 | proofs | [List](/ru/ride/v5/data-types/list)[[ByteVector](/ru/ride/v5/data-types/byte-vector)] | Список [подтверждений](/ru/blockchain/transaction/transaction-proof) |
