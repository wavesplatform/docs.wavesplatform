# InvokeScriptTransaction

Структура [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction).

## Конструктор

```ride
InvokeScriptTransaction(dApp: Address|Alias, payments: List[AttachedPayments], feeAssetId: ByteVector|Unit, function: String, args: List[Boolean|ByteVector|Int|String|List[Boolean|ByteVector|Int|String]], id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Поля структуры

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | dApp | [Address](/ru/ride/v5/structures/common-structures/address)&#124;[Alias](/ru/ride/v5/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) [аккаунта](/ru/blockchain/account/), который вызывает функцию |
| 2 | payments | List[[AttachedPayment](/ru/ride/v5/structures/common-structures/attached-payment)] | Приложенные платежи |
| 3 | feeAssetId | [ByteVector](/ru/ride/v5/data-types/byte-vector)&#124;[Unit](/ru/ride/v5/data-types/unit) | [Токен](/ru/blockchain/token/) комиссии. В настоящее время им может быть только [WAVES](/ru/blockchain/token/waves) |
| 4 | function | [String](/ru/ride/v5/data-types/string) | Имя [функции](/ru/ride/v5/functions/) |
| 5 | args | [List](/ru/ride/v5/data-types/list)[[Boolean](/ru/ride/v5/data-types/boolean)&#124;[ByteVector](/ru/ride/v5/data-types/byte-vector)&#124;[Int](/ru/ride/v5/data-types/int)&#124;[String](/ru/ride/v5/data-types/string)&#124;[List](/ru/ride/v5/data-types/list)[[Boolean](/ru/ride/v5/data-types/boolean)&#124;[ByteVector](/ru/ride/v5/data-types/byte-vector)&#124;[Int](/ru/ride/v5/data-types/int)&#124;[String](/ru/ride/v5/data-types/string)]]  | Параметры[ функции](/ru/ride/v5/functions/) |
| 6 | id | [ByteVector](/ru/ride/v5/data-types/byte-vector) | ID транзакции |
| 7 | fee | [Int](/ru/ride/v5/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 8 | timestamp | [Int](/ru/ride/v5/data-types/int) | Временная метка транзакции |
| 9 | version | [Int](/ru/ride/v5/data-types/int) | Версия транзакции |
| 10 | sender | [Address](/ru/ride/v5/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) отправителя транзакции |
| 11 | senderPublicKey | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Открытый ключ отправителя транзакции |
| 12 | bodyBytes | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Байты тела транзакции |
| 13 | proofs | [List](/ru/ride/v5/data-types/list)[[ByteVector](/ru/ride/v5/data-types/byte-vector)] | Список [подтверждений](/ru/blockchain/transaction/transaction-proof) |
