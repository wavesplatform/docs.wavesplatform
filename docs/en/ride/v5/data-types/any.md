# [Ride v5] Any

`Any` is an arbitrary data type. It is a common supertype of all types: an `Any` type value can be a string, a number, `unit`, a structure, a list, a tuple, etc.

## Example

```scala
func findString(a: Any) = {
  match a {
    case a: String => a
    case a: List[Any] =>
      match a[0] {
        case b: String => b
        case _ => throw("Data is not a string")
      }
    case _ => throw("Data is not a string")
  }
}
```
