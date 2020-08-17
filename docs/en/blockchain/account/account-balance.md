# Account Balance

An **account balance** is the amount of the [token](/en/blockchain/token/) that is stored on the [account](/en/blockchain/account/).

One account can store different tokens in different amounts. For example, an account can have 50 [WAVES](/en/blockchain/token/waves) and 200 [WCTs](/en/blockchain/glossary#w) at the same time. The amount of the Y token on the account is called the **account balance in Y token**. If there is no Y token on the account, it is said that the **account balance in Y token is equal to zero**.

## Account balance in WAVES token
There are four balances in WAVES token:

* regular
* available
* effective
* generating

In addition to WAVES that belong to the account owner, the account may store WAVES that belong to other accounts — those are [leased](/en/blockchain/leasing) WAVES.

The **regular balance** is the amount of WAVES on the account belonging directly to the account owner.

To explain the available and effective balances, we will introduce the following designations:

`R` — regular balance,

`Lo` — the amount of WAVES which account leased to other accounts,

`Li`— the amount of WAVES which were leased to the account by other accounts.

The **available balance** is:

```
R - Lo
```

The **effective balance** is:

```
R - Lo + Li
```

The **generating balance** is the minimum value of the effective balance during the last 1000 blocks.

## Top up and view account balance

You can buy and sell tokens using [Waves.Exchange](https://waves.exchange/) developed by Waves.Exchange team or at one of the [centralized exchanges](https://coinmarketcap.com/currencies/waves/#markets).

You can view your account balance in Waves.Exchange or in the [Waves Keeper](/en/ecosystem/waves-keeper/) browser extension.

Example of the Wallet window with the list of tokens on the account:

![](./_assets/account-balance.png)

You can view the list of tokens on account in [Waves Explorer](https://wavesexplorer.com/) — for that find the account by its [address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) and go to the **Assets** tab.

![](./_assets/tokens.png)

## Retrieving account balance using Node API
You can get account balance in WAVES by using the Node API request.

Example of the request:

```
curl https://nodes.wavesnodes.com/addresses/balance/details/<account address>
```

Example of the response:

```
{
  "address": "3PMCn1EHq4WrsfUazezyYu23H1gHKvuffER",
  "regular": 6086358429,
  "generating": 5086358429,
  "available": 5086358429,
  "effective": 5086358429
}
```
