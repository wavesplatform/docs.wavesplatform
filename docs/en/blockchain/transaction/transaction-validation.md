# Transaction Validation

<!-- 
Waves nodes validate each transaction. Depending on the validation result the transactions can be put in the blockchain or rejected.

Since node version 1.2.4, after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions” the transaction validation procedure is changed. Versions 1.2.x are currently available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

![](./_assets/tx-validaton.png)

## Before Activation of Feature #15

The following checks are performed:

1. Timestamp check.

   The transaction timestamp should be not more than 2 hours ago or 1.5 hours ahead from the current block timestamp.

2. Transaction version check.

   All the features required to support this version should be activated.

3. The sender's signature verification for ordinary account (without script), or account script execution if the sender is [smart account](/en/blockchain/account/smart-account), or the [verifier function](/en/ride/functions/verifier-function) execution if the sender is [dApp](/en/blockchain/account/dapp). A similar check is performed for orders in an exchange transaction.

4. Execution of asset scripts if the transaction uses [smart assets](/en/blockchain/token/smart-asset), except scripts of assets used in [dApp script actions](/en/ride/structures/script-actions) that are executed in step 6.
5. Sender's balance check.

   The sender should have enough funds to pay the fee. If a sponsored asset is used for the fee, the sponsor's balance is also checked.

   Depending on the type of transaction, the sender should have enough asset for transfer or exchange or for payments attached to the invoke script transaction.
6. For an invoke script transaction:
   * Execution of the dApp script.
   * Execution of asset scripts if [dApp script actions](/en/ride/structures/script-actions) use smart assets.
   * dApp balance check: dApp account should have enough funds for [script actions](/en/ride/structures/script-actions).
   * Sender's balance check: the sender should have enough funds to pay the additional fee for script actions.

A transaction is saved on the blockchain and the transaction fee is charged if all checks are passed.

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
   * Execution of the dApp script.
   * dApp balance check: dApp account should have enough funds for [script actions](/en/ride/structures/script-actions).
   * Sender's balance check: the sender should have enough funds to pay the additional fee for script actions.
6. Execution of asset scripts if the transaction uses [smart assets](/en/blockchain/token/smart-asset), including scripts of assets used in dApp script actions.

Invoke script transactions and exchange transactions are saved on the blockchain and the transaction sender pays the fee if checks number 1–4 passed. However, if the checks number 5–6 failed, the transaction is marked as failed and doesn't entail changes in balances (other than charging a fee) and account data storages. For an exchange transaction, the matcher is charged the transaction fee but the order senders are not charged the [matcher fee](https://docs.waves.exchange/en/waves-matcher/matcher-fee).

Transactons of other type are saved on the blockchain and the fee is charged if all checks are passed.

> :warning: After activation of the feature #15, a fee for the invoke script transaction cannot be funded by transfer from dApp to the transaction sender. If sender's balance is insufficient to pay the fee, dApp script is not executed.
-->
