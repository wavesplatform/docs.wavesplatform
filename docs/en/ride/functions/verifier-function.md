# Verifier function

**Verifier function** is a function of a [dApp script](/en/ride/script/script-types/dapp-script) that is responsible for [verification of transactions](/en/blockchain/transaction/transaction-validation) and orders sent from [dApp](/en/blockchain/account/dapp) account. Verifier functions does the same as an [account script](/en/ride/script/script-types/account-script).

A dApp script can have only one verifier function. It has `@Verifier(tx)` [annotation](/en/ride/functions/annotations), where `tx: Transaction|Order` is a transaction or an order that the function is currently checking.

A verifier function has no arguments.

Possible results of the verifier function execution are:

- `true` (the transaction or the order is allowed),
- `false` (the transaction or the order is denied),
- error (the transaction or the order is denied).

If dApp does not have the verifier function, then the default verification is performed, that is, checking that the first [proof](/en/blockchain/transaction/transaction-proof) is a sender's signature. The following function do the same as the default implementation:

   ```ride
   @Verifier(tx)
   func verify() = {
       sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPublicKey)
   }
   ```

* For Standard library **version 3**, if the verifier function is defined, only verification by this function is performed, proofs are not checked.
* For Standard library **version 4** the first proof of the transaction or the order is always checked, whether or not a verifier function is defined.

> :warning: Standard library version 4 becomes available since node version 1.2.0, after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”. Versions 1.2.x are currently available on Stagenet [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

## Exmaple

dApp with the verifier function listed below only allows [transfer transactions](/en/blockchain/transaction-type/transfer-transaction) with amount of token less than 100. Sending orders and other transactions is prohibited. The [match](/en/ride/operators/match-case) is used to spot a transaction type.

```ride
@Verifier(tx)
func verify() = {
    match tx {
        case ttx:TransferTransaction => ttx.amount < 100 && sigVerify(ttx.bodyBytes, ttx.proofs[0], ttx.senderPublicKey)
        case _ => false
    }
}
```

See available fields for each transaction type in the [Transaction Structures](/en/ride/structures/transaction-structures) article.
