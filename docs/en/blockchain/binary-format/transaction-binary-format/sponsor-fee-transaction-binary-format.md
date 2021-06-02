# Sponsor Fee Transaction Binary Format

> Learn more about [sponsorship](/en/blockchain/waves-protocol/sponsored-fee).

## Version 2

Binary format of version 2 is defined in [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto) protobuf scheme. The fields that are common to all types of transactions are described in the [Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/) article.

Version 2 is enabled by feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.

```
message SponsorFeeTransactionData {
    Amount min_fee = 1;
};

message Amount {
    bytes asset_id = 1;
    int64 amount = 2;
};
```

| Field | Size | Description |
| :--- | :--- | :--- |
| min_fee.asset_id | 32 bytes | ID of asset |
| min_fee.amount | 8 bytes | Amount of asset that is equivalent to 0.001 WAVES (100&nbsp;000 WAVELET), specified in the minimum fraction (“cents”) of asset. See the [Sponsored fee](/en/blockchain/waves-protocol/sponsored-fee) article |

## Version 1

| # | Field | JSON field name  | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag | | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Indicates the transaction version is 2 or higher.<br>Value must be 0 |
| 2 | [Transaction type ID](/en/blockchain/transaction-type/) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 14 |
| 3 | Transaction version | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 1 |
| **4** | Transaction type ID | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | This field duplicates field 2 |
| **5** | Transaction version | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | This field duplicates field 3 |
| **6** | Public key of the transaction sender  | senderPublicKey | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| **7** | [Token ID](/en/blockchain/token/token-id) | assetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| **8** | Minimal sponsored asset fee | minSponsoredAssetFee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | Amount of sponsored asset that is equivalent to 0.001 WAVES (100,000 WAVELET) |
| **9** | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| **10** | Transaction timestamp | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 11 | [Transaction proofs](/en/blockchain/transaction/transaction-proof) | proofs | See [Transaction Proofs Binary Format](/en/blockchain/binary-format/transaction-proof-binary-format) | `S` | If the array is empty, then `S` = 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + 64 × `N`, where `N` is the number of proofs in the array.<br>The maximum number of proofs in the array is 8. The size of each proof is 64 bytes |

> The fields numbered in bold are the transaction body bytes.

## JSON Representation of Transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/7EL2XEGP1By427BeLcHPYeVnBzGsXen4egMAwQpWGBVR) in Node API.
