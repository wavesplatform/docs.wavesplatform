# Callable function

**Callable function** is a [dApp script](/en/ride/script/script-types/dapp-script) function which can be invoked externally by [invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction).

dApp script can contain multiple callable functions.

Callable functions features rely on [standard library](/en/ride/script/standard-library) version.

| Standard library v3 | Standard library v4 |
|---|---|
| Adding and modifying of [account data storage](/en/blockchain/account/account-data-storage) entries | Adding, modifying, deleting of [account data storage](/en/blockchain/account/account-data-storage) entries |
| Token transfers | Token transfers |
|   | Issue, reissue, burning tokens |

The invoke script transaction can have payments in favor of dApp applied. Funds obtained in this payments can be included in token transfers.

> Standard library v4 is available starting from node version 1.2.0 after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”. Node versions 1.2.x are currently available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

## Callable functions in standard library v3

### Callable function arguments

Callable function can have arguments of the following types:

* [Boolean](/en/ride/data-types/boolean),
* [ByteVector](/en/ride/data-types/byte-vector),
* [Int](/en/ride/data-types/int),
* [String](/en/ride/data-types/string),
* [Union](/en/ride/data-types/union) with elements whose types are listed above.

### Callable function invocation results

Callable function invocation results are actions (adding entry, token transfer etc.) which are passed as arguments to the Ride structures listed below.

| Ride structure setting the result | Description | Example |
|---|---|---|
| [WriteSet](/en/ride/structures/script-results/write-set) | Used when actions on account data storage entries set by the [DataEntry](/en/ride/structures/script-actions/data-entry) structures must be performed as the result of the callable function invocation | `WriteSet([DataEntry("key", true), DataEntry("another_key", base58'someBase58VaLue'), DataEntry("yet_another_key", 42), DataEntry("one_more_key", "value")])` |
| [TransferSet](/en/ride/structures/script-results/write-set) | Used when token transfers set by the [ScriptTransfer](/en/ride/structures/script-actions/script-transfer) structures must be performed as the result of the callable function invocation | `TransferSet([ScriptTransfer(Address(base58'3Ms8fSfAxBLDjKvNVgACRzQoBLCtCWxtawu'), 100, base58'someAssetid')])` |
| [ScriptResult](/en/ride/structures/script-results/script-result) | Used when both actions on account data storage entries and token transfers must be performed as the result of the callable function invocation, see [example](#example3) | `ScriptResult(WriteSet([DataEntry("key", true), DataEntry("other_key", base58'someBase58VaLue'), DataEntry("yet_another_key", 42), DataEntry("one_more_key", "value")]), TransferSet([ScriptTransfer(Address(base58'3Ms8fSfAxBLDjKvNVgACRzQoBLCtCWxtawu'), 100, base58'someAssetid')]))` |

### Script actions <a id="scriptactions3"></a>

Script actions executed by the callable function are set by Ride structures.

| Ride structure that sets action | Description |
|---|---|
| [DataEntry](/en/ride/structures/script-actions/data-entry) | - If in the account data storage there is no entry with the key similar to the DataEntry key, then the entry will be added.<br>- If in the account data storage there is an entry with the key similar to the DataEntry key, then the entry will be modified |
| [ScriptTransfer](/en/ride/structures/script-actions/script-transfer) | Structure setting the token transfer parameters |

### Callable function limitations

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

## Callable functions in standard library v4

### Callable function arguments

Callable function can have arguments of the following types:

* [Boolean](/en/ride/data-types/boolean),
* [ByteVector](/en/ride/data-types/byte-vector),
* [Int](/en/ride/data-types/int),
* [String](/en/ride/data-types/string),
* [Union](/en/ride/data-types/union) with elements having types listed above.
* [List](/en/ride/data-types/list) having elements of the following types:
  * [Boolean](/en/ride/data-types/boolean),
  * [ByteVector](/en/ride/data-types/byte-vector),
  * [Int](/en/ride/data-types/int),
  * [String](/en/ride/data-types/string),
  * [List](/en/ride/data-types/list).

### Callable function invocation results

Callable function invocation results are actions (adding entry, token transfer etc.) which are enclosed to a list.

| Ride structure setting the result | Description | Example |
|---|---|---|
| [List](/en/ride/data-types/list) | Combines [callable function actions](#scriptactions4) which must be executed, see the [example](#example4). Actions execution order will correspond to the list elements order | `[BooleanEntry("key1", true), IntegerEntry("key2", 42), StringEntry("key3", "some string"), BinaryEntry("key4", base58'encoded'), DeleteEntry("key4"), ScriptTransfer(Address(base58'3Ms8fSfAxBLDjKvNVgACRzQoBLCtCWxtawu'), 100, base58'someAssetid'), Issue("RegularToken", "This is an ordinary token", 10000, 2, true, unit), Reissue("4ZzED8WJXsvuo2MEm2BmZ87Azw8Sx7TVC6ufSUA5LyTV", true, 1000), Burn("4ZzED8WJXsvuo2MEm2BmZ87Azw8Sx7TVC6ufSUA5LyTV", 1000)]` |

### Script actions <a id="scriptactions4"></a>

Script actions executed by the callable function are set by Ride structures.

| Ride structure that sets action | Description |
|---|---|
| - [BinaryEntry](/en/ride/structures/script-actions/binary-entry)<br>- [BooleanEntry](/en/ride/structures/script-actions/boolean-entry)<br>- [IntegerEntry](/en/ride/structures/script-actions/int-entry)<br>- [StringEntry](/en/ride/structures/script-actions/string-entry) | Structures setting the parameters of adding/modifying of the entry. The type of structure must match the type of entry to be added/changed.<br>- If there is no entry in the account data storage with the key specified in the structure, the entry will be added.<br>- If the entry is present in the account data storage, it will be modified |
| [DeleteEntry](/en/ride/structures/script-actions/delete-entry) | Structure for the entry deletion |
| [Issue](/en/ride/structures/script-actions/issue) | Structure setting the parameters of token issue |
| [Reissue](/en/ride/structures/script-actions/reissue) | Structure setting the parameters of token reissue |
| [Burn](/en/ride/structures/script-actions/burn) | Structure setting the parameters of token burn |
| [ScriptTransfer](/en/ride/structures/script-actions/script-transfer) | Structure setting the parameters of token transfer |

### Callable function limitations

* Amount of dApp account data storage entries which can be added/modified/deleted within the single invoke script transaction - up to 100.
* Amount of token issue/reissue/burn/transfer operations which can be performed by the dApp within single invoke script transaction — up to 10.
* Amount of the payments in favor of dApp which are attached to the invoke script transaction — 2.

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
 let pmt = extract(i.payments[0])
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
