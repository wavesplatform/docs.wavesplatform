# Verifier function

A **verifier function** is a [function](/en/ride/functions) of a [dApp script](/en/ride/script/script-types/dapp-script) that has `@Verifier` [annotation](/en/ride/functions/annotations).

A verifier function is responsible for [validation of transactions](/en/blockchain/transaction/transaction-validation) and orders sent from [dApp](/en/blockchain/account/dapp).

A dApp script can have only _one_ verifier function.

A verifier function has no arguments.

## Example

``` ride
@Verifier(tx)
func verify() = {
    match tx {
        case _: Order|SetScriptTransaction =>
            sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPublicKey)
        case _ => false
    }
}
```

## Conditions Processing Optimization

In our example, the `sigVerify` (i.e. make validation) action is set in `match-case` operator. This action will be performed if the entity being validating is an order or set script transaction. Also, there is a branch for default behavior, i.e. behavior that will be undertaken if the entity being validated is neither order nor set script transaction. In our example, it is `case _ => false` (i.e. prohibit sending to the blockchain). There are no surprises in our example, but if we will use some other value in the default branch, this can lead to unwanted effects.

Let's look at the example of faulty verification. Let's assume that the second version of Ride is used. In this version, the Invoke script transaction is not introduced. Constructing the verifier function, we can use `case` for all transactions included to Ride v2, and set `case _ => sigVerify` as a default condition. This can lead to a situation when the Invoke script transaction will be sent from the account despite it is not included in Ride v2. Exploiting this vulnerability can have deplorable consequences (including the loss of funds) for dApp owner which allowed indiscretion.

To prevent unwanted effects, besides case with transactions of interest, it is recommended to

- set `case` for each transaction supported by the used Ride version. To not to enumerate all transactions manually, you can use syntactic sugar - `case _: Transaction => your_action`.
- set `case _ => false` as a default condition.

See the example below.

```
{-# STDLIB_VERSION 2 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}

match tx {
case t: TransferTransaction|ExchangeTransaction|MassTransferTransaction|Order => false # prohibit of any funds transfer from the account
case _: Transaction => sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPublicKey) # allow all transactions of known types if the signature is valid
case _ => false # reject entities of all other (new, unknown) types because they are not presented in the current language version
}
```

As a result, all transactions of unknown types with no `case` for them will not be sent. Thus, dApp having such verifier function will pass transactions that are present in the dApp's Ride version.
