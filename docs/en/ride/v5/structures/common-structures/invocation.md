# Invocation

Structure that contains the fields of the [invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction) that can be used by the [callable function](/en/ride/functions/callable-function).

## Constructor

For [Standard library](/en/ride/script/standard-library) **version 3**:

```ride
Invocation(caller: Address, callerPublicKey: ByteVector, payment: AttachedPayment|Unit, transactionId: ByteVector, fee: Int, feeAssetId: ByteVector|Unit)
```

For Standard library **version 4**:

```ride
Invocation(caller: Address, callerPublicKey: ByteVector, payments: List[AttachedPayment], transactionId: ByteVector, fee: Int, feeAssetId: ByteVector|Unit)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | caller | [Address](/en/ride/structures/common-structures/address) |  The [account](/en/blockchain/account/) that sent a transaction |
| 2 | callerPublicKey | [ByteVector](/en/ride/data-types/byte-vector) | Public key of an account that sent a transaction |
| 3 | payment | [AttachedPayment](/en/ride/structures/common-structures/attached-payment)&#124;[Unit](/en/ride/data-types/unit) | Attached payment.<br>:warning: The field is deleted in Standard library version 4 |
| 3 | payments | List[[AttachedPayment](/en/ride/structures/common-structures/attached-payment)] | Attached payment.<br>The field is added in Standard library version 4 |
| 4 | transactionId | [ByteVector](/en/ride/data-types/byte-vector) | ID of a transaction |
| 5 | fee | [Int](/en/ride/data-types/int) | Transaction fee |
| 6 | feeAssetId | [ByteVector](/en/ride/data-types/byte-vector)&#124;[Unit](/en/ride/data-types/unit) | [Token](/en/blockchain/token/) of a transaction fee |

## Example: Payments Processing (version 4)

The following function checks that the first payment in the Invoke Script transaction is at least 1 WAVES or 5 in the specified asset.

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