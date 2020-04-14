# BalanceDetails

> :warning: The `BalanceDetails` structure is introduced in [Standard library](/en/ride/script/standard-library) **version 4** which is available since node version 1.2.0 after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”. Node versions 1.2.x are currently available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

Structure that contains WAVES balances of account. For description of balance types, see the [Account Balance](/en/blockchain/account/account-balance) article.

## Конструктор

``` ride
BalanceDetails(available: Int, regular: Int, generating: Int, effective: Int)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | available | [Int](/en/ride/data-types/int) | Available balance |
| 2 | regular | [Int](/en/ride/data-types/int) | Regular balance |
| 3 | generating | [Int](/en/ride/data-types/int) | Generating balance |
| 4 | effective | [Int](/en/ride/data-types/int) | Effective balance |

All balances are given in [WAVELETs](/en/blockchain/token/wavelet).
