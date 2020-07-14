# Transaction Validation

Waves nodes validate each transaction. Depending on the validation result the transaction can be saved on the blockchain or rejected.

Since node version 1.2.4, after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions” the transaction validation procedure is changed.

> :warning: After activation of the feature #15, the fee for the invoke script transaction cannot be funded by transfer from the dApp to the transaction sender. If sender's balance is insufficient to pay the fee, dApp script is not executed.

![](./_assets/tx-validaton.png)

## Before Activation of Feature #15

The following checks are performed:

1. Timestamp check.

   The transaction timestamp should be not more than 2 hours ago or 1.5 hours ahead from the current block timestamp.

2. Transaction version check.

   All the features required to support this version should be activated.

3. The sender's signature verification for ordinary account (without script), or account script execution if the sender is [smart account](/en/blockchain/account/smart-account), or the [verifier function](/en/ride/functions/verifier-function) execution if the sender is [dApp](/en/blockchain/account/dapp). A similar check is performed for orders in an exchange transaction.

4. Execution of asset scripts if the transaction uses [smart assets](/en/blockchain/token/smart-asset), except scripts of assets used in [dApp script actions](/en/ride/structures/script-actions/) that are executed in step 6.
5. Sender's balance check.

   The sender should have enough funds to pay the fee. If a sponsored asset is used for the fee, the sponsor's balance is also checked.

   Depending on the type of transaction, the sender should have enough asset for transfer or exchange or for payments attached to the invoke script transaction.
6. For an invoke script transaction:

   6.1. Calculation of the result of dApp callable function.

   6.2. Execution of asset scripts if [dApp script actions](/en/ride/structures/script-actions/) use smart assets.

   6.3. dApp balance check: dApp account should have enough funds for script actions.

   6.4. Check that the transaction fee is not less than the minimum fee based on script actions.

The transaction is saved on the blockchain and the transaction fee is charged if all checks passed.

## After Activation of Feature #15

The following checks are performed:

1. Timestamp check.

   The transaction timestamp should be not more than 2 hours ago or 1.5 hours ahead from the current block timestamp.

2. Transaction version check.

   All the features required to support this version should be activated.

3. Sender's balance check.

   The sender should have enough funds to pay the fee. If a sponsored asset is used for the fee, the sponsor's balance is also checked.

   Depending on the type of transaction, the sender should have enough asset for transfer or exchange or for payments attached to the invoke script transaction.

4. The sender's signature verification for ordinary account (without script), or account script execution if the sender is [smart account](/en/blockchain/account/smart-account), or the [verifier function](/en/ride/functions/verifier-function) execution if the sender is [dApp](/en/blockchain/account/dapp). A similar check is performed for orders in an exchange transaction.
5. For the invoke script transaction:

   5.1. Calculation of the result of dApp callable function.

   5.2. dApp balance check: dApp account should have enough funds for [dApp script actions](/en/ride/structures/script-actions/).

   5.3. Check that the transaction fee is not less than the minimum fee based on script actions.

6. Execution of asset scripts if the transaction uses [smart assets](/en/blockchain/token/smart-asset), including scripts of assets used in dApp script actions.

### Validation Result

For the invoke script transaction:
* If one of the checks 1–4 failed, the transaction is rejected.
* If checks 1–4 passed, and the calculation of the result of the dApp callable function (check 5.1) failed with an error or [throwing an exception](/en/ride/exceptions) before the [complexity](/en/ride/base-concepts/complexity) of performed calculations exceeded the [threshold for saving failed transactions](/en/ride/limits/), the transaction is also rejected.
* If checks 1–4 passed but checks 5–6 failed and besides the result of the callable function is calculated successfully or the complexity exceeded the threshold, the transaction is saved on the blockchain but marked as failed. The sender is charged the transaction fee. The transaction doesn't entail any other changes to the state of the blockchain.
* If all checks passed, the transaction is saved on the blockchain as successful and the sender is charged the fee.

For the exchange transaction:
* If one of the checks 1–4 failed, the transaction is rejected.
* If checks 1–4 passed but check 6 failed, the transaction is saved on the blockchain but marked as failed. The sender of the transaction (matcher) is charged the transaction fee. The transaction doesn't entail any other changes in balances, in particular, the order senders don't pay the [matcher fee](https://docs.waves.exchange/en/waves-matcher/matcher-fee).
* If all checks passed, the transaction is saved on the blockchain as successful. The matcher is charged the transaction fee as well as the order senders are charged the matcher fee.

For the other transaction:
* If one of the checks failed, the transaction is rejected.
* If all checks passed, the transaction is saved on the blockchain as successful and the sender is charged the fee.
