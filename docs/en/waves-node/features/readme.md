# Features

**Feature** is a functionality added to the [Waves blockchain](/en/blockchain/blockchain) during a new [release](https://github.com/wavesplatform/Waves/releases).

Features have names and unique IDs and can be enabled by setting `supported` parameter in the `features` section of the node configuration file. For details see [Features Settings](/en/waves-node/node-configuration#features-section) section of the [Node Configuration](/en/waves-node/node-configuration) article.

Waves Mainnet nodes currently support the following features:

| Feature ID |                        Name                       | Description                                                                                                                                                                                              | Blockchain Height* | Activation Date |
|------------|:-------------------------------------------------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------|
| 1          | Minimum Generating Balance of 1000 WAVES          | Min generating balance of the mining account has to be 1000 WAVES, for the accout to generate blocks                                                                                                     | 810 000           | Dec 2017        |
| 2          | NG Protocol                                       | Transition to Waves NG protocol                                                                                                                                                                          | 805 000           | Dec 2017        |
| 3          | Mass Transfer Transaction                         | Introduction of mass transfer transaction                                                                                                                                                                | 940 000           | Mar 2018        |
| 4          | Smart Accounts                                    | Introduction of smart accounts                                                                                                                                                                           | 1 190 000         | Sep 2018        |
| 5          | Data Transaction                                  | Introduction of data transactions                                                                                                                                                                        | 1 060 000         | Jun 2018        |
| 6          | Burn Any Tokens                                   | Ability of the issuer to burn tokens                                                                                                                                                                     | 1 070 000         | Jul 2018        |
| 7          | Fee Sponsorship                                   | Introduction of sponsor transactions                                                                                                                                                                     | 1 080 000         | Jul 2018        |
| 8          | Fair PoS                                          | Changes in PoS protocol. The share of generated blocks must match the share of the node generating balance                                                                                               | 1 100 000         | Jul 2018        |
| 9          | Smart Assets                                      | Introduction of smart assets                                                                                                                                                                             | 1 340 000         | Jan 2019        |
| 10         | Smart Account Trading                             | Ability to place smart account orders. The Matched-account can be smart account or dApp                                                                                                                  | 1 340 000         | Jan 2019        |
| 11         | RIDE 4 DAPPS                                      | Improvements of Ride language. Added [functions]. Introduced script invocation transaction                                                                                                               | 1 610 000         | Jul 2019        |
| 12         | Order Version 3                                   | Ability to set order comission in any token                                                                                                                                                              | 1 610 000         | Jul 2019        |
| 13         | Reduce NFT fee                                    | If the amount of token in the issuing transaction is 1, the number of decimal places is 0, and the token cannot be reissued, then the commission for such a transaction will be 0.001 WAVES instead of 1 | 1 610 000         | Jul 2019        |
| 14         | Block Reward and Community Driven Monetary Policy | Introduction of mining reward                                                                                                                                                                            | 1 740 000         | Oct 2019        |

>*Mainnet blockchain height where the feature was activated.

:warning: The following features are available starting from node version  1.2.x currently supported on Stagenet:

| Feature ID | Name | Description |
|------------|:-------------------------------------------------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 15 | VRF and Protobuf | Added ability to sign only the block header by the mining node. Added SNARK verifier support. Added ability for dApp to pay for transaction.
| 16 | Ride V4 and multiple attached payments for Invoke Script Transaction | In Ride language version 4 up to two payments can be applied to `Invoke Script` transaction. Added `Update Asset Info` transaction. Added `Delete Entry` transaction. Added BlockTxs MerkleRoot.
| | |

## Feature Status

Each feature can have one of the three statuses:

1. Voting
2. Approved
3. Activated

## Activation of New Features

**Feature activation protocol** is a procedure according to which a new [feature](/en/waves-node/features/feature) gets activated, i.e. it gets the "activated" status.

* Activation process consists of voting and activation. Each mining node (which generates blocks) can vote for a new feature by having the voting parameter set in its configuration file. Such node generates blocks that  contain the vote for the feature. See [example](/en/waves-node/activation-protocol#configuration-file-changes) and more details in [Activation Protocol](/en/waves-node/activation-protocol) article.

* If there are not less than 8000 blocks on Mainnet (2700 on Testnet and 40 on Stagenet) with support of the feature during the voting period (every 10000 blocks on Mainnet, 3000 on Testnet and 100 on Stagenet), the feature gets "approved" status on the blockchain.  An "approved" feature becomes "activated" after another 10000 blocks on Mainnet (3000 on Testnet and 100 on Stagenet). Then the feature starts working and all the nodes which can not support such feature (old versions) stop.

For more details see [Activation protocol](/en/blockchain/waves-protocol/activation-protocol) article.
