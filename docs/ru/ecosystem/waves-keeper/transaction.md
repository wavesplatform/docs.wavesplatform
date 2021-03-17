# Формат транзакций в Waves Keeper API

Waves Keeper API поддерживает следующие типы транзакций:

- 3 — транзакция выпуска;
- 4 — транзакция перевода;
- 5 — транзакция довыпуска;
- 6 — транзакция сжигания токена;
- 8 — транзакция лизинга;
- 9 — транзакция отмены лизинга;
- 10 — транзакция создания псевдонима;
- 11 — транзакция массового перевода;
- 12 — транзакция данных;
- 13 — транзакция установки скрипта;
- 14 — транзакция спонсирования;
- 15 — транзакция установки скрипта ассета.
- 16 — транзакция вызова скрипта.
- 17 — транзакция обновления информации ассета.

Формат транзакции отличается от [Node REST API](/ru/waves-node/node-api/). Функции `signTransaction`, `signAndPublishTransaction`, `signTransactionPackage` принимают транзакции в следующем формате:

```js
{
    type: number //transaction type,
    data: {
        ... //transaction data
    }
}
```

Обозначения:

* \* — необязательное поле, данные автоматически подставляются Waves Keeper.
* [x,y] — длина от x до y.
* [,x] — длина не более x.
* [y,] — длина не менее y.
* [x-y] — число от x до y.
* x/y — x или y.
* (JLM) — JAVA LONG MAX = 9 223 372 036 854 775 807
* MoneyLike — стоимость.

MoneyLike может иметь вид:

- `{ tokens: 1, assetId: "WAVES" }`
- `{ coins: 100000000, assetId: "WAVES" }`

В обоих сообщениях указана одинаковая сумма: 1 WAVES. Вы можете легко конвертировать `coins` в `tokens` и обратно, если вы знаете, в каком ассете указана цена, и количество знаков после запятой: `tokens = coins / (10 ** precision)`.
Если поле содержит другие типы, отличные от MoneyLike, например, string/MoneyLike, сумма указывается как число в `coins`.

См. также раздел [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee).

## Транзакция выпуска (тип 3)

- `name`: [4, 16] string — имя токена.
- `description`: [0, 1000] string — описание токена.
- `quantity`: [0 - (JLM)] number/string — количество токена.
- `precision`: [0 - 8] number — количество знаков после запятой.
- `reissuable`: true|false — флаг возможности довыпуска.
- `*fee`: MoneyLike — комиссия за транзакцию.
- `*script`: string — скрипт ассета, см. раздел [Смарт-ассет](/ru/building-apps/smart-contracts/what-is-smart-asset).
- `*senderPublicKey`: string — открытый ключ отправителя в кодировке base58.
- `*timestamp`: number/string — Unix-время в миллисекундах.

