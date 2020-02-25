# Transaction fee

A **transaction fee** is a fee that an [account](/en/blockchain/account) owner pays to send a [transaction](/en/blockchain/transaction).

A sender can specify any amount of fee but not less than a certain amount. The larger the fee is, the quicker the transaction will be added to the new [block](/en/blockchain/block).

> If a [smart account](/en/blockchain/account/smart-account) transfers a [smart asset](/en/blockchain/token/smart-asset), then the fee doubles. <br>If a transaction is validated by an [account script](/en/ride/script/script-types/account-script) or an [asset script](/en/ride/script/script-types/asset-script), then the fee is increased by 0.004 WAVES

| Transaction type | Transaction type ID | A minimum transaction fee in WAVES | Comments |
| :--- | :--- | :--- | :--- |
| [Create alias transaction](/en/blockchain/transaction-type/alias-transaction) | 10 | 0.001 | |
| [Burn transaction](/en/blockchain/transaction-type/burn-transaction) | 6 | 0.001 | |
| [Data transaction](/en/blockchain/transaction-type/data-transaction) | 12 | 0.001 per kilobyte | The value is rounded up to the thousandths |
| [Exchange transaction](/en/blockchain/transaction-type/exchange-transaction) | 7 | 0.003 | |
| [Invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction) | 16 | 0.005 + `B`<br/>+ 0.004 × `C`<br/>+ 0.004 × `D` + `K` | If an invoke script transaction is sent from a [smart account](/en/blockchain/account/smart-account), then `B` = 0.004, otherwise `B` = 0.<br>An invoke script transaction may have up to two payments attached. `C` represents  a number of different [smart assets](/en/blockchain/token/smart-asset) in payments.<br>In addition to this, the invoke script transaction can invoke a transfer, reissue or burn of different assets. `D` represents the number of [smart assets](/en/blockchain/token/smart-asset) in these actions.<br>In addition to this, the invoke script transaction can invoke an issue of assets. `K` represents the number of issued assets that are not [non-fungible tokens](/en/blockchain/token/non-fungible-token). |
| [Issue transaction](/en/blockchain/transaction-type/issue-transaction) | 3 | 1 for reqular token <br>0.001 for [non-fungible token](/en/blockchain/token/non-fungible-token) | |
| [Lease cancel transaction](/en/blockchain/transaction-type/lease-cancel-transaction) | 9 | 0.001 | |
| [Lease transaction](/en/blockchain/transaction-type/lease-transaction) | 8 | 0.001 | |
| [Mass transfer transaction](/en/blockchain/transaction-type/mass-transfer-transaction) | 11 | 0.001 + 0.0005 × N | `N` is the number of transfers inside of the transaction. <br>The value of 0.0005 × N in the formula is rounded up to the thousandths |
| [Reissue transaction](/en/blockchain/transaction-type/reissue-transaction) | 5 | 1<br/>0.001 – starting from node version 1.2.0, after activation of the "Ride V4 and multiple attached payments for Invoke Script Transaction" (No. 16) feature. See <a href="/en/blockchain/waves-protocol/activation-protocol">Activation Protocol</a>| |
| [Set asset script transaction](/en/blockchain/transaction-type/set-asset-script-transaction) | 15 | 1 | |
| [Set script transaction](/en/blockchain/transaction-type/set-script-transaction) | 13 | 0.01 | |
| Sponsor fee transaction | 14 | 1 | |
| [Transfer transaction](/en/blockchain/transaction-type/transfer-transaction) | 4 | 0.001 | | |
