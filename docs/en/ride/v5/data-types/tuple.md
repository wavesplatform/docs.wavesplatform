# [Ride v5] Tuple

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/data-types/tuple)

Tuple is an ordered collection of elements. Elements can be of any type. The tuple can contain from 2 to 22 elements.

For weight restrictions, see the [Data Weight](/en/ride/limits/weight) article.

## Example

```ride
let x=("Hello Waves",42,true)
x._2
```

Result: 42

```ride
let (a,b,c)=x
c
```

Result: true

```
match (if true then (1, 2) else (true, "q")) {
   case _: (Boolean, String) => false
   case _: (Int, Int)        => true
}
```

Result: true
