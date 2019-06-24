# Alias transaction

**Alias transaction** is a [transaction](/blockchain/transaction.md) that creates [alias](/blockchain/alias.md) for an [address](/blockchain/address.md).

> Created alias cannot be deleted

## Data structure v2

| Field order number | Field name | JSON field name | Field type | Field size in bytes | Field description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Version flag| | Byte  | 1 | Indicates that this is a transaction with the [data structure](/blockchain/transaction-data-structure.md) of version 2 or above.<br> The value must be 0 |
| 2 | Transaction type | type | Byte  | 1 | ID of the [transaction type](/blockchain/transaction-type.md). <br> The value must be 10 |
| 3 | Version number| version | Byte | 1 | Version number of the data structure of the transaction.<br> The value must be  2 |
| 4 | Public key of sender |senderPublicKey| Array of bytes | 32 | Account public key of the sender |
| 5.1 | Alias length| | Short | 2 | Length of the alias \(number of characters in the alias name\) |
| 5.2 | Alias |alias| Array of bytes | from 4 to 30 | Array of bytes of alias |
| 6 | Fee| fee | Long | 8 | [Transaction fee](/blockchain/transaction-fee.md) in [WAVELETs](/blockchain/token/wavelet.md) |
| 7 | Timestamp | timestamp | Long | 8 | Unix time of sending of transaction to blockchain |
| 8 | Proofs | proofs | Array of [proofs](/blockchain/transaction-proof.md) | `S` | If the array is empty, then `S`= 3. <br>If the array is not empty, then `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>), where `N` is the number of proofs in the array,`P`<sub>n</sub> is the size on `N`-th proof in bytes. <br>The maximum number of proofs in the array is 8. The maximum size of each proof is 64 bytes |

## JSON representation of a transaction with data structure v2

```js
  {
  	"type": 10,
  	"version": 2,
  	"id": "5CZV9RouJs7uaRkZY741WDy9zV69npX1FTZqxo5fsryL",
  	"senderPublicKey": "B3f8VFh6T2NGT26U7rHk2grAxn5zi9iLkg4V9uxG6C8q",
  	"alias": "2.1.0a",
  	"fee": 100000,
  	"timestamp": 1548666019772,
  	"proofs": [
  		"3cUM8Eq5KfmbS6q1qHDfzhX98YzER1ocnVjVAHG9HSkQdw86zjqxUfmsUPVwnVgwu5zatt3ETLnNFteobRMyR8bY"
  	],
  	"sender": "3PNaua1fMrQm4TArqeTuakmY1u985CgMRk6",
  	"height": 1371063
  }
```

## Data structure v1

| Field order number | Field name | Field type | Field size in bytes | Field description |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Transaction type | Byte  | 1 | ID of the transaction type.The value must be 10 |
| 2 | Public key of sender | Array of bytes | 32 | Account public key of the sender |
| 3.1 | Alias length | Short | 2 | Length of the alias \(number of characters in the alias name\) |
| 3.2 | Alias | Array of bytes | from 4 to 30 | Array of bytes of alias |
| 4 | Fee | Long | 8 | Transaction fee in WAVELETs |
| 5 | Timestamp | Long | 8 | Unix time of transaction publication to the network |
| 6 | Signature | Array of bytes | 64 | [Transaction signature](/blockchain/transaction-signature) |
