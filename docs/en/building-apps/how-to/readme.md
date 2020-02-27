# How-to Guides

How-to guides provide instructions including sample code that you can follow to complete a specific task.

## Basics

[**Retrieving information from the blockchain**](/en/building-apps/how-to/basic/retrieve)

All the data in Waves blockchain is public and can be read by anyone. For example, you can retrive data from account data storage, account balance, a list of transactions by certain account, or current blockchain height and time.

[**Creating and broadcasting transactions to the blockchain**](/en/building-apps/how-to/basic/transaction)

To perform any action on the blockchain, you need to create a transaction of appropriate type, sign it and send to a node.

## Trading

[**Buying and selling assets on exchange**](/en/building-apps/how-to/basic/trading)

To buy or sell asset (except NFTs), you need to create an order, sign it and send to the exchange.

[**Creating your first crypto trading bot**](/en/building-apps/waves-api-and-sdk/examples/trading-bot) (Python) by [Antonina Begicheva](https://github.com/gingerabsurdity)

This trading bot implements scalping trading strategy that exploits small changes in currency prices: it buys at the mean price minus some price step and sells at the mean price plus some step, in order to gain the bid/ask difference.


## dApps

[**Simple voting on the Waves blockchain**](/en/building-apps/smart-contracts/simple-voting-on-the-waves-blockchain)

This dApp implements voting among HOA (homeowners association) members on the Waves blockchain. The dApp script checks if a voter has rights to vote and writes voting results to the dApp data storage.
