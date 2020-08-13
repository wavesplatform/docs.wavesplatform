# Transaction

**Transaction** is an action on the [blockchain](/en/blockchain/blockchain/) on behalf of an [account](/en/blockchain/account/). 

The Waves blockchain provides various types of transactions. For example:

* Data transaction writes data to the account data storage,
* Transfer transaction sends a certain amount of token to another account.

Content of transaction depends on its type. Transaction types are listed in the [Transaction Type](/en/blockchain/transaction-type/) article.

## Sender and Signature

Each transaction contains the public key of sender account, on behalf of which the action is performed on the blockchain. Transaction that is sent from an ordinary account (without script) must contain the sender's digital signature. Smart accounts and dApps can set their own rules for outgoing transactions verification. See the [Transaction Signature and Proofs](/en/blockchain/transaction/transaction-proof) article for more information.

## Transaction Fee

Waves transactions are very cheap but not free: the sender is charged a fee. The sender can specify any amount of fee but not less than the minimum amount. The minimum fees are listed in the [Transaction Fee](/en/blockchain/transaction/transaction-fee) article.

## JSON Representation

The [REST API](/en/waves-node/node-api/) of Waves nodes uses the JSON representation of transactions. You can send transactions to a node and read transactions stored on the blockchain via REST API in JSON.

Here is an example of JSON representation:

```json

{
  "senderPublicKey": "BVv1ZuE3gKFa6krwWJQwEmrLYUESuUabNCXgYTmCoBt6",
  "sender": "3N8S4UtauvDAzpLiaRyDdHn9muexWHhBP4D",
  "feeAssetId": null,
  "proofs": [
    "22QJfRKX7kUQt4qjdnUqZAnhqukqhnofE27uvP8Q5xnBf8M6PCNtWVGq2ngm6m7Voe7duys59D1yU9jhKrmdXDCe"
  ],
  "fee": 100000,
  "alias": "91f452553298770f",
  "id": "AD7KmXwoVNc2fXsmaxsHsrnT1tfPF3HsWYtfjFijVsvM",
  "type": 10,
  "version": 2,
  "timestamp": 1548443069053,
  "height": 466104
}
```

