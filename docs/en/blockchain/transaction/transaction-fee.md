# Transaction fee

**Transaction fee** is a fee that an [account](/en/blockchain/account/) owner pays to send a [transaction](/en/blockchain/transaction/).

A transaction sender can specify any amount of fee but not less than a minimum amount. The larger the fee is, the quicker the transaction will be added to the new [block](/en/blockchain/block/).

For Invoke Script transaction and Transfer transaction, a sender can specify a transaction fee nominated in a sponsored asset instead of WAVES, see the section [Fee in Sponsored Asset](#fee-in-sponsored-asset) below.

## Minimum Fee

The minimum fees in WAVES for each type of transaction are listed in the table below.

* If the transaction sender is a [dApp or smart account](/en/blockchain/account/dapp), and the complexity of the account script or dApp script verifier function exceeds the [sender complexity threshold](/en/ride/limits/), the minimum fee is increased by 0.004 WAVES. 
* The minimum fee for any transaction, except Invoke Script transactions, is increased by 0.004 
WAVES for each smart asset involved.

The fee is not increased by 0,004 WAVES for [Exchange transactions](/en/blockchain/transaction-type/exchange-transaction) if the order is sent from a smart account or if the matcher fee is a smart asset.

<br/>
<details>
   <summary>Before activation of feature #16 “Ride V5, dApp-to-dApp invocations”</summary>

* The extra fee of 0.004 WAVES was required for transactions sent from smart account or dApp regardless of the complexity of the account script or the presence and complexity of the dApp script verifier function.
* For Invoke Script transaction, the minimum fee was increased by 0.004 WAVES for each execution of asset script in payments and script actions.
</details>

**Example 1.**

The minimum fee for a Transfer transaction:

* No smart account or smart assets: 0.001 WAVES.
* Transfer from smart account*: 0.001 + 0.004 = 0.005 WAVES.
* Transfer of smart asset: 0.001 + 0.004 = 0.005 WAVES.
* Transfer of smart asset sent from smart account*: 0.001 + 0.004 + 0.004 = 0.009 WAVES.

\* If the account script complexity is higher than the [sender complexity threshold](/en/ride/limits/).

**Example 2.**<a id="example2"></a>

The minimum fee for an Invoke Script transaction:

* No smart account, no assets issued: 0.005 WAVES.
* dApp script invocation is sent from a smart account*: 0.005 + 0.004 = 0.009 WAVES.
* dApp script invocation issues an asset that is not [non-fungible token](/en/blockchain/token/non-fungible-token): 0.005 + 1 = 1.005 WAVES.
* dApp script invocation is sent from smart account*, and 10 assets that are not [non-fungible token](/en/blockchain/token/non-fungible-token) are issued: 0.005 + 0.004 + 10 × 1 = 10.009 WAVES.

\* If the account script complexity is higher than the [sender complexity threshold](/en/ride/limits/).

> A dApp script can issue/reissue/burn assets from activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.

| Transaction type | Transaction type ID | Minimum transaction fee in WAVES |
| :--- | :--- | :--- | :--- |
| [Burn transaction](/en/blockchain/transaction-type/burn-transaction) | 6 | 0.001 |
| [Create Alias transaction](/en/blockchain/transaction-type/create-alias-transaction) | 10 | 0.001 |
| [Data transaction](/en/blockchain/transaction-type/data-transaction) | 12 | 0.001 per kilobyte<br>The size is rounded up to an integer number of kilobytes. [Details](/en/blockchain/transaction-type/data-transaction) |
| [Exchange transaction](/en/blockchain/transaction-type/exchange-transaction) | 7 | 0.003 |
| [Invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction) | 16 | 0.005 + `K`<br>`K` is the number of assets issued as a result of dApp script invocation that are not [non-fungible tokens](/en/blockchain/token/non-fungible-token).<br>Assets can be issued by a dApp script from activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.<br>See [example 2](#example2) above |
| [Issue transaction](/en/blockchain/transaction-type/issue-transaction) | 3 | • 1 for reqular token <br>• 0.001 for [non-fungible token](/en/blockchain/token/non-fungible-token) |
| [Lease Cancel transaction](/en/blockchain/transaction-type/lease-cancel-transaction) | 9 | 0.001 |
| [Lease transaction](/en/blockchain/transaction-type/lease-transaction) | 8 | 0.001 |
| [Mass Transfer transaction](/en/blockchain/transaction-type/mass-transfer-transaction) | 11 | 0.001 + 0.0005 × `N`<br>`N` is the number of transfers inside of the transaction.<br>The value is rounded up to the three decimals |
| [Reissue transaction](/en/blockchain/transaction-type/reissue-transaction) | 5 | 0.001<br>(Before activation of feature #15 it was 1) |
| [Set Asset Script transaction](/en/blockchain/transaction-type/set-asset-script-transaction) | 15 | 1 |
| [Set Script transaction](/en/blockchain/transaction-type/set-script-transaction) | 13 | 0.01 |
| Sponsor Fee transaction | 14 | 0.001<br>(Before activation of feature #15 it was 1) |
| [Transfer transaction](/en/blockchain/transaction-type/transfer-transaction) | 4 | 0.001 |
| [Update asset info transaction](/en/blockchain/transaction-type/update-asset-info-transaction) | 17 | 0.001<br>The Update Asset Info transaction is enabled by feature #15 “Ride V4, VRF, Protobuf, Failed transactions” |

## Fee in Sponsored Asset

An issuer of an asset can set up sponsorship — so that any user can specify a transaction fee in this asset for Invoke Script transactions and Transfer transactions.

To activate sponsorship, the issuer puts a Sponsor Fee transaction that specifies an amount of asset that is equivalent to the minimum fee of 0.001 WAVES. For example, if `minSponsoredAssetFee: 5`, then the fee in this asset for an Invoke Script transaction equals 5 × 0.005 / 0.001 = 25. See the [Sponsored Fee](/en/blockchain/waves-protocol/sponsored-fee) article for details.

## Fee for Failed Transactions

Invoke Script transactions and Exchange transactions are saved on the blockchain and the transaction sender pays the fee if the dApp script or the asset script failed. For more information, see the [Transaction Validation](/en/blockchain/transaction/transaction-validation) article. For an Exchange transaction, the matcher is charged the transaction fee but the order senders are not charged the [matcher fee](/en/blockchain/transaction-type/exchange-transaction#matcher-fee).

Saving failed transactions and charging fees for them is enabled by feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.
