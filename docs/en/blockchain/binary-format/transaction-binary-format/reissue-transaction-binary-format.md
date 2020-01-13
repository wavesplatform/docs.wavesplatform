# Reissue transaction binary format

> Learn more about [reissue transaction](/en/blockchain/transaction-type/reissue-transaction)

## Transaction version 2

| Field order number | Field | JSON field name | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag | | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Indicates the [transaction version](/en/blockchain/transaction/transaction-version) is version 2 or higher.<br>Value must be 0 |
| 2 | [Transaction type ID](/en/blockchain/transaction-type) | type | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 5 |
| 3 | [Transaction version](/en/blockchain/transaction/transaction-version) | version | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 2 |
| 4 | [Chain ID](/en/blockchain/blockchain-network/chain-id) | chainId | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | 84 — for [test network](/en/blockchain/blockchain-network/test-network)<br>87 — for [main network](/en/blockchain/blockchain-network/main-network)<br>83 — for [stage network](/en/blockchain/blockchain-network/stage-network) |
| 5 | Public key of the transaction sender | senderPublicKey | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| 6 | [Token ID](/en/blockchain/token/token-id) | assetId | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| 7 | Number of [tokens](/en/blockchain/token) that will be reissued | quantity | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 8 | Reissue flag | reissuable | [Boolean](/en/blockchain/blockchain/blockchain-data-types) | 1 | If the value is 0, then token reissue is not possible.<br>If the value is 1, then token reissue is possible |
| 9 | [Transaction fee](/en/blockchain/transaction/transaction-fee) | fee | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 10 | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 11 | [Transaction proofs](/en/blockchain/transaction/transaction-proof) | proofs | [Proofs](/en/blockchain/transaction/transaction-proof) | `S` | If the array is empty, then `S`= 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>), where `N` is the number of proofs in the array, `P`<sub>n</sub> is the size on `N`-th proof in bytes. <br>The maximum number of proofs in the array is 8. The maximum size of each proof is 64 bytes |

## JSON representation of the transaction

See the [example](https://nodes.wavesnodes.com/transactions/info/27ETigYaHym2Zbdp4x1gnXnZPF1VJCqQpXmhszC35Qac) in Node API.

## Transaction version 1

| Field order number | Field | Field type | Field size in bytes | Comment |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [Transaction type ID](/en/blockchain/transaction-type) | [Byte](/en/blockchain/blockchain/blockchain-data-types) | 1 | Value must be 5 |
| 2 | Public key of the transaction sender | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| 3 | [Token ID](/en/blockchain/token/token-id) | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 32 | |
| 4 | Number of [tokens](/en/blockchain/token) that will be reissued | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 5 | Reissue flag | [Boolean](/en/blockchain/blockchain/blockchain-data-types) | 1 | If the value is 0, then token reissue is not possible.<br>If the value is 1, then token reissue is possible |
| 6 | [Transaction fee](/en/blockchain/transaction/transaction-fee) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 7 | [Transaction timestamp](/en/blockchain/transaction/transaction-timestamp) | [Long](/en/blockchain/blockchain/blockchain-data-types) | 8 | |
| 8 | [Transaction signature](/en/blockchain/transaction/transaction-signature) | Array[[Byte](/en/blockchain/blockchain/blockchain-data-types)] | 64 | | |
