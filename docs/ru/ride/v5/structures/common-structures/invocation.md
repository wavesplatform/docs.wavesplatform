# Invocation

Структура содержит поля [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction), которые может использовать [вызываемая функция](/ru/ride/v5/functions/callable-function).

## Конструктор

В Стандартной библиотеке **версии 3**:

```ride
Invocation(caller: Address, callerPublicKey: ByteVector, payment: AttachedPayment|Unit, transactionId: ByteVector, fee: Int, feeAssetId: ByteVector|Unit)
```

В Стандартной библиотеке **версии 4**:

```ride
Invocation(caller: Address, callerPublicKey: ByteVector, payments: List[AttachedPayment], transactionId: ByteVector, fee: Int, feeAssetId: ByteVector|Unit)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | caller | [Address](/ru/ride/v5/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) аккаунта, который отправил транзакцию |
| 2 | callerPublicKey | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Открытый ключ аккаунта, который отправил транзакцию |
| 3 | payment | [AttachedPayment](/ru/ride/v5/structures/common-structures/attached-payment)&#124;[Unit](/ru/ride/v5/data-types/unit) | Приложенный платеж.<br>:warning: Поле удалено в Стандартной библиотеке версии 4 |
| 3 | payments | List[[AttachedPayment](/ru/ride/v5/structures/common-structures/attached-payment)] | Приложенные платежи.<br>Поле добавлено в Стандартной библиотеке версии 4 |
| 4 | transactionId | [ByteVector](/ru/ride/v5/data-types/byte-vector) | ID транзакции |
| 5 | fee | [Int](/ru/ride/v5/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 6 | feeAssetId | [ByteVector](/ru/ride/v5/data-types/byte-vector)&#124;[Unit](/ru/ride/v5/data-types/unit) | [Токен](/ru/blockchain/token/) комиссии за отправку транзакции |

## Пример: обработка платежей (для версии 4)

Следующая функция проверяет, что первый платеж в транзакции вызова скрипта составляет не менее 1 WAVES или 5 в указанном ассете.

```scala
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}

func isPaymentOk(i: Invocation) = {
  let acceptableAssetId = base58'3JmaWyFqWo8YSA8x3DXCBUW7veesxacvKx19dMv7wTMg'
  if (size(i.payments) == 0) then {
    throw("Payment not attached")
  } else {
    let p = i.payments[0]
    match p.assetId {
      case assetId: ByteVector => assetId == acceptableAssetId && p.amount >= 500000000
      case _ => p.amount >= 100000000
    }
  }
}

@Callable(i)
func foo() = {
  if isPaymentOk(i) then [] else throw("Wrong payment amount or asset")
}
```