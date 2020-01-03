# SetScriptTransaction

Структура [транзакции установки скрипта](/ru/blockchain/transaction-type/set-script-transaction.md).

## Конструктор

``` ride
SetScriptTransaction(script: ByteVector|Unit, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| № | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | script | [ByteVector](/ru/ride/data-types/byte-vector.md)&#124;[Unit](/ru/ride/data-types/unit.md) | [Скрипт аккаунта](/ru/ride/script/script-types/account-script.md) или [dApp-скрипт](/ru/ride/script/script-types/dapp-script.md) |
| 2 | id | [ByteVector](/ru/ride/data-types/byte-vector.md) | [ID транзакции](/ru/blockchain/transaction/transaction-id.md) |
| 3 | fee | [Int](/ru/ride/data-types/int.md) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee.md) |
| 4 | timestamp | [Int](/ru/ride/data-types/int.md) | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp.md) |
| 5 | version | [Int](/ru/ride/data-types/int.md) | [Версия транзакции](/ru/blockchain/transaction/transaction-version.md) |
| 6 | sender | [Address](/ru/ride/structures/common-structures/address.md) | [Адрес](/ru/blockchain/account/address.md) отправителя транзакции |
| 7 | senderPublicKey | [ByteVector](/ru/ride/data-types/byte-vector.md) | Открытый ключ отправителя транзакции |
| 8 | bodyBytes | [ByteVector](/ru/ride/data-types/byte-vector.md) | [Байты тела транзакции](/ru/blockchain/transaction/transaction-body-bytes.md) |
| 9 | proofs | [List](/ru/ride/data-types/list.md)[[ByteVector](/ru/ride/data-types/byte-vector.md)] | [Подтверждения](/ru/blockchain/transaction/transaction-proof.md) |
