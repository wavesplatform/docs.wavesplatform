# List functions

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | [getElement(List[T], Int): T](#get-element) | Gets an element from a list by index | 2 |
| 2 | [cons(T, List[T]): List[T]](#cons) | Prepends a new element to the list | 2 |
| 3 | [size(List[T]): Int](#size) | Returns the size of a list | 2 |

## getElement(List[T], Int): T<a id="get-element"></a>

Gets an element from a list by index.

``` ride
getElement(arr: List[T], pos: Int): T
```

### Parameters

#### `arr`: List[T]

The list.

#### `pos`: Int

The index of the element.

## cons(T, List[T]): List[T] <a id="cons"></a>

Prepends a new element to the list.

``` ride
cons(head:T, tail: List[T]): List[T]
```

### Parameters

#### `head`: T

The element.

#### `tail`: List[T]

The list.

## size(List[T]): Int<a id="size"></a>

Returns the size of a list.

``` ride
size(arr: List[T]): Int
```

### Parameters

#### `arr`: List[T]

The list.
