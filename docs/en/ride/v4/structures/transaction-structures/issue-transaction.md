# [Ride v4 and v3] IssueTransaction

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/structures/transaction-structures/issue-transaction)

Structure of an [issue transaction](/en/blockchain/transaction-type/issue-transaction).

### Constructor

For [Standard library](/en/ride/script/standard-library) **version 3**:

``` ride
IssueTransaction(quantity: Int, name: ByteVector, description: ByteVector, reissuable: Boolean, decimals: Int, script: ByteVector|Unit, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

For Standard library **version 4**:

``` ride
IssueTransaction(quantity: Int, name: String, description: String, reissuable: Boolean, decimals: Int, script: ByteVector|Unit, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

### Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/en/ride/v4/data-types/int) | Amount of the [token](/en/blockchain/token/) |
| 2 | name | For version 3: [ByteVector](/en/ride/v4/data-types/byte-vector)<br>For version 4: [String](/en/ride/v4/data-types/string) | Token name |
| 3 | description | For version 3: [ByteVector](/en/ride/v4/data-types/byte-vector)<br>For version 4: [String](/en/ride/v4/data-types/string) | Token description |
| 4 | reissuable | [Boolean](/en/ride/v4/data-types/boolean) | Reissue ability flag |
| 5 | decimals | [Int](/en/ride/v4/data-types/int) | Number of digits in decimal part |
| 6 | script | [ByteVector](/en/ride/v4/data-types/byte-vector)&#124;[Unit](/en/ride/v4/data-types/unit) | [Script](/en/ride/script/) that must be set for the generated token |
| 7 | id | [ByteVector](/en/ride/v4/data-types/byte-vector) | Transaction ID |
| 8 | fee | [Int](/en/ride/v4/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 9 | timestamp | [Int](/en/ride/v4/data-types/int) | Transaction timestamp |
| 10 | version | [Int](/en/ride/v4/data-types/int) | Transaction version |
| 11 | sender | [Address](/en/ride/v4/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the transaction sender |
| 12 | senderPublicKey | [ByteVector](/en/ride/v4/data-types/byte-vector) | Account public key of the transaction sender |
| 13 | bodyBytes | [ByteVector](/en/ride/v4/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/glossary#t) |
| 14 | proofs | [List](/en/ride/v4/data-types/list)[[ByteVector](/en/ride/v4/data-types/byte-vector)] | Array of [proofs](/en/blockchain/transaction/transaction-proof) |
