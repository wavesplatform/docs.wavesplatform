# Версия 1.2 (Stagenet)

## Улучшения ноды

* Добавлено сохранение транзакций с неудачным результатом выполнения скрипта. Транзакции вызова скрипта и транзакции обмена сохраняются на блокчейне и за них взимается комиссия, даже если результат выполнения dApp-скрипта или скрипта ассета был неудачным (при условии что транзакция прошла проверку подписи отправителя или проверку скриптом аккаунта, а при вызове скрипта сложность вычислений превысила порог для сохранения неуспешных транзакций). [Подробнее](/ru/keep-in-touch/april)
* Реализована возможность удалять записи в хранилище данных аккаунта. Это действие может быть выполнено при помощи [транзакции данных](/ru/blockchain/transaction-type/data-transaction) либо структуры [DeleteEntry](/ru/ride/structures/script-actions/delete-entry) языка Ride.
* Реализована возможность изменять наименование и описание ассета. Для этого добавлен новый тип транзакции — [транзакция обновления информации ассета](/ru/blockchain/transaction-type/update-asset-info-transaction). Изменение возможно не чаще чем через 10 блоков на Stagenet и не чаще чем через 100&nbsp;000 блоков на Mainnet и Testnet.
* Снижена [минимальная комиссия](/ru/blockchain/transaction/transaction-fee) за транзакцию довыпуска и транзакцию спонсирования — с 1 до 0,001 WAVES.
* В [транзакции выпуска](/ru/blockchain/transaction-type/issue-transaction) формат полей `name` и `description` изменен с bytes на string.
* В [транзакции перевода](/ru/blockchain/transaction-type/transfer-transaction) и [транзакции массового перевода](/ru/blockchain/transaction-type/mass-transfer-transaction) изменен тип поля `attachment` на [union](/ru/ride/data-types/union) `(type: Int|Boolean|ByteVector|String)`.
* В [транзакции данных](/ru/blockchain/transaction-type/transfer-transaction) максимальный размер данных увеличен до 165890 байт.
* В [транзакции обмена](/ru/blockchain/transaction-type/transfer-transaction) ордера на покупку и продажу могут быть указаны в любом порядке.
* Бинарные форматы транзакций реализованы на основе [protobuf](https://developers.google.com/protocol-buffers/docs/overview?hl=ru).
* Изменена формула расчета price в [ордерах](/ru/blockchain/order). Ранее, при определении price для ассетов с разным количеством десятичных знаков, возникала проблема с величиной price. Её максимальное значение зависело от разности десятичных знаков ассетов. К примеру, price для [NFT](/ru/blockchain/token/non-fungible-token)-ассета не мог превышать 1000 WAVES. Измененная формула исправляет эту проблему. Разность  десятичных знаков больше не влияет на максимальный размер price.
* Усовершенствован механизм [генерации блоков](/ru/blockchain/block/block-generation/) за счет использования [VRF](https://en.wikipedia.org/wiki/Verifiable_random_function) (Verifiable random function). Это улучшение позволяет противостоять атакам типа stake grinding, при помощи которых злоумышленники пытаются повысить для себя вероятность генерации блока.
* Изменена схема подписания майнящей нодой транзакций блока. Ранее майнящей ноде требовалось подписывать блок вместе со всеми транзакциями. Теперь в заголовок блока добавлен [корневой хеш транзакций](/ru/blockchain/block/merkle-root), поэтому достаточно подписать только заголовок.
* В качестве идентификатора блока используется хеш BLAKE2b-256 заголовка блока.

## Обновление Node API

* Доработан метод `GET /assets/details/{assetId}`. Теперь он позволяет получать информацию по нескольким ассетам, перечисленным в списке. Для запроса к `/assets/details/{assetId}` теперь можно использовать метод POST. В JSON ответа добавлен объект `originTransactionId`, содержащий ID транзакции, выпустившей ассет с `{assetId}`.
* Доработан метод `GET /assets/nft/{address}/limit/{limit}`. В JSON ответа добавлен массив `assetDetails`, содержащий список NFT-ассетов, принадлежащих указанному адресу. Кроме того, добавлена возможность совершать запрос к `/assets/nft/{address}/limit/{limit}` при помощи метода POST.
* Реализован метод `GET /transactions/merkleProof?id=some1&id=some2`. Данный метод принимает на вход ID транзакции или массив ID транзакций и возвращает массив доказательств для проверки присутствия транзакции в блоке.
* В методы, которые возвращают заголовок блока, добавлены поля `id` и `transactionsRoot`. Список методов:
   * `GET /blocks/headers/last`
   * `GET /blocks/headers/seq/{from}/{to}`
   * `GET /blocks/headers/at/{height}`
   * `GET /blocks/at/{height}`
   * `GET /blocks/signature/{signature}`
   * `GET /blocks/address/{address}/{from}/{to}`
   * `GET /blocks/last`
   * `GET /blocks/seq/{from}/{to}`
* В методы, которые возвращают транзакции, добавлено поле `applicationStatus`. `"applicationStatus": "scriptExecutionFailed"` означает, что результат выполнения dApp-скрипта или скрипта ассета был неудачным. Список методов:
   * `GET /blocks/{id}`
   * `GET /blocks/address/{address}/{from}/{to}`
   * `GET /blocks/at/{height}`
   * `GET /blocks/last`
   * `GET /blocks/seq/{from}/{to}`
   * `GET /debug/stateChanges/address/{address}/limit/{limit}`
   * `GET /debug/stateChanges/info/{id}`
   * `GET /transactions/address/{address}/limit/{limit}`
   * `GET /transactions/info/{id}`
   * `GET /transactions/status`
   * `POST /transactions/status`
* Следующие методы возвращают для транзакций вызова скрипта информацию о выпусках, довыпусках, сжиганиях токена и настройках спонсирования, а для транзакций с неудачным результатом выполнения скрипта — структуру `errorMessage` с описанием причины неудачи:
   * `/debug/stateChanges/address/{address}/limit/{limit}`
   * `/debug/stateChanges/info/{id}`

* Следующие методы, в дополнение к общей сложности скрипта, возвращают для dApp-скриптов сложность каждой вызываемой функции и функции-верификатора:
   * `GET /addresses/scriptInfo/{address}`
   * `POST /utils/script/compileCode`
   * `POST /utils/script/estimate`

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
* Реализована возможность использовать список в качестве аргумента вызываемой функции.
* Реализована возможность обрабатывать в dApp до двух платежей, приложенных к транзакции вызова скрипта.
* Добавлены встроенные функции:
   * [bn256groth16Verify](/ru/ride/functions/built-in-functions/verification-functions#bn256groth16verify) — семейство функций верификации доказательства с нулевым разглашением [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b). Сложность 800–1650 в зависимости от размера массива публичных входов.
   * [calculateAssetId](/ru/ride/functions/built-in-functions/blockchain-functions#calculate) — получает ID ассета, сформированного структурой [Issue](/ru/ride/structures/script-actions/issue) при выполнении транзакции вызова скрипта. Сложность равна 10.
   * [contains](/ru/ride/functions/built-in-functions/string-functions#contains-string-string-boolean) — проверяет, содержит ли строка заданную подстроку. Сложность 3.
   * [containsElement](/ru/ride/functions/built-in-functions/list-functions#containselement) — проверяет наличие элемента в списке. Сложность 5.
   * [createMerkleRoot](/ru/ride/functions/built-in-functions/verification-functions##createmerkleroot) — вычисляет [корневой хеш дерева Меркла транзакций блока](/ru/blockchain/block/merkle-root). Сложность 30.
   * [ecrecover](/ru/ride/functions/built-in-functions/verification-functions#ecrecover) — возвращает открытый ключ, восстановленный из хеша сообщения и цифровой подписи [ECDSA](https://ru.wikipedia.org/wiki/ECDSA). Сложность 70.
   * [groth16Verify](/ru/ride/functions/built-in-functions/verification-functions#groth16verify) — семейство функций верификации доказательства с нулевым разглашением [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b). Сложность 1200–2700 в зависимости от размера массива публичных входов.
   * [indexOf](/ru/ride/functions/built-in-functions/list-functions#indexof) — возвращает индекс первого вхождения элемента в списке. Сложность 5.
   * [lastIndexOf](/ru/ride/functions/built-in-functions/list-functions#lastindexof) — возвращает индекс последнего вхождения элемента в списке. Сложность 5.
   * [makeString](/ru/ride/functions/built-in-functions/string-functions#makestring-list-string-string-string) — объединяет строки из списка, используя разделитель. Сложность 10.
   * [max](/ru/ride/functions/built-in-functions/list-functions#max) — возвращает наибольший элемент в списке. Сложность 3.
   * [median](/ru/ride/functions/built-in-functions/math-functions#median) — вычисляет медиану списка целых чисел. Сложность 20.
   * [min](/ru/ride/functions/built-in-functions/list-functions#min) — возвращает наименьший элемент в списке. Сложность 3.
   * [transferTransactionFromProto](/ru/ride/functions/built-in-functions/converting-functions#transfertransactionfromproto) — десериализует транзакцию перевода. Сложность 5.
   * [valueOrElse(t: T|Unit, t0 : T)](/ru/ride/functions/built-in-functions/union-functions#valueOrElse) — получение значения из параметра типа данных объединение. Сложность 2.
* Встроенная функция [wavesBalance](/ru/ride/functions/built-in-functions/account-data-storage-functions#waves-balance) возвращает структуру [BalanceDetails](/ru/ride/structures/common-structures/balance-details), которая содержит все виды баланса WAVES.
* В структуру [Asset](/ru/ride/structures/common-structures/asset), возвращаемую встроенной функцией [assetInfo](/ru/ride/functions/built-in-functions/blockchain-functions#assetinfo), добавлены поля `name` и `description`.
* Для встроенных [функций хеширования](/ru/ride/functions/built-in-functions/hashing-functions) `blakeb256`, `keccak256`, `sha256` и встроенных [функций верификации](/ru/ride/functions/built-in-functions/verification-functions) `rsaVerify`, `sigVerify` в версии 4 изменена сложность и добавлены семейства аналогичных функций с различной сложностью в зависимости от размера аргумента. Если размер данных известен заранее, можно использовать более «дешевую» функцию.
* Изменена сложность некоторых встроенных функций. Список приведен в разделе [Встроенные функции](/ru/ride/functions/built-in-functions/).
* Добавлены встроенные функции работы со списками:
   * Конкатенация при помощи оператора `++`. Пример: результатом выражения `[1, 2] ++ [3, 4]` будет `[1, 2, 3, 4]`. Сложность равна 4.
   * Добавление элемента в конец списка. Пример: результатом выражения `["foo","bar"] :+ "baz"` будет `["foo", "bar", "baz"]`. Сложность равна 1.
* Добавлен тип данных [Кортеж](/ru/ride/data-types/tuple).
* Максимальная сложность скрипта аккаунта и функции-верификатора скрипта dApp изменена на 2000 для новых скриптов, независимо от версии Стандартной библиотеки.

   Максимальная сложность скрипта ассета и вызываемой функции скрипта dApp осталась прежней — 4000.
* Изменен максимальный размер данных:
   * [String](/ru/ride/data-types/string) — 32&nbsp;767 байт
   * [ByteVector](/ru/ride/data-types/byte-vector) — 32&nbsp;767 байт (кроме поля `bodyBytes` структуры транзакции)

## Waves Explorer

<https://stagenet.wavesexplorer.com/stagenet>

* Добавлено отображение транзакций с неудачным результатом выполнения dApp-скрипта или скрипта ассета, сохраненных на блокчейне. В списке транзакций они отмечены значком ![](./_assets/stop.png).
* Для транзакции вызова скрипта поддерживается отображение нескольких платежей. Результат выполнения скрипта отображается в виде таблицы.
* Добавлено отображение нового типа транзакций — транзакций обновления информации ассета.
* Для транзакций перевода и транзакций массового перевода поддерживается отображение приложений (attachment) всех типов.
* На страницу с информацией об ассете добавлена ссылка на транзакцию выпуска ассета.
* На страницу с информацией о блоке добавлено поле Block ID.

## Активация

Активация перечисленных улучшений производится путем голосования за фичу №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”.
