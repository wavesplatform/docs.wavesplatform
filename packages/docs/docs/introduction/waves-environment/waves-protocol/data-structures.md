# Binary Data Structures

## Blockchain objects

### Address

| \# | Field name | Type | Length in Bytes |
| --- | :---: | :---: | --- |
| 1 | Version\(0x01\) | Byte | 1 |
| 2 | Address scheme \(0x54 for Testnet and 0x57for Mainnet\) | Byte | 1 |
| 3 | Public key hash | Bytes | 20 |
| 4 | Checksum | Bytes | 4 |

Public key hash is first 20 bytes of\_SecureHash\_of public key bytes. Checksum is first 4 bytes of\_SecureHash\_of version, scheme and hash bytes. SecureHash is hash function Keccak256\(Blake2b256\(data\)\).

### Alias

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Version \(0x02\) | Byte | 1 |
| 2 | Address scheme \(0x54 for Testnet and 0x57 for Mainnet\) | Byte | 1 |
| 3 | Alias bytes length \(N\) | Int | 2 |
| 4 | Alias bytes | Bytes | N |

Alias is a UTF-8 string with the following constraints:

* It contains from 4 to 30 UTF-8 characters
* It can contain characters only from the following alphabet: `-.0123456789@_abcdefghijklmnopqrstuvwxyz`
* It cannot contain '\n' or any leading/trailing whitespaces

### Proof

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Proof size \(N\) | Short | 2 |
| 2 | Proof | Bytes | N |

### AddressOrAlias

A recipient that can be encoded either as pure address or alias. Both `Address` and `Alias` are `AddressOrAlias`.

### Block

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Version \(0x02 for Genesis block, 0x03 for common block\) | Byte | 0 |
| 2 | Timestamp | Long | 1 |
| 3 | Parent block signature | Bytes | 64 |
| 4 | Consensus block length \(always 40 bytes\) | Int | 4 |
| 5 | Base target | Long | 8 |
| 6 | Generation signature\* | Bytes | 32 |
| 7 | Transactions block length \(N\) | Int | 4 |
| 8 | Transaction \#1 bytes | Bytes | M1 |
| ... | ... | ... | ... |
| 8 + \(K - 1\) | Transaction \#K bytes | Bytes | MK |
| 9 + \(K - 1\) | Generator's public key | Bytes | 32 |
| 10 + \(K - 1\) | Block's signature | Bytes | 64 |

Generation signature is calculated as Blake2b256 hash of the following bytes:

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Previous block's generation signature | Bytes | 32 |
| 2 | Generator's public key | Bytes | 32 |

Block's signature is calculated from the following bytes:

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Version \(0x02 for Genesis block,, 0x03 for common block\) | Byte | 1 |
| 2 | Timestamp | Long | 8 |
| 3 | Parent block signature | Bytes | 64 |
| 4 | Consensus block length \(always 40 bytes\) | Int | 4 |
| 5 | Base target | Long | 8 |
| 6 | Generation signature\* | Bytes | 32 |
| 7 | Transactions block length \(N\) | Int | 4 |
| 8 | Transaction \#1 bytes | Bytes | M1 |
| ... | ... | ... | ... |
| 8 + \(K - 1\) | Transaction \#K bytes | Bytes | MK |
| 9 + \(K - 1\) | Generator's public key | Bytes | 32 |

### Order

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Sender's public key | Bytes | 32 |
| 2 | Matcher's public key | Bytes | 32 |
| 3 | Amount's asset flag \(0-Waves, 1-Asset\) | Byte | 1 |
| 4 | Amount's asset ID \(\*if used\) | Bytes | 0 \(32\*\) |
| 5 | Price's asset flag \(0-Waves, 1-Asset\) | Byte | 1 |
| 6 | Price's asset ID \(\*\*if used\) | Bytes | 0 \(32\*\*\) |
| 7 | Order type \(0 - Buy, 1 - Sell\) | Bytes | 1 |
| 8 | Price | Long | 8 |
| 9 | Amount | Long | 8 |
| 10 | Timestamp | Long | 8 |
| 11 | Expiration | Long | 8 |
| 12 | Matcher fee | Long | 8 |
| 13 | Signature | Bytes | 64 |

The price listed for amount asset in price asset \* 10^8.

Expiration is order time to live, timestamp in future, max = 30 days in future.

The signature is calculated from the following bytes:

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Sender's public key | Bytes | 32 |
| 2 | Matcher's public key | Bytes | 32 |
| 3 | Amount's asset flag \(0-Waves, 1-Asset\) | Byte | 1 |
| 4 | Amount's asset ID \(\*if used\) | Bytes | 0 \(32\*\) |
| 5 | Price's asset flag \(0-Waves, 1-Asset\) | Byte | 1 |
| 6 | Price's asset ID \(\*\*if used\) | Bytes | 0 \(32\*\*\) |
| 7 | Order type \(0 - Buy, 1 - Sell\) | Bytes | 1 |
| 8 | Price | Long | 8 |
| 9 | Amount | Long | 8 |
| 10 | Timestamp | Long | 8 |
| 11 | Expiration | Long | 8 |
| 12 | Matcher fee | Long | 8 |

