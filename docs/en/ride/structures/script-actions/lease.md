# Lease

`Lease` is a structure that sets the lease parameters. The lease is performed only if the structure is included in the [callable function result](/en/ride/functions/callable-function#invocation-result-2). [More about lease](/en/blockchain/leasing)

You can get the lease ID using the [calculateLeaseId](/en/ride/functions/built-in-functions/blockchain-functions#calculateleaseid) function.

## Constructor

```ride
Lease(recipient: Address|Alias, amount: Int, nonce: Int)
```

or

```ride
Lease(recipient: Address|Alias, amount: Int)
```

In the second case, `nonce = 0` is inserted automatically.


## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | recipient | [Address](/en/ride/structures/common-structures/address)&#124;[Alias](/en/ride/structures/common-structures/alias) | Lessee [address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) |
| 2 | amount | [Int](/en/ride/data-types/int) | Amount of WAVELETs to lease (that is, amount of WAVES multiplied by 10<sup>8</sup>)
| 7 | nonce | [Int](/en/ride/data-types/int) | Nonce that is used for lease ID generation. If the callable function creates several leases with the same parameters, you should use different nonces |

### Example

```
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
  
@Callable(i)
func foo() = {
  let lease = Lease(Alias("merry"),100000000)
  let id = calculateLeaseId(lease)
  (
    [
      lease,
      BinaryEntry("lease", id)
    ],
    unit
  )
}
```
