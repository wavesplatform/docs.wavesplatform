# Release Notes

## Версия 1.3 (Stagenet)

### Развитие протокола

* **Вызов dApp из dApp.** Вызываемая функция dApp-скрипта может выполнять вложенные вызовы. Из dApp можно вызвать вызываемую функцию другого dApp или того же самого dApp, в том числе функция может вызвать сама себя. Все вызванные функции выполняются в рамках одной транзакции вызова скрипта. [Подробнее о вызове dApp из dApp](/ru/ride/advanced/dapp-to-dapp)
* Изменения для [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction):
   * Отменена дополнительная комиссия 0,004 WAVES за выполнение скриптов ассетов в платежах и действиях скрипта.
   * Транзакция может содержать до 10 приложенных платежей.
   * Суммарная сложность всех вызываемых функций и скриптов ассетов в одной транзакции — не более 26&nbsp;000 (cложность скрипта отправителя не учитывается в этом лимите). 
* Для всех типов транзакций отменена дополнительная комиссия 0,004 WAVES за отправку транзакции со смарт-аккаунта или dApp, в случае если сложность скрипта аккаунта или функции-верификатора dApp-скрипта не превышает 200.

<!--* **Вычисления с продолжением.** Добавлена поддержка dApp-скриптов, сложность которых превышает 4000. Выполнение такого скрипта разбивается на несколько этапов: первый этап вычислений выполняется в рамках транзакции вызова скрипта, последующие этапы — в рамках транзакций продолжения. [Подробнее о вычислениях с продолжением](/ru/ride/advanced/continuation)
   * Добавлен новый тип транзакции: [Continuation](/ru/blockchain/transaction-type/continuation-transaction). Транзакция продолжения создается генератором блока автоматически в случае наличия незавершенной цепочки вычислений. Транзакция не может быть отправлена пользователем.-->

### Ride

