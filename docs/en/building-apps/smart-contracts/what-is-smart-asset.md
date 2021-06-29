# What is Smart Asset

Any user can not only create their own [token](/en/blockchain/token/) on the Waves blockchain, but also set the rules for its circulation by attaching a script to it. For example, for in-game currency, you can allow only transactions between characters with certain properties. A token with an attached script is called a **smart asset**, and the attached script is called an **asset script**.

## Asset Script

Asset script checks [transactions](/en/blockchain/transaction/) involving the asset for the specified conditions. The script contains a logical [expression](/en/ride/base-concepts/expression). Possible results of the expression calculation are:

* `true`: the transaction is allowed,
* `false`: the transaction is denied,
* error: the transaction is denied.

If the asset script denied the transaction, it can either be discarded or saved on the blockchain as failed. If the transaction is saved as failed, the sender is charged a fee and no further changes are made on the blockchain. See the [Transaction Validation](/en/blockchain/transaction/transaction-validation) article for details.

Using the [match ... case](/en/ride/operators/match-case) operator, you can set up different conditions depending on the type of the transaction.

An asset script can use blockchain data: the current height, account balances, entries in account data storages, parameters of the asset itself and other tokens. The script also has access to the fields of the current transaction, except [proofs](/en/blockchain/transaction/transaction-proof).

[More about the format and features of the asset script](/en/ride/script/script-types/asset-script)

## Examples of Using Smart Asset

### Freeze Token

Transactions with a smart asset can be prohibited until (or after) the moment when the [blockchain](/en/blockchain/blockchain/) reaches a certain [height](/en/blockchain/glossary#blockchain-height).

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}

let targetHeight = 100500
height >= targetHeight
```

### Unburnable token

For the example smart asset, Burn transactions are prohibited.


```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}

match tx {
  case t : BurnTransaction => false
   case _ => true
}
```

### Fee in Sponsored Asset

The following script allows transfers for the smart asset only if the fee for the [Transfer transaction](/en/blockchain/transaction-type/transfer-transaction) is specified in the sponsored asset `R9yNZwP1VkUksacNjtLqua6CePGGX9dYwBEj2TyjYkv`. The same condition applies to [Invoke Script transactions](/en/blockchain/transaction-type/invoke-script-transaction) that contains a payment in the smart asset.

The transaction fee in the sponsored asset means that the sponsor receives the fee in the sponsored asset from the from the account of the sender of the transaction.The equivalent amount of WAVES is deducted from the sponsor's account in favor of block generators. The sponsor can sell the sponsored asset to users at a higher price and thus make a profit. [More about sponsorship](/en/blockchain/waves-protocol/sponsored-fee)

Asset script also denied [Mass Transfer transactions](/en/blockchain/transaction-type/mass-transfer-transaction), because the sponsored fee is not allowed for this type of transactions.

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}

match tx {
   case t : TransferTransaction|InvokeScriptTransaction =>
      t.feeAssetId == base58'R9yNZwP1VkUksacNjtLqua6CePGGX9dYwBEj2TyjYkv'
   case m : MassTransferTransaction => false
   case _ => true
}
```

### Recipient Allowlist/Denylist

Transfer of a smart asset can be prohibited to specified [addresses](/en/blockchain/account/address) or, conversely, allowed only to specified addresses.

In this script, the list of allowed addresses is stored on the account `3MsuUWABLwFDU4FY5n1zHqbDYnPUspJHeuF` in the following format: entry key is an allowed address, value is `true`.

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}

match tx {
   case t : TransferTransaction =>
      let allowlist = Address(base58'3MsuUWABLwFDU4FY5n1zHqbDYnPUspJHeuF')
      # Checking that the allowlist contains the recipient's address
      getBooleanValue(allowlist,toBase58String(addressFromRecipient(t.recipient).bytes))
   case _ => false
}
```

### Trade Only against BTC

:warning: Buying and selling smart assets on [Waves.Exchange](https://waves.exchange/) developed by the third-party team from the community is temporarily unavailable.

Asset script cannot check an [order](/en/blockchain/order) directly, but when checking an [Exchange transaction](/en/blockchain/transaction-type/exchange-transaction) the script can use parameters of orders as part of the transaction.

A smart asset with the script below can only be bought for BTC.

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}

let BTCId = base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS'
match tx {
   case e : ExchangeTransaction =>
     e.sellOrder.assetPair.priceAsset == BTCId || e.sellOrder.assetPair.amountAsset == BTCId
   case _ => true
}
```

