# Tuple

Tuple is an ordered collection of elements. Elements can be of any type. The tuple can contain from 2 to 22 elements.

Data types for tuples:

```
Tuple2[T₁,T₂]
Tuple3[T₁,T₂,T₃]
...
Tuple22[T₁,T₂, ..., T₂₂]
```

For weight restrictions, see the [Data Weight](/en/ride/limits/weight) article.

## Example

```ride
let x=("Hello Waves",42,true)
x._2
```

Result: 42

```ride
let (a,b,c)=x
c
```

Result: true
