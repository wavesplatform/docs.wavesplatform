# LeaseTransaction

Структура [транзакции лизинга](/ru/blockchain/transaction-type/lease-transaction.md).

## Конструктор

``` ride
LeaseTransaction(amount: Int, recipient: Address|Alias, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | amount | [Int](/ru/ride/data-types/int.md) | Количество [токена](/ru/blockchain/token.md), отдаваемого в лизинг |
| 2 | recipient | [Address](/ru/ride/structures/common-structures/address.md)&#124;[Alias](/ru/ride/structures/common-structures/alias.md) | [Адрес](/ru/blockchain/account/address.md) или [псевдоним](/ru/blockchain/account/alias.md) получателя лизинга |
| 3 | id | [ByteVector](/ru/ride/data-types/byte-vector.md) | [ID транзакции](/ru/blockchain/transaction/transaction-id.md) |
| 4 | fee | [Int](/ru/ride/data-types/int.md) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee.md) |
| 5 | timestamp | [Int](/ru/ride/data-types/int.md) | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp.md) |
| 6 | version | [Int](/ru/ride/data-types/int.md) | [Версия транзакции](/ru/blockchain/transaction/transaction-version.md) |
| 7 | sender | [Address](/ru/ride/structures/common-structures/address.md) | [Адрес](/ru/blockchain/account/address.md) отправителя транзакции |
| 8 | senderPublicKey | [ByteVector](/ru/ride/data-types/byte-vector.md) | Открытый ключ отправителя транзакции |
| 9 | bodyBytes | [ByteVector](/ru/ride/data-types/byte-vector.md) | [Байты тела транзакции](/ru/blockchain/transaction/transaction-body-bytes.md) |
| 10 | proofs | [List](/ru/ride/data-types/list.md)[[ByteVector](/ru/ride/data-types/byte-vector.md)] | Список [подтверждений](/ru/blockchain/transaction/transaction-proof.md) |
