# [Ride v5] Address

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/structures/common-structures/address)

Structure of an [address](/en/blockchain/account/address).

## Constructor

``` ride
Address(bytes: ByteVector)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | bytes | [ByteVector](/en/ride/v5/data-types/byte-vector) | Array of bytes of the address |

## Examples

Get account balances in WAVES:

```scala
let address=base58'3N4iKL6ikwxiL7yNvWQmw7rg3wGna8uL6LU'
wavesBalance(Address(address))
```

Get an entry from the account data storage:

```scala
let address=base58'3N6dFJ6XBQsWz1VV1i5aW4CyYpVKc39MUGZ'
getBoolean(Address(address),"allow_orders")
```

Convert caller's address to base58 string:

```scala
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}

@Callable(i)
func foo(question: String) = {
   let callerAddress = toBase58String(i.caller.bytes)
   ...
}
```

Check the recipient's address in the Transfer transaction:

```scala
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}

# Bank dApp address
let BANK = base58'3MpFRn3X9ZqcLimFoqNeZwPBnwP7Br5Fmgs'

match (tx) {
   case t: TransferTransaction => addressFromRecipient(t.recipient).bytes == BANK
   case _ => false
}
```
