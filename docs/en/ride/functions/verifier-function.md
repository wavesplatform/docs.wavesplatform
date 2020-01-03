# Verifier function

A **verifier function** is a [function](/en/ride/functions.md) of a [dApp script](/en/ride/script/script-types/dapp-script.md) that has `@Verifier` [annotation](/en/ride/functions/annotations.md).

A verifier function is responsible for [validation of transactions](/en/blockchain/transaction/transaction-validation.md) and orders sent from [dApp](/en/blockchain/account/dapp.md).

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
