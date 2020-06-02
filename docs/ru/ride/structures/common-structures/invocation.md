# Invocation

Структура содержит поля [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction), которые может использовать [вызываемая функция](/ru/ride/functions/callable-function).

## Конструктор

В Стандартной библиотеке **версии 3**:

```ride
Invocation(caller: Address, callerPublicKey: ByteVector, payment: AttachedPayment|Unit, transactionId: ByteVector, fee: Int, feeAssetId: ByteVector|Unit)
```

В Стандартной библиотеке **версии 4**:

```ride
Invocation(caller: Address, callerPublicKey: ByteVector, payments: List[AttachedPayment], transactionId: ByteVector, fee: Int, feeAssetId: ByteVector|Unit)
```

Стандартная библиотека версии 4 доступна начиная с версии ноды 1.2.0 после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”. Версии 1.2.x в настоящее время работают только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | caller | [Address](/ru/ride/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) аккаунта, который отправил транзакцию |
| 2 | callerPublicKey | [ByteVector](/ru/ride/data-types/byte-vector) | Открытый ключ аккаунта, который отправил транзакцию |
| 3 | payment | [AttachedPayment](/ru/ride/structures/common-structures/attached-payment)&#124;[Unit](/ru/ride/data-types/unit) | Приложенный платеж.<br>:warning: Поле удалено в Стандартной библиотеке версии 4 |
| 3 | payments | List[[AttachedPayment](/ru/ride/structures/common-structures/attached-payment)] | Приложенные платежи.<br>Поле добавлено в Стандартной библиотеке версии 4 |
| 4 | transactionId | [ByteVector](/ru/ride/data-types/byte-vector) | ID транзакции |
| 5 | fee | [Int](/ru/ride/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 6 | feeAssetId | [ByteVector](/ru/ride/data-types/byte-vector)&#124;[Unit](/ru/ride/data-types/unit) | [Токен](/ru/blockchain/token/) комиссии за отправку транзакции |
