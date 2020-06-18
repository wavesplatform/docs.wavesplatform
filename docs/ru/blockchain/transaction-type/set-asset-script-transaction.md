# Транзакция установки скрипта ассета

Транзакция установки скрипта ассета изменяет [скрипт ассета](/ru/ride/script/script-types/asset-script). Отправить транзакцию установки скрипта ассета может только аккаунт, выпустивший токен. Если при выпуске к ассету не прикреплен скрипт, то в дальнейшем его нельзя сделать смарт-ассетом.

## Комиссия за транзакцию

Минимальная комиссия за транзакцию установки скрипта ассета — 1 WAVES. 

Если отправитель транзакции —  [dApp](/ru/blockchain/account/dapp) или [смарт-аккаунт](/ru/blockchain/account/smart-account), минимальная комиссия увеличивается на 0,004 WAVES.

## JSON-представление

```json
{
  "senderPublicKey": "AwQYJRHZNd9bvF7C13uwnPiLQfTzvDFJe7DTUXxzrGQS",
  "fee": 100000000,
  "type": 15,
  "version": 1,
  "script": "base64:AQa3b8tH",
  "sender": "3P67JUW8Djit7hMjKhADmn6CWvKPbRuh2sQ",
  "feeAssetId": null,
  "chainId": 87,
  "proofs": [
    "nzYhVKmRmd7BiFDDfrFVnY6Yo98xDGsKrBLWentF7ibe4P9cGWg4RtomHum2NEMBhuyZb5yjThcW7vsCLg7F8NQ"
  ],
  "assetId": "7qJUQFxniMQx45wk12UdZwknEW9cDgvfoHuAvwDNVjYv",
  "id": "FwYSpmVDbWQ2BA5NCBZ9z5GSjY39PSyfNZzBayDiMA88",
  "timestamp": 1547201038106,
  "height": 1346345
}
```

| Поле | Описание |
| :--- | :--- |
| assetId | ID токена в кодировке base58 |
| chainId | [Байт сети](/ru/blockchain/) |
| script | Скомпилированный скрипт ассета, до 8192 байт, в кодировке base64 |

Описание полей, общих для всех типов транзакций, представлено в разделе [JSON-представление транзакции](/ru/blockchain/transaction/#json-представление-транзакции).

## Бинарный формат

См. раздел [Бинарный формат транзакции установки скрипта ассета](/ru/blockchain/binary-format/transaction-binary-format/set-asset-script-transaction-binary-format).

## Структура Ride

Для операций с транзакцией в смарт-контрактах используется структура [SetAssetScriptTransaction](/ru/ride/structures/transaction-structures/set-asset-script-transaction).
