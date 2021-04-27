# [Ride v5] Any

`Any` — произвольный тип данных. Он является общим надтипом всех типов: значение типа Any может быть строкой, числом, `unit`, структурой, списком, кортежем и т. п.

## Пример

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
