# What is Smart Account

The functionality of a regular [account](/en/blockchain/account/) only allows you to verify that the [transaction](/en/blockchain/transaction/) released from it was actually sent from this account.

Аttaching an [account script](/en/ride/script/script-types/account-script) to an account extends its functionality. It enables checking outgoing transactions for compliance with the conditions specified in the script. An account with a script attached to it is called a **smart account**. Only those transactions that have been validated can be sent from the smart account. For example, an account owner can set a rule according to which transactions can be sent from the address only if the [blockchain height](/en/blockchain/glossary#blockchain-height) exceeds N. Another example — an account owner can allow sending only certain types of transactions. Or disable any validation other than the rule that all transactions sent from the [address](/en/blockchain/account/address) should be considered valid.

The following parameters can be used for checks:

- [Transaction proofs or signature](/en/blockchain/transaction/transaction-proof).
- The current blockchain height.
- Arbitrary data existing in the blockchain, for example, [oracle](/en/blockchain/oracle) data.

## Attaching an Account Script to an Account

As we mentioned before, an account without a script validates transactions using the [transaction validation](/en/blockchain/transaction/transaction-validation) mechanism. The operation of this mechanism is equivalent to the operation of the following script:

```ride
sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPk)
```

To attach your own script to an account, you need to send a [set script transaction](/en/blockchain/transaction-type/set-script-transaction) from it. Only one script can be attached to an account. “Detaching” a script from a smart account or replacing the old account script with a new one is possible unless the old script forbids it. To "detach" a script or replace it with a new one, you will need to send a new set script transaction. The transaction fee for setting the script is 0.01 [WAVES](/en/blockchain/token/waves).

## Account Script Structure

### Directive

The directive should be placed at the very beginning of the script. Review the example directive:

```ride
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}
```

The given directive consists of three annotations and provides the compiler with the following information:

- the script uses version 5 of the library of standard functions
- the type of script content is Expression
- `this` variable type will be `Address`.

If the directive is missing, then default annotations values will be used:

- STDLIB_VERSION 2
- CONTENT_TYPE EXPRESSION
- SCRIPT_TYPE ACCOUNT

## Expression

The expression checks the transactions sent by the account for compliance with the specified conditions. If the conditions are not met, the transaction will not be sent. Possible results of the expression are

- `true` (transaction is allowed)
- `false` (transaction is not allowed)
- `error`

## Smart accounts and trading

Along with transactions, smart contracts allow to set rules (limitations) for the account trading operations. Examples of these rules are listed below.

## Smart Account Script Examples

### Buying or Selling only BTC

An account with the script below can make sales transactions only in relation to BTC:

```ride
let cooperPubKey = base58'BVqYXrapgJP9atQccdBPAgJPwHDKkh6A8'
let BTCId = base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS'
match tx {
   case o: Order =>
      sigVerify(o.bodyBytes, o.proofs[0], cooperPubKey ) && (o.assetPair.priceAsset == BTCId || o.assetPair.amountAsset == BTCId)
   case _ => sigVerify(tx.bodyBytes, tx.proofs[0], cooperPubKey )
}
```

### Purchase of a Certain Asset

The script below allows making purchases from your account

- only a given asset
- for a given price only
- only for WAVES

```ride
let myAssetId = base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS'
let cooperPubKey = base58'BVqYXrapgJP9atQccdBPAgJPwHDKkh6A8'
  
match tx {
   case o: Order =>
      sigVerify(o.bodyBytes, o.proofs[0], cooperPubKey ) && o.assetPair.priceAsset == null && o.assetPair.amountAsset == myAssetId && o.price == 500000 && o.amount == 1000 && o.orderType == Buy
   case _ => sigVerify(tx.bodyBytes, tx.proofs[0], cooperPubKey )
}
```

## Smart Account Fees

If the complexity of the account script exceeds the [sender complexity threshold](/en/ride/limits/), the minimum fee for each transaction sent from the smart account is increased by 0.004 WAVES.

## Waves Tech Blog Articles

* [The Hitchhiker’s Guide to Waves Smart Contracts. Part 1](https://medium.com/wavesprotocol/the-hitchhikers-guide-to-waves-smart-contracts-part-1-b80aa47a745a) _(14 September 2018)_
* [The Hitchhiker’s Guide to Waves Smart Contracts. Part 2](https://medium.com/wavesprotocol/the-hitchhikers-guide-to-waves-smart-contracts-part-2-44621fd5a007) _(18 September 2018)_
* [Stateful Smart Accounts. Part 1 ](https://medium.com/wavesprotocol/stateful-smart-accounts-part-1-315731d8c06) _(17 September 2018)_
* [Stateful Smart Accounts. Part 2](https://medium.com/wavesprotocol/stateful-smart-accounts-part-2-implementing-erc-20-and-nft-erc-721-step-by-step-7bac364fdadb) _(3 October 2018)_
* [Application of Waves Smart Accounts: from Auctions to Customer Loyalty Schemes](https://medium.com/wavesprotocol/application-of-waves-smart-accounts-from-auctions-to-customer-loyalty-schemes-e5f27eb99bf5) _(2 March 2019)_
* [Application of Waves Smart Accounts and Smart Assets for Financial Instruments](https://medium.com/wavesprotocol/application-of-waves-smart-accounts-and-smart-assets-for-financial-instruments-813a993b78e9) _(15 March 2019)_
