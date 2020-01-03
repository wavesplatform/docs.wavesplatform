# Transaction version

All [transactions](/en/blockchain/transaction), with the exception of the [genesis transaction](/en/blockchain/transaction-type/genesis-transaction), have versions.

Transactions of the same [type](/en/blockchain/transaction-type), but of different versions, have different [binary formats](/en/blockchain/binary-format/transaction-binary-format).

When developing applications, it is recommended to use transactions of the latest versions.

| # | Transaction type | Available versions |
| :--- | :--- | :--- |
| 1 | [Alias transaction](/en/blockchain/transaction-type/alias-transaction) | 1, 2 |
| 2 | [Burn transaction](/en/blockchain/transaction-type/burn-transaction) | 1, 2 |
| 3 | [Data transaction](/en/blockchain/transaction-type/data-transaction) | 1 |
| 4 | [Exchange transaction](/en/blockchain/transaction-type/exchange-transaction) | 1, 2 |
| 5 | [Genesis transaction](/en/blockchain/transaction-type/genesis-transaction) | Has no version |
| 6 | [Invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction) | 1 |
| 7 | [Issue transaction](/en/blockchain/transaction-type/issue-transaction) | 1, 2 |
| 8 | [Lease cancel transaction](/en/blockchain/transaction-type/lease-cancel-transaction) | 1, 2 |
| 9 | [Lease transaction](/en/blockchain/transaction-type/lease-transaction) | 1, 2 |
| 10 | [Mass transfer transaction](/en/blockchain/transaction-type/mass-transfer-transaction) | 1 |
| 11 | [Reissue transaction](/en/blockchain/transaction-type/reissue-transaction) | 1, 2 |
| 12 | [Set asset script transaction](/en/blockchain/transaction-type/set-asset-script-transaction) | 1 |
| 13 | [Set script transaction](/en/blockchain/transaction-type/set-script-transaction) | 1 |
| 14 | Sponsor fee transaction | 1 |
| 15 | [Transfer transaction](/en/blockchain/transaction-type/transfer-transaction) | 1, 2 |
