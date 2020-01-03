# TransferTransaction

Структура [транзакции перевода](/ru/blockchain/transaction-type/transfer-transaction.md).

## Конструктор

``` ride
TransferTransaction(feeAssetId: ByteVector|Unit, amount: Int, assetId: ByteVector|Unit, recipient: Address|Alias, attachment: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | feeAssetId | [ByteVector](/ru/ride/data-types/byte-vector.md)&#124;[Unit](/ru/ride/data-types/unit.md) | [Токен](/ru/blockchain/token.md) комиссии. В настоящее разрешен только [WAVES](/ru/blockchain/token/waves.md) |
| 2 | amount | [Int](/ru/ride/data-types/int.md) | Количество токенов для перевода |
| 3 | assetId | [ByteVector](/ru/ride/data-types/byte-vector.md)&#124;[Unit](/ru/ride/data-types/unit.md) | ID токена |
| 4 | recipient | [Address](/ru/ride/structures/common-structures/address.md)&#124;[Alias](/ru/ride/structures/common-structures/alias.md) | [Адрес](/ru/blockchain/account/address.md) или [псевдоним](/ru/blockchain/account/alias.md) получателя |
| 5 | attachment | [ByteVector](/ru/ride/data-types/byte-vector.md) | Произвольные данные, которые могут быть прикреплены к переводу |
| 6 | id | [ByteVector](/ru/ride/data-types/byte-vector.md) | [ID транзакции](/ru/blockchain/transaction/transaction-id.md) |
| 7 | fee | [Int](/ru/ride/data-types/int.md) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee.md) |
| 8 | timestamp | [Int](/ru/ride/data-types/int.md) | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp.md) |
| 9 | version | [Int](/ru/ride/data-types/int.md) | [Версия транзакции](/ru/blockchain/transaction/transaction-version.md) |
| 10 | sender | [Address](/ru/ride/structures/common-structures/address.md) | [Адрес](/ru/blockchain/account/address.md) отправителя транзакции |
| 11 | senderPublicKey | [ByteVector](/ru/ride/data-types/byte-vector.md) | Открытый ключ отправителя транзакции |
| 12 | bodyBytes | [ByteVector](/ru/ride/data-types/byte-vector.md) | [Байты тела транзакции](/ru/blockchain/transaction/transaction-body-bytes.md) |
| 13 | proofs | [List](/ru/ride/data-types/list.md)[[ByteVector](/ru/ride/data-types/byte-vector.md)] | Список [подтверждений](/ru/blockchain/transaction/transaction-proof.md) |
