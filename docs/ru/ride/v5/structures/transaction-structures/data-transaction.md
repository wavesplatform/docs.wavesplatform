# [Ride v5] DataTransaction

:warning: Это документация Стандартной библиотеки **версии 5**, которая доступна с момента активации фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations”. [Перейти к&nbsp;версии&nbsp;4](/ru/ride/structures/transaction-structures/data-transaction)

Структура [транзакции данных](/ru/blockchain/transaction-type/data-transaction).

## Конструктор

``` ride
DataTransaction(data: List[BinaryEntry|BooleanEntry|DeleteEntry|IntegerEntry|StringEntry], id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | data | [List](/ru/ride/v5/data-types/list)[[BinaryEntry](/ru/ride/v5/structures/script-actions/binary-entry)&#124;[BooleanEntry](/ru/ride/v5/structures/script-actions/boolean-entry)&#124;[DeleteEntry](/ru/ride/v5/structures/script-actions/delete-entry)&#124;[IntegerEntry](/ru/ride/v5/structures/script-actions/int-entry)&#124;[StringEntry](/ru/ride/v5/structures/script-actions/string-entry)] | [Массив данных транзакции](/ru/blockchain/transaction-type/data-transaction) |
| 2 | id | [ByteVector](/ru/ride/v5/data-types/byte-vector) | ID транзакции |
| 3 | fee | [Int](/ru/ride/v5/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 4 | timestamp | [Int](/ru/ride/v5/data-types/int) | Временная метка транзакции|
| 5 | version | [Int](/ru/ride/v5/data-types/int) | Версия транзакции |
| 6 | sender | [Address](/ru/ride/v5/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) отправителя транзакции |
| 7 | senderPublicKey | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Открытый ключ отправителя транзакции |
| 8 | bodyBytes | [ByteVector](/ru/ride/v5/data-types/byte-vector) | [Байты тела транзакции](/ru/blockchain/glossary#б) |
| 9 | proofs | [List](/ru/ride/v5/data-types/list)[[ByteVector](/ru/ride/v5/data-types/byte-vector)] | Список [подтверждений](/ru/blockchain/transaction/transaction-proof) |
