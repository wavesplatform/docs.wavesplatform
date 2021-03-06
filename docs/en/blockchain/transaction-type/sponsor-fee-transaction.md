# Sponsor Fee Transaction

Sponsor Fee transaction enables or disables sponsorship. Sponsorship allows any user to pay a fee in the sponsored asset (instead of WAVES) for Invoke Script transactions and Transfer transactions. [More about sponsorship](/en/blockchain/waves-protocol/sponsored-fee)

Only the asset issuer can set up sponsorship.

Smart asset cannot be a sponsored asset.

## Transaction Fee

The minimum fee for the Sponsor Fee transaction is 0.001 WAVES. (Before activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions” it was 1 WAVES.)

If the transaction sender is a [dApp or smart account](/en/blockchain/account/dapp), and the complexity of the account script or dApp script verifier function exceeds the [sender complexity threshold](/en/ride/limits/), the minimum fee is increased by 0.004 WAVES. (Before activation of feature #16 “Ride V5, dApp-to-dApp invocations”, the extra fee of 0.004 WAVES was required regardless of the complexity of the account script or the presence and complexity of the dApp script verifier function.)

## JSON Representation

```json
{
  "senderPublicKey": "5HNegWomhj1nzyggf1oAvujNJGCqbzFjM72BLYtrBecw",
  "sender": "3N3ErpmUdJWy6DW4ruAr14YDis9UaiTwHd6",
  "feeAssetId": null,
  "proofs": [
    "5jF8WpF7jxf5SBMHMbc2WcfqX3R6fRvssBGSNfzAM8p3uSmno9XzYy5b565ez5fG9vqUGrENFvcrbhk36bzCaqkP"
  ],
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
| assetId | Token ID base58 encoded |

The fields that are common to all types of transactions are described in the [Transaction](/en/blockchain/transaction/#json-representation) article.

## Binary Format

See the [Sponsor Fee Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/sponsor-fee-transaction-binary-format).

## Ride Structure

The [SponsorFeeTransaction](/en/ride/structures/transaction-structures/sponsor-fee-transaction) structure is used for transaction handling in smart contracts.
