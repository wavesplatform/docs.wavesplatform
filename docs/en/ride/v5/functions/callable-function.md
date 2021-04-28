# [Ride v5] Callable Function

:warning: This is the documentation for the Standard Library **version 5**, which becomes available after activation of feature #16 “Ride V5, dApp-to-dApp invocations”. [Go to version 4](/en/ride/functions/callable-function)

**Callable function** is a [dApp script](/en/ride/script/script-types/dapp-script) function which can be invoked by an [Invoke Script transaction](/en/blockchain/transaction-type/invoke-script-transaction) or an `invoke` or `reentrantInvoke` functions (see details in the [dApp-to-dApp Invocation](/en/ride/v5/functions/built-in-functions/dapp-to-dapp) article).

dApp script can contain multiple callable functions.

The callable function can perform the following actions:

* Add, modify, delete dApp [account data storage](/en/blockchain/account/account-data-storage) entries.
* Transfer tokens.
* Issue tokens on behalf of the dApp, reissue and burn tokens.
* Setup [sponsorship](/en/blockchain/waves-protocol/sponsored-fee).
* Lease, cancel lease.

> Available script actions depend on [Standard library](/en/ride/script/standard-library) version used.

The callable function can return a value that is passed to the invoking function in case of the [dApp-to-dApp invocation](/en/ride/advanced/dapp-to-dapp).

The invocation can contain payments to dApp. Tokens obtained in these payments can be used in script actions performed by the callable function and in payments attached to nested invocations.

:warning: The fee for the Invoke Script transaction cannot be funded by transfer from the dApp to the transaction sender after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”. If sender's balance is insufficient to pay the fee, dApp script is not executed.

## Annotation

The callable function should be marked with the `@Callable(i)` annotation, where `i` is an [Invocation](/en/ride/v5/structures/common-structures/invocation) structure that contains invocation fields that are available to the callable function. The variable name in the annotation is required even if the callable function does not use it.

## Arguments

The callable function can have arguments of the following types:

* [Boolean](/en/ride/v5/data-types/boolean),
* [ByteVector](/en/ride/v5/data-types/byte-vector),
* [Int](/en/ride/v5/data-types/int),
* [String](/en/ride/v5/data-types/string),
* [Union](/en/ride/v5/data-types/union) with elements having types listed above.
* [List](/en/ride/v5/data-types/list) having elements of the following types:
  * [Boolean](/en/ride/v5/data-types/boolean),
  * [ByteVector](/en/ride/v5/data-types/byte-vector),
  * [Int](/en/ride/v5/data-types/int),
  * [String](/en/ride/v5/data-types/string),
  * [List](/en/ride/v5/data-types/list).

### Invocation Result

The callable function invocation result is a [Tuple](/en/ride/v5/data-types/tuple) of two elements:
* List of script actions. Actions are executed in the same order as the elements in the list.
* Return value that is passed to the invoking function in case of the [dApp-to-dApp invocation](/en/ride/advanced/dapp-to-dapp).

Example:

```scala
(
  [
    BooleanEntry("key1", true),
    IntegerEntry("key2", 42),
    StringEntry("key3", "some string"),
    BinaryEntry("key4", base58'encoded'),
    DeleteEntry("key5"),
    ScriptTransfer(Address(base58'3Ms8fSfAxBLDjKvNVgACRzQoBLCtCWxtawu'), 100, base58'someAssetid'),
    Issue("RegularToken", "This is an ordinary token", 10000, 2, true),
    Reissue("4ZzED8WJXsvuo2MEm2BmZ87Azw8Sx7TVC6ufSUA5LyTV", 1000, true),
    Burn("4ZzED8WJXsvuo2MEm2BmZ87Azw8Sx7TVC6ufSUA5LyTV", 1000)]
    SponsorFee("4ZzED8WJXsvuo2MEm2BmZ87Azw8Sx7TVC6ufSUA5LyTV", 300),
    Lease(Address(base58'3Mn5hzck8nYd52Ytd2ZjzoiQLVoMcn1VAs9',1000),
    LeaseCancel(base58'Pxaf8pGKHS5ufGhqjmwRRcHQtC9T3h4d1XaJMnkhR1Vt')
  ],
  42
)
```

