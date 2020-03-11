# Версия 1.2 (Экспериментальная сеть)

## Улучшения Node

* Усовершенствован механизм [генерации блоков](/ru/blockchain/block/block-generation) за счет использования [VRF](https://en.wikipedia.org/wiki/Verifiable_random_function) (Verifiable random function). Это улучшение позволяет противостоять атакам типа stake grinding, при помощи которых злоумышленники пытаются повысить для себя вероятность генерации блока.
* Изменена схема подписания майнящей нодой транзакций блока. Ранее майнящей ноде требовалось подписывать заголовок блока вместе со всеми транзакциями. Теперь в заголовок добавляется [MerkleRootHash](https://en.wikipedia.org/wiki/Merkle_tree), который содержит хеши всех транзакций блока. Благодаря этому отпадает необходимость подписывать все транзакции, достаточно подписать только заголовок.
* Реализована возможность удалять записи в хранилище данных аккаунта. Это действие может быть выполнено при помощи [транзакции данных](/ru/blockchain/transaction-type/data-transaction) либо структуры [DeleteEntry](/ru/ride/structures/common-structures/delete-entry) языка Ride.
* Реализована возможность изменять наименование и описание выпущенных ассетов. Для этого предлагается использовать транзакцию нового типа, называемую [транзакцией обновления информации ассета](/ru/blockchain/transaction-type/update-asset-info-transaction).
* Снижена минимальная комиссия за [транзакцию довыпуска](/ru/blockchain/transaction-type/reissue-transaction) — с 1 до 0,001 WAVES.
* Добавлена возможность описания транзакций в формате protobuf.
* В [транзакции выпуска](/ru/blockchain/transaction-type/issue-transaction) формат полей `name` и `description` изменён с bytes на string.
* В [транзакции перевода](/ru/blockchain/transaction-type/transfer-transaction) и [транзакции массового перевода](/ru/blockchain/transaction-type/mass-transfer-transaction) изменён тип поля `attachment` на [union](/ru/ride/data-types/union) `(type: Int|Boolean|ByteVector|String)`.
* Максимальный размер данных в транзакции данных увеличен до 165890 байта.
* Изменена формула расчёта price в [ордерах](/ru/blockchain/order). Ранее, при определении price для ассетов с разным количеством десятичных знаков, возникала проблема с величиной price. Её максимальное значение зависело от разности десятичных знаков ассетов. К примеру, price для [NFT](/ru/blockchain/token/non-fungible-token)-ассета не мог превышать 1000 WAVES. Изменённая формула исправляет эту проблему. Разность  десятичных знаков больше не влияет на максимальный размер price.

## Обновление REST API

* Доработан endpoint `GET /assets/details/{assetId}`. Теперь он позволяет получать информацию по нескольким ассетам, перечисленным в списке. Для запроса к `/assets/details/{assetId}` теперь можно использовать метод POST. В JSON ответа добавлен объект `originTransactionId`, содержащий ID транзакции, выпустившей ассет с `{assetId}`.
* Доработан endpoint `GET /assets/nft/{address}/limit/{limit}`. В JSON ответа добавлен массив `assetDetails`, содержащий список NFT-ассетов, принадлежащих указанному адресу. Кроме того, добавлена возможность совершать запрос к `/assets/nft/{address}/limit/{limit}` при помощи метода POST.
* Реализован метод `GET /transactions/merkleProof?id=some1&id=some2`. Данный метод принимает на вход ID транзакции или массив ID транзакций и возвращает массив доказательств для проверки `MerkleRootHash`.
* В следующий список endpoints добавлен объект `transactionsRoot`, возвращающий `MerkleRootHash` транзакций блока.
  * `GET /blocks/headers/last`
  * `GET /blocks/headers/seq/{from}/{to}`
  * `GET /blocks/headers/at/{height}`
  * `GET /blocks/at/{height}`
  * `GET /blocks/signature/{signature}`
  * `GET /blocks/address/{address}/{from}/{to}`
  * `GET /blocks/last`
  * `GET /blocks/seq/{from}/{to}`

## Улучшения Ride

* Выпущена четвертая версия [стандартной библиотеки](/ru/ride/script/standard-library).
* Добавлена встроенная математическая функция [median(List[Int])](/ru/ride/functions/built-in-functions/math-functions#median). Эта функция служит для вычисления медианы списка целых чисел. Complexity функции равна 10.
* Добавлена функция [calculateAssetId](/ru/ride/functions/built-in-functions/blockchain-functions#calculate), вычисляющая ID ассета, сформированного структурой [Issue](/ru/ride/structures/common-structures/issue) при выполнении транзакции вызова скрипта.
* Добавлена структура DeleteEntry для удаления данных из [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage).
* Добавлена возможность выпускать, довыпускать и сжигать токены из скрипта [dApp](/ru/blockchain/account/dapp). В одной транзакции можно выполнить до 10 вызовов функций для выпуска/довыпуска/сжигания токенов.
* Комиссия за выполнение транзакции вызова скрипта увеличивается на 1 WAVES за каждый не NFT-ассет, выпущенный при помощи структуры Issue.
* Изменен формат результата [callable](/ru/ride/functions/callable-function) функций. Из него удалены структуры ScriptResult, WriteSet и TransferSet. Вместо них можно просто возвращать список результатов в любом порядке: [[StringEntry](/ru/ride/structures/common-structures/string-entry), [Issue](/ru/ride/structures/common-structures/issue), [ScriptTransfer](/ru/ride/structures/common-structures/script-transfer), [BooleanEntry](/ru/ride/structures/common-structures/boolean-entry), [BinaryEntry](/ru/ride/structures/common-structures/binary-entry), [IntegerEntry](/ru/ride/structures/common-structures/int-entry), [DeleteEntry](/ru/ride/structures/common-structures/delete-entry), [Reissue](/ru/ride/structures/common-structures/reissue), [Burn](/ru/ride/structures/common-structures/burn)].
* Структура [DataEntry](/ru/ride/structures/common-structures/data-entry) удалена. Вместо неё добавлены следующие структуры:
  * BinaryEntry. Выполняет запись бинарных данных в хранилище данных аккаунта.
  * BooleanEntry. Выполняет булевую запись данных в хранилище данных аккаунта.
  * IntegerEntry. Выполняет запись целочисленных данных в хранилище данных аккаунта.
  * StringEntry. Выполняет запись строковых данных в хранилище данных аккаунта.
* Реализована возможность обрабатывать в dApp до двух платежей, приложенных к транзакции вызова скрипта.
* Добавлено семейство встроенных функций верификации [доказательства с нулевым разглашением](https://ru.wikipedia.org/wiki/Доказательство_с_нулевым_разглашением) [groth16verify](/ru/ride/functions/built-in-functions/verification-functions#groth16verify), с различной сложностью в зависимости от размера массива публичных входов.
* Для встроенных функций хеширования `blakeb256`, `keccak256`, `sha256` и встроенных функций верификации `rsaVerify`, `sigVerify` в версии 4 изменена сложность и добавлены семейства аналогичных функций с различной сложностью в зависимости от размера аргумента.
* Добавлена функция [valueOrElse(t: T|Unit, t0 : T)](/ru/ride/functions/built-in-functions/union-functions#valueOrElse), возвращающая из параметра типа данных объединение значение, если оно не является пустым. Complexity функции равна 13.
* Добавлена встроенная функция [contains(source: String, substr: String)](/ru/ride/functions/built-in-functions/string-functions#contains), которая проверяет, содержится ли второй аргумент (подстрока) в первом строковом аргументе. Complexity функции равна 20.
* Реализована возможность использовать список в качестве аргумента функции.
* Добавлены встроенные функции работы со списками:
  * Конкатенация при помощи оператора `++`. Пример: результатом выражения `[1, 2] ++ [3, 4]` будет `[1, 2, 3, 4]`. Complexity операции равна 10.
  * Добавление элемента в конец списка. Пример: результатом выражения `["foo","bar"] :+ "baz"` будет `["foo", "bar", "baz"]`. Complexity операции равна 3.

## Активация

Активация перечисленных улучшений производится путем голосования за функциональности Feature 15 (VRF and Protobuf) и Feature 16 (Ride V4 and multiple attached payments for Invoke Script Transaction).
