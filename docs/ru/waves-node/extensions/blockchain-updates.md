---
sidebarDepth: 3
---

# Расширение Blockchain Updates

**Blockchain Updates** — [расширение ноды](/ru/waves-node/extensions/), которое отправляет по [gRPC](https://en.wikipedia.org/wiki/GRPC) сообщения об изменениях на блокчейне.

Blockchain Updates позволяет отслеживать изменения, которые внесла каждая транзакция и блок:

* изменения в балансах,
* изменения в количестве WAVES, переданных/полученных в лизинг,
* изменения в хранилищах данных аккаунтов,
* выпуск токенов и изменение параметров токенов (в том числе довыпуск/сжигание, настройка спонсирования, изменение скрипта).

Получать изменения можно по заданному диапазону высоты или в реальном времени.

Примеры применения расширения:
* Интеграция с мессенджером для отправки оповещений о событиях по аккаунту.
* Отслеживание платежей, поступающих в пользу [dApp](/ru/building-apps/smart-contracts/what-is-a-dapp) в транзакциях вызова скрипта.
* Расчет среднего баланса аккаунта за неделю (используется в [программе поддержки маркет-мейкеров](https://medium.com/wavesexchange/waves-exchange-launches-a-market-maker-program-enabling-users-to-mine-with-their-liquidity-3d229c856f67)).
* Сервисы поиска токенов по параметрам, поиска по хранилищам данных аккаунтов и др.

## Требования к оборудованию

Для ноды с расширением Blockchain Updates рекомендуется увеличить дисковое пространство на 50 Гбайт SSD (например, на высоте 2422450 для хранения данных расширения используется 35 Гбайт).

## Запуск ноды с расширением

:warning: **Важно:** расширение Blockchain Updates использует историю изменений с момента создания блокчейна. Поэтому ноду с расширением нужно запустить с нуля и дождаться синхронизации блокчейна в обычном режиме работы ноды, что может потребовать 1–3 дня (см. раздел [Синхронизировать блокчейн Waves](/ru/waves-node/options-for-getting-actual-blockchain/)). Импорт блокчейна из бинарного файла или загрузка актуальной базы данных не подходят.

Ноду с расширением можно установить двумя способами: из DEB-пакета и из JAR-файла. Расширение Blockchain Updates находится в том же пакете и архиве, что и [gRPC Server](/ru/waves-node/extensions/grpc-server/). Установить эти расширения можно как вместе, так и по отдельности, отличаются только настройки в файле конфигурации ноды.

### Установка из DEB-пакета

1. Скачайте последнюю версию DEB-пакетов ноды и расширения со страницы [Releases](https://github.com/wavesplatform/Waves/releases) (секция Assets) на GitHub.

   Имя пакета с расширением:

   • для Mainnet: `grpc-server_{номер версии}_all.deb`

   • для Testnet: `grpc-server-testnet_{номер версии}_all.deb`

   • для Stagenet: `grpc-server-stagenet_{номер версии}_all.deb`

2. Установите пакеты:

   Для Mainnet:

   ```bash
   sudo dpkg -i waves_{номер версии}_all.deb
   sudo dpkg -i grpc-server_{номер версии}_all.deb
   ```

   Для Testnet:

   ```bash
   sudo dpkg -i waves-testnet_{номер версии}_all.deb
   sudo dpkg -i grpc-server-testnet_{номер версии}_all.deb
   ```

   Для Stagenet:

   ```bash
   sudo dpkg -i waves-stagenet_{номер версии}_all.deb
   sudo dpkg -i grpc-server-stagenet_{номер версии}_all.deb
   ```

3. Отредактируйте файл конфигурации ноды (см. раздел [Конфигурация ноды](/ru/waves-node/node-configuration)). Для Mainnet файл конфигурации находится по адресу `/etc/waves/waves.conf`, для Testnet — `/etc/waves-testnet/waves.conf`, для Stagenet — `/etc/waves-stagenet/waves.conf`.

   3.1. Добавьте Blockchain Updates в секцию `waves.extensions`:
   
   ```
   waves {
      ...
      extensions = [
         com.wavesplatform.events.BlockchainUpdates
      ]
   }
   ```

   3.2. Если требуется изменить порт для подключения клиента (по умолчанию 6881), добавьте настройку:

   ```
   waves {
      ...
      blockchain-updates {
         grpc-port = 6888 # Укажите порт
   }
   ```

4. Запустите ноду.

   Для Mainnet:

   ```bash
   sudo systemctl start waves
   ```

   Для Testnet:

   ```bash
   sudo systemctl start waves-testnet
   ```

   Для Stagenet:

   ```bash
   sudo systemctl start waves-stagenet
   ```

Если расширение работает, в [log-файле](/ru/waves-node/logging-configuration) ноды появятся сообщения:

```
BlockchainUpdates extension starting with settings <...>
BlockchainUpdates startup check successful at height <...>
BlockchainUpdates extension started gRPC API on port <...>
```

### Установка из JAR-файла

1. Скачайте последнюю версию JAR-файла ноды и TGZ-архива с расширением со страницы [Releases](https://github.com/wavesplatform/Waves/releases) (секция Assets) на GitHub.

   Имя TGZ-архива с расширением:

   • для Mainnet: `grpc-server-{номер версии}.tgz`

   • для Testnet: `grpc-server-testnet-{номер версии}.tgz`

   • для Stagenet: `grpc-server-stagenet-{номер версии}.tgz`

2. Распакуйте TGZ-архив в папку с JAR-файлом ноды.

3. Создайте новый файл конфигурации или откройте существующий (см. раздел [Конфигурация ноды](/ru/waves-node/node-configuration)).

   3.1. Добавьте Blockchain Updates в секцию `waves.extensions`:
   
   ```
   waves {
      ...
      extensions = [
         com.wavesplatform.events.BlockchainUpdates
      ]
   }
   ```

   3.2. Если требуется изменить порт для подключения клиента (по умолчанию 6881), добавьте настройку:

   ```
   waves {
      ...
      blockchain-updates {
         grpc-port = 6888 # Укажите порт
   }
   ```

4. Выполните команду:

   Для Mainnet:

   ```bash
   java -cp 'waves-all-{номер версии}.jar:grpc-server-{номер версии}/lib/*' com.wavesplatform.Application {имя файла конфигурации}.conf
   ```

   Для Testnet:

   ```bash
   java -cp 'waves-all-{номер версии}.jar:grpc-server-testnet-{номер версии}/lib/*' com.wavesplatform.Application {имя файла конфигурации}.conf
   ```

   Для Stagenet:

   ```bash
   java -cp 'waves-all-{номер версии}.jar:grpc-server-stagenet-{номер версии}/lib/*' com.wavesplatform.Application {имя файла конфигурации}.conf
   ```


   В Windows используйте `;` вместо `:`, например:

   ```bash
   java -cp 'waves-all-{номер версии}.jar;grpc-server-{номер версии}/lib/*' com.wavesplatform.Application {имя файла конфигурации}.conf
   ```

Если расширение работает, в [log-файле](/ru/waves-node/logging-configuration) ноды появятся сообщения:

```
BlockchainUpdates extension starting with settings <...>
BlockchainUpdates startup check successful at height <...>
BlockchainUpdates extension started gRPC API on port <...>
```

## Генерация клиента

Склонируйте protobuf-схемы с помощью команды

```
git clone https://github.com/wavesplatform/protobuf-schemas/
```

На основе схемы [blockchain_updates.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/events/grpc/blockchain_updates.proto) сгенерируйте клиентский код для вашего языка программирования. Подробные инструкции приведены в разделе [Supported languages and platforms](https://www.grpc.io/docs/languages/) документации gRPC.

## Использование

API Blockchain Updates предоставляет три функции:
* `GetBlockUpdate` — возвращает изменения, порожденные блоком на указанной высоте.
* [GetBlockUpdatesRange](#GetBlockUpdatesRange) — возвращает массив изменений, порожденных блоками в указанном диапазоне высоты.
* [Subscribe](#Subscribe) — возвращает поток сообщений об изменениях, вначале исторические данные (то есть изменения до текущей высоты блокчейна), затем текущие события в реальном времени. Опционально можно указать начальную и/или конечную высоту.

Структуру запросов и ответов можно посмотреть в файле [blockchain_updates.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/events/grpc/blockchain_updates.proto).

### Subscribe

Функция `Subscribe` возвращает все события в реальном времени: добавление блока, добавление микроблока, откат блока, откат микроблока (см. описание протокола [Waves-NG](/en/blockchain/waves-protocol/waves-ng-protocol)).

В случае разрыва соединения рекомендуем откатить последний блок на клиенте и возобновить получение событий с предыдущего блока.

Параметры:

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| from_height | int32 | Начальная высота, по умолчанию 1 |
| to_height | int32 | Конечная высота, по умолчанию не ограничена |

Функция возвращает поток сообщений об изменениях `SubscribeEvent`.

Поля сообщения:

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| update.id | bytes | ID блока или микроблока, который был добавлен или откачен |
| update.height | int32 | Высота |
| update.update | Append или Rollback | Событие: добавление или откат блока или микроблока. См. [Формат событий](#формат-событий) ниже |
| referenced_assets | repeated StateUpdate.AssetInfo | Ассеты, участвующие в транзакциях блока. См. [AssetInfo](#AssetInfo) ниже |


### GetBlockUpdatesRange

Функция `GetBlockUpdatesRange` возвращает только исторические данные об уже примененных блоках. Рекомендуем использовать ее для аналитических задач, для которых достаточно обновления, например, раз в час или раз в сутки. Конечную высоту диапазона лучше указывать на несколько блоков меньше текущей, чтобы избежать проблем в случае отката высоты.

Параметры:

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| from_height | int32 | Начальная высота |
| to_height | int32 | Конечная высота |

Оба параметра обязательные.

Функция возвращает массив сообщений об изменениях. Формат сообщения такой же, как для функции `Subscribe`, но содержит только сообщения о добавлении блока.

## Формат событий

Структуру событий можно посмотреть в файле [events.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/events/events.proto).

Некоторые изменения на блокчейне не привязаны ни к одной транзакции, а происходят на уровне блока. В частности, изменение баланса генератора блока: 40% комиссии за транзакцию, которые получает генератор текущего блока, привязаны к транзакции, а 60%, которые получает генератор следующего блока, ассоциированы только с этим блоком. Вознаграждение за создание блока также ассоциировано только с блоком.

Если комиссия за транзакцию указана в спонсорском ассете, то Blockchain Updates возвращает, кроме изменения балансов отправителя и генератора блока, изменение баланса спонсора: он получает сумму комиссии в спонсорском ассете и выплачивает эквивалентную сумму в WAVES. [Подробнее о спонсировании](/ru/blockchain/waves-protocol/sponsored-fee)

Адреса аккаунтов представлены в сжатом виде: без первых двух и последних четырех байт. См. раздел [Бинарный формат адреса](/ru/blockchain/binary-format/address-binary-format).

### Append: добавление блока

Поля сообщения:

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| block | [Block](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/block.proto) | Данные блока: заголовки и транзакции. См. также раздел [Бинарный формат блока](/ru/blockchian/binary-format/block-binary-format) |
| updated_waves_amount | int64 | Общее количество WAVES с учетом вознаграждения за создание блока |
| transaction_ids | repeated bytes | Идентификаторы транзакций в блоке |
| transactions_metadata | repeated TransactionMetadata | Дополнительная информация о транзакциях. См. [TransactionMetadata](#TransactionMetadata) ниже |
| state_update | StateUpdate | Изменения состояния блокчейна, привязанные к блоку. См. [StateUpdate](#StateUpdate) |
| transaction_state_updates | repeated StateUpdate | Изменения состояния блокчейна, привязанные к транзакциям. См. [StateUpdate](#StateUpdate) |


`transaction_ids`, `transactions_metadata`, `transaction_state_updates` — параллельные массивы: одному порядковому номеру соответствуют данные об одной и той же транзакции. Если дополнительная информация отсутствует, в массиве `transactions_metadata` по этому индексу находится пустое значение.

<details><summary>Пример</summary>

</details>

### Append: добавление микроблока

В сообщении о добавлении микроблока присутствуют только те транзакции и порожденные ими изменения, которых не было в предшествующем блоке/микроблоке.

Поля сообщения:

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| micro_block | [SignedMicroBlock](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/block.proto) | Данные микроблока |
| updated_transactions_root | int64 | [Корневой хеш](/ru/blockchain/block/merkle-root) всех транзакций текущего блока |
| transaction_ids | repeated bytes | Идентификаторы транзакций в микроблоке |
| transactions_metadata | repeated TransactionMetadata | Дополнительная информация о транзакциях. См. [TransactionMetadata](#TransactionMetadata) ниже |
| state_update | StateUpdate | Изменения состояния блокчейна, привязанные к блоку. См. [StateUpdate](#StateUpdate) ниже |
| transaction_state_updates | repeated StateUpdate | Изменения состояния блокчейна, привязанные к транзакциям. См. [StateUpdate](#StateUpdate) |

`transaction_ids`, `transactions_metadata`, `transaction_state_updates` — параллельные массивы: одному порядковому номеру соответствуют данные об одной и той же транзакции. Если дополнительная информация отсутствует, в массиве `transactions_metadata` по этому индексу находится пустое значение.

<details><summary>Пример</summary>

</details>

### Rollback: откат блока или микроблока

Поля сообщения:

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| type | RollbackType | Тип сообщения: BLOCK — откат блока, MICROBLOCK — откат микроблока |
| removed_transaction_ids | repeated bytes | Транзакции, которые были удалены в результате отката |
| removed_blocks | repeated [Block](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/block.proto) | Блоки, которые были удалены в результате отката. В случае отката микроблока — пустой массив |
| rollback_state_update | StateUpdate | Изменения состояния блокчейна, которые произошли в результате отката (обратные изменениям, порожденным транзакциями и блоками/микроблоками). См. [StateUpdate](#StateUpdate) ниже |

<details><summary>Пример</summary>

</details>

### StateUpdate

Изменения состояния блокчейна, порожденные транзакцией, блоком, микроблоком или откатом.

#### Изменения балансов аккаунтов

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| balances.address | bytes | Адрес в сжатом виде |
| balances.amount_after | Amount | Новый баланс |
| balances.amount_before | int64 | Прежний баланс |

#### Изменения лизинговых балансов аккаунта

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| leasing_for_address.address | bytes | Адрес в сжатом виде |
| leasing_for_address.in_after | int64 | Новая сумма полученных лизингов |
| leasing_for_address.out_after | int64 | Новая сумма отправленных лизингов |
| leasing_for_address.in_before | int64 | Прежняя сумма полученных лизингов |
| leasing_for_address.out_before | int64 | Прежняя сумма отправленных лизингов |

#### Изменения записей в хранилищах данных

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| data_entries.address | bytes | Адрес в сжатом виде |
| data_entries.data_entry | DataTransactionData.DataEntry | Запись с новым значением |
| data_entries.data_entry_before | DataTransactionData.DataEntry | Запись с прежним значением |

#### Изменения лизингов

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| individual_leases.lease_id | bytes | Идентификатор лизинга |
| individual_leases.status_after | LeaseStatus | Изменение статуса лизинга: INACTIVE — неактивный, ACTIVE — активный |
| individual_leases.amount | int64 | Сумма лизинга |
| individual_leases.sender | bytes | Адрес отправителя лизинга в сжатом виде |
| individual_leases.recipient | bytes | Адрес получателя лизинга в сжатом виде |
| individual_leases.origin_transaction_id | bytes | Транзакция, породившая создание, изменение или отмену лизинга |

#### Изменения параметров токена

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| assets.before | AssetDetails | Прежние параметры токена. В случае выпуска токена — пустое значение. См. [AssetDetails](#AssetDetails) ниже |
| assets.after | AssetDetails | Новые параметры токена. В случае отката блока/микроблока с выпуском токена — пустое значение |

#### AssetDetails

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| asset_id | bytes | ID токена |
| issuer | bytes | Адрес, выпустивший токен, в сжатом виде |
| decimals | int32 | Количество знаков после запятой |
| name | string | Название токена |
| description | string | Описание токена |
| reissuable | bool | Флаг возможности довыпуска |
| volume | int64 | Общее количество токена |
| script_info.script | bytes | Скомпилированный скрипт ассета |
| script_info.complexity | int64 | Сложность скрипта ассета |
| sponsorship | int64 | Если токен является спонсорским ассетом — количество ассета, эквивалентное 0,001 WAVES, в атомарных единицах. Иначе — пустое значение |
| nft | bool | Признак того, что токен является [NFT](/ru/blockchain/token/non-fungible-token) |
| last_updated | int32 | Высота, на которой произошло последнее изменение параметров токена |
| safe_volume | bytes | Поле связано с прошлым поведением в блокчейне, когда можно было довыпустить ассет таким образом, чтобы общее количество превысило максимальное значение int64. Содержит точное количество токена. Можно игнорировать, если клиент не нуждается в такой точности.  Кодировка: как Java BigInteger, см. <https://docs.oracle.com/javase/7/docs/api/java/math/BigInteger.html#toByteArray()> |

#### AssetInfo

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| id | bytes | ID токена |
| decimals | int32 | Количество знаков после запятой |
| name | string | Название токена |

### TransactionMetadata

Дополнительная информация о транзакции.

#### Для транзакции вызова скрипта

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| d_app_address | bytes | Адрес dApp в сжатом виде |
| function_name | string | Имя вызываемой функции |
| arguments | repeated Argument | Аргументы функции |
| payments | repeated [Amount](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/amount.proto) | Приложенные к транзакции платежи |
| result | [InvokeScriptResult](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/invoke_script_result.proto) | Результаты действий, выполненных вызываемой функцией |

#### Для транзакции перевода

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| recipient_address | bytes | Адрес получателя в сжатом виде |

#### Для транзакции массового перевода

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| recipient_addresses | repeated bytes | Адреса получателей в сжатом виде |

#### Для транзакции лизинга

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| recipient_address | bytes | Адрес получателя в сжатом виде |
