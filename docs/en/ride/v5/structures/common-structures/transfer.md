# [Ride v5] Transfer

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/structures/common-structures/transfer)

Structure of a [mass transfer transaction](/en/blockchain/transaction-type/mass-transfer-transaction) token transfer.

## Constructor

``` ride
Transfer(recipient: Address|Alias, amount: Int)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | recipient | [Address](/en/ride/v5/structures/common-structures/address)&#124;[Alias](/en/ride/v5/structures/common-structures/alias) | [Address](/en/blockchain/account/address) of a recipient of tokens |
| 2 | amount | [Int](/en/ride/v5/data-types/int) | Number of tokens |
