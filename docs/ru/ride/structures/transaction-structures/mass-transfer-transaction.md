# MassTransferTransaction

Структура [транзакции массового перевода](/ru/blockchain/transaction-type/mass-transfer-transaction.md).

## Конструктор

``` ride
MassTransferTransaction(feeAssetId: ByteVector|Unit, assetId: ByteVector|Unit, totalAmount: Int, transfers: List[Transfer], transferCount: Int, attachment: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| № | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | feeAssetId | [ByteVector](/ru/ride/data-types/byte-vector.md)&#124;[Unit](/ru/ride/data-types/unit.md) | Токен [комиссии за транзакцию](/ru/blockchain/transaction/transaction-fee.md).<br>В настоящее время разрешен только [WAVES](/ru/blockchain/token/waves.md) |
| 2 | assetId | [ByteVector](/ru/ride/data-types/byte-vector.md)&#124;[Unit](/ru/ride/data-types/unit.md) | [ID токена](/ru/blockchain/token/token-id.md) |
| 3 | totalAmount | [Int](/ru/ride/data-types/int.md) | Количество переводимого токена |
| 4 | transfers | [List](/ru/ride/data-types/list.md)[[Transfer](/ru/ride/structures/common-structures/transfer.md)] | Переводы |
| 5 | transferCount | [Int](/ru/ride/data-types/int.md) | Число переводов |
| 6 | attachment | [ByteVector](/ru/ride/data-types/byte-vector.md) | Произвольные данные, прикрепленные к транзакции. Часто поле используется для прикрепления комментария к транзакции.<br>Максимальный размер данных — 140 байт |
| 7 | id | [ByteVector](/ru/ride/data-types/byte-vector.md) | [ID транзакции](/ru/blockchain/transaction/transaction-id.md) |
| 8 | fee | [Int](/ru/ride/data-types/int.md) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee.md) |
| 9 | timestamp | [Int](/ru/ride/data-types/int.md) | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp.md) |
| 10 | version | [Int](/ru/ride/data-types/int.md) | [Версия транзакции](/ru/blockchain/transaction/transaction-version.md) |
| 11 | sender | [Address](/ru/ride/structures/common-structures/address.md) | [Адрес](/ru/blockchain/account/address.md) отправителя транзакции |
| 12 | senderPublicKey | [ByteVector](/ru/ride/data-types/byte-vector.md) | Открытый ключ отправителя транзакции |
| 13 | bodyBytes | [ByteVector](/ru/ride/data-types/byte-vector.md) | [Байты тела транзакции](/ru/blockchain/transaction/transaction-body-bytes.md) |
| 14 | proofs | [List](/ru/ride/data-types/list.md)[[ByteVector](/ru/ride/data-types/byte-vector.md)] | [Подтверждения](/ru/blockchain/transaction/transaction-proof.md) |
