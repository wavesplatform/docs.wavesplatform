# dApp-to-dApp Invocation Function

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only.

| Name | Description | Complexity |
| :--- | :--- | :--- |
| [Invoke](#invoke) | Вызывает вызываемую функцию dApp | ?? |

## Invoke

Invokes a dApp [callable function](/en/ride/v5/functions/callable-function).

The `Invoke` functions can be used by a callable function of a [dApp script](/en/ride/script/script-types/dapp-script), but not by a [verifier function](/en/ride/functions/verifier-function), [account script](/en/ride/script/script-types/account-script) or [asset ](/en/ride/script/script-types/asset-script).

Via the `Invoke` function, the callable function can invoke a callable function of another dApp, or another callable function of the same dApp, or  even itself, and then use the invocation results in subsequent operations. The invocation can contain payments that will be transferred 
 from the balance of the invoking dApp to the balance of the invoked dApp. For details, see the [dApp-to-dApp Invocation](/en/ride/advanced/dapp-to-dapp) article.

```ride
Invoke(dApp: Address|Alias, function: String, arguments: List[Boolean|ByteVector|Int|String|List[Boolean|ByteVector|Int|String]], payments: List[AttachedPayments]): T|Unit
```

`T` means any valid type.

:bulb: To ensure executing callable functions and applying their actions in the right order, initialize a [strict variable](/en/ride/v5/variables/) by the return value of an `Invoke` function.

### Parameters

| Parameter | Description |
| :--- | :--- |
| dApp: [Address](/en/ride/v5/structures/common-structures/address)&#124;[Alias](/en/ride/v5/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of a dApp to invoke |
| function: [String](/en/ride/v5/data-types/string) | Name of a callable function |
| arguments | [List](/en/ride/v5/data-types/list)[[Boolean](/en/ride/v5/data-types/boolean)&#124;[ByteVector](/en/ride/data-types/byte-vector)&#124;[Int](/en/ride/data-types/int)&#124;[String](/en/ride/data-types/string)&#124;[List](/en/ride/data-types/list)[[Boolean](/en/ride/data-types/boolean)&#124;[ByteVector](/en/ride/data-types/byte-vector)&#124;[Int](/en/ride/data-types/int)&#124;[String](/en/ride/data-types/string)]] | Parameters of a callable function |
| payments: [List](/en/ride/data-types/list)[[AttachedPayment](/en/ride/structures/common-structures/attached-payment)] | Payments to transfer from the invoking dApp to the invoked dApp, up to 2 |

## Example

A user sends an Invoke Script transaction that invokes the callable function `foo` of dApp1.

The `foo` function invokes the `bar` function of dApp2 passing the number `a` and attaching a payment of 1 USDN.

The `bar` function transfers 1 WAVES to dApp1 and returns the doubled number `a`.

The `foo` function  записывает в хранилище данных dApp1 результат, возвращенный функцией `bar`.

dApp1:

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}

@Callable(i)
func foo(dapp2: String, key: String) = {
   let a = getIntegerValue(this,key)
   strict r = Invoke(addressFromStringValue(dapp2),bar,[a],[AttachedPayment(base58'DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p',1000000)])
   (
      [
         IntegerEntry(toBase58String(i.caller.bytes), r)
      ],
      unit
   )
}
```

dApp2:

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}

@Callable(i)
func bar(a: Int) = {
   let 
   (
      [
         ScriptTransfer(i.caller, 100000000, unit),
      ],
      a*2
   )
}
```

