# ExchangeTransaction

Structure of an [exchange transaction](/en/blockchain/transaction-type/exchange-transaction.md).

### Constructor

``` ride
ExchangeTransaction(buyOrder: Order, sellOrder: Order, price: Int, amount: Int, buyMatcherFee: Int, sellMatcherFee: Int, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

### Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | buyOrder | [Order](/en/ride/structures/common-structures/order.md) | [Token](/en/blockchain/token.md) purchase [order](/en/blockchain/order.md) |
| 2 | sellOrder | [Order](/en/ride/structures/common-structures/order.md) | Token sell order |
| 3 | price | [Int](/en/ride/data-types/int.md) | Price of exchanging token |
| 4 | amount | [Int](/en/ride/data-types/int.md) | Amount of exchanging tokens |
| 5 | buyMatcherFee | [Int](/en/ride/data-types/int.md) | [Matcher](/en/waves-node/extensions/matcher.md)'s purchase fee |
| 6 | sellMatcherFee | [Int](/en/ride/data-types/int.md) | Matcher's sell fee |
| 7 | id | [ByteVector](/en/ride/data-types/byte-vector.md) | [Transaction ID](/en/blockchain/transaction/transaction-id.md) |
| 8 | fee | [Int](/en/ride/data-types/int.md) | [Transaction fee](/en/blockchain/transaction/transaction-fee.md) |
| 9 | timestamp | [Int](/en/ride/data-types/int.md) | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp.md) |
| 10 | version | [Int](/en/ride/data-types/int.md) | [Transaction version](/en/blockchain/transaction/transaction-version.md) |
| 11 | sender | [Address](/en/ride/structures/common-structures/address.md) | [Address](/en/blockchain/account/address.md) of a transaction sender |
| 12 | senderPublicKey | [ByteVector](/en/ride/data-types/byte-vector.md) | Account public key of a sender |
| 13 | bodyBytes | [ByteVector](/en/ride/data-types/byte-vector.md) | [Transaction body bytes](/en/blockchain/transaction/transaction-body-bytes.md) |
| 14 | proofs | [List](/en/ride/data-types/list.md)[[ByteVector](/en/ride/data-types/byte-vector.md)] | Array of [proofs](/en/blockchain/transaction/transaction-proof.md) |
