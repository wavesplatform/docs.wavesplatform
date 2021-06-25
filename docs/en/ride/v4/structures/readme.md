# [Ride v4 and v3] Structures

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/structures/)

All structures in Ride are built-in — you cannot create your own structures.

All structures have constructors.

## Examples

The code that creates an instance of the `DataEntry` structure and reads its key and value.

``` ride
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE DAPP #-}

let data = DataEntry("Age", 33)
let key  = data.key
let val = data.value
```
