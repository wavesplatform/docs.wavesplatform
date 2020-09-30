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
update {<br>
&nbsp;&nbsp;id: 6AmsQJEEmxu3wtTRFVzEWgVHf1WBh8nwTNJhDxRKts7U<br>
&nbsp;&nbsp;height: 1199932<br>
&nbsp;&nbsp;append {<br>
&nbsp;&nbsp;&nbsp;&nbsp;block {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;block {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;header {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chain_id: 84<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reference: 7ebn8KgNxaWVK1U4teSJVg24oiesDFPei9njdNMbVFL1<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;base_target: 1508<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;generation_signature: Wbtq75BMT4zw35MiWHBcycbG3157byfA8vWYgjaMRUW1V6w6yJZ1TgdUoHe4H7xSZnSXuKJvBotn1nZV8xF8WiQMbfdzjppUvMjcXzkxssy8LK6z7ZKcd9rq1BugZcqnK1R<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timestamp: 1601462351767<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;version: 5<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;generator: GzkwrZ2tcc2Hu4X2yBHHHsM5cFQAPygFHuRCUSA9chnU<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reward_vote: -1<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transactions_root: E2SUKG7CVPQYF7ccZWD4zf2W3Ygdp59ZhLFU1R9cFafC<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;signature: 3jaZa2DhvSN16b65e369MBDbypgXEysMZGdNTXx4N8uU9Qn25xsg8xg3nsbySuQWPM9ftjypLEVNkMffHA3cSrxQ<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transactions {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transaction {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chain_id: 84<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sender_public_key: 57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fee {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount: 500000<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timestamp: 1601462356424<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;version: 1<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;invoke_script {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d_app {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public_key_hash: 3D7mfXL6hAbaKGqCTWC6r2tjdM5Y<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function_call: BkiQZbtVDKYHAvYcq6FfTfibZCkBt5UF9wF6Y5DwhBQfEoezXDzmvUwfUmuX4mcRiW66ReRuVbCo1M6946wJrUciG94jozz1umDzYYkvWzfQ4mcfEbQgVU5afhxHooyJJruaY9WpPUQQwwzauPg9hmZNyTxDFy7yN2nYyWJKpdF9KC7ucuAMAjw1uifVVufdVwfYi1yxMVtduWGEGuPCzd2UJXSs27EeQtS7AM8ZxtjeQbPbuMxUhCcnVKVhuQ9WLmwwgLecqJEgRPg3KjHMijjtUz2mHKsjupiELThYQCM1NiTCV1wZTwNThW3NZ8jt4rSi3wk38u5JfRH9t8umgoYAVbAmhvgYwDjEFKm9YExJufedEeLFQ1MGx83AqKjmawWLE8Z41JBdMb98mtmu3SbJ8xJpehSZhfJKV23dpBfNXouPsnScQDPHgfvTdr7oDoz71p2qQqLinZkVtEn8fiXgDtQyzHNRY1juMS3WGxKyzK8rKAPSbpoNCaF1fmznm6wyD25k9dJ91ZpKYfLDGg5Ag6ySgXKvFVVUREMrsgqKirwaz7wHmTRrc7f2Va<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;proofs: 4WhHHPj6T9xa2y9rLAJtdko3dgkMQ1gaKsuVpkKgEW8NH6QqANsJSHqe13pTwYEG3XzVWAjcefyyszgKZZvoZ4oo<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;updated_waves_amount: 10000000600000000<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;transaction_ids: DAunM3yCYmoPoAHD5z5ddX225Pa47BNBNsMoMLM2ApFC<br>
&nbsp;&nbsp;&nbsp;&nbsp;state_update {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;balances {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3NAhtLNFJhfB6TgMia9HzdaSkKiJD5N2V3b<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount: 1480157680000<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;transaction_state_updates {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;balances {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3MuhGCajV9HXunkyuQpwXvHTjTLaMy93g9Y<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount: 5932500000<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entries {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entry {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: "deficit_1199932"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int_value: -379468596950<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entries {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entry {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: "deficit_percent_1199932"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int_value: -31<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entries {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entry {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: "price"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int_value: 5500000<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entries {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entry {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: "price_index"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int_value: 159817<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entries {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entry {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: "neutrinoSupply_1199932"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int_value: 1230373751604<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entries {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entry {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: "price_index_159817"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int_value: 1199932<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entries {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entry {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: "price_1199932"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int_value: 5500000<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
}
</code>
</details>
<details><summary>MicroBlockAppend</summary>
<code>
update {<br>
&nbsp;&nbsp;id: 5DbKdfhsDaFRNfzmYwPLivksKE28VUtBZA8qt7eGwL4W<br>
&nbsp;&nbsp;height: 1199936<br>
&nbsp;&nbsp;append {<br>
&nbsp;&nbsp;&nbsp;&nbsp;micro_block {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;micro_block {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;micro_block {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;version: 5<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reference: 2EvXRVtn7sEXxFKqmfqHtJQM9r2muQUjjbY3g1D8JJHb<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;updated_block_signature: 3jBu2vx5arqPtDgTahxdWYGByjwafXranfMm8sFtyr71wcQM5w4e2k8UPBa12gHAaWS31wA1JsBvJdwe19345tZA<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sender_public_key: 3ikUmWkNpbkeVZaoA7fogfDjKw5hn4ZWVbP4gW7dMQNi<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transactions {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transaction {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chain_id: 84<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sender_public_key: 4yLsZuHMtyc4nQaF5MSGkKRQqGYfQBMim1qVLKCtacqx<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fee {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount: 900000<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timestamp: 1601462611517<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;version: 2<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transfer {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;recipient {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public_key_hash: 4W5hFHdYbrx7fBFP7ofmZNLsjwPB<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;asset_id: LVf3qaCtb9tieS1bHD8gg5XjWvqpBm5TaDxeSVcqPwn<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount: 10000000<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;proofs: 4d1YtV7e9XaVGgmiZZcDNXUri6ycKmECf1R59Bz8CnvfrN31Bd3eiHzSJnFPrLTEjZ5oQLpDmcYsTaxZWdWbtsBB<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;signature: 571Xg1T5aYsChW3nzKxH7N9te7xgsZsJj3yKQWwwUr4fTQehzYn5tzdudDrwdVnDuKQC7AccNqhzTPDk9AM7oVZ8<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total_block_id: 5DbKdfhsDaFRNfzmYwPLivksKE28VUtBZA8qt7eGwL4W<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;updated_transactions_root: Cv59LBRGPd1Qipk9zT8V6d2yawGVuxBLfR2JejKgCnUP<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;transaction_ids: GXTbnhwEtZLrsq7GhwSjmff12Luc1ABTjZsLq6Bun9AD<br>
&nbsp;&nbsp;&nbsp;&nbsp;state_update {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;balances {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3MtQQX9NwYH5URGGcS2e6ptEgV7wTFesaRW<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount: 40776090986764<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;transaction_state_updates {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;balances {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3NCpyPuNzUaB7LFS4KBzwzWVnXmjur582oy<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;asset_id: LVf3qaCtb9tieS1bHD8gg5XjWvqpBm5TaDxeSVcqPwn<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount: 9786003244627670<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;balances {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3MzykUc8kraFGbuYVWXtsYrnvkA8w6JeWuK<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount: 138800000<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;balances {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3MzykUc8kraFGbuYVWXtsYrnvkA8w6JeWuK<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;asset_id: LVf3qaCtb9tieS1bHD8gg5XjWvqpBm5TaDxeSVcqPwn<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount: 99320000000<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
}
</code>
</details>
<details><summary>Rollback (для блока)</summary>
<code>
update {<br>
&nbsp;&nbsp;id: 7Z4md34VUp5Db2wwYW21tb9UdVVuMbFnDqQiTy1E99uZ<br>
&nbsp;&nbsp;height: 1199939<br>
&nbsp;&nbsp;rollback {<br>
&nbsp;&nbsp;&nbsp;&nbsp;type: BLOCK<br>
&nbsp;&nbsp;}<br>
}
</code>
</details>
<details><summary>Rollback (для микроблока)</summary>
<code>
update {<br>
&nbsp;&nbsp;id: C6zsDGh2a<br>hvTbDLA5ESGtaPMcGdUeg2g5FzB7XVCRTBP<br>
&nbsp;&nbsp;height: 1199973<br>
&nbsp;&nbsp;rollback {<br>
&nbsp;&nbsp;&nbsp;&nbsp;type: MICROBLOCK<br>
&nbsp;&nbsp;}<br>
}
</code>
</details>

> Некоторые изменения на блокчейне не привязаны ни к одной транзакции, а происходят на уровне блока. В частности, изменение баланса генератора блока: 40% комиссии за транзакцию, которые получает генератор текущего блока, привязаны к транзакции, а 60%, которые получает генератор следующего блока, ассоциированы только с этим блоком. Вознаграждение за создание блока также ассоциировано только с блоком.
