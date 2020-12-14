# [Ride v5] Strict Variable

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/variables/)

`strict` keyword defines a variable with eager evaluation. Unlike lazy variables defined with `let`, a strict variable is evaluated immediately when script execution reaches it, that is, before the next expression. A strict variable will not be evaluated if it is defined inside another definition that is not used: for example, inside a function that is not called.

Like lazy variables, strict variables are immutable.

Strict variables are suitable for [dApp-to-dApp invocation](/en/ride/advanced/dapp-to-dapp) as they ensure executing callable functions and applying their actions in the right order. Example:

```scala
strict z = Invoke(dapp,foo,args,[AttachedPayment(unit,100000000)])
```
