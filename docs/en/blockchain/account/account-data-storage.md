# Account Data Storage

**Account data storage** is a key-value storage associated with an [account](/en/blockchain/account/).

The key of each entry is an unique string. 

The value is the data of one of the types:

* string
* boolean
* integral
* array of bytes

The size of an account data storage is unlimited. For key and value size limitations, see the [Data Transaction](/en/blockchain/transaction-type/data-transaction) article.

## View Account Data

Data storage of any account, as well as other blockchain data, are public and can be read by anyone. For example, you can see data entries in [Waves Explorer](https://wavesexplorer.com). To do this, find an account by its [address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) and switch to the **Data** tab.

![](./_assets/data-storage-explorer.png)

You can also obtain data entries using [Node REST API](/en/waves-node/node-api/) and [client libraries](/en/building-apps/waves-api-and-sdk/client-libraries/), see the examples in the [How to Retrieve Information from the Blockchain](/en/building-apps/how-to/basic/retrieve) article.

## Add, Modify, Delete<sup><img src="./_assets/feature15.svg"></sup> Entires

The account owner can add, modify or delete entries of the account data storage via a [Data transaction](/en/blockchain/transaction-type/data-transaction). You can create and send a transaction using one of the [client libraries](/en/building-apps/waves-api-and-sdk/client-libraries/), see examples in the [How to Create Transaction and Send It to Blockchain](/en/building-apps/how-to/basic/transaction) article.

A [dApp script](/en/blockchain/account/dapp) can add, modify or delete entries in the dApp's data storage as a result of an [Invoke Script transaction](/en/blockchain/transaction-type/invoke-script-transaction) via script actions:
* [BinaryEntry](/en/ride/structures/script-actions/binary-entry)
* [BooleanEntry](/en/ride/structures/script-actions/boolean-entry)
* [IntegerEntry](/en/ride/structures/script-actions/int-entry)
* [StringEntry](/en/ride/structures/script-actions/string-entry)
* [DeleteEntry](/en/ride/structures/script-actions/delete-entry)
