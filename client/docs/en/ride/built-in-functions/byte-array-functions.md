# Byte array functions

|#|Name | Description | Complexity |
|:---| :--- | :--- | :--- |
|1| [drop(ByteVector, Int): ByteVector](#drop) | Drops the first `n` bytes of an array of bytes | 1 |
|2| [dropRight(ByteVector, Int): ByteVector](#drop-right) | Drops the last `n` bytes of an array of bytes | 19 |
|3| [size(ByteVector): Int](#size) | Returns the size of an array of bytes | 1 |
|4| [take(ByteVector, Int): ByteVector](#take) | Takes the first `n` bytes from an array of bytes | 1 |
|5| [takeRight(ByteVector, Int): ByteVector](#take-right) | Takes the last `n` bytes from an array of bytes | 19 |

## drop(ByteVector, Int): ByteVector<a id="drop"></a>

Drops the first `n` bytes of an array of bytes.

``` ride
drop(xs: ByteVector, number: Int): ByteVector
```

### Parameters

#### `xs`: ByteVector

The array of bytes.

#### `number`: Int

The number `n`.

## dropRight(ByteVector, Int): ByteVector<a id="drop-right"></a>

Drops the last `n` bytes of an array of bytes.

``` ride
dropRight(xs: ByteVector, number: Int): ByteVector
```

### Parameters

#### `xs`: ByteVector

The array of bytes.

#### `number`: Int

The number `n`.

## size(ByteVector): Int<a id="size"></a>

Returns the size of an array of bytes.

``` ride
size(byteVector: ByteVector): Int
```

### Parameters

#### `byteVector`: ByteVector

The array of bytes.

## take(ByteVector, Int): ByteVector<a id="take"></a>

Takes the first `n` bytes from an array of bytes.

``` ride
take(xs: ByteVector, number: Int): ByteVector
```

### Parameters

#### `xs`: ByteVector

The array of bytes.

#### `number`: Int

The number `n`.

## takeRight(ByteVector, Int): ByteVector<a id="take-right"></a>

Takes the last `n` bytes from an array of bytes.

``` ride
takeRight(xs: ByteVector, number: Int): ByteVector
```

### Parameters

#### `xs`: ByteVector

The array of bytes.

#### `number`: Int

The number `n`.
