# AttachedPayment

Structure of an [invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction.md) payment.

## Constructor

``` ride
AttachedPayment(assetId: ByteVector|Unit, amount: Int)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/en/ride/data-types/byte-vector.md)&#124;[Unit](/en/ride/data-types/unit.md) | ID of a [token](/en/blockchain/token.md) |
| 2 | amount | [Int](/en/ride/data-types/int.md) | Payment amount |
