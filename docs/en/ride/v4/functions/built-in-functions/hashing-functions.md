# [Ride v4 and v3] Hashing functions

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/functions/built-in-functions/hashing-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| [blake2b256](#blake2b256) | Range of functions.<br>Hash an array of bytes using [BLAKE2b-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29) | 10 for [Standard Library](/en/ride/script/standard-library) **version 3**<br>10–200 for Standard Library **version 4** |
| [keccak256](#keccak256) | Range of functions.<br>Hash an array of bytes using [Keccak-256](https://keccak.team/files/Keccak-submission-3.pdf) | 10 for [Standard Library](/en/ride/script/standard-library) **version 3**<br>10–200 for Standard Library **version 4** |
| [sha256](#sha256) | Range of functions.<br>Hash an array of bytes using [SHA-256](https://en.wikipedia.org/wiki/SHA-2) | 10 for [Standard Library](/en/ride/script/standard-library) **version 3**<br>10–200 for Standard Library **version 4** |

## blake2b256

Range of functions that hash an array of bytes using [BLAKE2b-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29).

| Name | Max data size | Complexity |
|:---| :--- | :--- |
| blake2b256(bytes: ByteVector): ByteVector | 150 kB | 10 for [Standard Library](/en/ride/script/standard-library) **version 3**<br>200 for Standard Library **version 4** |
| blake2b256_16Kb(bytes: ByteVector): ByteVector | 16 kB | 10 |
| blake2b256_32Kb(bytes: ByteVector): ByteVector | 32 kB | 25 |
| blake2b256_64Kb(bytes: ByteVector): ByteVector | 64 kB | 50 |
| blake2b256_128Kb(bytes: ByteVector): ByteVector | 128 kB | 100 |

> :warning: The `blake2b256_16Kb`, `blake2b256_32Kb`, `blake2b256_64Kb`, `blake2b256_128Kb` functions are added in [Standard library](/en/ride/script/standard-library) **version 4**.

### Parameters

| Parameter | Description |
| :--- | :--- |
| `bytes`: [ByteVector](/en/ride/data-types/byte-vector) | The array of bytes to encode.<br>Maximum size:<br>• For `blake2b256_<N>Kb` functions — `N` kB.<br>• For `blake2b256` function — 150 kB. |

### Examples

```ride
blake2b256("Ride".toBytes())        # Returns 6NSWRz5XthhFVm9uVQHuisdaseQJfc4WMGajN435v3f4
blake2b256(125.toBytes())            # Returns H9emWhyMuyyjDmNkgx7jAfHRuy9icXK3uYJuVw6R1uuK
blake2b256(base16'52696465')   # Returns 6NSWRz5XthhFVm9uVQHuisdaseQJfc4WMGajN435v3f4
blake2b256(base58'37BPKA')       # Returns 6NSWRz5XthhFVm9uVQHuisdaseQJfc4WMGajN435v3f4
blake2b256(base64'UmlkZQ==')  # Returns 6NSWRz5XthhFVm9uVQHuisdaseQJfc4WMGajN435v3f4
```

## keccak256

Range of functions that hash an array of bytes using [Keccak-256](https://keccak.team/files/Keccak-submission-3.pdf).

| Name | Max data size | Complexity |
|:---| :--- | :--- |
| keccak256(bytes: ByteVector): ByteVector | 150 kB | 10 for [Standard Library](/en/ride/script/standard-library) **version 3**<br>200 for Standard Library **version 4** |
| keccak256_16Kb(bytes: ByteVector): ByteVector | 16 kB | 10 |
| keccak256_32Kb(bytes: ByteVector): ByteVector | 32 kB | 25 |
| keccak256_64Kb(bytes: ByteVector): ByteVector | 64 kB | 50 |
| keccak256_128Kb(bytes: ByteVector): ByteVector | 128 kB | 100 |

> :warning: The `keccak256_16Kb`, `keccak256_32Kb`, `keccak256_64Kb`, `keccak256_128Kb` functions are added in [Standard library](/en/ride/script/standard-library) **version 4**.

### Parameters

| Parameter | Description |
| :--- | :--- |
| `bytes`: [ByteVector](/en/ride/data-types/byte-vector) | The array of bytes to encode.<br>Maximum size:<br>• For `keccak256_<N>Kb` functions — `N` kB.<br>• For `keccak256` function — 150 kB. |

### Examples

```ride
keccak256("Ride".toBytes())        # Returns 4qa5wNk4961VwJAjCKBzXiEvBQ2gBJoqDcLFRJTiSKpv
keccak256(125.toBytes())            # Returns 5UUkcH6Fp2E3mk7NSqSTs3JBP33zL3SB3yg4b2sR5gpF
keccak256(base16'52696465')   # Returns 4qa5wNk4961VwJAjCKBzXiEvBQ2gBJoqDcLFRJTiSKpv
keccak256(base58'37BPKA')       # Returns 4qa5wNk4961VwJAjCKBzXiEvBQ2gBJoqDcLFRJTiSKpv
keccak256(base64'UmlkZQ==')  # Returns 4qa5wNk4961VwJAjCKBzXiEvBQ2gBJoqDcLFRJTiSKpv
```

## sha256

Range of functions that hash an array of bytes using [SHA-256](https://en.wikipedia.org/wiki/SHA-2)

| Name | Max data size | Complexity |
|:---| :--- | :--- |
| sha256(bytes: ByteVector): ByteVector | 150 kB | 10 for [Standard Library](/en/ride/script/standard-library) **version 3**<br>200 for Standard Library **version 4** |
| sha256_16Kb(bytes: ByteVector): ByteVector | 16 kB | 10 |
| sha256_32Kb(bytes: ByteVector): ByteVector | 32 kB | 25 |
| sha256_64Kb(bytes: ByteVector): ByteVector | 64 kB | 50 |
| sha256_128Kb(bytes: ByteVector): ByteVector | 128 kB | 100 |

> :warning: The `sha256_16Kb`, `sha256_32Kb`, `sha256_64Kb`, `sha256_128Kb` functions are added in [Standard library](/en/ride/script/standard-library) **version 4**.

### Parameters

| Parameter | Description |
| :--- | :--- |
| `bytes`: [ByteVector](/en/ride/data-types/byte-vector) | The array of bytes to encode.<br>Maximum size:<br>• For `sha256_<N>Kb` functions — `N` kB.<br>• For `sha256` function — 150 kB. |

### Examples

```ride
sha256("Ride".toBytes())        # Returns 5YxvrKsjJtq4G325gRVxbXpkox1sWdHUGVJLnRFqTWD3
sha256(125.toBytes())            # Returns A56kbJjy7A4B9Pa5tUgRNvtCHSsZ7pZVJuPsLT2vtPSU
sha256(base16'52696465')   # Returns 5YxvrKsjJtq4G325gRVxbXpkox1sWdHUGVJLnRFqTWD3
sha256(base58'37BPKA')       # Returns 5YxvrKsjJtq4G325gRVxbXpkox1sWdHUGVJLnRFqTWD3
sha256(base64'UmlkZQ==')  # Returns 5YxvrKsjJtq4G325gRVxbXpkox1sWdHUGVJLnRFqTWD3
```
