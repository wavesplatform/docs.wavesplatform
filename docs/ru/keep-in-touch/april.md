# Сохранение транзакций с неудачным результатом выполнения скрипта (апрель 2020)

Начиная с версии ноды 1.2.4, после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions” меняется порядок валидации транзакций:

* Транзакции вызова скрипта и транзакции обмена сохраняются на блокчейне и за них взимается комиссия, даже если результат выполнения dApp-скрипта или скрипта ассета был неудачным (при условии что транзакция прошла проверку подписи отправителя или проверку скриптом аккаунта).
* Становится невозможной оплата комиссии за транзакцию вызова скрипта за счет средств, переведенных dApp-скриптом отправителю. Если баланс отправителя недостаточен для оплаты комиссии, dApp-скрипт не выполняется.

[Подробнее о валидации транзакций](/ru/blockchain/transaction/transaction-validation)

В JSON-представление транзакции добавлено поле `applicationStatus`, которое содержит результат валидации:
* `succeed` — валидация прошла успешно.
* `scriptExecutionFailed` — результат выполнения dApp-скрипта или скрипта ассета был неудачным. Такая транзакция не приводит к изменениям в балансах (кроме взимания комиссии с отправителя) и в хранилищах данных аккаунтов.

Транзакции с неудачным результатом выполнения скрипта реализованы в протоколе Waves и поддержаны как в [Node Scala](https://github.com/wavesplatform/Waves/releases), так и в [Node Go](https://github.com/wavesplatform/gowaves/releases/) (релиз запланирован на 23 апреля), а также в следующих инструментах Waves.

## Node API

В следующие методы добавлено поле `applicationStatus`:

   * `GET /transactions/info/{id}`
   * `GET /transactions/status`
   * `POST /transactions/status`

**Как воспользоваться**: пул нод Waves с публичным API на Stagenet доступен по адресу <https://nodes-stagenet.wavesnodes.com/>.

См. также [список изменений Node API в релизе 1.2](/ru/keep-in-touch/release-notes/#обновление-node-api)

## Библиотеки

## waves-transactions

Функции `waitForTx` и `waitForTxWithNConfirmations` возвращают Promise транзакции, который разрешается после ее попадания в блок. Теперь для транзакции добавлено поле `applicationStatus`.

**Как воспользоваться**: установите бета-версию библиотеки с помощью команды

```bash
install npm i @waves/waves-transactions@beta
```

[Документация waves-transactions](https://wavesplatform.github.io/waves-transactions/)

**node-api JS**

Функции `fetchInfo` и `fetchStatus` поддерживают поле `applicationStatus`.

**Как воспользоваться**: установите бета-версию библиотеки с помощью команды

```bash
install npm i @waves/node-api-js@beta
```

[node-api JS на Github](https://github.com/wavesplatform/node-api-js/)

## Waves Explorer

* Добавлено отображение транзакций с неудачным результатом выполнения dApp-скрипта или скрипта ассета, сохраненных на блокчейне. В списке транзакций они отмечены значком ![](./_assets/stop.png).

   ![](./_assets/failed-transaction.png)

* Для транзакции вызова скрипта результат выполнения скрипта отображается в виде таблицы.

**Как воспользоваться**: Waves Explorer для Stagenet доступен по адресу <https://stagenet.wavesexplorer.com/stagenet>.

[Все изменения Waves Explorer](/ru/keep-in-touch/release-notes/#waves-explorer)

## Waves IDE (ide-stagenet.wavesplatform.com)

Поле `applicationStatus` поддерживается для транзакций, добавленных на блокчейн, в JavaScript-консоли и в тестах.

Обратите внимание: в тестах теперь необходимо проверять не только появление транзакции на блокчейне, но и успешность выполнения скрипта.

**Как воспользоваться**: Waves IDE для Stagenet доступна по адресу <https://ide-stagenet.wavesplatform.com/>.

## Surfboard

Поддержана возможность получения поля `applicationStatus` для транзакций, добавленных на блокчейн.

**Как воспользоваться**: установите бета-версию с помощью команды

```bash
install npm i @waves/surfboard@beta
```

[Surfboard на Github](https://github.com/wavesplatform/surfboard)

## Dapp Ui (waves-dapp.com)

Для отправленной транзакции вызова скрипта в дополнение к статусу попадания в блокчейн выводится успешность выполнения скрипта.

**Как воспользоваться**: <http://waves-dapp.com/>.

## Ограничения Ride

Максимальная сложность скрипта аккаунта и функции-верификатора скрипта dApp изменена на 3000.

Максимальная сложность скрипта ассета и вызываемой функции скрипта dApp осталась прежней — 4000.
