# [Ride v4 и v3] LeaseCancelTransaction

:warning: Это документация Стандартной библиотеки версии 4 и 3. Рекомендуем использовать версию 5. [Перейти к&nbsp;версии&nbsp;5](/ru/ride/structures/transaction-structures/lease-cancel-transaction)

Структура [транзакции закрытия лизинга](/ru/blockchain/transaction-type/lease-cancel-transaction).

## Конструктор

``` ride
LeaseCancelTransaction(leaseId: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | leaseId | [ByteVector](/ru/ride/v4/data-types/byte-vector) | ID лизинга |
| 2 | id | [ByteVector](/ru/ride/v4/data-types/byte-vector) | ID транзакции |
| 3 | fee | [Int](/ru/ride/v4/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 4 | timestamp | [Int](/ru/ride/v4/data-types/int) | Временная метка транзакции |
| 5 | version | [Int](/ru/ride/v4/data-types/int) | Версия транзакции |
| 6 | sender | [Address](/ru/ride/v4/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) отправителя транзакции |
| 7 | senderPublicKey | [ByteVector](/ru/ride/v4/data-types/byte-vector) | Открытый ключ отправителя транзакции |
| 8 | bodyBytes | [ByteVector](/ru/ride/v4/data-types/byte-vector) | [Байты тела транзакции](/ru/blockchain/glossary#б) |
| 9 | proofs | [List](/ru/ride/v4/data-types/list)[[ByteVector](/ru/ride/v4/data-types/byte-vector)] | Список [подтверждений](/ru/blockchain/transaction/transaction-proof) |
