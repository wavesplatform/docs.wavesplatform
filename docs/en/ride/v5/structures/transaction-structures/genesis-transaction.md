# GenesisTransaction

Structure of a [genesis transaction](/en/blockchain/transaction-type/genesis-transaction).

### Constructor

``` ride
GenesisTransaction(amount: Int, recipient: Address|Alias, id: ByteVector, fee: Int, timestamp: Int, version: Int)
```

### Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | amount | [Int](/en/ride/v5/data-types/int) | Amount of the [token](/en/blockchain/token/) |
| 2 | recipient | [Address](/en/ride/v5/structures/common-structures/address)&#124;[Alias](/en/ride/v5/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the token recipient |
| 3 | id | [ByteVector](/en/ride/v5/data-types/byte-vector) | Transaction ID |
| 4 | fee | [Int](/en/ride/v5/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 5 | timestamp | [Int](/en/ride/v5/data-types/int) | Transaction timestamp |
| 6 | version | [Int](/en/ride/v5/data-types/int) | Transaction version |
