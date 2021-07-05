# Exception functions

| Name | Description | Complexity |
| :--- | :--- | :--- |
| [throw()](#throw) | Raises an exception | 1 |
| [throw(String)](#throw-string) | Raises an exception with a message | 1 |

The return type of `throw` is [Nothing](/en/ride/data-types/).

There is no exception handling in Ride: after an exception has been thrown, the script execution fails. The transaction can be either discarded or saved on the blockchain as failed, see the [Transaction Validation](/en/blockchain/transaction/transaction-validation) article for details.

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
