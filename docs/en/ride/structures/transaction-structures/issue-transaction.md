# IssueTransaction

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

[Standard library](/en/ride/script/standard-library) **version 4** is available since node version 1.2.0 after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”. Node versions 1.2.x are currently available on [Stagenet](/en/blockchain/blockchain-network/) only.

### Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | quantity | [Int](/en/ride/data-types/int) | Amount of the [token](/en/blockchain/token/) |
| 2 | name | For version 3: [ByteVector](/en/ride/data-types/byte-vector)<br>For version 4: [String](/en/ride/data-types/string) | Token name |
| 3 | description | For version 3: [ByteVector](/en/ride/data-types/byte-vector)<br>For version 4: [String](/en/ride/data-types/string) | Token description |
| 4 | reissuable | [Boolean](/en/ride/data-types/boolean) | Reissue ability flag |
| 5 | decimals | [Int](/en/ride/data-types/int) | Number of digits in decimal part |
| 6 | script | [ByteVector](/en/ride/data-types/byte-vector)&#124;[Unit](/en/ride/data-types/unit) | [Script](/en/ride/script/) that must be set for the generated token |
| 7 | id | [ByteVector](/en/ride/data-types/byte-vector) | [Transaction ID](/en/blockchain/transaction/transaction-id) |
| 8 | fee | [Int](/en/ride/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 9 | timestamp | [Int](/en/ride/data-types/int) | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) |
| 10 | version | [Int](/en/ride/data-types/int) | [Transaction version](/en/blockchain/transaction/transaction-version) |
| 11 | sender | [Address](/en/ride/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the transaction sender |
| 12 | senderPublicKey | [ByteVector](/en/ride/data-types/byte-vector) | Account public key of the transaction sender |
| 13 | bodyBytes | [ByteVector](/en/ride/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/transaction/transaction-body-bytes) |
| 14 | proofs | [List](/en/ride/data-types/list)[[ByteVector](/en/ride/data-types/byte-vector)] | Array of [proofs](/en/blockchain/transaction/transaction-proof) |
