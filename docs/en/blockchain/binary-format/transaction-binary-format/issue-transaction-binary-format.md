# Issue transaction binary format

> Learn more about [issue transaction](/en/blockchain/transaction-type/issue-transaction)

## Transaction version 2

| Field order number | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag | | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Indicates the [transaction version](/en/blockchain/transaction/transaction-version) is version 2 or higher.<br>Value must be 0 |
| 2 | [Transaction type ID](/en/blockchain/transaction-type) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 3 |
| 3 | [Transaction version](/en/blockchain/transaction/transaction-version) | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 2 |
| 4 | [Chain ID](/en/blockchain/blockchain-network/chain-id) | chainId | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 84 — for [test network](/blockchain/blockchain-network/test-network.md)<br>87 — for [main network](/blockchain/blockchain-network/main-network.md)<br>83 — for [stage network](/blockchain/blockchain-network/stage-network.md) |
| 5 | Public key of the transaction sender  | senderPublicKey | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| 6.1 | [Token](/en/blockchain/token) name length | | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | |
| 6.2 | Token name | name | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | From 4 to 16 | |
| 7.1 | Token description length | | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | |
| 7.2 | Token description | description | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | From 0 to 1000 | |
| 8 | Amount of the token that will be issued | quantity | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 9 | Number of decimal places of the [token](/en/blockchain/token) | decimals | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | |
| 10 | Reissue flag | reissuable | [Boolean](/en/blockchain/blockchain/blockchain-data-types) | 1 | If the value is 0, then token reissue is not possible.<br>If the value is 1, then token reissue is possible |
| 11 | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 12 | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 13.1 | Script existence flag | | [Boolean](/en/blockchain/blockchain/blockchain-data-types) | 1 | If the value is 0, then the token does not have a script.<br>If the value is 1, then the token has a script |
| 13.2 | Script length in bytes | | [Short](/en/blockchain/blockchain/blockchain-data-types) | S | `S = 0 ` if the value of the "Script existence flag" field is 0.<br>`S = 2 `if the value of the "Script existence flag" field is 1 |
| 13.3 | [Asset script](/en/ride/script/script-types/asset-script) or [account script](/en/ride/script/script-types/account-script) | script | [String](/en/blockchain/blockchain/blockchain-data-types) | S | `S = 0` if the value of the "Script existence flag" field is 0.<br>0 &lt; `S` ≤ 32768, if the value of the "Script existence flag" field is 1 |
| 14 | [Transaction proofs](/en/blockchain/transaction/transaction-proof) | proofs | [Proofs](/en/blockchain/transaction/transaction-proof) | S | If the array is empty, then `S`= 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>), where `N` is the number of proofs in the array, `P`<sub>n</sub> is the size on `N`-th proof in bytes. <br>The maximum number of proofs in the array is 8. The maximum size of each proof is 64 bytes |

## JSON representation of the transaction

See the [example](https://testnodes.wavesnodes.com/transactions/info/8jfD2JBLe23XtCCSQoTx5eAW5QCU6Mbxi3r78aNQLcNf) in Node API.

## Transaction version 1

| Field order number | Field | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [Transaction type ID](/en/blockchain/transaction-type) | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 3 |
| 2 | Public key of the transaction sender  | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| 3.1 | [Token](/en/blockchain/token) name length | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | |
| 3.2 | Token name | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | From 4 to 16 | |
| 4.1 | Token description length | [Short](/en/blockchain/blockchain/blockchain-data-types) | 2 | |
| 4.2 | Token description | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | From 0 to 1000 | |
| 5 | Amount of the [token](/en/blockchain/token) that will be issued | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 6 | Number of decimal places of the [token](/en/blockchain/token) | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | |
| 7 | Reissue flag | [Boolean](/en/blockchain/blockchain/blockchain-data-types) | 1 | |
| 8 | [Transaction fee](/en/blockchain/transaction/transaction-fee) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 9 | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 10 | [Transaction signature](/en/blockchain/transaction/transaction-signature) | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 64 | | |
