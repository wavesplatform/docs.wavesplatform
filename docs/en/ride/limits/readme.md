# Limitations

| Limitation | Maximum value |
|---|---|
| dApp script size | 32 Kbytes |
| Account script or asset script size | 8 Kbytes |
| [Complexity](/en/ride/base-concepts/complexity) of account script | 4000 for [Standard library](/en/ride/script/standard-library) **version&nbsp;3**<br>3000 for **version 4** |
| Complexity of asset script | 4000 |
| Complexity of each callable function of dApp script | 4000 |
| Complexity of verifier function of dApp script | 4000 for **version 3**<br>3000 for **version 4** |
| Function name or variable name | 255 bytes |
| Size of [String](/en/ride/data-types/string) variable | 32,767 characters for **version 3**<br>32,767 **bytes** for **version 4** |
| Size of [ByteVector](/en/ride/data-types/string) variable | 65&nbsp;536 bytes for **version 3**<br>32&nbsp;767 bytes (165&nbsp;996 bytes for `bodyBytes` field of transaction structure) for **version&nbsp;4** |
| Data weight | See [Data Weight](/en/ride/limits/weight) |
| Number of callable function arguments | 22 |
| Total number of [ScriptTransfer](/en/ride/structures/script-actions/script-transfer), [Issue](/en/ride/structures/script-actions/issue), [Reissue](/en/ride/structures/script-actions/reissue), [Burn](/en/ride/structures/script-actions/burn), and [SponsorFee](/en/ride/structures/script-actions/sponsor-fee) in callable function [invocation results](/en/ride/functions/callable-function#callable-function-invocation-results-2) (applicable for **version&nbsp;4** ) | 10 |
| Total number of [BinaryEntry](/en/ride/structures/script-actions/binary-entry), [BooleanEntry](/en/ride/structures/script-actions/boolean-entry), [DeleteEntry](/en/ride/structures/script-actions/delete-entry), [IntegerEntry](/en/ride/structures/script-actions/int-entry), [StringEntry](/en/ride/structures/script-actions/string-entry) structures in callable function invocation results (applicable for **version&nbsp;4** ) | 100 |
| Total size of the data written to the [account data storage](/en/blockchain/account/account-data-storage), for all `BinaryEntry`, `BooleanEntry`, `IntegerEntry`, `StringEntry` structures in callable function invocation results (applicable for **version&nbsp;4**) | 5 Kbytes |
| Number of [ScriptTransfer](/en/ride/structures/script-actions/script-transfer) structures in [TransferSet](/en/ride/structures/script-results/transfer-set) (applicable for **version 3**) | 10 |
| Number of [DataEntry](/en/ride/structures/script-actions/data-entry) structures in [WriteSet](/en/ride/structures/script-results/write-set) (applicable for **version 3**) | 100 |
| Total size of the data written to the account data storage, for all `DataEntry` in `WriteSet` (applicable for **version&nbsp;3**) | 5 Kbytes |
