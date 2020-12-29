# [Ride v5] List functions

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/functions/built-in-functions/list-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| [cons](#cons) | Inserts element to the beginning of the [list](/en/ride/v5/data-types/list) | 1 |
| [containsElement](#containselement)  | Check if the element is in the list | 5 |
| [getElement](#getelement) | Gets the element from the list | 2 |
| [indexOf](#indexof) | Returns the index of the first occurrence of the element in the list | 5 |
| [lastIndexOf](#lastindexof)  | Returns the index of the last occurrence of the element in the list | 5 |
| [max](#max)  | Returns the largest element in the list | 3 |
| [min](#min)  | Returns the smallest item in the list | 3 |
| [removeByIndex](#removebyindex) | Removes an element from the list by index | 7 |
| [size](#size) | Returns the size of the list | 2 |

`T` means any valid type.

## cons

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

## containsElement

Check if the element is in the list.

```ride
containsElement(list: List[T], element: T): Boolean
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `list`: [List[T]](/en/ride/v5/data-types/list) | List |
| `element`: T | Element to search for |

## getElement

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

## indexOf

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

## lastIndexOf

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

## max

Returns the largest element in the list. If the list is empty, returns error.

``` ride
max(List[Int]): Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `list`: [List[T]](/en/ride/v5/data-types/list) | List |

## min

Returns the smallest element in the list. If the list is empty, returns error.

``` ride
min(List[Int]): Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `list`: [List[T]](/en/ride/v5/data-types/list) | List |

## removeByIndex

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
