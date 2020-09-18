# Token (Asset)

**Token** is a digital asset on the [blockchain](/en/blockchain/blockchain/). A token can be used:

* as a cryptocurrency to pay for goods and services within a project, as well as for crowdfunding;
* as an object or resource in games etc.

A token can represent a physical or an intangible object.

The words “token” and “asset” are used interchangeably in the Waves ecosystem.

**WAVES** is the core (native) token on the Waves blockchain; more about it in the [WAVES](/en/blockchain/token/waves) article.

All other tokens are **custom tokens** issued on behalf of some [account](/en/blockchain/account/). Any account that has enough WAVES to pay a fee can issue its own token. The new token is immediately available:

* for transfers between accounts,
* for trading on [Waves.Exchange](https://waves.exchange/) developed by the third-party team of the community (except for [NFTs](/en/blockchain/token/non-fungible-token); [smart assets](/en/blockchain/token/smart-asset) trading is temporarily unavailable),
* for payments attached to dApp [script invocation](/en/blockchain/transaction-type/invoke-script-transaction).

## Custom Token Parameters

Custom token example: <https://wavesexplorer.com/assets/DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p>

Below is an example of JSON representation returned by the `GET /assets/details/{assetId}` method of [Node REST API](/en/waves-node/node-api/):

```json
{
  "assetId": "DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p",
  "issueHeight": 1806810,
  "issueTimestamp": 1574429393962,
  "issuer": "3PC9BfRwJWWiw9AREE2B3eWzCks3CYtg4yo",
  "issuerPublicKey": "BRnVwSVctnV8pge5vRpsJdWnkjWEJspFb6QvrmZvu3Ht",
  "name": "USD-N",
  "description": "Neutrino USD",
  "decimals": 6,
  "reissuable": false,
  "quantity": 999999999471258900,
  "scripted": false,
  "minSponsoredAssetFee": 7420,
  "originTransactionId": "DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p"
}
```

| Field | Description |
| :--- | :--- |
| assetId | Token ID: base58 encoded byte array. The token ID is calculated as a hash of the token parameters upon issue. See also the [Token ID](/en/blockchain/token/token-id) article |
| issueHeight | Blockchain height (the sequence number of the block) at which the token is issued |
| issueTimestamp | Token issue timestamp: Unix time in milliseconds |
| issuer | [Address](/en/blockchain/account/address) of issuer account: base58 encoded byte array |
| issuerPublicKey | [Public key](/en/blockchain/account/#account-keys) of issuer account: base58 encoded byte array |
| name | Token name. From 4 to 16 bytes (1 character can take up to 4 bytes) |
| description | Token description. From 0 to 1000 bytes |
| decimals | Number of decimal places, from 0 to 8 |
| reissuable | Reissue availability flag |
| quantity | Total supply of token on the blockchain specified in [atomic units](#atomic-unit). From 1 to 9,223,372,036,854,775,807. Total supply can change as a result of reissue or burning, see [Token Operations](#token-operations) below |
| scripted | There being a script: `true` for smart asset, `false` for regular token. [More about smart assets](/en/blockchain/token/smart-asset) |
| minSponsoredAssetFee | For sponsored asset only: an amount of asset that is equivalent to 0.001 WAVES [More about sponsorship](/en/blockchain/waves-protocol/sponsored-fee)
| originTransactionId | ID of [transaction](/en/blockchain/transaction/) that issued the token: base58 encoded byte array |
| scriptDetails | For smart asset only: asset script and its attributes |

### Atomic unit

The amount of token is displayed differently in UIs and in the JSON representation used by the Node REST API. In API requests and responses, amount values are integers indicated in atomic units to avoid precision issues in floating-point calculations.

An atomic unit is the minimum fraction (“cent”) of a token, it is equal to 10<sup>–decimals</sup>.

The amount of token in JSON is the real quantity multiplied by 10<sup>decimals</sup>.

For USD-N in the example above:

* `decimals` = 6,
* atomic unit is 1/1&nbsp;000&nbsp;000 USD-N.
* `"quantity": 999999999471258900` corresponds to 999,999,999,471.258900 USD-N in UIs,

   `"minSponsoredAssetFee": 7420` corresponds to 0.007420 USD-N.

## Token Issue

To issue a token, you have to create an [Issue transaction](/en/blockchain/transaction-type/issue-transaction) within the token parameters:

* `name`
* `description`
* `decimals`
* `quantity`
* `reissuable`
* `script` (for issuing a [smart asset](/en/blockchain/token/smart-asset)).

[Transaction example](https://wavesexplorer.com/tx/DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p)

There are the following options to send the transaction:
* In the [Waves.Exchange](https://waves.exchange/) app developed by the third-party team of the community. See the [Create Asset](https://docs.waves.exchange/en/waves-exchange/waves-exchange-online-desktop/online-desktop-asset/online-desktop-token-creation) article in the Waves.Exchange documentation.
* In [Waves IDE](https://waves-ide.com/), see the [Issuing Smart Asset](/en/building-apps/smart-contracts/tools/waves-ide#issuing-smart-asset) article.
* Using one of the [client libraries](/en/building-apps/waves-api-and-sdk/client-libraries/). See also the examples in the [How to Create Transaction and Send It to Blockchain](/en/building-apps/how-to/basic/transaction) article.

The transaction fee is 1 WAVES for a regular token or 0.001 WAVES for a [non-fungible token (NFT)](/en/ blockchain/token/non-fungible-token).

Moreover, the token can be issued by the [dApp script](/en/blockchain/account/dapp) as a result of the [Invoke Script transaction](/en/blockchain/transaction-type invoke-script-transaction) wherein the callable function result contains the [Issue](/en/ride/structures/script-actions/issue) action. The minimum fee for Invoke Script transaction is increased by 1 WAVES for each non-NFT token issued.

## Token Operations

* Transfer of a token to another account

   Can be done via a [Transfer transaction](/en/blockchain/transaction-type/transfer-transaction) or a [Mass Transfer transaction](/en/blockchain/transaction-type/mass-transfer-transaction).

   > A [dApp script](/en/blockchain/account/dapp) can transfer the token via a [ScriptTransfer](/en/ride/structures/script-actions/issue) script action as a result of an [Invoke Script transaction](/en/blockchain/transaction-type/invoke-script-transaction).

* Exchange (trade deal)

   Three accounts can participate in the exchange: one user creates an [order](/en/blockchain/order) to buy a token, the other creates an order to sell a token. The matcher combines buy and sell orders with suitable parameters and creates an [Exchange transaction](/en/blockchain/transaction-type/exchange-transaction). For more information on the matcher, see the [Waves.Exchange documentation](https://docs.waves.exchange/en/waves-matcher/).

* Burning

   Decreases the amount of token on the account and thereby the total amount of the token on the blockchain. Any token owner can burn it, not only the issuer. Burning [WAVES](/en/blockchain/token/waves) is not possible.

   Can be done via a [Burn transaction](/en/blockchain/transaction-type/burn-transaction).

   > A dApp script can burn the token via a [Burn](/en/ride/structures/script-actions/burn) script action as a result of the Invoke script transaction.

* Payment to [dApp](/en/blockchain/account/dapp)

   An [Invoke Script transaction](/en/blockchain/transaction-type/invoke-script-transaction) can contain up to two payments to the dApp. Payment amount and token are available to the callable function.

### Operations Available Only to Issuer

The following token operations can only be performed by the account that issued the token:

* Sponsorship setup

   The token issuer can enable sponsorship, that is, allow all users to pay a fee in this token (instead od WAVES) for Invoke Script transactions and Transfer transactions. [More about sponsorship](/en/blockchain/waves-protocol/sponsored-fee)

   Enabling or disabling sponsorship can be done via a [Sponsor Fee transaction](/en/blockchain/transaction-type/sponsor-fee-transaction).

   > A dApp script can set up sponsorship using a [SponsorFee](/en/ride/structures/script-actions/sponsor-fee) as a result of the Invoke script transaction.

* Reissue

   Increases the amount of token on the blockchain. The `reissuable` field of token determines whether the token can be reissued.
   
   Can be done via a [Reissue transaction](/en/blockchain/transaction-type/reissue-transaction).
   
   > A dApp script can reissue the token via a [Reissue](/en/ride/structures/script-actions/reissue) script action as a result of the Invoke script transaction.

* Replacing the asset script

   Can be done via a [Set Asset Script transaction](/en/blockchain/transaction-type/set-asset-script-transaction). If the token is not a smart asset, that is, the script was not attached when the token was issued, then it is impossible to attach the script later.

* Modifying the name and / or description

   Can be done via an [Update Asset Info transaction](/en/blockchain/transaction-type/update-asset-info-transaction).

## Tokens of Other Blockchains

A token issued on another blockchain cannot be used directly on the Waves blockchain. However, it is possible to issue a new token on the Waves blockchain, representing the original one, and deploy a gateway that pegs the two tokens 1:1. For example, gateway for a 
[ERC20](https://docs.ethhub.io/guides/a-straightforward-guide-erc20-tokens/) token can be created using the [Waves-ERC20-Gateway](https://github.com/PyWaves/Waves -ERC20-Gateway) framework.
