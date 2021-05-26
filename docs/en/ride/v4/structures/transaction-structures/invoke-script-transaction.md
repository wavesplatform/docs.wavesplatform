# [Ride v4 and v3] InvokeScriptTransaction

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/structures/transaction-structures/invoke-script-transaction)

Structure of an [invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction).

### Constructor

For [Standard library](/en/ride/script/standard-library) **version 3**:

```ride
InvokeScriptTransaction(dApp: Address|Alias, payment: AttachedPayment|Unit, feeAssetId: ByteVector|Unit, function: String, args: List[Boolean|ByteVector|Int|String], id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

For Standard library **version 4**:

```ride
InvokeScriptTransaction(dApp: Address|Alias, payments: List[AttachedPayments], feeAssetId: ByteVector|Unit, function: String, args: List[Boolean|ByteVector|Int|String|List[Boolean|ByteVector|Int|String]], id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

### Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | dApp | [Address](/en/ride/structures/common-structures/address)&#124;[Alias](/en/ride/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the [account](/en/blockchain/account/) which is calling a function |
| 2 | payment | [AttachedPayment](/en/ride/structures/common-structures/attached-payment)&#124;[Unit](/en/ride/data-types/unit) | Payment attached to the transaction.<br>:warning: The field is deleted in Standard library version 4 |
| 2 | payments | List[[AttachedPayment](/en/ride/structures/common-structures/attached-payment)] | Payments attached to the transaction.<br>The field is added in Standard library version 4 |
| 3 | feeAssetId | [ByteVector](/en/ride/data-types/byte-vector)&#124;[Unit](/en/ride/data-types/unit) | [Token](/en/blockchain/token/) to pay the commission. Currently, it can be only in [WAVES](/en/blockchain/token/waves) |
| 4 | function | [String](/en/ride/data-types/string) | Name of the [function](/en/ride/functions/) |
| 5 | args | For version 3: [List](/en/ride/data-types/list)[[Boolean](/en/ride/data-types/boolean)&#124;[ByteVector](/en/ride/data-types/byte-vector)&#124;[Int](/en/ride/data-types/int)&#124;[String](/en/ride/data-types/string)]<br>For version 4: [List](/en/ride/data-types/list)[[Boolean](/en/ride/data-types/boolean)&#124;[ByteVector](/en/ride/data-types/byte-vector)&#124;[Int](/en/ride/data-types/int)&#124;[String](/en/ride/data-types/string)&#124;[List](/en/ride/data-types/list)[[Boolean](/en/ride/data-types/boolean)&#124;[ByteVector](/en/ride/data-types/byte-vector)&#124;[Int](/en/ride/data-types/int)&#124;[String](/en/ride/data-types/string)]] | Parameters of the [function](/en/ride/functions/) |
| 6 | id | [ByteVector](/en/ride/data-types/byte-vector) | Transaction ID |
| 7 | fee | [Int](/en/ride/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 8 | timestamp | [Int](/en/ride/data-types/int) | Transaction timestamp |
| 9 | version | [Int](/en/ride/data-types/int) | Transaction version |
| 10 | sender | [Address](/en/ride/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the transaction sender |
| 11 | senderPublicKey | [ByteVector](/en/ride/data-types/byte-vector) | Account public key of the transaction sender |
| 12 | bodyBytes | [ByteVector](/en/ride/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/glossary#t) |
| 13 | proofs | [List](/en/ride/data-types/list)[[ByteVector](/en/ride/data-types/byte-vector)] | Array of [proofs](/en/blockchain/transaction/transaction-proof) |
