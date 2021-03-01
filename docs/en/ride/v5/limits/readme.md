# [Ride v5] Limitations

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/limits/)

| Limitation | Maximum value |
|---|---|
| dApp script size | 32 Kbytes |
| Account script or asset script size | 8 Kbytes |
| [Complexity](/en/ride/base-concepts/complexity) of account script | 2000 |
| Complexity of asset script | 4000 |
| Complexity of each callable function of dApp script | 4000 |
| Total complexity for all callable functions and asset scripts involved to [dApp-to-dApp invocation](/en/ride/advanced/dapp-to-dapp). The sender's account script complexity is not included in this limit | 52,000 |
| Complexity threshold for saving failed transactions: if the callable function failed with an error or throwing an exception before the threshold exceeded, the invoke script transaction is rejected and the fee is not charged | 1000 |
| Complexity of verifier function of dApp script | 2000 |
| Function name or variable name | 255 bytes |
| Size of [String](/en/ride/v5/data-types/string) variable | 32,767 bytes |
| Size of [ByteVector](/en/ride/v5/data-types/byte-vector) variable | 32,767 bytes (except `bodyBytes` field of transaction structure) |
| Data weight | See [Data Weight](/en/ride/limits/weight) |
| Number of callable function arguments | 22 |
| Total number of [ScriptTransfer](/en/ride/v5/structures/script-actions/script-transfer), [Issue](/en/ride/v5/structures/script-actions/issue), [Reissue](/en/ride/v5/structures/script-actions/reissue), [Burn](/en/ride/v5/structures/script-actions/burn), [SponsorFee](/en/ride/v5/structures/script-actions/sponsor-fee), [Lease](/en/ride/v5/structures/script-actions/lease), and [LeaseCancel](/en/ride/v5/structures/script-actions/lease-cancel) in callable function [invocation results](/en/ride/v5/functions/callable-function#invocation-result-2) | 10 |
| Total number of [BinaryEntry](/en/ride/v5/structures/script-actions/binary-entry), [BooleanEntry](/en/ride/v5/structures/script-actions/boolean-entry), [DeleteEntry](/en/ride/v5/structures/script-actions/delete-entry), [IntegerEntry](/en/ride/v5/structures/script-actions/int-entry), [StringEntry](/en/ride/v5/structures/script-actions/string-entry) structures in callable function invocation results | 100 |
| Total size of the data written to the [account data storage](/en/blockchain/account/account-data-storage), for all `BinaryEntry`, `BooleanEntry`, `IntegerEntry`, `StringEntry` structures in callable function invocation results | 5 Kbytes |
