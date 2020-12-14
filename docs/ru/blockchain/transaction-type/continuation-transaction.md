# Транзакция продолжения

Транзакция продолжения — этап выполнения вызываемой функции скрипта [dApp](/ru/blockchain/account/dapp). Если сложность dApp-скрипта превышает 4000, его выполнение разбивается на несколько этапов. Первый этап вычислений выполняется в рамках [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction), последующие этапы — в рамках транзакций продолжения. [Подробнее о вычислениях с продолжением](/ru/ride/advanced/continuation)

Транзакция продолжения создается генератором блока автоматически в случае наличия незавершенной цепочки вычислений. Транзакция не может быть отправлена пользователем, поэтому для нее отсутствуют поля `senderPublicKey` и `proofs`.

> Возможность выполнения скрипта с продолжением доступна начиная с версии ноды 1.3.0 после активации фичи № 16 “Continuations”. Версии 1.3.x в настоящее время доступны только на [Stagenet](/ru/blockchain/blockchain-network/).

## Комиссия за транзакцию

Комиссия за транзакцию вызова скрипта, указанная отправителем, автоматически распределяется между этой транзакцией и транзакциями продолжения, как описано в разделе [Комиссия](/ru/ride/advanced/continuation#комиссия).

## JSON-представление

```json
{
  "invokeScriptTransactionId": "5qJkpQetVCriDaN9cfbA8YJX3cCpGzQ3oUTQ2Mr4GPcK",
  "fee": 500000,
  "extraFeePerStep": 200000,
  "feeAssetId": null,
  "type": 18,
  "version": 1,
  "call": {
    "function": "finalizeCurrentPrice",
    "args": [
      {
        "type": "integer",
        "value": 0
      }
    ]
  },
  "dApp": "3P5Bfd58PPfNvBM2Hy8QfbcDqMeNtzg7KfP",
  "id": "5qJkpQetVCriDaN9cfbA8YJX3cCpGzQ3oUTQ2Mr4GPcK",
  "timestamp": 1592233044984,
  "applicationStatus": "Script_execution_in_progress",
  "height": 2108117,
  "nonce": 0,
  "сontinuationTransactionIds": [
    "5qJkpQetVCriDaN9cfbA8YJX3cCpGzQ3oUTQ2Mr4GPcK",
    "9NZnnpB4xqV1HdgZo7j2SnKktTqpaMisgDvHzxLr56Mo",
  ]
}
```

| Поле | Описание |
| :--- | :--- |
| invokeScriptTransactionId | Идентификатор транзакции вызова скрипта, с которой началась цепочка вычислений |
| fee | Автоматически рассчитанная комиссия за транзакцию |
| extraFeePerStep | Надбавка к комиссии за каждый этап вычислений, заданная отправителем транзакции вызова скрипта |
| call.function | Имя вызываемой функции |
| call.args.type | Тип аргумента:<br>- binary<br>- boolean<br>- integer<br>- string<br>- list |
| call.args.value | Значение аргумента |
| dApp | Адрес dApp в кодировке base58 или [псевдоним](/ru/blockchain/account/alias) адреса c префиксом `alias:<байт_сети>:`, например `alias:T:merry` (см. [Байт сети](/ru/blockchain/blockchain-network/#байт-сети)) |
| nonce | Произвольный номер, уникальный в цепочке вычислений. Используется для вычисления ID транзакции |
| сontinuationTransactionIds | Список транзакций продолжения в цепочке вычислений |

Описание полей, общих для всех типов транзакций, представлено в разделе [JSON-представление транзакции](/ru/blockchain/transaction/#json-представление-транзакции).

## Бинарный формат

См. раздел [Бинарный формат транзакции продолжения](/ru/blockchain/binary-format/transaction-binary-format/continuation-transaction-binary-format).
