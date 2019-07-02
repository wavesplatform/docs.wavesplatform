# Account data storage

An **account data storage** is an array of records of type `DataEntry` associated with an [account](/blockchain/account.md).

Each account has a _single_ account data storage.

## Adding records

Records are added to an account data storage using a [data transaction](/blockchain/transaction-type/data-transaction.md) or an invoke script transaction.

The number of records in the account data storage is unlimited.

The maximum size of a single record is 32 kilobytes.

In a single data transaction, you can add up to 100 records to the account data storage.

## Deleting records

A record cannot be deleted from an account data storage, it can only be edited.

## Editing records

The values of a `type` and a `value` fields of a record can be overwritten.

The value of a `key` field cannot be changed.
