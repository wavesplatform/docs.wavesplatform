# Issue Transaction

Issue transaction creates a new [token](/en/blockchain/token/).

## Fee

The minimum fee for an Issue transaction is 1 WAVES, in case of issue of a [non-fungible token (NFT)](/en/blockchain/token/non-fungible-token) 0.001 WAVES.

If the transaction sender is a [dApp or smart account](/en/blockchain/account/dapp), and the complexity of the account script or dApp script verifier function exceeds the [sender complexity threshold](/en/ride/limits/), the minimum fee is increased by 0.004 WAVES. (Before activation of feature #16 “Ride V5, dApp-to-dApp invocations”, the extra fee of 0.004 WAVES was required regardless of the complexity of the account script or the presence and complexity of the dApp script verifier function.)

## JSON Representation

```json
{
  "senderPublicKey": "2M25DqL2W4rGFLCFadgATboS8EPqyWAN3DjH12AH5Kdr",
  "quantity": 50000,
  "fee": 100000000,
  "description": "Script true.",
  "type": 3,
  "version": 2,
  "reissuable": true,
  "script": "base64:AQa3b8tH",
  "sender": "3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7",
  "feeAssetId": null,
  "chainId": 84,
  "proofs": [
    "4yjVxzrLuXUq5y2QCa2LDn1Fp9P63hPBmqDLGQCqn41EB1uZ1pys79NP81h7FxRBnZSbpNGbz1xjwckHcPAQHmFX"
  ],
  "assetId": "7Xpp9PPeZbG4wboJrcbRQdq3SxCJqbeFRUjjKccM1DsD",
  "decimals": 2,
  "name": "Smart",
  "id": "7Xpp9PPeZbG4wboJrcbRQdq3SxCJqbeFRUjjKccM1DsD",
  "timestamp": 1548653407494,
  "height": 469677
}
```

| Field | Description |
| :--- | :--- |
| name | Token name. From 4 to 16 bytes (1 character can take up to 4 bytes) |
| description | Token description. From 0 to 1000 bytes |
| quantity | Token quantity: an integer value specified in the minimum fraction (“cents”), that is, the real quantity multiplied by 10<sup>decimals</sup>. From 1 to 9,223,372,036,854,775,807.<br>1 for NFT |
| decimals | Number of decimal places, from 0 to 8.<br>0 for NFT |
| reissuable | Reissue availability flag, see the [Reissue Transaction](/en/blockchain/transaction-type/reissue-transaction) article.<br>`false` for NFT |
| script | For the [smart asset](/en/blockchain/token/smart-asset): the compiled [asset script](/en/ride/script/script-types/asset-script), up to 8192 bytes, base64 encoded.<br>For the token without a script: `null`. The token issued without a script cannot be converted to a smart asset |
| chainId | [Chain ID](/en/blockchain/blockchain-network/#chain-id) |
| *assetId* | Token ID base58 encoded. The token ID is the same as the Issue transaction ID |

The `assetId` field does not need to be filled when sending a transaction, and it is not stored on the blockchain. The node calculates these fields when providing transaction data via the REST API.

The fields that are common to all types of transactions are described in the [Transaction](/en/blockchain/transaction/#json-representation) article.

## Binary Format

See the [Issue Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/issue-transaction-binary-format).

## Ride Structure

The [IssueTransaction](/en/ride/structures/transaction-structures/issue-transaction) structure is used for transaction handling in smart contracts.
