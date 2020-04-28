# Limitations

| Limitation | Maximum value |
|---|---|
| Script size | 32 Kbytes |
| [Complexity](/en/ride/base-concepts/complexity) of account script | 3000 |
| Complexity of asset script | 4000 |
| Complexity of each callable function of dApp script | 4000 |
| Complexity of verifier function of dApp script | 3000 |
| Number of callable function arguments | 22 |
| Annotated function name size | 255 bytes |
| Number of [ScriptTransfer](/en/ride/structures/script-actions/script-transfer), [Issue](/en/ride/structures/script-actions/issue), [Reissue](/en/ride/structures/script-actions/reissue), [Burn](/en/ride/structures/script-actions/burn), [SponsorFee](/en/ride/structures/script-actions/sponsor-fee) calls in one script invocation (for [Standard Library](/en/ride/script/standard-library) **version 4**) | 10 |
| Number of [BinaryEntry](/en/ride/structures/script-actions/binary-entry), [BooleanEntry](/en/ride/structures/script-actions/boolean-entry), [IntegerEntry](/en/ride/structures/script-actions/int-entry), [StringEntry](/en/ride/structures/script-actions/string-entry) calls in one script invocation (for [Standard Library](/en/ride/script/standard-library) **version 4**) | 100 |
| Size of the data written to the account data storage, for all [BinaryEntry](/en/ride/structures/script-actions/binary-entry), [BooleanEntry](/en/ride/structures/script-actions/boolean-entry), [IntegerEntry](/en/ride/structures/script-actions/int-entry), [StringEntry](/en/ride/structures/script-actions/string-entry) calls in one script invocation (for [Standard Library](/en/ride/script/standard-library) **version 4**) | 5 Kbytes |
| [WriteSet](/en/ride/structures/script-results/write-set) size (for [Standard Library](/en/ride/script/standard-library) **version 3**) | 5 Kbytes |
| Number of records in WriteSet (for [Standard Library](/en/ride/script/standard-library) **version 3**) | 100 |
| Number of transfers in [TransferSet](/en/ride/structures/script-results/transfer-set) (for [Standard Library](/en/ride/script/standard-library) **version 3**) | 10 |
| Size of the value of a variable of type String | 32767  characters |
| Size of a ByteVector variable value | 65536 bytes |

> See also [Data Weight](/en/ride/limits/weight)