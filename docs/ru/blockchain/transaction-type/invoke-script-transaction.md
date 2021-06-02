# Транзакция вызова скрипта

Транзакция вызова скрипта выполняет вызов функции [dApp](/ru/blockchain/account/dapp). [Подробнее о dApp и о вызове скрипта](/ru/building-apps/smart-contracts/what-is-a-dapp)

Кроме адреса dApp, имени вызываемой функции и аргументов, транзакция вызова скрипта может содержать платежи в пользу dApp. Максимальное количество платежей — 10. (До активации фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations” количество платежей не превышало 2. До активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions” количество платежей не превышало 1.)

## Комиссия за транзакцию

Комиссия за транзакцию вызова скрипта может быть указана в спонсорском ассете, см. раздел [Спонсирование комиссии](/ru/blockchain/waves-protocol/sponsored-fee).

Минимальная комиссия в WAVES за транзакцию вызова скрипта рассчитывается по формуле:

`Fee` = 0,005 + `S` + 1 × `I`

* Если отправитель транзакции — [dApp или смарт-аккаунт](/ru/blockchain/account/dapp), а сложность скрипта аккаунта или функции-верификатора dApp-скрипта больше [порога сложности отправителя](/ru/ride/limits/), то `S` = 0,004, в ином случае `S` = 0.
* Транзакция вызова скрипта может выполнить выпуск токенов. `I` (issue) — количество выпущенных токенов, не являющихся [NFT](/ru/blockchain/token/non-fungible-token).

<br/>
<details><summary>До активации фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations”</summary>

* Минимальная комиссия за транзакцию вызова скрипта увеличивалась на 0,004 WAVES каждое выполнение скриптов ассетов в платежах и действиях скрипта.
* Дополнительная комиссия 0,004 WAVES за отправку транзакции со смарт-аккаунта или dApp требовалась независимо от сложности скрипта аккаунта или наличия и сложности функции-верификатора скрипта dApp.)
</details>

## Суммарная сложность

Вызываемая функция dApp-скрипта может, в свою очередь, вызывать функции другого dApp или того же самого dApp, в том числе функция может вызвать сама себя. Все вызванные функции выполняются в рамках одной транзакции вызова скрипта. [Подробнее о вызове dApp из dApp](/ru/ride/advanced/dapp-to-dapp)

Возможность вызова dApp из dApp появилась с момента активации фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations”.

Суммарная [сложность](/ru/ride/base-concepts/complexity) всех вызываемых функций и скриптов ассетов в одной транзакции — не более 26&nbsp;000. Сложность скрипта отправителя не учитывается в этом лимите. (До активации фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations” суммарная сложность скриптов не была ограничена.)

<!-- ### Версия 3

Версия 3 транзакции вызова скрипта добавлена в версии ноды 1.4.0 и включается с активацией фичи №&nbsp;17 “Ride V6”. Версии 1.4.x в настоящее время доступны только на [Stagenet](/ru/blockchain/blockchain-network/).

<!-- `Fee` = (0,005 + `E`) × ⌈`С` / 10&nbsp;000⌉ + `S` + 0,004 × `P` + 0,004 × `A` + 1 × `I` + 0,004 × `N`,
`Fee` = 0,005 + `S` + 0,004 × `P` + 0,004 × `A` + 1 × `I` + 0,004 × `N`,

где:

   `E` (extra) — надбавка, указанная в поле `extraFeePerStep`,

   `С` (complexity) — сложность вызываемой функции, `С` / 10&nbsp;000 с округлением вверх до ближайшего целого — количество этапов вычислений. Подробное описание см. в разделе [Вычисления с продолжением](/ru/ride/advanced/continuation).

   `N` (nested) — общее количество вызовов функции `invoke`. Подробное описание см. в разделе [Вызов dApp из dApp](/ru/ride/advanced/dapp-to-dapp).

Вычисления с продолжением и вызов dApp из dApp несовместимы, то есть не могут быть инициированы одной и той же транзакцией. -->

## JSON-представление

```json
{
  "type": 16,
  "id": "DN9Ny8mph4tLjn58e9CqhckPymH9zwPqBSZtcv2bBi3u",
  "sender": "3Mw48B85LvkBUhhDDmUvLhF9koAzfsPekDb",
  "senderPublicKey": "BvJEWY79uQEFetuyiZAF5U4yjPioMj9J6ZrF9uTNfe3E",
  "fee": 500000,
  "feeAssetId": null,
  "timestamp": 1601652119485,
  "proofs": [
    "2536V2349X3cuVEK1rSxQf3HneJwLimjCmCfoG1QyMLLq1CNp6dpPKUG3Lb4pu76XqLe3nWyo3HAEwGoALgBhxkF"
  ],
  "version": 2,
  "chainId": 84,
  "dApp": "3N28o4ZDhPK77QFFKoKBnN3uNeoaNSNXzXm",
  "payment": [],
  "call": {
    "function": "foo",
    "args": [
      {
        "type": "list",
        "value": [
          {
            "type": "string",
            "value": "alpha"
          },
          {
            "type": "string",
            "value": "beta"
          },
          {
            "type": "string",
            "value": "gamma"
          }
        ]
      }
    ]
  },
  "height": 1203100,
  "applicationStatus": "succeeded",
  "stateChanges": {
    "data": [
      {
        "key": "3Mw48B85LvkBUhhDDmUvLhF9koAzfsPekDb",
        "type": "string",
        "value": "alphabetagamma"
      }
    ],
    "transfers": [],
    "issues": [],
    "reissues": [],
    "burns": [],
    "sponsorFees": [],
    "leases": [],
    "leaseCancels": [],
    "invokes": []
  }
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
| *stateChanges* | Действия скрипта, выполненные вызываемой функцией, и результаты [вызовов dApp из dApp](/ru/ride/advanced/dapp-to-dapp) |

<!-- | extraFeePerStep | Добавочная комиссия за каждый этап вычислений, см. раздел [Вычисления с продолжением](/ru/ride/advanced/continuation). Надбавка выражена в том же токене, что и комиссия, в атомарных единицах. Значение, отличное от null или 0, допустимо только при вызове скрипта версии 5. Поле добавлено в транзакции версии 3 || сontinuationTransactionIds | Список транзакций продолжения в цепочке вычислений. Поле добавлено в транзакции версии 3 | -->

Структуру `stateChanges` не нужно заполнять при отправке транзакции: ее добавляет нода при предоставлении данных о транзакции через REST API.

Описание полей, общих для всех типов транзакций, представлено в разделе [JSON-представление транзакции](/ru/blockchain/transaction/#json-представление-транзакции).

## Бинарный формат

См. раздел [Бинарный формат вызова скрипта](/ru/blockchain/binary-format/transaction-binary-format/invoke-script-transaction-binary-format).

## Структура Ride

Для операций с транзакцией в смарт-контрактах используется структура [InvokeScriptTransaction](/ru/ride/structures/transaction-structures/invoke-script-transaction).
