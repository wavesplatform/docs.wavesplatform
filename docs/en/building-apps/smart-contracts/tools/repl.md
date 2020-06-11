# Ride REPL: Interactive Ride Console

Ride [REPL (от read-eval-print loop)](https://ru.wikipedia.org/wiki/REPL) is the easiest way to try out Ride language and its execution semantic.

Ride REPL is built into the following developer tools:

* [Waves IDE](/ru/building-apps/smart-contracts/tools/waves-ide)
* [Surfboard](/ru/building-apps/smart-contracts/tools/surfboard)

![](./_assets/repl.png)

In Ride REPL, you can define variables and functions as well as use the results of previous calculations:

```
RIDE > let x = 42
defined let x: Int
RIDE > func inc(i:Int) = { i + 1 }
defined func inc(i: Int): Int
RIDE > inc(x)
res1: Int = 43
RIDE > inc(res1)
res2: Int = 44
```

The `:reset` command clears REPL state, removing all existing definitions.

## Standard Library

REPL features all the [built-in functions](/en/ride/functions/built-in-functions/), [operators](/en/ride/operators), [variables](/en/ride/variables/built-in-variables), and [structures](/en/ride/structures/) of Ride language:

```
RIDE > max([2,12,85,6])
res3: Int = 85
RIDE > sha256(base58'')
res4: ByteVector = base58'GKot5hBsd81kMupNCXHaqbhv3huEbxAFMLnpcX2hniwn')
```

You can query the function signature, structure definition or variable type by using the `?` command.

```
RIDE > ? getInteger
func getInteger(addressOrAlias: Address|Alias, key: String): Int|Unit
func getInteger(data: List[DataEntry], key: String): Int|Unit
func getInteger(data: List[DataEntry], index: Int): Int|Unit
```

The `??` command dumps all the existing definition.

## Blockchain Data

The results of blockchain-based functions and variables depend on the account and blockchain network (Mainnet, Testnet, or other) configured in tool settings.

```
RIDE > this
res5: Address = Address(
        bytes = base58'3N3ErpmUdJWy6DW4ruAr14YDis9UaiTwHd6'
)
RIDE > wavesBalance(this)
res6: BalanceDetails = BalanceDetails(
    available = 8978000000
    regular = 8978000000
    generating = 8978000000
    effective = 8978000000
)
```
