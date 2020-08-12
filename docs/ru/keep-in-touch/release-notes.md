# Версия 1.2

## Улучшения ноды

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
* Изменена схема подписания майнящей нодой транзакций блока. Ранее майнящей ноде требовалось подписывать блок вместе со всеми транзакциями. Теперь в заголовок блока добавлен [корневой хеш транзакций](/ru/blockchain/block/merkle-root), поэтому достаточно подписать только заголовок.
* В качестве идентификатора блока используется хеш BLAKE2b-256 заголовка блока.
* Теперь при валидации транзакции перед ее добавлением в пул неподтвержденных транзакций учитываются изменения состояния блокчейна, внесенные транзакциями, которые были ранее добавлены в блок, но затем возвращены в пул неподтвержденных транзакций из-за появления нового ключевого блока, ссылающегося на один из предшествующих микроблоков.

## Обновления REST API

В релизе ноды 1.2 внесены **семантические и ломающие изменения** в API. Прочитайте внимательно описание изменений: они могут повлиять на работу приложений при миграции с версии 1.1.

### Семантические изменения

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

### Ломающие изменения

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

### Улучшения

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

## Изменения Ride

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
   * [makeString](/ru/ride/functions/built-in-functions/string-functions#makestring-list-string-string-string) — объединяет строки из списка, используя разделитель. Сложность 10.
   * [max](/ru/ride/functions/built-in-functions/list-functions#max) — возвращает наибольший элемент в списке. Сложность 3.
   * [median](/ru/ride/functions/built-in-functions/math-functions#median) — вычисляет медиану списка целых чисел. Сложность 20.
   * [min](/ru/ride/functions/built-in-functions/list-functions#min) — возвращает наименьший элемент в списке. Сложность 3.
   * [removeByIndex](/ru/ride/functions/built-in-functions/list-functions#removebyindex) — удаляет элемент из списка по индексу. Сложность 7.
   * [transferTransactionFromProto](/ru/ride/functions/built-in-functions/converting-functions#transfertransactionfromproto) — десериализует транзакцию перевода. Сложность 5.
   * [valueOrElse(t: T|Unit, t0 : T)](/ru/ride/functions/built-in-functions/union-functions#valueOrElse) — получение значения из параметра типа данных объединение. Сложность 2.
* Встроенная функция [wavesBalance](/ru/ride/functions/built-in-functions/account-data-storage-functions#waves-balance) возвращает структуру [BalanceDetails](/ru/ride/structures/common-structures/balance-details), которая содержит все виды баланса WAVES.
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

## Waves Explorer

* Добавлено отображение транзакций с неудачным результатом выполнения dApp-скрипта или скрипта ассета, сохраненных на блокчейне. В списке транзакций они отмечены значком ![](./_assets/stop.png).
* Для транзакции вызова скрипта поддерживается отображение нескольких платежей. Результат выполнения скрипта отображается в виде таблицы.
* Добавлено отображение нового типа транзакций — транзакций обновления информации ассета.
* На страницу с информацией об ассете добавлена ссылка на транзакцию выпуска ассета.
* На страницу с информацией о блоке добавлено поле Block ID.

## Активация

Активация перечисленных улучшений производится путем голосования за фичу №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”.
