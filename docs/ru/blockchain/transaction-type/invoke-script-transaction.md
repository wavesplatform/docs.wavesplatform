# Транзакция вызова скрипта

Транзакция вызова скрипта выполняет вызов функции [dApp](/ru/blockchain/account/dapp). [Подробнее о dApp и о вызове скрипта](/ru/building-apps/smart-contracts/what-is-a-dapp).

Кроме имени функции и аргументов, транзакция вызова скрипта может содержать платеж в пользу dApp.

> Начиная с версии ноды 1.2.0 к транзакции вызова скрипта может быть приложено до двух платежей. Эта возможность включается после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”.

## Комиссия за транзакцию

Минимальная комиссия за транзакцию вызова скрипта рассчитывается по формуле:

0,005 + B + 0,004 × C + 0,004 × D + K

* Если отправитель транзакции —  [dApp](/ru/blockchain/account/dapp) или [смарт-аккаунт](/ru/blockchain/account/smart-account), то `B` = 0,004, в ином случае `B` = 0.
* Транзакция вызова скрипта может содержать платежи. `C` — количество платежей в [смарт-ассетах](/ru/blockchain/token/smart-asset).
* Транзакция вызова скрипта может инициировать перевод, довыпуск или сжигание одного или нескольких ассетов. `D` — количество смарт-ассетов среди этих операций.
* Транзакция вызова скрипта может инициировать выпуск токенов. `K` — количество выпущенных токенов, не являющихся [NFT](/ru/blockchain/token/non-fungible-token).

См. также пример в разделе [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee).

Комиссия за транзакцию вызова скрипта может быть указана в спонсорском ассете, см. раздел [Спонсирование комиссии](/ru/blockchain/waves-prototol/sponsored-fee).

## JSON-представление

<!--```json
{
  "senderPublicKey": "7K3VcWABomhNkKo7Vsfy51MPAVvjWEJTvXCk8MdRxiVf",
  "fee": 500000,
  "type": 16,
  "version": 1,
  "call": {
    "function": "foo",
    "args": [
      {
        "type": "binary",
        "value": "SGVsbG8gV2F2ZXM="
      },
      {
        "type": "int",
        "value": "42"
      },
      {
        "type": "string",
        "value": "Hello Waves"
      },
      {
        "type": "list",
        "value": [true,true,false]
      },
    ]
  },
  "dApp": "3Mm2tJ6BQ4o7GuxWggA75iYedkSQVHFnfyT",
  "feeAssetId": null,
  "payment": [
    {
      "amount": 50000000,
      "assetId": null
    }
  ],
  "timestamp": 1591699765359
}
```-->

```json
{
  "senderPublicKey": "4kKN9G7cZXGQujLQm9ss5gqB7TKX4A9jtFGt7DnHUoQ6",
  "fee": 500000,
  "type": 16,
  "version": 1,
  "call": {
    "function": "returnSellVST",
    "args": [
      {
        "type": "string",
        "value": "GiEBRfGhEeGqhPmLCjwJcYuakyvaz2GHGCfCzuinSKD"
      }
    ]
  },
  "dApp": "3PJbknfXMsJzZmksmsKSMz56tVdDqF5GdNM",
  "sender": "3P5rWeMzoaGBrXJDMifQDDjCMKWJGKTiVJU",
  "feeAssetId": null,
  "proofs": [
    "28s21sisoa7yHWWmmX8U78fbNHW4KXAS9GHD8XmaN77gJxbnP2Q3DssNWpmSQ6hBq6xS985W4YiTmgvENhfWPNt5"
  ],
  "payment": [],
  "id": "7CVjf5KGRRYj6UyTC2Etuu4cUxx9qQnCJox8vw9Gy9yq",
  "timestamp": 1565537422938,
  "height": 1656369
}
```

| Поле | Описание |
| :--- | :--- |
| call.function | Имя вызываемой функции. До 255 байт (1 символ может занимать до 4 байт) |
| call.args.type | Тип аргумента:<br>- binary<br>- boolean<br>- integer<br>- string<br>- list (доступно после активации фичи №&nbsp;15) |
| call.args.value | Значение аргумента.<br>integer — от -9&nbsp;223&nbsp;372&nbsp;036&nbsp;854&nbsp;775&nbsp;808 до 9&nbsp;223&nbsp;372&nbsp;036&nbsp;854&nbsp;755&nbsp;807 включительно.<br>string или binary — до 32&nbsp;767 байт. Бинарное значение должно быть в кодировке base64.<br>list — до 1000 элементов |
| dApp | Адрес dApp в кодировке base58 или [псевдоним](/ru/blockchain/account/alias) адреса |
| payment.amount | Количество токена в платеже, в минимальных неделимых единицах («копейках») токена |
| payment.assetId | ID токена в платеже. `null` означает, что платеж в WAVES |

Описание полей, общих для всех типов транзакций, представлено в разделе [JSON-представление транзакции](/ru/blockchain/transaction/#json-представление-транзакции).

## Бинарный формат

См. раздел [Бинарный формат вызова скрипта](/ru/blockchain/binary-format/transaction-binary-format/invoke-script-transaction-binary-format).

## Структура Ride

Для операций с транзакцией в смарт-контрактах используется структура [InvokeScriptTransaction](/ru/ride/structures/transaction-structures/invoke-script-transaction).
