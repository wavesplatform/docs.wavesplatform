# Functions

A function must return a value. The return type is not specified in the signature of the function.

A function must be declared above the place of its usage.

A function can be [annotated](/en/ride/functions/annotations).

There are many [built-in functions](/en/ride/functions/built-in-functions/).

When declaring a function to the right of the "=" sign must be an [expression](/en/ride/base-concepts/expression). The value of the function is the [expression result](/en/ride/base-concepts/expression#expression-result).

## Examples

Definition of the function with no parameters that returns an integer:

``` ride
func main() = {
   3
}
```

Definition of a function with two parameters:

``` ride
func main(amount: Int, name: String) = {
   throw()
}
```
