# Continued Calculations

If the complexity of a dApp script exceeds 4000, its execution is split into several stages. A generating note that adds an Invoke Script transaction to a block performs calculations with the total complexity up to 4000 and saves intermediate results in the internal database. Further, the generating node, the same or another one if a new block has already forged, detects an uncompleted calculation sequence, creates a Continuation transaction, and adds it to the block, performing the next stage of calculations. The process continues until the script is completely executed or fails.

Thus, the first stage of calculations is performed within the Invoke Script transaction. The further stages are performed within Continuation transactions. Continuation transaction fields are described in the [Continuation Transaction](/en/blockchain/transaction-type/continuation-transaction) article.

![](./_assets/continuation.png)

## Conditions

* Continued calculations are added in node version 1.3.0 and enabled with feature #16 “Continuations”. Versions 1.3.x are now available for [Stagenet](/en/blockchain/blockchain-network/) only.fea
* dApp script uses [Standard library](/en/ride/script/standard-library) **version 5**.
* The [Invoke Script](/en/blockchain/transaction) transaction version is 3.

## Suspension of Other Transactions Involving dApp

Until the calculation sequence is complete, transactions that can reduce the dApp balance can be added to the [UTX pool](/en/blockchain/transaction/#utx-pool), but cannot be added to the block:

* Transactions that are sent on behalf of the dApp.
* Transactions that invoke the dApp.
* Exchange transactions in which the dApp is one of the order sender.
* Transactions with fee in a sponsored asset issued by dApp.

Meanwhile, any transfers in favor of dApp, leases to dApp, and cancellations of leases to dApp are allowed.

## Blockchain Data Usage

### 1. Entries of dApp's own data storage

Due to the suspension of other transactions involving the dApp (see above), the entries in the dApp's data storage do not change from the start of the script execution until the end. The dApp script can get data from its own storage at any stage, that is, in any of the transactions in the of the calculation sequence, using the following functions:

| Name | Description |
| :--- | :--- |
| getBinary(key: String): ByteVector&#124;Unit | Gets an array of bytes by key from the dApp's data storage |
| getBinaryValue(key: String): ByteVector | Gets an array of bytes by key from the dApp's data storage; завершается ошибкой, если запись отсутствует |
| getBoolean(key: String): Boolean&#124;Unit | Получает значение логической записи по ключу |
| getBooleanValue(key: String): Boolean | Получает значение логической записи по ключу; завершается ошибкой, если запись отсутствует |
| getInteger(key: String): Int&#124;Unit | Получает значение целочисленной записи по ключу |
| getIntegerValue(key: String): Int | Получает значение целочисленной записи по ключу; завершается ошибкой, если запись отсутствует |
| getString(key: String): String&#124;Unit | Получает значение строковой записи по ключу |
| getStringValue(key: String): String | Получает значение строковой записи по ключу; завершается ошибкой, если запись отсутствует |

For a description of the functions, see [Account Data Storage Functions](/en/ride/functions/built-in-functions/account-data-storage-functions).

### 2. External Data

All the blockchain data, except for the dApp's data storage entries, are considered external. External data include:

* Entries of data storages of other accounts.
* Account balances, including the dApp account itself.
* Current blockchain height.
* Asset parameters, block headers, transactions, etc.

All external data used by the dApp script must be obtained at the first stage of calculations. The complexity of the script's part from the beginning to the last function that reads external data of the blockchain should not exceed 4000 inclusive. 

If the script contains branches, it is not known in advance which branch will be executed. Therefore, the total complexity for all branches is taken into account. Consider the following scheme:

![](./_assets/continuation-init.png)

If the operations `op2`, `op-a2` and `op-b3` read the external data of the blockchain, then the total complexity of the operations `op1` + `op2` + `op-a1` + `op-a2` + `op-b1` + `op-b2` + `op-b3` must not exceed 4000, otherwise the dApp script cannot be assigned to an account (Set Script transaction would be rejected).

## Fee

The sender should specify a fee taking into account the maximum possible number of calculation stages and script actions.

The minimum fee in WAVES for an Invoke Script transaction is calculated as follows:

`Fee` = (0.005 + `E`) × ⌈`С` / 4000⌉ + `S` + 0.004 × `P` + 0.004 × `A` + 1 × `I`,

Where:

   `E` is the **e**xtra fee specified in the `extraFeePerStep` field. `extraFeePerStep` can be 0. The sender can specify `extraFeePerStep` > 0 in order to raise the processing priority of transactions of the calculation sequence.

   `С` is the **c**omplexity of the callable function. `С`/4000 rounded up to the nearest integer is the number of stages in the calculation sequence.

   `S` = 0.004 if the transaction **s**ender is a [dApp or smart account](/en/blockchain/account/dapp), otherwise 0.

   `P` is the number of **p**ayments in [smart assets](/en/blockchain/token/smart-asset) attached to the transaction.

   `A` is the number of **s**cript actions (transfers, reissues, burnings) with smart assets.

   `I` is the number of **i**ssued assets that are not [NFT](/en/blockchain/token/non-fungible-token).

The entire fee amount specified in the transaction is charged to the sender when the Invoke Script transaction is added to a block. If the fee is indicated in the sponsored asset, the sponsor will be charged the fee equivalent in WAVES.

The fee is distributed as follows:

1. For the Invoke Script transaction: 0.005 + `E` +` S`.
2. For each Continuation transaction except the last one: 0.005 + `E`.
3. For the last transaction of the continuation: 0.005 + `E` + 0.004 ×` P` + 0.004 × `A` + 1 × `I`.

(By the [Waves-NG protocol](/en/blockchain/waves-protocol/waves-ng-protocol), the generator of the block to which the transaction is added receives 40% of the transaction fee, and the next block generator receives 60% of the fee.)

After the script is completely executed or fails, the fee's unused portion (for stages and asset scripts whose execution was not started; see example below) is returned to the sender. If the fee is indicated in the sponsored asset, the WAVES equivalent of this portion of the fee is returned to the sponsor.

> Note: the [threshold for saving failed transactions](/en/ride/limits) is applicable only to Invoke Script transactions. If the script fails or [throws an exception](/en/ride/exceptions) at one of the subsequent stages, the Continuation transaction is saved on the blockchain, and a fee is charged for it.


**Consider the example:**
* The complexity of the callable function `C` = 10,000.
* The transaction sender is a smart account: `S` = 0.004.
* The transaction sender specifies `extraFeePerStep`: `E` = 0.002.
* The transaction contains 1 payment in a smart asset: `P` = 1.
* The callable function performs 2 smart asset transfers and 1 token issue: `A` = 2 and `I` = 1.
* 
The minimum fee for the Invoke Script transaction is (0.005 + 0.002) × 3 + 0.004 + 0.004 × 1 + 0.004 × 2 + 1 = 1.037 WAVES. If all transactions are successful, the fee will be distributed as follows:
* for the Invoke Script transaction: 0.005 + 0.002 + 0.004,
* for the first Continuation transaction: 0.005 + 0.002,
* for the last Continuation transaction: 0.005 + 0.002 + 0.004 × 1 + 0.004 × 2 + 1 × 1.

> Note: if the sender specifies the transaction fee more than the minimum of 1.037 WAVES, the remainder will be returned to them even if all stages are successfully completed.

If the Invoke Script transaction fails after the calculations' complexity exceeds the threshold for saving failed transactions, the sender pays 0.005 + 0.002 + 0.004 = 0.011 WAVES. The unused fee of 1.026 WAVES is returned to the sender.

If the first Continuation transaction fails, then the sender pays (0.005 + 0.002) × 2 + 0.004 = 0.018 WAVES. The unused fee of 1.019 WAVES is returned.

If the last Continuation transaction fails:

* If the callable function execution fails, then the sender pays (0.005 + 0.002) × 3 + 0.004 = 0.025 WAVES. The unused fee of 1.012 WAVES is returned.
* If the callable function result is successfully calculated, but one of the asset scripts denied the transaction, the sender also pays 0.004 WAVES for each asset script actually executed. For example, if the first asset script returned `true`, the second asset script returned `false` or failed, and the third asset script has not started execution, then the sender pays (0.005 + 0.002) × 3 + 0.004 + 0.004 × 2 = 0.033 WAVES. The unused fee of 1.004 WAVES is returned.

## Application Status

The `applicationStatus` field of transaction JSON representation contains the current status of script execution:
* `succeeded`: the transaction is successful.
* `script_execution_failed`: the dApp script or the asset script failed.
* `script_execution_in_progress`: the calculation sequence is not completed yet (it's a transitory status).

Node REST API returns the same the same application status for all the transactions of the calculation sequence. When the script is completely executed or fails, the `applicationStatus` for all the transactions is changed to `succeeded` or `script_execution_failed`.