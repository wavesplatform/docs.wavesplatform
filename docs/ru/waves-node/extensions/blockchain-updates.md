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

## Запуск ноды с расширением

:warning: **Важно:** расширение Blockchain Updates использует историю изменений с момента создания блокчейна. Поэтому ноду с расширением нужно запустить с нуля и дождаться синхронизации блокчейна в обычном режиме работы ноды, что может потребовать 1–3 дня (см. раздел [Синхронизировать блокчейн Waves](/ru/waves-node/options-for-getting-actual-blockchain/)). Импорт блокчейна из бинарного файла или загрузка актуальной базы данных не подходят.

Ноду с расширением можно установить двумя способами: из DEB-пакета и из JAR-файла.

### Установка из DEB-пакета

1. Скачайте последнюю версию DEB-пакетов ноды и расширения со страницы [Releases](https://github.com/wavesplatform/Waves/releases) (секция Assets) на GitHub.

2. Установите пакеты:

   Для Mainnet:

   ```bash
   sudo dpkg -i waves_{номер версии}_all.deb
   sudo dpkg -i blockchain-updates_{номер версии}_all.deb
   ```

   Для Testnet:

   ```bash
   sudo dpkg -i waves-testnet_{номер версии}_all.deb
   sudo dpkg -i blockchain-updates-testnet_{номер версии}_all.deb
   ```

   Для Stagenet:

   ```bash
   sudo dpkg -i waves-stagenet_{номер версии}_all.deb
   sudo dpkg -i blockchain-updates-stagenet_{номер версии}_all.deb
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

   3.2. После секции `waves` на том же уровне добавьте секцию

   ```
   blockchain-updates {
      grpc-port = 6881 # Укажите порт для подключения клиента
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
   sudo systemctl start waves-testnet
   ```

Если расширение работает, в [log-файле](/ru/waves-node/logging-configuration) ноды появятся сообщения:

```
BlockchainUpdates extension starting with settings <...>
BlockchainUpdates startup check successful at height <...>
BlockchainUpdates extension started gRPC API on port <...>
```

### Установка из JAR-файла

1. Скачайте последнюю версию JAR-файла ноды и TGZ-архива с расширением Blockchain Updates со страницы [Releases](https://github.com/wavesplatform/Waves/releases) (секция Assets) на GitHub.

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

   3.2. После секции `waves` на том же уровне добавьте секцию

   ```
   blockchain-updates {
      grpc-port = 6881 # Укажите порт для подключения клиента
   }
   ```

4. Выполните команду:

   ```bash
   java -cp 'waves-all-{номер версии}.jar:blockchain-updates-{номер версии}/lib/*' com.wavesplatform.Application {имя файла конфигурации}.conf
   ```

5. Запустите ноду:

   ```bash
   java -jar waves-all-{номер версии}.jar {имя файла конфигурации}.conf.
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
* `GetBlockUpdatesRange` — возвращает массив изменений, порожденных блоками в указанном диапазоне высоты.
* `Subscribe` — возвращает поток сообщений об изменениях, вначале исторические данные (то есть изменения до текущей высоты блокчейна), затем текущие события в реальном времени. Опционально можно указать начальную и/или конечную высоту.

Функция `Subscribe` возвращает все события в реальном времени: добавление блока, добавление микроблока, откат блока, откат микроблока (см. описание протокола [Waves-NG](/en/blockchain/waves-protocol/waves-ng-protocol)). Чтобы корректно обрабатывать откаты, рекомендуем хранить предыдущие состояния блокчейна на 10–100 блоков назад от текущего, этого достаточно в подавляющем большинстве случаев (максимально возможный откат высоты — 2000 блоков, однако вероятность такого отката исчезающе мала). В случае разрыва соединения рекомендуем откатить последний блок на клиенте и возобновить получение событий с предыдущего блока.

Для некоторых аналитических задач не требуется получение событий в реальном времени, достаточно обновления, например, раз в час или раз в сутки. В этом случае рекомендуем использовать функцию `GetBlockUpdatesRange`. Она возвращает только исторические данные об уже примененных блоках, которые гораздо проще обрабатывать. Конечную высоту диапазона лучше указывать на несколько блоков меньше текущей, чтобы избежать проблем в случае отката высоты.

Структуру запросов и ответов можно посмотреть в файлах [blockchain_updates.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/events/grpc/blockchain_updates.proto) и [events.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/events/events.proto).

Примеры событий:
<details><summary>BlockAppend</summary>
<code>
update {
&npsp;&npsp;id: 6AmsQJEEmxu3wtTRFVzEWgVHf1WBh8nwTNJhDxRKts7U
&npsp;&npsp;height: 1199932
&npsp;&npsp;append {
&npsp;&npsp;&npsp;&npsp;block {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;block {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;header {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;chain_id: 84
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;reference: 7ebn8KgNxaWVK1U4teSJVg24oiesDFPei9njdNMbVFL1
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;base_target: 1508
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;generation_signature: Wbtq75BMT4zw35MiWHBcycbG3157byfA8vWYgjaMRUW1V6w6yJZ1TgdUoHe4H7xSZnSXuKJvBotn1nZV8xF8WiQMbfdzjppUvMjcXzkxssy8LK6z7ZKcd9rq1BugZcqnK1R
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;timestamp: 1601462351767
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;version: 5
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;generator: GzkwrZ2tcc2Hu4X2yBHHHsM5cFQAPygFHuRCUSA9chnU
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;reward_vote: -1
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;transactions_root: E2SUKG7CVPQYF7ccZWD4zf2W3Ygdp59ZhLFU1R9cFafC
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;signature: 3jaZa2DhvSN16b65e369MBDbypgXEysMZGdNTXx4N8uU9Qn25xsg8xg3nsbySuQWPM9ftjypLEVNkMffHA3cSrxQ
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;transactions {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;transaction {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;chain_id: 84
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;sender_public_key: 57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;fee {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;amount: 500000
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;timestamp: 1601462356424
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;version: 1
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;invoke_script {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;d_app {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;public_key_hash: 3D7mfXL6hAbaKGqCTWC6r2tjdM5Y
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;function_call: BkiQZbtVDKYHAvYcq6FfTfibZCkBt5UF9wF6Y5DwhBQfEoezXDzmvUwfUmuX4mcRiW66ReRuVbCo1M6946wJrUciG94jozz1umDzYYkvWzfQ4mcfEbQgVU5afhxHooyJJruaY9WpPUQQwwzauPg9hmZNyTxDFy7yN2nYyWJKpdF9KC7ucuAMAjw1uifVVufdVwfYi1yxMVtduWGEGuPCzd2UJXSs27EeQtS7AM8ZxtjeQbPbuMxUhCcnVKVhuQ9WLmwwgLecqJEgRPg3KjHMijjtUz2mHKsjupiELThYQCM1NiTCV1wZTwNThW3NZ8jt4rSi3wk38u5JfRH9t8umgoYAVbAmhvgYwDjEFKm9YExJufedEeLFQ1MGx83AqKjmawWLE8Z41JBdMb98mtmu3SbJ8xJpehSZhfJKV23dpBfNXouPsnScQDPHgfvTdr7oDoz71p2qQqLinZkVtEn8fiXgDtQyzHNRY1juMS3WGxKyzK8rKAPSbpoNCaF1fmznm6wyD25k9dJ91ZpKYfLDGg5Ag6ySgXKvFVVUREMrsgqKirwaz7wHmTRrc7f2Va
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;proofs: 4WhHHPj6T9xa2y9rLAJtdko3dgkMQ1gaKsuVpkKgEW8NH6QqANsJSHqe13pTwYEG3XzVWAjcefyyszgKZZvoZ4oo
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;updated_waves_amount: 10000000600000000
&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;transaction_ids: DAunM3yCYmoPoAHD5z5ddX225Pa47BNBNsMoMLM2ApFC
&npsp;&npsp;&npsp;&npsp;state_update {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;balances {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;address: 3NAhtLNFJhfB6TgMia9HzdaSkKiJD5N2V3b
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;amount {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;amount: 1480157680000
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;transaction_state_updates {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;balances {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;address: 3MuhGCajV9HXunkyuQpwXvHTjTLaMy93g9Y
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;amount {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;amount: 5932500000
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;data_entries {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;data_entry {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;key: "deficit_1199932"
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;int_value: -379468596950
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;data_entries {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;data_entry {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;key: "deficit_percent_1199932"
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;int_value: -31
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;data_entries {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;data_entry {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;key: "price"
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;int_value: 5500000
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;data_entries {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;data_entry {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;key: "price_index"
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;int_value: 159817
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;data_entries {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;data_entry {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;key: "neutrinoSupply_1199932"
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;int_value: 1230373751604
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;data_entries {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;data_entry {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;key: "price_index_159817"
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;int_value: 1199932
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;data_entries {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;data_entry {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;key: "price_1199932"
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;int_value: 5500000
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;}
}
</code>
</details>
<details><summary>MicroBlockAppend</summary>
<code>
update {
&npsp;&npsp;id: 5DbKdfhsDaFRNfzmYwPLivksKE28VUtBZA8qt7eGwL4W
&npsp;&npsp;height: 1199936
&npsp;&npsp;append {
&npsp;&npsp;&npsp;&npsp;micro_block {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;micro_block {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;micro_block {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;version: 5
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;reference: 2EvXRVtn7sEXxFKqmfqHtJQM9r2muQUjjbY3g1D8JJHb
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;updated_block_signature: 3jBu2vx5arqPtDgTahxdWYGByjwafXranfMm8sFtyr71wcQM5w4e2k8UPBa12gHAaWS31wA1JsBvJdwe19345tZA
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;sender_public_key: 3ikUmWkNpbkeVZaoA7fogfDjKw5hn4ZWVbP4gW7dMQNi
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;transactions {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;transaction {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;chain_id: 84
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;sender_public_key: 4yLsZuHMtyc4nQaF5MSGkKRQqGYfQBMim1qVLKCtacqx
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;fee {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;amount: 900000
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;timestamp: 1601462611517
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;version: 2
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;transfer {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;recipient {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;public_key_hash: 4W5hFHdYbrx7fBFP7ofmZNLsjwPB
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;amount {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;asset_id: LVf3qaCtb9tieS1bHD8gg5XjWvqpBm5TaDxeSVcqPwn
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;amount: 10000000
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;proofs: 4d1YtV7e9XaVGgmiZZcDNXUri6ycKmECf1R59Bz8CnvfrN31Bd3eiHzSJnFPrLTEjZ5oQLpDmcYsTaxZWdWbtsBB
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;signature: 571Xg1T5aYsChW3nzKxH7N9te7xgsZsJj3yKQWwwUr4fTQehzYn5tzdudDrwdVnDuKQC7AccNqhzTPDk9AM7oVZ8
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;total_block_id: 5DbKdfhsDaFRNfzmYwPLivksKE28VUtBZA8qt7eGwL4W
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;updated_transactions_root: Cv59LBRGPd1Qipk9zT8V6d2yawGVuxBLfR2JejKgCnUP
&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;transaction_ids: GXTbnhwEtZLrsq7GhwSjmff12Luc1ABTjZsLq6Bun9AD
&npsp;&npsp;&npsp;&npsp;state_update {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;balances {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;address: 3MtQQX9NwYH5URGGcS2e6ptEgV7wTFesaRW
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;amount {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;amount: 40776090986764
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;transaction_state_updates {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;balances {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;address: 3NCpyPuNzUaB7LFS4KBzwzWVnXmjur582oy
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;amount {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;asset_id: LVf3qaCtb9tieS1bHD8gg5XjWvqpBm5TaDxeSVcqPwn
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;amount: 9786003244627670
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;balances {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;address: 3MzykUc8kraFGbuYVWXtsYrnvkA8w6JeWuK
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;amount {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;amount: 138800000
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;balances {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;address: 3MzykUc8kraFGbuYVWXtsYrnvkA8w6JeWuK
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;amount {
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;asset_id: LVf3qaCtb9tieS1bHD8gg5XjWvqpBm5TaDxeSVcqPwn
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;amount: 99320000000
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;&npsp;&npsp;}
&npsp;&npsp;}
}
</code>
</details>
<details><summary>Rollback (для блока)</summary>
<code>
update {
&npsp;&npsp;id: 7Z4md34VUp5Db2wwYW21tb9UdVVuMbFnDqQiTy1E99uZ
&npsp;&npsp;height: 1199939
&npsp;&npsp;rollback {
&npsp;&npsp;&npsp;&npsp;type: BLOCK
&npsp;&npsp;}
}
</code>
</details>
<details><summary>Rollback (для микроблока)</summary>
<code>
update {
&npsp;&npsp;id: C6zsDGh2ahvTbDLA5ESGtaPMcGdUeg2g5FzB7XVCRTBP
&npsp;&npsp;height: 1199973
&npsp;&npsp;rollback {
&npsp;&npsp;&npsp;&npsp;type: MICROBLOCK
&npsp;&npsp;}
}
</code>
</details>

> Некоторые изменения на блокчейне не привязаны ни к одной транзакции, а происходят на уровне блока. В частности, изменение баланса генератора блока: 40% комиссии за транзакцию, которые получает генератор текущего блока, привязаны к транзакции, а 60%, которые получает генератор следующего блока, ассоциированы только с этим блоком. Вознаграждение за создание блока также ассоциировано только с блоком.
