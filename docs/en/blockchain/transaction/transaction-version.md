# Transaction Version

All [transactions](/en/blockchain/transaction/), with the exception of the [genesis transaction](/en/blockchain/transaction-type/genesis-transaction), have versions.

Transactions of the same [type](/en/blockchain/transaction-type/), but of different versions, have different [binary formats](/en/blockchain/binary-format/transaction-binary-format/).

When developing applications, it is recommended to use transactions of the latest versions.

| Transaction type | Available versions |
| :--- | :--- |
| [Burn transaction](/en/blockchain/transaction-type/burn-transaction) | 1, 2, 3 |
| [Create alias transaction](/en/blockchain/transaction-type/create-alias-transaction) | 1, 2, 3 |
| [Data transaction](/en/blockchain/transaction-type/data-transaction) | 1, 2 |
| [Exchange transaction](/en/blockchain/transaction-type/exchange-transaction) | 1, 2, 3 |
| [Genesis transaction](/en/blockchain/transaction-type/genesis-transaction) | Has no version |
| [Invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction) | 1, 2 |
| [Issue transaction](/en/blockchain/transaction-type/issue-transaction) | 1, 2, 3 |
| [Lease cancel transaction](/en/blockchain/transaction-type/lease-cancel-transaction) | 1, 2, 3 |
| [Lease transaction](/en/blockchain/transaction-type/lease-transaction) | 1, 2, 3 |
| [Mass transfer transaction](/en/blockchain/transaction-type/mass-transfer-transaction) | 1, 2 |
| [Reissue transaction](/en/blockchain/transaction-type/reissue-transaction) | 1, 2, 3 |
| [Set asset script transaction](/en/blockchain/transaction-type/set-asset-script-transaction) | 1, 2 |
| [Set script transaction](/en/blockchain/transaction-type/set-script-transaction) | 1, 2 |
| Sponsor fee transaction | 1, 2 |
| [Transfer transaction](/en/blockchain/transaction-type/transfer-transaction) | 1, 2, 3 |
| [Update asset info transaction](/en/blockchain/transaction-type/update-asset-info-transaction) | 1* |

> * Update asset info transaction is added since node version 1.2.0 and becomes available after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.
