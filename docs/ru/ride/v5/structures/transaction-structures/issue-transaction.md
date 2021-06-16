# [Ride v5] IssueTransaction

:warning: Это документация Стандартной библиотеки **версии 5**, которая доступна с момента активации фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations”. [Перейти к&nbsp;версии&nbsp;4](/ru/ride/structures/transaction-structures/issue-transaction)

Структура [транзакции выпуска](/ru/blockchain/transaction-type/issue-transaction).

## Конструктор

``` ride
IssueTransaction(quantity: Int, name: String, description: String, reissuable: Boolean, decimals: Int, script: ByteVector|Unit, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/ru/ride/v5/data-types/int) | Количество [токена](/ru/blockchain/token/) |
| 2 | name | [String](/ru/ride/v5/data-types/string) | Название токена |
| 3 | description | [String](/ru/ride/v5/data-types/string) | Описание токена |
| 4 | reissuable | [Boolean](/ru/ride/v5/data-types/boolean) | Флаг возможности довыпуска токена |
| 5 | decimals | [Int](/ru/ride/v5/data-types/int) | Число знаков после запятой |
| 6 | script | [ByteVector](/ru/ride/v5/data-types/byte-vector)&#124;[Unit](/ru/ride/v5/data-types/unit) | [Скрипт ассета](/ru/ride/script/script-types/asset-script) |
| 7 | id | [ByteVector](/ru/ride/v5/data-types/byte-vector) | ID транзакции |
| 8 | fee | [Int](/ru/ride/v5/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 9 | timestamp | [Int](/ru/ride/v5/data-types/int) | Временная метка транзакции |
| 10 | version | [Int](/ru/ride/v5/data-types/int) | Версия транзакции |
| 11 | sender | [Address](/ru/ride/v5/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) отправителя транзакции |
| 12 | senderPublicKey | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Открытый ключ отправителя транзакции |
| 13 | bodyBytes | [ByteVector](/ru/ride/v5/data-types/byte-vector) | [Байты тела транзакции](/ru/blockchain/glossary#б) |
| 14 | proofs | [List](/ru/ride/v5/data-types/list)[[ByteVector](/ru/ride/v5/data-types/byte-vector)] | Список [подтверждений](/ru/blockchain/transaction/transaction-proof) |
