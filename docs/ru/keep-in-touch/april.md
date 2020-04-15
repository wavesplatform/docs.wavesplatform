# Сохранение невалидных транзакций (апрель 2020)

Начиная с версии ноды 1.2.4, после активации фичи №&nbps;15 “Ride V4, VRF, Protobuf, Failed transactions” меняется порядок валидации транзакций:

* Транзакции вызова скрипта и транзакции обмена сохраняются на блокчейне и за них взимается комиссия, если транзакция прошла проверку подписи отправителя или проверку скриптом аккаунта, но результат выполнения dApp-скрипта или скрипта ассета был неудачным.
* Для транзакции вызова скрипта скрипты ассетов выполняются после dApp-скрипта.
* Становится невозможной оплата комиссии за транзакцию вызова скрипта за счет средств, переведенных dApp-скриптом отправителю. Если баланс отправителя недостаточен для оплаты комиссии, dApp-скрипт не выполняется.

[Подробнее о валидации транзакций](/ru/blockchain/transaction/transaction-validation)

В JSON-представление транзакции добавлено поле `applicationStatus`, которое содержит результат валидации:
* `succeed` — валидация прошла успешно.
* `scriptExecutionFailed` — результат выполнения dApp-скрипта или скрипта ассета был неудачным. Такая транзакция не приводит к изменениям в балансах (кроме взимания комиссии с отправителя) и в хранилищах данных аккаунтов.

Работа с невалидными транзакциями поддержана в следующих инструментах Waves.

## Node API

В следующие методы добавлено поле `applicationStatus`:

   * `GET /transactions/info/{id}`
   * `GET /transactions/status`
   * `POST /transactions/status`

См. также [список изменений Node API в релизе 1.2](/ru/keep-in-touch/release-notes/#обновление-node-api)

## Библиотеки

**waves-transactions**

Функции `waitForTx` и `waitForTxWithNConfirmations` возвращают Promise транзакции, который разрешается после ее попадания в блок. Теперь для транзакции добавлено поле `applicationStatus`.

[Документация waves-transactions](https://wavesplatform.github.io/waves-transactions/)

**node-api JS**

Функции `fetchInfo` и `fetchStatus` возвращают поле `applicationStatus`.

[node-api JS на Github](https://github.com/wavesplatform/node-api-js/)

## Waves Explorer (wavesexplorer.com)

* Добавлено отображение транзакций с неудачным результатом выполнения dApp-скрипта или скрипта ассета, сохраненных на блокчейне.
* Для транзакции вызова скрипта результат выполнения скрипта отображается в виде таблицы.

[Все изменения Waves Explorer](/ru/keep-in-touch/release-notes/#waves-explorer)

## Waves IDE (ide.wavesplatform.com)

Поле `applicationStatus` поддерживается в JavaScript-консоли и в тестах.

Обратите внимание: в тестах теперь необходимо проверять не только появление транзакции на блокчейне, но и результат валидации.

## Surfboard

Поддержана возможность получения `applicationStatus` для транзакций.

[Surfboard на Github](https://github.com/wavesplatform/surfboard)

## Dapp Ui (waves-dapp.com)

Поддержана возможность получения `applicationStatus` для транзакций.
