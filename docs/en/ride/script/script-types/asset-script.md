# Asset script

Asset script verifies transactions within the asset, that is, allows or denies the transaction depending on the specified conditions.

An asset with the attached script is called a smart asset. For examples of using smart assets, see the [Smart Asset](/en/building-apps/smart-contracts/what-is-smart-asset) article.

The asset script has the following directives:

```ride
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}
```

You can attach a script to an asset only during the creation of the asset. Asset issued without a script cannot be converted to a smart asset. You can change the asset script using a [set asset script transaction](/en/blockchain/transaction-type/set-asset-script-transaction).
