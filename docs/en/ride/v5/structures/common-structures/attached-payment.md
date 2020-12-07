# AttachedPayment

Structure of an [invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction) payment.

## Constructor

``` ride
AttachedPayment(assetId: ByteVector|Unit, amount: Int)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/en/ride/v5/data-types/byte-vector)&#124;[Unit](/en/ride/v5/data-types/unit) | ID of a [token](/en/blockchain/token/) |
| 2 | amount | [Int](/en/ride/v5/data-types/int) | Payment amount |
