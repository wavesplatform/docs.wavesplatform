# Alias binary format

> Learn more about [alias](/en/blockchain/account/alias)

| Field order number | Field | Field type | Field size in bytes | Comments |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Entity type | Byte | 1 | Value must be 2 |
| 2 | [Chain ID](/en/blockchain/blockchain-network/#chain-id)| Byte | 1 | 87 — for Mainnet<br>84 — for Testnet<br>83 — for Stagenet |
| 3 | Number of characters in the alias | Short | 2 | |
| 4 | Alias | Array of bytes | From 4 to 30 | | |
