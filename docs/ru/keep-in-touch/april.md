# Сохранение транзакций с неудачным результатом выполнения скрипта (апрель 2020)

Начиная с версии ноды 1.2.4, после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions” меняется порядок валидации транзакций:

* Транзакции вызова скрипта и транзакции обмена сохраняются на блокчейне и за них взимается комиссия, даже если результат выполнения dApp-скрипта или скрипта ассета был неудачным (при условии что транзакция прошла проверку подписи отправителя или проверку скриптом аккаунта).

   Однако если вызываемая функция завершилась ошибкой или [выбрасыванием исключения](/ru/ride/exceptions) прежде, чем [сложность](/ru/ride/base-concepts/complexity) выполненных вычислений превысила [порог для сохранения неуспешных транзакций](/ru/ride/limits/), транзакция вызова скрипта отклоняется и комиссия не взимается.
   
* Становится невозможной оплата комиссии за транзакцию вызова скрипта за счет средств, переведенных dApp-скриптом отправителю. Если баланс отправителя недостаточен для оплаты комиссии, dApp-скрипт не выполняется.

[Подробнее о валидации транзакций](/ru/blockchain/transaction/transaction-validation)

В JSON-представление транзакции добавлено поле `applicationStatus`, которое содержит результат валидации:
* `succeeded` — транзакция успешна.
* `script_execution_failed` — результат выполнения dApp-скрипта или скрипта ассета был неудачным. Такая транзакция не приводит к изменениям в балансах (кроме взимания комиссии с отправителя) и в хранилищах данных аккаунтов.

Транзакции с неудачным результатом выполнения скрипта реализованы в протоколе Waves и поддержаны как в [Node Scala](https://github.com/wavesplatform/Waves/releases), так и в [Node Go](https://github.com/wavesplatform/gowaves/releases/), а также в следующих инструментах Waves.

## Node API

В следующие методы добавлено поле `applicationStatus`:

   • `/blocks/{id}`
   • `/blocks/address/{address}/{from}/{to}`
   • `/blocks/at/{height}`
   • `/blocks/last`
   • `/blocks/seq/{from}/{to}`
   • `/debug/stateChanges/address/{address}/limit/{limit}`
   • `/debug/stateChanges/info/{id}`
   • `/transactions/address/{address}/limit/{limit}`
   • `/transactions/info/{id}`
   • `/transactions/status`

**Как воспользоваться**: пул нод Waves с публичным API доступны по адресу:
* Mainnet: <https://nodes.wavesnodes.com/>
* Testnet: <https://nodes-testnet.wavesnodes.com/>
* Stagenet: <https://nodes-stagenet.wavesnodes.com/>

См. также [список изменений Node API в релизе 1.2](/ru/keep-in-touch/release-notes#обновление-node-api)

## Библиотеки

## waves-transactions

Функции `waitForTx` и `waitForTxWithNConfirmations` возвращают Promise транзакции, который разрешается после ее попадания в блок. Теперь для транзакции добавлено поле `applicationStatus`.

**Как воспользоваться**: установите последнюю версию библиотеки с помощью команды

```bash
npm i @waves/waves-transactions@latest
```

[Документация waves-transactions](https://wavesplatform.github.io/waves-transactions/)

## node-api JS

Функции `fetchInfo` и `fetchStatus` поддерживают поле `applicationStatus`.

**Как воспользоваться**: установите последнюю версию библиотеки с помощью команды

```bash
npm i @waves/node-api-js@latest
```

[node-api JS на Github](https://github.com/wavesplatform/node-api-js/)

## Waves Explorer

* Добавлено отображение транзакций с неудачным результатом выполнения dApp-скрипта или скрипта ассета, сохраненных на блокчейне. В списке транзакций они отмечены значком ![](./_assets/stop.png).

   ![](./_assets/failed-transaction.png)

* Для транзакции вызова скрипта результат выполнения скрипта отображается в виде таблицы.

**Как воспользоваться**: Waves Explorer доступен по адресу <https://wavesexplorer.com/>.

[Все изменения Waves Explorer](/ru/keep-in-touch/release-notes#waves-explorer)

## Waves IDE

Поле `applicationStatus` поддерживается для транзакций, добавленных на блокчейн, в JavaScript-консоли и в тестах.

Обратите внимание: в тестах теперь необходимо проверять не только появление транзакции на блокчейне, но и успешность выполнения скрипта.

**Как воспользоваться**: Waves IDE доступна по адресу <https://waves-ide.com/>.

## Surfboard

Поддержана возможность получения поля `applicationStatus` для транзакций, добавленных на блокчейн.

**Как воспользоваться**: установите последнюю версию с помощью команды

```bash
npm i @waves/surfboard@latest
```

[Surfboard на Github](https://github.com/wavesplatform/surfboard)

## Dapp Ui (waves-dapp.com)

Для отправленной транзакции вызова скрипта в дополнение к статусу попадания в блокчейн выводится успешность выполнения скрипта.

**Как воспользоваться**: <https://waves-dapp.com/>.

## Ограничения Ride

Максимальная сложность скрипта аккаунта и функции-верификатора скрипта dApp изменена на 2000 для новых скриптов, независимо от версии Стандартной библиотеки.

Максимальная сложность скрипта ассета и вызываемой функции скрипта dApp осталась прежней — 4000.
