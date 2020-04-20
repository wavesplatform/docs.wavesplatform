# Asset

Structure of a [token](/en/blockchain/token). The structure is returned by the [assetInfo](/en/ride/functions/built-in-functions/blockchain-functions#assetinfo) built-in function.

## Constructor

``` ride
Asset(id: ByteVector, quantity: Int, decimals: Int, issuer: Address, issuerPublicKey: ByteVector, reissuable: Boolean, scripted: Boolean, sponsored: Boolean)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | id | [ByteVector](/en/ride/data-types/byte-vector) | [Token ID](/en/blockchain/token/token-id) |
| 2 | quantity | [Int](/en/ride/data-types/int) | Amount of issued token, multiplied by 10<sup>decimals</sup>. Up to 9&nbsp;223&nbsp;372&nbsp;036&nbsp;854&nbsp;775&nbsp;806 |
| 3 | decimals | [Int](/en/ride/data-types/int) | Number of decimal places, 0 to 8 |
| 4 | issuer | [Address](/en/ride/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the [account](/en/blockchain/account) that issued a token |
| 5 | issuerPublicKey | [ByteVector](/en/ride/data-types/byte-vector) | Public key of the account that issued a token |
| 6 | reissuable | [Boolean](/en/ride/data-types/boolean) | true — token can be reissued, false — cannot be reissued |
| 7 | scripted | [Boolean](/en/ride/data-types/boolean) | true — [smart asset](/en/building-apps/smart-contracts/what-is-smart-asset), false — regular token |
| 8 | sponsored | [Boolean](/en/ride/data-types/boolean) | true — token can be sponsored, false — cannot be sponsored |
