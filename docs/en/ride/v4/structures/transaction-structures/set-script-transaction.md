# [Ride v4 and v3] SetScriptTransaction

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/structures/transaction-structures/set-script-transaction)

Structure of a [set script transaction](/en/blockchain/transaction-type/set-script-transaction).

## Constructor

``` ride
SetScriptTransaction(script: ByteVector|Unit, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | script | [ByteVector](/en/ride/data-types/byte-vector)&#124;[Unit](/en/ride/data-types/unit) | [Account script](/en/ride/script/script-types/account-script) or [dApp-script](/en/ride/script/script-types/dapp-script) |
| 2 | id | [ByteVector](/en/ride/data-types/byte-vector) | Transaction ID |
| 3 | fee | [Int](/en/ride/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 4 | timestamp | [Int](/en/ride/data-types/int) | Transaction timestamp |
| 5 | version | [Int](/en/ride/data-types/int) | Transaction version |
| 6 | sender | [Address](/en/ride/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the transaction sender |
| 7 | senderPublicKey | [ByteVector](/en/ride/data-types/byte-vector) | Public key of the transaction sender |
| 8 | bodyBytes | [ByteVector](/en/ride/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/glossary#t) |
| 9 | proofs | [List](/en/ride/data-types/list)[[ByteVector](/en/ride/data-types/byte-vector)] | [Proofs](/en/blockchain/transaction/transaction-proof) |
