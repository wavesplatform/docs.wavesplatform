# IssueTransaction

Structure of an [Issue transaction](/en/blockchain/transaction-type/issue-transaction).

### Constructor

``` ride
IssueTransaction(quantity: Int, name: String, description: String, reissuable: Boolean, decimals: Int, script: ByteVector|Unit, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

### Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/en/ride/data-types/int) | Amount of the [token](/en/blockchain/token/) |
| 2 | name | [String](/en/ride/data-types/string) | Token name |
| 3 | description | [String](/en/ride/data-types/string) | Token description |
| 4 | reissuable | [Boolean](/en/ride/data-types/boolean) | Reissue ability flag |
| 5 | decimals | [Int](/en/ride/data-types/int) | Number of digits in decimal part |
| 6 | script | [ByteVector](/en/ride/data-types/byte-vector)&#124;[Unit](/en/ride/data-types/unit) | [Script](/en/ride/script/) that must be set for the generated token |
| 7 | id | [ByteVector](/en/ride/data-types/byte-vector) | Transaction ID |
| 8 | fee | [Int](/en/ride/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 9 | timestamp | [Int](/en/ride/data-types/int) | Transaction timestamp |
| 10 | version | [Int](/en/ride/data-types/int) | Transaction version |
| 11 | sender | [Address](/en/ride/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the transaction sender |
| 12 | senderPublicKey | [ByteVector](/en/ride/data-types/byte-vector) | Account public key of the transaction sender |
| 13 | bodyBytes | [ByteVector](/en/ride/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/glossary#t) |
| 14 | proofs | [List](/en/ride/data-types/list)[[ByteVector](/en/ride/data-types/byte-vector)] | Array of [proofs](/en/blockchain/transaction/transaction-proof) |
