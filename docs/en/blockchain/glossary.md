

# Glossary

## A

### Account

An **account** is a [cryptographically connected](https://en.wikipedia.org/wiki/Public-key_cryptography) pair of [public](#public-key)
 and [private keys](#private-key) on the [blockchain](#blockchain). Accounts uniquely correlate [transactions](#transaction) and [orders](#order) with their senders.

### Account data storage

An **account data storage** is the store of data records in the key-value format associated with the [account](#account). Each account has single data storage. The size of the account data storage is unlimited.

### Account script

An **account script** is a [Ride](#ride) [script](#script) that has the following directives:

```ride
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}
```

The account script is attached to the [account](#account) using the [set script transaction](/en/blockchain/transaction-type/set-script-transaction). Only one script can be attached to an [account](#account). An account with an account script attached is called a [smart account](#smart-account).
### Address

An **address** is a unique [account](#account) identifier. The address can be represented as an alphanumeric string.

### Airdrop

An **airdrop** is a simultaneous sending of [tokens](#token) to multiple [addresses](#address). As a rule, the airdrop is used as an incentive for holders of a certain token as part of a marketing campaign to promote a project, increase its recognition, and attract investors.

### Alias

An **alias** is a short, easy-to-remember [address](#address) name. There cannot be two aliases with the same name. A single address can have multiple aliases.

### Asset

An asset is a synonym for the [token](#token).

### Asset script

An **asset script** is a [Ride](#ride) [script](#script) that has the following directives:

```ride
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}
```

The asset script is attached to the [asset](#asset) using the [set asset script transaction](/en/blockchain/transaction-type/set-asset-script-transaction). You can attach a script to an asset only at the time the asset creation. However, you can change the script later, if needed. An asset with a script attached to it is called a [smart asset](#smart-asset).

## B

### Block

A **block** is a unit of the [blockchain](#blockchain) chain. The block contains [transactions](#transaction): from 0 to 6000 inclusive. The maximum block size is 1 MB.

### Blockchain

A **blockchain** is a continuous sequential chain of [blocks](#block), that are linked using cryptography.

The blockchain has the [height](#blockchain-height).

### Block height

A **block height** is a [block](#block) sequence number in the [blockchain](#blockchain).

### Blockchain height

A **blockchain height** is a sequence number of the last [block](#block) in the [blockchain](#blockchain).

### Blockchain network

A **blockchain network** is a computer network that consists of [nodes](#node).

### Block signature

A **block signature** is a [hash](#hash) that the [mining node](#mining-node) receives when it signs the generated [block](#block) with the [private key](#private-key) of the [mining account](#mining-account).

## C

### Consensus

The **consensus** is a set of rules in accordance with which [blockchain](#blockchain) operates. Waves uses the [LPoS consensus](#lpos).

### Cryptocurrency

A **cryptocurrency** is a type of [digital currency](https://en.wikipedia.org/wiki/Digital_currency), the creation and control of which is based on cryptographic methods.

## D

### dApp

A **dApp** is an [account](#account) with the [dApp script](#dapp-script) attached.

### dApp script

A **dApp script** is a [Ride](#ride) [script](#script) used to create [dApp](#dapp). The dApp script has the following directive:

```ride
{-# CONTENT_TYPE DAPP #-}
```

dApp-script can be attached to the [account](#account) using the [set script transaction](/en/blockchain/transaction-type/set-script-transaction), and, as a result, the dApp will be created.

### Decentralized application

A **decentralized application** is an application that is stored and executed on the [blockchain network](#blockchain-network).

## E

### Explorer

**Explorer** (or Waves Explorer) is an online service (https://wavesexplorer.com) that displays Waves [blockchain](#blockchain) data in a human-readable form.

## F

### Faucet

A **test network faucet** (or faucet) is a [Waves Explorer](#explorer) tool that refills the [test network](#test-network) [accounts](#account) with the [WAVES](#waves) test [tokens](#token). For one recharge, the user receives 10 testnet WAVES.

## G

### Gateway

**Gateway** is a centralized payment solution that allows transferring [cryptocurrencies](#cryptocurrency) from one [blockchain](#blockchain) to another and vice versa; as well as transferring fiat money to and out of the blockchain.

### Genesis block

The **genesis block** (or genesis) is the very first [block](#block) of the [blockchain](#blockchain). The genesis block contains one or several [genesis transactions](/en/blockchain/transaction-type/genesis-transaction).

### Genesis transaction

**Genesis transaction** is a [genesis block](#genesis-block) [transaction](#transaction) that charges [WAVES](#waves) to an [account](#account). The genesis transactions define the initial distribution of WAVES between accounts during the creation of the [blockchain](#blockchain).

## H

### Hash

A **hash** is a result of applying a [hash function](#hash-function).

### Hash function

A **hash function** (or fold function) is a function that converts an array of input data of arbitrary length into a bit string of a fixed length, performed by a certain algorithm.

## K

### Keeper

**Keeper** (or Waves Keeper) is a web browser extension that allows users to securely interact with Waves-enabled web services.

## L

### Leasing

**Leasing** is a temporary reversible transfer of [WAVES](#waves) from one account to another to [increase the stability and security of the network](/en/blockchain/leasing), as well as potentially get [mining reward](/en/blockchain/mining/mining-reward). Note that the WAVES [tokens](#token) are not actually being transferred to another [account](#account), they remain on the sender's balance, however, they are 'frozen' and cannot participate in the buying and selling operations, as well as they cannot be sent to another account. The leased tokens provide the leasing recipient with a greater chance of [mining](#mining) a [block](#block). The recipient of the lease can share the income from mining with the one who leased WAVES to him. However, the Waves protocol does not regulate the payment process for [LPoS](#lpos) [mining](#mining), this remains at the discretion of the [miner](#miner). At any time, the sender can 'unfreeze' tokens by invoking the [Lease Cancel transaction](/en/blockchain/transaction-type/lease-cancel-transaction).

### LPoS

**LPoS** (or Leased Proof-of-Stake) is a [consensus](#consensus) algorithm in which the probability of generating the next [block](#block) by the participant is proportional to the share of [cryptocurrency](#cryptocurrency) belonging to this participant or leased to this participant from their total supply. In other words, the more [tokens](#token) on the [account](#account) of the [miner](#miner) (own and leased to them), the higher the probability of generating the next block.

## M

### Mainnet

The **mainnet** (or main network) is the main Waves [blockchain network](#blockchain-network).

### Matcher

A **matcher** is a [node](#node) extension that executes [orders](#order) on the exchange. See the [About Waves.Exchange Matcher](https://docs.waves.exchange/en/waves-matcher/) section in the Waves.Exchange documentation.

### Matcher fee

A **matcher fee** is a fee that [matcher](#matcher) takes from both [accounts](#account) that participate in the exchange of the pair of [tokens](#token).

### Miner

A **miner** is the owner of the [mining node](#mining-node).

### Mining

**Mining** is the process of generating a [block](#block) by a [mining node](#mining-node), as a result of which a new block is added to the [blockchain](#blockchain) and [WAVES](#waves) [tokens](#token) are issued. For block generation, [miners](#miner) receive a [reward for mining](/en/blockchain/mining/mining-reward), as well as [transaction fees](/en/blockchain/transaction/transaction-fee), according to the rules of the [Waves-NG](/en/blockchain/waves-protocol/waves-ng-protocol) protocol.

### Mining account

A **mining account** is an [account](#account) that the [mining node](#mining-node) uses to [sign](#block-signature) the generated [blocks](#block).

### Mining node

A **mining node** is a [node](#node) that can perform [mining](#mining). Each mining node is a [validating node](#validating-node).

### Multisignature

**Multisignature** is an implementation of an electronic signature that requires the use of several [private keys](#private-key) as a condition for [transaction](#transaction) execution.

## N

### NFT

**NFT** (Non-Fungible Token) is a [token](#token) with unique ID. Two 'regular' tokens can not be distinguished from each other — they are the same, i.e. fungible. Each NFT is unique; there cannot be two identical NFTs. Most often NFTs are used in games.

### Node

A **node** is a [host](https://ru.wikipedia.org/wiki/Хост) that is connected to the [blockchain network](#blockchain-network) using the [Waves Node](https://github.com/wavesplatform/Waves) application. The node stores [blocks](#block), sends and validates [transactions](#transaction).

## O

### Oracle

**Oracle** is a provider of data from the outside world to the [blockchain](#blockchain).

### Oracle card

An **oracle card** is a public description of the [oracle](#oracle) in the [blockchain](#blockchain) according to a [standardized protocol](/en/ecosystem/waves-oracles/create-an-oracle-card-with-a-data-transaction) in the form of a [data transaction](/en/blockchain/transaction-type/data-transaction).

### Order

**Order** (or exchange order) is an instruction to buy or sell a [token](#token) on the exchange.

## P

### PoS

**PoS** (Proof-of-Stake) is a [consensus](#consensus) algorithm in which the probability of generating the next [block](#block) is proportional to the share of [cryptocurrency](#cryptocurrency) belonging to this participant from their total supply. In other words, the more [tokens](#token) on the [account](#account) of a [miner](#miner), the higher the probability of generating the next block.

### PoW

**PoW** (Proof-of-Work) is a [consensus](#consensus) algorithm in which it is required to perform a complex calculation in order to generate a new [block](#block). That is, the higher the performance of the [miner's](#miner) equipment, the higher the probability of generating the next block.

### Private key

The **private key** is one of a pair of [account](#account) keys. The account owner signs the [transaction](#transaction) with the [private key](#private-key) before sending it, and, as a result, gets the digital signature of the transaction.

### Public key

The **public key** is one of a pair of [account](#account) keys. A public key uniquely correlates a [transaction](#transaction) with its sender. The transaction signature is checked against the public key with some function, and, if it returns true, we can be sure that the user has valid [private key](#private-key) for this public key.

## R

### Ride

The **Ride** is a functional expression-based programming language. Ride is used to write [scripts](#script). The language has [strong static typing](https://en.wikipedia.org/wiki/Type_system), it is case sensitive, has no loops, recursions, and goto-like expressions, and therefore it is [Turing-incomplete](https://en.wikipedia.org/wiki/Turing_completeness).

## S

### Script

A **script** is the source code on the [Ride](#ride) language. There are three types of scripts: [dApp script](#dapp-script), [account script](#account-script), [asset script](#asset-script).

### Secret phrase

**Secret phrase** (or Seed) is a set of characters (usually, it is 15 English words with spaces between them) that allows you to access your Waves [address](#address) and, accordingly, the funds on your [account](#account). When registering an account, you are asked to keep your secret phrase safe.

### Smart account

A **smart account** is an [account](#account) with an [account script](#account-script) attached. Only one script can be attached to an account. The account script is attached to the account using the [set script transaction](/en/blockchain/transaction-type/set-script-transaction).

### Smart asset

A **smart asset** is a [token](#token) with an [asset script](#asset-script) attached.

### Stagenet

**Stagenet** (or staging network) is the Waves [blockchain network](#blockchain-network), which is used for experiments, intermediate testing of new functionality, as well as providing access for the Waves community to intermediate releases. It is important to consider that this network is unstable, a frequent rollback of blockchain data to the N-th height in the past is possible.

## T

### Test network

**Test network** (or testnet) is a Waves [blockchain](#blockchain) test network, which is used by developers to test their products, and by users to get acquainted with the blockchain.

### Token

A **token** is a [blockchain](#blockchain) object that represents another object from the physical or virtual world or an abstract concept.

### Token rating

**Token Rating** is an online service (https://tokenrating.wavesexplorer.com) that displays the ratings of [tokens](#token) (projects) issued on the Waves blockchain. The service allows users to vote for a particular token.

### Transaction

The **transaction** is an action on the [blockchain](#blockchain) on behalf of the [account](#account). Transactions can be sent only from the account — thus, any transaction can be correlated with a certain account.

## U

### UTX pool

**UTX pool** (or Unconfirmed Transactions pool) is a pool of unconfirmed [node](#node) [transactions](#transaction) that are waiting for validation.

## V

### Validating node

A **validating node** is a [node](#node) that validates [transactions](#transaction).

## W

### WAVELET

**WAVELET** is 1/100 000 000 [WAVES](#waves). 1 WAVELET is the minimum number of WAVES that you can work with within the Waves [blockchain](#blockchain).

### WAVES

**WAVES** is the main [token](#token) of the Waves blockchain. 1 WAVES equals 100,000,000 [WAVELET](#wavelet). In April 2016, 100 million WAVES were released. WAVES cannot be burned using a [burn transaction](/en/blockchain/transaction-type/burn-transaction).

### WCT

**WCT** (or Waves Community Token) is a [token](#token) used by members of the Waves community during voting and other activities.

### WRT

**WRT** (or Waves Reward Token) is a [token](#token) that is used to reward contributors. Contributors can participate in the creation of [dApps](#dapp), serve as external auditors or assist in events and receive rewards for this. The more difficult the contributor’s task is, the more WRT tokens they can get. Also, with the help of WRT, Waves community members can thank the most influential and useful members of the Waves ecosystem.