### Trade at Given Price

:warning: Buying and selling smart assets on [Waves.Exchange](https://waves.exchange/) developed by the third-party team from the community is temporarily unavailable.

In the asset script, you can allow an exchange only at the price specified in the [oracle](/en/blockchain/oracle).

In the example below, the account `3MqBeuDhyc9Zr5MM54CtYm7PivApGEYrEDB` serves as an oracle. Its data storage contains prices in the format: entry key is the token ID, value is the token price in WAVES. 

The smart asset ID can be obtained through the built-in variable `this`. In the asset script, the `this` variable contains the [Asset](/en/ride/structures/common-structures/asset) structure with contains parameters of the asset to which this script is assigned.

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}

let oracle = Address(base58'3MqBeuDhyc9Zr5MM54CtYm7PivApGEYrEDB')

match tx {
  # Prohibiting the transfer of the asset
  case t: TransferTransaction | MassTransferTransaction | InvokeScriptTransaction =>
    false
  case e: ExchangeTransaction =>
    # Checking that trading is at the price fixed in the oracle's state for this asset
    let correctPrice = e.price == getIntegerValue(oracle, toBase58String(this.id))
    # Checking that the exchange is for WAVES
    # If the asset’s ID is not defined, it is WAVES by default
    let correctPriceAsset = !isDefined(e.sellOrder.assetPair.priceAsset)
    correctPrice && correctPriceAsset
  case _ => true
}
```

## Creating Smart Asset

:warning: Please note:
-- If a token is issued without a script, then the script cannot be added later. However, you can issue a token with the script always returning `true` and change the script later.
- Smart asset cannot be sponsored.

To create a smart asset, you have to send an [Issue transaction](/en/blockchain/transaction-type/issue-transaction) version 2 or higher, specifying in it the compiled script in base64 encoding. It is most convenient to do this in [Waves IDE](https://waves-ide.com/), see instructions in [Issuing Smart Asset](/en/building-apps/smart-contracts/tools/waves-ide#issuing-smart-asset). The minimum fee for this type of transaction is 1 WAVES.

## Modifying Smart Asset Script

The [Set Asset Script transaction](/en/blockchain/transaction-type/set-asset-script-transaction) is intended for changing the script. The minimum transaction fee is 1 WAVES.

Only the account that issued the smart asset can change the script, and only if the asset script itself allows the transaction (as well as the [account script](/en/blockchain/account/dapp) of issuer allows the transaction).

For example, the following script prohibits all types of transactions except for Transfer transactions, so it is impossible to change such a script.

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}

match tx {
  case t : TransferTransaction => true
  case _ => false
}
```

The script cannot be removed, so it is impossible to turn a smart asset into a regular one. However, you can set a script that always returns `true`, that is, allows all transactions.

## Smart Asset Fees

The minimum fee for any transaction, except Invoke Script transactions, is increased by 0.004 WAVES for each smart asset involved.

Examples:
* The minimum fee for a Transfer transaction is 0.001 WAVES; in case of transferring a smart asset, 0.005 WAVES.
* The minimum fee for an Exchange transaction is 0.003 WAVES. In case of exchanging a smart asset for a regular asset the minimum fee is 0.007 WAVES, exchanging of two smart assets — 0.011 WAVES. (The fee for the Exchange transaction is paid by the matcher. See the [Exchange Transaction](/en/blockchain/transaction-type/exchange-transaction) article for details.)

:warning: Buying and selling smart assets on [Waves.Exchange](https://waves.exchange/) developed by the third-party team from the community is temporarily unavailable.

## Articles about Smart Assets

* [Waves Smart Asset Applications: Whitelists, Blacklists and Interval Trading](https://medium.com/wavesprotocol/waves-smart-asset-applications-whitelists-blacklists-and-interval-trading-4169f11f8690) _(Mar 21, 2019)_
* [Application of Waves Smart Accounts and Smart Assets for Financial Instruments](https://medium.com/wavesprotocol/application-of-waves-smart-accounts-and-smart-assets-for-financial-instruments-813a993b78e9) _(Mar 15, 2019)_
