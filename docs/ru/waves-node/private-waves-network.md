# Custom блокчейн

В данной статье описан процесс настройки custom сети блокчейн, которую можно использовать для экспериментальной деятельности.

## Настройка Custom блокчейна

Выполните следующие шаги, чтобы настроить custom блокчейн.

### Шаг 1

Установите Git, [Java 8](https://java.com/en/download/) и [sbt](http://www.scala-sbt.org/).

### Шаг 2

Клонируйте [репозиторий Waves](https://github.com/wavesplatform/Waves/).

### Шаг 3

Отредактируйте файл `node/src/test/resources/genesis.example.conf` с параметрами genesis блока.

**Пример**:

```bash
genesis-generator
{
  network-type: "L"  #your custom network identifier byte
  initial-balance: 10000000000000000  #initial balance in wavelets
  base-target: 153722867  #the initial complexity parameter
  average-block-delay: 60s #average block delay
  timestamp: 1500635421931 #comment this to use the current time

  # the sum of shares should be = initial-balance
  distributions
  {
    foo0 { # name for this account. Will be printed in generator's output
      seed-text: "foo0"
      nonce: 0
      amount: 10000000000000000
    }
  }
}
```

### Шаг 4

Запустите команду генерации genesis блока:

```sbt "node/runMain com.wavesplatform.GenesisBlockGenerator node/src/test/resources/genesis.example.conf genesis.conf"```

Результат будет записан в файл `genesis.conf` (можно использовать произвольное имя файла) и будет выглядеть примерно так:

```bash
Addresses:
foo0:
 Seed text:           foo0
 Seed:                3csAfH
 Account seed:        58zgAnBg775J6NKd4qVtfeX3m5TBMeizHNY9STvm2N87
 Private account key: FYLXp1ecxQ6WCPD4axTotHU9RVfPCBLfSeKx1XSCyvdT
 Public account key:  GbGEY3XVc2ohdv6hQBukVKSTQyqP8rjQ8Kigkj6bL57S
 Account address:     3JfE6tjeT7PnpuDQKxiVNLn4TJUFhuMaaT5
Settings:
genesis {
  average-block-delay: 60000ms
  initial-base-target: 153722867
  timestamp: 1500635421931
  block-timestamp: 1500635421931
  signature: "3NELFXiQqQoYUfgLba5YAS1z8gJLc19zfzSvmYRX9eLso4zGByRGDpWdL4cooHTocyi5boFiu6H7hyW3ukVGtswP"
  initial-balance: 10000000000000000
  transactions = [
    {recipient: "3JfE6tjeT7PnpuDQKxiVNLn4TJUFhuMaaT5", amount: 10000000000000000}
  ]
}
```

При сборке fat JAR, можно сгенерировать genesis блок.

**Пример**:

```bash
java -cp ./node/target/waves-all-0.17.2-grpc-27-g0fab715-DIRTY.jar com.wavesplatform.GenesisBlockGenerator node/src/test/resources/genesis.example.conf
```

Вывод будет аналогичным.

### Шаг 5

Создайте файл `*.conf` с произвольным именем (например `waves-custom-network.conf`) и откройте его текстовым редактором.

Больше информации про файл конфигурации в статье [Конфигурация ноды](/ru/waves-node/node-configuration).

Вы можете включать фичи ноды с помощью параметра `pre-activated-features`. Поддерживаемые фичи описаны в статье [Фичи](/ru/waves-node/features).

Если директория не задана, то она будет создана по адресу:
| *nix | macOS | Windows |
| :--- | :--- | :--- |
| `$XDG_DATA_HOME/waves-custom-<character>*` or `$HOME/.local/share/waves-custom-<character>*` | `$HOME/Library/Application Support/waves-custom-<character>*` | `%LOCALAPPDATA%/waves-custom-<character>*` |

> Параметр `address-scheme-character` должен быть таким же как `network-type` в шаге 3.

> Содержимое секции `genesis` это то, что генерируется в шаге 4. Вместо того, чтобы вставить эту секцию, можно написать `include "genesis.conf"`, где `genesis.conf` это имя файла из шага 4.

**Пример**:

```bash
# Waves node settings
waves
{
  # data storage folder
  directory=/tmp/custom

  logging-level = DEBUG

  blockchain
  {
    type: CUSTOM
    custom
    {
      address-scheme-character = "L" # это значение должно быть таким же как `network-type` в шаге 3
      # различные параметры сетевого консенсуса

      functionality {
        feature-check-blocks-period = 30
        blocks-for-feature-activation = 25
        pre-activated-features = {
        2 = 0
        }
      }
      genesis {
        average-block-delay = 60000ms
        initial-base-target = 153722867
        timestamp = 1500635421931
        block-timestamp = 1500635421931
        signature = "3NELFXiQqQoYUfgLba5YAS1z8gJLc19zfzSvmYRX9eLso4zGByRGDpWdL4cooHTocyi5boFiu6H7hyW3ukVGtswP"
        initial-balance = 10000000000000000
        transactions = [
          {recipient = "3JfE6tjeT7PnpuDQKxiVNLn4TJUFhuMaaT5", amount = 10000000000000000}
        ]
      }
      # содержимое секции `genesis` это то, что генерируется в шаге 4
      # обратите внимание, что вместо того, чтобы вставить секцию, вы можете написать
      # `include "genesis.conf"`, где `genesis.conf` это имя файла из шага 4
    }
  }

  network
  {
    bind-address = "0.0.0.0"
    port = 6860
    known-peers = []
    node-name = "L custom node 1"
    declared-address = "127.0.0.1:6860"
  }

  wallet
  {
    password = "password"
    seed = "3csAfH"
  }

  rest-api
  {
    # включить/выключить REST API
    enable = yes
    # сетевой адрес для привязки
    bind-address = "0.0.0.0"
    # Port для запросов REST API
    port = 6861
    # хэш API ключа
    api-key-hash = "H6nsiifwYKYEx6YzYD7woP1XCn72RVvx6tC1zjjLXqsu"
  }

  miner
  {
    # Enable block generation only in the last block is not older the given period of time
    interval-after-last-block-then-generation-is-allowed = 999d
    # Required number of connections (both incoming and outgoing) to attempt block generation. Setting this value to 0
    # enables "off-line generation".
    quorum = 0
  }
}
```

**Примечание**: В этом примере период активации функции будет не `30`, а `60`, однако для `feature-check-blocks-period` установлено значение `30`. Это потому, что `double-features-period-after-height` по умолчанию установлено `0`

Обратите внимание на параметры `waves.blockchain.custom.address-схема-character` и `waves.blockchain.custom.genesis`. Они были скопированы с результата и настроек инструмента Genesis Generator. Также посмотрите на значение `waves.wallet.seed`. Это значение может быть скопировано из значения "Seed" для одного из адресов генезиса из результата Genesis Generator.

Секция `waves.blockchain.custom.functionality` содержит параметры, которые позволяют включить/выключить некоторые фичи системы блокчейн.

**Примечание**: В секцию `waves.blockchain.custom.functionality` можно добавлять новые параметры, которых нет в данном примере; в качестве примера рабочей конфигурации, смотрите [waves-devnet.conf файл в корневой директории репозитория](https://github.com/wavesplatform/Waves/blob/master/node/waves-devnet.conf).

### Шаг 6

Запустите вашу custom ноду с помощью команды:

```sbt "node/run waves-custom-network.conf"```

Кроме того, вы можете запустить пакет deb или jar с этим файлом конфигурации вручную.

## Добавить ноды в свою сеть

Вы можете добавить больше нод в свою сеть, используя параметр `waves.network.known-peers`, указав адрес и порт существующего узла с такими же параметрами сети, как `127.0.0.1:6860`. Если у вас несколько локаьных нод, то не забудьте изменить для новых нод сетевой порт `waves.network.port`, порт API `waves.rest-api.port`, папку для данных `waves.directory` и кошелек seed `waves.wallet.seed`.

## Настройка дополнительных сервисов

Вы можете подключить к своему блокчейну дополнительные сервисы, такие как:

* [Дата сервисы](/ru/building-apps/waves-api-and-sdk/waves-data-service-api), которые позволят быстро и удобно получать данные из блокчейна через REST API, аналогично Mainnet и Testnet, описанным в статье [Waves Data Service API](/ru/building-apps/waves-api-and-sdk/waves-data-service-api). Подробнее по ссылкам [deploy examples](https://github.com/wavesplatform/deploy-examples) и [How to Run Data Services](https://wavestalk.ru/t/kak-zapustit-data-services-za-30-minut-iz-korobki/272).

* [dApps](/ru/blockchain/account/dapp). Подробнее в статье по ссылке [How to Build, Deploy and Test a Waves RIDE dApp](https://blog.wavesplatform.com/how-to-build-deploy-and-test-a-waves-ride-dapp-785311f58c2).

* [Waves Explorer](/ru/ecosystem/waves-explorer/about-waves-explorer), который позволит просматривать данные блокчейна в удобочитаемом формате.

   Чтобы развернуть Waves explorer в [контейнере docker](https://hub.docker.com/r/wavesplatform/explorer) на localhost, используйте следующую команду:

   ```bash
   docker run -d -e API_NODE_URL=http://localhost:6869 -e NODE_LIST=http://localhost:6869 -p 3000:8080 wavesplatform/explorer
   ```

* [DEX Extension](https://github.com/wavesplatform/dex): Интерфейс DEX Server для связи с кодом ноды.

<!--* [Matcher](https://docs.waves.exchange/en/waves-matcher/) -->
