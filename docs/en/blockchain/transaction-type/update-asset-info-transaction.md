# Update Asset Info Transaction

Update Asset Info transaction modifies the name and description of token.

> The Update Asset Info transaction type is added starting from node version 1.2.0, after the activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.

The token name and/or description can be changed:
* on Mainnet and Testnet: after 100,000 or more blocks from the last change (or the token issue);
* on Stagenet: after 10 or more blocks.

## Fee

The minimum fee for an Update Asset Info transaction is 0.001 WAVES, in case of a [smart asset](/en/blockchain/token/smart-asset) 0.005 WAVES.

If the transaction sender is a [dApp or smart account](/en/blockchain/account/dapp), the minimum fee is increased by 0.004 WAVES.

Starting from node version 1.3.1, after activation of feature #16 "Ride V5, dApp-to-dApp invocations, Continuations", the extra fee of 0.004 WAVES is only required if the complexity of sender's account script or dApp script verifier function exceeds the [sender complexity threshold](/en/ride/limits/). Versions 1.3.x are currently available for [Stagenet](/en/blockchain/blockchain-network/) only.

## JSON Representation

```json
{
  "senderPublicKey": "6a6r9d3r2ccyE9SvuxmdZbfSHXmKPUoExnigvippJLfu",
  "fee": 100000,
  "description": "xxxXXXxxx",
  "type": 17,
  "version": 1,
  "applicationStatus": "succeeded",
  "sender": "3MQdH4MAmM5RNz5TAT43UXXCvMtCa9YgHq9",
  "feeAssetId": null,
  "chainId": 83,
  "proofs": [
    "4DfvJL4cVisQaMuMB7ar15EtYZTvTZzAUQQMkq4RA3uTMzziVYLrbNHSL2a1eCqBV3YQb7dddXdjywETXHuu65ij"
  ],
  "assetId": "syXBywr2HVY7wxqkaci1jKY73KMpoLh46cp1peJAZNJ",
  "name": "zzzz",
  "id": "4DL8K4bRvYb9Qrys9Auq7hSGuLGq8XsUYZqDDBBfVGMf",
  "timestamp": 1591886337668,
  "height": 411389
}
```

| Field | Description |
| :--- | :--- |
| name | Token name. From 4 to 16 bytes |
| description | Token description. From 0 to 1000 bytes |
| chainId | [Chain ID](/en/blockchain/blockchain-network/#chain-id) |
| assetId | Token ID base58 encoded |

The fields that are common to all types of transactions are described in the [Transaction](/en/blockchain/transaction/#json-representation) article.

## Binary Format

See the [Update Asset Info Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/update-asset-info-transaction-binary-format).

## Ride Structure

The [UpdateAssetInfoTransaction](/en/ride/structures/transaction-structures/update-asset-info-transaction) structure is used for transaction handling in smart contracts.
