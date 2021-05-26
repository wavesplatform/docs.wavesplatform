# [Ride v4 and v3] AttachedPayment

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/structures/common-structures/attached-payment)

Structure of an [invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction) payment.

## Constructor

``` ride
AttachedPayment(assetId: ByteVector|Unit, amount: Int)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/en/ride/data-types/byte-vector)&#124;[Unit](/en/ride/data-types/unit) | ID of a [token](/en/blockchain/token/) |
| 2 | amount | [Int](/en/ride/data-types/int) | Payment amount |
