# Block

A **block** is a link in the chain of the [blockchain](/en/blockchain/blockchain/).

Block contains [transactions](/en/blockchain/transaction/).

A block has the [height](/en/blockchain/block/block-height).

## Limitations

The maximum block size is 1 MB.

The maximum total complexity of scripts in transactions of the block is 1,000,000. The complexity of all executed scripts is taken into account: dApp scripts, account scripts, and asset scripts.

Starting from node version 1.3.1, after activation of feature #16 "dApp-to-dApp invocations, Ride V5", the maximum total complexity of scripts in transactions of the block is 3,000,000. Versions 1.3.x are now available for [Stagenet](/en/blockchain/blockchain-network/) only.

## Binary format

See the [Block binary format](/en/blockchain/binary-format/block-binary-format) article.
