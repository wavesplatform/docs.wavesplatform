# Транзакция выпуска

Транзакция выпуска создает новый [токен](/ru/blockchain/token/).

## Комиссия за транзакцию

Минимальная комиссия за транзакцию выпуска — 1 WAVES, в случае выпуска [невзаимозаменяемого токена (NFT)](/ru/blockchain/token/non-fungible-token) — 0,001 WAVES.

Если отправитель транзакции —  [dApp](/ru/blockchain/account/dapp) или [смарт-аккаунт](/ru/blockchain/account/smart-account), минимальная комиссия увеличивается на 0,004 WAVES.

## JSON-представление

```json
{
  "senderPublicKey": "2M25DqL2W4rGFLCFadgATboS8EPqyWAN3DjH12AH5Kdr",
  "quantity": 50000,
  "fee": 100000000,
  "description": "Script true.",
  "type": 3,
  "version": 2,
  "reissuable": true,
  "script": "base64:AQa3b8tH",
  "sender": "3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7",
  "feeAssetId": null,
  "chainId": 84,
  "proofs": [
    "4yjVxzrLuXUq5y2QCa2LDn1Fp9P63hPBmqDLGQCqn41EB1uZ1pys79NP81h7FxRBnZSbpNGbz1xjwckHcPAQHmFX"
  ],
  "assetId": "7Xpp9PPeZbG4wboJrcbRQdq3SxCJqbeFRUjjKccM1DsD",
  "decimals": 2,
  "name": "Smart",
  "id": "7Xpp9PPeZbG4wboJrcbRQdq3SxCJqbeFRUjjKccM1DsD",
  "timestamp": 1548653407494,
  "height": 469677
}
```

| Поле | Описание |
| :--- | :--- |
| name | Название токена. От 4 до 16 байт |
| description | Описание токена. От 0 до 1000 байт |
| quantity | Количество токена. Всегда целое число, выраженное в минимальных неделимых единицах («копейках») токена, то есть фактическое количество, умноженное на 10<sup>decimals</sup>. От 1 до 9&nbsp;223&nbsp;372&nbsp;036&nbsp;854&nbsp;775&nbsp;807 |
| decimals | Количество знаков после запятой, от 0 до 8 |
| reissuable | Флаг возможности довыпуска, см. [Транзакция довыпуска](/ru/blockchain/transaction-type/reissue-transaction) |
| script | Для [смарт-ассета](/ru/blockchain/token/smart) — скомпилированный [скрипт ассета](/ru/ride/script/script-types/asset-script), до 8192 байт, в кодировке base64.<br>`null` — токен без скрипта. Если при выпуске к ассету не прикреплен скрипт, то в дальнейшем его нельзя сделать смарт-ассетом. |
| chainId | [Байт сети](/ru/blockchain/blockchain-network/chain-id) |
| *assetId* | ID токена в кодировке base58. Совпадает с идентификатором транзакции выпуска |

Поле `assetId` не нужно заполнять при отправке транзакции, и оно не хранятся на блокчейне: его вычисляет нода при предоставлении данных о транзакции через REST API.

Описание полей, общих для всех типов транзакций, представлено в разделе [JSON-представление транзакции](/ru/blockchain/transaction/#json-представление-транзакции).

## Бинарный формат

См. раздел [Бинарный формат транзакции выпуска](/ru/blockchain/binary-format/transaction-binary-format/issue-transaction-binary-format).

## Структура Ride

Для операций с транзакцией в смарт-контрактах используется структура [IssueTransaction](/ru/ride/structures/transaction-structures/issue-transaction).
