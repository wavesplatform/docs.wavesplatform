# Genesis Transaction Binary Format

> Learn more about [genesis transaction](/en/blockchain/transaction-type/genesis-transaction).

| # | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | [Transaction type ID](/en/blockchain/transaction-type/) |type| [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 1 |
| 2 | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 3 | [Address](/en/blockchain/account/address) of the recipient | recipient | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 26 |  |
| 4 | Amount of [WAVES](/en/blockchain/token/waves) that will be transferred to the [account](/en/blockchain/account/) | amount | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |

## JSON Representation of Transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/2DVtfgXjpMeFf2PQCqvwxAiaGbiDsxDjSdNQkc5JQ74eWxjWFYgwvqzC4dn7iB1AhuM32WxEiVi1SGijsBtYQwn8) in Node API.
