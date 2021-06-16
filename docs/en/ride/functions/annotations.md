# Annotations

**Annotation** is a form of metadata that is added to a [function](/en/ride/functions/) of a [dApp script](/en/ride/script/script-types/dapp-script).

At the present moment, there are two annotations: `@Callable(i)` and `@Verifier(tx)`. The variable name in the annotation is required even if the function does not use it.

An annotated function cannot be called inside a dApp script.

## @Callable(i)

Annotation of a [callable function](/en/ride/functions/callable-function).

Variable `i` contains an [Invocation](/en/ride/structures/common-structures/invocation) structure representing certian fields of the invocation.

## @Verifier(tx)

Annotation of a [verifier function](/en/ride/functions/verifier-function).

Variable `tx` contains a structure of [transaction](/en/ride/v4/structures/transaction-structures/) or [order](/en/ride/structures/common-structures/order) sent from a dApp's account.
