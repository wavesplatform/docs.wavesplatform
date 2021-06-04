# [Ride v5] Strict Variable

:warning: This is the documentation for the Standard Library **version 5**, which becomes available after activation of feature #16 “Ride V5, dApp-to-dApp invocations”. [Go to version 4](/en/ride/variables/)

`strict` keyword defines a variable with eager evaluation. Unlike lazy variables defined with `let`, a strict variable is evaluated immediately when script execution reaches it, that is, before the next expression.

Strict variable can be defined only inside another definition, for example, inside the body of a function. A strict variable will not be evaluated if it is defined inside another definition that is not used: for example, inside a function that has not been called.

Like lazy variables, strict variables are immutable.

Strict variables are suitable for [dApp-to-dApp invocation](/en/ride/advanced/dapp-to-dapp) as they ensure executing callable functions and applying their actions in the right order. Example:

```scala
func foo() = {
   ...
   strict balanceBefore = wavesBalance(this).regular
   strict z = invoke(dapp2,"bar",args,[AttachedPayment(unit,100000000)])
   strict balanceAfter = wavesBalance(this).regular

   if(balanceAfter < balanceBefore) then ... else...
}
```

In this example, `balanceBefore` and `balanceAfter` may differ because payments to `dApp2` and actions performed by the `bar` callable function can affect the balance.
