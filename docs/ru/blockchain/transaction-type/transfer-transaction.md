# Транзакция перевода

Транзакция перевода выполняет перевод указанного количества [токена](/ru/blockchain/token/) на другой аккаунт.

## Комиссия за транзакцию

Минимальная комиссия за транзакцию перевода — 0,001 WAVES. В случае перевода [смарт-ассета](/ru/blockchain/token/smart-asset) — 0,005 WAVES.

Если отправитель транзакции — [dApp или смарт-аккаунт](/ru/blockchain/account/dapp), минимальная комиссия увеличивается на 0,004 WAVES. См. также пример в разделе [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee).

Начиная с версии ноды 1.3.1, с момента активации фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations”, дополнительная комиссия 0,004 WAVES требуется только в случае, если сложность скрипта аккаунта или функции-верификатора dApp-скрипта больше [порога сложности отправителя](/ru/ride/limits/).

Комиссия за транзакцию перевода может быть указана в спонсорском ассете, см. раздел [Спонсирование комиссии](/ru/blockchain/waves-protocol/sponsored-fee).

## JSON-представление

```json
{
  "senderPublicKey": "Cs4DShy4nTx6WyxjKRoDtoYsGhvT663pYLysPCLeVZHE",
  "amount": 15540,
  "signature": "5EaYqFx2xFJmdvwZ1gT3yLecKr88z3jByCj5GE1MjE1ossvehExZKoT7uhGatiYCGM9Co8iUR8Q5ce52XDmno3rn",
  "fee": 100000,
  "type": 4,
  "version": 1,
  "attachment": "3vrgtyozxuY88J9RqMBBAci2UzAq9DBMFTpMWLPzMygGeSWnD7k",
  "sender": "3PN2bVFxJjgudPKqEGZ41TVsD5ZJmxqnPSu",
  "feeAssetId": null,
  "proofs": [
    "5EaYqFx2xFJmdvwZ1gT3yLecKr88z3jByCj5GE1MjE1ossvehExZKoT7uhGatiYCGM9Co8iUR8Q5ce52XDmno3rn"
  ],
  "assetId": "7uncmN7dZfV3fYVvNdYTngrrbamPYMgwpDnYG1bGy6nA",
  "recipient": "3PFmoN5YLoPNsL4cmNGkRxbUKrUVntwyAhf",
  "feeAsset": null,
  "id": "D79kL1Jr5xyL2Rmw2FnafQHugJGvuBhNEbLnhMuwMkDC",
  "timestamp": 1548660895034,
  "height": 1370973
}
```

| Поле | Описание |
| :--- | :--- |
| assetId | ID переводимого токена в кодировке base58. `null` — перевод в WAVES |
| amount | Количество токена к переводу. Целое число, выраженное в минимальных неделимых единицах («копейках») токена |
| attachment | Произвольные данные (обычно комментарий к транзакции), до 140 байт, в кодировке base58 |
| recipient | Адрес получателя в кодировке base58 или [псевдоним](/ru/blockchain/account/alias) адреса c префиксом `alias:<байт_сети>:`, например `alias:T:merry` (см. [Байт сети](/ru/blockchain/blockchain-network/#байт-сети)) |

Описание полей, общих для всех типов транзакций, представлено в разделе [JSON-представление транзакции](/ru/blockchain/transaction/#json-представление-транзакции).

## Бинарный формат

См. раздел [Бинарный формат транзакции перевода](/ru/blockchain/binary-format/transaction-binary-format/transfer-transaction-binary-format).

## Структура Ride

Для операций с транзакцией в смарт-контрактах используется структура [TransferTransaction](/ru/ride/structures/transaction-structures/transfer-transaction).
