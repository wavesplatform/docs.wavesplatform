# [Ride v4 and v3] ExchangeTransaction

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/structures/transaction-structures/exchange-transaction)

Structure of an [exchange transaction](/en/blockchain/transaction-type/exchange-transaction).

### Constructor

``` ride
ExchangeTransaction(buyOrder: Order, sellOrder: Order, price: Int, amount: Int, buyMatcherFee: Int, sellMatcherFee: Int, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

### Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | buyOrder | [Order](/en/ride/structures/common-structures/order) | [Token](/en/blockchain/token/) purchase [order](/en/blockchain/order) |
| 2 | sellOrder | [Order](/en/ride/structures/common-structures/order) | Token sell order |
| 3 | price | [Int](/en/ride/data-types/int) | Price of exchanging token |
| 4 | amount | [Int](/en/ride/data-types/int) | Amount of exchanging tokens |
| 5 | buyMatcherFee | [Int](/en/ride/data-types/int) | [Matcher](https://docs.waves.exchange/en/waves-matcher/)'s purchase fee |
| 6 | sellMatcherFee | [Int](/en/ride/data-types/int) | Matcher's sell fee |
| 7 | id | [ByteVector](/en/ride/data-types/byte-vector) | Transaction ID |
| 8 | fee | [Int](/en/ride/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 9 | timestamp | [Int](/en/ride/data-types/int) | Transaction timestamp |
| 10 | version | [Int](/en/ride/data-types/int) | Transaction version |
| 11 | sender | [Address](/en/ride/structures/common-structures/address) | [Address](/en/blockchain/account/address) of a transaction sender |
| 12 | senderPublicKey | [ByteVector](/en/ride/data-types/byte-vector) | Account public key of a sender |
| 13 | bodyBytes | [ByteVector](/en/ride/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/glossary#t) |
| 14 | proofs | [List](/en/ride/data-types/list)[[ByteVector](/en/ride/data-types/byte-vector)] | Array of [proofs](/en/blockchain/transaction/transaction-proof) |
