# dApp and Smart Account

An account with a script assigned to it becomes a dApp or smart account.

**dApp** is the account with the [dApp script](/en/ride/script/script-types/dapp-script) assigned. dApp is an application whose functions can be called from other accounts via an [Invoke Script transaction](/en/blockchain/transaction-type/invoke-script-transaction). **Callable functions** can accept payments to the dApp and also perform actions applied to the blockchain:

* Add, modify or delete entries of the dApp account data storage.
* Transfer token from the dApp balance.
* Issue, reissue, burn token on behalf of the dApp, sponsorship setup.

Besides, a dApp script can comprise a **verifier function** that allows or denies transactions and orders that are sent on behalf of the dApp account depending on the specified conditions. The verifier function replaces the default verification, which is to verify the sender signature, and allows you to set more complex rules, such as multisignature.

Using dApps, you can implement various blockchain-empowered applications: gaming and gambling, DeFi, digital identity, supply chains, and many others. For information about how dApp works, see the [What is dApp](/en/building-apps/smart-contracts/what-is-a-dapp) article. For information about how to create a dApp, see the [Creating and Running dApp](/en/building-apps/smart-contracts/writing-dapp) article.

**Smart account** is an account with the [account script](/en/ride/script/script-types/account-script) assigned. The account script is similar to a verifier function of a dApp script. For information on creating and using smart accounts, see the [Smart Account](/en/building-apps/smart-contracts/what-is-smart-account).

Please note:

* To assign a script to an account, you have to send an [Set Script transaction](/en/blockchain/transaction-type/set-script-transaction) on behalf og the account.
* You can also change or delete a script via the Set Script transaction, unless the script itself prohibits it.
* The [minimum fee](/en/blockchain/transaction/transaction-fee) for any transaction sent from a dApp or smart account is increased by 0.004 WAVES.
