# Release Notes

## Version 1.3 (Stagenet)

### Protocol Enhancements

* **dApp-to-dApp invocation.** A dApp callable function can invoke a callable function of another dApp, or another callable function of the same dApp, or even itself. All invoked functions are executed within a single Invoke Script transaction. The total complexity is limited. [More about dApp-to-dApp invocation](/en/ride/advanced/dapp-to-dapp)
* Amended [Invoke Script transaction](/en/blockchain/transaction-type/invoke-script-transaction):
   * Canceled the extra fee of 0.004 WAVES for smart assets in payments and script actions.
   * Transaction can contain up to 10 attached payments.
   * The total complexity for all callable functions and asset scripts involved is limited by 52,000 (the sender's account script complexity is not included in this limit). 
* For all types of transactions, canceled the extra fee of 0.004 WAVES for sending a transaction from a smart account or dApp unless the complexity of sender's account script or dApp script verifier function exceeds 200.
<!--* **Continued computations.** Added support for dApp scripts with complexity over 4000. The execution of such a script is split into several stages. The first stage of computations is performed within the Invoke Script transaction. The further stages are performed within Continuation transactions. [More about continued computations](/en/ride/advanced/continuation)
   * Implemented the new transaction type: [Continuation](/en/blockchain/transaction-type/continuation-transaction). A block generator creates the Continuation transaction if there is an incomplete computation sequence. A user cannot send a Continuation transaction.
   * Added version 3 for the [Invoke Script transaction](/en/blockchain/transaction-type/invoke-script-transaction) that can invoke a script with complexity over 4000.-->

### Ride

* Issued [version 5](/en/ride/v5/) of the Ride [Standard library](/en/ride/script/standard-library).
* Enabled processing up to 10 payments attached to the Invoke Script transaction.
* Added the [Invoke](/en/ride/v5/functions/built-in-functions/dapp-to-dapp) function for dApp-to-dApp invocation.
* Added [strict variables](/en/ride/v5/variables/) that are evaluated before the next expression to ensure executing callable functions and applying their actions in the right order.
* Modified the [callable function result](/en/ride/v5/functions/callable-function#invocation-result) by adding a return value.
* Modified the [Invocation](/en/ride/v5/structures/common-structures/invocation) structure: in case of dApp-to-dApp invocation, the structure contains the address and public key of both the sender of the Invoke Script transaction and the dApp account that invokes the callable function.
* Added script actions that the callable function can perform:
   * [Lease](/en/ride/v5/structures/script-actions/lease) — leases WAVES.
   * [LeaseCancel](/en/ride/v5/structures/script-actions/lease-cancel) — cancels a specified lease.

   Using these actions, you can change the amount of the lease, in particular, withdraw a part of the leased funds. If you cancel a lease for a larger amount and create a new lease for a smaller amount with the same recipient in the same script invocation, the recipient's generating balance decreases by the difference. Otherwise, if you send two separate transactions: a Lease Cancel transaction and a Lease transaction, they can be added to a different blocks and therefore generating balance decreases by the amount of the canceled lease immediately and increases by the amount of the new lease after 1000 blocks.

* Added the function [calculateLeaseId](/en/ride/v5/functions/built-in-functions/blockchain-functions#calculateleaseid) that calculates ID of the lease formed by the `Lease` structure.
<!-- * Added the following [account data storage functions](/en/ride/v5/functions/built-in-functions/account-data-storage-functions) that allow the dApp script to read entries of its own data storage at any stage of the computations:
   * `getBinary(key: String): ByteVector|Unit`
   * `getBinaryValue(key: String): ByteVector`
   * `getBoolean(key: String): Boolean|Unit`
   * `getBooleanValue(key: String): Boolean`
   * `getInteger(key: String): Int|Unit`
   * `getIntegerValue(key: String): Int`
   * `getString(key: String): String|Unit`
   * `getStringValue(key: String): String` -->
* Added an arbitrary data type — [Any](/en/ride/v5/data-types/any).
* Added the [BigInt](/en/ride/v5/data-types/bigint) data type of 64 bytes (512 bits) and functions supporting it:
   * [fractionBigInt(BigInt, BigInt, BigInt): BigInt](/en/ride/v5/functions/built-in-functions/math-functions#fractionbigint)
   * [fractionBigInt(BigInt, BigInt, BigInt, Union): BigInt](/en/ride/v5/functions/built-in-functions/math-functions#fractionbigintround)
   * [logBigInt(BigInt, Int, BigInt, Int, Int, Union): BigInt](/en/ride/v5/functions/built-in-functions/math-functions#logbigint)
   * [maxBigInt(List[BigInt]): BigInt](/en/ride/v5/functions/built-in-functions/list-functions#maxbigint)
   * [medianBigInt(List[BigInt]): BigInt](/en/ride/v5/functions/built-in-functions/math-functions#medianbigint)
   * [minBigInt(List[BigInt]): BigInt](/en/ride/v5/functions/built-in-functions/list-functions#minbigint)
   * [powBigInt(BigInt, Int, BigInt, Int, Int, Union): BigInt](/en/ride/v5/functions/built-in-functions/math-functions#powbigint)
   * [parseBigInt(String): BigInt|Unit](/en/ride/v5/functions/built-in-functions/converting-functions#parse-bigint)
   * [parseBigIntValue(String): BigInt](/en/ride/v5/functions/built-in-functions/converting-functions#parse-bigintvalue)
   * [toBigInt(ByteVector): BigInt](/en/ride/v5/functions/built-in-functions/converting-functions#to-bigint-bytevector)
   * [toBigInt(ByteVector, Int, Int): BigInt](/en/ride/v5/functions/built-in-functions/converting-functions#to-bigint-bytevector-int-int)
   * [toBigInt(Int): BigInt](/en/ride/v5/functions/built-in-functions/converting-functions#to-bigint-int)
   * [toBytesBigInt(BigInt): ByteVector](/en/ride/v5/functions/built-in-functions/converting-functions#to-bytes-bigint)
   * [toInt(BigInt): Int](/en/ride/v5/functions/built-in-functions/converting-functions#to-int-bigint)
   * [toStringBigInt(BigInt): String](/en/ride/v5/functions/built-in-functions/converting-functions#to-string-bigint)

### Node REST API

#### Breaking Changes

<!--* Added the new transaction type: [Continuation](/en/blockchain/transaction-type/continuation-transaction).-->
A lease can be created both as a result of a Lease transaction and as a result of an Invoke Script transaction via a `Lease` script action. Therefore, the response of the following endpoints has been changed:
* In the response of `/transactions/address/{address}/limit/{limit}` and `/transactions/info/{id}` endpoints for Lease Cancel transaction, the `lease` structure now contains lease parameters instead of Lease transaction fields.
* `/leasing/active/{address}` returns an array of structures containing lease parameters instead of array of Lease transactions.

<details>
<summary>Format</summary>
    
```json
"lease":
   {
      "leaseId": "4AZU8XPATw3QTX3BLyyc1iAZeftSxs7MUcZaXgprnzjk",
      "originTransactionId": "4AZU8XPATw3QTX3BLyyc1iAZeftSxs7MUcZaXgprnzjk",
      "sender": "3PC9BfRwJWWiw9AREE2B3eWzCks3CYtg4yo",
      "recipient": "3PMj3yGPBEa1Sx9X4TSBFeJCMMaE3wvKR4N",
      "amount": 1000000000000,
      "height": 2253315
   }
```

The `originTransactionId` field can contain an ID of a Lease Transaction or an Invoke Script transaction.
</details>

#### Semantic Changes

<!--* For [Invoke Script](/en/blockchain/transaction-type/invoke-script-transaction) transaction version 3 the fields `extraFeePerStep` and `continuationtransactionIds` and added the `script_execution_in_progress` value for the `applicationStatus` field in the output of the endpoints providing transaction info.-->
* dApp-to-dApp invocation results are added as the `invokes` array to the `stateChanges` structure returned by the following endpoints:
   * `/transactions/info/{id}`
   * `/transactions/address/{address}/limit/{limit}`

   Each element of `invokes` array, in turn,  also contains `stateChanges`.

   <details>
      <summary>Format</summary>
    
   ```json
   "stateChanges": {
     "data": [],
     "transfers": [],
     "issues": [],
     "reissues": [],
     "burns": [],
     "invokes": [
       {
         "dApp": "3PC9BfRwJWWiw9AREE2B3eWzCks3CYtg4yo",
         "payment": [
           {
             "amount": 50000000,
             "assetId": "DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p"
           }
         ],
         "call": {
           "function": "swapNeutrinoToWaves",
           "args": [
             {
               "type": "string",
               "value": "EUR"
             },
             {
               "type": "integer",
               "value": 843699
             },
             {
               "type": "binary",
               "value": "base64:OK+armP11YmAyoQOwl8jLDLi2dK2sRc1Ue2QzZX1wgRmwGASLhllv1iKg2fRKS8cAlSDrfMYPb6374WMC9gFgA=="
             }
           ]
          },
         "stateChanges": {
            "data": [],
            "transfers": [],
            "issues": [],
            "reissues": [],
            "burns": [],
            "sponsorFees": [],
            "invokes": []
          }
       }
      ]
   }
   ```
   </details>

* Results of the `Lease` and `LeaseCancel` script actions are added to the The `stateChanges` structure.

   <details>
      <summary>Format</summary>

   ```json
   "stateChanges": {
      "leases": [
        {
          "leaseId": "5fmWxmtrqiMp7pQjkCZG96KhctFHm9rJkMbq2QbveAHR",
          "recipient": "3PLosK1gb6GpN5vV7ZyiCdwRWizpy2H31KR",
          "amount": 500000
        }
      ],
      "leaseCancels": [
         {
            "leaseId": "4iWxWZK9VMZMh98MqrkE8SQLm6K9sgxZdL4STW8CZBbX"
         }
      ]
   }
   ```
   </details>

* Results of `Lease` and `LeaseCancel` script actions are also added to the `trace` structure returned by the following endpoints:
   * `/transactions/broadcast`
   * `/debug/validate`

   <details>
      <summary>Format</summary>

   ```json
   "trace": [
      {
         "id": "3MosFNQAFGskNDnYzRBgMbfod6xXPdG96ME",
         "type": "dApp",
         "vars": [
            {
               "name": "amount",
               "type": "integer",
               "value": 12345
            }
        ],
        "result": {
            "leases": [
               {
                  "leaseId": "5fmWxmtrqiMp7pQjkCZG96KhctFHm9rJkMbq2QbveAHR",
                  "recipient": "3PLosK1gb6GpN5vV7ZyiCdwRWizpy2H31KR",
                  "amount": 500000
               }
            ],
            "leaseCancels": [
               {
                  "leaseId": "4iWxWZK9VMZMh98MqrkE8SQLm6K9sgxZdL4STW8CZBbX"
               }
            ]
         }
      }
   ]
   ```
   </details>

#### Improvements

* Added the `/leasing/leaseInfo` endpoint that returns lease parameters by lease IDs.

   <details>
      <summary>Format</summary>
    
   ```json
   [
      {
         "leaseId": "3iUCv2YG6mwTXCDmEY6e3AvvSgawaQwMsHvGXzxfkhEF",
         "sender": "3PPrWhPAZMjy75oinpGzavXMmUwsRGMfoXZ",
         "recipient": "3PA1KvFfq9VuJjg45p2ytGgaNjrgnLSgf4r",
         "amount": 469589704,
         "status": "Cancelled",
         "leaseTransaction": {
            "originTransactionId": "3iUCv2YG6mwTXCDmEY6e3AvvSgawaQwMsHvGXzxfkhEF",
            "height": 2252433
         },
         "leaseCancelTransaction": {
            "originTransactionId": "DV33ehoA9bj9qEDpTHqWSb7xV5ddmNGifHt5tTQRPCJP",
            "height": 2497740
         }
      }
   ]
   ```

* Added the `/utils/heightByTimestamp` endpoint that returns blockchain height at a given timestamp.

### Activation

To activate the improvements listed above, vote for feature #16 “Ride V5, dApp-to-dApp invocations, Continuations”.

## Version 1.2

### Protocol Enhancements

* Improved the mechanism for [generating blocks](/en/blockchain/block/block-generation/) using [VRF](https://en.wikipedia.org/wiki/Verifiable_random_function) (Verifiable random function). This improvement allows withstanding stake grinding attacks, which are used by the attackers to try to increase the probability of generating a block for themselves.
* Implemented saving failed transactions. Invoke script transactions and exchange transactions are saved on the blockchain and a fee is charged for them even if the dApp script or the asset script failed, provided that the sender's signature or account script verification passed and the complexity of computations performed during script invocation exceeded the threshold for saving failed transactions. [More details](/en/keep-in-touch/april)
* Implemented the feature of changing the asset name and description. For this means, the [update asset info transaction](/en/blockchain/transaction-type/update-asset-info-transaction) is used. Change is possible after 10 or more blocks on Stagenet and after 100,000 or more blocks on Mainnet and Testnet.
* Implemented the feature of deletion of entries from the account data storage. This action can be performed by the [data transaction](/en/blockchain/transaction-type/data-transaction) or [DeleteEntry](/en/ride/structures/script-actions/delete-entry) structure of the Ride language.
* Reduced the [minimum fee](/en/blockchain/transaction/transaction-fee) from 1 to 0.001 WAVES for the reissue transaction and sponsor fee transaction.
* Implemented transaction binary formats based on [protobuf](https://developers.google.com/protocol-buffers/docs/overview).
* [Issue transaction](/en/blockchain/transaction-type/issue-transaction)'s `name` and `description` fields type changed from bytes to string.
* The maximum data size in [data transaction](/en/blockchain/transaction-type/data-transaction) increased to 165,890 bytes.
* [Exchange transaction](/en/blockchain/transaction-type/exchange-transaction) may contain buy and sell orders in any order.
* Changed the [orders](/en/blockchain/order)' price calculation formula. Earlier, when determining the price for assets with different numbers of decimal places, there was a price value size issue. The maximum value depended on the difference of decimal digits of assets. For example, the price for an [NFT](/en/blockchain/token/non-fungible-token) asset could not exceed 1000 WAVES. The modified formula corrects this problem. Decimal places no longer affect the maximum price.
* The minimum interval between blocks is increased from 5 to 15 seconds. Average block time is targeted 60 seconds instead of ~59 seconds.
* Changed the scheme for signing the block transactions by the generating node. Previously, the generating node needed to sign the block header along with all transactions. For now, the [transactions root hash](/en/blockchain/block/merkle-root) is added to the header, so it is enough to sign only the header.
* The BLAKE2b-256 hash of the block header is used as the block unique identifier.
* When a transaction is validated before adding to the UTX pool, the blockchain state changes made by the transactions that were previously added to the block but then returned to the UTX pool due to the appearance of a new key block that refers to one of the previous microblocks, are taken into account.
* dApp can't call itself with InvokeScript transaction with attached payments. Also dApp can't transfer funds to itself by `ScriptTransfer` script action.

### REST API Updates

In the Node 1.2 release, we have some **semantic and breaking changes** in the API. Please read the following changes very attentively as it can affect your working application when migrating from Node 1.1 API to the Node 1.2 API.

#### Semantic Changes

* Invoke script transactions and exchange transaction [can be failed](/en/keep-in-touch/april), so their presence on the blockchain does not mean they are successful. Check the new field `applicationStatus` which is added to the output of the following endpoints:
   * `/blocks/{id}`
   * `/blocks/address/{address}/{from}/{to}`
   * `/blocks/at/{height}`
   * `/blocks/last`
   * `/blocks/seq/{from}/{to}`
   * `/debug/stateChanges/address/{address}/limit/{limit}`
   * `/debug/stateChanges/info/{id}`
   * `/transactions/address/{address}/limit/{limit}`
   * `/transactions/info/{id}`
   * `/transactions/status`

   `applicationStatus` values:
   * `succeeded` — the transaction is successful
   * `script_execution_failed` — the dApp script or the asset script failed.

* For failed invoke script transactions, the reason of failure is indicated in the `error` structure in the following endpoints:
   * `/debug/stateChanges/address/{address}/limit/{limit}`
   * `/debug/stateChanges/info/{id}`

   Format:

   ```json
   "stateChanges": {
      "error": { "code": number, "text": string }
   }
   ```

   Error codes are as follows:

   1: dApp script error

   2: insufficient fee for script actions

   3: asset script in dApp script actions denied the transaction

   4: asset script in attached payments denied the transaction

* For invoke script transactions, the results of new [script actions](/en/ride/structures/script-actions/) are represented in the `stateChanges` structure in the following endpoints:
   * `/debug/stateChanges/address/{address}/limit/{limit}`
   * `/debug/stateChanges/info/{id}`

   Format:

   ```json
   "stateChanges": {
      "data": [],
      "transfers": [],
      "issues": [],
      "reissues": [],
      "burns": [],
      "sponsorFees": []
   }
   ```

* For block version 5, the `reference` field corresponds to `id` of the previous block instead of `signature` for block version 4.

#### Breaking Changes

* Retrieve blocks by `id` instead of `signature`.

   Deleted endpoints:
   * `/blocks/signature/{signature}` — use `/blocks/{id}` instead
   * `/blocks/child/{signature}`

   Affected endpoints:
   * `/blocks/delay/{id}/{blockNum}`
   * `/blocks/height/{id}`
   * `/debug/rollback-to/{id}`

* Deleted the `/consensus/generationsignature` endpoint.
* Changed the `meta` structure format in the `/addresses/scriptInfo/{address}/meta` endpoint. The argument list is represented as an object array, not the map.

   Before:
   
   ```json
   "meta": {
      "callableFuncTypes": {
         "funcName": { 
            "arg1": string,
            "arg2": string
         }
      }
   }
   ```

   Now:

   ```json
   "meta": {
      "callableFuncTypes": {
         "funcName": [ 
            { "name": string, "type": string },
            { "name": string, "type": string }
         ]
      }
   }
   ```

* Added the new transaction type: Update Asset Info.
* Invoke script transaction now can have arguments of `List` type.

   Example:

   ```json
   { "call": { "function": string, "args": [ ["arg1-item1", "arg1-item2", "arg1-item3"] ] } }
   ```

* Account data storage entries can be deleted by data transactions and invoke script transactions. Entry deletion is represented as follows: `{ "key": string, "value": null }`, `value` is null, no `type` field. Can be found in:
   * `/blocks/{id}`
   * `/blocks/address/{address}/{from}/{to}`
   * `/blocks/at/{height}`
   * `/blocks/last`
   * `/blocks/seq/{from}/{to}`
   * `/debug/stateChanges/address/{address}/limit/{limit}`
   * `/debug/stateChanges/info/{id}`
   * `/transactions/address/{address}/limit/{limit}`
   * `/transactions/info/{id}`

* Exchange transaction version 3 can include buy and sell orders in any order: buy/sell or sell/buy.

#### Improvements 

* `/debug/validate` endpoint does not require API-key.
* `/assets/details` endpoint can provide multiple assets info at once. The `originTransactionId` field containing the ID of the transaction that issued the asset is added to the response. Also, the endpoint supports POST requests.
* `/addresses/balance` endpoint can provide balances for several addresses for specific height not more than 2000 from current.
* `/assets/nft/{address}/limit/{limit}` endpoint returns the `assetDetails` array containing the list of NFTs belonging to the address is added to the response. Also, the endpoint supports POST requests.
* Complexity of each annotated function is returned by the following endpoints:
   * `/addresses/scriptInfo/{address}`
   * `/utils/script/compileCode`
   * `/utils/script/estimate`

   Format:

   ```json
   {
      "complexity": number,
      "callableComplexities": { "funcName1": number, "funcName2": number },
      "verifierComplexity": number
   }
   ```

* Added the `/transactions/merkleProof` endpoint that accepts the transaction ID or the array of transactions IDs and returns the array of proofs for checking that the transaction is in a block.
* Added the `id` and `transactionsRoot` fields to the following endpoints:
   * `/blocks/{id}`
   * `/blocks/headers/last`
   * `/blocks/headers/seq/{from}/{to}`
   * `/blocks/headers/at/{height}`
   * `/blocks/at/{height}`
   * `/blocks/address/{address}/{from}/{to}`
   * `/blocks/last`
   * `/blocks/seq/{from}/{to}`

### Ride Improvements

* Issued version 4 of the Ride [Standard library](/en/ride/script/standard-library).
* Added script actions that the callable function of dApp can perform:
   * [Issue](/en/ride/structures/script-actions/issue)
   * [Reissue](/en/ride/structures/script-actions/reissue)
   * [Burn](/en/ride/structures/script-actions/burn)
   * [SponsorFee](/en/ride/structures/script-actions/sponsor-fee)
   * [BooleanEntry](/en/ride/structures/script-actions/boolean-entry), [BinaryEntry](/en/ride/structures/script-actions/binary-entry), [IntegerEntry](/en/ride/structures/script-actions/int-entry), [StringEntry](/en/ride/structures/script-actions/string-entry) that add or update the [account data storage](/en/blockchain/account/account-data-storage) entries of the corresponding type. These actions replace [DataEntry](/en/ride/structures/script-actions/data-entry) that is not supported in version 4.
   * [DeleteEntry](/en/ride/structures/script-actions/delete-entry) that deletes the account data storage entry.
* The [callable](/en/ride/functions/callable-function) function result format is modified. Since version 4 the result is the list of script actions. The `ScriptResult`, `WriteSet` and `TransferSet` structures are not supported.
* Invoke script transaction's fee increased by 1 WAVES for each non-NFT asset issued by the transaction's Issue structure.
* Enabled processing up to two payments attached to the invoke script transaction.
* Added support of list of primitives as a callable function argument.
* Added the following built-in functions:
   * [bn256groth16Verify](/en/ride/functions/built-in-functions/verification-functions#bn256groth16verify) range of functions that verify the zero-knowledge proof [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) by groth16 protocol on the bn254 curve. Complexity is 800–1650 depending on the argument size limit.
   * [calculateAssetId](/en/ride/functions/built-in-functions/blockchain-functions#calculateassetid) that calculates ID of asset generated by the [Issue](/en/ride/structures/script-actions/issue) structure when executing a dApp script. Complexity is 10.
   * [contains](/en/ride/functions/built-in-functions/string-functions#contains-string-string-boolean) that checks whether the second argument (substring) is contained in the first string argument. Complexity is 3.
   * [containsElement](/en/ride/functions/built-in-functions/list-functions#containselement) that check if the element is in the list. Complexity is 5.
   * [createMerkleRoot](/en/ride/functions/built-in-functions/verification-functions##createmerkleroot) that calculates [transactions root hash](/en/blockchain/block/merkle-root). Complexity is 30.
   * [ecrecover](/en/ride/functions/built-in-functions/verification-functions#ecrecover) that recovers public key from the message hash and the [ECDSA](https://en.wikipedia.org/wiki/ECDSA) digital signature. Complexity is 70.
   * [makeString](/en/ride/functions/built-in-functions/string-functions#makestring-list-string-string-string) that concatenates list strings adding a separator. Complexity is 10.
   * [groth16Verify](/en/ride/functions/built-in-functions/verification-functions#groth16verify) range of functions that verify the zero-knowledge proof [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) by groth16 protocol on the bls12-381 curve. Complexity is 1200–2700 depending on the argument size limit.
   * [indexOf](/en/ride/functions/built-in-functions/list-functions#indexof) that returns the index of the first occurrence of the element in the list. Complexity is 5.
   * [lastIndexOf](/en/ride/functions/built-in-functions/list-functions#lastindexof) that returns the index of the last occurrence of the element in the list. Complexity is 5.
   * [max](/en/ride/functions/built-in-functions/list-functions#max) that returns the largest element in the list. Complexity is 3.
   * [median](/en/ride/functions/built-in-functions/math-functions#median) that calculates a median of the list of integers. Complexity is 20.
   * [min](/en/ride/functions/built-in-functions/list-functions#min) that returns the smallest element in the list. Complexity is 3.
   * [removeByIndex](/en/ride/functions/built-in-functions/list-functions#removebyindex) that removes an element from the list by index. Complexity is 7.
   * [transferTransactionFromProto](/en/ride/functions/built-in-functions/converting-functions#transfertransactionfromproto) that deserializes a transfer transaction. Complexity is 5.
   * [valueOrElse(t: T|Unit, t0 : T)](/en/ride/functions/built-in-functions/union-functions#valueOrElse) that returns a value from the union type if it's not [unit](/en/ride/data-types/unit). Complexity is 2.
* The [wavesBalance](/en/ride/functions/built-in-functions/blockchain-functions#waves-balance) built-in function returns the [BalanceDetails](/en/ride/structures/common-structures/balance-details) structure that contains all types of WAVES balances.
* Added `name` and `description` fields to the [Asset](/en/ride/structures/common-structures/asset) structure which is returned by the [assetInfo](/en/ride/functions/built-in-functions/blockchain-functions#assetinfo) built-in function.
* For the built-in [hashing functions](/en/ride/functions/built-in-functions/hashing-functions) `blakeb256`, `keccak256`, `sha256` and the built-in [verification functions](/en/ride/functions/built-in-functions/verification-functions) `rsaVerify`, `sigVerify` the complexity is changed in version 4 along with adding the range of similar functions with different complexity depending on the argument size limit. When data size is known in advance, the “cheaper” function can be used.
* Changed the complexity of certain built-in functions and operators. Changes are listed in the [Built-in Functions](/en/ride/functions/built-in-functions/) article.
* The following features are no longer supported in version 4:
   * [extract](/en/ride/functions/built-in-functions/union-functions#extract-t-unit-t) — use [value](/en/ride/functions/built-in-functions/union-functions#value-t-unit-t) instead;
   * [checkMerkleProof](/en/ride/functions/built-in-functions/verification-functions#checkmerkleproof) — use [createMerkleRoot](/en/ride/functions/built-in-functions/verification-functions#createmerkleroot) instead.
* Added the following list operators:
   * ++ for the concatenation of lists. Example: the result of `[1, 2] ++ [3, 4]` is `[1, 2, 3, 4]`. Complexity is 4.
   * `:+` for adding an element to the end of the list. Example: the result of `["foo","bar"] :+ "baz"` is `["foo", "bar", "baz"]`. Complexity is 1.
* Added the [Tuple](/en/ride/data-types/tuple) data type.
* The maximum complexity of an account script and verifier function of dApp script is changed to 2000 for new scripts, regardless of the Standard library version.
   The maximum complexity of an asset script and callable function of dApp script remains 4000.
* The maximum data size is changed:
   * [String](/en/ride/data-types/string): 32,767 bytes
   * [ByteVector](/en/ride/data-types/byte-vector): 32,767 bytes (except the `bodyBytes` field of the transaction structure)

### Waves Explorer

* Failed transactions are now displayed. They are marked with ![](./_assets/stop.png) icon in lists of transactions.
* Added support of two payments for invoke script transactions. The dApp script result is displayed as a table.
* Added display of the new transaction type: update asset info transaction.
* Added the link to the issue transaction on the asset information page.
* Added Block ID field to the block information page.