### Order V2

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Version | Byte \(constant, value = 2\) | 1
| 2 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 3 | Matcher's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 4.1 | Amount asset flag \(1 - asset, 0 - Waves\) |  | 1
| 4.2 | Amount asset | AssetId \(ByteStr = Array[Byte]\) | 32/0 \(depends on byte in 4.1\)
| 5.1 | Price asset flag \(1 - asset, 0 - Waves\) |  | 1
| 5.2 | Price asset | AssetId \(ByteStr = Array[Byte]\) | 32/0 \(depends on byte in 5.1\)
| 6 | Order type \(0 - Buy, 1 - Sell\) | Byte | 1
| 7 | Price | Long | 8
| 8 | Amount | Long | 8
| 9 | Timestamp | Long | 8
| 10 | Expiration | Long | 8
| 11 | Matcher's fee | Long | 8
| 12.1 | Proofs version \(1\) |  | 1
| 12.2 | Proofs count |  | 2
| 12.3 | Proof 1 length \(P1\) |  | 2
| 12.4 | Proof 1 | ByteStr \(Array[Byte]\) | Maximum 65536(2^16)
| 12.5 | Proof 2 length \(P2\) |  | 2
| 12.6 | Proof 2  | ByteStr \(Array[Byte]\) | Maximum 65536(2^16)
| ... | ... | ... | ... |

### Transactions

Transaction types:

| Tx type № | Tx type name |
| --- | --- |
| 1 | GenesisTransaction |
| 2 | PaymentTransaction\* |
| 3 | IssueTransaction V1, V2 |
| 4 | TransferTransaction V1, V2 |
| 5 | ReissueTransaction V1, V2 |
| 6 | BurnTransaction V1, V2 |
| 7 | ExchangeTransaction V1, V2 |
| 8 | LeaseTransaction V1, V2  |
| 9 | LeaseCancelTransaction V1, V2 |
| 10 | CreateAliasTransaction V1, V2 |
| 11 | MassTransferTransaction |
| 12 | DataTransaction |
| 13 | SetScriptTransaction |
| 14 | SponsorFeeTransaction |
| 15 | SetAssetScriptTransaction |
| 16 | ContractInvocationTransaction\*\* |

\* - Deprecated

\*\* - Is not activated yet

#### Genesis transaction

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction type | Byte \(constant, value = 1\) | 1
| 2 | Timestamp | Long | 8
| 3 | Recipient's address | Address | 26
| 4 | Amount | Long | 8

#### Issue transaction V1

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction type | Byte \(constant, value = 3\) | 1
| 2 | Signature | ByteStr \(Array[Byte]\) | 64
| 3 | Transaction type | Byte \(constant, value = 3\) | 1
| 4 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 5.1 | Asset name length \(N\) |  | 2
| 5.2 | Asset name | Array[Byte] | Maximum 65536(2^16)
| 6.1 | Description length \(D\) |  | 2
| 6.2 | Description | Array[Byte] | Maximum 65536(2^16)
| 7 | Quantity | Long | 8
| 8 | Decimals | Byte | 1
| 9 | Reissuable flag \(1 - True, 0 - False\) | Boolean | 1
| 10 | Fee | Long | 8
| 11 | Timestamp | Long | 8

The transaction's signature is calculated from the following bytes:

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction type \(0x03\) | Byte | 1 |
| 2 | Sender's public key | Bytes | 32 |
| 3 | Name's length \(N\) | Short | 2 |
| 4 | Name's bytes | Bytes | Maximum 65536(2^16) |
| 5 | Description's length \(M\) | Short | 2 |
| 6 | Description's bytes | Bytes | Maximum 65536(2^16) |
| 7 | Quantity | Long | 8 |
| 8 | Decimals | Byte | 1 |
| 9 | Reissuable flag \(1-True, 0-False\) | Byte | 1 |
| 10 | Fee | Long | 8 |
| 11 | Timestamp | Long | 8 |

#### Issue Transaction V2

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction multiple version mark | Byte \(constant, value = 0\) | 1
| 2 | Transaction type | Byte \(constant, value = 3\) | 1
| 3 | Version | Byte | 1
| 4 | Chain ID | Byte | 1
| 5 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 6.1 | Name length \(N\) |  | 2
| 6.2 | Name | Array[Byte] | Maximum 65536(2^16)
| 7.1 | Description length \(D\) |  | 2
| 7.2 | Description | Array[Byte] | Maximum 65536(2^16)
| 8 | Quantity | Long | 8
| 9 | Decimals | Byte | 1
| 10 | Reissuable flag \(1 - True, 0 - False\) | Boolean | 1
| 11 | Fee | Long | 8
| 12 | Timestamp | Long | 8
| 13.1 | Script existence flag \(1/0\) |  | 1
| 13.2 | Script length \(S\) |  | 2/0 \(depends on byte in 13.1\)
| 13.3 | Script | Script | S/0 \(depends on byte in 13.1\)
| 14.1 | Proofs version \(1\) |  | 1
| 14.2 | Proofs count |  | 2
| 14.3 | Proof 1 length \(P1\) |  | 2
| 14.4 | Proof 1 | ByteStr \(Array[Byte]\) | P1
| 14.5 | Proof 2 length \(P2\) |  | 2
| 14.6 | Proof 2  | ByteStr \(Array[Byte]\) | P2
| ... | ... | ... | ... |

