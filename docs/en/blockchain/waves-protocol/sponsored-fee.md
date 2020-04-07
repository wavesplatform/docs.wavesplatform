# Sponsored Fee

Users of Waves-based apps should pay a fee for each transaction. This is the entry threshold for new users. Sometimes users do not know anything about WAVES, or do not understand how to get WAVES or do not want to spend money. The sponsorship enables to launch applications that do not require WAVES from users.

## Sponsored asset

An account that launched an asset can enable sponsorship, that is, to allow any user to pay a fee in this asset for invoke script transactions and transfer transactions. Sponsor can distribute sponsored asset among app users.

## How It Works

After [enabling sponsorship](#how-to-enable-sponsorsip), if the [restrictions](#restrictions) are met, sponsorsip works as follows:

1. A user broadcasts a trancasction and specifies a fee in the sponsored asset.
2. The sponsor receives the fee in the sponsored asset from the user's account.
3. Block generators receive the fee in WAVES from the sponsor's account (in accordance with the [Waves-NG](/en/blockchain/waves-protocol/waves-ng-protocol) protocol, the fee is distributed between the current block generator and the next block generator in a ratio of 40/60).

> The script on the sponsor's account is not executed and does not affect the sponsorship because the transaction is sent from the user's account.

![](./_assets/sponsorship.png)

The fee in WAVES charged to the sponsor is proportional to the fee specified by the transaction sender:

`feeInWaves` = `feeInSponsoredAsset` × 0,001 / `minSponsoredAssetFee`

`minSponsoredAssetFee` is the amount of sponsored asset equivalent to 0.001 WAVES. The sponsor sets this value when the sponsorship is enabled.

For example, if the sponsor sets 3 tokens = 0.001 WAVES, then the minimun fee for invoke script transaction is 15 tokens, which corresponds to 0.005 WAVES.

:warning: Please note:

* The user can use the sponsored asset to pay for transactions that are not related to the certain app.
* The user can specify any amount of fee, including such as the one significantly exceeding the minimum.

## How to Enable Sponsorship

To enable sponsorship, you need to put a sponsor fee transaction  with `minSponsoredAssetFee` specified in it. [Example of transaction](https://wavesexplorer.com/testnet/tx/5gHUMzmBfn4KP3tELzHtw3EYR947rzWUp5PuyF7hUW23)

> In the binary and JSON format of the transaction, the value of `minSponsoredAssetFee` is specified in the minimum fraction (“cent”) of the sponsored asset. 

There are the following options to put the transaction:
* In [Waves.Exchange](https://waves.exchange/) app developed by Waves.Exchange team. See the [Sponsored Transaction](https://docs.waves.exchange/en/waves-exchange/waves-exchange-online-desktop/online-desktop-asset/online-desktop-sponsored-trx) article of Waves.Exchange documentation.
* Using [client libraries](/en/building-apps/waves-api-and-sdk/client-libraries/). See also the [Creating and broadcasting transactions to the blockchain](/en/building-apps/how-to/basic/transaction) article.

The fee for the sponsor fee transaction is 1 WAVES.

## How to Disable Sponsorship

To disable sponsorship, you need to put a sponsor fee transaction in which `minSponsoredAssetFee` is `null`.

## Restrictions

* Only the issuer of an asset can be a sponsor.
* A smart asset cannot be a sponsored asset.
* Sponsorship only works if the sponsor's account balance is greater than 1.005 Waves. When the balance becomes smaller, sponsorship is suspended, and when it is larger, it is resumed.
* The fee in the sponsored asset can only be specified for invoke script transactions and transfer transactions.

## Discussion

Improvement of sponsorship is discussed at the Waves community forum in the [WEP-2 Customizable Sponsorship](https://forum.wavesplatform.com/t/wep-2-customizable-sponsorship/15880) section.
