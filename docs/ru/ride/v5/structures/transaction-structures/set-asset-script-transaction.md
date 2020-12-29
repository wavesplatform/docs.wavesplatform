# [Ride v5] SetAssetScriptTransaction

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/structures/transaction-structures/set-asset-script-transaction)

Структура [транзакции установки скрипта ассета](/ru/blockchain/transaction-type/set-asset-script-transaction).

## Конструктор

``` ride
SetAssetScriptTransaction(script: ByteVector|Unit, assetId: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля

| № | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | script | [ByteVector](/ru/ride/v5/data-types/byte-vector)&#124;[Unit](/ru/ride/v5/data-types/unit) | [Скрипт ассета](/ru/ride/script/script-types/asset-script) |
| 2 | assetId | [ByteVector](/ru/ride/v5/data-types/byte-vector) | [ID токена](/ru/blockchain/token/token-id) |
| 3 | id | [ByteVector](/ru/ride/v5/data-types/byte-vector) | ID транзакции |
| 4 | fee | [Int](/ru/ride/v5/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 5 | timestamp | [Int](/ru/ride/v5/data-types/int) | Временная метка транзакции |
| 6 | version | [Int](/ru/ride/v5/data-types/int) | Версия транзакции |
| 7 | sender | [Address](/ru/ride/v5/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) отправителя транзакции |
| 8 | senderPublicKey | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Открытый ключ отправителя транзакции |
| 9 | bodyBytes | [ByteVector](/ru/ride/v5/data-types/byte-vector) | [Байты тела транзакции](/ru/blockchain/glossary#б) |
| 10 | proofs | [List](/ru/ride/v5/data-types/list)[[ByteVector](/ru/ride/v5/data-types/byte-vector)] | [Подтверждения](/ru/blockchain/transaction/transaction-proof) |
