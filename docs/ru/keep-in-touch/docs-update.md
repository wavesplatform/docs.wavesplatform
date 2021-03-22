# Обновления в документации

# Март

* [Формат транзакций в Waves Keeper API](/ru/ecosystem/waves-keeper/transaction) — <span style="color:green">обновлено</span>
* [Собственный (сustom) блокчейн](/ru/waves-node/private-waves-network) — <span style="color:green">обновлено</span>

## Февраль

* [Data Service API](/ru/building-apps/waves-api-and-sdk/waves-data-service-api)

## Январь

* [Signer](/ru/building-apps/waves-api-and-sdk/client-libraries/signer) — <span style="color:green">обновлено</span>

<br/>
<details>
   <summary>2020</summary>

## Декабрь

### Ride

* [Версия 5 Стандартной библиотеки](/ru/ride/v5/) ![stagenet](./_assets/stagenet.svg)
* [Вычисления с продолжением](/ru/ride/advanced/continuation) ![stagenet](./_assets/stagenet.svg)
* [Вызов dApp из dApp](/ru/ride/advanced/dapp-to-dapp) ![stagenet](./_assets/stagenet.svg)

## Ноябрь

### Нода

* [REST API ноды](/ru/waves-node/node-api/) — <span style="color:green">обновлено</span>
* [Ограничения API пула публичных нод](/ru/waves-node/api-limitations-of-the-pool-of-public-nodes) — <span style="color:green">обновлено</span>

## Октябрь

### Блокчейн

* [Аккаунт](/ru/blockchain/account/) — <span style="color:green">обновлено</span>
* [Доход генератора блока](/ru/blockchain/mining/)

### Нода

* [Расширение Blockchain Updates](/ru/waves-node/extensions/blockchain-updates)

## Сентябрь

### Блокчейн

* [Почему Waves](/ru/blockchain/)
* [Основные понятия](/ru/blockchain/blockchain/)
* [Токен (ассет)](/ru/blockchain/token/) — <span style="color:green">обновлено</span>

### Разработка приложений на блокчейне

* [Обзор](/ru/building-apps/) — <span style="color:green">обновлено</span>

### Ride

* [О Ride](/ru/ride/) — <span style="color:green">обновлено</span>
* [dApp-скрипт](/ru/ride/script/script-types/dapp-script) — <span style="color:green">обновлено</span>
* [Скрипт аккаунта](/ru/ride/script/script-types/account-script) — <span style="color:green">обновлено</span>
* [Скрипт ассета](/ru/ride/script/script-types/asset-script) — <span style="color:green">обновлено</span>

## Август

### Блокчейн

* Обновлены статьи о транзакциях:
   * [Транзакция](/ru/blockchain/transaction/)
   * [Подпись и подтверждения транзакции](/ru/blockchain/transaction/transaction-proof)
   * [Типы транзакций](/ru/blockchain/transaction-type/) и описания всех типов

### Нода

* [Настройка CORS: поддержка кросс-доменных запросов](/ru/waves-node/node-api/cors)

## Июль

### Блокчейн

* [Сети блокчейна: Mainnet, Testnet, Stagenet](/ru/blockchain/blockchain-network/)  — <span style="color:green">обновлено</span>

### Ride

#### Встроенные функции

* [removeByIndex](/ru/ride/functions/built-in-functions/list-functions#removebyindex)
* [bn256groth16Verify](/ru/ride/functions/built-in-functions/verification-functions#bn256groth16verify)

## Июнь

### Разработка приложений на блокчейне

Добавлены руководства:

* [Как создать dApp: полное пошаговое руководство](/ru/building-apps/smart-contracts/writing-dapps)
* [Получение списка ордеров](/ru/building-apps/how-to/basic/trading#получение-списка-ордеров)

Инструменты:

* [Waves IDE](/ru/building-apps/smart-contracts/tools/waves-ide)
* [Расширение для Visual Studio Code](/ru/building-apps/smart-contracts/tools/ride-vscode)
* [Surfboard](/ru/building-apps/smart-contracts/tools/surfboard)
* [Ride REPL](/ru/building-apps/smart-contracts/tools/repl)

### Ride

* [Кортеж](/ru/ride/data-types/tuple)

## Май

### Блокчейн

* [Бинарный формат блока](/ru/blockchain/binary-format/block-binary-format)

### Ride

* Обновлены статьи:
   * [Стандартная библиотека](/ru/ride/script/standard-library)
   * [Типы скриптов](/ru/ride/script/)
   * [Ограничения](/ru/ride/limits/)

* Добавлена статья [Компоненты Ride](/ru/ride/advanced/components).

#### Действия скрипта

* [SponsorFee](/ru/ride/structures/script-actions/sponsor-fee)

#### Встроенные функции

* [ecrecover](/ru/ride/functions/built-in-functions/verification-functions#ecrecover)
* [makeString](/ru/ride/functions/built-in-functions/string-functions#makestring-list-string-string-string)
* [Функции списка](/ru/ride/functions/built-in-functions/list-functions): `containsElement`, `indexOf`, `lastIndexOf`, `max`, `min`

## Апрель

### Блокчейн

* Добавлены описания бинарных форматов новых версий [транзакций](/ru/blockchain/binary-format/transaction-binary-format/) и [ордеров](/ru/blockchain/binary-format/order-binary-format).
* Обновлена статья [Валидация транзакции](/ru/blockchain/transaction/transaction-validation).

### Разработка приложений на блокчейне

Добавлены практические руководства:

* [Выпуск своего токена. Управление токенами](/ru/building-apps/how-to/assets/issue)
* [Распространение токена (airdrop)](/ru/building-apps/how-to/assets/airdrop)
* [Прием платежей](/ru/building-apps/how-to/assets/payment)

## Март

### Блокчейн

* [Корневой хеш транзакции](/ru/blockchain/block/merkle-root)

### Ride

#### Ограничения

* [Вес данных](/ru/ride/limits/weight)

#### Встроенные функции

* [createMerkleRoot](/ru/ride/functions/built-in-functions/verification-functions#createmerkleroot)
* [transferTransactionFromProto](/ru/ride/functions/built-in-functions/converting-functions#transfertransactionfromproto)

Обновлено описание:
* [функций хеширования](/ru/ride/functions/built-in-functions/hashing-functions) `blake2b256`, `keccak256`, `sha256`;
* [функций верификации](/ru/ride/functions/built-in-functions/verification-functions) `groth16Verify`, `rsaVerify`, `sigVerify`.

## Февраль

### Разработка приложений на блокчейне

Добавлены практические руководства:

* [Получение данных из блокчейна](/ru/building-apps/how-to/basic/retrieve)
* [Создание транзакций и отправка в блокчейн](/ru/building-apps/how-to/basic/transaction)
* [Покупка и продажа токенов на бирже](/ru/building-apps/how-to/basic/trading)

### Ride

#### Встроенные функции

* [calculateAssetId](/ru/ride/functions/built-in-functions/blockchain-functions#calculate)
* [groth16Verify](/ru/ride/functions/built-in-functions/verification-functions#groth16Verify)

## Январь

### API & SDK

* [Signer](/ru/building-apps/waves-api-and-sdk/client-libraries/signer) — библиотека для создания, подписания и отправки транзакций.

</details><br/>

> Посмотреть репозиторий документации на [Github](https://github.com/wavesplatform/docs.wavesplatform)