#### Transfer Transaction V1

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction type | Byte \(constant, value = 4\) | 1
| 2 | Signature | ByteStr \(Array[Byte]\) | 64
| 3 | Transaction type | Byte \(constant, value = 4\) | 1
| 4 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 5.1 | Asset ID flag \(1 - asset, 0 - Waves\) |  | 1
| 5.2 | Asset ID | AssetId \(ByteStr = Array[Byte]\) | 32/0 \(depends on byte in 5.1\)
| 6.1 | Fee's asset ID flag \(1 - asset, 0 - Waves\) |  | 1
| 6.2 | Fee's asset ID | AssetId \(ByteStr = Array[Byte]\) | 32/0 \(depends on byte in 6.1\)
| 7 | Timestamp | Long | 8
| 8 | Amount | Long | 8
| 9 | Fee | Long | 8
| 10 | Recipient | Address or Alias | depends on first byte \(1 - Address, 2 - Alias\)
| 11.1 | Attachment length \(N\) |  | 2
| 11.2 | Attachment | Array[Byte] | N

The transaction's signature is calculated from the following bytes:

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction type \(0x04\) | Byte | 1 |
| 2 | Sender's public key | Bytes | 32 |
| 3 | Amount's asset flag \(0-Waves, 1-Asset\) | Byte | 1 |
| 4 | Amount's asset ID \(\*if used\) | Bytes | 0\(32\*\) |
| 5 | Fee's asset flag \(0-Waves, 1-Asset\) | Byte | 1 |
| 6 | Fee's asset ID \(\*\*if used\) | Bytes | 0\(32\*\*\) |
| 7 | Timestamp | Long | 8 |
| 8 | Amount | Long | 8 |
| 9 | Fee | Long | 8 |
| 10 | Recipient's AddressOrAlias object bytes | Bytes | M |
| 11 | Attachment's length \(N\) | Short | 2 |
| 12 | Attachment's bytes | Bytes | N |

#### Transfer Transaction V2

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction multiple version mark | Byte \(constant, value = 0\) | 1
| 2 | Transaction type | Byte \(constant, value = 4\) | 1
| 3 | Version | Byte | 1
| 4 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 5.1 | Asset ID flag \(1 - asset, 0 - Waves\) |  | 1
| 5.2 | Asset ID\* | AssetId \(ByteStr = Array[Byte]\) | 32/0 \(depends on byte in 5.1\)
| 6.1 | Fee's asset ID flag \(1 - asset, 0 - Waves\) |  | 1
| 6.2 | Fee's asset ID | AssetId \(ByteStr = Array[Byte]\) | 32/0 \(depends on byte in 6.1\)
| 7 | Timestamp | Long | 8
| 8 | Amount | Long | 8
| 9 | Fee | Long | 8
| 10 | Recipient | Address or Alias | depends on first byte \(1 - Address, 2 - Alias\)
| 11.1 | Attachment length \(N\) |  | 2
| 11.2 | Attachment | Array[Byte] | N
| 12.1 | Proofs version \(1\) |  | 1
| 12.2 | Proofs count |  | 2
| 12.3 | Proof 1 length \(P1\) |  | 2
| 12.4 | Proof 1 | ByteStr \(Array[Byte]\) | P1
| 12.5 | Proof 2 length \(P2\) |  | 2
| 12.6 | Proof 2  | ByteStr \(Array[Byte]\) | P2
| ... | ... | ... | ... |

* The fee only in Waves;
* You may sign your transaction in your way and place the signature in proofs.

#### Reissue Transaction V1

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction type | Byte \(constant, value = 5\) | 1
| 2 | Signature | ByteStr \(Array[Byte]\) | 64
| 3 | Transaction type | Byte \(constant, value = 5\) | 1
| 4 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 5 | Asset ID | ByteStr \(Array[Byte]\) | 32
| 6 | Quantity | Long | 8
| 7 | Reissuable flag \(1 - True, 0 - False\) | Boolean | 1
| 8 | Fee | Long | 8
| 9 | Timestamp | Long | 8

The transaction's signature is calculated from the following bytes:

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction type \(0x05\) | Byte | 1 |
| 2 | Sender's public key | Bytes | 32 |
| 3 | Asset ID | Bytes | 32 |
| 4 | Quantity | Long | 8 |
| 5 | Reissuable flag \(1-True, 0-False\) | Byte | 1 |
| 6 | Fee | Long | 8 |
| 7 | Timestamp | Long | 8 |

#### Reissue Transaction V2

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction multiple version mark | Byte \(constant, value = 0\) | 1
| 2 | Transaction type | Byte \(constant, value = 5\) | 1
| 3 | Version | Byte | 1
| 4 | Chain ID | Byte | 1
| 5 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 6 | Asset ID | ByteStr \(Array[Byte]\) | 32
| 7 | Quantity | Long | 8
| 8 | Reissuable flag \(1 - True, 0 - False\) | Boolean | 1
| 9 | Fee | Long | 8
| 10 | Timestamp | Long | 8
| 11.1 | Proofs version \(1\) |  | 1
| 11.2 | Proofs count |  | 2
| 11.3 | Proof 1 length \(P1\) |  | 2
| 11.4 | Proof 1 | ByteStr \(Array[Byte]\) | P1
| 11.5 | Proof 2 length \(P2\) |  | 2
| 11.6 | Proof 2  | ByteStr \(Array[Byte]\) | P2
| ... | ... | ... | ... |

