# [Ride v4 and v3] SetAssetScriptTransaction

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/structures/transaction-structures/set-asset-script-transaction)

Structure of a [set asset script transaction](/en/blockchain/transaction-type/set-asset-script-transaction).

## Constructor

``` ride
SetAssetScriptTransaction(script: ByteVector|Unit, assetId: ByteVector, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | script | [ByteVector](/en/ride/v4/data-types/byte-vector)&#124;[Unit](/en/ride/v4/data-types/unit) | [Asset script](/en/ride/script/script-types/asset-script) |
| 2 | assetId | [ByteVector](/en/ride/v4/data-types/byte-vector) | [Token ID](/en/blockchain/token/token-id) |
| 3 | id | [ByteVector](/en/ride/v4/data-types/byte-vector) | Transaction ID |
| 4 | fee | [Int](/en/ride/v4/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 5 | timestamp | [Int](/en/ride/v4/data-types/int) | Transaction timestamp |
| 6 | version | [Int](/en/ride/v4/data-types/int) | Transaction version |
| 7 | sender | [Address](/en/ride/v4/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the transaction sender |
| 8 | senderPublicKey | [ByteVector](/en/ride/v4/data-types/byte-vector) | Public key of the transaction sender |
| 9 | bodyBytes | [ByteVector](/en/ride/v4/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/glossary#t) |
| 10 | proofs | [List](/en/ride/v4/data-types/list)[[ByteVector](/en/ride/v4/data-types/byte-vector)] | [Proofs](/en/blockchain/transaction/transaction-proof) |
