# Version 1.2 (Stagenet)

## Node Improvements

* The mechanism for [generating blocks](/en/blockchain/block/block-generation) has been improved through the use of [VRF](https://en.wikipedia.org/wiki/Verifiable_random_function) (Verifiable random function). This improvement allows withstanding stake grinding attacks, which are used by the attackers to try to increase the probability of generating a block for themselves.
* Changed the scheme for signing the block transactions by the mining node. Previously, the miner needed to sign the block header along with all transactions. Now [MerkleRootHash](https://en.wikipedia.org/wiki/Merkle_tree) is added to the header, and the MerkleRootHash contains hashes of all transactions of the block. So there is no need to sign all transactions, it is enough to sign only the header.
* Implemented the feature of the deletion of the records from the account data storage. This action can be performed using a [data transaction](/en/blockchain/transaction-type/data-transaction) or the [DeleteEntry](/en/ride/structures/common-structures/delete-entry) structure of the Ride language.
* Implemented the feature of changing the released assets name and description. For this means, the [update asset info transaction](/en/blockchain/transaction-type/update-asset-info-transaction) is used.
* The minimal fee for the [reissue transaction](/en/blockchain/transaction-type/reissue-transaction) is reduced from 1 to 0.001 WAVES.
* Added the feature of describing the transactions in protobuf format.
* [Issue transaction](/en/blockchain/transaction-type/issue-transaction)'s name and description fields type changed from bytes to string.
* [Transfer](/en/blockchain/transaction-type/transfer-transaction) and [mass transfer transaction](/en/blockchain/transaction-type/mass-transfer-transaction)'s attachment field type was changed to [union](/en/ride/data-types/union) `(type: Int|Boolean|ByteVector|String)`.
* The maximum data size in [data transaction](/en/blockchain/transaction-type/data-transaction) increased to 165890 bytes.
* Changed the [orders](/en/blockchain/order)' price calculation formula. Earlier, when determining the price for assets with different numbers of decimal places, there was a price value size issue. The maximum value depended on the difference of decimal digits of assets. For example, the price for an [NFT](/en/blockchain/token/non-fungible-token) asset could not exceed 1000 WAVES. The modified formula corrects this problem. Decimal places no longer affect the maximum price.

## REST API Updates

* Updated `GET /assets/details/{assetId}` endpoint. Multiple assets details can be acquired by passing the array of `assetId`. The endpoint is now available via POST method. Response JSON now contains `originTransactionId` field which contains the ID of the transaction issued the `{assetId}` asset.
* Updated `GET /assets/nft/{address}/limit/{limit}` endpoint. Response JSON now includes `assetDetails` array containing the list of NFT-assets belonging to the designated address. Also, the POST request can be made to this endpoint.
* Implemented the `GET /transactions/merkleProof?id=some1&id=some2` endpoint. This endpoint gets the transaction ID or the array of transactions IDs and returns the array of proofs for checking `MerkleRootHash`.
* The endpoints listed below now contain the `transactionsRoot` field which contains the `MerkleRootHash` of block's transactions.
  * `GET /blocks/headers/last`
  * `GET /blocks/headers/seq/{from}/{to}`
  * `GET /blocks/headers/at/{height}`
  * `GET /blocks/at/{height}`
  * `GET /blocks/signature/{signature}`
  * `GET /blocks/address/{address}/{from}/{to}`
  * `GET /blocks/last`
  * `GET /blocks/seq/{from}/{to}`

## Ride Improvements

* Version 4 of the Ride [standard library](/en/ride/script/standard-library) was issued.
* Added the [median(List[Int])](/en/ride/functions/built-in-functions/math-functions#median) built-in math function. This function calculates a median of the list of integers. Its complexity equals 10.
* Added the `calculateAssetId(issue: Issue)` function which calculates ID of asset obtained by invoke script transaction's call of the [Issue](/en/ride/structures/common-structures/issue) structure.
* Added the DeleteEntry structure for deleting the [account data storage](/en/blockchain/account/account-data-storage) entries.
* Added the feature of issuing/reissuing/burning tokens in the [dApp](/en/blockchain/account/dapp) script. A single transaction can contain up to 10 invocations for the token issue/reissue/burn.
* Invoke script transaction's fee increased by 1 WAVES for each non-NFT asset issued by the transaction's Issue structure.
* The [callable](/en/ride/functions/callable-function) functions result format was modified. The following structures were removed from it: ScriptResult, WriteSet и TransferSet. Instead, the results list can be returned in arbitrary order:  [[StringEntry](/en/ride/structures/common-structures/string-entry), [Issue](/en/ride/structures/common-structures/issue), [ScriptTransfer](/en/ride/structures/common-structures/script-transfer), [BooleanEntry](/en/ride/structures/common-structures/boolean-entry), [BinaryEntry](/en/ride/structures/common-structures/binary-entry), [IntEntry](/en/ride/structures/common-structures/int-entry), [DeleteEntry](/en/ride/structures/common-structures/delete-entry), [Reissue](/en/ride/structures/common-structures/reissue), [Burn](/en/ride/structures/common-structures/burn)].
* The [DataEntry](/en/ride/structures/common-structures/data-entry) structure was removed. The following structures were added instead:
  * BinaryEntry. Writes binary data to the account data storage.
  * BooleanEntry. Writes boolean data to the account data storage.
  * IntegerEntry. Writes integer data to the account data storage.
  * StringEntry. Writes string data to the account data storage.
* Implemented the ability to process in dApp up to two payments attached to the invoke script transaction.
* Added the [groth16verify](/en/ride/functions/built-in-functions/blockchain-functions#groth) built-in function for zero-knowledge proof verification. Its complexity equals 1900.
* Added the [valueOrElse(t: T|Unit, t0 : T)](/ru/ride/functions/built-in-functions/union-functions#valueOrElse) built-in function that returns a value from the union type if it's not empty. Its complexity equals 13.
* Added the [contains(source: String, substr: String)](/ru/ride/functions/built-in-functions/string-functions#contains) built-in function which checks whether the second argument (substring) is contained in the first string argument. Its complexity equals 20.
* Now the list can be the function argument.
* Added the following list operators:
  * ++ for the concatenation of lists. Example: the result of `[1, 2] ++ [3, 4]` is `[1, 2, 3, 4]`. Its complexity equals 10.
  * `:+` for adding an element to the end of the list. Example: the result of `["foo","bar"] :+ "baz"` is `["foo", "bar", "baz"]`. Its complexity equals 3.

## Activation

To activate the listed above features, vote for Feature 15 (VRF and Protobuf) and Feature 16 (Ride V4 and multiple attached payments for Invoke Script Transaction).