#### Burn Transaction V1

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction type | Byte \(constant, value = 6\) | 1
| 2 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 3 | Asset ID | ByteStr \(Array[Byte]\) | 32
| 4 | Quantity | Long | 8
| 5 | Fee | Long | 8
| 6 | Timestamp | Long | 8
| 7 | Signature | ByteStr \(Array[Byte]\) | 64

The transaction's signature is calculated from the following bytes:

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | ChainId | Byte | 1 |
| 2 | Sender's public key | Bytes | 32 |
| 3 | Asset ID | Bytes | 32 |
| 4 | Quantity | Long | 8 |
| 5 | Fee | Long | 8 |
| 6 | Timestamp | Long | 8 |

#### Burn Transaction V2

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction multiple version mark | Byte \(constant, value = 0\) | 1
| 2 | Transaction type | Byte \(constant, value = 6\) | 1
| 3 | Version | Byte | 1
| 4 | Chain ID | Byte | 1
| 5 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 6 | Asset ID | ByteStr \(Array[Byte]\) | 32
| 7 | Quantity | Long | 8
| 8 | Fee | Long | 8
| 9 | Timestamp | Long | 8
| 10.1 | Proofs version \(1\) |  | 1
| 10.2 | Proofs count |  | 2
| 10.3 | Proof 1 length \(P1\) |  | 2
| 10.4 | Proof 1 | ByteStr \(Array[Byte]\) | P1
| 10.5 | Proof 2 length \(P2\) |  | 2
| 10.6 | Proof 2  | ByteStr \(Array[Byte]\) | P2
| ... | ... | ... | ... |


#### Exchange Transaction V1

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction type | Byte \(constant, value = 7\) | 1
| 2 | Buy order object length \(BN\) |  | 4
| 3 | Sell order object length \(SN\) |  | 4
| 4 | Buy order object | OrderV1 | BN
| 5 | Sell order object | OrderV1 | SN
| 6 | Price | Long | 8
| 7 | Amount | Long | 8
| 8 | Buy matcher fee | Long | 8
| 9 | Sell matcher fee | Long | 8
| 10 | Fee | Long | 8
| 11 | Timestamp | Long | 8
| 12 | Signature | ByteStr \(Array[Byte]\) | 64

The transaction's signature is calculated from the following bytes:

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction type \(0x07\) | Byte | 1 |
| 2 | Buy order object length \(BN\) | Bytes | 4 |
| 3 | Sell order object length \(SN\) | Bytes | 4 |
| 4 | Buy order object bytes | Bytes | BN |
| 5 | Sell order object bytes | Bytes | SN |
| 6 | Price | Long | 8 |
| 7 | Amount | Long | 8 |
| 8 | Buy matcher fee | Long | 8 |
| 9 | Sell matcher fee | Long | 8 |
| 10 | Fee | Long | 8 |
| 11 | Timestamp | Long | 8 |

#### Exchange Transaction V2

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction multiple version mark | Byte \(constant, value = 0\) | 1
| 2 | Transaction type | Byte \(constant, value = 7\) | 1
| 3 | Version | Byte | 1
| 4.1 | Buy order size \(BN\) |  | 4
| 4.2 | Buy order version mark |  | 1 \(version 1\) / 0 \(version 2\)
| 4.3 | Buy order | Order | BN
| 5.1 | Sell order size \(SN\) |  | 4
| 5.2 | Sell order version mark |  | 1 \(version 1\) / 0 \(version 2\)
| 5.3 | Sell order | Order | SN
| 6 | Price | Long | 8
| 7 | Amount | Long | 8
| 8 | Buy matcher fee | Long | 8
| 9 | Sell matcher fee | Long | 8
| 10 | Fee | Long | 8
| 11 | Timestamp | Long | 8
| 12.1 | Proofs version \(1\) |  | 1
| 12.2 | Proofs count |  | 2
| 12.3 | Proof 1 length \(P1\) |  | 2
| 12.4 | Proof 1 | ByteStr \(Array[Byte]\) | P1
| 12.5 | Proof 2 length \(P2\) |  | 2
| 12.6 | Proof 2  | ByteStr \(Array[Byte]\) | P2
| ... | ... | ... | ... |

#### Lease Transaction V1

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction type | Byte \(constant, value = 8\) | 1
| 2 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 3 | Recipient | Address or Alias | depends on first byte \(1 - Address, 2 - Alias\)
| 4 | Amount | Long | 8
| 5 | Fee | Long | 8
| 6 | Timestamp | Long | 8
| 7 | Signature | ByteStr \(Array[Byte]\) | 64

The transaction's signature is calculated from the following bytes:

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction type \(0x08\) | Byte | 1 |
| 2 | Sender's public key | Bytes | 32 |
| 3 | Recipient's AddressOrAlias object bytes | Bytes | N |
| 4 | Amount | Long | 8 |
| 5 | Fee | Long | 8 |
| 6 | Timestamp | Long | 8 |

#### Lease Transaction V2

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction multiple version mark | Byte \(constant, value = 0\) | 1
| 2 | Transaction type | Byte \(constant, value = 8\) | 1
| 3 | Version | Byte | 1
| 4.1 | Leasing asset flag\* \(1 - asset, 0 - Waves\) |  | 1
| 4.2 | Leasing asset | AssetId \(ByteStr = Array[Byte]\) | 32/0 \(depends on byte in 4.1\)
| 5 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 6 | Recipient | Address or Alias | depends on first byte \(1 - Address, 2 - Alias\)
| 7 | Amount | Long | 8
| 8 | Fee | Long | 8
| 9 | Timestamp | Long | 8
| 10.1 | Proofs version \(1\) |  | 1
| 10.2 | Proofs count |  | 2
| 10.3 | Proof 1 length \(P1\) |  | 2
| 10.4 | Proof 1 | ByteStr \(Array[Byte]\) | P1
| 10.5 | Proof 2 length \(P2\) |  | 2
| 10.6 | Proof 2  | ByteStr \(Array[Byte]\) | P2
| ... | ... | ... | ... |

