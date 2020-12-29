# [Ride v5] Verification functions

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/functions/built-in-functions/verification-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| [bn256groth16Verify](#bn256groth16verify) | Range of functions.<br>Check [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) by [groth16](https://eprint.iacr.org/2016/260.pdf) protocol on the bn254 curve | 800–1650 |
| [createMerkleRoot](#createmerkleroot) | Calculates the [Merkle root hash](/en/blockchain/block/merkle-root) for transactions of block | 30 |
| [ecrecover](#ecrecover) | Recovers public key from the message hash and the [ECDSA](https://en.wikipedia.org/wiki/ECDSA) digital signature | 70 |
| [groth16Verify](#groth16verify) | Range of functions.<br>Check [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) by [groth16](https://eprint.iacr.org/2016/260.pdf) protocol on the bls12-381 curve | 1200–2700 |
| [rsaVerify](#rsaverify) | Range of functions.<br>Check that the [RSA](https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29) digital signature is valid | 500–1000 |
| [sigVerify](#sigverify) | Range of functions.<br>Check that the [Curve25519](https://en.wikipedia.org/wiki/Curve25519) digital signature is valid | 47–200 |

## bn256groth16Verify

Range of functions. Check [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) by [groth16](https://eprint.iacr.org/2016/260.pdf) protocol on the bn254 curve. (Although the curve is called bn254 in the scientific literature, it is commonly referred to as bn256 in the code.)

| Name | Max number of inputs | Complexity |
|:---| :--- | :--- |
| bn256groth16Verify(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 16 | 1650 |
| bn256groth16Verify_1inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 1 | 800 |
| bn256groth16Verify_2inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 2 | 850 |
| bn256groth16Verify_3inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 3 | 950 |
| bn256groth16Verify_4inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 4 | 1000 |
| bn256groth16Verify_5inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 5 | 1050 |
| bn256groth16Verify_6inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 6 | 1100 |
| bn256groth16Verify_7inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 7 | 1150 |
| bn256groth16Verify_8inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 8 | 1200 |
| bn256groth16Verify_9inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 9 | 1250 |
| bn256groth16Verify_10inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 10 | 1300 |
| bn256groth16Verify_11inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 11 | 1350 |
| bn256groth16Verify_12inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 12 | 1400 |
| bn256groth16Verify_13inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 13 | 1450 |
| bn256groth16Verify_14inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 14 | 1550 |
| bn256groth16Verify_15inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 15 | 1600 |

### Parameters

| Parameter | Description |
| :--- | :--- |
| `vk`: [ByteVector](/en/ride/v5/data-types/byte-vector) | Key for the check.<br>Maximum size:<br>• For `bn256groth16Verify_<N>inputs` function — 256 + 32 × `N` bytes.<br>• For `bn256groth16Verify` function — 256 + 32 × 16 =768 bytes |
| `proof`: [ByteVector](/en/ride/v5/data-types/byte-vector) | [Zero-knowledge proof](https://en.wikipedia.org/wiki/Zero-knowledge_proof). Fixed size: 128 bytes |
| `inputs`: [ByteVector](/en/ride/v5/data-types/byte-vector) | Zero-knowledge proof's public inputs array. For example, array of UTXO hashes in case of shielded transactions.<br>Maximum size:<br>• For `bn256groth16Verify_<N>inputs` function – 32 × `N` bytes.<br>• For `bn256groth16Verify` function – 512 bytes |

## createMerkleRoot

Calculates the [Merkle root hash](/en/blockchain/block/merkle-root) for transactions of block on the basis of the transaction hash and the sibling hashes of the Merkle tree. [BLAKE2b-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29) algorithm is used for hashing. To check for the  transaction in the block, you need to compare the calculated hash with the `transactionsRoot` field in the block header. For more informtion see the [Transactions Root Hash](/en/blockchain/block/merkle-root).


``` ride
createMerkleRoot(merkleProofs: List[ByteVector], valueBytes: ByteVector, index: Int): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `merkleProofs`: [List](/en/ride/v5/data-types/list)[[ByteVector](/en/ride/v5/data-types/byte-vector)] | Array of sibling hashes of the Merkle tree. Up to 16 items, 32 bytes each |
| `valueBytes`: [ByteVector](/en/ride/v5/data-types/byte-vector) | Hash of transaction. Fixed size: 32 bytes. You can use [blake2b256](/en/ride/v5/functions/built-in-functions/hashing-functions#blake2b256) function. The transaction must be hashed together with the signature |
| `index`: [Int](/en/ride/v5/data-types/int) | Index of the transaction in the block |

## ecrecover

Recovers public key from the message hash and the [ECDSA](https://en.wikipedia.org/wiki/ECDSA) digital signature based on the secp256k1 elliptic curve. Fails if the recovery failed.

The public key is returned in uncompressed format (64 bytes).

The function can be used to verify the digital signature of a message by comparing the recovered public key with the sender’s key.


``` ride
ecrecover(messageHash: ByteVector, signature: ByteVector): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `messageHash`: [ByteVector](/en/ride/v5/data-types/byte-vector) | Keccak-256 hash of the message.  Fixed size: 32 bytes |
| `signature`: [ByteVector](/en/ride/v5/data-types/byte-vector) | ECDSA digital signature. Fixed size: 65 bytes |

### Example

Verify the transaction of the Ethereum blockchain using the following data:

* the transaction;
* the signature that is generated by the [ecsign](https://github.com/ethereumjs/ethereumjs-util/blob/master/docs/modules/_signature_.md#const-ecsign) functions (`r`, `s`, and `v` bytes concatenation);
* sender public key.

```
func check(t: ByteVector, signature: ByteVector, publicKey: ByteVector) = {
   ecrecover(keccak256(t), signature) == publicKey
}
```

## groth16Verify

Range of functions. Check [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) by [groth16](https://eprint.iacr.org/2016/260.pdf) protocol.

| Name | Max number of inputs | Complexity |
|:---| :--- | :--- |
| groth16Verify(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 16 | 2700 |
| groth16Verify_1inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 1 | 1200 |
| groth16Verify_2inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 2 | 1300 |
| groth16Verify_3inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 3 | 1400 |
| groth16Verify_4inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 4 | 1500 |
| groth16Verify_5inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 5 | 1600 |
| groth16Verify_6inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 6 | 1700 |
| groth16Verify_7inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 7 | 1800 |
| groth16Verify_8inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 8 | 1900 |
| groth16Verify_9inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 9 | 2000 |
| groth16Verify_10inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 10 | 2100 |
| groth16Verify_11inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 11 | 2200 |
| groth16Verify_12inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 12 | 2300 |
| groth16Verify_13inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 13 | 2400 |
| groth16Verify_14inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 14 | 2500 |
| groth16Verify_15inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 15 | 2600 |

### Parameters

| Parameter | Description |
| :--- | :--- |
| `vk`: [ByteVector](/en/ride/v5/data-types/byte-vector) | Key for the check.<br>Maximum size:<br>• For `groth16Verify_<N>inputs` function — 384 + 48 × `N` bytes.<br>• For `groth16Verify` function — 384 + 48 × 16 =1152 bytes |
| `proof`: [ByteVector](/en/ride/v5/data-types/byte-vector) | [Zero-knowledge proof](https://en.wikipedia.org/wiki/Zero-knowledge_proof). Fixed size: 192 bytes |
| `inputs`: [ByteVector](/en/ride/v5/data-types/byte-vector) | Zero-knowledge proof's public inputs array.<br>Maximum size:<br>• For `groth16Verify_<N>inputs` function – 32 × `N` bytes.<br>• For `groth16Verify` function – 512 bytes |

### Example

```
groth16Verify(vk, proof, inputs)
```

## rsaVerify

Range of functions. Check that the [RSA](https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29) digital signature is valid, i.e. it was created by the owner of the public key.

| Name | Max `message` size | Complexity |
|:---| :--- | :--- |
| rsaVerify(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean | 150 kB | 1000 |
| rsaVerify_16Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean | 16 kB | 500 |
| rsaVerify_32Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean | 32 kB | 550 |
| rsaVerify_64Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean | 64 kB | 625 |
| rsaVerify_128Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean | 128 kB | 750 |

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

### Parameters

| Parameter | Description |
| :--- | :--- |
| `digest`: digestAlgorithmType | The hashing algorithm applied to the data before signing. Acceptable values:<br>• `NOALG` — data is not hashed.<br>• `MD5`<br>• SHA1<br>• `SHA224`<br>• `SHA256`<br>• `SHA384`<br>• `SHA512`<br>•  `SHA3224` <br>• `SHA3256`<br>• `SHA3384`<br>• `SHA3512` |
| `message`: [ByteVector](/en/ride/v5/data-types/byte-vector) | Signed data.<br>Maximum size:<br>• For `rsaVerify_<N>Kb` functions – `N` kB.<br>• For `rsaVerify` function — 150 kB. |
| `sig`: [ByteVector](/en/ride/v5/data-types/byte-vector) | Digital signature. Fixed size: 25 bytes |
| `pub`: [ByteVector](/en/ride/v5/data-types/byte-vector) | Binary public key. Fixed size: 294 bytes |

## sigVerify

Range of functions. Check that the [Curve25519](https://en.wikipedia.org/wiki/Curve25519) digital signature is valid, i.e. it was created by the owner of the public key.

| Name | Max `message` size | Complexity |
|:---| :--- | :--- |
| sigVerify(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean |150 kB | 200 |
| sigVerify_8Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean | 8 kB | 47 |
| sigVerify_16Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean | 16 kB | 57 |
| sigVerify_32Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean | 32 kB | 70 |
| sigVerify_64Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean | 64 kB | 102 |
| sigVerify_128Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean | 128 kB | 172 |

### Parameters

| Parameter | Description |
| :--- | :--- |
| `message`: [ByteVector](/en/ride/v5/data-types/byte-vector) | Signed data.<br>Maximum size:<br>• For `rsaVerify_<N>Kb` functions – `N` kB.<br>• For `rsaVerify` function — 150 kB. |
| `sig`: [ByteVector](/en/ride/v5/data-types/byte-vector) | Digital signature. Fixed size: 25 bytes |
| `pub`: [ByteVector](/en/ride/v5/data-types/byte-vector) | Binary public key. Fixed size: 294 bytes |
