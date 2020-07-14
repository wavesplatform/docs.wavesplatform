# FOLD&lt;N&gt; Macro

`FOLD<N>` macro enables operations on a list of values such as `sum`, `avg`, `filter`, `zip`, `exists` etc. The macro behaves like the `fold` or `reduce` function in other programming languages,

```
FOLD<N>(list, start, foldFunc)
```

| Parameter | Description |
| :--- | :--- |
| `N` | Maximum number of iterations, up to 1000 |
| `list` | List of values |
| `start` | Initial value |
| `foldFunc` | Folded function |

The complexity of `FOLD<N>` corresponds to the complexity of `foldFunc` mutliplied by `N` plus extras.

## Sum of Numbers

```
func sum(a:Int, b:Int) = a + b
let arr = [1,2,3,4,5]
FOLD<5>(arr, 0, sum)
```

Result: 15

## Product of Numbers

```ride
func mult(a:Int, b:Int) = a * b
let arr = [1,2,3,4,5]
FOLD<5>(arr, 1, mult)
```

Result: 120

## Filter
```
func filterStep(accumulated: List[Int], a: Int) =
   if (a % 2 == 0) then a :: accumulated else accumulated
let arr = [1,2,3,4,5]
FOLD<5>(arr, [], filterStep)
```

Result: [4, 2]