\* Only Waves are currently supported

#### Lease Cancel Transaction V1

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction type | Byte \(constant, value = 9\) | 1
| 2 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 3 | Fee | Long | 8
| 4 | Timestamp | Long | 8
| 5 | Lease ID | ByteStr \(Array[Byte]\) | 32
| 6 | Signature | ByteStr \(Array[Byte]\) | 64

#### Lease Cancel Transaction V2

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction multiple version mark | Byte \(constant, value = 0\) | 1
| 2 | Transaction type | Byte \(constant, value = 9\) | 1
| 3 | Version | Byte | 1
| 4 | Chain ID | Byte | 1
| 5 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 6 | Fee | Long | 8
| 7 | Timestamp | Long | 8
| 8 | Lease ID | ByteStr \(Array[Byte]\) | 32
| 9.1 | Proofs version \(1\) |  | 1
| 9.2 | Proofs count |  | 2
| 9.3 | Proof 1 length \(P1\) |  | 2
| 9.4 | Proof 1 | ByteStr \(Array[Byte]\) | P1
| 9.5 | Proof 2 length \(P2\) |  | 2
| 9.6 | Proof 2  | ByteStr \(Array[Byte]\) | P2
| ... | ... | ... | ... |

#### Create Alias Transaction V1

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction type | Byte \(constant, value = 10\) | 1
| 2 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 3.1 | Alias object length \(A\) |  | 2
| 3.2 | Alias object | Alias | A
| 4 | Fee | Long | 8
| 5 | Timestamp | Long | 8
| 6 | Signature | ByteStr \(Array[Byte]\) | 64

The transaction's signature is calculated from the following bytes:

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction type \(0x0a\) | Byte | 1 |
| 2 | Sender's public key | Bytes | 32 |
| 3 | Alias object length \(N\) | Short | 2 |
| 4 | Alias object bytes | Bytes | N |
| 5 | Fee | Long | 8 |
| 6 | Timestamp | Long | 8 |

#### Create Alias Transaction V2

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction multiple version mark | Byte \(constant, value = 0\) | 1
| 2 | Transaction type | Byte \(constant, value = 10\) | 1
| 3 | Version | Byte | 1
| 4 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 5.1 | Alias object length \(A\) |  | 2
| 5.2 | Alias object | Alias | A
| 6 | Fee | Long | 8
| 7 | Timestamp | Long | 8
| 8.1 | Proofs version \(1\) |  | 1
| 8.2 | Proofs count |  | 2
| 8.3 | Proof 1 length \(P1\) |  | 2
| 8.4 | Proof 1 | ByteStr \(Array[Byte]\) | P1
| 8.5 | Proof 2 length \(P2\) |  | 2
| 8.6 | Proof 2  | ByteStr \(Array[Byte]\) | P2
| ... | ... | ... | ... |

#### Mass Transfer Transaction

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction type | Byte \(constant, value = 11\) | 1
| 2 | Version | Byte \(constant, value = 1\) | 1
| 3 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 4.1 | Asset ID existence flag \(1/0\) |  | 1
| 4.2 | Asset ID | AssetId \(ByteStr = Array[Byte]\) | 32/0 \(depends on byte in 4.1\)
| 5.1 | Number of transfers |  | 2
| 5.2 | Address or alias for transfer 1 | Address or Alias | depends on first byte \(1 - Address, 2 - Alias\)
| 5.3 | Amount for transfer 1 | Long | 8
| 5.4 | Address or alias for transfer 2 | Address or Alias | depends on first byte \(1 - Address, 2 - Alias\)
| 5.5 | Amount for transfer 2 | Long | 8
| ... | ... | ... | ... |
| 6 | Timestamp | Long | 8
| 7 | Fee | Long | 8
| 8.1 | Attachments length \(N\) |  | 2
| 8.2 | Attachments | Array[Byte] | N
| 9.1 | Proofs version \(1\) |  | 1
| 9.2 | Proofs count |  | 2
| 9.3 | Proof 1 length \(P1\) |  | 2
| 9.4 | Proof 1 | ByteStr \(Array[Byte]\) | P1
| 9.5 | Proof 2 length \(P2\) |  | 2
| 9.6 | Proof 2  | ByteStr \(Array[Byte]\) | P2
| ... | ... | ... | ... |

The transaction signature is calculated from the fields 1 to 8.2, i.e. proofs and signatures are not included.

**Note.** [**Here**](/waves-environment/waves-protocol/mass-transfer-transaction.md) you can find more details about Mass Transfer Transaction.

Below is a sample **Mass Transfer transaction** encoded as **JSON**:

