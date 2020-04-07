# Transaction fee

**Transaction fee** is a fee that an [account](/en/blockchain/account) owner pays to send a [transaction](/en/blockchain/transaction).

A transaction sender can specify any amount of fee but not less than a minimum amount. The larger the fee is, the quicker the transaction will be added to the new [block](/en/blockchain/block).

For invoke script transaction and transfer transaction, a sender can specify a transaction fee nominated in a sponsored asset instead of WAVES, see the section [Fee Nominated in Sponsored Asset](#fee-nominated-in-sponsored-asset) below.

## Minimum Fee

The minimum fees in WAVES for each type of transaction are listed in the table below. If a transaction is verified by an [account script](/en/ride/script/script-types/account-script) or an [asset script](/en/ride/script/script-types/asset-script), then the fee is increased by 0.004 WAVES for each script execution.

**Example 1.**

The minimum fee for a transfer transaction:

* No smart account or smart assets: 0.001 WAVES.
* Transfer from smart account: 0.001 + 0.004 = 0.005 WAVES.
* Transfer of smart asset: 0.001 + 0.004 = 0.005 WAVES.
* Transfer of smart asset sent from smart account: 0.001 + 0.004 + 0.004 = 0.009 WAVES.

**Example 2.**

The minimum fee for an invoke script transaction:

* No smart account, no smart assets, no assets issued: 0.005 WAVES.
* dApp script invocation is sent from a smart account: 0.005 + 0.004 = 0.009 WAVES.
* dApp script invocation with an attached payment that is nominated in a smart asset: 0.005 + 0.004 = 0.009 WAVES.
* dApp script invocation with two attached payments in smart assets: 0.005 + 2 × 0.004 = 0.013 WAVES.
* dApp script invocation that performed two smart assset transfers and one smart asset burn: 0.005 + 3 × 0.004 = 0.017 WAVES.
* dApp script invocation is sent from a smart account, with two attached payment in smart assets, and 10 smart assets transfers/reissues/burns are performed: 0.005 + 0.004 + 2 × 0.004 + 10 × 0.004 = 0.057 WAVES.
* dApp script invocation issued an asset that is not [non-fungible token](/en/blockchain/token/non-fungible-token): 0.005 + 1 = 1.005 WAVES.
* dApp script invocation is sent from smart account, with two attached payment in smart assets, and 10 asssets that are not [non-fungible token](/en/blockchain/token/non-fungible-token) are issued: 0.005 + 0.004 + 2 × 0.004 + 10 × 1 = 10.017 WAVES.

> Asset issue/reissue/burn by dApp script added to node version 1.2.0. The functionality can be used after activation of the "Ride V4 and multiple attached payments for Invoke Script Transaction" (No. 16) feature on the node. Version 1.2.x is currently available on [Stagenet](/en/blockchain/blockchain-network/stage-network)

| Transaction type | Transaction type ID | Minimum transaction fee in WAVES |
| :--- | :--- | :--- |
| [Burn transaction](/en/blockchain/transaction-type/burn-transaction) | 6 | 0.001 |
| [Create alias transaction](/en/blockchain/transaction-type/create-alias-transaction) | 10 | 0.001 |
| [Data transaction](/en/blockchain/transaction-type/data-transaction) | 12 | 0.001 per kilobyte | The value is rounded up to the thousandths |
| [Exchange transaction](/en/blockchain/transaction-type/exchange-transaction) | 7 | 0.003 |
| [Invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction) | 16 | 0.005 + `K`<br>`K` is the number of assets issued as a result of dApp script invocation that are not [non-fungible tokens](/en/blockchain/token/non-fungible-token).<br>Asset issue by dApp script added to node version 1.2.0. The functionality can be used after activation of the "Ride V4 and multiple attached payments for Invoke Script Transaction" (No. 16) feature on the node. Version 1.2.x is currently available on [Stagenet](/en/blockchain/blockchain-network/stage-network) |
| [Issue transaction](/en/blockchain/transaction-type/issue-transaction) | 3 | • 1 for reqular token <br>• 0.001 for [non-fungible token](/en/blockchain/token/non-fungible-token) |
| [Lease cancel transaction](/en/blockchain/transaction-type/lease-cancel-transaction) | 9 | 0.001 |
| [Lease transaction](/en/blockchain/transaction-type/lease-transaction) | 8 | 0.001 |
| [Mass transfer transaction](/en/blockchain/transaction-type/mass-transfer-transaction) | 11 | 0.001 + 0.0005 × `N`<br>`N` is the number of transfers inside of the transaction.<br>The value is rounded up to the thousandths |
| [Reissue transaction](/en/blockchain/transaction-type/reissue-transaction) | 5 | • 0.001 – starting from node version 1.2.0, after activation of the "Ride V4 and multiple attached payments for Invoke Script Transaction" (No. 16) feature. See <a href="/en/blockchain/waves-protocol/activation-protocol">Activation Protocol</a>.<br>• 1 — before activation of the No. 16 feature. |
| [Set asset script transaction](/en/blockchain/transaction-type/set-asset-script-transaction) | 15 | 1 |
| [Set script transaction](/en/blockchain/transaction-type/set-script-transaction) | 13 | 0.01 |
| Sponsor fee transaction | 14 | 1 |
| [Transfer transaction](/en/blockchain/transaction-type/transfer-transaction) | 4 | 0.001 |
| [Update asset info transaction](/en/blockchain/transaction-type/update-asset-info-transaction) | 17 | 0.001<br>The update asset info transaction has been added in node version 1.2.0. It can be used after activation of the "Ride V4 and multiple attached payments for Invoke Script Transaction" (No. 16). Version 1.2.x is currently available on [Stagenet](/en/blockchain/blockchain-network/stage-network) |

## Fee in Sponsored Asset

An issuer of an asset can set up sponsorship — so that any user can specify a transaction fee in this asset for invoke script transactions and transfer transactions.

To activate sposorship, the issuer puts a sponsor fee transaction that specifies an amount of asset that is equivalent to the minimum fee of 0.001 WAVES. For exmaple, if `minSponsoredAssetFee: 5`, then the fee in this asset for exchange transaction equals 5 × 0.003 / 0.001 = 15. See the [Sponsor Fee Transactions](/en/blockchain/waves-protocol/sponsored-fee) article for details.

## Fee for Unvalid Transactions

Invoke script transactions and exchange transactions are saved on the blockchain and the transaction sender pays the fee if the dApp script or the asset script failed. Matcher fee for orders in exchange transaction is not charged at once. For more information see the [Transaction Validation](/en/blockchain/transaction/transaction-validation) article.

Saving an charging for unvalid transactions is introduced since node version 1.2.4, after activating of the feature #17 “Accept transactions with failed script result”.  Versions 1.2.x are currently available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.
