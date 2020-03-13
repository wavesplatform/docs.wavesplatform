# Verification functions

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | [checkMerkleProof](#checkmerkleproof)(ByteVector, ByteVector, ByteVector): Boolean | Checks that the data is part of the [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree) | 30 |
| 2 | [groth16Verify](#groth16verify)(ByteVector, ByteVector, ByteVector): Boolean | Checks [snark](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) by [groth16](https://eprint.iacr.org/2016/260.pdf) protocol | 3900 |
| 3 | groth16Verify_1inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum of 1 input) | 1900 |
| 4 | groth16Verify_2inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum of 2 inputs) | 2000 |
| 5 | groth16Verify_3inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum of 3 inputs) | 2150 |
| 6 | groth16Verify_4inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum of 4 inputs) | 2300 |
| 7 | groth16Verify_5inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum of 5 inputs) | 2450 |
| 8 | groth16Verify_6inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum of 6 inputs) | 2550 |
| 9 | groth16Verify_7inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum of 7 inputs) | 2700 |
| 10 | groth16Verify_8inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum of 8 inputs) | 2900 |
| 11 | groth16Verify_9inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum of 9 inputs) | 3000 |
| 12 | groth16Verify_10inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum of 10 inputs) | 3150 |
| 13 | groth16Verify_11inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum of 11 inputs) | 3250 |
| 14 | groth16Verify_12inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum of 12 inputs) | 3400 |
| 15 | groth16Verify_13inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum of 13 inputs) | 3500 |
| 16 | groth16Verify_14inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum of 14 inputs) | 3650 |
| 17 | groth16Verify_15inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum of 15 inputs) | 3750 |
| 18 | [rsaVerify](#rsaverify)(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | Checks that the [RSA](https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29) digital signature is valid, i.e. it was created by the owner of the public key | 1000 for [Standard Library](/en/ride/script/standard-library) **version 4**<br>300 for Standard Library **version 3**|
| 19 | rsaVerify_16Kb(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 16 kB) | 500 |
| 20 | rsaVerify_32Kb(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 32 kB) | 550 |
| 21 | rsaVerify_64Kb(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 64 kB) | 625 |
| 22 | rsaVerify_128Kb(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 128 kB) | 750 |
| 23 | [sigVerify](#sigverify)(ByteVector, ByteVector, ByteVector): Boolean | Checks that the [Curve25519](https://en.wikipedia.org/wiki/Curve25519) digital signature is valid, i.e. it was created by the owner of the public key | 200 for [Standard Library](/en/ride/script/standard-library) **version 4**<br>100 for Standard Library **version 3** |
| 24 | sigVerify_16Kb(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 16 kB) | 100 |
| 25 | sigVerify_32Kb(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 32 kB) | 110 |
| 26 | sigVerify_64Kb(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 64 kB) | 125 |
| 27 | sigVerify_128Kb(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (maximum data size of 128 kB) | 150 |

## checkMerkleProof

Checks that the data is part of the [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree).

[BLAKE2b](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29) hashing function is used to hash the [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree).

``` ride
checkMerkleProof(merkleRoot: ByteVector, merkleProof: ByteVector, valueBytes: ByteVector): Boolean
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| merkleRoot: ByteVector | Root hash of the Merkle tree |
| merkleProof: ByteVector | Array of hashes |
| valueBytes: ByteVector | Data to check |

## groth16Verify

Checks [snark](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) by [groth16](https://eprint.iacr.org/2016/260.pdf) protocol.

> :warning: The `groth16verify` range of functions is introduced in [Standard Library](/en/ride/script/standard-library) **version 4** that is currenlty available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

```
groth16Verify(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_1inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_2inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_3inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_4inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_5inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_6inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_7inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_8inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_9inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_10inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_11inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_12inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_13inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_14inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_15inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `vk`: ByteVector | Key for the check.<br>Maximum size:<br>• For `groth16Verify_<N>inputs` function — 384 + 48 × `N` bytes.<br>• For `groth16Verify` function — 384 + 48 × 16 =1152 bytes |
| `proof`: ByteVector | [Zero-knowledge proof](https://en.wikipedia.org/wiki/Zero-knowledge_proof). Fixed size: 192 bytes |
| `inputs`: ByteVector | Zero-knowledge proof's public inputs array.<br>Maximum size:<br>• For `groth16Verify_<N>inputs` function – 32 × `N` bytes.<br>• For `groth16Verify` function – 512 bytes |

### Example

```
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
 
groth16Verify(vk, proof, inputs)
```

## rsaVerify

Checks that the [RSA](https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29) digital signature is valid, i.e. it was created by the owner of the public key.

> :warning: The `rsaVerify_16Kb`, `rsaVerify_32Kb`, `rsaVerify_64Kb`, `rsaVerify_128Kb` functions are introduced in [Standard Library](/en/ride/script/standard-library) **version 4** that is currenlty available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

The recommended RSA key module length is at least 2048 bits.

Data can be hashed before signing using one of the following algorithms:

* MD5
* SHA-1
* SHA-224
* SHA-256
* SHA-384
* SHA-512
* SHA3-224
* SHA3-256
* SHA3-384
* SHA3-512

> :warning: MD5 and SHA-1 are outdated algorithms for which collisions were found. They are for backward compatibility only. The app developer is responsible for selecting a secure hashing algorithm.

``` ride
rsaVerify(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
rsaVerify_16Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
rsaVerify_32Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
rsaVerify_64Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
rsaVerify_128Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `digest`: digestAlgorithmType | The hashing algorithm applied to the data before signing. Acceptable values:<br>• `NOALG` — data is not hashed.<br>• `MD5`<br>• SHA1<br>• `SHA224`<br>• `SHA256`<br>• `SHA384`<br>• `SHA512`<br>•  `SHA3224` <br>• `SHA3256`<br>• `SHA3384`<br>• `SHA3512` |
| `message`: ByteVector | Signed data.<br>Maximum size:<br>• For `rsaVerify_<N>Kbytes`functions – `N` kB.<br>• For `rsaVerify` function — 150 kB. |
| `sig`: ByteVector | Digital signature. Fixed size: 25 bytes |
| `pub`: ByteVector | Binary public key. Fixed size: 294 bytes |

## sigVerify

Checks that the [Curve25519](https://en.wikipedia.org/wiki/Curve25519) digital signature is valid, i.e. it was created by the owner of the public key.

> :warning: The `sigVerify_16Kb`, `sigVerify_32Kb`, `sigVerify_64Kb`, `sigVerify_128Kb` functions are introduced in [Standard Library](/en/ride/script/standard-library) **version 4** that is currenlty available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

``` ride
sigVerify(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
sigVerify_16Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
sigVerify_32Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
sigVerify_64Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
sigVerify_128Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `message`: ByteVector | Signed data.<br>Maximum size:<br>• For `rsaVerify_<N>Kbytes`functions – `N` kB.<br>• For `rsaVerify` function — 150 kB. |
| `sig`: ByteVector | Digital signature. Fixed size: 25 bytes |
| `pub`: ByteVector | Binary public key. Fixed size: 294 bytes |
