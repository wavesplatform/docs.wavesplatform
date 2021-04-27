# [Ride v6] Standard Library Version 6 / Under Construction

## Continued Computations

Added support for dApp scripts with complexity over 10,000. The execution of such a script is split into several stages. The first stage of computations is performed within the Invoke Script transaction. The further stages are performed within Continuation transactions that are created automatically by block generators. [More about continued computations](/en/ride/advanced/continuation)

> Continued computations and dApp-to-dApp invocation are mutually exclusive, that is, they cannot be initiated by the same transaction.
