# [Ride v5] List

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/data-types/list)

`List` is a list data type.

The list may contain elements of various types, including nested lists.

The maximim number of list items is 1000. The nesting depth is not limited. For weight restrictions, see the [Data Weight](/en/ride/v5/limits/weight) article.

## List Operations

Lists support [concatenation](https://en.wikipedia.org/wiki/Concatenation), as well as adding items to the beginning and the end.

| Operation  | Symbol  | Complexity |
|---|---|---|
| Concatenation  | ++ | 4 |
| Adding the element to the end of the list (the list is on the left, the element is on the right) | :+ | 1 |
| Adding the element to the beginning of the list (the element is on the left, the list is on the right) | :: | 2 |

### Example

```ride
nil :+ 1 :+ 2 :+ 3
```

Result: [1, 2, 3]

```ride
1 :: 2 :: 3 :: nil
```

Result: [1, 2, 3]

```ride
let intList  = [1, 2]             # List[Int]
let strList  = ["3", "4"]         # List[String]
let joined   = intList ++ strList # List[Int|String]
joined
```

Result: [1, 2, "3", "4"]

```ride
let appended = joined :+ true     # List[Boolean|Int|String]
appended
```

Result: [1, 2, "3", "4", true]

```ride
let nested    = intList :: joined  # List[Int|List[Int]|String]
nested
```

Result: [[1, 2], 1, 2, "3", "4"]

## List functions

The built-in list functions are presented in the [List Functions](/en/ride/v5/functions/built-in-functions/list-functions) article.
