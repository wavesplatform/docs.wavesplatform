# [Ride v4 and v3] Transfer

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/structures/common-structures/transfer)

Structure of a [mass transfer transaction](/en/blockchain/transaction-type/mass-transfer-transaction) token transfer.

## Constructor

``` ride
Transfer(recipient: Address|Alias, amount: Int)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | recipient | [Address](/en/ride/v4/structures/common-structures/address)&#124;[Alias](/en/ride/v4/structures/common-structures/alias) | [Address](/en/blockchain/account/address) of a recipient of tokens |
| 2 | amount | [Int](/en/ride/v4/data-types/int) | Number of tokens |
