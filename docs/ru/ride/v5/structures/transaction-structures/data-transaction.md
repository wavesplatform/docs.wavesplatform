# DataTransaction

Структура [транзакции данных](/ru/blockchain/transaction-type/data-transaction).

## Конструктор

В Стандартной библиотеке **версии 3**:

``` ride
DataTransaction(data: List[DataEntry], id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

В Стандартной библиотеке **версии 4**:

``` ride
DataTransaction(data: List[BinaryEntry|BooleanEntry|DeleteEntry|IntegerEntry|StringEntry], id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | data | В версии 3: [List](/ru/ride/v5/data-types/list)[[DataEntry](/ru/ride/v5/structures/script-actions/data-entry)]<br>В версии 4: [List](/ru/ride/v5/data-types/list)[[BinaryEntry](/ru/ride/v5/structures/script-actions/binary-entry)&#124;[BooleanEntry](/ru/ride/v5/structures/script-actions/boolean-entry)&#124;[DeleteEntry](/ru/ride/v5/structures/script-actions/delete-entry)&#124;[IntegerEntry](/ru/ride/v5/structures/script-actions/int-entry)&#124;[StringEntry](/ru/ride/v5/structures/script-actions/string-entry)] | [Массив данных транзакции](/ru/blockchain/transaction-type/data-transaction) |
| 2 | id | [ByteVector](/ru/ride/v5/data-types/byte-vector) | ID транзакции |
| 3 | fee | [Int](/ru/ride/v5/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 4 | timestamp | [Int](/ru/ride/v5/data-types/int) | Временная метка транзакции|
| 5 | version | [Int](/ru/ride/v5/data-types/int) | Версия транзакции |
| 6 | sender | [Address](/ru/ride/v5/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) отправителя транзакции |
| 7 | senderPublicKey | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Открытый ключ отправителя транзакции |
| 8 | bodyBytes | [ByteVector](/ru/ride/v5/data-types/byte-vector) | [Байты тела транзакции](/ru/blockchain/glossary#б) |
| 9 | proofs | [List](/ru/ride/v5/data-types/list)[[ByteVector](/ru/ride/v5/data-types/byte-vector)] | Список [подтверждений](/ru/blockchain/transaction/transaction-proof) |
