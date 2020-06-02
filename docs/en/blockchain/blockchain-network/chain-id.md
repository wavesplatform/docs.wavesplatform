# Chain ID

A **chain ID** is a blockchain setting that affects the forming of an [address](/en/blockchain/account/address).

The linkage in the [transaction binary format](/en/blockchain/binary-format/transaction-binary-format/) between the address and the chain ID makes it impossible to move transactions between different [blockchain networks](/en/blockchain/blockchain-network/).

Any [ASCII](https://en.wikipedia.org/wiki/ASCII) characters except for the [control characters](https://en.wikipedia.org/wiki/ASCII#Control_characters) is used as a chain ID. The chain ID value is set by the `address-scheme-character` setting in the node configuration file.

For [Mainnet](/en/blockchain/blockchain-network/main-network), the chain ID is 'W' or 87 (ASCII code of 'W').

For [Testnet](/en/blockchain/blockchain-network/test-network), the chain ID is 'T' or 84 (ASCII code of 'T').

For [Stagenet](/en/blockchain/blockchain-network/stage-network), the chain ID is 'S' or 83 (ASCII code of 'S').