| Field | Description |
| :--- | :--- |
| senderPublicKey | [Public key](/en/blockchain/account/#account-public-and-private-keys) of the transaction sender: base58 encoded byte array |
| *sender* | [Address](/en/blockchain/account/address) of the transaction sender: base58 encoded byte array |
| feeAssetId | ID of the fee token.<br>`null` means that the fee is in WAVES.<br>The sender can specify the fee for Invoke Script transactions and Transfer transactions in a sponsored asset, see the [Sponsored Fee](/en/blockchain/waves-protocol/sponsored-fee) article for details |
| proofs | Array of [transaction proofs](/en/blockchain/transaction/transaction-proof). Up to 8 proofs, each proof up to 64 bytes base58 encoded |
| fee | [Transaction fee](/en/blockchain/transaction/transaction-fee): an integer value indicated in the minimum fraction (“cent”) of the fee asset. For example, if the fee is 0.001 WAVES, 100000 is indicated in the JSON representation, so far as 1 WAVES = 10<sup>8</sup> WAVELET |
| *id* | Transaction ID. For the transaction ID calculation method, see the [Cryptographic Practical Details](/en/blockchain/waves-protocol/cryptographic-practical-details#calculating-transaction-id) article |
| type | Transaction type. Type IDs are listed in the [Transaction Type](/en/blockchain/transaction-type/) article |
| version | Transaction version. Versions for each type of transaction are listed in [transaction binary format](/en/blockchain/binary-format/transaction-binary-format) descriptions |
| *applicationStatus* | Result of transaction validation:<br>- `succeed` – transaction is successful.<br>- `scriptExecutionFailed` – the dApp script or the asset script failed.<br>The field is added starting from node version 1.2.4, after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”. See the [Transaction Validation](/en/blockchain/transaction/transaction-validation) article for details |
| timestamp | Transaction timestamp specified by the sender: Unix time in milliseconds. The transaction cannot be added to the blockchain if the timestamp value is more than 2 hours behind or 1.5 hours ahead of current block timestamp |
| *height* | The sequence number of the block that contains the transaction |

The `sender`, `id`, `applicationStatus`, and `height` fields do not need to be filled when sending a transaction, and they are not stored on the blockchain. The node calculates these fields when providing transaction data via the REST API.

> In earlier versions of some types of transactions the `signature` field is used instead of `proofs`.

The fields that depend on the type of transaction are listed in the description of each [type of transaction](/en/blockchain/transaction/transaction-type/).

## Binary Format

Transactions are stored on the blockchain in the binary format (byte representation). [Node extensions](/en/waves-node/extensions/) such as [gRPC server](/en/waves-node/extensions/grpc-server/) can work directly with data in binary format.

The transaction signature and ID are also formed on the basis of the binary format. The guideline for generating a signature and ID is given in the [Cryptographic Practical Details](/en/blockchain/waves-protocol/cryptographic-practical-details#signing) article.

Transaction binary format is described in the [Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/) article.

## Transaction Examples

Example transactions by types are collected in the [Example Transactions](/en/waves-node/node-api/example-transactions) article.

You can get the transaction by ID, or the list of transactions by certain account address, or the list of all transactions in the block:

* In [Waves Explorer](https://wavesexplorer.com/).
* Via [Node REST API](/en/waves-node/node-api/) using the following methods:

   * `GET /transactions/info/{id}` returns transaction data by transaction ID.
   * `GET /transactions/address/{address}/limit/{limit}` returns the list of transactions where the specified address is involved.
   * `GET /blocks/at/{height}` returns block data at the specified height including all transactions in the block.

## How to Sign and Send Transaction

* Using [client libraries](/en/building-apps/waves-api-and-sdk/client-libraries/). See some examples of sending a transaction in the [Creating & Broadcasting Transactions](/en/building-apps/how-to/basic/transaction) article.

   :bulb: You can sign and send transactions on behalf of users without asking them for their seed phrases or private keys using one of the following frameworks:
   
   * [Signer](/en/building-apps/waves-api-and-sdk/client-libraries/signer) library;
   * [Waves Keeper API](/en/ecosystem/waves-keeper/waves-keeper-api) (requires that the Waves Keeper extension be installed in the user's browser).

* In [Waves IDE](https://waves-ide.com/) using [JavaScript interactive console](/en/building-apps/smart-contracts/tools/waves-ide#javascript-interactive-console).
* In [Waves.Exchange](https://waves.exchange/) app developed by Waves.Exchange team you can create some types of transactions such as Transfer, Issue/Reissue/Burn, Sponsor Fee transaction, Set Asset Script, Create Alias.
* Via [Node REST API](/en/waves-node/node-api/):

   * the `POST /transactions/broadcast` method sends a signed transaction to a node;
   * the `POST /transactions/sign` method generates transaction signature (but this method is only available to the node owner).

## After Transaction Is Sent

Upon receiving a transaction, the node validates its signature, checks the sender's balance, and so on, see the [Transaction Validation](/en/blockchain/transaction/transaction-validation) article for details. If the transaction is valid, the node puts the transaction to the UTX pool that is a list of transactions awaiting to be added, and also broadcasts the transaction to other nodes of the blockchain network.

Due to block size limitation (1 MB) the transaction may not get to the block immediately. First of all, nodes add the most “profitable” transactions with the highest fee per byte.

After being added to a block, the transaction changes the blockchain state: account balances, records in the account data storage, and so on.

The transaction may never be added to a block if it becomes invalid while waiting in the UTX pool. For example, the transaction has expired (the timestamp is more than 2 hours behind current time) or another transaction has changed the blockchain state and now the sender's balance is insufficient to execute the transaction or the account or asset script denies the transaction.
