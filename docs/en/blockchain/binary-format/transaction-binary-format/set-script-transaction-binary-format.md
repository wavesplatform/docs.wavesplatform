# Set script transaction binary format

> Learn more about [set script transaction](/en/blockchain/transaction-type/set-script-transaction)

## Transaction version 1

| Field order number | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag | | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Indicates the [transaction version](/en/blockchain/transaction/transaction-version) is version 2 or higher.<br>Value must be 0 |
| 2 | [Transaction type ID](/en/blockchain/transaction-type) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 13 |
| 3 | [Transaction version](/en/blockchain/transaction/transaction-version) | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 1 |
| 4 | [Chain ID](/en/blockchain/blockchain-network/chain-id) | chainId | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 84 — for [test network](/en/blockchain/blockchain-network/test-network)<br>87 — for [main network](/en/blockchain/blockchain-network/main-network)<br>83 — for [stage network](/en/blockchain/blockchain-network/stage-network) |
| 5 | Public key of the transaction sender  | senderPublicKey | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| 6.1 | Script existence flag | | [Boolean](/en/blockchain/blockchain/blockchain-data-types) | 1 | If the value is 0, then the token does not have a script.<br>If the value is 1, then the token has a script |
| 6.2 | Script length | | [Short](/en/blockchain/blockchain/blockchain-data-types) | S | `S = 0` if the value of the "Script existence flag" field is 0.<br>`S = 2` if the value of the "Script existence flag" field is 1 |
| 6.3 | [Script](/en/ride/script) | script | [String](/en/blockchain/blockchain/blockchain-data-types) | S | `S = 0` if the value of the "Script existence flag" field is 0.<br>0 &lt; `S` ≤ 32768, if the value of the "Script existence flag" field is 1 |
| 7 | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 8 | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 9 | [Transaction proofs](/en/blockchain/transaction/transaction-proof) | proofs | [Proofs](/en/blockchain/transaction/transaction-proof) | S | If the array is empty, then `S`= 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>), where `N` is the number of proofs in the array, `P`<sub>n</sub> is the size on `N`-th proof in bytes. <br>The maximum number of proofs in the array is 8. The maximum size of each proof is 64 bytes |

## JSON representation of the transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/8Nwjd2tcQWff3S9WAhBa7vLRNpNnigWqrTbahvyfMVrU) in Node API.
