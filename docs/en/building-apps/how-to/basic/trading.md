---
sidebarDepth: 2
---

# How to Buy and Sell Tokens

Any token or asset issued on the Waves blockchain can be bought or sold on the [Waves.Exchange](https://waves.exchange/). Waves.Exchange developed by Waves.Exchange team is a part of the Waves ecosystem. It combines a user wallet and decentralized exchange that execute trades swiftly and securely.

To buy or sell tokens, a user submits an order. He/she doesn't transfer his/her tokens to anyone, his money remains on his account until the order is matched with counter-order. The Matcher creates ExchangeTransaction while the blockchain guarantees that the transaction will be made on the conditions that are not worse than in the user's order. After the transaction is confirmed on blockchain, the user account's balances of assets are changed according to the amount, order execution price, and the Matcher fee.







## Create Trading Order

### Using Waves.Exchange

You can use online, desktop or mobile app. See the [Start Trading (Online & Desktop)](https://docs.waves.exchange/en/waves-exchange/waves-exchange-online-desktop/online-desktop-trading) and [Start Trading (Mobile)](https://docs.waves.exchange/en/waves-exchange/waves-exchange-mobile/mobile-trading/mobile-start-trading) sections of the Waves.Exchange documentation.

### Using Matcher API

You can set 


To retrieve all types of balalnces of WAVES, use `GET /addresses/balance/details/{address}` method.

To retrieve balances of other assets, use `GET /assets/balance/{address}` or `GET /assets/balance/{address}/{assetId}` method.



You can send a request to your own node or to one of the Waves nodes with public API:
* Testnet: <https://nodes-testnet.wavesnodes.com>
* Mainnet: <https://nodes.wavesnodes.com>

To retrieve all the data records from an account data storage, use `GET /addresses/data/{address}` method.

To retrieve a data record by key, use `GET /addresses/data/{address}/{key}` method.

See method descriptions in [Swagger web interface](https://nodes-testnet.wavesnodes.com/).

### Using JavaScript


### Using Python


## Get Order Status

### Using Waves.Exchange


### Using Matcher API


### Using JavaScript


### Using Python


## Cancel Order

### Using Waves.Exchange


### Using Matcher API


### Using JavaScript


### Using Python