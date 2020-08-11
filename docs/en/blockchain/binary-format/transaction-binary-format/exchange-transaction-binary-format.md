# Exchange Transaction Binary Format

> Learn more about [exchange transaction](/en/blockchain/transaction-type/exchange-transaction).

## Version 3

Binary format of version 3 is defined in [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto) protobuf scheme. The fields that are common to all types of transactions are described in the [Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/) article.

Exchange transaction of version 3 can accept orders of versions [1](/en/blockchain/binary-format/order-binary-format#v1)–[4](/en/blockchain/binary-format/order-binary-format#v4).

Version 3 is added in node version 1.2.0 and becomes available after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.

```
message ExchangeTransactionData {
    int64 amount = 1;
    int64 price = 2;
    int64 buy_matcher_fee = 3;
    int64 sell_matcher_fee = 4;
    repeated Order orders = 5;
};
```

| Field | Size | Description |
| :--- | :--- | :--- |
| amount | 8 bytes | Amount of the amount asset (base currency) that the buyer received from the seller, specified in the minimum fraction (“cent”) of asset |
| price | 8 bytes | Price for the amount asset (base currency) nominated in the price asset (quote currency), multiplied by 10<sup>8</sup>. For more details see the [Order](/en/blockchain/order) article |
| buy_matcher_fee | 8 bytes | Buy [matcher fee](/en/blockchain/matcher-fee). The fee token ID is indicated in buy order |
| sell_matcher_fee | 8 bytes | Sell [matcher fee](/en/blockchain/matcher-fee) The fee token ID is indicated in sell order |
| orders | | Buy order and sell order. See the [Order binary format](/en/blockchain/binary-format/order-binary-format) | 

## Version 2 <a id="transaction2"></a>

Transaction version 2 can accept orders of version [1](/en/blockchain/binary-format/order-binary-format#order1), [2](/en/blockchain/binary-format/order-binary-format#order2) and 3.

| # | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | Version flag | | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Indicates the [transaction version](/en/blockchain/transaction/transaction-version) is version 2 or higher.<br>Value must be 0 |
| **2** | [Transaction type ID](/en/blockchain/transaction-type/) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 7 |
| **3** | [Transaction version](/en/blockchain/transaction/transaction-version) | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 2 |
| **4.1** | Buy order size |  | [Int](/en/blockchain/blockchain/blockchain-data-types) | 4 | Size including flag 4.2 |
| **4.2** | Buy order version flag | order1.version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | `S` | `S` = 1 if the order version is 1.<br>`S` = 0 if the order version is 2 or 3 |
| **4.3** | Buy order | order1 | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | See [Order Binary Format](/en/blockchain/binary-format/order-binary-format) |  |
| **5.1** | Sell order size  |  | [Int](/en/blockchain/blockchain/blockchain-data-types) | 4 | Size including flag 5.2 |
| **5.2** | Sell order version flag | order2.version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | `S` | `S` = 1 if the order version is 1.<br>`S` = 0 if the order version is 2 or 3 |
| **5.3** | Sell order | order2 | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | See [Order Binary Format](/en/blockchain/binary-format/order-binary-format) |  |
| **6** | Deal price | price | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | Price for the amount asset (base currency) nominated in the price asset (quote currency) |
| **7** | Amount | amount | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | Amount of the amount asset (base currency) that the buyer received from the seller |
| **8** | Buy [matcher fee](/en/blockchain/matcher-fee) | buyMatcherFee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **9** | Sell [matcher fee](/en/blockchain/matcher-fee) | sellMatcherFee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **10** | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **11** | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 12 | [Transaction proofs](/en/blockchain/transaction/transaction-proof) | proofs | See [Transaction Proofs Binary Format](/en/blockchain/binary-format/transaction-proof-binary-format) | `S` | If the array is empty, then `S` = 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + 64 × `N`, where `N` is the number of proofs in the array.<br>The maximum number of proofs in the array is 8. The size of each proof is 64 bytes |

> The fields numbered in bold are the transaction body bytes.

## JSON Representation of Transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/csr25XQHT1c965Fg7cY2vJ7XHYVsudPYrUbdaFqgaqL) in Node API.

## Version 1 <a id="transaction1"></a>

Transaction version 1 can accept orders of version [1](/en/blockchain/binary-format/order-binary-format#order1) only.

| # | Field | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- |
| **1** | [Transaction type ID](/en/blockchain/transaction-type/) | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 6 |
| **2** | Buy order size  | [Int](/en/blockchain/blockchain/blockchain-data-types) | 4 |  |
| **3** | Sell order size | [Int](/en/blockchain/blockchain/blockchain-data-types) | 4 |  |
| **4** | Buy order | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | See [order binary format](/en/blockchain/binary-format/order-binary-format) |  |
| **5** | Sell order | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | See [order binary format](/en/blockchain/binary-format/order-binary-format) |  |
| **6** | Deal price | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | Price for the amount asset (base currency) nominated in the price asset (quote currency) |
| **7** | Amount | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | Amount of the amount asset (base currency) that the buyer received from the seller |
| **8** | Buy [matcher fee](/en/blockchain/matcher-fee) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **9** | Sell [matcher fee](/en/blockchain/matcher-fee) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **10** | [Transaction fee](/en/blockchain/transaction/transaction-fee) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **11** | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 12 | [Transaction signature](/en/blockchain/transaction/transaction-signature) | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 64 |  | |

> The fields numbered in bold are the transaction body bytes.
