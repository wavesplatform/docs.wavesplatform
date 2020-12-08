# Structures

All structures in Ride are built-in — you cannot create your own structures.

All structures have constructors.

## Examples

The code that creates an instance of the `IntegerEntry` structure and reads its key and value.

``` ride
let data = IntegerEntry("Age", 33)
let key  = data.key
let val = data.value
```
