# Block timestamp

A **block timestamp** is a time of [block generation](/en/blockchain/block/block-generation).

The time is specified in _milliseconds_ that have passed since the beginning of the [Unix epoch](https://en.wikipedia.org/wiki/Unix_time).

When the [node](/en/blockchain/node) receives a new block from the [blockchain network](/en/blockchain/blockchain-network), it verifies that the timestamp value of the block does not outpace the [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) time by more than 100 milliseconds.

The timestamp value of the block is validated by nodes using the formula from FPoS.
