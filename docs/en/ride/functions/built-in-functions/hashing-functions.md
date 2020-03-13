# Hashing functions

|#| Name | Description | Complexity |
|:---| :--- | :--- | :--- |
| 1 | [blake2b256](#blake2b256)(ByteVector): ByteVector | Hashes an array of bytes using [BLAKE-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29) | 200 for [Standard Library](/en/ride/script/standard-library) **version 4**<br>10 for Standard Library **version 3** |
| 2 | blake2b256_16Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 16 kB) | 10 |
| 3 | blake2b256_32Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 32 kB) | 25 |
| 4 | blake2b256_64Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 64 kB) | 50 |
| 5 | blake2b256_128Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 128 Кбайт) | 100 |
| 6 | [keccak256](#keccak256)(ByteVector): ByteVector | Hashes an array of bytes using [SHA-3-256](https://en.wikipedia.org/wiki/SHA-3) | 200 for [Standard Library](/en/ride/script/standard-library) **version 4**<br>10 for Standard Library **version 3** |
| 7 | keccak256_16Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 16 kB) | 10 |
| 8 | keccak256_32Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 32 kB) | 25 |
| 9 | keccak256_64Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 64 kB) | 50 |
| 10 | keccak256_128Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 128 kB) | 100 |
| 11 | [sha256](#sha256)(ByteVector): ByteVector | Hashes an array of bytes using [SHA-256](https://en.wikipedia.org/wiki/SHA-2) | 200 for [Standard Library](/en/ride/script/standard-library) **version 4**<br>10 for Standard Library **version 3** |
| 12 | sha256_16Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 16 kB) | 10 |
| 13 | sha256_32Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 32 kB) | 25 |
| 14 | sha256_64Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 64 kB) | 50 |
| 15 | sha256_128Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 128 kB) | 100 |

## blake2b256

[blake2b256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29) hash function.

> :warning: The `blake2b256_16Kb`, `blake2b256_32Kb`, `blake2b256_64Kb`, `blake2b256_128Kb` functions are introduced in [Standard Library](/en/ride/script/standard-library) **version 4** that is currenlty available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

``` ride
blake2b256(bytes: ByteVector): ByteVector
blake2b256_16Kb(bytes: ByteVector): ByteVector
blake2b256_32Kb(bytes: ByteVector): ByteVector
blake2b256_64Kb(bytes: ByteVector): ByteVector
blake2b256_128Kb(bytes: ByteVector): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `bytes`: ByteVector | The array of bytes to encode.<br>Maximum size:<br>• For `blake2b256_<N>Kbytes` functions — `N` kB.<br>• For `blake2b256` function — 150 kB. |

### Examples

```ride
blake2b256("Ride".toBytes())        # Returns 6NSWRz5XthhFVm9uVQHuisdaseQJfc4WMGajN435v3f4
blake2b256(125.toBytes())            # Returns H9emWhyMuyyjDmNkgx7jAfHRuy9icXK3uYJuVw6R1uuK
blake2b256(base16'52696465')   # Returns 6NSWRz5XthhFVm9uVQHuisdaseQJfc4WMGajN435v3f4
blake2b256(base58'37BPKA')       # Returns 6NSWRz5XthhFVm9uVQHuisdaseQJfc4WMGajN435v3f4
blake2b256(base64'UmlkZQ==')  # Returns 6NSWRz5XthhFVm9uVQHuisdaseQJfc4WMGajN435v3f4
```

## keccak256

[SHA-3-256](https://en.wikipedia.org/wiki/SHA-3) hash function.

> :warning: The `keccak256_16Kb`, `keccak256_32Kb`, `keccak256_64Kb`, `keccak256_128Kb` functions are introduced in [Standard Library](/en/ride/script/standard-library) **version 4** that is currenlty available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

```
keccak256(bytes: ByteVector): ByteVector
keccak256_16Kb(bytes: ByteVector): ByteVector
keccak256_32Kb(bytes: ByteVector): ByteVector
keccak256_64Kb(bytes: ByteVector): ByteVector
keccak256_128Kb(bytes: ByteVector): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `bytes`: ByteVector | The array of bytes to encode.<br>Maximum size:<br>• For `keccak256_<N>Kbytes` functions — `N` kB.<br>• For `keccak256` function — 150 kB. |

### Examples

```ride
keccak256("Ride".toBytes())        # Returns 4qa5wNk4961VwJAjCKBzXiEvBQ2gBJoqDcLFRJTiSKpv
keccak256(125.toBytes())            # Returns 5UUkcH6Fp2E3mk7NSqSTs3JBP33zL3SB3yg4b2sR5gpF
keccak256(base16'52696465')   # Returns 4qa5wNk4961VwJAjCKBzXiEvBQ2gBJoqDcLFRJTiSKpv
keccak256(base58'37BPKA')       # Returns 4qa5wNk4961VwJAjCKBzXiEvBQ2gBJoqDcLFRJTiSKpv
keccak256(base64'UmlkZQ==')  # Returns 4qa5wNk4961VwJAjCKBzXiEvBQ2gBJoqDcLFRJTiSKpv
```

## sha256

[SHA-256](https://en.wikipedia.org/wiki/SHA-2) hash function.

> :warning: The `sha256_16Kb`, `sha256_32Kb`, `sha256_64Kb`, `sha256_128Kb` functions are introduced in [Standard Library](/en/ride/script/standard-library) **version 4** that is currenlty available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

```
sha256(bytes: ByteVector): ByteVector
sha256_16Kb(bytes: ByteVector): ByteVector
sha256_32Kb(bytes: ByteVector): ByteVector
sha256_64Kb(bytes: ByteVector): ByteVector
sha256_128Kb(bytes: ByteVector): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `bytes`: ByteVector | The array of bytes to encode.<br>Maximum size:<br>• For `sha256_<N>Kbytes` functions — `N` kB.<br>• For `sha256` function — 150 kB. |

### Examples

```ride
sha256("Ride".toBytes())        # Returns 5YxvrKsjJtq4G325gRVxbXpkox1sWdHUGVJLnRFqTWD3
sha256(125.toBytes())            # Returns A56kbJjy7A4B9Pa5tUgRNvtCHSsZ7pZVJuPsLT2vtPSU
sha256(base16'52696465')   # Returns 5YxvrKsjJtq4G325gRVxbXpkox1sWdHUGVJLnRFqTWD3
sha256(base58'37BPKA')       # Returns 5YxvrKsjJtq4G325gRVxbXpkox1sWdHUGVJLnRFqTWD3
sha256(base64'UmlkZQ==')  # Returns 5YxvrKsjJtq4G325gRVxbXpkox1sWdHUGVJLnRFqTWD3
```
