# ID транзакции

**ID транзакции** — хеш от [байтов тела транзакции](/ru/blockchain/transaction/transaction-body-bytes), который вычисляется хеш-функцией [blake2b256](https://en.wikipedia.org/wiki/BLAKE_&#40;hash_function&#41;).

В отличие от остальных типов транзакций, ID [транзакции создания псевдонима](/ru/blockchain/transaction-type/alias-transaction) рассчитывается как хеш от значений полей `type` и `alias`.