Пример:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 3,
        data: {
             "name": "Best Token",
             "description": "Greate token",
             "quantity": 1000000,
             "precision": 2,
             "reissuable": true,
             fee: {
                 "tokens": "1",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've created my asset!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

В случае успеха будет выпущен новый ассет в количестве 1 000 000, и на балансе пользователя будет отображаться 10 000,00 Best Token.

## Транзакция перевода (тип 4)

- `amount`: MoneyLike – количество токена.
- `recipient`: string – адрес или псевдоним получателя.
- `attachment`: [,140 bytes] string или byte array – произвольный комментарий.
- `*fee`: MoneyLike — комиссия за транзакцию.
- `*senderPublicKey`: string — открытый ключ отправителя в кодировке base58.
- `*timestamp`: number/string — Unix-время в миллисекундах.

Пример:

```js
    WavesKeeper.signAndPublishTransaction({
        type: 4,
        data: {
            amount: { tokens: "3.3333333", assetId: "WAVES" },
            fee: { tokens: "0.001", assetId: "WAVES"},
            recipient: "merry"
        }
    }).then((tx) => {
         console.log("Hurray! I've been able to send WAVES!!!");
    }).catch((error) => {
         console.error("Something went wrong", error);
    });
```

## Транзакция довыпуска (тип 5)

- `assetId`: string — идентификатор ассета.
- `quantity`: [0 - (JLM)] number/string/MoneyLike — количество ассета.
- `reissuable`: false – отмена возможности довыпуска.
- `*fee`: MoneyLike — комиссия за транзакцию.
- `*senderPublicKey`: string — открытый ключ отправителя в кодировке base58.
- `*timestamp`: number/string — Unix-время в миллисекундах.

Пример:

```js
      WavesKeeper.signAndPublishTransaction({
           type: 5,
           data: {
                "quantity": 1000,
                "assetId": "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS",
                "reissuable": true,
                fee: {
                    "tokens": "1",
                    "assetId": "WAVES"
                }
           }
      }).then((tx) => {
           console.log("Hurray! I've reissued my asset!!!");
      }).catch((error) => {
           console.error("Something went wrong", error);
      });
```

В случае успеха аккаунт довыпускает ассет на сумму 1000 и на балансе появится 10,00 Best Token.

## Транзакция сжигания токена (тип 6)

- `assetId`: string – идентификатор ассета.
- `amount`: [0 - (JLM)] number/string/MoneyLike — количество ассета.
- `*fee`: MoneyLike — комиссия за транзакцию.
- `*senderPublicKey`: string — открытый ключ отправителя в кодировке base58.
- `*timestamp`: number/string — Unix-время в миллисекундах.

Пример:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 6,
        data: {
             amount: 1000,
             assetId: "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS",
             fee: {
                 "tokens": "0.001",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've burned unneeded tokens!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

В случае успеха будет уничтожена 1000 монет.

## Транзакция лизинга (тип 8)

- `recipient`: string – адрес или псевдоним получателя.
- `amount`: [0 - (JLM)] number/string/MoneyLike — количество.
- `*fee`: MoneyLike — комиссия за транзакцию.
- `*senderPublicKey`: string — открытый ключ отправителя в кодировке base58.
- `*timestamp`: number/string — Unix-время в миллисекундах.

Пример:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 8,
        data: {
             "amount": 1000,
             "recipient": "merry",
             fee: {
                 "tokens": "0.001",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've been able to lease tokens!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

В случае успеха 0,00001000 WAVES передается в лизинг.

## Транзакция отмены лизинга (тип 9)

- `leaseId`: string — идентификатор лизинга.
- `*fee`: MoneyLike — комиссия за транзакцию.
- `*senderPublicKey`: string — открытый ключ отправителя в кодировке base58.
- `*timestamp`: number/string — Unix-время в миллисекундах.

Пример:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 9,
        data: {
             leaseId: "6frvwF8uicAfyEfTfyC2sXqBJH7V5C8he5K4YH3BkNiS",
             fee: {
                 "tokens": "0.001",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've cancelled leasing!!!");
   }).catch((error) => {
        console.error("Something went wrong ", error);
   });
```

В случае успеха лизинг прекращается.

## Транзакция создания псевдонима (тип 10)

- `alias`: [4, 30] string — псевдоним.
- `*fee`: MoneyLike — комиссия за транзакцию.
- `*senderPublicKey`: string — открытый ключ отправителя в кодировке base58.
- `*timestamp`: number/string — Unix-время в миллисекундах.

Пример:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 10,
        data: {
             alias: "testAlias",
             fee: {
                 "tokens": "0.001",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! Now I have an alias!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

В случае успеха создается псевдоним адреса.

## Транзакция массового перевода (тип 11)

- `totalAmount`: MoneyLike – суммарное количество ассета // вместо вычисления можно указать { `assetId`: "ID of the asset to be sent", `coins`: 0}.
- `transfers`:
   массив объектов { `recipient`: string – адрес или псевдоним получателя, `amount`: number/string/MoneyLike }.
- `*fee`: MoneyLike — комиссия за транзакцию.
- `attachment`: [,140 bytes] string или byte array – произвольный комментарий.
- `*senderPublicKey`: string — открытый ключ отправителя в кодировке base58.
- `*timestamp`: number/string — Unix-время в миллисекундах.

Пример:

```js
    WavesKeeper.signAndPublishTransaction({
        type: 11,
        data: {
             totalAmount: { assetId: "WAVES", coins: 0},
             transfers: [
                { recipient: "alias1", amount: "200000" },
                { recipient: "alias2", amount: "200000" },
             ],
             fee: {
                 "tokens": "0.002",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've sent hi to my friends!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

В случае успеха 0,002 WAVES будет отправлено на alias1 и alias2.

## Транзакция данных (тип 12)

- `data`: массив объектов.
   - `type`: "binary"/string/"integer"/"boolean" — тип записи.
   - `key`: string – ключ записи.
   - `value`: string(base64)/string/number/boolean в зависимости от типа. `null` для удаления записи.
- `*version`: number — версия транзакции.
- `*fee`: MoneyLike — комиссия за транзакцию.
- `*senderPublicKey`: string — открытый ключ отправителя в кодировке base58.
- `*timestamp`: number/string — Unix-время в миллисекундах.

Пример:

```js
WavesKeeper.signAndPublishTransaction({
   type: 12,
   data: {
      data: [
         { key: "string", value: "test", type: "string" },
         { key: "binary", value: "base64:AbCdAbCdAbCdAbCdAbCdAbCdAbCdAbCdAbCdAbCdAbCd", type: "binary" },
         { key: "integer", value: 20, type: "integer" },
         { key: "boolean", value: false, type: "boolean" },
     ],
      fee: {
         tokens: "0.01",
         assetId: "WAVES"
      }
   }
}).then((tx) => {
   console.log("Hurray! I've saved data!!!");
}).catch((error) => {
   console.error("Something went wrong", error);
});
```

В случае успеха данные появятся в хранилище данных аккаунта.

Для удаления записи передайте ключ записи `key` вместе с `value: null`. Удаление записи доступно начиная с версии 2, поэтому необходимо указать поле `version`.

Пример:

```js
WavesKeeper.signAndPublishTransaction({
   type: 12,
   data: {
      version: 2,
      data: [
         { key: "binary", value: null },
      ],
      fee: {
         tokens: "0.001",
         assetId: "WAVES"
      }
   }
}).then((tx) => {
   console.log("Hurray! I've deleted data!!!");
}).catch((error) => {
   console.error("Something went wrong", error);
});
```

## Транзакция установки скрипта (тип 13)

- `script`: string — скрипт аккаунта (см. раздел [Смарт-аккаунт](/ru/building-apps/smart-contracts/what-is-smart-account)) или dApp-скрипт (см. раздел [dApp](/ru/building-apps/smart-contracts/what-is-a-dapp)). Для отмены скрипта укажите пустую строку.
- `*fee`: MoneyLike — комиссия за транзакцию.
- `*senderPublicKey`: string — открытый ключ отправителя в кодировке base58.
- `*timestamp`: number/string — Unix-время в миллисекундах.

Пример:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 13,
        data: {
             script: "",
             fee: {
                 "tokens": "0.04",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've cancelled a script!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

В случае успеха скрипт будет удален из аккаунта.

Пример 2:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 13,
        data: {
             script: "base64:AQa3b8tHAQa3b8tHAQa3b8tHAQa3b8tHAQa3b8tHAQa3b8tHAQa3b8tHAQa3b8tHAQa3b8tHAQa3b8tHAQa3b8tH",
             fee: {
                 "tokens": "0.01",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've added a script!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

В случае успеха в аккаунт будет добавлен новый скрипт, позволяющий совершать любые транзакции без подписи (будьте осторожны!).

## Транзакция спонсирования (тип 14)

- `minSponsoredAssetFee`: MoneyLike — количество спонсорского ассета, эквивалентное 0,001 WAVES.
- `*fee`: MoneyLike — комиссия за транзакцию.
- `*senderPublicKey`: string — открытый ключ отправителя в кодировке base58.
- `*timestamp`: number/string — Unix-время в миллисекундах.

Пример:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 14,
        data: {
             minSponsoredAssetFee: {
                assetId: "6frvwF8uicAfyEfTfyC2sXqBJH7V5C8he5K4YH3BkNiS",
                tokens: 0.1
             },
             fee: {
                 "tokens": "1",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I've become a sponsor!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

В случае успеха комиссия за перевод может быть оплачена ассетом.

## Транзакция установки скрипта ассета (тип 15)

- `assetId`: string — идентификатор ассета.
- `script` string – скрипт ассета, см. раздел [Смарт-ассет](/ru/building-apps/smart-contracts/what-is-smart-asset).
- `*fee`: MoneyLike — комиссия за транзакцию.
- `*senderPublicKey`: string — открытый ключ отправителя в кодировке base58.
- `*timestamp`: number/string — Unix-время в миллисекундах.

Сейчас невозможно отменить скрипт, вы можете только добавить новый скрипт.

Пример:

```js
   WavesKeeper.signAndPublishTransaction({
        type: 15,
        data: {
             assetId: "",
             script: "base64:AQa3b8tH",
             fee: {
                 "tokens": "0.01",
                 "assetId": "WAVES"
             }
        }
   }).then((tx) => {
        console.log("Hurray! I have reset a script to the asset!!!");
   }).catch((error) => {
        console.error("Something went wrong", error);
   });
```

В случае успеха скрипт ассета будет сброшен.

## Транзакция вызова скрипта (тип 16)

- `dApp`: string – адрес аккаунта dApp.
- `call`: объект:
  - `function`: string — имя функции.
  - `args`: массив:
    - `type`: "binary"/string/"integer"/"boolean"/"list" — тип.
    - `value` string(base64)/string/number/boolean/массив — значение.
- `payment`: массив MoneyLike — до 2 платежей.
- `fee`: MoneyLike — комиссия за транзакцию.
- `*version`: number — версия транзакции.
- `*senderPublicKey`: string — открытый ключ отправителя в кодировке base58.
- `*timestamp`: number/string — Unix-время в миллисекундах.

Пример:

```js
WavesKeeper.signAndPublishTransaction({
   type: 16,
   data: {
      dApp: "3N27HUMt4ddx2X7foQwZRmpFzg5PSzLrUgU",
      call: {
         function: "tellme",
         args: [{
            type: "string",
            value: "Will?"
         }]
      },
      payment: [ {assetId: "WAVES", tokens: 2} ],
      fee: {
         tokens: "0.005",
         assetId: "WAVES"
      },
   }
}).then((tx) => {
   console.log("Hurray! I've invoked the script!!!");
}).catch((error) => {
   console.error("Something went wrong", error);
});
```

В случае успеха будет вызвана функция `tellme` dApp-аккаунта `3N27HUMt4ddx2X7foQwZRmpFzg5PSzLrUgU` на Testnet.

Пример вызова функции, аргументом которой является список:

```js
WavesKeeper.signAndPublishTransaction({
   type: 16,
   data: {
      dApp: "3N28o4ZDhPK77QFFKoKBnN3uNeoaNSNXzXm",
      call: {
         function: "foo",
         args: [
            {
               type: "list",
               value: [
                  { type: "string", value: "alpha" },
                  { type: "string", value: "beta" },
                  { type: "string", value: "gamma" }
              ],
            }
         ]
      },
      payment: [],
      fee: {
         tokens: "0.005",
         assetId: "WAVES"
      },
   }
}).then((tx) => {
  console.log("Hurray! I've invoked the script!!!");
}).catch((error) => {
   console.error("Something went wrong", error);
});
```

## Транзакция обновления информации ассета (тип 17)

- `name`: [4, 16] string — имя токена.
- `description`: [0, 1000] string — описание токена.
- `*fee`: MoneyLike — комиссия за транзакцию.
- `*senderPublicKey`: string — открытый ключ отправителя в кодировке base58.
- `*timestamp`: number/string — Unix-время в миллисекундах.

Пример:

```js
WavesKeeper.signAndPublishTransaction({
   type: 17,
   data: {
      name: "New name",
      description: "New description",
      assetId: "DS5fJKbhKDaFfcRpCd7hTcMqqxsfoF3iY9yEcmsTQV1T",
      fee: {
         assetId: "WAVES",
         tokens: "0.001"
      },
   }
}).then((tx) => {
   console.log("Hurray! I've renamed the asset!!!");
}).catch((error) => {
   console.error("Something went wrong", error);
});
```
