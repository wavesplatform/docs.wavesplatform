# Транзакция вызова скрипта

Транзакция вызова скрипта выполняет вызов функции [dApp](/ru/blockchain/account/dapp). [Подробнее о dApp и о вызове скрипта](/ru/building-apps/smart-contracts/what-is-a-dapp)

Кроме адреса dApp, имени вызываемой функции и аргументов, транзакция вызова скрипта может содержать до двух платежей в пользу dApp (один платеж до активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”).

## Комиссия за транзакцию

Комиссия за транзакцию вызова скрипта может быть указана в спонсорском ассете, см. раздел [Спонсирование комиссии](/ru/blockchain/waves-protocol/sponsored-fee).

### Версии 2 и 1

Минимальная комиссия в WAVES за транзакцию вызова скрипта рассчитывается по формуле:

`Fee` = 0,005 + `S` + 0,004 × `P` + 0,004 × `A` + 1 × `I`

* Если отправитель транзакции —  [dApp или смарт-аккаунт](/ru/blockchain/account/dapp), то `S` = 0,004, в ином случае `S` = 0.
* Транзакция вызова скрипта может содержать платежи. `P` (payment) — количество платежей в [смарт-ассетах](/ru/blockchain/token/smart-asset).
* Транзакция вызова скрипта может выполнить перевод, довыпуск или сжигание одного или нескольких ассетов. `A` (action) — количество смарт-ассетов среди этих действий.
* Транзакция вызова скрипта может выполнить выпуск токенов. `I` (issue) — количество выпущенных токенов, не являющихся [NFT](/ru/blockchain/token/non-fungible-token).

См. также пример в разделе [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee).

### Версия 3

Версия 3 транзакции вызова скрипта добавлена в версии ноды 1.3.0 и включается с активацией фичи №&nbsp;16 “Continuations”. Версии 1.3.x в настоящее время доступны только на [Stagenet](/ru/blockchain/blockchain-network/).

`Fee` = (0,005 + `E`) × ⌈`С` / 4000⌉ + `S` + 0,004 × `P` + 0,004 × `A` + 1 × `I` + 0,004 × `N`,

где:

   `E` (extra) — надбавка, указанная в поле `extraFeePerStep`,

   `С` (complexity) — сложность вызываемой функции, `С` / 4000 с округлением вверх до ближайшего целого — количество этапов вычислений. Подробное описание см. в разделе [Вычисления с продолжением](/ru/ride/advanced/continuation).

   `N` (nested) — общее количество вызовов функции `Invoke`. Подробное описание см. в разделе [Вызов dApp из dApp](/ru/ride/advanced/dApp-to-dApp).

> Вычисления с продолжением и вызов dApp из dApp несовместимы, то есть не могут быть инициированы одной и той же транзакцией.

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
| call.args.value | Значение аргумента.<br>- integer — от -9&nbsp;223&nbsp;372&nbsp;036&nbsp;854&nbsp;775&nbsp;808 до 9&nbsp;223&nbsp;372&nbsp;036&nbsp;854&nbsp;755&nbsp;807 включительно.<br>- string или binary — до 32&nbsp;767 байт. Бинарное значение должно быть в кодировке base64.<br>- list — до 1000 элементов |
| dApp | Адрес dApp в кодировке base58 или [псевдоним](/ru/blockchain/account/alias) адреса c префиксом `alias:<байт_сети>:`, например `alias:T:merry` (см. [Байт сети](/ru/blockchain/blockchain-network/#байт-сети)) |
| payment.amount | Количество токена в платеже, в [атомарных единицах](/ru/blockchain/token/#атомарная-единица) |
| payment.assetId | ID токена в платеже в кодировке base58. `null` означает, что платеж в WAVES |
| extraFeePerStep | Добавочная комиссия за каждый этап вычислений, см. раздел [Вычисления с продолжением](/ru/ride/advanced/continuation). Надбавка выражена в том же токене, что и комиссия, в атомарных единицах. Поле добавлено в транзакции версии 3 |
| сontinuationTransactionIds | Список транзакций продолжения в цепочке вычислений. Поле добавлено в транзакции версии 3 |

Описание полей, общих для всех типов транзакций, представлено в разделе [JSON-представление транзакции](/ru/blockchain/transaction/#json-представление-транзакции).

## Бинарный формат

См. раздел [Бинарный формат вызова скрипта](/ru/blockchain/binary-format/transaction-binary-format/invoke-script-transaction-binary-format).

## Структура Ride

Для операций с транзакцией в смарт-контрактах используется структура [InvokeScriptTransaction](/ru/ride/structures/transaction-structures/invoke-script-transaction).
