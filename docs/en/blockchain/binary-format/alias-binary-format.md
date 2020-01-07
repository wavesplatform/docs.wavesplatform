# Alias binary format

> Learn more about [alias](/en/blockchain/account/alias)

| Field order number | Field | Field type | Field size in bytes | Comments |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Entity type | Byte | 1 | Value must be 2 |
| 2 | [Chain ID](/en/blockchain/blockchain-network/chain-id)| Byte | 1 | Value equals:<br> 84 — for [test network](/en/blockchain/blockchain-network/test-network)<br> 87 — for [main network](/en/blockchain/blockchain-network/main-network) |
| 3 | Number of characters in the alias | Short | 2 | |
| 4 | Alias | Array of bytes	 | From 4 to 30 | | |
