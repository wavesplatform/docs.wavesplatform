# Script Types

There are three types of [scripts](/en/ride/script):

* [dApp script](/en/ride/script/script-types/dapp-script) comprises [сallable functions](/en/ride/functions/callable-function) that can be called externally by the [invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction). Also dApp script may comprise a [verifier function](/en/ride/functions/verifier-function) that checks transactions and orders that are sent from dApp account.
* [Account script](/en/ride/script/script-types/account-script) checks transactions and orders that are sent from the account (like a verifier function of a dApp script).
* [Asset script](/en/ride/script/script-types/asset-script) checks transactions involving the asset.

The script type is defined by the `SCRIPT_TYPE` [directive](/en/ride/script/directives).

Features of each script type are described in the table.

| # | dApp script | Account script | Asset script |
| :--- | :--- | :--- | :--- |
| `this` variable | dApp address | Smart account address | Asset |
| Transaction or order that is checked | Check is performed by the verifier function only. Annotation of the function sets the name of the variable that contains the outgoing transaction or the order, for example: `@Verifier(tx)` | Built-in variable `tx: Transaction|Order` contains the outgoing transaction or the order | Build-in variable `tx:`&nbsp;`Transaction` contains the transaction involving the asset.<br>Order check is not supported |
| [Proofs](/en/blockchain/transaction/transaction-proof) accessibility | • Proofs of the outgoing transaction or the order are accessible by the verifier function.<br>• Proofs of the invoke script transaction are unaccessible by the callable function | Accessible | Unaccessible |
| Blockchain data | • Accessible by the callable function<br>• Accessible by the verifier function when checking a transaction<br>• Unaccessible by the verifier function when checking an order | • Accessible when checking a transaction<br>• Unaccessible when checking an order | Unaccessible |
