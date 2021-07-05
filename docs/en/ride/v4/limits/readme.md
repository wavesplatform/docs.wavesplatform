# [Ride v4 and v3] Limitations

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/limits/)

| Limitation | Maximum value |
|---|---|
| dApp script size | 32 Kbytes |
| Account script or asset script size | 8 Kbytes |
| [Complexity](/en/ride/base-concepts/complexity) of account script | 2000 <sup>(1)</sup> |
| Complexity of asset script | 4000 |
| Complexity of each callable function of dApp script | 4000 |
| Total complexity for a callable function and asset scripts involved in an Invoke Script transaction. The sender's account script complexity is not included in this limit | 26,000 <sup>(2)</sup> |
| Complexity threshold for saving failed transactions: if the callable function failed with an error or throwing an exception before the threshold exceeded, the invoke script transaction is rejected and the fee is not charged | 1000 <sup>(3)</sup> |
| Complexity of verifier function of dApp script | 2000 <sup>(1)</sup> |
| Sender complexity threshold: if the complexity of an account script or the verifier function of a dApp script exceeds this limit, the minimum fee for a transaction sent from the account is increased by 0.004 WAVES. | 200 <sup>(4)</sup> |
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

<sup>(1)</sup> Before activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”, the maximum complexity of an account script or the verifier function of a dApp script was 4000 regardless of the Standard library version.

<sup>(2)</sup> Before activation of feature #16 “Ride V5, dApp-to-dApp invocations”, the total complexity of the scripts was not limited.

<sup>(3)</sup> Before activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions” all failed transactions were rejected regardless of complexity of performed calculation.

<sup>(4)</sup> Before activation of feature #16 “Ride V5, dApp-to-dApp invocations”, the extra fee of 0.004 WAVES was required regardless of the complexity of the account script or the presence and complexity of the dApp script verifier function.