* Выпущена [версия 5](/ru/ride/v5/) Стандартной библиотеки.
* Реализована возможность обрабатывать в dApp до 10 платежей, приложенных к транзакции вызова скрипта.
* Добавлена функция [Invoke](/ru/ride/v5/functions/built-in-functions/dapp-to-dapp) для вызова dApp из dApp.
* Добавлены [нетерпеливые переменные](/ru/ride/v5/variables/), которые вычисляются до следующего выражения, чтобы гарантировать порядок выполнения и применения действий скрипта вызываемых функций.
* Изменен [формат результата](/ru/ride/v5/functions/callable-function#result) вызываемой функции: добавлено возвращаемое значение.
* Изменена структура [Invocation](/ru/ride/v5/structures/common-structures/invocation): в случае вызова dApp из dApp она содержит адрес и публичный ключ как отправителя транзакции вызова скрипта, так и аккаунта dApp, который вызывает функцию.
* Общее количество действий скрипта `Issue`, `Reissue`, `Burn`, `SponsorFee`, `ScriptTransfer`, `Lease`, `LeaseCancel`, выполняемых всеми вызываемыми функциями в одной транзакции, — не более 30.
* Общее количество действий скрипта `BinaryEntry`, `BooleanEntry`, `IntegerEntry`, `StringEntry`, `DeleteEntry`, выполняемых всеми вызываемыми функциями в одной транзакции, — не более 100.
* Добавлены действия скрипта, которые может выполнять вызываемая функция:
   * [Lease](/ru/ride/v5/structures/script-actions/lease) — передает WAVES в лизинг.
   * [LeaseCancel](/ru/ride/v5/structures/script-actions/lease-cancel) — прекращает лизинг.

   С помощью действий `Lease` и `LeaseCancel` можно изменить сумму лизинга, в частности, извлечь часть средств из лизинга. Если в одном вызове скрипта отменить лизинг на большую сумму и создать новый лизинг на меньшую сумму с тем же получателем, генерирующий баланс получателя уменьшится на разницу. Если же отправить две отдельные транзакции — транзакцию отмены лизинга и транзакцию лизинга,  они могут попасть в разные блоки, и тогда генерирующий баланс сразу же уменьшится на сумму отмененного лизинга, а увеличится на сумму нового лизинга только через 1000 блоков.

* Добавлена встроенная функция [calculateLeaseId](/ru/ride/v5/functions/built-in-functions/blockchain-functions#calculateleaseid) для получения ID лизинга, сформированного структурой `Lease`.
* Добавлен произвольный тип данных — [Any](/ru/ride/v5/data-types/any).
* Добавлен тип данных [BigInt](/ru/ride/v5/data-types/bigint) размером 64 байта (512 бит) и поддерживающие его функции:
   * [fraction(BigInt, BigInt, BigInt): BigInt](/ru/ride/v5/functions/built-in-functions/math-functions#fractionbigint)
   * [fraction(BigInt, BigInt, BigInt, Union): BigInt](/ru/ride/v5/functions/built-in-functions/math-functions#fractionbigintround)
   * [log(BigInt, Int, BigInt, Int, Int, Union): BigInt](/ru/ride/v5/functions/built-in-functions/math-functions#logbigint)
   * [max(List[BigInt]): BigInt](/ru/ride/v5/functions/built-in-functions/list-functions#max-list-bigint-bigint)
   * [median(List[BigInt]): BigInt](/ru/ride/v5/functions/built-in-functions/math-functions#medianbigint)
   * [min(List[BigInt]): BigInt](/ru/ride/v5/functions/built-in-functions/list-functions#min-list-bigint-bigint)
   * [pow(BigInt, Int, BigInt, Int, Int, Union): BigInt](/ru/ride/v5/functions/built-in-functions/math-functions#powbigint)
   * [parseBigInt(String): BigInt|Unit](/ru/ride/v5/functions/built-in-functions/converting-functions#parse-bigint)
   * [parseBigIntValue(String): BigInt](/ru/ride/v5/functions/built-in-functions/converting-functions#parse-bigintvalue)
   * [toBigInt(ByteVector): BigInt](/ru/ride/v5/functions/built-in-functions/converting-functions#to-bigint-bytevector)
   * [toBigInt(ByteVector, Int, Int): BigInt](/ru/ride/v5/functions/built-in-functions/converting-functions#to-bigint-bytevector-int-int)
   * [toBigInt(Int): BigInt](/ru/ride/v5/functions/built-in-functions/converting-functions#to-bigint-int)
   * [toBytes(BigInt): ByteVector](/ru/ride/v5/functions/built-in-functions/converting-functions#to-bytes-bigint)
   * [toInt(BigInt): Int](/ru/ride/v5/functions/built-in-functions/converting-functions#to-int-bigint)
   * [toString(BigInt): String](/ru/ride/v5/functions/built-in-functions/converting-functions#to-string-bigint)
* Добавлены встроенные функции:
   * [isDataStorageUntouched](/ru/ride/v5/functions/built-in-functions/account-data-storage-functions#isdatastorageuntouched) — проверяет, что хранилище данных указанного аккаунта никогда не содержало записей.
   * [hashScriptAtAddress](/ru/ride/v5/functions/built-in-functions/blockchain-functions#hashscriptataddress) — возвращает [BLAKE2b-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29)-хеш скрипта, установленного на аккаунте.

<!--* Добавлены [функции хранилища данных аккаунта](/ru/ride/v5/functions/built-in-functions/account-data-storage-functions), позволяющие dApp-скрипту читать данные собственного хранилища данных на любом этапе вычислений:
   * `getBinary(key: String): ByteVector|Unit`
   * `getBinaryValue(key: String): ByteVector`
   * `getBoolean(key: String): Boolean|Unit`
   * `getBooleanValue(key: String): Boolean`
   * `getInteger(key: String): Int|Unit`
   * `getIntegerValue(key: String): Int`
   * `getString(key: String): String|Unit`
   * `getStringValue(key: String): String`-->

### Node REST API

#### Ломающие изменения

<!--* Добавлен новый тип транзакции: [транзакция продолжения](/ru/blockchain/transaction-type/continuation-transaction).-->
Лизинг может быть создан не только в результате транзакции лизинга, но и в результате транзакции вызова скрипта с помощью действия скрипта `Lease`. Поэтому изменен формат ответа следующих методов:
* В ответе методов `/transactions/address/{address}/limit/{limit}` и `/transactions/info/{id}` для транзакции отмены лизинга структура `lease` теперь содержит не транзакцию лизинга, а структуру с параметрами лизинга.
* `/leasing/active/{address}` возвращает не массив транзакций лизинга, а массив структур c параметрами лизингов.

<details>
<summary>Формат</summary>
    
```json
"lease":
   {
      "id": "4AZU8XPATw3QTX3BLyyc1iAZeftSxs7MUcZaXgprnzjk",
      "originTransactionId": "4AZU8XPATw3QTX3BLyyc1iAZeftSxs7MUcZaXgprnzjk",
      "sender": "3PC9BfRwJWWiw9AREE2B3eWzCks3CYtg4yo",
      "recipient": "3PMj3yGPBEa1Sx9X4TSBFeJCMMaE3wvKR4N",
      "amount": 1000000000000,
      "height": 2253315
   }
```

Поле `originTransactionId` может содержать идентификатор транзакции лизинга или транзакции вызова скрипта.
</details>

#### Семантические изменения

<!--* В ответ методов, возвращающих транзакции, для [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction) версии 3 добавлены поля `extraFeePerStep` и `continuationTransactionIds`, а также значение `script_execution_in_progress` для поля `applicationStatus`.-->
* Результат вызова dApp из dApp добавлен в виде массива `invokes` в структуру `stateChanges`, возвращаемую следующими методами:
   * `/transactions/info/{id}`
   * `/transactions/address/{address}/limit/{limit}`

   Каждый элемент массива `invokes`, в свою очередь, содержит `stateChanges`.
   
   <details>
      <summary>Формат</summary>
    
   ```json
   "stateChanges": {
     "data": [],
     "transfers": [],
     "issues": [],
     "reissues": [],
     "burns": [],
     "invokes": [
       {
         "dApp": "3PC9BfRwJWWiw9AREE2B3eWzCks3CYtg4yo",
         "payment": [
           {
             "amount": 50000000,
             "assetId": "DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p"
           }
         ],
         "call": {
           "function": "swapNeutrinoToWaves",
           "args": [
             {
               "type": "string",
               "value": "EUR"
             },
             {
               "type": "integer",
               "value": 843699
             },
             {
               "type": "binary",
               "value": "base64:OK+armP11YmAyoQOwl8jLDLi2dK2sRc1Ue2QzZX1wgRmwGASLhllv1iKg2fRKS8cAlSDrfMYPb6374WMC9gFgA=="
             }
           ]
          },
         "stateChanges": {
            "data": [],
            "transfers": [],
            "issues": [],
            "reissues": [],
            "burns": [],
            "sponsorFees": [],
            "invokes": []
          }
       }
      ]
   }
   ```
   </details>

* Результат действий скрипта `Lease` и `LeaseCancel` также добавлен в структуру `stateChanges`.

   <details>
      <summary>Формат</summary>

   ```json
   "stateChanges": {
      "leases": [
         {
            "id": "F3ZmBbig3gekPu4a8fyrZGiU53MFxtFSWKw5dTyTMvq7",
            "originTransactionId": "6GLmdBZZeevtbomFYif5ys7Ltf2DuXMGP29bLrSoX9HA",
            "sender": "3MUAwJP3ThWNrRcxwAB8QHrvo7BEQbRFdu9",
            "recipient": "3MbwwebM61Y11UFZwkdQ1gXUJjY27ww1r6z",
            "amount": 200000000,
            "height": 739442
         },
      ],
      "leaseCancels": [
         {
            "id": "DH7N1XW7tTNwHBmFsfeArP6hWfzrC4fGcsKPEMfFZpPL",
            "originTransactionId": "DH7N1XW7tTNwHBmFsfeArP6hWfzrC4fGcsKPEMfFZpPL",
            "sender": "3MUAwJP3ThWNrRcxwAB8QHrvo7BEQbRFdu9",
            "recipient": "3MbwwebM61Y11UFZwkdQ1gXUJjY27ww1r6z",
            "amount": 300000000,
            "height": 739436
         }
      ]
   }
   ```
   </details>

* Результат действий скрипта `Lease` и `LeaseCancel` добавлен в структуру `trace`, возвращаемую следующими методами:
   * `/transactions/broadcast` c параметром `trace=true`
   * `/debug/validate` c параметром `trace=true`

   <details>
      <summary>Формат</summary>

   ```json
   "trace": [
      {
         "id": "3MosFNQAFGskNDnYzRBgMbfod6xXPdG96ME",
         "type": "dApp",
         "vars": [
            {
               "name": "amount",
               "type": "integer",
               "value": 12345
            }
         ],
         "result": {
            "leases": [
               {
                  "id": "F3ZmBbig3gekPu4a8fyrZGiU53MFxtFSWKw5dTyTMvq7",
                  "originTransactionId": "6GLmdBZZeevtbomFYif5ys7Ltf2DuXMGP29bLrSoX9HA",
                  "sender": "3MUAwJP3ThWNrRcxwAB8QHrvo7BEQbRFdu9",
                  "recipient": "3MbwwebM61Y11UFZwkdQ1gXUJjY27ww1r6z",
                  "amount": 200000000,
                  "height": 739442
               },
            ],
            "leaseCancels": [
               {
                  "id": "DH7N1XW7tTNwHBmFsfeArP6hWfzrC4fGcsKPEMfFZpPL",
                  "originTransactionId": "DH7N1XW7tTNwHBmFsfeArP6hWfzrC4fGcsKPEMfFZpPL",
                  "sender": "3MUAwJP3ThWNrRcxwAB8QHrvo7BEQbRFdu9",
                  "recipient": "3MbwwebM61Y11UFZwkdQ1gXUJjY27ww1r6z",
                  "amount": 300000000,
                  "height": 739436
               }
            ]
         }
      }
   ]
   ```
   </details>

#### Улучшения

* Новый метод `/leasing/info` возвращает параметры лизингов с указанными идентификаторами.

   <details>
      <summary>Формат</summary>
    
   ```json
   [
      {
         "id": "5fmWxmtrqiMp7pQjkCZG96KhctFHm9rJkMbq2QbveAHR",
         "originTransactionId": "22wXWZoPdzETzzsVtB5aybXimbgfkgYFcQ1U51ftHbAh",
         "sender": "3P3Dwc7aAeG8VgpZBNKsAAaXHqrq3dR4ffn",
         "recipient": "3PMj3yGPBEa1Sx9X4TSBFeJCMMaE3wvKR4N",
         "amount": 1000000000000,
         "height": 2253315,
         "status": "active"
      },
      {
         "id": "5fmWxmtrqiMp7pQjkCZG96KhctFHm9rJkMbq2QbveAHR",
         "originTransactionId": "22wXWZoPdzETzzsVtB5aybXimbgfkgYFcQ1U51ftHbAh",
         "sender": "3P3Dwc7aAeG8VgpZBNKsAAaXHqrq3dR4ffn",
         "recipient": "3PMj3yGPBEa1Sx9X4TSBFeJCMMaE3wvKR4N",
         "amount": 1000000000000,
         "height": 2253315,     
         "status": "canceled",
         "leaseCancelTransactionId": "22wXWZoPdzETzzsVtB5aybXimbgfkgYFcQ1U51ftHbAh",
         "leaseCancellationHeight": 2278654
      }
   ]
   ```

    Если база данных на ноде не была перестроена после активации фичи №&nbsp;16, метод не возвращает поле `leaseCancelTransactionId` для лизингов, отмененных до активации фичи №&nbsp;16.
   </details>

* Новый метод `/utils/heightByTimestamp` возвращает высоту блокчейна в указанный момент времени.

### Активация

Чтобы активировать перечисленные выше улучшения, голосуйте за фичу №&nbsp;16 “Ride V5, dApp-to-dApp invocations”.

## Версия 1.2

### Развитие протокола

* Усовершенствован механизм [генерации блоков](/ru/blockchain/block/block-generation/) за счет использования [VRF](https://en.wikipedia.org/wiki/Verifiable_random_function) (Verifiable random function). Это улучшение позволяет противостоять атакам типа stake grinding, при помощи которых злоумышленники пытаются повысить для себя вероятность генерации блока.
* Добавлено сохранение транзакций с неудачным результатом выполнения скрипта. Транзакции вызова скрипта и транзакции обмена сохраняются на блокчейне и за них взимается комиссия, даже если результат выполнения dApp-скрипта или скрипта ассета был неудачным (при условии что транзакция прошла проверку подписи отправителя или проверку скриптом аккаунта, а при вызове скрипта сложность вычислений превысила порог для сохранения неуспешных транзакций). [Подробнее](/ru/keep-in-touch/april)
* Реализована возможность изменять наименование и описание ассета. Для этого добавлен новый тип транзакции — [транзакция обновления информации ассета](/ru/blockchain/transaction-type/update-asset-info-transaction). Изменение возможно не чаще чем через 10 блоков на Stagenet и не чаще чем через 100&nbsp;000 блоков на Mainnet и Testnet.
* Реализована возможность удалять записи в хранилище данных аккаунта. Это действие может быть выполнено при помощи [транзакции данных](/ru/blockchain/transaction-type/data-transaction) либо структуры [DeleteEntry](/ru/ride/structures/script-actions/delete-entry) языка Ride.
* Снижена [минимальная комиссия](/ru/blockchain/transaction/transaction-fee) за транзакцию довыпуска и транзакцию спонсирования — с 1 до 0,001 WAVES.
* Бинарные форматы транзакций реализованы на основе [protobuf](https://developers.google.com/protocol-buffers/docs/overview?hl=ru).
* В [транзакции выпуска](/ru/blockchain/transaction-type/issue-transaction) формат полей `name` и `description` изменен с bytes на string.
* В [транзакции данных](/ru/blockchain/transaction-type/transfer-transaction) максимальный размер данных увеличен до 165&nbsp;890 байт.
* В [транзакции обмена](/ru/blockchain/transaction-type/exchange-transaction) ордера на покупку и продажу могут быть указаны в любом порядке.
* Изменена формула расчета price в [ордерах](/ru/blockchain/order). Ранее, при определении price для ассетов с разным количеством десятичных знаков, возникала проблема с величиной price. Её максимальное значение зависело от разности десятичных знаков ассетов. К примеру, price для [NFT](/ru/blockchain/token/non-fungible-token)-ассета не мог превышать 1000 WAVES. Измененная формула исправляет эту проблему. Разность  десятичных знаков больше не влияет на максимальный размер price.
* Минимальный интервал между блоками увеличен с 5 до 15 секунд. Среднее время генерации блока установлено в 60 секунд вместо ~59.
* Изменена схема подписания майнящей нодой транзакций блока. Ранее майнящей ноде требовалось подписывать блок вместе со всеми транзакциями. Теперь в заголовок блока добавлен [корневой хеш транзакций](/ru/blockchain/block/merkle-root), поэтому достаточно подписать только заголовок.
* В качестве идентификатора блока используется хеш BLAKE2b-256 заголовка блока.
* Теперь при валидации транзакции перед ее добавлением в пул неподтвержденных транзакций учитываются изменения состояния блокчейна, внесенные транзакциями, которые были ранее добавлены в блок, но затем возвращены в пул неподтвержденных транзакций из-за появления нового ключевого блока, ссылающегося на один из предшествующих микроблоков.
* dApp не может вызвать самого себя с помощью транзакции вызова скрипта с приложенными платежами. dApp также не может переводить средства самому себе с помощью действия скрипта `ScriptTransfer`.

### Обновления REST API

В релизе ноды 1.2 внесены **семантические и ломающие изменения** в API. Прочитайте внимательно описание изменений: они могут повлиять на работу приложений при миграции с версии 1.1.

#### Семантические изменения

* Транзакции вызова скрипта и транзакции обмена могут быть [сохранены как неуспешные](/ru/keep-in-touch/april). Их присутствие на блокчейне не означает, что изменения применены: нужно проверить также поле `applicationStatus`. Его возвращают следующие методы:
   * `/blocks/{id}`
   * `/blocks/address/{address}/{from}/{to}`
   * `/blocks/at/{height}`
   * `/blocks/last`
   * `/blocks/seq/{from}/{to}`
   * `/debug/stateChanges/address/{address}/limit/{limit}`
   * `/debug/stateChanges/info/{id}`
   * `/transactions/address/{address}/limit/{limit}`
   * `/transactions/info/{id}`
   * `/transactions/status`

   Значения `applicationStatus`:
   * `succeeded` — транзакция успешна;
   * `script_execution_failed` — результат выполнения dApp-скрипта или скрипта ассета был неудачным.

* Для неуспешных транзакций вызова скрипта причина ошибки указывается в структуре `error` в ответе методов:
   * `/debug/stateChanges/address/{address}/limit/{limit}`
   * `/debug/stateChanges/info/{id}`

   Формат:

   ```json
   "stateChanges": {
      "error": { "code": number, "text": string }
   }
   ```

   Коды ошибок:

   1 — ошибка выполнения dApp-скрипта

   2 — недостаточно комиссии для оплаты действий скрипта

   3 — скрипт ассета в действиях dApp-скрипта отклонил транзакцию

   4 — скрипт ассета в приложенных платежах отклонил транзакцию

* Для транзакции вызова скрипта результат новых [действий скрипта](/ru/ride/structures/script-actions/) отображается в ответе методов:
   * `/debug/stateChanges/address/{address}/limit/{limit}`
   * `/debug/stateChanges/info/{id}`

   Формат:

   ```json
   "stateChanges": {
      "data": [],
      "transfers": [],
      "issues": [],
      "reissues": [],
      "burns": [],
      "sponsorFees": []
   }
   ```

* Для блока версии 5 поле `reference` ссылается на `id` предыдущего блока, а не на `signature`, как в версии 4.

#### Ломающие изменения

* Получение блока по `id` вместо `signature`.

   Удалены методы:
   * `/blocks/signature/{signature}` — вместо него используйте `/blocks/{id}`
   * `/blocks/child/{signature}`

   Затронуты методы:
   * `/blocks/delay/{id}/{blockNum}`
   * `/blocks/height/{id}`
   * `/debug/rollback-to/{id}`

* Удален метод `/consensus/generationsignature`.
* Изменена структура `meta` в ответе метода `/addresses/scriptInfo/{address}/meta`. Список аргументов теперь представлен в виде массива объектов, а не map.

   Было:
   
   ```json
   "meta": {
      "callableFuncTypes": {
         "funcName": { 
            "arg1": string,
            "arg2": string
         }
      }
   }
   ```

   Стало:

   ```json
   "meta": {
      "callableFuncTypes": {
         "funcName": [ 
            { "name": string, "type": string },
            { "name": string, "type": string }
         ]
      }
   }
   ```

* Добавлен новый тип транзакции: транзакция обновления информации ассета.
* Транзакция вызова скрипта может содержать аргументы типа `List`.

   Пример:

   ```json
   { "call": { "function": string, "args": [ ["arg1-item1", "arg1-item2", "arg1-item3"] ] } }
   ```

* Записи в хранилище данных аккаунта могут быть удалены транзакциями данных и транзакциями вызова скрипта. Удаление записи выглядит как структура `{ "key": string, "value": null }`, где `value` равно null, а `type` отсутствует. Затронуты методы:
   * `/blocks/{id}`
   * `/blocks/address/{address}/{from}/{to}`
   * `/blocks/at/{height}`
   * `/blocks/last`
   * `/blocks/seq/{from}/{to}`
   * `/debug/stateChanges/address/{address}/limit/{limit}`
   * `/debug/stateChanges/info/{id}`
   * `/transactions/address/{address}/limit/{limit}`
   * `/transactions/info/{id}`

* Транзакция обмена версии 3 может содержать ордера на покупку и продажу в любом порядке.

#### Улучшения

* Метод `/debug/validate` не требует указания API-key.
* Метод `/assets/details` позволяет получать информацию сразу по нескольким ассетам. В ответ добавлено поле `originTransactionId`, содержащее ID транзакции, выпустившей ассет. Кроме того, поддерживаются POST-запросы.
* Метод `/addresses/balance` позволяет получать балансы сразу для нескольких адресов на заданной высоте, не далее 2000 от текущей.
* В ответ метода `/assets/nft/{address}/limit/{limit}` добавлен массив `assetDetails` со списком NFT, принадлежащих адресу. Также поддерживаются POST-запросы.
* Следующие методы возвращают сложность каждой вызываемой функции и функции-верификатора:
   * `/addresses/scriptInfo/{address}`
   * `/utils/script/compileCode`
   * `/utils/script/estimate`

   Формат:

   ```json
   {
      "complexity": number,
      "callableComplexities": { "funcName1": number, "funcName2": number },
      "verifierComplexity": number
   }
   ```

* Новый метод `/transactions/merkleProof` принимает на вход ID транзакции или массив ID транзакций и возвращает массив доказательств для проверки присутствия транзакции в блоке.
* В следующие методы добавлены поля `id` и `transactionsRoot`:
   * `/blocks/{id}`
   * `/blocks/headers/last`
   * `/blocks/headers/seq/{from}/{to}`
   * `/blocks/headers/at/{height}`
   * `/blocks/at/{height}`
   * `/blocks/address/{address}/{from}/{to}`
   * `/blocks/last`
   * `/blocks/seq/{from}/{to}`

### Изменения Ride

* Выпущена версия 4 [Стандартной библиотеки](/ru/ride/script/standard-library).
* Добавлены действия скрипта, которые может выполнять [вызываемая функция](/ru/ride/functions/callable-function) dApp-скрипта:
   * [Issue](/ru/ride/structures/script-actions/issue) — выпуск токена.
   * [Reissue](/ru/ride/structures/script-actions/reissue) — довыпуск токена.
   * [Burn](/ru/ride/structures/script-actions/burn) — сжигание токена.
   * [SponsorFee](/ru/ride/structures/script-actions/sponsor-fee) — настройка спонсирования.
   * [BooleanEntry](/ru/ride/structures/script-actions/boolean-entry), [BinaryEntry](/ru/ride/structures/script-actions/binary-entry), [IntegerEntry](/ru/ride/structures/script-actions/int-entry), [StringEntry](/ru/ride/structures/script-actions/string-entry) — добавление или изменение записи соответствующего типа в хранилище данных аккаунта. Эти действия используются вместо [DataEntry](/ru/ride/structures/script-actions/data-entry), которая не поддерживается в версии 4.
   * [DeleteEntry](/ru/ride/structures/script-actions/delete-entry) — удаление записи из хранилища данных аккаунта.
* Изменен формат результата вызываемой функции: в версии 4 результат представляет собой список действий скрипта. Структуры `ScriptResult`, `WriteSet` и `TransferSet` не поддерживаются.
* Комиссия за выполнение транзакции вызова скрипта увеличивается на 1 WAVES за каждый ассет (кроме NFT), выпущенный при помощи структуры `Issue`.
* Реализована возможность обрабатывать в dApp до двух платежей, приложенных к транзакции вызова скрипта.
* Реализована возможность использовать список в качестве аргумента вызываемой функции.
* Добавлены встроенные функции:
   * [bn256groth16Verify](/ru/ride/functions/built-in-functions/verification-functions#bn256groth16verify) — семейство функций верификации доказательства с нулевым разглашением [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) по протоколу groth16 на кривой bn254. Сложность 800–1650 в зависимости от размера массива публичных входов.
   * [calculateAssetId](/ru/ride/functions/built-in-functions/blockchain-functions#calculateassetid) — получает ID ассета, сформированного структурой [Issue](/ru/ride/structures/script-actions/issue) при выполнении транзакции вызова скрипта. Сложность равна 10.
   * [contains](/ru/ride/functions/built-in-functions/string-functions#contains-string-string-boolean) — проверяет, содержит ли строка заданную подстроку. Сложность 3.
   * [containsElement](/ru/ride/functions/built-in-functions/list-functions#containselement) — проверяет наличие элемента в списке. Сложность 5.
   * [createMerkleRoot](/ru/ride/functions/built-in-functions/verification-functions##createmerkleroot) — вычисляет [корневой хеш дерева Меркла транзакций блока](/ru/blockchain/block/merkle-root). Сложность 30.
   * [ecrecover](/ru/ride/functions/built-in-functions/verification-functions#ecrecover) — возвращает открытый ключ, восстановленный из хеша сообщения и цифровой подписи [ECDSA](https://ru.wikipedia.org/wiki/ECDSA). Сложность 70.
   * [groth16Verify](/ru/ride/functions/built-in-functions/verification-functions#groth16verify) — семейство функций верификации доказательства с нулевым разглашением [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) по протоколу groth16 на кривой bls12-381. Сложность 1200–2700 в зависимости от размера массива публичных входов.
   * [indexOf](/ru/ride/functions/built-in-functions/list-functions#indexof) — возвращает индекс первого вхождения элемента в списке. Сложность 5.
   * [lastIndexOf](/ru/ride/functions/built-in-functions/list-functions#lastindexof) — возвращает индекс последнего вхождения элемента в списке. Сложность 5.
   * [makeString](/ru/ride/functions/built-in-functions/string-functions#makestring-list-string-string-string) — объединяет строки из списка, используя разделитель. Сложность 30.
   * [max](/ru/ride/functions/built-in-functions/list-functions#max) — возвращает наибольший элемент в списке. Сложность 3.
   * [median](/ru/ride/functions/built-in-functions/math-functions#median) — вычисляет медиану списка целых чисел. Сложность 20.
   * [min](/ru/ride/functions/built-in-functions/list-functions#min) — возвращает наименьший элемент в списке. Сложность 3.
   * [removeByIndex](/ru/ride/functions/built-in-functions/list-functions#removebyindex) — удаляет элемент из списка по индексу. Сложность 7.
   * [transferTransactionFromProto](/ru/ride/functions/built-in-functions/converting-functions#transfertransactionfromproto) — десериализует транзакцию перевода. Сложность 5.
   * [valueOrElse(t: T|Unit, t0 : T)](/ru/ride/functions/built-in-functions/union-functions#valueOrElse) — получение значения из параметра типа данных объединение. Сложность 2.
* Встроенная функция [wavesBalance](/ru/ride/functions/built-in-functions/blockchain-functions#waves-balance) возвращает структуру [BalanceDetails](/ru/ride/structures/common-structures/balance-details), которая содержит все виды баланса WAVES.
* В структуру [Asset](/ru/ride/structures/common-structures/asset), возвращаемую встроенной функцией [assetInfo](/ru/ride/functions/built-in-functions/blockchain-functions#assetinfo), добавлены поля `name` и `description`.
* Для встроенных [функций хеширования](/ru/ride/functions/built-in-functions/hashing-functions) `blakeb256`, `keccak256`, `sha256` и встроенных [функций верификации](/ru/ride/functions/built-in-functions/verification-functions) `rsaVerify`, `sigVerify` в версии 4 изменена сложность и добавлены семейства аналогичных функций с различной сложностью в зависимости от размера аргумента. Если размер данных известен заранее, можно использовать более «дешевую» функцию.
* Изменена сложность некоторых встроенных функций. Список приведен в разделе [Встроенные функции](/ru/ride/functions/built-in-functions/).
* Следующие функции не поддерживаются в версии 4:
   * [extract](/ru/ride/functions/built-in-functions/union-functions#extract-t-unit-t) — вместо нее рекомендуется использовать [value](/ru/ride/functions/built-in-functions/union-functions#value-t-unit-t);
   * [checkMerkleProof](/ru/ride/functions/built-in-functions/verification-functions#checkmerkleproof) — вместо нее рекомендуется использовать [createMerkleRoot](/ru/ride/functions/built-in-functions/verification-functions#createmerkleroot)
* Добавлены встроенные операторы работы со списками:
   * Конкатенация при помощи оператора `++`. Пример: результатом выражения `[1, 2] ++ [3, 4]` будет `[1, 2, 3, 4]`. Сложность равна 4.
   * Добавление элемента в конец списка. Пример: результатом выражения `["foo","bar"] :+ "baz"` будет `["foo", "bar", "baz"]`. Сложность равна 1.
* Добавлен тип данных [Кортеж](/ru/ride/data-types/tuple).
* Максимальная сложность скрипта аккаунта и функции-верификатора скрипта dApp изменена на 2000 для новых скриптов, независимо от версии Стандартной библиотеки.

   Максимальная сложность скрипта ассета и вызываемой функции скрипта dApp осталась прежней — 4000.
* Изменен максимальный размер данных:
   * [String](/ru/ride/data-types/string) — 32&nbsp;767 байт
   * [ByteVector](/ru/ride/data-types/byte-vector) — 32&nbsp;767 байт (кроме поля `bodyBytes` структуры транзакции)

### Waves Explorer

* Добавлено отображение транзакций с неудачным результатом выполнения dApp-скрипта или скрипта ассета, сохраненных на блокчейне. В списке транзакций они отмечены значком ![](./_assets/stop.png).
* Для транзакции вызова скрипта поддерживается отображение нескольких платежей. Результат выполнения скрипта отображается в виде таблицы.
* Добавлено отображение нового типа транзакций — транзакций обновления информации ассета.
* На страницу с информацией об ассете добавлена ссылка на транзакцию выпуска ассета.
* На страницу с информацией о блоке добавлено поле Block ID.
