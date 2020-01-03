# InvokeScriptTransaction

Structure of an [invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction).

### Constructor

``` ride
InvokeScriptTransaction(dApp: Address|Alias, payment: AttachedPayment|Unit, feeAssetId: ByteVector|Unit, function: String, args: List[Boolean|ByteVector|Int|String], id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

### Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | dApp | [Address](/en/ride/structures/common-structures/address)&#124;[Alias](/en/ride/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the [account](/en/blockchain/account) which is calling a function |
| 2 | payment | [AttachedPayment](/en/ride/structures/common-structures/attached-payment)&#124;[Unit](/en/ride/data-types/unit) | Payment attached to the [transaction](/en/blockchain/transaction) |
| 3 | feeAssetId | [ByteVector](/en/ride/data-types/byte-vector)&#124;[Unit](/en/ride/data-types/unit) | [Token](/en/blockchain/token) to pay the commission. Currently, it can be only in [WAVES](/en/blockchain/token/waves) |
| 4 | function | [String](/en/ride/data-types/string) | Name of the [function](/en/ride/functions) |
| 5 | args | [List](/en/ride/data-types/list)[[Boolean](/en/ride/data-types/boolean)&#124;[ByteVector](/en/ride/data-types/byte-vector)&#124;[Int](/en/ride/data-types/int)&#124;[String](/en/ride/data-types/string)] | Parameters of the [function](/en/ride/functions) |
| 6 | id | [ByteVector](/en/ride/data-types/byte-vector) | [Transaction ID](/en/blockchain/transaction/transaction-id) |
| 7 | fee | [Int](/en/ride/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 8 | timestamp | [Int](/en/ride/data-types/int) | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) |
| 9 | version | [Int](/en/ride/data-types/int) | [Transaction version](/en/blockchain/transaction/transaction-version) |
| 10 | sender | [Address](/en/ride/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the transaction sender |
| 11 | senderPublicKey | [ByteVector](/en/ride/data-types/byte-vector) | Account public key of the transaction sender |
| 12 | bodyBytes | [ByteVector](/en/ride/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/transaction/transaction-body-bytes) |
| 13 | proofs | [List](/en/ride/data-types/list)[[ByteVector](/en/ride/data-types/byte-vector)] | Array of [proofs](/en/blockchain/transaction/transaction-proof) |
