# Non-fungible token

A **non-fungible token** or **NFT** is a special type of a [token](/blockchain/token.md), that represents some _unique_ object.

Two regular tokens cannot be distinguished from each other — they are alike, i.e. _fungible_. Each NFT token is unique, and therefore NFTs are _non-fungible_. Any two NFTs can always be distinguished.

Every NFT has a unique ID.

NFTs are most commonly used in games.

## Issue of non-fungible tokens

The issue of a single non-fungible token is made by an issue transaction; for such a transaction, the value of the "Amount" field equals 1, and the values of the fields "Number of decimal places" and "Reissue flag" equal 0.

To issue NFTs you can use the [waves-games](https://www.npmjs.com/package/@waves/waves-games) npm package.

The fee for the issue of a single NFT is 0.001 [WAVES](/blockchain/token/waves.md).

### JSON representation of an issue transaction of a non-fungible token

```json
{
  "type": 3,
  "version": 1,
  "chainId": 87,
  "senderPublicKey": "FkoFqtAeibv2E6Y86ZDRfAkZz61LwUMjLAP2gmS1j7xe",
  "name": "The One Ring",
  "description": "Ash nazg durbatulûk, ash nazg gimbatul, ash nazg thrakatulûk, agh burzum-ishi krimpatul.",
  "amount": 1,
  "decimals": 0,
  "reissuable": false,
  "fee": 100000,
  "timestamp": 1485529001965,
  "script": null,
  "proofs": [
    "2kSNWQM7zx4xXkSZrksZPSNYY32WXAdvQcBTvySMrtZ5rzWYpyXYcm8tbdUSjbyBT2LtMfiyQnYXguxrMdLpWgCq"
  ],
  "id": "8jfD2JBLe23XtCCSQoTx5eAW5QCU6Mbxi3r78aNQLcNf",
  "sender": "3Mv61qe6egMSjRDZiiuvJDnf3Q1qW9tTZDB",
  "feeAssetId": null,
  "assetId": "8jfD2JBLe23XtCCSQoTx5eAW5QCU6Mbxi3r78aNQLcNf",
  "height": 193
}
```
