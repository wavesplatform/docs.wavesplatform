# Transaction data structure

A **transaction data structure** is a set of fields of a [transaction](/blockchain/transaction.md).

Transactions of [different types](/blockchain/transaction-type.md) have different data structures.

## Data structure version

Data structures have versions: v1, v2, etc.

The version of a data structure affects the way transaction is [validated](/blockchain/transaction-validation.md): a transaction with data structure v1 is validated using a [signature](/blockchain/transaction-signature.md); with data structure v2 and higher — using an array of [proofs](/blockchain/transaction-proof.md).

When developing applications, it is recommended to use data structures of the latest versions.
