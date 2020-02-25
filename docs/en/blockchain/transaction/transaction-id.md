# Transaction ID

A **transaction ID** is a hash of the [transaction body bytes](/en/blockchain/transaction/transaction-body-bytes) which is calculated by the [blake2b256](https://en.wikipedia.org/wiki/BLAKE_&#40;hash_function&#41;) hash function.

Unlike the other transaction types, the transaction ID of an [alias transaction](/en/blockchain/transaction-type/create-alias-transaction) is calculated as a hash of the values of `type` and `alias` fields.
