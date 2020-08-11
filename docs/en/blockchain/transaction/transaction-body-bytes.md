# Transaction body bytes

**Transaction body bytes** normally consist of all the fields of the transaction [binary representation](/en/blockchain/binary-format/transaction-binary-format/) with the exception of the following fields:
- transaction ID (it is not stored on the blockchain),
- version flag,
- `proofs` or `signature`, depending on the version of the transaction.

The contents of transaction body bytes is given in the description of the binary representation of each type and version of the transaction.

Based on the transaction body bytes, the [transaction ID](/en/blockchain/transaction/transaction-id) and the [transaction signature](/en/blockchain/transaction/transaction-signature) are generated. The guideline for generating a signature and ID is given in the [Cryptographic practical details](/en/blockchain/waves-protocol/cryptographic-practical-details#signing) article.