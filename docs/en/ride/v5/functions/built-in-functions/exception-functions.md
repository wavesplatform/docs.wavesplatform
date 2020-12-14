# [Ride v5] Exception functions

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/functions/built-in-functions/exception-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| [throw()](#throw) | Raises an exception | 1 |
| [throw(String)](#throw-string) | Raises an exception with a message | 1 |

The return type of `throw` is [Nothing](/en/ride/v5/data-types/).

There is no exception handling in Ride: after an exception has been thrown, the script execution fails. The transaction can be rejected or saved on the blockchain as failed, see the [Transaction Validation](/en/blockchain/transaction/transaction-validation) article for details.

## throw()

Raises an exception.

## throw(String)

Raises an exception with a message.

```
throw(err: String)
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `err`: String | The exception message |
