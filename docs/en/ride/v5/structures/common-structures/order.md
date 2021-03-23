# [Ride v5] Order

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/structures/common-structures/order)

Structure of an [order](/en/blockchain/binary-format/order-binary-format). The structure is used:
* when checking an outgoing order by the [account script](/en/ride/script/script-types/account-script) or the verifier function of the [dApp script](/en/ride/script/script-types/dapp-script),
* in the [InvokeScriptTransaction](/en/ride/v5/structures/transaction-structures/invoke-script-transaction).

## Constructor

``` ride
Order(id: ByteVector, matcherPublicKey: ByteVector, assetPair: AssetPair, orderType: Buy|Sell, price: Int, amount: Int, timestamp: Int, expiration: Int, matcherFee: Int, matcherFeeAssetId: ByteVector|Unit, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | id | [ByteVector](/en/ride/v5/data-types/byte-vector) | ID of an order |
| 2 | matcherPublicKey | [ByteVector](/en/ride/v5/data-types/byte-vector) | Public key of a matcher |
| 3 | assetPair | [AssetPair](/en/ride/v5/structures/common-structures/asset-pair) | Pair of [tokens](/en/blockchain/token/) |
| 4 | orderType | Buy&#124;Sell | Type of an order — selling or buying |
| 5 | price | [Int](/en/ride/v5/data-types/int) | Price of a token to exchange |
| 6 | amount | [Int](/en/ride/v5/data-types/int) | Number of tokens to exchange |
| 7 | timestamp | [Int](/en/ride/v5/data-types/int) | [Unix time](https://en.wikipedia.org/wiki/Unix_time) of the validation of an order by a matcher  |
| 8 | expiration | [Int](/en/ride/v5/data-types/int) | Unix time when an uncompleted order will be cancelled |
| 9 | matcherFee | [Int](/en/ride/v5/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 10 | matcherFeeAssetId | [ByteVector](/en/ride/v5/data-types/byte-vector)&#124;[Unit](/en/ride/v5/data-types/unit) | Token of a transaction fee.<br>It can only be [WAVES](/en/blockchain/token/waves) |
| 11 | sender | [Address](/en/ride/v5/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the sender of an order |
| 12 | senderPublicKey | [ByteVector](/en/ride/v5/data-types/byte-vector) | Public key of the sender of an order |
| 13 | bodyBytes | [ByteVector](/en/ride/v5/data-types/byte-vector) | Array of bytes of an order |
| 14 | proofs | [List](/en/ride/v5/data-types/list)[[ByteVector](/en/ride/v5/data-types/byte-vector)] | Array of [proofs](/en/blockchain/transaction/transaction-proof) |

## Example

The script below enables buying from a sender's account:

- only the specified asset,
- only at a given price,
- only for WAVES.

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}

let myAssetId = base58'8LLpj6yQLUu37KUt3rVo1S69j2gWMbgbM6qqgt2ac1Vb'

match tx {
   case o: Order =>
        let isWavesPriceAsset = !isDefined(o.assetPair.priceAsset)
        let rightPair = (o.assetPair.amountAsset == myAssetId) && isWavesPriceAsset
        sigVerify(o.bodyBytes, o.proofs[0], o.senderPublicKey)
        && rightPair
        && o.price == 500000
        && o.orderType == Buy
   case _ => false
}
```
