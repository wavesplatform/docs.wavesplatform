# [Ride v5] BigInt

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only.

`BigInt` is a special numeric [data type](/en/ride/v5/data-types/) designed to handle values outside the range of [Int](/en/ride/v5/data-types/int) and to perform high accuracy calculations.

`BigInt` variable has a size of 64 bytes (512 bits) and contains an integer between –2<sup>511</sup> to 2<sup>511</sup>–1, inclusive. The weight of the value is 64.

:warning: A `BigInt` variable can only be used inside a script. A [callable function](/en/ride/v5/functions/callable-function) **does not accept** arguments of `BigInt` type and **does not return** a value of `BigInt` type. You can pass a big integer value as a string, then use the `parseBigInt` or `parseBigIntValue` functions.

## BigInt Operations

The following operators support `BigInt` values:

* Arithmetic operators: **+**, **-**, **\***, **/**, and **%**.
* Comparison operators: **\<**, **\>**, **\<=**, and **\>=**.
* Equality operators: **==** and **!=**.

Both operands should be `BigInt`.

The following functions operate `BinInt` values:

* [fractionBigInt(BigInt, BigInt, BigInt): BigInt](/en/ride/v5/functions/built-in-functions/math-functions#fractionbigint)
* [fractionBigInt(BigInt, BigInt, BigInt, Union): BigInt](/en/ride/v5/functions/built-in-functions/math-functions#fractionbigintround)
* [logBigInt(BigInt, Int, BigInt, Int, Int, Union): BigInt](/en/ride/v5/functions/built-in-functions/math-functions#logbigint)
* [maxBigInt(List[BigInt]): BigInt](/en/ride/v5/functions/built-in-functions/list-functions#maxbigint)
* [medianBigInt(List[BigInt]): BigInt](/en/ride/v5/functions/built-in-functions/math-functions#medianbigint)
* [minBigInt(List[BigInt]): BigInt](/en/ride/v5/functions/built-in-functions/list-functions#minbigint)
* [powBigInt(BigInt, Int, BigInt, Int, Int, Union): BigInt](/en/ride/v5/functions/built-in-functions/math-functions#powbigint)
* [parseBigInt(String): BigInt|Unit](/en/ride/v5/functions/built-in-functions/converting-functions#parse-bigint)
* [parseBigIntValue(String): BigInt](/en/ride/v5/functions/built-in-functions/converting-functions#parse-bigintvalue)
* [toBigInt(ByteVector): BigInt](/en/ride/v5/functions/built-in-functions/converting-functions#to-bigint-bytevector)
* [toBigInt(ByteVector, Int, Int): BigInt](/en/ride/v5/functions/built-in-functions/converting-functions#to-bigint-bytevector-int-int)
* [toBigInt(Int): BigInt](/en/ride/v5/functions/built-in-functions/converting-functions#to-bigint-int)
* [toBytesBigInt(BigInt): ByteVector](/en/ride/v5/functions/built-in-functions/converting-functions#to-bytes-bigint)
* [toInt(BigInt): Int](/en/ride/v5/functions/built-in-functions/converting-functions#to-int-bigint)
* [toStringBigInt(BigInt): String](/en/ride/v5/functions/built-in-functions/converting-functions#to-string-bigint)
