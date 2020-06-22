# Sponsor Fee Transation

Sponsor fee transaction enables or disables sponsorship. Sponsorship allows allow any user to pay a fee in the sponsored asset (instead of WAVES) for invoke script transactions and transfer transactions. [More about sponsorship](/en/blockchain/waves-protocol/sponsored-fee)

Only the asset issuer can set up sponsorship.

Smart asset cannot be a sponsored asset.

## Transaction Fee

The minimum fee for the sponsor fee transaction is:
• 0,001 after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.
• 1 before activation of feature #15.

If the transaction sender is a [dApp](/en/blockchain/account/dapp) or a [smart account](/en/blockchain/account/smart-account), the minimum fee increases by 0.004 WAVES.

## JSON Representation

```json
{
    "senderPublicKey": "5HNegWomhj1nzyggf1oAvujNJGCqbzFjM72BLYtrBecw",
    "sender": "3N3ErpmUdJWy6DW4ruAr14YDis9UaiTwHd6",
    "feeAssetId": null,
    "proofs": ["5jF8WpF7jxf5SBMHMbc2WcfqX3R6fRvssBGSNfzAM8p3uSmno9XzYy5b565ez5fG9vqUGrENFvcrbhk36bzCaqkP"],
    "assetId": "p1vuxnGyfH9VFiuyKmsh25rn6MedjGbQu7d6Zt1sY4U",
    "fee": 100000000,
    "minSponsoredAssetFee": 100,
    "id": "5gHUMzmBfn4KP3tELzHtw3EYR947rzWUp5PuyF7hUW23",
    "type": 14,
    "version": 1,
    "timestamp": 1585725309659,
    "height": 934757
}
```

| Field | Description |
| :--- | :--- |
| minSponsoredAssetFee | Amount of asset that is equivalent to 0.001 WAVES (100,000 WAVELET): an integer value specified in the minimum fraction (“cents”) of asset.<br>`null` – disable sponsorship |
| assetId | Base58 encoded asset ID |

The fields that are common to all types of transactions are described in the [JSON Representation](/en/blockchain/transaction/#json-representation) section.

## Binary Format

See the [Sponsor Fee Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/sponsor-fee-transaction-binary-format).

## Ride Structure

The [SponsorFeeTransaction](/en/ride/structures/transaction-structures/sponsor-fee-transaction) structure is used for transaction handling in smart contracts.
