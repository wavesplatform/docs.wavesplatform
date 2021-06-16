# [Ride v5] Transfer

:warning: This is the documentation for the Standard Library **version 5**, which becomes available after activation of feature #16 “Ride V5, dApp-to-dApp invocations”. [Go to version 4](/en/ride/structures/common-structures/transfer)

Structure of a single transfer within the [MassTransferTransaction](/en/ride/v5/structures/transaction-structures/mass-transfer-transaction) structure.

## Constructor

``` ride
Transfer(recipient: Address|Alias, amount: Int)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | recipient | [Address](/en/ride/v5/structures/common-structures/address)&#124;[Alias](/en/ride/v5/structures/common-structures/alias) | [Address](/en/blockchain/account/address) of a recipient of tokens |
| 2 | amount | [Int](/en/ride/v5/data-types/int) | Number of tokens |
