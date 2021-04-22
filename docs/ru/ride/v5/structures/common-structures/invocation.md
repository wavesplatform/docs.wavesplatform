# [Ride v5] Invocation

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/structures/common-structures/invocation)

Структура содержит поля вызова, которые может использовать [вызываемая функция](/ru/ride/v5/functions/callable-function).

## Конструктор

```ride
Invocation(caller: Address, callerPublicKey: ByteVector, originCaller: Address, originCallerPublicKey: ByteVector, payments: List[AttachedPayment], transactionId: ByteVector, fee: Int, feeAssetId: ByteVector|Unit)
```

## Поля

Значения полей отличаются в зависимости от того, каким образом вызвана функция.

Если вызываемая функция вызвана с помощью [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction):

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | caller | [Address](/ru/ride/v5/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) аккаунта, который отправил транзакцию вызова скрипта |
| 2 | callerPublicKey | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Открытый ключ аккаунта, который отправил транзакцию вызова скрипта |
| 3 | originCaller | [Address](/ru/ride/v5/structures/common-structures/address) | Дублирует поле `caller` |
| 4 | originCallerPublicKey | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Дублирует поле `callerPublicKey` |
| 5 | payments | List[[AttachedPayment](/ru/ride/v5/structures/common-structures/attached-payment)] | Платежи, указанные в транзакции |
| 6 | transactionId | [ByteVector](/ru/ride/v5/data-types/byte-vector) | ID транзакции вызова скрипта |
| 7 | fee | [Int](/ru/ride/v5/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 8 | feeAssetId | [ByteVector](/ru/ride/v5/data-types/byte-vector)&#124;[Unit](/ru/ride/v5/data-types/unit) | ID [токена](/ru/blockchain/token/), в котором указана комиссия |

Если вызываемая функция вызвана с помощью функции `invoke` или `reentrantInvoke` (см. раздел [Вызов dApp из dApp](/ru/ride/advanced/dapp-to-dapp)):

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | caller | [Address](/ru/ride/v5/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) dApp, который вызвал функцию |
| 2 | callerPublicKey | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Открытый ключ аккаунта dApp, который вызвал функцию |
| 3 | originCaller | [Address](/ru/ride/v5/structures/common-structures/address) | Адрес аккаунта, который отправил транзакцию вызова скрипта |
| 4 | originCallerPublicKey | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Открытый ключ аккаунта, который отправил транзакцию вызова скрипта |
| 5 | payments | List[[AttachedPayment](/ru/ride/v5/structures/common-structures/attached-payment)] | Платежи, указанные в функции `invoke` or `reentrantInvoke` |
| 6 | transactionId | [ByteVector](/ru/ride/v5/data-types/byte-vector) | ID транзакции вызова скрипта |
| 7 | fee | [Int](/ru/ride/v5/data-types/int) | Комиссия за транзакцию вызова скрипта |
| 8 | feeAssetId | [ByteVector](/ru/ride/v5/data-types/byte-vector)&#124;[Unit](/ru/ride/v5/data-types/unit) | ID токена, в котором указана комиссия |

> Значения `originCaller`, `originCallerPublicKey`, `transactionId`, `fee`, `feeAssetId` одни и те же для всех вызовов dApp из dApp, выполняемых в рамках одной транзакции.

## Пример: обработка платежей

Следующая функция проверяет, что первый платеж в транзакции вызова скрипта составляет не менее 1 WAVES или 5 в указанном ассете.

```scala
{-# STDLIB_VERSION 5 #-}
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
  if isPaymentOk(i) then ([],null) else throw("Wrong payment amount or asset")
}
```