```cpp
  {
  "type" : 11,
  "version" : 1,
  "id" : "BG7MQF8KffVU6MMbJW5xPowVQsohwJhfEJ4wSF8cWdC2",
  "sender" : "3HhQxe5kLwuTfE3psYcorrhogY4fCwz2BSh",
  "senderPublicKey" : "7eAkEXtFGRPQ9pxjhtcQtbH889n8xSPWuswKfW2v3iK4",
  "fee" : 200000,
  "timestamp" : 1518091313964,
  "proofs" : [ "4Ph6RpcPFfBhU2fx6JgcHLwBuYSpn..." ],   // see Proofs below
  "assetId" : null,
  "attachment" : "59QuUcqP6p",
  "transfers" : [ {
    "recipient" : "3HUQa6qtLhNvBJNyPV1pDRahbrcuQkaDQv2",
    "amount" : 100000000
  }, {
    "recipient" : "3HaAdZcCXAqhvFj113Gbe3Kww4rCGMUZaEZ",
    "amount" : 200000000
  },
  ...
  ]
}
```

### \#

#### Data Transaction

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction multiple version mark | Byte \(constant, value = 0\) | 1
| 2 | Transaction type | Byte \(constant, value = 12\) | 1
| 3 | Version | Byte | 1
| 4 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 5.1 | Data entries count |  | 2
| 5.2 | Key 1 length \(K1\) |  | 2
| 5.3 | Key 1 bytes | UTF-8 encoded | K1
| 5.4 | Value 1 type \(0 = integer, 1 = boolean, 2 = binary array, 3 = string\) |  | 1
| 5.5 | Value 1 bytes | Value 1 type | depends on value type
| ... | ... | ... | ... |
| 6 | Timestamp | Long | 8
| 7 | Fee | Long | 8
| 8.1 | Proofs version \(1\) |  | 1
| 8.2 | Proofs count |  | 2
| 8.3 | Proof 1 length \(P1\) |  | 2
| 8.4 | Proof 1 | ByteStr \(Array[Byte]\) | P1
| 8.5 | Proof 2 length \(P2\) |  | 2
| 8.6 | Proof 2  | ByteStr \(Array[Byte]\) | P2
| ... | ... | ... | ... |

The transaction signature is calculated from the fields 1 to 7, i.e. proofs and signatures are not included.

**Note.** [**Here**](/waves-environment/waves-protocol/data-transaction.md) you can find more details about Data Transaction.

Below is a sample **Data transaction** encoded as **JSON**:

```cpp
{
 "type" : 12,
 "id" : "CwHecsEjYemKR7wqRkgkZxGrb5UEfD8yvZpFF5wXm2Su",
 "sender" : "3FjTpAg1VbmxSH39YWnfFukAUhxMqmKqTEZ",
 "senderPublicKey" : "5AzfA9UfpWVYiwFwvdr77k6LWupSTGLb14b24oVdEpMM",
 "fee" : 100000,
 "timestamp" : 1520945679531,
 "proofs" : [ "4huvVwtbALH9W2RQSF5h1XG6PFYLA6nvcAEgv79nVLW7myCysWST6t4wsCqhLCSGoc5zeLxG6MEHpcnB6DPy3XWr" ],
 "data" : [ {
   "key" : "int",
   "type" : "integer",
   "value" : 24
 }, {
   "key" : "bool",
   "type" : "boolean",
   "value" : true
 }, {
   "key" : "blob",
   "type" : "binary",
   "value" : "BzWHaQU"
 } ],
 "version" : 1,
 "height" : 303
}
```

#### Set Script Transaction

Sets the script which verifies all outgoing transactions. The set script can be changed by another.

#### Set Script Transaction

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction multiple version mark | Byte \(constant, value = 0\) | 1
| 2 | Transaction type | Byte \(constant, value = 13\) | 1
| 3 | Version | Byte | 1
| 4 | Chain ID | Byte | 1
| 5 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 6.1 | Script existence flag \(1/0\) |  | 1
| 6.2 | Script length \(S\) |  | 2/0 \(depends on byte in 6.1\)
| 6.3 | Script | Script | S/0 \(depends on byte in 6.1\)
| 7 | Fee | Long | 8
| 8 | Timestamp | Long | 8
| 9.1 | Proofs version \(1\) |  | 1
| 9.2 | Proofs count |  | 2
| 9.3 | Proof 1 length \(P1\) |  | 2
| 9.4 | Proof 1 | ByteStr \(Array[Byte]\) | P1
| 9.5 | Proof 2 length \(P2\) |  | 2
| 9.6 | Proof 2  | ByteStr \(Array[Byte]\) | P2
| ... | ... | ... | ... |

[**Here**](/smart-contracts/waves-contracts-language-description.md) you can find more details about Waves smart-contracts.

[**Here**](/smart-contracts/ride-language/standard-library.md) you can find more details about smart-contracts standard library.

[**Here**](/smart-contracts/ride-language/creating-and-deploying-a-script-manually.md) you can find detailed instruction how to create and deploy a script manually.

#### Sponsor Fee Transaction

Set and cancel [fee sponsorship](sponsored-fee.md) for asset.

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction multiple version mark | Byte \(constant, value = 0\) | 1
| 2 | Transaction type | Byte \(constant, value = 14\) | 1
| 3 | Version | Byte | 1
| 4 | Transaction type | Byte | 1
| 5 | Version | Byte | 1
| 6 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 7 | Asset ID | ByteStr \(Array[Byte]\) | 32
| 8 | Minimal fee in assets\* | Long | 8
| 9 | Fee | Long | 8
| 10 | Timestamp | Long | 8
| 11.1 | Proofs version \(1\) |  | 1
| 11.2 | Proofs count |  | 2
| 11.3 | Proof 1 length \(P1\) |  | 2
| 11.4 | Proof 1 | ByteStr \(Array[Byte]\) | P1
| 11.5 | Proof 2 length \(P2\) |  | 2
| 11.6 | Proof 2  | ByteStr \(Array[Byte]\) | P2
| ... | ... | ... | ... |

