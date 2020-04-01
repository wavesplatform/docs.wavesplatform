# Data Weight

The weight of each value approximately corresponds to its size in bytes. Weight is used in [limitations](#limitations) on creating and comparing values.

## Weight Calculation

| Data type | Weight of value |
| :--- | :--- |
| Boolean | 1 |
| ByteVector | Size in bytes |
| Int | 8 |
| List | See [Weight of List](#weight-of-list) |
| String | Size in bytes |
| Unit | 40 |
| Structure | See [Weight of Structure](#weight-of-structure) |

### Weight of List

The weight of the list is calculated as follows:

W<sub>list</sub> = 20 + 20 × Q + W<sub>elems</sub>

where:

* Q is a number of elements.
* W<sub>elems</sub> is a total weight of elements.

### Weight of Structure

The weight of the structure is calculated as follows:

W<sub>struct</sub> = 40 + 30 × Q + W<sub>fields</sub>,

where:

* Q is a number of fields.
* W<sub>fields</sub> is a total weight of fields.

## Limitations

* Maximum weight of the value is 307200.
* Comparison of values is not allowed if the weight of each value exceeds 13000.
