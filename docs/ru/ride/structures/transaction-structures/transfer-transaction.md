# TransferTransaction

Структура [транзакции перевода](/ru/blockchain/transaction-type/transfer-transaction).

## Конструктор

В Стандартной библиотеке **версии 3**:

``` ride
TransferTransaction(feeAssetId: ByteVector|Unit, amount: Int, assetId: ByteVector|Unit, recipient: Address|Alias, attachment: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

В Стандартной библиотеке **версии 4**:

``` ride
TransferTransaction(feeAssetId: ByteVector|Unit, amount: Int, assetId: ByteVector|Unit, recipient: Address|Alias, attachment: Boolean|ByteVector|Int|String, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

Стандартная библиотека версии 4 доступна начиная с версии ноды 1.2.0 после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”. Версии 1.2.x в настоящее время работают только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

## Поля структуры

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | feeAssetId | [ByteVector](/ru/ride/data-types/byte-vector)&#124;[Unit](/ru/ride/data-types/unit) | [Токен](/ru/blockchain/token/) комиссии. В настоящее разрешен только [WAVES](/ru/blockchain/token/waves) |
| 2 | amount | [Int](/ru/ride/data-types/int) | Количество токенов для перевода |
| 3 | assetId | [ByteVector](/ru/ride/data-types/byte-vector)&#124;[Unit](/ru/ride/data-types/unit) | ID токена |
| 4 | recipient | [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) получателя |
| 5 | attachment | В версии 3: [ByteVector](/ru/ride/data-types/byte-vector)<br>В версии 4: [Boolean](/ru/ride/data-types/boolean)&#124;[ByteVector](/ru/ride/data-types/byte-vector)&#124;[Int](/ru/ride/data-types/int)&#124;[String](/ru/ride/data-types/string) | Произвольные данные, которые могут быть прикреплены к переводу |
| 6 | id | [ByteVector](/ru/ride/data-types/byte-vector) | [ID транзакции](/ru/blockchain/transaction/transaction-id) |
| 7 | fee | [Int](/ru/ride/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 8 | timestamp | [Int](/ru/ride/data-types/int) | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) |
| 9 | version | [Int](/ru/ride/data-types/int) | [Версия транзакции](/ru/blockchain/transaction/transaction-version) |
| 10 | sender | [Address](/ru/ride/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) отправителя транзакции |
| 11 | senderPublicKey | [ByteVector](/ru/ride/data-types/byte-vector) | Открытый ключ отправителя транзакции |
| 12 | bodyBytes | [ByteVector](/ru/ride/data-types/byte-vector) | [Байты тела транзакции](/ru/blockchain/transaction/transaction-body-bytes) |
| 13 | proofs | [List](/ru/ride/data-types/list)[[ByteVector](/ru/ride/data-types/byte-vector)] | Список [подтверждений](/ru/blockchain/transaction/transaction-proof) |
