# [Ride v5] Asset

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/structures/common-structures/asset)

Structure of a [token](/en/blockchain/token/). The structure is returned by the [assetInfo](/en/ride/v5/functions/built-in-functions/blockchain-functions#assetinfo) built-in function.

## Constructor

``` ride
Asset(id: ByteVector, quantity: Int, decimals: Int, issuer: Address, issuerPublicKey: ByteVector, reissuable: Boolean, scripted: Boolean, minSponsoredFee: Int|Unit, name: String, description: String)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | id | [ByteVector](/en/ride/v5/data-types/byte-vector) | [Token ID](/en/blockchain/token/token-id) |
| 2 | quantity | [Int](/en/ride/v5/data-types/int) | Amount of issued token, multiplied by 10<sup>decimals</sup>. Up to 9&nbsp;223&nbsp;372&nbsp;036&nbsp;854&nbsp;775&nbsp;806 |
| 3 | decimals | [Int](/en/ride/v5/data-types/int) | Number of decimal places, 0 to 8 |
| 4 | issuer | [Address](/en/ride/v5/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the [account](/en/blockchain/account/) that issued a token |
| 5 | issuerPublicKey | [ByteVector](/en/ride/v5/data-types/byte-vector) | Public key of the account that issued a token |
| 6 | reissuable | [Boolean](/en/ride/v5/data-types/boolean) | true — token can be reissued, false — cannot be reissued |
| 7 | scripted | [Boolean](/en/ride/v5/data-types/boolean) | true — [smart asset](/en/building-apps/smart-contracts/what-is-smart-asset), false — regular token |
| 8 | minSponsoredFee | [Int](/en/ride/v5/data-types/int)&#124;[Unit](/en/ride/v5/data-types/unit) | Amount of asset that is equivalent to 0.001 WAVES (100,000 WAVELET), specified in the minimum fraction (“cents”) of asset. See the [Sponsored fee](/en/blockchain/waves-protocol/sponsored-fee) article<br>`unit`: sponsorship is disabled. |
| 9 | name | [String](/en/ride/v5/data-types/string) | Token name, up to 16 characters |
| 10 | description | [String](/en/ride/v5/data-types/string) | Token description, up to 1000 characters |

## Example

Get the account balance in a given asset:

```scala
let address=base58'3Mw48B85LvkBUhhDDmUvLhF9koAzfsPekDb'
let assetId=base58'GpxmxorKXLz1V7xootrvGyFgqP2tTTBib5HEm8QGZTHX'
assetBalance(Address(address), assetId)
```
