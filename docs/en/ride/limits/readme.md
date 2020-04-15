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
| Number of [ScriptTransfer](/en/ride/structures/common-structures/script-transfer), [Issue](/en/ride/structures/common-structures/issue), [Reissue](/en/ride/structures/common-structures/reissue), [Burn](/en/ride/structures/common-structures/burn) calls in one script invocation (for [Standard Library](/en/ride/script/standard-library) **version 4**) | 10 |
| Number of [BinaryEntry](/en/ride/structures/common-structures/binary-entry), [BooleanEntry](/en/ride/structures/common-structures/boolean-entry), [IntegerEntry](/en/ride/structures/common-structures/int-entry), [StringEntry](/en/ride/structures/common-structures/string-entry) calls in one script invocation (for [Standard Library](/en/ride/script/standard-library) **version 4**) | 100 |
| Size of the data written to the account data storage, for all [BinaryEntry](/en/ride/structures/common-structures/binary-entry), [BooleanEntry](/en/ride/structures/common-structures/boolean-entry), [IntegerEntry](/en/ride/structures/common-structures/int-entry), [StringEntry](/en/ride/structures/common-structures/string-entry) calls in one script invocation (for [Standard Library](/en/ride/script/standard-library) **version 4**) | 5 Kbytes |
| [WriteSet](/en/ride/structures/common-structures/write-set) size (for [Standard Library](/en/ride/script/standard-library) **version 3**) | 5 Kbytes |
| Number of records in WriteSet (for [Standard Library](/en/ride/script/standard-library) **version 3**) | 100 |
| Number of transfers in [TransferSet](/en/ride/structures/common-structures/transfer-set) (for [Standard Library](/en/ride/script/standard-library) **version 3**) | 10 |
| Size of the value of a variable of type String | 32767  characters |
| Size of a ByteVector variable value | 65536 bytes |

> See also [Data Weight](/en/ride/limits/weight)