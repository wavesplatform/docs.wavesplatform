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
* All invoked callable functions are executed within a single Invoke Script transaction.
* A dApp-to-dApp invocation can contain payments that are transferred from the balance of the invoking dApp to the balance of the invoked dApp.
* Payments attached to a callable function invocation can be used in script actions and in payments attached to nested invocations.

## Conditions

* dApp-to-dApp invocations are added in node version 1.3.0 and enabled with feature #16 “dApp-to-dApp invocations, Ride V5”. Versions 1.3.x are now available for [Stagenet](/en/blockchain/blockchain-network/) only.
* The invoking dApp script uses [Standard library](/en/ride/script/standard-library) **version 5**.
* If the dApp invokes itself, the invocation must not contain payments.
* The invocation stack must not contain invocations of the same dApp with invocations of another dApp between them.

   <details>
      <summary>Details</summary>

   The following invocation sequences will fail:


   ```
   → dApp A
      → dapp B
          → dApp A
   ```

   ```
   → dApp A
      → dapp B
          → dApp C
             → dApp D
                → dApp B
   ```

   The following invocation sequences are valid:

   ```
   → dApp A
      → dapp B
          → dApp B
   ```

   ```
   → dApp A
      → dapp B
      → dApp B
   ```

   ```
   → dapp A
       → dapp B
          → dapp D
       → dapp С
         → dapp B
         → dapp D
   ```
   </details>

* The number of the [Invoke](#invoke-function) function calls is up to 100 within a single Invoke Script transaction.
* The maximum total number of `Issue`, `Reissue`, `Burn`, `SponsorFee`, `ScriptTransfer`, `Lease`, `LeaseCancel` script actions executed by all callable functions in a single transaction is 30.
* The maximum total number of `BinaryEntry`, `BooleanEntry`, `IntegerEntry`, `StringEntry`, `DeleteEntry` script actions executed by all callable functions in a single transaction is 100.
* The total complexity is limited by 28,000 for all callable functions and asset scripts of involved smart assets. The sender's account script complexity is not included in that limit.

<!-- > Continued computations and dApp-to-dApp invocation are mutually exclusive, that is, they cannot be initiated by the same transaction.-->

## Strict Variable

`strict` keyword defines a variable with eager evaluation. Unlike lazy variables defined with `let`, a strict variable is evaluated immediately when script execution reaches it, that is, before the next expression.

## Invoke Function

```
Invoke(dApp: Address|Alias, function: String, arguments: List[Any], payments: List[AttachedPayments]): Any
```

Parameters:

| Parameter | Description |
| :--- | :--- |
| dApp: [Address](/en/ride/v5/structures/common-structures/address)&#124;[Alias](/en/ride/v5/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of a dApp to invoke |
| function: [String](/en/ride/v5/data-types/string)&#124;[Unit](/en/ride/v5/data-types/unit) | Name of a callable function. `unit` for a default function invocation |
| arguments: [List](/en/ride/v5/data-types/list)[[Any](/en/ride/v5/data-types/any)] | Parameters of a callable function. `unit` for a default function invocation |
| payments: [List](/en/ride/v5/data-types/list)[[AttachedPayment](/en/ride/v5/structures/common-structures/attached-payment)] | Payments to transfer from the invoking dApp to the invoked dApp, up to 10 |

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
| 3 | originalCaller | [Address](/en/ride/v5/structures/common-structures/address) | Address of the account that sent the Invoke Script transaction |
| 4 | originalCallerPublicKey | [ByteVector](/en/ride/v5/data-types/byte-vector) | Public key of the account that sent the Invoke Script transaction |
| 5 | payments | List[[AttachedPayment](/en/ride/v5/structures/common-structures/attached-payment)] | Payments indicated in the [Invoke](/en/ride/v5/functions/built-in-functions/dapp-to-dapp) function |
| 6 | transactionId | [ByteVector](/en/ride/v5/data-types/byte-vector) | ID of the Invoke Script transaction |
| 7 | fee | [Int](/en/ride/v5/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 8 | feeAssetId | [ByteVector](/en/ride/v5/data-types/byte-vector)&#124;[Unit](/en/ride/v5/data-types/unit) | ID of the fee token |

## Callable Function Result

In Standard library version 5, a callable function result is a [Tuple](/en/ride/v5/data-types/tuple) of two elements:

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

## Updating Balance and Account Data Storage Entries

If the callable function invoked by the `Invoke` function performs script actions, the results of those actions are available to the invoking function:
* If the invoked function adds an entry to the account's data storage, the invoking function can obtain the entry after the invocation.
* If the invoked function deletes an entry from the account's data storage, the invoking function cannot obtain the entry after the invocation.
* If the invoked function performs actions with tokens (transfer, release/issue/burn, and others) and the invoking function obtains balances after the invocation, it receives the updated balances.

## Transaction Fail

If the callable function's execution fails or [throws an exception](/en/ride/v5/functions/built-in-functions/exception-functions), the Invoke Script transaction could be rejected or saved on the blockchain as failed. This depends on whether the complexity of performed computations has exceeded the [threshold for saving a failed transaction](/en/ride/v5/limits/) (currently 1000). The complexity is summed up for all invocations.

Consider the example: callable function 1 performs computations of 800 complexity, then invokes callable function 2 which performs computations of 300 complexity and then fails. The complexity 800 + 300 has exceeded the threshold, so the transaction is saved as failed, and the sender is charged a fee.

If the total complexity of executed callable functions and asset scripts exceeds the limit of 28,000, the transaction is saved as failed as well. For example, if the complexity of executed callable functions is 25,000 in total, and there is a smart asset in script action whose script's complexity is 3500.

In case of failure, no payments and script actions are applied to the blockchain state, even if some of the invoked functions are executed completely. The only state change the failed transaction entails is charging the fee.
