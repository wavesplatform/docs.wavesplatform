# [Ride v4 and v3] Limitations

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/limits/)

| Limitation | Maximum value |
|---|---|
| dApp script size | 32 Kbytes |
| Account script or asset script size | 8 Kbytes |
| [Complexity](/en/ride/base-concepts/complexity) of account script | 2000 |
| Complexity of asset script | 4000 |
| Complexity of each callable function of dApp script | 4000 |
| Total complexity for a callable function and asset scripts involved in an Invoke Script transaction. The sender's account script complexity is not included in this limit.<br>Applied after activation of feature #16 “Ride V5, dApp-to-dApp invocations” regardless of the Standard library version | 26,000 |
| Complexity threshold for saving failed transactions: if the callable function failed with an error or throwing an exception before the threshold exceeded, the invoke script transaction is rejected and the fee is not charged | 1000 |
| Complexity of verifier function of dApp script | 2000 |
| Sender complexity threshold: if the complexity of an account script or the verifier function of a dApp script exceeds this limit, the minimum fee for a transaction sent from the account is increased by 0.004 WAVES.<br>Applied after activation of feature #16 “Ride V5, dApp-to-dApp invocations” regardless of the Standard library version | 200 |
| Function name or variable name | 255 bytes |
| Size of [String](/en/ride/v4/data-types/string) variable | 32,767 characters for **version 3**<br>32,767 **bytes** for **version 4** |
| Size of [ByteVector](/en/ride/v4/data-types/byte-vector) variable | 65,536 bytes for **version 3**<br>32,767 bytes (except `bodyBytes` field of transaction structure) for **version&nbsp;4** |
| Data weight | See [Data Weight](/en/ride/v4/limits/weight) |
| Number of callable function arguments | 22 |
| Total number of [ScriptTransfer](/en/ride/v4/structures/script-actions/script-transfer), [Issue](/en/ride/v4/structures/script-actions/issue), [Reissue](/en/ride/v4/structures/script-actions/reissue), [Burn](/en/ride/v4/structures/script-actions/burn), and [SponsorFee](/en/ride/v4/structures/script-actions/sponsor-fee) in callable function [invocation results](/en/ride/v4/functions/callable-function#invocation-result-2) (applicable for **version&nbsp;4** ) | 10 |
| Total number of [BinaryEntry](/en/ride/v4/structures/script-actions/binary-entry), [BooleanEntry](/en/ride/v4/structures/script-actions/boolean-entry), [DeleteEntry](/en/ride/v4/structures/script-actions/delete-entry), [IntegerEntry](/en/ride/v4/structures/script-actions/int-entry), [StringEntry](/en/ride/v4/structures/script-actions/string-entry) structures in callable function invocation results (applicable for **version&nbsp;4** ) | 100 |
| Total size of the data written to the [account data storage](/en/blockchain/account/account-data-storage), for all `BinaryEntry`, `BooleanEntry`, `IntegerEntry`, `StringEntry` structures in callable function invocation results (applicable for **version&nbsp;4**) | 5 Kbytes |
| Number of [ScriptTransfer](/en/ride/v4/structures/script-actions/script-transfer) structures in [TransferSet](/en/ride/v4/structures/script-results/transfer-set) (applicable for **version&nbsp;3**) | 10 |
| Number of [DataEntry](/en/ride/v4/structures/script-actions/data-entry) structures in [WriteSet](/en/ride/v4/structures/script-results/write-set) (applicable for **version 3**) | 100 |
| Total size of the data written to the account data storage, for all `DataEntry` in `WriteSet` (applicable for **version&nbsp;3**) | 5 Kbytes |
