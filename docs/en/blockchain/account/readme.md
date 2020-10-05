# Account

Waves uses an account-based model:
* Each [transaction](/en/blockchain/transaction/) is created on behalf of an account.
* All the [tokens](/en/blockchain/token/) belong to certain accounts. For details, see the [Account Balance](/en/blockchain/account/account-balance) article.
* All data are associated with accounts. For details, see the [Account Data Storage](/en/blockchain/account/account-date-storage) article.

## Account Keys

Unlike centralized applications, users do not have usernames and passwords on the blockchain. User identification and validation of their actions is performed using a cryptographically bound key pair:

* The private key is used to sign transactions or orders.
* The public key allows to verify the digital signature.

Each transaction contains the public key of the sender account. The sender generates a digital signature on the transaction using the account's private key. Using the signature and the public key, anyone can check the transaction integrity and verify the signature — that is, ensure that the signature of the transaction matches the public key.

![](./_assets/keys.png)

Waves uses an asymmetric cryptosystem based on the elliptic curve Curve25519-ED25519 with X25519 keys. The rules for generating keys and signatures are described in detail in the section [Cryptographic practical details](/en/blockchain/waves-protocol/cryptographic-practical-details).

The private and public keys are 32-byte arrays. In user interfaces, they are represented in the [base58] encoding(https://ru.wikipedia.org/wiki/Base58).

Example of a private key:

```
6yCStrsBs4VgTmYcSgF37pmQhCo6t9LZk5bQqUyUNSAs
```

Example of a public key:

```
5cqzmxsmFPBHm4tb7D8DMA7s5eutLXTDnnNMQKy2AYxh
```

## Account public and private keys

Private and public keys have the same size — 32 bytes. The bytes of the keys are converted to a [base58](https://en.bitcoin.it/wiki/Base58Check_encoding) character string; in this form, the keys are displayed in the interfaces of programs.

Example of a public key in Base58:

```
BRzAFccE3BeAn8rf7Mf56LoqUdT5xExbMUEgV7wGsiKx
```

Example of a private key in Base58:

```
9g5fFTwrLz9FEbgsE3ujfXPj92h5F4HDK6ew5LXh1ViZ
```

An **account owner** is an owner of both account keys at the same time: both public and private.

## Transaction digital signature

_All_ transactions have a _single_ sender; the only exception is [genesis transactions](/en/blockchain/transaction-type/genesis-transaction) — they do not have a sender.

A transaction contains the sender's _public key_. Before sending the transaction, the sender signs it with his _private key_. The account that signed the transaction is called the **transaction sender**. The signature that results from signing the transaction is called the **transaction digital signature**. If account Y is the sender of the transaction, it is said that the **transaction was sent from account Y**.

The transaction is sent to the [blockchain network](/en/blockchain/blockchain-network/) along with its digital signature. The digital signature and the sender's public key are used to verify the authenticity of the transaction data.

## Account balance

An account may store different [tokens](/en/blockchain/token/) in different amounts. The amount of the token on the account is called the [account balance](/en/blockchain/account/account-balance) in this token.

## Account address

Each account has a _single_ [address](/en/blockchain/account/address).

Example of address in base58:

```
3MsoC9tFzt4jcfHvmv4DBCap2ttokY5Ve9S
```

When transferring a token from one account to another, instead of using the public key of the recipient, its [address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) is used.

## Scripted account

Using the [set script transaction](/en/blockchain/transaction-type/set-script-transaction) you can attach a [script](/en/ride/script/) to the account. An account with a script attached to it is called a **scripted account**. An account without a script is called a **simple account**.

There are two types of scripts that can be attached to an account: an [account script](/en/ride/script/script-types/account-script) and a [dApp script](/en/ride/script/script-types/dapp-script). The account to which an account script is attached is called a [smart account](/en/blockchain/account/smart-account). An account with dApp script attached to it is called a [dApp](/en/blockchain/account/dapp).

## Account data storage

Each account has an [account data storage](/en/blockchain/account/account-data-storage) that stores data records in key-value format.

The account data storage serves as a database for the information that is associated with the account.
