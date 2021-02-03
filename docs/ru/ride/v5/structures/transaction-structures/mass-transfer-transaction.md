# [Ride v5] MassTransferTransaction

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/structures/transaction-structures/mass-transfer-transaction)

Структура [транзакции массового перевода](/ru/blockchain/transaction-type/mass-transfer-transaction).

## Конструктор

``` ride
MassTransferTransaction(assetId: ByteVector|Unit, totalAmount: Int, transfers: List[Transfer], transferCount: Int, attachment: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| № | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/ru/ride/v5/data-types/byte-vector)&#124;[Unit](/ru/ride/v5/data-types/unit) | [ID токена](/ru/blockchain/token/token-id) |
| 2 | totalAmount | [Int](/ru/ride/v5/data-types/int) | Количество переводимого токена |
| 3 | transfers | [List](/ru/ride/v5/data-types/list)[[Transfer](/ru/ride/v5/structures/common-structures/transfer)] | Переводы |
| 4 | transferCount | [Int](/ru/ride/v5/data-types/int) | Число переводов |
| 5 | attachment | [ByteVector](/en/ride/data-types/byte-vector) | Произвольные данные, прикрепленные к транзакции. Часто поле используется для прикрепления комментария к транзакции.<br>Максимальный размер данных — 140 байт |
| 6 | id | [ByteVector](/ru/ride/v5/data-types/byte-vector) | ID транзакции |
| 7 | fee | [Int](/ru/ride/v5/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 8 | timestamp | [Int](/ru/ride/v5/data-types/int) | Временная метка транзакции |
| 9 | version | [Int](/ru/ride/v5/data-types/int) | Версия транзакции |
| 10 | sender | [Address](/ru/ride/v5/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) отправителя транзакции |
| 11 | senderPublicKey | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Открытый ключ отправителя транзакции |
| 12 | bodyBytes | [ByteVector](/ru/ride/v5/data-types/byte-vector) | [Байты тела транзакции](/ru/blockchain/glossary#б) |
| 13 | proofs | [List](/ru/ride/v5/data-types/list)[[ByteVector](/ru/ride/v5/data-types/byte-vector)] | [Подтверждения](/ru/blockchain/transaction/transaction-proof) |

