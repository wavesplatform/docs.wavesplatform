# Verifier Function

**Verifier function** is a function of [dApp script](/en/ride/script/script-types/dapp-script) that is responsible for [verification of transactions](/en/blockchain/transaction/transaction-validation) and orders sent from [dApp](/en/blockchain/account/dapp) account. The verifier function does the same as an [account script](/en/ride/script/script-types/account-script).

dApp script can have only one verifier function. The verifier function should be adorned with the `@Verifier(tx)` [annotation](/en/ride/functions/annotations), where `tx: Transaction|Order` is the transaction or the order that the function is currently checking.

Verifier function has no arguments.

Verifier function can have one of the following execution results:

- `true` (the transaction or the order is allowed),
- `false` (the transaction or the order is denied),
- error (the transaction or the order is denied).

dApp that has no verifier function performs default verification, that is, checking that the first [proof](/en/blockchain/transaction/transaction-proof) of the transaction/order has the correct sender's signature. The following function does the same as the default implementation:

   ```ride
   @Verifier(tx)
   func verify() = {
       sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPublicKey)
   }
   ```

If the verifier function is defined, only verification by this function is performed, proofs are not checked additionally.

## Example

dApp with the verifier function listed below only allows [transfer transactions](/en/blockchain/transaction-type/transfer-transaction) with amount of token less than 100. Orders and other transactions are denied. The [match](/en/ride/operators/match-case) operator is used to specify verification rules depending on the type of the transaction/order.


```ride
@Verifier(tx)
func verify() = {
    match tx {
        case ttx:TransferTransaction => ttx.amount < 100 && sigVerify(ttx.bodyBytes, ttx.proofs[0], ttx.senderPublicKey)
        case _ => false
    }
}
```

See available fields for each transaction type in the [Transaction Structures](/en/ride/structures/transaction-structures/) article.
