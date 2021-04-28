# [Ride v5] DataTransaction

:warning: This is the documentation for the Standard Library **version 5**, which becomes available after activation of feature #16 “Ride V5, dApp-to-dApp invocations”. [Go to version 4](/en/ride/structures/transaction-structures/data-transaction)

Structure of a [data transaction](/en/blockchain/transaction-type/data-transaction).

### Constructor

``` ride
DataTransaction(data: List[BinaryEntry|BooleanEntry|DeleteEntry|IntegerEntry|StringEntry], id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

### Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | data | [List](/en/ride/v5/data-types/list)[[BinaryEntry](/en/ride/v5/structures/script-actions/binary-entry)&#124;[BooleanEntry](/en/ride/v5/structures/script-actions/boolean-entry)&#124;[DeleteEntry](/en/ride/v5/structures/script-actions/delete-entry)&#124;[IntegerEntry](/en/ride/v5/structures/script-actions/int-entry)&#124;[StringEntry](/en/ride/v5/structures/script-actions/string-entry)] | [Transaction](/en/blockchain/transaction/)'s data array |
| 2 | id | [ByteVector](/en/ride/v5/data-types/byte-vector) | Transaction ID |
| 3 | fee | [Int](/en/ride/v5/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 4 | timestamp | [Int](/en/ride/v5/data-types/int) | Transaction timestamp |
| 5 | version | [Int](/en/ride/v5/data-types/int) | Transaction version |
| 6 | sender | [Address](/en/ride/v5/structures/common-structures/address) | [Address](/en/blockchain/account/address) of a transaction sender |
| 7 | senderPublicKey | [ByteVector](/en/ride/v5/data-types/byte-vector) | Account public key of a sender |
| 8 | bodyBytes | [ByteVector](/en/ride/v5/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/glossary#t) |
| 9 | proofs | [List](/en/ride/v5/data-types/list)[[ByteVector](/en/ride/v5/data-types/byte-vector)] | Array of [proofs](/en/blockchain/transaction/transaction-proof) |
