# Variables

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/variables/)

All variables in Ride are _immutable_. After definition, the value of the variable does not change.

Definition and simultaneous initialization of the variable are performed with the help of the `let` [operator](/en/ride/v5/operators/).

You cannot declare a variable without initialization.

During the variable assignment at the right side of the "=" sign must be an [expression](/en/ride/base-concepts/expression). The value of the variable is the expression result.

## Examples

Definition of the integer variable.

``` ride
let size = 5
```

Definition of the string variable.

``` ride
let season = "Spring"
```

Since a [function](/en/ride/v5/functions/) is a [definition](/en/ride/base-concepts/definition) and not an [expression](/en/ride/base-concepts/expression), you can assign a function value to a variable but not the function itself.

``` ride
func f() = {
    true
}
let result = f()
```

## Laziness

Ride has the lazy variable initialization, so the value of the variable is calculated only at the first call to it.

## Variables built into the script

The [script](/en/ride/script/) has [built-in variables](/en/ride/v5/variables/built-in-variables).
