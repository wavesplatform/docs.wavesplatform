# [Ride v5] List functions

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/functions/built-in-functions/list-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| [cons(A, List[B]): List[A&#124;B]](#cons-a-list-b-list-a-b) | Inserts element to the beginning of the [list](/en/ride/v5/data-types/list) | 1 |
| [containsElement(List[T], T): Boolean](#containselement-list-t-t-boolean) | Check if the element is in the list | 5 |
| [getElement(List[T], Int): T](#getelement-list-t-int-t) | Gets the element from the list | 2 |
| [indexOf(List[T], T): Int&#124;Unit](#indexof-list-t-t-int-unit) | Returns the index of the first occurrence of the element in the list | 5 |
| [lastIndexOf(List[T], T): Int&#124;Unit](#lastindexof-list-t-t-int-unit)  | Returns the index of the last occurrence of the element in the list | 5 |
| [max(List[Int]): Int](#max-list-int-int)  | Returns the largest element in the list of integers | 3 |
| [max(List[BigInt]): BigInt](#max-list-bigint-bigint) | Returns the largest element in the list of [big integers](/en/ride/v5/data-types/bigint) | 192 |
| [min(List[Int]): Int](#min-list-int-int)  | Returns the smallest element in the list of integers | 3 |
| [min(List[BigInt]): BigInt](#min-list-bigint-bigint) | Returns the smallest element in the list of big integers | 192 |
| [removeByIndex(List[T], Int): List[T]](#removebyindex-list-t-int-list-t) | Removes an element from the list by index | 7 |
| [size(List[T]): Int](#size-list-t-int) | Returns the size of the list | 2 |

`A`, `B`, `T` means any valid type.

## cons(A, List[B]): List[A|B]

Inserts element to the beginning of the [list](/en/ride/v5/data-types/list).

``` ride
cons(head:T, tail: List[T]): List[T]
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `head`: T | Element |
| `tail`: [List[T]](/en/ride/v5/data-types/list) | List |

### Examples

```ride
cons("Ride", ["on", "Waves"]) # Returns ["Ride", "on", "Waves"]
cons(1, [2, 3, 4, 5]) # Returns [1, 2, 3, 4, 5]
```

## containsElement(List[T], T): Boolean

Check if the element is in the list.

```ride
containsElement(list: List[T], element: T): Boolean
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `list`: [List[T]](/en/ride/v5/data-types/list) | List |
| `element`: T | Element to search for |

## getElement(List[T], Int): T

Gets the element from the [list](/en/ride/v5/data-types/list) by index.

``` ride
getElement(arr: List[T], pos: Int): T
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `arr`: [List[T]](/en/ride/v5/data-types/list) | List |
| `pos`: Int | Index of the element |

### Examples

```ride
getElement(["Ride", "on", "Waves"], 0)  # Returns "Ride"
getElement([false, true], 1) # Returns true
```

## indexOf(List[T], T): Int|Unit

Returns the index of the first occurrence of the element in the list or `unit` if the element is missing.

``` ride
indexOf(list: List[T], element: T): Int|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `list`: [List[T]](/en/ride/v5/data-types/list) | List |
| `element`: T | Element to locate |

### Example

```ride
let stringList = ["a","b","a","c"]
indexOf("a", stringList) # Returns 0
```

## lastIndexOf(List[T], T): Int|Unit

Returns the index of the last occurrence of the element in the list or `unit` if the element is missing.

``` ride
lastIndexOf(list: List[T], element: T): Int|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `list`: [List[T]](/en/ride/v5/data-types/list) | List |
| `element`: T | Element to locate |

### Example

```ride
let stringList = ["a","b","a","c"]
lastIndexOf("a", stringList) # Returns 2
```

## max(List[Int]): Int

Returns the largest element in the list of integers. Fails if the list is empty.

``` ride
max(List[Int]): Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `list`: [List](/en/ride/v5/data-types/list)[[Int](/en/ride/v5/data-types/int)] | List |

## max(List[BigInt]): BigInt

Returns the largest element in the list of [big integers](/en/ride/v5/data-types/bigint). Fails if the list is empty.

``` ride
max(List[BigInt]): BigInt
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `list`: [List](/en/ride/v5/data-types/list)[[BigInt](/en/ride/v5/data-types/bigint)] | List |

## min(List[Int]): Int

Returns the smallest element in the list of integers. Fails if the list is empty.

``` ride
min(List[Int]): Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `list`: [List](/en/ride/v5/data-types/list)[[Int](/en/ride/v5/data-types/int)] | List |

## min(List[BigInt]): BigInt

Returns the smallest element in the list of [big integers](/en/ride/v5/data-types/bigint). Fails if the list is empty.

``` ride
min(List[BigInt]): BigInt
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `list`: [List](/en/ride/v5/data-types/list)[[BigInt](/en/ride/v5/data-types/bigint)] | List |

## removeByIndex(List[T], Int): List[T]

Removes an element from the list by index.

``` ride
removeByIndex(list: List[T], index: Int): List[T]
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `list`: [List[T]](/en/ride/v5/data-types/list) | List |
| `index`: T | Index of the element |

### Examlpes

```ride
removeByIndex(["Waves", 42, true], 1) # Returns ["Waves", true]
```

## size

Returns the size of the [list](/en/ride/v5/data-types/list).

``` ride
size(arr: List[T]): Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `arr`: [List[T]](/en/ride/v5/data-types/list) | List |

### Examples

```ride
size(["Ride", "on", "Waves"]) # Returns 3
```
