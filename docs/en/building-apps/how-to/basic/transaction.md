# How to Create Transaction and Broadcast It to Blockchain

All actions on the blockchain are represented as transations. Waves provides a large number of transaction types. See the [Transaction Type](/en/blockchain/transaction-type) section for more information. Depending on the type, transactions may contain different fields.

On Waves, each transaction can be sent only from the account. Transaction that is sent from unscripted accounts must contain a proof – a sender's digital signature. (Smart accounts and aApps can set their own rules of verification of outgoing transations). See the [Transaction Proof](/en/blockchain/transaction/transaction-proof) section for more information.

So, to put a transaction on the blockchain, complete the following steps:

1. Fill in the transaction fields.
2. Sign transaction: generate user signature and add to the transactions.
3. Send transaction to a node.

The node checks transaction for validity. If a transaction is valid, then it makes it to a generated block in the blockchain, if not — it's rejected by the blockchain.

## Sign Transaction Using Your Own Seed or Private Key

### Using Javascript

### Using Python

## Sign Transaction on Behalf of User 

### Using Javascript

### Using Python

```
sample
```