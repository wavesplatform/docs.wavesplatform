# Exceptions

You can interrupt the script execution using the [throw](/en/ride/functions/built-in-functions/exception-functions) function:

```ride
func main(amount: Int) = {
   if (amount > 0)
   then
        "Done!"
   else
        throw("Error!")
}
```

There is no exception handling in Ride: after an exception has been thrown, the script execution fails. The transaction can be rejected or saved on the blockchain as failed, see the [Transaction Validation](/en/blockchain/transaction/transaction-validation) article for details.
