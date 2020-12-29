# [Ride v5] Standard Library Version 5

Standard library version 5 is added in node version 1.3.0 and enabled with feature #16 “Ride V5, dApp-to-dApp invocations, Continuations”. Versions 1.3.x are now available for [Stagenet](/en/blockchain/blockchain-network/) only.

## dApp-to-dApp Invocation

A dApp callable function can invoke a callable function of another dApp, or another callable function of the same dApp, or even itself. The invoked function returns a value that the invoking function can use. The subsequent operations of invoking function are executed, taking into account script actions of invoked function (as if the actions are applied to the blockchain state). All callable functions are executed within a single Invoke Script transaction. The total complexity is limited. [More about dApp-to-dApp invocation](/en/ride/advanced/dApp-to-dApp)

Changes in Ride:

* Added the [Invoke](/en/ride/v5/functions/built-in-functions/dapp-to-dapp) function for dApp-to-dApp invocation.
* Added [strict variables](/en/ride/variables/) that are evaluated before the next expression to ensure executing callable functions and applying their actions in the right order.
* Modified the [callable function result](/en/ride/v5/functions/callable-function#invocation-result) by adding a return value.

## Continued Calculations

Added support for dApp scripts with complexity over 4000. The execution of such a script is split into several stages. The first stage of calculations is performed within the Invoke Script transaction. The further stages are performed within Continuation transactions that are created automatically by block generators. [More about continued calculations](/en/ride/advanced/continuation)

Changes in Ride: added the [account data storage functions](/en/ride/functions/built-in-functions/account-data-storage-functions) that allow the dApp script to read entries of its own data storage at any stage of the calculations:
* `getBinary(key: String): ByteVector|Unit`
* `getBinaryValue(key: String): ByteVector`
* `getBoolean(key: String): Boolean|Unit`
* `getBooleanValue(key: String): Boolean`
* `getInteger(key: String): Int|Unit`
* `getIntegerValue(key: String): Int`
* `getString(key: String): String|Unit`
* `getStringValue(key: String): String`

> Continued calculations and dApp-to-dApp invocation are mutually exclusive, that is, they cannot be initiated by the same transaction.

## Lease and LeaseCancel Script Actions

Added script actions that the callable function can perform:
* [Lease](/en/ride/v5/structures/script-actions/lease) — leases WAVES.
* [LeaseCancel](/en/ride/v5/structures/script-actions/lease-cancel) — cancels a specified lease.

Using these actions, you can change the amount of the lease, in particular, withdraw a part of the leased funds. If you cancel a lease for a larger amount and create a new lease for a smaller amount with the same recipient in the same script invocation, the recipient's generating balance decreases by the difference. Otherwise, if you send two separate transactions: a Lease Cancel transaction and a Lease transaction, the generating balance decreases by the amount of the canceled lease immediately and increases by the amount of the new lease after 1000 blocks.

Added the function [calculateLeaseId](/en/ride/v5/functions/built-in-functions/blockchain-functions#calculateleaseid) that calculates ID of the lease formed by the `Lease` structure.
