# Verifier function

A **verifier function** is a [function](/en/ride/functions) of a [dApp script](/en/ride/script/script-types/dapp-script) that has `@Verifier` [annotation](/en/ride/functions/annotations).

A verifier function is responsible for [validation of transactions](/en/blockchain/transaction/transaction-validation) and orders sent from [dApp](/en/blockchain/account/dapp).

A dApp script can have only one verifier function.

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
