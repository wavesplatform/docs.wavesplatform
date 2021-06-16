# [Ride v5] Standard Library Version 5

Standard library version 5 is added in node version 1.3.0 and enabled with feature #16 “Ride V5, dApp-to-dApp invocations”.

## dApp-to-dApp Invocation

A dApp callable function can invoke a callable function of another dApp, or another callable function of the same dApp, or even itself. The invoked function returns a value that the invoking function can use. The subsequent operations of invoking function are executed, taking into account script actions of invoked function (as if the actions are applied to the blockchain state). All callable functions are executed within a single Invoke Script transaction. The total complexity is limited. [More about dApp-to-dApp invocation](/en/ride/advanced/dapp-to-dapp)

Changes in Ride:

* Added the functions for dApp-to-dApp invocation:
   * [invoke](/en/ride/v5/functions/built-in-functions/dapp-to-dapp#invoke)
   * [reentrantInvoke](/en/ride/v5/functions/built-in-functions/dapp-to-dapp#reentrantinvoke)
* Added [strict variables](/en/ride/v5/variables/) that are evaluated before the next expression to ensure executing callable functions and applying their actions in the right order.
* Modified the [Invocation](/en/ride/v5/structures/common-structures/invocation) structure: in case of dApp-to-dApp invocation, the structure contains the address and public key of both the sender of the Invoke Script transaction and the dApp account that invokes the callable function.
* Modified the [callable function result](/en/ride/v5/functions/callable-function#invocation-result) by adding a return value.

## Lease and LeaseCancel Script Actions

Added script actions that the callable function can perform:
* [Lease](/en/ride/v5/structures/script-actions/lease) — leases WAVES.
* [LeaseCancel](/en/ride/v5/structures/script-actions/lease-cancel) — cancels a specified lease.

Using these actions, you can change the amount of the lease, in particular, withdraw a part of the leased funds. If you cancel a lease for a larger amount and create a new lease for a smaller amount with the same recipient in the same script invocation, the recipient's generating balance decreases by the difference. Otherwise, if you send two separate transactions: a Lease Cancel transaction and a Lease transaction, they can be added to a different blocks and therefore generating balance decreases by the amount of the canceled lease immediately and increases by the amount of the new lease after 1000 blocks.

Added the function [calculateLeaseId](/en/ride/v5/functions/built-in-functions/blockchain-functions#calculateleaseid) that calculates ID of the lease formed by the `Lease` structure.

## Big Integers

Added the [BigInt](/en/ride/v5/data-types/bigint) data type of 64 bytes (512 bits) and functions supporting it:

* [fraction(BigInt, BigInt, BigInt): BigInt](/en/ride/v5/functions/built-in-functions/math-functions#fractionbigint)
* [fraction(BigInt, BigInt, BigInt, Union): BigInt](/en/ride/v5/functions/built-in-functions/math-functions#fractionbigintround)
* [log(BigInt, Int, BigInt, Int, Int, Union): BigInt](/en/ride/v5/functions/built-in-functions/math-functions#logbigint)
* [max(List[BigInt]): BigInt](/en/ride/v5/functions/built-in-functions/list-functions#max-list-bigint)
* [median(List[BigInt]): BigInt](/en/ride/v5/functions/built-in-functions/math-functions#medianbigint)
* [min(List[BigInt]): BigInt](/en/ride/v5/functions/built-in-functions/list-functions#min-list-bigint)
* [pow(BigInt, Int, BigInt, Int, Int, Union): BigInt](/en/ride/v5/functions/built-in-functions/math-functions#powbigint)
* [parseBigInt(String): BigInt|Unit](/en/ride/v5/functions/built-in-functions/converting-functions#parse-bigint)
* [parseBigIntValue(String): BigInt](/en/ride/v5/functions/built-in-functions/converting-functions#parse-bigintvalue)
* [toBigInt(ByteVector): BigInt](/en/ride/v5/functions/built-in-functions/converting-functions#to-bigint-bytevector)
* [toBigInt(ByteVector, Int, Int): BigInt](/en/ride/v5/functions/built-in-functions/converting-functions#to-bigint-bytevector-int-int)
* [toBigInt(Int): BigInt](/en/ride/v5/functions/built-in-functions/converting-functions#to-bigint-int)
* [toBytes(BigInt): ByteVector](/en/ride/v5/functions/built-in-functions/converting-functions#to-bytes-bigint)
* [toInt(BigInt): Int](/en/ride/v5/functions/built-in-functions/converting-functions#to-int-bigint)
* [toString(BigInt): String](/en/ride/v5/functions/built-in-functions/converting-functions#to-string-bigint)

## Miscellaneous

Added the following built-in functions:

* [isDataStorageUntouched](/en/ride/v5/functions/built-in-functions/account-data-storage-functions#isdatastorageuntouched) that checks if the data storage of a given account never contained any entries.
* [scriptHash](/en/ride/v5/functions/built-in-functions/blockchain-functions#scripthash) that returns [BLAKE2b-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29) hash of the script assigned to a given account.
* [fraction(Int, Int, Int, Union): Int](/en/ride/v5/functions/built-in-functions/math-functions#fractionintround) that multiplies and divides integers to avoid overflow, applying the specified rounding method.

Added the following [account data storage functions](/en/ride/v5/functions/built-in-functions/account-data-storage-functions) that allow the dApp script to read entries of its own data storage:
* `getBinary(key: String): ByteVector|Unit`
* `getBinaryValue(key: String): ByteVector`
* `getBoolean(key: String): Boolean|Unit`
* `getBooleanValue(key: String): Boolean`
* `getInteger(key: String): Int|Unit`
* `getIntegerValue(key: String): Int`
* `getString(key: String): String|Unit`
* `getStringValue(key: String): String`

The maximum complexity of a callable function of a dApp script is changed to 10,000.
