# Variables

In Ride you can only declare a variable with simultaneous assignment of a value. At the right side of the `=` sign must be an [expression](/en/ride/base-concepts/expression). The value of the variable is the expression result. Ride is strongly typed and the variable's type is inferred from the value.

Ride variables are immutable: the value of a variable cannot be changed after it is defined.

# Lazy Variables

`let` keyword defines a variable with lazy evaluation. The value of a lazy variable is evaluated the first time it is used.

```scala
let a = 42                 # Integer variable definition
let b = "Ride the Waves!"  # String variable definition
```

Ride allows you to define variables globally, inside any function, or even inside a variable definition.


```scala
func lazyIsGood() = {
  let c = {
     let d = 1
     true
    }  
  c
}
```

The function above returns `true`, but variable `d` won't be initialized because unused lazy variables are not evaluated.

Since a [function](/en/ride/functions/) is a [definition](/en/ride/base-concepts/definition) and not an [expression](/en/ride/base-concepts/expression), you can assign a function value to a variable but not the function itself.

``` ride
let result = lazyIsGood()  # result is true
```

# Strict Variables

`strict` keyword defines a variable with eager evaluation. Unlike lazy variables defined with `let`, a strict variable is evaluated immediately when script execution reaches it, that is, before the next expression.

Strict variable can be defined only inside another definition, for example, inside the body of a function. A strict variable will not be evaluated if it is defined inside another definition that is not used: for example, inside a function that has not been called.

Strict variables are suitable for [dApp-to-dApp invocation](/en/ride/advanced/dapp-to-dapp) as they ensure executing callable functions and applying their actions in the right order. Example:

```scala
func foo() = {
   ...
   strict balanceBefore = wavesBalance(this).regular
   strict z = invoke(dapp2,bar,args,[AttachedPayment(unit,100000000)])
   strict balanceAfter = wavesBalance(this).regular

   if(balanceAfter < balanceBefore) then ... else...
}
```

In this example, `balanceBefore` and `balanceAfter` may differ because payments to `dApp2` and actions performed by the `bar` callable function can affect the balance.

# Built-in Variables

The Standard library defines [built-in variables](/en/ride/variables/built-in-variables) that can be used in scripts.
