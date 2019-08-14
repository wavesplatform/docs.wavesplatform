# Verification functions

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | [checkMerkleProof(ByteVector, ByteVector, ByteVector): Boolean](#check-merkle-proof) | Verifies if a tree of hashes is part of the [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree) | 30 |
| 2 | [isDefined(List[T]&#124;Unit): Boolean](#is-defined) | Checks if a value is not `Unit` | 1 |
| 3 | [rsaVerify(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean](#rsa-verify) | Verifies an [RSA](https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29) signature | 100 |
| 4 | [sigVerify(ByteVector, ByteVector, ByteVector): Boolean](#sig-verify) | Verifies a [Curve25519](https://en.wikipedia.org/wiki/Curve25519) signature | 100 |

## checkMerkleProof(ByteVector, ByteVector, ByteVector): Boolean<a id="check-merkle-proof"></a>

Verifies if a tree of hashes is part of the [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree).

``` ride
checkMerkleProof(merkleRoot: ByteVector, merkleProof: ByteVector, valueBytes: ByteVector): Boolean
```

### Parameters

#### merkleRoot: ByteVector

The root hash of the Merkle tree.

#### merkleProof: ByteVector

The array of bytes of the Merkle tree proof.

#### valueBytes: ByteVector

The tree of hashes.

## isDefined(List[T]|Unit): Boolean<a id="is-defined"></a>

Checks if a value is not `Unit`.

``` ride
isDefined(a: List[T]|Unit): Boolean
```

### Parameters

#### `a`: List[T]|Unit

The argument.

## rsaVerify(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean<a id="rsa-verify"></a>

Verifies an [RSA](https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29) signature.

``` ride
rsaVerify(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
```

### Parameters

#### `digest`: digestAlgorithmType

The RSA algorithm.

#### `message`: ByteVector

The message.

#### `sig`: ByteVectore

The signature.

#### `pub`: ByteVectore

The public key.

## sigVerify(ByteVector, ByteVector, ByteVector): Boolean<a id="sig-verify"></a>

Verifies a [Curve25519](https://en.wikipedia.org/wiki/Curve25519) signature.

``` ride
sigVerify(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
```

### Parameters

#### `message`: ByteVector

The message.

#### `sig`: ByteVectore

The signature.

#### `pub`: ByteVectore

The account public key.
