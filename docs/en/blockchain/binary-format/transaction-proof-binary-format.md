# Transaction Proofs Binary Format

| \# | Field | Type | Size in bytes | Comment |
| --- | --- | --- | --- | --- |
| 1 | Proofs version | Byte | 1 | Value is 1 |
| 2 | Proofs count | Short | 2 | |
| 3 | Proof 1 length | Short | 2 | Value is 64 |
| 4 | Proof 1 | Array[Byte] | 64 | |
| 5 | Proof 2 length | Short | 2 | |
| 6 | Proof 2 | Array[Byte] | 64 |
| ... | ... | ... | ... | ... |

The maximum number of proofs is 8.
