# [Ride v4 и v3] ReissueTransaction

:warning: Это документация Стандартной библиотеки версии 4 и 3. Рекомендуем использовать версию 5. [Перейти к&nbsp;версии&nbsp;5](/ru/ride/structures/transaction-structures/reissue-transaction)

Структура [транзакции довыпуска](/ru/blockchain/transaction-type/reissue-transaction).

## Конструктор

``` ride
ReissueTransaction(quantity: Int, assetId: ByteVector, reissuable: Boolean, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| № | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/ru/ride/v4/data-types/int) | Количество [токена](/ru/blockchain/token/) |
| 2 | assetId | [ByteVector](/ru/ride/v4/data-types/byte-vector) | [ID токена](/ru/blockchain/token/token-id) |
| 3 | reissuable | [Boolean](/ru/ride/v4/data-types/boolean) | Флаг довыпуска |
| 4 | id | [ByteVector](/ru/ride/v4/data-types/byte-vector) | ID транзакции |
| 5 | fee | [Int](/ru/ride/v4/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 6 | timestamp | [Int](/ru/ride/v4/data-types/int) | Временная метка транзакции |
| 7 | version | [Int](/ru/ride/v4/data-types/int) | Версия транзакции |
| 8 | sender | [Address](/ru/ride/v4/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) отправителя транзакции |
| 9 | senderPublicKey | [ByteVector](/ru/ride/v4/data-types/byte-vector) | Открытый ключ отправителя транзакции |
| 10 | bodyBytes | [ByteVector](/ru/ride/v4/data-types/byte-vector) | [Байты тела транзакции](/ru/blockchain/glossary#б) |
| 11 | proofs | [List](/ru/ride/v4/data-types/list)[[ByteVector](/ru/ride/v4/data-types/byte-vector)] | [Подтверждения](/ru/blockchain/transaction/transaction-proof) |
