# Smart Asset

**Smart asset** is a [token](/en/blockchain/token/) that has an [asset script](/en/ride/script/script-types/asset-script) assigned to it.

By default, tokens on the Waves blockchain are not smart contracts, and any transactions with them are allowed. The script endows a token with functionality that sets the rules for its circulation. Each transaction involving a smart asset is automatically checked against the conditions specified in the script. If the asset's script allows the transaction, it will be executed; if the script denies the transaction, it is either not put onto the blockchain at all or saved as failed (for details, see the [Transaction Validation](/en/blockchain/transaction/transaction-validation) article).

Using smart assets, you can implement various financial instruments on the blockchain (options, interval trading, taxation), game mechanics (allowing transactions only between characters with certain properties). For details on creating and using smart assets, see the [Smart Asset](/en/building-apps/smart-contracts/smart-assets) article.

Please note:

* If a token is issued without a script, then the script cannot be added later.
* The script cannot be removed, so it is impossible to turn a smart asset into a regular one.
* The asset script can be changed using the [Set Asset Script transaction](/en/blockchain/transaction-type/set-asset-script-transaction), unless prohibited by the asset script itself (as well as by the [dApp or account script](/en/blockchain/account/dapp) assigned to the issuer account).
* The [minimum fee](/en/blockchain/transaction/transaction-fee) for any transaction involving a smart asset is increased by 0.004 WAVES. 

   Starting from node version 1.3.1, after activation of feature #16 “Ride V5, dApp-to-dApp invocations”, canceled the extra fee of 0.004 WAVES for smart assets in payments and script actions for Invoke Script transactions.
