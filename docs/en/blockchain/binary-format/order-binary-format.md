# Order Binary Format

> Learn more about [order](/en/blockchain/order).

An exchange transaction of [version 3](/en/blockchain/binary-format/transaction-binary-format/exchange-transaction-binary-format#version-3) can accept orders of versions [1](/en/blockchain/binary-format/order-binary-format#v1)–[4](/en/blockchain/binary-format/order-binary-format#v4).

An exchange transaction of [version 2](/en/blockchain/binary-format/transaction-binary-format/exchange-transaction-binary-format#version-2) can accept orders of versions [1](/en/blockchain/binary-format/order-binary-format#v1)–[3](/en/blockchain/binary-format/order-binary-format#v3).

An exchange transaction of [version 1](/en/blockchain/binary-format/transaction-binary-format/exchange-transaction-binary-format#version-1) can accept orders of version [1](/en/blockchain/binary-format/order-binary-format#v1) only.

## Version 4 <a id="v4"></a>

Binary format of order version 4 is defined in [order.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/order.proto) protobuf scheme. For information about `proto` see [Protocol Buffers Developer Guide](https://developers.google.com/protocol-buffers/docs/overview?hl=en).

Version 4 is added in node version 1.2.0 and becomes available after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.

```protobuf
message AssetPair {
    bytes amount_asset_id = 1;
    bytes price_asset_id = 2;
};

message Order {
    enum Side {
        BUY = 0;
        SELL = 1;
    };

    int32 chain_id = 1;
    bytes sender_public_key = 2;
    bytes matcher_public_key = 3;
    AssetPair asset_pair = 4;
    Side order_side = 5;
    int64 amount = 6;
    int64 price = 7;
    int64 timestamp = 8;
    int64 expiration = 9;
    Amount matcher_fee = 10;
    int32 version = 11;
    repeated bytes proofs = 12;
};

message Amount {
    bytes asset_id = 1;
    int64 amount = 2;
};
```

| Field | Size | Description |
| :--- | :--- | :--- |
| chain_id | 1 byte | [Chain ID](/en/blockchain/blockchain-network/#chain-id) |
| sender_public_key | 32 bytes | Public key of the order sender |
| matcher_public_key | 32 bytes | Public key of matcher |
| asset_pair.amount_asset_id | • 32 bytes for asset<br>• 0 for WAVES | ID of the amount asset |
| asset_pair.price_asset_id | • 32 bytes for asset<br>• 0 for WAVES | ID of the price asset |
| order_side | 1 byte | Order type: buy or sell |
| amount | 8 bytes | Amount of the amount asset, specified in the minimum fraction (“cent”) of asset |
| price | 8 bytes | Price for the amount asset nominated in the price asset, multiplied by 10<sup>8</sup>. |
| timestamp | 8 bytes | Order timestamp: Unix time in milliseconds |
| expiration | 8 bytes | Unix time in milliseconds when the order will be expired |
| matcher_fee.asset_id | • 32 bytes for asset<br>• 0 for WAVES | Matcher fee token ID |
| matcher_fee.amount | 8 bytes | [Matcher fee](/en/blockchain/glossary#m) |
| version | 1 byte | Order version: 4 |
| proofs | Each proof up to 64 bytes,<br>up to 8 proofs | Order proofs that are used to check the validity of the order |

## Version 3 <a id="v3"></a>

| # | Field name | JSON field name | Field type | Length in bytes | Value |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | [Order](/en/blockchain/order) binary format version number | version | [Byte](/en/blockchain/blockchain/blockchain-data-types)| 1 | must be 3 |
| 2 | Order sender public key | senderPublicKey | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 3 | [Matcher](https://docs.waves.exchange/en/waves-matcher/) public key | matcherPublicKey | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 4.1 | Asset B (amount asset) flag |  | [Short](/en/blockchain/blockchain/blockchain-data-types) | 1 | If token is [WAVES](/en/blockchain/token/waves), then value is 0, else 1 |
| 4.2 | [Asset B (amount Asset) ID](/en/blockchain/token/token-id) | amountAsset | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | `S` | If token is not WAVES, then `S` = 32, else the field should be absent |
| 5.1 | Asset A (price asset flag |  | [Short](/en/blockchain/blockchain/blockchain-data-types) | 1 | If token is WAVES, then value is 0, else 1 |
| 5.2 | Asset A (price asset) ID | priceAsset | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | `S` | If token is not WAVES, then `S` = 32, else the field should be absent |
| 6 | Order type | orderType | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | If order is for buying, then value is 0, if order is for selling, then value is  1 |
| 7 | Amount of asset B (amount asset), which the order sender offers for one price asset(asset A) | price | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | bytes in [big-endian](https://en.wikipedia.org/wiki/Endianness) notation |
| 8 | Amount of asset B (price asset), which the order sender wants to buy or send depending on order type | amount | Long | 8 | bytes in [big-endian](https://en.wikipedia.org/wiki/Endianness) notation |
| 9 | Amount of milliseconds from the beginning of [Unix epoch](https://ru.wikipedia.org/wiki/Unix-время) till the moment of validation of order by matcher | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | bytes in [big-endian](https://en.wikipedia.org/wiki/Endianness) notation |
| 10 | Amount of milliseconds from the beginning of Unix epoch till the unfulfilled order [cancellation](/en/blockchain/order#cancel) | expiration | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | bytes in [big-endian](https://en.wikipedia.org/wiki/Endianness) notation |
| 11 | [Matcher fee](/en/blockchain/glossary#m) | matcherFee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | bytes in [big-endian](https://en.wikipedia.org/wiki/Endianness) notation |
| 12 | Matcher fee token flag |  | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | If token is WAVES, then value is 0, else 1 |
| 13 | Matcher fee token | matcherFeeAssetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | `F` | If token is not WAVES, then `F` = 32, else the field should be absent |
| 14 | [Proofs](/en/blockchain/transaction/transaction-proof) | proofs | Array[[Proof](/en/blockchain/binary-format/transaction-proof-binary-format)] | `S` | If the array is empty, then `S` = 3.<br>If the array is not empty, then `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>where<br>`N` is amount of proofs in the array,<br>`P`<sub>n</sub> — size N-th proof in bytes.<br>Maximum amount of proofs in the array is 8. Maximum length of each proof is 64 bytes |

### JSON Representation of Order Version 3

``` json
{
  "version": 3,
  "senderPublicKey": "FMc1iASTGwTC1tDwiKtrVHtdMkrVJ1S3rEBQifEdHnT2",
  "matcherPublicKey": "7kPFrHDiGw1rCm7LPszuECwWYL3dMf6iMifLRDJQZMzy",
  "assetPair": {
    "amountAsset": "BrjUWjndUanm5VsJkbUip8VRYy6LWJePtxya3FNv4TQa",
    "priceAsset": null
  },
  "orderType": "buy",
  "amount": 150000000,
  "timestamp": 1548660872383,
  "expiration": 1551252872383,
  "matcherFee": 300000,
  "proofs": [
    "YNPdPqEUGRW42bFyGqJ8VLHHBYnpukna3NSin26ERZargGEboAhjygenY67gKNgvP5nm5ZV8VGZW3bNtejSKGEa"
  ],
  "id": "Ho6Y16AKDrySs5VTa983kjg3yCx32iDzDHpDJ5iabXka",
  "sender": "3PEFvFmyyZC1n4sfNWq6iwAVhzUT87RTFcA",
  "price": 1799925005,
  
}
```

## Version 2 <a id="order2"></a>

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Version | Byte \(constant, value = 2\) | 1
| 2 | Sender's public key | PublicKey \(Array[Byte]\) | 32
| 3 | Matcher's public key | PublicKey \(Array[Byte]\) | 32
| 4.1 | Amount asset flag \(1 - asset, 0 - Waves\) |  | 1
| 4.2 | Amount asset | AssetId \(ByteStr = Array[Byte]\) | 32 or 0 \(depends on the byte in 4.1\)
| 5.1 | Price asset flag \(1 - asset, 0 - Waves\) |  | 1
| 5.2 | Price asset | AssetId \(ByteStr = Array[Byte]\) | 32 or 0 \(depends on the byte in 5.1\)
| 6 | Order type \(0 - Buy, 1 - Sell\) | Byte | 1
| 7 | Price | Long | 8
| 8 | Amount | Long | 8
| 9 | Timestamp | Long | 8
| 10 | Expiration | Long | 8
| 11 | Matcher's fee | Long | 8
| 12 | Proofs | Proofs | See Proofs structure

## Version 1 <a id="order1"></a>

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Sender's public key | PublicKey \(Array[Byte]\) | 32 |
| 2 | Matcher's public key | PublicKey \(Array[Byte]\) | 32 |
| 3.1 | Amount asset flag \(1 - asset, 0 - Waves\) |  | 1
| 3.2 | Amount asset | AssetId \(ByteStr = Array[Byte]\) | 32 or 0 \(depends on the byte in 3.1\)
| 4.1 | Price asset flag \(1 - asset, 0 - Waves\) |  | 1
| 4.2 | Price asset | AssetId \(ByteStr = Array[Byte]\) | 32 or 0 \(depends on the byte in 4.1\)
| 5 | Order type \(0 - Buy, 1 - Sell\) | Byte | 1
| 6 | Price | Long | 8
| 7 | Amount | Long | 8
| 8 | Timestamp | Long | 8
| 9 | Expiration | Long | 8
| 10 | Matcher fee | Long | 8
| 11 | Signature | Bytes | 64 |

The price listed for amount asset in price asset \* 10^8.

Expiration is order time to live, timestamp in future, max = 30 days in future.

The signature is calculated from the following bytes:

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Sender's public key | PublicKey \(Array[Byte]\) | 32 |
| 2 | Matcher's public key | PublicKey \(Array[Byte]\) | 32 |
| 3.1 | Amount asset flag \(1 - asset, 0 - Waves\) |  | 1
| 3.2 | Amount asset | AssetId \(ByteStr = Array[Byte]\) | 32 or 0 \(depends on the byte in 3.1\)
| 4.1 | Price asset flag \(1 - asset, 0 - Waves\) |  | 1
| 4.2 | Price asset | AssetId \(ByteStr = Array[Byte]\) | 32 or 0 \(depends on the byte in 4.1\)
| 5 | Order type \(0 - Buy, 1 - Sell\) | Bytes | 1 |
| 6 | Price | Long | 8 |
| 7 | Amount | Long | 8 |
| 8 | Timestamp | Long | 8 |
| 9 | Expiration | Long | 8 |
| 10 | Matcher fee | Long | 8 |
