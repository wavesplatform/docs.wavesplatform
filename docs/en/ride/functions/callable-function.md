# Callable function

**Callable function** is a [dApp script](/en/ride/script/script-types/dapp-script) function which can be invoked externally by [invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction).

dApp script can contain multiple callable functions.

Callable functions features rely on [standard library](/en/ride/script/standard-library) version:

| Standard library v3 | Standard library v4 |
|---|---|
| Adding and modifying of [account data storage](/en/blockchain/account/account-data-storage) entries | Adding, modifying, deleting of [account data storage](/en/blockchain/account/account-data-storage) entries |
| Token transfers | Token transfers |
|   | Issue, reissue, burning tokens |
|   | [Sponsorship](/en/blockchain/waves-protocol/sponsored-fee) setup |

The invoke script transaction can have payments in favor of dApp applied. Funds obtained in this payments can be included in token transfers.

> Standard library v4 is available starting from node version 1.2.0 after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.

:warning: After activation of the feature #15, the fee for the invoke script transaction cannot be funded by transfer from the dApp to the transaction sender. If sender's balance is insufficient to pay the fee, dApp script is not executed.

## Annotation

The callable function should be marked with the `@Callable(i)` annotation, where `i` is an [Invocation](/en/ride/v5/structures/common-structures/invocation) structure that contains invoke script transaction fields that are available to the callable function. The variable name in the annotation is required even if the called function does not use it.

## Version 3

### Arguments

Callable function can have arguments of the following types:

* [Boolean](/en/ride/v5/data-types/boolean),
* [ByteVector](/en/ride/v5/data-types/byte-vector),
* [Int](/en/ride/v5/data-types/int),
* [String](/en/ride/v5/data-types/string),
* [Union](/en/ride/v5/data-types/union) with elements whose types are listed above.

### Invocation result

Callable function invocation result in Standard library version 3 is one of the following structures:

* [WriteSet](/en/ride/v5/structures/script-results/write-set) — contains a list of actions for account data storage entries.

   Example:
   
   ```
   WriteSet([
         DataEntry("key", true),
         DataEntry("another_key", base58'someBase58VaLue'),
         DataEntry("yet_another_key", 42),
         DataEntry("one_more_key", "value")
      ])
   ```

* [TransferSet](/en/ride/v5/structures/script-results/transfer-set) — contains a list of transfers.

   Example:

   ```
   TransferSet([ScriptTransfer(Address(base58'3Ms8fSfAxBLDjKvNVgACRzQoBLCtCWxtawu'), 100, base58'someAssetid')])
   ```

* [ScriptResult](/en/ride/v5/structures/script-results/script-result) — contains `WriteSet` and `TransferSet` structures.

   Example:

   ```
   ScriptResult(
        WriteSet([
          DataEntry("key", true),
          DataEntry("other_key", base58'someBase58VaLue'),
          DataEntry("yet_another_key", 42), DataEntry("one_more_key", "value")
        ]),
        TransferSet([ScriptTransfer(Address(base58'3Ms8fSfAxBLDjKvNVgACRzQoBLCtCWxtawu'), 100, base58'someAssetid')])
      )
   ```

### Script actions <a id="scriptactions3"></a>

Script actions executed by the callable function are set by Ride structures.

| Ride structure that sets action | Description |
|---|---|
| [DataEntry](/en/ride/v5/structures/script-actions/data-entry) | - If in the account data storage there is no entry with the key similar to the DataEntry key, then the entry will be added.<br>- If in the account data storage there is an entry with the key similar to the DataEntry key, then the entry will be modified |
| [ScriptTransfer](/en/ride/v5/structures/script-actions/script-transfer) | Token transfer |

### Limitations

* Amount of dApp account data storage entries which can be added/modified within the single invoke script transaction - up to 100.
* Amount of token transfers which can be performed by the dApp within single invoke script transaction — up to 10.
* Amount of the payments in favor of dApp which are attached to the invoke script transaction — 1.

### Example <a id="example3"></a>

