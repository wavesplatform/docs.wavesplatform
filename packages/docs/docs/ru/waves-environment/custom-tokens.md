# Assets

Asset is a sort of a digital asset that has a certain consensus value. The Waves platform allows users to create their own tokens to fulfill their specific need.

# 1. Issuing your own Token 

Waves platform allows business to issue their own tokens for whatever needs they have. By releasing tokens, a business is able to create an internal digital currency via the blockchain. This way, it can use the blockchain to pay for the services and goods within projects or even crowdfunding.

Issuing a token on the Waves Platform comes with multiple benefits, including the ability to trade the token instantly on the Waves Decentralized Exchange. Not only that, but Waves tokens can also be used to pay fees within the network, creating additional demand for custom assets on its blockchain. After the initial creation of an asset, the total tokens supply can be further increased.

# 2. Assets Operations \(Issue, Reissue and Burn an Asset\) 

You can find more details about [_**Asset Transactions here**_.](/waves-api-and-sdk/waves-node-rest-api/asset-transactions.md)

## 2.1 Issue Asset Transaction 

This transaction is responsible to create a new asset depending on the user-specific needs.

| Field | Field Value |
| :--- | :--- |
| Name | \[Asset name\] String \[4-16\] - asset identification. Does not have to be unique. |
| Details | \[Brief description of the asset\] String \[0-1000\] - asset description text. |
| Quantity | \[Total number of tokens\] Long - quantity of the assets issued. The decimal places have to be taken into account, that is Quantity is multiplied by the number of decimal places on API level in order to be able to work only with integer values. |
| Reissuable | \[Possibility of additional issuance which determines if additional assets can be issued later\]Boolean - a flag which determines if additional assets can be issued later. |
| Decimals | Byte \[0-8\] - the number of decimal places. |
| Issue Date | \[Asset creation date\]. |
| Fee | \[The fees for creating your own tokens is 1 WAVES\] Int - fee offered to the miners. |

## 2.2 Reissue Asset Transaction 

Only the asset issuer is able to reissue the asset if the issuer needs to increase the amount of his total token supply.

| Field | Field Value |
| :--- | :--- |
| Issuer | \[Number of the Waves address from which the token was created\] Array\[Byte\] - txid of the issuing transaction. |
| Identifier | \[Asset identifier. Unique value, cannot be repeated\] Array\[Byte\] - in case of reissue of a reissuable asset txid of the first issue transaction. |
| Quantity | \[Additional quantity of assets to issue \(number of indivisible pieces of assets\)\] Long. |
| Reissue Date | \[Reissue asset creation date\]. |
| Fee | \[The fees for creating your own tokens is 1 WAVES\] Int - fee offered to the miners. |

## 2.3 Burn Asset 

Any address holding a given asset can choose to destroy some or all of the assets it holds. The asset state and skip lists are being recalculated based on the Delete transaction.

| Field | Field Value |
| :--- | :--- |
| Issuer | \[Number of the Waves address from which the token was created\] Array\[Byte\] - txid of the issuing transaction. |
| Quantity | \[Amount of assets to burn \(number of indivisible pieces of assets\)\]. |
| Burn Date | \[Burn asset deletion date\]. |
| Fee | \[Transaction Fee\]. |

# 3. Pre-ICO Token Sale on Waves DEX 

You need to do the following if you want to pre-sell your ICO tokens on the DEX platform:

1. Decide on the amount of desired investment.
2. Set the price for the token.
3. Issue a series of sell orders.

The tokens sold will be automatically available to all clients immediately after investing in your project.

