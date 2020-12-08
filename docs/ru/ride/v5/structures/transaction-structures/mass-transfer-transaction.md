# MassTransferTransaction

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/structures/transaction-structures/mass-transfer-transaction)

Структура [транзакции массового перевода](/ru/blockchain/transaction-type/mass-transfer-transaction).

## Конструктор

``` ride
MassTransferTransaction(feeAssetId: ByteVector|Unit, assetId: ByteVector|Unit, totalAmount: Int, transfers: List[Transfer], transferCount: Int, attachment: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| № | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | feeAssetId | [ByteVector](/ru/ride/v5/data-types/byte-vector)&#124;[Unit](/ru/ride/v5/data-types/unit) | Токен [комиссии за транзакцию](/ru/blockchain/transaction/transaction-fee).<br>В настоящее время разрешен только [WAVES](/ru/blockchain/token/waves) |
| 2 | assetId | [ByteVector](/ru/ride/v5/data-types/byte-vector)&#124;[Unit](/ru/ride/v5/data-types/unit) | [ID токена](/ru/blockchain/token/token-id) |
| 3 | totalAmount | [Int](/ru/ride/v5/data-types/int) | Количество переводимого токена |
| 4 | transfers | [List](/ru/ride/v5/data-types/list)[[Transfer](/ru/ride/v5/structures/common-structures/transfer)] | Переводы |
| 5 | transferCount | [Int](/ru/ride/v5/data-types/int) | Число переводов |
| 6 | attachment | [ByteVector](/en/ride/data-types/byte-vector) | Произвольные данные, прикрепленные к транзакции. Часто поле используется для прикрепления комментария к транзакции.<br>Максимальный размер данных — 140 байт |
| 7 | id | [ByteVector](/ru/ride/v5/data-types/byte-vector) | ID транзакции |
| 8 | fee | [Int](/ru/ride/v5/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 9 | timestamp | [Int](/ru/ride/v5/data-types/int) | Временная метка транзакции |
| 10 | version | [Int](/ru/ride/v5/data-types/int) | Версия транзакции |
| 11 | sender | [Address](/ru/ride/v5/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) отправителя транзакции |
| 12 | senderPublicKey | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Открытый ключ отправителя транзакции |
| 13 | bodyBytes | [ByteVector](/ru/ride/v5/data-types/byte-vector) | [Байты тела транзакции](/ru/blockchain/glossary#б) |
| 14 | proofs | [List](/ru/ride/v5/data-types/list)[[ByteVector](/ru/ride/v5/data-types/byte-vector)] | [Подтверждения](/ru/blockchain/transaction/transaction-proof) |