\* Zero value assume canceling sponsorship.

**Note.** [**Here**](/waves-environment/waves-protocol/sponsored-fee.md) you can find more details about Sponsored Transaction.

Below is a sample **Sponsored transaction** encoded as **JSON**:

```cpp
{
  "type" : 14,
  "id" : "CwHecsEjYemKR7wqRkgkZxGrb5UEfD8yvZpFF5wXm2Su",
  "sender" : "3FjTpAg1VbmxSH39YWnfFukAUhxMqmKqTEZ",
  "senderPublicKey" : "5AzfA9UfpWVYiwFwvdr77k6LWupSTGLb14b24oVdEpMM",
  "minSponsoredAssetFee": 100000,
  "fee" : 100000000,
  "timestamp" : 1520945679531,
  "proofs" : [ "4huvVwtbALH9W2RQSF5h1XG6PFYLA6nvcAEgv79nVLW7myCysWST6t4wsCqhLCSGoc5zeLxG6MEHpcnB6DPy3XWr" ],
  "version" : 1,
  "height" : 303
}
```

#### Set Asset Script Transaction

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction multiple version mark | Byte \(constant, value = 0\) | 1
| 2 | Transaction type | Byte \(constant, value = 15\) | 1
| 3 | Version | Byte | 1
| 4 | Chain ID | Byte | 1
| 5 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 6 | Asset ID | ByteStr \(Array[Byte]\) | 32
| 7 | Fee | Long | 8
| 8 | Timestamp | Long | 8
| 9.1 | Script existence flag \(1/0\) |  | 1
| 9.2 | Script length \(S\) |  | 2/0 \(depends on byte in 9.1\)
| 9.3 | Script | Script | S/0 \(depends on byte in 9.1\)
| 10.1 | Proofs version \(1\) |  | 1
| 10.2 | Proofs count |  | 2
| 10.3 | Proof 1 length \(P1\) |  | 2
| 10.4 | Proof 1 | ByteStr \(Array[Byte]\) | P1
| 10.5 | Proof 2 length \(P2\) |  | 2
| 10.6 | Proof 2  | ByteStr \(Array[Byte]\) | P2
| ... | ... | ... | ... |

Below is a sample **Set Asset Script** encoded as **JSON**:

```cpp
{
    "type" : 15,
    "id" : "EXDKRNL5Apiw3K9mvLjPVNTWRhDwEvzeA9GAXSrYfQsh",
    "assetId" : "L5Apiw3K9mvLjPVNTWRhDwEvzeA9GAEXDKRNXSrYfQsh",
    "sender" : "3N9dfiTb8Pd6hqhvXaf8GcdTxdwCAeyxsvr",
    "senderPublicKey" : "6gT9PnyXA2sQ9AyRYn1QqkquWSu44Hr3qzLxszchTD1J",
    "fee" : 100000000,
    "timestamp" : 1535102049904,
    "proofs" : [ "4QwRFUNZUk7KaWGnmnYp6pUqUrLjZk3hFwhQTaJN7SUAYDvmXVkU4DDWadH5pQWkaUYiAdCQFtqSKZyKwyaUdyUN" ],
    "version" : 1,
    "script" : "base64:AQQAAAALYWxpY2FANpZ25lZAUAAAAJYm9iU2lnbmVkB5fCpHI"
}
```

#### Contract Invocation Transaction

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Transaction multiple version mark | Byte \(constant, value = 0\) | 1
| 2 | Transaction type | Byte \(constant, value = 16\) | 1
| 3 | Version | Byte | 1
| 4 | Chain ID | Byte | 1
| 5 | Sender's public key | PublicKeyAccount \(Array[Byte]\) | 32
| 6 | Contract address | Address | 26
| 7 | Function call | EXPR | F
| 8.1 | Payment existence flag \(1/0\) |  | 1
| 8.2 | Payment length \(P\) |  | 2/0 \(depends on byte in 8.1\)
| 8.3 | Payment | Payment \(Long, Option[AssetId]\) | P/0 \(depends on byte in 8.1\)
| 9 | Fee | Long | 8
| 10 | Timestamp | Long | 8
| 11.1 | Proofs version \(1\) |  | 1
| 11.2 | Proofs count |  | 2
| 11.3 | Proof 1 length \(P1\) |  | 2
| 11.4 | Proof 1 | ByteStr \(Array[Byte]\) | P1
| 11.5 | Proof 2 length \(P2\) |  | 2
| 11.6 | Proof 2  | ByteStr \(Array[Byte]\) | P2
| ... | ... | ... | ... |

## Network messages

### Network message structure

All network messages shares the same structure except the Handshake.

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Packet length \(BigEndian\) | Int | 4 |
| 2 | Magic Bytes | Bytes | 4 |
| 3 | Content ID | Byte | 1 |
| 4 | Payload length | Int | 4 |
| 5 | Payload checksum | Bytes | 4 |
| 6 | Payload | Bytes | N |

