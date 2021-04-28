# [Ride v5] SponsorFeeTransaction

:warning: This is the documentation for the Standard Library **version 5**, which becomes available after activation of feature #16 “Ride V5, dApp-to-dApp invocations”. [Go to version 4](/en/ride/structures/transaction-structures/sponsor-fee-transaction)

Structure of a [Sponsor Fee transaction](/en/blockchain/transaction-type/sponsor-fee-transaction).

## Constructor

``` ride
SponsorFeeTransaction(assetId: ByteVector, minSponsoredAssetFee: Int|Unit, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/en/ride/v5/data-types/byte-vector)) | [Token ID](/en/blockchain/token/token-id) |
| 2 | minSponsoredAssetFee | [Int](/en/ride/v5/data-types/int)&#124;[Unit](/en/ride/v5/data-types/unit) | Amount of asset that is equivalent to 0.001 WAVES (100,000 WAVELET): an integer value specified in [atomic units](/en/blockchain/token/#atomic-unit).<br>`unit` – disable sponsorship |
| 3 | id | [ByteVector](/en/ride/v5/data-types/byte-vector) | Transaction ID |
| 4 | fee | [Int](/en/ride/v5/data-types/int) | [Transaction fee](/en/blockchain/transaction/transaction-fee) |
| 5 | timestamp | [Int](/en/ride/v5/data-types/int) | Transaction timestamp |
| 6 | version | [Int](/en/ride/v5/data-types/int) | Transaction version |
| 7 | sender | [Address](/en/ride/v5/structures/common-structures/address) | [Address](/en/blockchain/account/address) of the transaction sender |
| 8 | senderPublicKey | [ByteVector](/en/ride/v5/data-types/byte-vector) | Public key of the transaction sender |
| 9 | bodyBytes | [ByteVector](/en/ride/v5/data-types/byte-vector) | [Transaction body bytes](/en/blockchain/glossary#t) |
| 10 | proofs | [List](/en/ride/v5/data-types/list)[[ByteVector](/en/ride/v5/data-types/byte-vector)] | [Proofs](/en/blockchain/transaction/transaction-proof) |
