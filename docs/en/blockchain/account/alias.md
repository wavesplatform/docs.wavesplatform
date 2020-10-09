# Alias

**Alias** is a short, easy to remember, name of the [address](/en/blockchain/account/address). The alias is unique on the blockchain.

One address can have several aliases.

The alias can be used instead of the address:
* In [Transfer](/en/blockchain/transaction-type/transfer-transaction), [Mass Transfer](/en/blockchain/transaction-type/mass-transfer-transaction) and [Lease](/en/blockchain/transaction-type/lease-transaction) transactions to identify a recipient, as well as in [Invoke Script](/en/blockchain/transaction-type/invoke-script-transaction) transactions to identify an invoked dApp.
* To find an account in [Waves Explorer](https://wavesexplorer.com/).

The alias cannot be deleted.

## Alias Requirements

The length of an alias can be from 4 to 30 bytes (1 character can take up to 4 bytes).

The following characters are allowed:

* lowercase Latin letters
* numbers
* dot
* underscore
* hyphen
* @

## Create Alias

To create an alias, you have to send a [Create Alias transaction](/en/blockchain/transaction-type/create-alias-transaction). There are the following options for sending the transaction:
* In [Waves.Exchange](https://waves.exchange/) app developed by the third-party team from the community. See the [Create Personal Alias](https://docs.waves.exchange/en/waves-exchange/waves-exchange-online-desktop/online-desktop-account/online-desktop-alias) article of Waves.Exchange documentation.
* Using [client libraries](/en/building-apps/waves-api-and-sdk/client-libraries/). See also the [How to Create Transaction and Broadcast It to Blockchain](/en/building-apps/how-to/basic/transaction) article.

## View Aliases

The list of account aliases, as well as other blockchain data, is public and can be read by anyone. For example, you can see aliases in [Waves Explorer](https://wavesexplorer.com). To do this, find an account by its [address](/en/blockchain/account/address) and switch to the **Aliases** tab.

In [Node REST API](/en/waves-node/node-api/), you can obtain a list of aliases by address using the `GET/alias/by-address/{address}` method and an address by alias using the `GET /alias/by-alias/{alias}` method.

## Binary Format

See the [Alias Binary Format](/en/blockchain/binary-format/alias-binary-format) article.
