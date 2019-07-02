# Не взаимозаменяемый токен

**Не взаимозаменяемый токен** или **NFT** (от англ. _non-fungible token_) — особый тип [токена](/blockchain/token.md), который представляет собой какой-то _уникальный_ объект.

Два обычных токена нельзя отличить друг от друга — они одинаковые, т.е. _взаимозаменяемые_. Каждый токен NFT уникален, и поэтому NFT _не взаимозаменяемые_. Любые два NFT всегда можно различить.

У каждого NFT есть уникальный ID.

Наиболее часто NFT используются в играх.

## Выпуск не взаимозаменяемых токенов

Выпуск одного не взаимозаменяемого токена производится с помощью транзакции выпуска; у такой транзакции значение поля "Количество токенов" равняется 1, а значения полей "Число знаков после запятой" и "Флаг довыпуска" — 0.

Для выпуска NFT вы можете использовать npm-пакет [waves-games](https://www.npmjs.com/package/@waves/waves-games).

Комиссия за выпуск одного NFT составляет 0,001 [WAVES](/blockchain/token/waves.md).

### JSON-представление транзакции выпуска не взаимозаменяемого токена

```json
{
  "type": 3,
  "version": 1,
  "chainId": 87,
  "senderPublicKey": "FkoFqtAeibv2E6Y86ZDRfAkZz61LwUMjLAP2gmS1j7xe",
  "name": "The One Ring",
  "description": "Ash nazg durbatulûk, ash nazg gimbatul, ash nazg thrakatulûk, agh burzum-ishi krimpatul.",
  "amount": 1,
  "decimals": 0,
  "reissuable": false,
  "fee": 100000,
  "timestamp": 1485529001965,
  "script": null,
  "proofs": [
    "2kSNWQM7zx4xXkSZrksZPSNYY32WXAdvQcBTvySMrtZ5rzWYpyXYcm8tbdUSjbyBT2LtMfiyQnYXguxrMdLpWgCq"
  ],
  "id": "8jfD2JBLe23XtCCSQoTx5eAW5QCU6Mbxi3r78aNQLcNf",
  "sender": "3Mv61qe6egMSjRDZiiuvJDnf3Q1qW9tTZDB",
  "feeAssetId": null,
  "assetId": "8jfD2JBLe23XtCCSQoTx5eAW5QCU6Mbxi3r78aNQLcNf",
  "height": 193
}
```
