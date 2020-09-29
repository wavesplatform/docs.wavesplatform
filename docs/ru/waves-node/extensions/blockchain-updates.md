# Расширение Blockchain Updates

**Blockchain Updates** — [расширение ноды](/ru/waves-node/extensions/), которое отправляет по [gRPC](https://en.wikipedia.org/wiki/GRPC) сообщения об изменениях на блокчейне.

Blockchain Updates позволяет отслеживать изменения, которые внесла каждая транзакция и блок:

* изменения в балансах,
* изменения в количестве WAVES, переданных/полученных в лизинг,
* изменения в хранилищах данных аккаунтов,
* выпуск токенов и изменение параметров токенов.

Получать изменения можно по заданному диапазону высоты или в реальном времени.

## Запуск ноды с расширением

:warning: **Важно:** расширение Blockchain Updates использует историю изменений с момента создания блокчейна. Поэтому ноду с расширением нужно запустить с нуля и дождаться синхронизации блокчейна в обычном режиме работы ноды, что может потребовать 1–3 дня (см. раздел [Синхронизировать блокчейн Waves](/ru/waves-node/options-for-getting-actual-blockchain/)). Импорт блокчейна из бинарного файла или загрузка актуальной базы данных не подходят.

1. Отредактируйте файл конфигурации ноды (см. раздел [Конфигурация ноды](/ru/waves-node/node-configuration)):

   1.1. Добавьте Blockchain Updates в секцию `waves.extensions`:
   
   ```
   waves {
      ...
      extensions = [
         com.wavesplatform.events.BlockchainUpdates
      ]
   }
   ```

   1.2. После секции `waves` на том же уровне добавьте секцию

   ```
   blockchain-updates {
      grpc-port = 6881 # Укажите порт для подключения клиента
   }
   ```

2. Установите расширение: скачайте файл ... со страницы ... и выполните команду ...

3. Запустите ноду.

### Установка с помощью DEB-пакета

1.&nbsp;Скачайте последнюю версию DEB-пакетов ноды и расширения со страницы [Releases](https://github.com/wavesplatform/Waves/releases) (секция Assets) на GitHub.

2.&nbsp;Установите пакеты:

   Для Mainnet:

   ```bash
   sudo dpkg -i waves_{номер версии}_all.deb
   sudo dpkg -i blockchain-updates_{номер версии}_all.deb
   ```

   Для Testnet:

   ```bash
   sudo dpkg -i waves_{номер версии}_all.deb
   sudo dpkg -i blockchain-updates_{номер версии}_all.deb
   ```

3.&nbsp;Отредактируйте файл конфигурации ноды (см. раздел [Конфигурация ноды](/ru/waves-node/node-configuration)). Для Mainnet файл конфигурации находится по адресу `/etc/waves/waves.conf`, для Testnet — `/etc/waves-testnet/waves.conf`.

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

4.&nbsp;Запустите ноду с помощью команды:

   Для Mainnet:

   ```bash
   sudo systemctl start waves
   ```

   Для Testnet:

   ```bash
   sudo systemctl start waves-testnet
   ```

### Установка из JAR-файла

1.&nbsp;Скачайте последнюю версию JAR-файла ноды и ZIP-архива с расширением Blockchain Updates со страницы [Releases](https://github.com/wavesplatform/Waves/releases) (секция Assets) на GitHub.

2.&nbsp;Распакуйте ZIP-архив в папку с JAR-файлом ноды.

3.&nbsp;Создайте новый файл конфигурации или откройте существующий (см. раздел [Конфигурация ноды](/ru/waves-node/node-configuration)).

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

4.&nbsp;Выполните команду:

   ```bash
   java -cp 'waves-all-{номер версии}.jar:blockchain-updates-{номер версии}/lib/*' com.wavesplatform.Application {имя файла конфигурации}.conf
   ```

5. Запустите ноду:

   ```bash
   java -jar waves-all-{номер версии}.jar {имя файла конфигурации}.conf.
   ```

## Генерация клиента

Склонируйте protobuf-схемы с помощью команды

```
git clone https://github.com/wavesplatform/protobuf-schemas/
```

На основе схемы [blochckain_updates.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/events/grpc/blockchain_updates.proto) сгенерируйте клиентский код для вашего языка программирования. Подробные инструкции приведены в разделе [Supported languages and platforms](https://www.grpc.io/docs/languages/) документации gRPC.

## Использование

API Blockchain Updates предоставляет три функции:
* `GetBlockUpdate` — возвращает изменения, порожденные блоком на указанной высоте.
* `GetBlockUpdatesRange` — возвращает массив изменений, порожденных блоками в указанном диапазоне высоты.
* `Subscribe` — возвращает поток сообщений об изменениях, вначале исторические данные, затем текущие события в реальном времени. Опционально можно указать начальную и/или конечную высоту.

Функция `Subscribe` возвращает все события в реальном времени: добавление блока, добавление микроблока, откат блока, откат микроблока (см. описание протокола [Waves-NG](/en/blockchain/waves-protocol/waves-ng-protocol)). Чтобы корректно обрабатывать откаты, рекомендуем хранить предыдущие состояния блокчейна на 100 блоков назад от текущего, этого достаточно в подавляющем большинстве случаев (максимально возможный откат высоты — 2000 блоков, однако вероятность такого отката исчезающе мала). В случае разрыва соединения рекомендуем откатить последний блок на клиенте и возобновить получение событий с предыдущего блока.

Для некоторых аналитических задач не требуется получение событий в реальном времени, достаточно обновления, например, раз в час или раз в сутки. В этом случае рекомендуем использовать функцию `GetBlockUpdatesRange`. Она возвращает только исторические данные об уже примененных блоках, которые гораздо проще обрабатывать.

Структуру запросов и ответов можно посмотреть в файлах [blochckain_updates.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/events/grpc/blockchain_updates.proto) и [events.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/events/events.proto).

> Некоторые изменения на блокчейне не привязаны ни к одной транзакции, а происходят на уровне блока. Например, изменение баланса генератора блока: 40% комиссии за транзакцию, которые получает генератор текущего блока, привязаны к транзакции, а 60%, которые получает генератор следующего блока, привязаны только к этому блоком. Вознаграждение за создание блока также связано только с блоком.
