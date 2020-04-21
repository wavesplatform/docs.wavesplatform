# Exchange transaction binary format

> Learn more about [exchange transaction](/en/blockchain/transaction-type/exchange-transaction)

## Transaction version 2 <a id="transaction2"></a>

Transaction version 2 can accept orders of version [1](/en/blockchain/binary-format/order-binary-format#order1), [2](/en/blockchain/binary-format/order-binary-format#order2) and 3.

| Field order number | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag | | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Indicates the [transaction version](/en/blockchain/transaction/transaction-version) is version 2 or higher.<br>Value must be 0 |
| 2 | [Transaction type ID](/en/blockchain/transaction-type) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 7 |
| 3 | [Transaction version](/en/blockchain/transaction/transaction-version) | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 2 |
| 4.1 | Buy order size |  | [Integer](/en/blockchain/blockchain/blockchain-data-types) | 4 |  |
| 4.2 | Buy [order version](/en/blockchain/binary-format/order-binary-format) flag | order1.version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | `S` | `S` = 1 if the order version is 1.<br>`S` = 0 if the order version is 2 |
| 4.3 | Order for buying a token | order1 | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | See [order binary format](/en/blockchain/binary-format/order-binary-format) |  |
| 5.1 | Sell order size  |  | [Integer](/en/blockchain/blockchain/blockchain-data-types) | 4 |  |
| 5.2 | Sell [order version](/en/blockchain/binary-format/order-binary-format) flag | order2.version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | `S` | `S` = 1 if the order version is 1.<br>`S` = 0 if the order version is 2 |
| 5.3 | Order for selling a token | order2 | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | See [order binary format](/en/blockchain/binary-format/order-binary-format) |  |
| 6 | Price | price | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | Amount of [token](/en/blockchain/token) B which order sender offers for one token A |
| 7 | Amount | amount | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | Amount of token A which order sender wants to buy |
| 8 | Buy [matcher fee](/en/blockchain/matcher-fee) | buyMatcherFee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 9 | Sell [matcher fee](/en/blockchain/matcher-fee) | sellMatcherFee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 10 | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 11 | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 12 | [Transaction proofs](/en/blockchain/transaction/transaction-proof) | proofs | [Proofs](/en/blockchain/transaction/transaction-proof) | `S` | If the array is empty, then `S`= 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>), where `N` is the number of proofs in the array, `P`<sub>n</sub> is the size on `N`-th proof in bytes. <br>The maximum number of proofs in the array is 8. The maximum size of each proof is 64 bytes |

## JSON representation of the transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/csr25XQHT1c965Fg7cY2vJ7XHYVsudPYrUbdaFqgaqL) in Node API.

## Transaction version 1 <a id="transaction1"></a>

Transaction version 1 can accept orders of version [1](/en/blockchain/binary-format/order-binary-format#order1) only.

| Field order number | Field | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [Transaction type ID](/en/blockchain/transaction-type) | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 6 |
| 2 | Buy order size  | [Integer](/en/blockchain/blockchain/blockchain-data-types) | 4 |  |
| 3 | Sell order size | [Integer](/en/blockchain/blockchain/blockchain-data-types) | 4 |  |
| 4 | Order for buying a token | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | See [order binary format](/en/blockchain/binary-format/order-binary-format) |  |
| 5 | Order for selling a token | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | See [order binary format](/en/blockchain/binary-format/order-binary-format) |  |
| 6 | Price | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | Amount of [token](/en/blockchain/token) B which order sender offers for one token A |
| 7 | Amount | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | Amount of token A which order sender wants to buy |
| 8 | Buy [matcher fee](/en/blockchain/matcher-fee) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 9 | Sell [matcher fee](/en/blockchain/matcher-fee) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 10 | [Transaction fee](/en/blockchain/transaction/transaction-fee) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 11 | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 12 | [Transaction signature](/en/blockchain/transaction/transaction-signature) | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 64 |  | |
