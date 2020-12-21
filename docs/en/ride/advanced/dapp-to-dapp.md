# [Ride v5] dApp-to-App Invocation

A dApp callable function can invoke a callable function of another dApp, or another callable function of the same dApp, or even itself. The invocation is synchronous. The invoked function returns a value that the invoking function can use.

dApp-to-dApp invocation is processed as follows:

1. A user sends an Invoke Script transaction that invokes the callable function 1.
2. The callable function 1 invokes the callable function 2 via a [strict variable](#strict-variable) initialized by the [Invoke](#invoke-function) function.
3. The callable function 2 is executed; the script actions and [return value](#callable-function-result) are calculated.
4. The return value is assigned to the strict variable. The subsequent operations of callable function 1 are executed, taking into account script actions of callable function 2 (as if the actions are applied to the blockchain state).
5. Finally, the script actions of callable functions 2 and 1 are applied to the blockchain state.

Features:

* dApp-to-dApp invocations can be nested.
* A dApp-to-dApp invocation can contain payments that will be transferred from the balance of the invoking dApp to the balance of the invoked dApp.
* All invoked callable functions are executed within a single Invoke Script transaction.

## Conditions

* dApp-to-dApp invocations are added in node version 1.3.0 and enabled with feature #16 “Continuations”. Versions 1.3.x are now available for [Stagenet](/en/blockchain/blockchain-network/) only.
* The invoking dApp script uses [Standard library](/en/ride/script/standard-library) **version 5**.
* If the dApp invokes itself, the invocation must not contain payments.
* The total complexity is limited by 52,000 for all callable functions and asset scripts of involved smart assets. The sender's account script complexity is not included in that limit.

> Continued calculations and dApp-to-dApp invocation are mutually exclusive, that is, they cannot be initiated by the same transaction.

## Fee 

The minimum fee for the Invoke Script transaction is increased by 0.005 WAVES for each dApp-to-dApp invocation.

## Strict Variable

`strict` keyword defines a variable with eager evaluation. Unlike lazy variables defined with `let`, a strict variable is evaluated immediately when script execution reaches it, that is, before the next expression.

## Invoke Function

```
Invoke(dApp: Address|Alias, function: String, arguments: List[Boolean|ByteVector|Int|String|List[Boolean|ByteVector|Int|String]], payments: List[AttachedPayments]): Any
```

Parameters:

| Parameter | Description |
| :--- | :--- |
| dApp: [Address](/en/ride/v5/structures/common-structures/address)&#124;[Alias](/en/ride/v5/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of a dApp to invoke |
| function: [String](/en/ride/v5/data-types/string) | Name of a callable function |
| arguments: [List](/en/ride/v5/data-types/list)[[Boolean](/en/ride/v5/data-types/boolean)&#124;[ByteVector](/en/ride/data-types/byte-vector)&#124;[Int](/en/ride/data-types/int)&#124;[String](/en/ride/data-types/string)&#124;[List](/en/ride/data-types/list)[[Boolean](/en/ride/data-types/boolean)&#124;[ByteVector](/en/ride/data-types/byte-vector)&#124;[Int](/en/ride/data-types/int)&#124;[String](/en/ride/data-types/string)]] | Parameters of a callable function |
| payments: [List](/en/ride/data-types/list)[[AttachedPayment](/en/ride/structures/common-structures/attached-payment)] | Payments to transfer from the invoking dApp to the invoked dApp, up to 2 |

```
strict z = Invoke(dapp,foo,args,[AttachedPayment(unit,100000000)])
```

For details, see the [dApp-to-dApp Invocation Function](/en/ride/v5/functions/built-in-functions/dapp-to-dapp) article.

## Invocation Fields

For dApp-to-dApp invocation, the fields of [Invocation](/en/ride/v5/structures/common-structures/invocation) structure used by the invoked function are filled with the following values:

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | caller | [Address](/en/ride/v5/structures/common-structures/address) | [Address](/en/blockchain/account/) of the dApp that invokes the callable function |
| 2 | callerPublicKey | [ByteVector](/en/ride/v5/data-types/byte-vector) | Public key of the dApp that invokes the callable function |
| 3 | payments | List[[AttachedPayment](/en/ride/v5/structures/common-structures/attached-payment)] | Payments indicated in the [Invoke](/en/ride/v5/functions/built-in-functions/dapp-to-dapp) function |
| 4 | transactionId | [ByteVector](/en/ride/v5/data-types/byte-vector) | ID of the Invoke Script transaction |
| 5 | fee | [Int](/en/ride/v5/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 6 | feeAssetId | [ByteVector](/en/ride/v5/data-types/byte-vector)&#124;[Unit](/en/ride/v5/data-types/unit) | ID of the fee token |

## Callable Function Result

In Standard library version 5, a callable function result is a [Tuple](https://docs.waves.tech/en/ride/data-types/tuple) of two elements:

1. List of script actions.
2. Return value that is passed to the invoking function.

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

For details, see the [Callable Function](/en/ride/v5/functions/callable-function) article.

### Transaction Fail

If the callable function's execution fails or [throws an exception](/en/ride/v5/functions/built-in-functions/exception-functions), the Invoke Script transaction could be rejected or saved on the blockchain as failed. This depends on whether the complexity of performed calculations has exceeded the [threshold for saving a failed transaction](/en/ride/v5/limits/) (currently 1000). The complexity is summed up for all invocations.

Consider the example: callable function 1 performs calculations of 800 complexity, then invokes callable function 2 which performs calculations of 300 complexity and then fails. The complexity 800 + 300 has exceeded the threshold, so the transaction is saved as failed, and the sender is charged a fee.

If the total complexity of executed callable functions and asset scripts exceeds the limit of 52,000, the transaction is saved as failed as well. For example, if the complexity of executed callable functions is 50,000 in total, and there is a smart asset in script action whose script's complexity is 2500.

In case of failure, no payments and script actions are applied to the blockchain state, even if some of the invoked functions are executed completely. The only state change the failed transaction entails is charging the fee.