## Script Action

Script actions performed by the callable function are set by Ride structures.

| Ride structure that sets action | Description |
|---|---|
| [BinaryEntry](/en/ride/v5/structures/script-actions/binary-entry)<br>[BooleanEntry](/en/ride/v5/structures/script-actions/boolean-entry)<br>[IntegerEntry](/en/ride/v5/structures/script-actions/int-entry)<br>[StringEntry](/en/ride/v5/structures/script-actions/string-entry) | Adding/modifying the entry. The type of structure must match the type of entry to be added/changed.<br>- If there is no entry in the account data storage with the key specified in the structure, the entry will be added.<br>- If the entry is present in the account data storage, it will be modified |
| [DeleteEntry](/en/ride/v5/structures/script-actions/delete-entry) | Entry deletion |
| [Issue](/en/ride/v5/structures/script-actions/issue) | Token issue |
| [Lease](/en/ride/v5/structures/script-actions/lease) | Lease |
| [LeaseCancel](/en/ride/v5/structures/script-actions/issue) | Lease cancellation |
| [Reissue](/en/ride/v5/structures/script-actions/reissue) | Token reissue |
| [Burn](/en/ride/v5/structures/script-actions/burn) | Token burn |
| [SponsorFee](/en/ride/v5/structures/script-actions/sponsor-fee) | Sponsorship setup |
| [ScriptTransfer](/en/ride/v5/structures/script-actions/script-transfer) | Token transfer |

### Limitations

* The maximum total number of `Issue`, `Reissue`, `Burn`, `SponsorFee`, `ScriptTransfer`, `Lease`, `LeaseCancel` script actions executed by all callable functions in a single transaction is 30.
* The maximum total number of `BinaryEntry`, `BooleanEntry`, `IntegerEntry`, `StringEntry`, `DeleteEntry` script actions executed by all callable functions in a single transaction is 100.
* The maximum number of the payments to dApp in invocation is 10.

See also the [Limitations](/en/ride/v5/limits/) article.

### Example

The example listed below is a wallet application which allows to send [WAVES](/en/blockchain/token/waves) to a certain address and withdraw them (withdrawing others' WAVES is prevented). There are two callable functions in the example:

* `deposit` — deposits the tokens.
* `withdraw` — withdraws the tokens.

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}

@Callable(i)
func deposit() = {
  let pmt =
    if i.payments.size() == 1 then
      i.payments[0]
    else throw("Attached payment is required")
  if (isDefined(pmt.assetId))
    then throw("works with waves only")
    else {
     let currentKey = toBase58String(i.caller.bytes)
     let currentAmount = match getInteger(this, currentKey) {
       case a:Int => a
       case _ => 0
     }
     let newAmount = currentAmount + pmt.amount
     (
       [
         IntegerEntry(currentKey, newAmount)
       ],
       unit
     )
   }
}

@Callable(i)
func withdraw(amount: Int) = {
  let currentKey = toBase58String(i.caller.bytes)
  let currentAmount = match getInteger(this, currentKey) {
    case a:Int => a
    case _ => 0
  }
  let newAmount = currentAmount - amount
  if (amount < 0)
    then throw("Can't withdraw negative amount")
    else if (newAmount < 0)
      then throw("Not enough balance")
      else (
        [
          IntegerEntry(currentKey, newAmount),
          ScriptTransfer(i.caller, amount, unit)
        ],
        unit
      )
}

@Verifier(tx)
func verify() = false
```

## Threshold for Saving Failed Transactions

The Invoke Script transaction is saved on the blockchain and a fee is charged for it even if the dApp script or the asset script failed, provided that the sender's signature or account script verification passed.

However, if the callable function failed with an error or [throwing an exception](/en/ride/exceptions) before the [complexity](/en/ride/base-concepts/complexity) of performed computations exceeded the [threshold for saving failed transactions](/en/ride/v5/limits/), the transaction is rejected and the fee is not charged.

This rule is applied after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions” and doesn't depend on the Standard library version used. Keep it in mind when developing a dApp script. For more information, see the [Transaction Validation](/en/blockchain/transaction/transaction-validation) article.
