# Account data storage

An **account data storage** is a storage, associated with an [account](/en/blockchain/account/),  of data records.

Each account has a _single_ account data storage.

The size of an account data storage is unlimited.

## An account data storage record

An **account data storage record** is a data record that has a key-value format.

The key is a unique string.

The value is the data of one of the types:

* string
* boolean
* integral
* array of bytes

## Adding records

Records are added to an account data storage using a [data transaction](/en/blockchain/transaction-type/data-transaction) or an invoke script transaction.

The maximum size of a single record is [32 kilobytes](https://github.com/wavesplatform/Waves/blob/79442553314012cc0e2c1defca9d85f8a84e1770/lang/shared/src/main/scala/com/wavesplatform/lang/v1/ContractLimits.scala#L11) for data transaction and [5 kilobytes](https://github.com/wavesplatform/Waves/blob/79442553314012cc0e2c1defca9d85f8a84e1770/lang/shared/src/main/scala/com/wavesplatform/lang/v1/ContractLimits.scala#L20) for invoke script transaction.

## Editing records

The value of a record can be rewritten using a data transaction or an invoke script transaction.

The key of a record cannot be rewritten.

## Deleting records

> From version 1.2.0, it is possible to delete account data storage records. This functionality becomes available after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions” on the node.
Version 1.2.x is currently available on [stagenet](/en/blockchain/blockchain-network/stage-network)

Deleting records is implemented by

- [data transaction](/en/blockchain/transaction-type/data-transaction)
- [DeleteEntry](/en/ride/structures/script-actions/delete-entry) structure

Deleting a record is performed by key.