Magic Bytes are 0x12, 0x34, 0x56, 0x78. Payload checksum is first 4 bytes of\_FastHash\_of Payload bytes. FastHash is hash function Blake2b256\(data\).

### Handshake message

Handshake is used to start communication between two nodes.

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Application name length \(N\) | Byte | 1 |
| 2 | Application name \(UTF-8 encoded bytes\) | Bytes | N |
| 3 | Application version major | Int | 4 |
| 4 | Application version minor | Int | 4 |
| 5 | Application version patch | Int | 4 |
| 6 | Node name length \(M\) | Byte | 1 |
| 7 | Node name \(UTF-8 encoded bytes\) | Bytes | M |
| 8 | Node nonce | Long | 8 |
| 9 | Declared address length \(K\) or 0 if no declared address was set | Int | 4 |
| 10 | Declared address bytes \(if length is not 0\) | Bytes | K |
| 11 | Timestamp | Long | 8 |

### GetPeers message

GetPeers message is sent when sending node wants to know of other nodes on network.

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Packet length \(BigEndian\) | Int | 4 |
| 2 | Magic Bytes | Bytes | 4 |
| 3 | Content ID \(0x01\) | Byte | 1 |
| 4 | Payload length | Int | 4 |
| 5 | Payload checksum | Bytes | 4 |

### Peers message

Peers message is a reply on GetPeers message.

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Packet length \(BigEndian\) | Int | 4 |
| 2 | Magic Bytes | Bytes | 4 |
| 3 | Content ID \(0x02\) | Byte | 1 |
| 4 | Payload length | Int | 4 |
| 5 | Payload checksum | Bytes | 4 |
| 6 | Peers count \(N\) | Int | 4 |
| 7 | Peer \#1 IP address | Bytes | 4 |
| 8 | Peer \#1 port | Int | 4 |
| ... | ... | ... | ... |
| 6 + 2 \* N - 1 | Peer \#N IP address | Bytes | 4 |
| 6 + 2 \* N | Peer \#N port | Int | 4 |

### GetSignatures message

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Packet length \(BigEndian\) | Int | 4 |
| 2 | Magic Bytes | Bytes | 4 |
| 3 | Content ID \(0x14\) | Byte | 1 |
| 4 | Payload length | Int | 4 |
| 5 | Payload checksum | Bytes | 4 |
| 6 | Block IDs count \(N\) | Int | 4 |
| 7 | Block \#1 ID | Bytes | 64 |
| ... | ... | ... | ... |
| 6 + N | Block \#N ID | Bytes | 64 |

### Signatures message

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Packet length \(BigEndian\) | Int | 4 |
| 2 | Magic Bytes | Bytes | 4 |
| 3 | Content ID \(0x15\) | Byte | 1 |
| 4 | Payload length | Int | 4 |
| 5 | Payload checksum | Bytes | 4 |
| 6 | Block signatures count \(N\) | Int | 4 |
| 7 | Block \#1 signature | Bytes | 64 |
| ... | ... | ... | ... |
| 6 + N | Block \#N signature | Bytes | 64 |

### GetBlock message

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Packet length \(BigEndian\) | Int | 4 |
| 2 | Magic Bytes | Bytes | 4 |
| 3 | Content ID \(0x16\) | Byte | 1 |
| 4 | Payload length | Int | 4 |
| 5 | Payload checksum | Bytes | 4 |
| 6 | Block ID | Bytes | 64 |

### Block message

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Packet length \(BigEndian\) | Int | 4 |
| 2 | Magic Bytes | Bytes | 4 |
| 3 | Content ID \(0x17\) | Byte | 1 |
| 4 | Payload length | Int | 4 |
| 5 | Payload checksum | Bytes | 4 |
| 6 | Block bytes \(N\) | Bytes | N |

### Score message

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Packet length \(BigEndian\) | Int | 4 |
| 2 | Magic Bytes | Bytes | 4 |
| 3 | Content ID \(0x18\) | Byte | 1 |
| 4 | Payload length | Int | 4 |
| 5 | Payload checksum | Bytes | 4 |
| 6 | Score \(N bytes\) | BigInt | N |

### Transaction message

| \# | Field name | Type | Length in Bytes |
| :--- | :--- | :--- | :--- |
| 1 | Packet length \(BigEndian\) | Int | 4 |
| 2 | Magic Bytes | Bytes | 4 |
| 3 | Content ID \(0x19\) | Byte | 1 |
| 4 | Payload length | Int | 4 |
| 5 | Payload checksum | Bytes | 4 |
| 6 | Transaction \(N bytes\) | Bytes | N |

### Checkpoint message

| \# | Field name | Type | Length in Bytes |
| --- | --- | --- | --- |
| 1 | Packet length \(BigEndian\) | Int | 4 |
| 2 | Magic Bytes | Bytes | 4 |
| 3 | Content ID \(0x64\) | Byte | 1 |
| 4 | Payload length | Int | 4 |
| 5 | Payload checksum | Bytes | 4 |
| 6 | Checkpoint items count \(N\) | Int | 4 |
| 7 | Checkpoint \#1 height | Long | 8 |
| 8 | Checkpoint \#1 signature | Bytes | 64 |
| ... | ... | ... | ... |
| 6 + 2 \* N - 1 | Checkpoint \#N height | Long | 8 |
| 6 + 2 \* N | Checkpoint \#N signature | Bytes | 64 |
