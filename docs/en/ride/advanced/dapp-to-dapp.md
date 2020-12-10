# dApp-to-App Invocation

A dApp callable function can invoke a callable function of another dApp, or another callable function of the same dApp, or even itself. The invocation is synchronous. The invoked function returns a value that the invoking function can use.

dApp-to-dApp invocation is processed as follows:

1. A user sends an Invoke Script transaction that invokes the callable function 1.
2. The callable function 1 invokes the callable function 2 via a [strict variable](/en/ride/v5/variables/) initialized by the [Invoke](/en/ride/v5/functions/built-in-functions/dapp-to-dapp) function.
3. The callable function 2 is executed; the script actions and [return value](/en/ride/v5/functions/callable-function#invokation-result) are calculated.
4. The return value is assigned to the strict variable. The subsequent operations of callable function 1 are executed, taking into account script actions of callable function 2 (as if the actions are applied to the blockchain state).
5. Finally, the script actions of callable functions 2 and 1 are applied to the blockchain state.

Features:

* dApp-to-dApp invocations can be nested.
* A dApp-to-dApp invocation can contain payments that will be transferred from the balance of the invoking dApp to the balance of the invoked dApp.
* All invoked callable functions are executed within a single Invoke Script transaction.

## Conditions

* dApp-to-dApp invocations are added in node version 1.3.0 and enabled with feature #16 “Continuations”. Versions 1.3.x are now available for [Stagenet](/en/blockchain/blockchain-network/) only.
* The invoking dApp script uses [Standard library](/en/ride/script/standard-library) **version 5**.
* The [Invoke Script](/en/blockchain/transaction) transaction version is 3.
* The total complexity is limited by 52,000 for all callable functions and asset scripts of involved smart assets. The sender's account script complexity is not included in that limit.

## Fee 

The minimum fee for the Invoke Script transaction is increased by 0.005 WAVES for each dApp-to-dApp invocation.

## Invoke Function

```
Invoke(dApp: Address|Alias, function: String, arguments: List[Boolean|ByteVector|Int|String|List[Boolean|ByteVector|Int|String]], payments: List[AttachedPayments]): T|Unit
```

Parameters:

| Parameter | Description |
| :--- | :--- |
| dApp: [Address](/en/ride/v5/structures/common-structures/address)&#124;[Alias](/en/ride/v5/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of a dApp to invoke |
| function: [String](/en/ride/v5/data-types/string) | Name of a callable function |
| arguments | [List](/en/ride/v5/data-types/list)[[Boolean](/en/ride/v5/data-types/boolean)&#124;[ByteVector](/en/ride/data-types/byte-vector)&#124;[Int](/en/ride/data-types/int)&#124;[String](/en/ride/data-types/string)&#124;[List](/en/ride/data-types/list)[[Boolean](/en/ride/data-types/boolean)&#124;[ByteVector](/en/ride/data-types/byte-vector)&#124;[Int](/en/ride/data-types/int)&#124;[String](/en/ride/data-types/string)]] | Parameters of a callable function |
| payments: [List](/en/ride/data-types/list)[[AttachedPayment](/en/ride/structures/common-structures/attached-payment)] | Payments to transfer from the invoking dApp to the invoked dApp, up to 2 |

```
strict z = Invoke(dapp,func,args,[AttachedPayment(unit,100000000)])
```

## Invocation fields

For dApp-to-dApp invocation, the fields of [Invocation](/en/ride/v5/structures/common-structures/invocation) structure used by the invoked function are filled with the following values:

| Field | Value |
| :--- | :--- |
| caller | Address of the dApp that invokes the callable function|
| callerPublicKey | Public key of the dApp that invokes the callable function|
| payments | Payments indicated in the `Invoke` function|
| transactionId<br>fee<br>feeAssetId|Values from the Invoke Script transaction, the same for all dApp-to-dApp invocations|

## Callable function result

In Standard library version 5, a callable function result is a [Tuple](https://docs.waves.tech/en/ride/data-types/tuple) of two elements:

1. List of script actions.
2. Return value.

Return is passed to the invoking function and assigned to an strict variable.

Example:

```
(
   [
      ScriptTransfer(i.caller,100,unit)
   ],
   42
)
```

In Standard library version 4 or 3, there is no return value, so `unit` is implied.

### Transaction Fail

If the callable function's execution fails or [throws an exception](/en/ride/v5/functions/built-in-functions/exception-functions), the Invoke Script transaction could be rejected or saved on the blockchain as failed. This depends on whether the complexity of performed calculations has exceeded the [threshold for saving a failed transaction](/en/ride/v5/limits/) (currently 1000). The complexity is summed up for all invocations.

Consider the example: callable function 1 performs calculations of 800 complexity, then invokes the callable function 2 which performed calculations of 300 complexity and then fails. The complexity 800 + 300 has exceeded the threshold, so the transaction is saved as failed, and the sender is charged a fee.

If the total complexity of executed callable functions and asset scripts exceeds the limit of 52,000, the transaction is saved as failed as well. For example, if the complexity of executed callable functions is 50,000 in total, and there is a smart asset in script action whose script's complexity is 2500.

In case of failure, no payments and script actions are applied to the blockchain state, even if some of the invoked functions are executed completely. The only state change the failed transaction entails is charging the fee.