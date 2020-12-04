# Address

**Address** is an [account](/en/blockchain/account/) attribute derived from the [public key](/en/blockchain/account/#account-keys). The address also contains the chain ID that identifies the [blockchain network](/en/blockchain/blockchain-network/#byte-network), therefore the address on the Mainnet cannot be used on the Testnet and vice versa.

The address is a 26 byte array (see the [Address Binary Format](/en/blockchain/binary-format/address-binary-format)). In UIs the address is displayed as [base58](https://en.bitcoin.it/wiki/Base58Check_encoding) encoded string.

Example address:

```
3PDfnPknnYrg2k2HMvkNLDb3Y1tDTtEnp9X
```

> Normally, the address starting with `3P` refers to the Mainnet, and the address starting with ` 3M` or `3N` refers to Testnet or Stagenet.

The address is used to obtain information about the account:
* [token balances](/en/blockchain/account/account-balance),
* entries of [account data storage](/en/blockchain/account/account-data-storage),
* [aliases](/en/blockchain/account/alias),
* [assigned script](/en/blockchain/account/dapp), etc.

See examples in the [How to Retrieve Information from the Blockchain](/en/building-apps/how-to/basic/retrieve) article.

The address is indicated:
* in [Transfer](/en/blockchain/transaction-type/transfer-transaction), [Mass Transfer](/en/blockchain/transaction-type/mass-transfer-transaction) and [Lease](/en/blockchain/transaction-type/lease-transaction) transaction to identify a recipient;
* in [Invoke Script](/en/blockchain/transaction-type/invoke-script-transaction) transactions to identify an invoked dApp.
