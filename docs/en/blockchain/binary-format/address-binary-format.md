# Address binary format

> Learn more about [address](/en/blockchain/account/address)

| Field order number | Field | Field type | Field size in bytes | Comments |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Entity type | Byte | 1 | Value must be 1 |
| 2 | [Chain ID](/en/blockchain/blockchain-network/chain-id) | Byte | 1 | Value equals:<br> 84 — for [test network](/en/blockchain/blockchain-network/test-network)<br> 87 — for [main network](/en/blockchain/blockchain-network/main-network) |
| 3 | Account public key hash | Array of bytes | 20 | First 20 bytes of the result of the [Keccak256](https://en.wikipedia.org/wiki/SHA-3)([Blake2b256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29)(`publicKey`)) hashing function.<br>Here `publicKey` is the array of bytes of the account public key |
| 4 | Checksum | Array of bytes | 4  | First 4 bytes of the result of the [Keccak256](https://en.wikipedia.org/wiki/SHA-3)([Blake2b256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29)(`data`)) hashing function.<br>Here `data` is the array of bytes of three fields put together:<br> 1.&nbsp;Entity type<br> 2.&nbsp;[Chain ID](/en/blockchain/blockchain-network/chain-id)<br> 3.&nbsp;Account public key hash |
