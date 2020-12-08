# Structures

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/structures/)

All structures in Ride are built-in — you cannot create your own structures.

All structures have constructors.

## Examples

The code that creates an instance of the `IntegerEntry` structure and reads its key and value.

``` ride
let data = IntegerEntry("Age", 33)
let key  = data.key
let val = data.value
```
