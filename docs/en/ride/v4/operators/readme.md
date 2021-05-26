# [Ride v4 and v3] Operators

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/operators/)

## Arithmetic operators

| Operator | Description |
| :---: | :--- |
| + | Addition |
| - | Subtraction |
| \* | Multiplication |
| / | Division |
| % | Remainder |

> The **/** operator uses the FLOOR rounding method, see [Rounding variables](/en/ride/v4/functions/built-in-functions/math-functions#rounding-variables). For example, the result of `-1 / 100` is `-1`.

## Comparison operators

| Operator | Description |
| :---: | :--- |
| &lt; | Less than |
| &gt; | Greater than |
| &lt;= | Less than or equal |
| &gt;= | Greater than or equal |

## Equality operators

| Operator | Description |
| :---: | :--- |
| == | Equality |
| != | Inequality |

## Local definition operators

| Operator | Description |
| :--- | :--- |
| let | Variable local definition |
| func | Function local definition |

## Conditional operators

| Operator | Description |
| :---: | :--- |
| if-then-else | Conditional statement |
| match-case | [Spot a type from Union](/en/ride/operators/match-case) |

## List operators

| Operator | Description |
| :---: | :--- |
| ++ | Concatenation |
| :+ | Adding the element to the end of the list |
| :: | Adding the element to the beginning of the list |

> :warning: `++` and `:+` operators are added in [Standard library](/en/ride/script/standard-library) **version 4**.

See examples of the [List](/en/ride/v4/data-types/list) article.

## Unary operators

| Operator | Description |
| :---: | :--- |
| - | Unary minus |
| ! | Logical negation |

## Logical operators

| Operator | Description |
| :---: | :--- |
| && | Logical AND |
| &#124;&#124; | Logical OR |
