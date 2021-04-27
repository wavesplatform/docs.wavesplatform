# dApp and Smart Account

An account with a script assigned to it becomes a dApp or smart account.

**dApp** is the account with the [dApp script](/en/ride/script/script-types/dapp-script) assigned. dApp is an application whose functions can be called from other accounts via an [Invoke Script transaction](/en/blockchain/transaction-type/invoke-script-transaction). **Callable functions** can accept payments to the dApp and also perform actions applied to the blockchain:

* Add, modify or delete entries of the dApp account data storage.
* Transfer tokens from the dApp balance.
* Issue, reissue, burn tokens on behalf of the dApp, sponsorship setup.

Beyond that, a dApp script can comprise the **verifier function** that allows or denies transactions and orders that are sent on behalf of the dApp account depending on the specified conditions. The verifier function replaces the default verification that is to verify the sender's signature and allows you to set more complex rules, such as multisignature.

Using dApps, you can implement various blockchain-empowered applications: gaming and gambling, DeFi, digital identity, supply chains, and many others. For information about how dApp works, see the [What is dApp](/en/building-apps/smart-contracts/what-is-a-dapp) article. For information about how to create a dApp, see the [How to Create and Launch dApp](/en/building-apps/smart-contracts/writing-dapps) article.

**Smart account** is an account with the [account script](/en/ride/script/script-types/account-script) assigned. The account script is similar to a verifier function of a dApp script. For information on creating and using smart accounts, see the [Smart Account](/en/building-apps/smart-contracts/what-is-smart-account).

Please note:

* To assign a script to an account, you have to send a [Set Script transaction](/en/blockchain/transaction-type/set-script-transaction) on behalf of the account.
* You can also change or delete the script via the Set Script transaction, unless the script itself prohibits it.
* The [minimum fee](/en/blockchain/transaction/transaction-fee) for any transaction sent from a dApp or smart account is increased by 0.004 WAVES.

   Starting from node version 1.3.1, after activation of feature #16 “Ride V5, dApp-to-dApp invocations”, the extra fee of 0.004 WAVES is only required if the complexity of sender's account script or dApp script verifier function exceeds the [sender complexity threshold](/en/ride/limits/). Versions 1.3.x are currently available for [Stagenet](/en/blockchain/blockchain-network/) only.
