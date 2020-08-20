# Собственный (сustom) блокчейн

В данной статье описан процесс установки собственного (custom) блокчейна Waves, который можно использовать для экспериментальной деятельности.

Для большинства задач, таких как знакомство с блокчейном, отправка транзакций, разработка смарт-контрактов, достаточно развернуть [одну ноду с собственным блокчейном в Docker](#развернуть-ноду-с-собственным-блокчейном-в-docker).

Для настройки собственной сети блокчейн с несколькими нодами выполните шаги, описанные в секции [Установить Jar ноду с собственным блокчейном](#установить-jar-ноду-с-собственным-блокчейном).

## Развернуть ноду с собственным блокчейном в Docker

Самый простой способ запустить собственную блокчейн сеть Waves с одной нодой — это [установить Docker](https://docs.docker.com/engine/install/) и [развернуть  Docker-контейнер ноды Waves с настройками для собственной сети](https://hub.docker.com/r/wavesplatform/waves-private-node).

## Установить Jar-ноду с собственным блокчейном

Вы можете запустить одну или несколько Jar-нод для создания собственного (частного) блокчейна.
Для этого нужно создать блок генезиса и задать настройки блокчейна в файле конфигурации.

### Шаг 1

Установите [Java 8 или 11](https://java.com/en/download/).

### Шаг 2

Загрузите [последнюю версию Jar-ноды](https://github.com/wavesplatform/Waves/releases) (файл `waves-all-{version}.jar`).

### Шаг 3

Создайте файл `genesis.example.conf`с параметрами блока генезиса в папке с файлом `.jar`.

**Пример**:

```bash
genesis-generator
{
  network-type: "L"  #байт сети (идентификатор) вашего блокчейна
  initial-balance: 10000000000000000  #первоначальный баланс в wavelets
  base-target: 153722867  #первоначальный параметр сложности
  average-block-delay: 60s #средняя задержка блока
  timestamp: 1500635421931 #закомментируйте, чтобы использовать текущее время

  # сумма долей должна быть = initial-balance
  distributions
  {
    foo0 { # имя аккаунта. Будет отображаться при генерации
      seed-text: "foo0"
      nonce: 0
      amount: 10000000000000000
    }
  }
}
```

### Шаг 4

Запустите команду генерации блока генезиса:

```bash
java -cp waves-all-{version}.jar com.wavesplatform.GenesisBlockGenerator genesis.example.conf
```

Результат будет записан в файл `genesis.conf` (можно использовать произвольное имя файла) и будет выглядеть следующим образом:

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

Секция `Addresses` содержит список аккаунтов, на которые распределены средства в блоке генезиса, секция `genesis` понадобится далее в [шаге 5](#шаг-5).

### Шаг 5

В папке с файлом `.jar` создайте файл `*.conf` с произвольным именем (например, `waves-custom-network.conf`) и откройте его текстовым редактором. Используйте [пример файла конфигурации](https://github.com/wavesplatform/private-node-docker-image/blob/stagenet/waves.custom.conf) в качестве образца.

Больше информации про файл конфигурации см. в статье [Конфигурация ноды](/ru/waves-node/node-configuration).

Если основная папка приложения (параметр `directory`) не задана, то она будет создана по адресу:

| *nix | macOS | Windows |
| :--- | :--- | :--- |
| `$XDG_DATA_HOME/waves-custom-<character>*` or `$HOME/.local/share/waves-custom-<character>*` | `$HOME/Library/Application Support/waves-custom-<character>*` | `%LOCALAPPDATA%/waves-custom-<character>*` |

Секция `waves.blockchain.custom.functionality` позволяет настроить временные метки активации различных валидаций блокчейна. В данную секцию можно добавлять новые параметры, которых нет в конфигурации стандартных нод. Вы можете включать/выключать фичи ноды с помощью параметра `pre-activated-features`. Поддерживаемые фичи описаны в статье [Фичи](/ru/waves-node/features/).

Вставьте контент, сгенерированный в [шаге 4](#шаг-4), в секцию `waves.blockchain.custom.genesis` файла конфигурации. Вместо того чтобы вставить эту секцию, можно написать `include "genesis.conf"`, где `genesis.conf` — это имя файла из шага 4.

Значение параметра `waves.blockchain.custom.address-scheme-character` должно быть таким же, как `network-type` в [шаге 3](#шаг-3).

Задайте параметры `waves.wallet`. Используйте значение `Seed` (`Seed text` в base58), сгенеированный в [шаге 4](#шаг-4), в качестве значения параметра `waves.wallet.seed`.

В секции `waves.network` задайте значения параметров `port`, `known-peers` (список [нод вашего блокчейна](#добавление-нод-в-свою-сеть)), `node-name` и `declared-address`.

Чтобы включить REST API вашей ноды, задайте параметры `enable`, `port` и `api-key-hash` (можно создать [тут](https://nodes.wavesnodes.com/api-docs/index.html#/utils/hashSecure_1)) в секции `waves.rest-api`.

### Шаг 6

Запустите вашу ноду на собственном блокчейне с помощью команды:

```
java -jar waves-all-{version}.jar waves-custom-network.conf
```

**Примечание**: Вы можете запустить существующую ноду (DEB или JAR) с измененным файлом конфигурации вручную.

## Добавление нод в свою сеть

Вы можете добавить несколько нод в свою сеть, используя параметр `waves.network.known-peers`, указав адрес и порт существующей ноды с такими же параметрами сети, например: `127.0.0.1:6860`. Если у вас несколько локальных нод, то не забудьте изменить для новых нод сетевой порт `waves.network.port`, порт API `waves.rest-api.port`, основную папку приложения `waves.directory` и секретную фразу кошелька `waves.wallet.seed`.

## Настройка дополнительных сервисов

Вы можете подключить к своему блокчейну дополнительные сервисы, такие как:

* [Cервис данных](/ru/building-apps/waves-api-and-sdk/waves-data-service-api) (Data Service), который позволит быстро и удобно получать данные из блокчейна через REST API, аналогично Mainnet и Testnet, как описано в статье [Waves Data Service API](/ru/building-apps/waves-api-and-sdk/waves-data-service-api). Подробнее по ссылке [deploy examples](https://github.com/wavesplatform/deploy-examples).

* [dApps](/ru/blockchain/account/dapp). Подробнее в статье [How to Build, Deploy and Test a Waves RIDE dApp](https://medium.com/wavesprotocol/how-to-build-deploy-and-test-a-waves-ride-dapp-785311f58c2).

* [Waves Explorer](/ru/ecosystem/waves-explorer/about-waves-explorer), который позволит просматривать данные блокчейна в удобочитаемом формате.

   Чтобы развернуть Waves Explorer в [Docker-контейнере](https://hub.docker.com/r/wavesplatform/explorer) на localhost, используйте следующую команду:

   ```bash
   docker run -d -e API_NODE_URL=http://localhost:6869 -e NODE_LIST=http://localhost:6869 -p 3000:8080 wavesplatform/explorer
   ```

* [Матчер](https://github.com/wavesplatform/matcher), который исполняет ордера (биржевые заявки) на покупку и продажу активов.

<!--* [Matcher](https://docs.waves.exchange/en/waves-matcher/) -->
