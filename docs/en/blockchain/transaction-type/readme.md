# Transaction Type

There are various types of transactions implemented on the Waves blockchain. Types are conveniently divided into categories as per the diagram.

![](./_assets/types.png)

## Tokenisation

| Type ID | Name | Description |
| :--- | :--- | :--- |
| 3 | [Issue transaction](/en/blockchain/transaction-type/issue-transaction) | Issues a token |
| 5 | [Reissue transaction](/en/blockchain/transaction-type/reissue-transaction) | Reissues a token |
| 6 | [Burn transaction](/en/blockchain/transaction-type/burn-transaction) | Decreases the amount of token |
| 15 | [Set Asset Script transaction](/en/blockchain/transaction-type/set-asset-script-transaction) | Modifies the asset script |
| 17 | [Update Asset Info transaction](/en/blockchain/transaction-type/update-asset-info-transaction) | Changes the token name and description |

> The Update Asset Info transaction type is added starting from node version 1.2.0, after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.

## Usage

| Type ID | Name | Description |
| :--- | :--- | :--- |
| 4 | [Transfer transaction](/en/blockchain/transaction-type/transfer-transaction) | Transfers a token to another account |
| 7 | [Exchange transaction](/en/blockchain/transaction-type/exchange-transaction) | Exchanges two different tokens between two accounts. Contains two counter orders: a buy order and a sell order |
| 10 | [Create Alias transaction](/en/blockchain/transaction-type/create-alias-transaction) | Creates alias for the sender's address |
| 11 | [Mass transfer transaction](/en/blockchain/transaction-type/mass-transfer-transaction) | Transfers a token, up to 100 recipients |
| 12 | [Data transaction](/en/blockchain/transaction-type/data-transaction) | Adds, modifies and deletes data entries in the sender's account data storage |
| 13 | [Set Script transaction](/en/blockchain/transaction-type/set-script-transaction) | Assigns the dApp script or account script to the sender's account |
| 16 | [Invoke Script transaction](/en/blockchain/transaction-type/invoke-script-transaction) | Invokes a callable function of a dApp |

## Network

| Type ID | Name | Description |
| :--- | :--- | :--- |
| 8 | [Lease transaction](/en/blockchain/transaction-type/lease-transaction) | Leases WAVES |
| 9 | [Lease Cancel transaction](/en/blockchain/transaction-type/lease-cancel-transaction) | Cancels the leasing |
| 14 | [Sponsor Fee transaction](/en/blockchain/transaction-type/sponsor-fee-transaction) | Configures sponsorship |

## Genesis

| Type ID | Name | Description |
| :--- | :--- | :--- |
| 1 | [Genesis transaction](/en/blockchain/transaction-type/genesis-transaction) | Accrues WAVES to an account upon the initial distribution during the creation of the blockchain |
