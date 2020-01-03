# InvokeScriptTransaction

Structure of an [invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction.md).

### Constructor

``` ride
InvokeScriptTransaction(dApp: Address|Alias, payment: AttachedPayment|Unit, feeAssetId: ByteVector|Unit, function: String, args: List[Boolean|ByteVector|Int|String], id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

### Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | dApp | [Address](/en/ride/structures/common-structures/address.md)&#124;[Alias](/en/ride/structures/common-structures/alias.md) | [Address](/en/blockchain/account/address.md) or [alias](/en/blockchain/account/alias.md) of the [account](/en/blockchain/account.md) which is calling a function |
| 2 | payment | [AttachedPayment](/en/ride/structures/common-structures/attached-payment.md)&#124;[Unit](/en/ride/data-types/unit.md) | Payment attached to the [transaction](/en/blockchain/transaction.md) |
| 3 | feeAssetId | [ByteVector](/en/ride/data-types/byte-vector.md)&#124;[Unit](/en/ride/data-types/unit.md) | [Token](/en/blockchain/token.md) to pay the commission. Currently, it can be only in [WAVES](/en/blockchain/token/waves.md) |
| 4 | function | [String](/en/ride/data-types/string.md) | Name of the [function](/en/ride/functions.md) |
| 5 | args | [List](/en/ride/data-types/list.md)[[Boolean](/en/ride/data-types/boolean.md)&#124;[ByteVector](/en/ride/data-types/byte-vector.md)&#124;[Int](/en/ride/data-types/int.md)&#124;[String](/en/ride/data-types/string.md)] | Parameters of the [function](/en/ride/functions.md) |
| 6 | id | [ByteVector](/en/ride/data-types/byte-vector.md) | [Transaction ID](/en/blockchain/transaction/transaction-id.md) |
| 7 | fee | [Int](/en/ride/data-types/int.md) | [Transaction fee](/en/blockchain/transaction/transaction-fee.md) |
| 8 | timestamp | [Int](/en/ride/data-types/int.md) | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp.md) |
| 9 | version | [Int](/en/ride/data-types/int.md) | [Transaction version](/en/blockchain/transaction/transaction-version.md) |
| 10 | sender | [Address](/en/ride/structures/common-structures/address.md) | [Address](/en/blockchain/account/address.md) of the transaction sender |
| 11 | senderPublicKey | [ByteVector](/en/ride/data-types/byte-vector.md) | Account public key of the transaction sender |
| 12 | bodyBytes | [ByteVector](/en/ride/data-types/byte-vector.md) | [Transaction body bytes](/en/blockchain/transaction/transaction-body-bytes.md) |
| 13 | proofs | [List](/en/ride/data-types/list.md)[[ByteVector](/en/ride/data-types/byte-vector.md)] | Array of [proofs](/en/blockchain/transaction/transaction-proof.md) |
