# Feature Activation

Для поддержки протокола активации фич ноды можно использовать следующий метод API. В ответ будет получен JSON, который описывает текущее состояние функций.

```js
 {
   "height": 678929,
   "approvalInterval": 10000,
   "approvalThreshold": 8000,
   "nextCheck": 680000,
   "features": [
       {
           "id": 1,
           "blockhainStatus": "ACTIVATED",
           "nodeStatus": "SUPPORTED"
       },
       {
           "id": 2,
           "blockhainStatus": "APPROVED",
           "nodeStatus": "SUPPORTED"
       },
       {
           "id": 3,
           "blockchainStatus": "VOTING",
           "nodeStatus": "SUPPORTED",
           "supportBlocks": 7892
       },
       {
           "id": 4,
           "blockchainStatus": "VOTING",
           "nodeStatus": "UNSUPPORTED",
           "supportBlocks": 7892
       }
   ]
 }
```

Поля возвращенного объекта:

* `height` - текущая высота блокчейна ноды

* `approvalInterval` - длина периода подтверждения или активации в блоках

* `approvalThreshold` - количество блоков, необходимое для подтверждения фичи

* `nextCheck` - следующая высота для расчёта подтверждения или активации статусов фич

* `features` - список всех фич

* `id` - ID фичи

* `blockchainStatus` - текущий статус фичи в блокчейне, может быть DEFINED, VOTING, APPROVED или ACTIVATED

* `nodeStatus` - статус фичи в ноде, может быть SUPPORTED или UNSUPPORTED

* `supportBlocks` - количество блоков, которые поддерживают фичу