The example listed below is a wallet application which allows to send [WAVES](/en/blockchain/token/waves) to certain address and withdraw them (withdrawing others' WAVES is prevented). There are two callable functions in the example:

* `deposit` — provides desposit of the tokens.
* `withdraw` — provides withdraw of the tokens.

```
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
@Callable(i)
func deposit() = {
 let pmt = extract(i.payment)
 if (isDefined(pmt.assetId))
    then throw("works with waves only")
    else {
     let currentKey = toBase58String(i.caller.bytes)
     let currentAmount = match getInteger(this, currentKey) {
       case a:Int => a
       case _ => 0
     }
     let newAmount = currentAmount + pmt.amount
     WriteSet([DataEntry(currentKey, newAmount)])
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
     else ScriptResult(
       WriteSet([DataEntry(currentKey, newAmount)]),
       TransferSet([ScriptTransfer(i.caller, amount, unit)])
      )
 }
@Verifier(tx)
func verify() = false
```

## Version 4

### Arguments

Callable function can have arguments of the following types:

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

### Invocation result

Callable function invocation result in Standard library version 4 is a list of script actions. Actions are executed in the same order as the elements in the list.

Example:

```
[
   BooleanEntry("key1", true),
   IntegerEntry("key2", 42),
   StringEntry("key3", "some string"),
   BinaryEntry("key4", base58'encoded'),
   DeleteEntry("key4"),
   ScriptTransfer(Address(base58'3Ms8fSfAxBLDjKvNVgACRzQoBLCtCWxtawu'), 100, base58'someAssetid'),
   Issue("RegularToken", "This is an ordinary token", 10000, 2, true),
   Reissue("4ZzED8WJXsvuo2MEm2BmZ87Azw8Sx7TVC6ufSUA5LyTV", 1000, true),
   Burn("4ZzED8WJXsvuo2MEm2BmZ87Azw8Sx7TVC6ufSUA5LyTV", 1000)]
   SponsorFee("4ZzED8WJXsvuo2MEm2BmZ87Azw8Sx7TVC6ufSUA5LyTV", 300)
]
```

### Script actions <a id="scriptactions4"></a>

Script actions executed by the callable function are set by Ride structures.

| Ride structure that sets action | Description |
|---|---|
| - [BinaryEntry](/en/ride/v5/structures/script-actions/binary-entry)<br>- [BooleanEntry](/en/ride/v5/structures/script-actions/boolean-entry)<br>- [IntegerEntry](/en/ride/v5/structures/script-actions/int-entry)<br>- [StringEntry](/en/ride/v5/structures/script-actions/string-entry) | Adding/modifying of the entry. The type of structure must match the type of entry to be added/changed.<br>- If there is no entry in the account data storage with the key specified in the structure, the entry will be added.<br>- If the entry is present in the account data storage, it will be modified |
| [DeleteEntry](/en/ride/v5/structures/script-actions/delete-entry) | Entry deletion |
| [Issue](/en/ride/v5/structures/script-actions/issue) | Token issue |
| [Reissue](/en/ride/v5/structures/script-actions/reissue) | Token reissue |
| [Burn](/en/ride/v5/structures/script-actions/burn) | Token burn |
| [SponsorFee](/en/ride/v5/structures/script-actions/sponsor-fee) | Sponsorship setup |
| [ScriptTransfer](/en/ride/v5/structures/script-actions/script-transfer) | Token transfer |

### Limitations

* The maximum number of `BinaryEntry`, `BooleanEntry`, `IntegerEntry`, `StringEntry`, `DeleteEntry` that are executed by callable function is 100.
* The maximum number of `Issue`, `Reissue`, `Burn`, `SponsorFee`, `ScriptTransfer` that are executed by callable function is 10.
* The maximum number of the payments in favor of dApp which are attached to the invoke script transaction is 2.

### Example <a id="example4"></a>

The example listed below is a wallet application which allows to send [WAVES](/en/blockchain/token/waves) to certain address and withdraw them (withdrawing others' WAVES is prevented). There are two callable functions in the example:

* `deposit` — provides desposit of the tokens.
* `withdraw` — provides withdraw of the tokens.

```
{-# STDLIB_VERSION 4 #-}
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
     let newAmount = currentAmount + pmt.amount;
     [IntegerEntry(currentKey, newAmount)]
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
     else [
       IntegerEntry(currentKey, newAmount),
       ScriptTransfer(i.caller, amount, unit)
      ]
}

@Verifier(tx)
func verify() = false
```

## Threshold for Saving Failed Transactions

After activation of feature # 15 “Ride V4, VRF, Protobuf, Failed transactions” the invoke script transaction is saved on the blockchain and a fee is charged for it even if the dApp script or the asset script failed, provided that the sender's signature or account script verification passed.

However if the callable function failed with an error or [throwing an exception](/en/ride/exceptions) before the [complexity](/en/ride/base-concepts/complexity) of performed calculations exceeded the [threshold for saving failed transactions](/en/ride/v5/limits/), the transaction is rejected and the fee is not charged.

This rule doesn't depend on the Standard library version used. Keep it in mind when developing a dApp script. For more information, see the [Transaction Validation](/en/blockchain/transaction/transaction-validation) article.
