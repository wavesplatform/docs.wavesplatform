# [Ride v5] Invocation

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/structures/common-structures/invocation)

Structure that contains the fields of the script invocation that the [callable function](/en/ride/v5/functions/callable-function) can use.

## Constructor

```ride
Invocation(caller: Address, callerPublicKey: ByteVector, payments: List[AttachedPayment], transactionId: ByteVector, fee: Int, feeAssetId: ByteVector|Unit)
```

## Fields

The field  values depend on how the callable function is invoked.

If the callable function is invoked by an [Invoke Script transaction](/en/blockchain/transaction-type/invoke-script-transaction):

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | caller | [Address](/en/ride/v5/structures/common-structures/address) | [Address](/en/blockchain/account/) of the account that sent the transaction |
| 2 | callerPublicKey | [ByteVector](/en/ride/v5/data-types/byte-vector) | Public key of the account that sent the transaction |
| 3 | payments | List[[AttachedPayment](/en/ride/v5/structures/common-structures/attached-payment)] | Payments indicated in the transaction |
| 4 | transactionId | [ByteVector](/en/ride/v5/data-types/byte-vector) | ID of the transaction |
| 5 | fee | [Int](/en/ride/v5/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 6 | feeAssetId | [ByteVector](/en/ride/v5/data-types/byte-vector)&#124;[Unit](/en/ride/v5/data-types/unit) | ID of the fee token |

If the callable function is invoked by an [Invoke](/en/ride/v5/functions/built-in-functions/dapp-to-dapp) function:

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | caller | [Address](/en/ride/v5/structures/common-structures/address) | [Address](/en/blockchain/account/) of the dApp that invokes the callable function |
| 2 | callerPublicKey | [ByteVector](/en/ride/v5/data-types/byte-vector) | Public key of the dApp that invokes the callable function |
| 3 | payments | List[[AttachedPayment](/en/ride/v5/structures/common-structures/attached-payment)] | Payments indicated in the [Invoke](/en/ride/v5/functions/built-in-functions/dapp-to-dapp) function |
| 4 | transactionId | [ByteVector](/en/ride/v5/data-types/byte-vector) | ID of the Invoke Script transaction |
| 5 | fee | [Int](/en/ride/v5/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 6 | feeAssetId | [ByteVector](/en/ride/v5/data-types/byte-vector)&#124;[Unit](/en/ride/v5/data-types/unit) | ID of the fee token |

> The `transactionId`, `fee`, and `feeAssetId` values are the same for all dApp-to-dApp invocations  within a single Invoke Script transaction.

## Example: Payments Processing

The following function checks that the first payment in the Invoke Script transaction is at least 1 WAVES or 5 in the specified asset.

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