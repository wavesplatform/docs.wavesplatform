# Сохранение невалидных транзакций

Начиная с версии ноды 1.2.4, после активации фичи №&nbps;15 “Ride V4, VRF, Protobuf, Failed transactions” меняется порядок валидации транзакций:

* Транзакции вызова скрипта и транзакции обмена сохраняются на блокчейне и за них взимается комиссия, если транзакция прошла проверку подписи отправителя или проверку скриптом аккаунта, но результат выполнения dApp-скрипта или скрипта ассета был неудачным.
* Для транзакции вызова скрипта скрипты ассетов выполняются после dApp-скрипта.
* Становится невозможной оплата комиссии за транзакцию вызова скрипта за счет средств, переведенных dApp-скриптом отправителю. Если баланс отправителя недостаточен для оплаты комиссии, dApp-скрипт не выполняется.

[Подробнее о валидации транзакций](/ru/blockchain/transaction/transaction-validation)

Работа с невалидными транзакциями поддержана в следующих инструментах.

## Node API

В следующие методы добавлено поле `applicationStatus`:

   * `GET /transactions/info/{id}`
   * `GET /transactions/status`
   * `POST /transactions/status`

Поле `applicationStatus` содержит результат валидации транзакции:
* `succeed` — валидация прошла успешно.
* `scriptExecutionFailed` — результат выполнения dApp-скрипта или скрипта ассета был неудачным.

[Все изменения Node API в релизе 1.2](/ru/keep-in-touch/release-notes/#обновление-node-api)

## Библиотеки

**waves-transactions**

Функции `waitForTx` и `waitForTxWithNConfirmations` возвращают Promise транзакции, который разрешается после ее попадания в блок. Теперь для транзакции добавлено поле `applicationStatus`.

[Документация waves-transactions на Github](https://wavesplatform.github.io/waves-transactions/)

**node-api JS**

Функция `transactionInfo` возвращаtnющая  добавлена возможность получить объект транзакции и поле `applicationStatus`.

[Исходный код node-api JS](https://github.com/wavesplatform/node-api-js/)

## Waves Explorer (wavesexplorer.com)

* Поддержaно отображение транзакций с неудачным результатом выполнения dApp-скрипта или скрипта ассета, сохраненных на блокчейне.
* Для транзакции вызова скрипта результата выполнения скрипта отображается в виде таблицы.

[Все изменения Waves Explorer](/ru/keep-in-touch/release-notes/#изменения-в-waves-explorer)

## Waves IDE (ide.wavesplatform.com)

* JavaScript-консоль поддерживает поле `applicationStatus` транзакции.
* В тестовом окружении поддержана возможность получения `applicationStatus` у транзакции.

## surfboard

Поддержана возможность получения `applicationStatus` для транзакций.

## Dapp Ui (waves-dapp.com)

Поддержана возможность получения `applicationStatus` для отправленных транзакций.
