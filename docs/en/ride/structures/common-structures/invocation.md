# Invocation

Structure of the abbreviated representation of an [invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction).

## Constructor

``` ride
Invocation(caller: Address, callerPublicKey: ByteVector, payments: List[AttachedPayment], transactionId: ByteVector, fee: Int, feeAssetId: ByteVector|Unit)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | caller | [Address](/en/ride/structures/common-structures/address) |  The [account](/en/blockchain/account) that sent a transaction |
| 2 | callerPublicKey | [ByteVector](/en/ride/data-types/byte-vector) | Public key of an account that sent a transaction |
| 3 | payments | List[[AttachedPayment](/en/ride/structures/common-structures/attached-payment)] | Attached payment |
| 4 | transactionId | [ByteVector](/en/ride/data-types/byte-vector) | ID of a transaction |
| 5 | fee | [Int](/en/ride/data-types/int) | Transaction fee |
| 6 | feeAssetId | [ByteVector](/en/ride/data-types/byte-vector)&#124;[Unit](/en/ride/data-types/unit) | [Token](/en/blockchain/token) of a transaction fee |
