# [Ride v4 and v3] Tuple

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/data-types/tuple)

Tuples are added in [Standard library](/en/ride/script/standard-library) **version 4**.

Tuple is an ordered collection of elements. Elements can be of any type. The tuple can contain from 2 to 22 elements.

For weight restrictions, see the [Data Weight](/en/ride/v4/limits/weight) article.

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

```
match (if true then (1, 2) else (true, "q")) {
   case _: (Boolean, String) => false
   case _: (Int, Int)        => true
}
```

Result: true
