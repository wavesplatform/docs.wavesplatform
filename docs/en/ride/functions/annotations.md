# Annotations

**Annotation** is a form of metadata that is added to a [function](/en/ride/functions/) of a [dApp script](/en/ride/script/script-types/dapp-script).

At the present moment, there are two annotations: `@Callable(i)` and `@Verifier(tx)`. The variable name in the annotation is required even if the called function does not use it.

An annotated function cannot be called inside a dApp script.

## @Callable(i: [Invocation](/en/ride/structures/common-structures/invocation))

Annotation of a [callable function](/en/ride/functions/callable-function).

Variable `i` contains information about the transaction that invoked the function of a [dApp](/en/blockchain/account/dapp). 

## @Verifier(tx: Transaction|[Order](/en/ride/structures/common-structures/order))

Annotation of a [verifier function](/en/ride/functions/verifier-function).

Variable `tx` contains information about the transaction or the order that was sent.
