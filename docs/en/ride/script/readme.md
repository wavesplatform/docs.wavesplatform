# Script Types

There are three types of [scripts](/en/ride/script/):

* [dApp script](/en/ride/script/script-types/dapp-script) enables you to define [сallable functions](/en/ride/functions/callable-function) that can be called from other accounts by the [Invoke Script transaction](/en/blockchain/transaction-type/invoke-script-transaction), accept payments to the dApp and perform various actions on the blockchain. Also dApp script can comprise a [verifier function](/en/ride/functions/verifier-function) that allows or denies transactions and orders that are sent on behalf of the dApp account.
* [Account script](/en/ride/script/script-types/account-script) allows or denies transactions and orders that are sent on behalf of the account (like a verifier function of a dApp script).
* [Asset script](/en/ride/script/script-types/asset-script) allows or denies transactions involving the asset.

Features of each script type are described in the table.

| # | dApp script | Account script | Asset script |
| :--- | :--- | :--- | :--- |
| Directives | `{-# CONTENT_TYPE DAPP #-}`<br>`{-# SCRIPT_TYPE ACCOUNT #-}` | `{-# CONTENT_TYPE EXPRESSSION #-}`<br>`{-# SCRIPT_TYPE ACCOUNT #-}` | `{-# CONTENT_TYPE DAPP #-}`<br>`{-# SCRIPT_TYPE ACCOUNT #-}` |
| Content | Set of definitions | Boolean expression | Boolean expression |
| `this` variable | dApp address | Smart account address | Asset |
| Transaction or order that is checked | Check is performed by the verifier function only. Annotation of the function sets the name of the variable that contains the outgoing transaction or the order, for example: `@Verifier(tx)` | Built-in variable `tx: Transaction|Order` contains the outgoing transaction or the order | Build-in variable `tx:`&nbsp;`Transaction` contains the transaction involving the asset.<br>Order check is not supported |
| [Proofs](/en/blockchain/transaction/transaction-proof) accessibility | • Proofs of the outgoing transaction or the order are accessible by the verifier function.<br>• Proofs of the invoke script transaction are unaccessible by the callable function | Accessible | Unaccessible |
| Blockchain data | • Accessible by the callable function<br>• Accessible by the verifier function when checking a transaction<br>• Unaccessible by the verifier function when checking an order | • Accessible when checking a transaction<br>• Unaccessible when checking an order | Accessible |
