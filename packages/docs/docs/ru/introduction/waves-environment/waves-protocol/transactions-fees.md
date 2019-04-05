# Transactions Fees

There are currently 13 different types of transactions in the Waves Blockchain. the following table shows the minimal required fees in non-scripted case \(accounts don’t have scripts, assets don’t have scripts\) and for each time the script is called, total transaction’s fee increases by 0.004 Waves.

**Note. **If a scripted account transfers a smart asset, then the fee is increased twice \(the fee increases _**+0.004**_ every time the transaction is validated by account’s script or asset’s script\), you can check here the [_**transactions examples**_](../waves-api-and-sdk/waves-node-rest-api/example-transactions.md).

| Transaction | Minimal Transaction Fee in WAVES |
| :--- | :--- |
| Issue | 1 |
| Transfer | 0.001 |
| Reissue | 1 |
| Burn | 0.001 |
| Exchange | 0.003 |
| Lease | 0.001 |
| Cancel Lease | 0.001 |
| Alias | 0.001 |
| Mass Transfer | 0.001 + 0.0005\*N, rounded up to 0.001 |
| Data | 0.001 per kilobyte, rounded up |
| Set Script | 0.01 |
| Set Sponsorship | 1 |
| Set Asset Script | 1 |

## Fee Calculation with Smart Trading Feature

The accounts pay the matcher for orders placement, then the matcher pays the fee when an _**ExchangeTransaction**_ is put to the blockchain and it doesn’t matter if the accounts are smart or not. But if the matcher is a SmartAccount \(has a script\) then the fee for the matcher is increased by 0.004.

* If an Asset Pair contains a Smart Asset then the fee is increased by** + 0.004** \(**+0.008** if both assets are smart\).
* It **doesn't** matter if any of the accounts is a Smart Account, Smart Accounts pay in the same way as non-smart Accounts do.
* Smart Accounts **don’t** pay extra** 0.004** for Order placements.
* Exchange Transaction’s fee is **not** increased by **+0.004** if any of the accounts is a Smart Account.

**Examples: **

* plain transfer fee is **0.001** WAVES, if user makes account scripted or smart asset transfer, the fee should be 0.005.waves, but if user will transfer smart assets from scripted account the final fee is **0.009** WAVES.
* Exchange transaction fee is **0.003** WAVES, if matcher also can be scripted, this makes fee as **0.007** WAVES .
* the heaviest case is transaction created by scripted matcher where both orders from scripted accounts and assets pair uses smart assets: _**Firstly,**_ Both accounts pay to the matcher \(order.fee + 2\*smart asset fee = **0.003** + **2\*0.004** = **0.011**\).
  _**Secondly,**_ the ExchangeTransaction’s fee will be \(exchangeTx + scripedMatcherFee + 2\*smartAssetFee = **0.003** + **0.004** + **2\*0.004** = **0.015**\) **which is payed by the matcher**
