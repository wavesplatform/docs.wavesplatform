# Развернуть ноду в Docker

Самый простой способ запустить ноду Waves — это развернуть **образ Waves в Docker**. Docker-образ Waves предназначен для быстрого и удобного разворачивания ноды и содержит скрипты и файлы конфигурации для запуска ноды в сети Mainnet, Testnet, Stagenet и любой другой кастомной сети.

GitHub-репозиторий: https://github.com/wavesplatform/Waves/tree/master/docker

## Предварительные требования

Установите приложение Docker с [официального сайта](https://docs.docker.com/engine/installation/).

## Сборка Docker-образа

Вы можете загрузить актуальную версию Docker-образа на странице [Docker Hub](https://hub.docker.com/r/wavesplatform/wavesnode) или с помощью команды:

```bash
docker pull wavesplatform/wavesnode
```

Или используйте следующую команду для сборки образа из текущего локального репозитория (из корневой директории репозитория):

```bash
./build-with-docker.sh && docker build -t wavesplatform/wavesnode docker
```

Вы можете задать следующие параметры при сборке образа:

| Параметр | Значение по умолчанию | Описание |
|----------|---------------|---------------------------------------------|
| WAVES_NETWORK | mainnet | Тип блокчейн-сети Waves. Возможные значения: `mainnet`, `testnet` или `stagenet`. Значение может быть переопределено во время выполнения, с помощью переменной среды с тем же именем. |
| WAVES_LOG_LEVEL | DEBUG | Уровень логирования по умолчанию. Возможные значения: `OFF`, `ERROR`, `WARN`, `INFO`, `DEBUG` или `TRACE`. Значение может быть переопределено во время выполнения, с помощью переменной среды с тем же именем. [Подробнее про логирование](/ru/waves-node/logging-configuration). |
| WAVES_HEAP_SIZE | 2g | Ограничение Java Heap Size в нотации -X Command-line Options (-Xms=[ваше значение]). Значение может быть переопределено во время выполнения, с помощью переменной среды с тем же именем. [Подробнее про -X Command-line Options](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionX.html). |

## Запуск образа

### Параметры конфигурации ноды

Перед запуском Docker-образа рекомендуем ознакомиться со статьей [Конфигурация ноды](/ru/waves-node/node-configuration).

Параметры конфигурации ноды можно указать в файле конфигурации ноды или при запуске образа в виде переменных среды. Переменные среды имеют приоритет над настройками в файле конфигурации.

Пример команды запуска образа ноды с переменными среды:

```bash
docker run -v /docker/waves/waves-data:/var/lib/waves -v /docker/waves/waves-config:/etc/waves -p 6869:6869 -p 6862:6862 -e JAVA_OPTS="-Dwaves.rest-api.enable=yes -Dwaves.rest-api.bind-address=0.0.0.0 -Dwaves.wallet.password=myWalletSuperPassword" -e WAVES_NETWORK=stagenet -ti wavesplatform/wavesnode
```

| Переменная среды | Описание |
|----------------------|-------------------------------------------------|
| WAVES_WALLET_SEED | Seed-фраза в base58. JVM-параметр `-Dwaves.wallet.seed` |
| WAVES_WALLET_PASSWORD | Пароль файла кошелька. JVM-параметр `-Dwaves.wallet.password` |
| WAVES_LOG_LEVEL | Уровень логирования ноды. Возможные значения: `OFF`, `ERROR`, `WARN`, `INFO`, `DEBUG` и `TRACE`. [Подробнее про логирование](/ru/waves-node/logging-configuration) |
| WAVES_HEAP_SIZE | Ограничение Java Heap Size в нотации -X Command-line Options (-Xms=[ваше значение]). [Подробнее про -X Command-line Options](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionX.html) |
| WAVES_NETWORK | Тип сети Waves. Возможные значения: `mainnet`, `testnet` и `stagenet` |
| JAVA_OPTS | Дополнительные параметры JVM-конфигурации ноды. Полные пути к параметрам конфигурации и примеры значений можно посмотреть в файле [application.conf](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/application.conf) |

Файл конфигурации ноды Waves (по умолчанию) находится в директории `/etc/waves/waves.conf`. Вы можете смонтировать данную директорию в Docker volumes. См. подробнее про Docker volumes в секции [Работы с данными](#работа-с-данными).

Если директория не существует, то она будет создана вместе с файлом конфигурации по умолчанию. Файл конфигурации по умолчанию будет создан в зависимости от типа сети, заданного переменной `WAVES_NETWORK`. Если значение `WAVES_NETWORK` не `mainnet`, `testnet` или `stagenet`, файл конфигурации по умолчанию не будет использован. В этом случае будет использован тип сети `CUSTOM`, для которого требуются файл конфигурации с соответствующими настройками. Если запустить образ с типом сети `CUSTOM` и система не обнаружит файл `/etc/waves/waves.conf`, то образ не запустится.

По умолчанию файл `/etc/waves/waves.conf` содержит `/etc/waves/local.conf`. Вы можете использовать измененный `/etc/waves/local.conf` для переопределения настроек по умолчанию. Можно использовать измененный `/etc/waves/waves.conf`, чтобы переопределить все настройки ноды.

### Работа с данными

Рекомендуется хранить файлы состояния блокчейна и файлы конфигурации на стороне хоста. Рассмотрите возможность монтирования [Docker volumes](https://docs.docker.com/storage/volumes/), чтобы смонтировать директории внутри контейнера.

**Пример**:

* Создайте директории для хранения данных Waves с помощью следующих команд:

   ```bash
   mkdir -p /docker/waves
   
   mkdir /docker/waves/waves-data

   mkdir /docker/waves/waves-config
   ```

* При запуске контейнера, будут автоматически созданы следующие директории в директории `/docker/waves/waves-data`:

   `/docker/waves/waves-data/log` - для логов ноды

   `/docker/waves/waves-data/data` - для файлов состояние блокчейна

   `/docker/waves/waves-data/wallet` - для данных кошелька

   Также будет создан стандартный файл конфигурации `/docker/waves/waves-config/waves.conf`

   Если у вас уже есть файл конфигурации или другие данные, вы можете поместить их в соответствующие директории.

<!--
* Для запуска контейнера, потребуется настроить соответствующие разрешения. Используйте пользователя `waves` с заданными uid/gid `143/143`. Для этого поменяйте разрешения созданных директорий или поменяйте владельца директорий с помощью следующей команды:

   ```bash
   sudo chown -R 143:143 /docker/waves
   ```

   или

   ```bash
   sudo chmod -R 777 /docker/waves
   ```
-->

* Добавьте соответствующие аргументы в команду `docker run`, как в следующем примере:

   ```bash
   docker run -v /docker/waves/waves-data:/var/lib/waves -v /docker/waves/waves-config:/etc/waves -e WAVES_NETWORK=stagenet -e WAVES_WALLET_PASSWORD=myWalletSuperPassword -ti wavesplatform/wavesnode
   ```

### Состояние блокчейна

Если вы запускаете ноду впервые, имейте в виду, что после запуска нода начнет загружать файлы состояния блокчейна из других нод. Данный процесс занимает длительное время. Во время загрузки нода будет верифицировать все блоки один за другим.

Вы можете ускорить процесс. Для этого загрузите и распакуйте архив с файлами состояния блокчейна из официального источника и помеситите файлы в контейнер (как описано в секции [Работа с данными](#работа-с-данными)). При таком сценарии нода пропустит верификацию блоков. Отказ от верификации также является причиной того, почему файлы состояния блокчейна следует загружать только из наших официальных источников:

| Тип сети | Ссылка |
|---------|---------------------------------------------------------|
| mainnet | http://blockchain.wavesnodes.com/blockchain_last.tar |
| testnet | http://blockchain-testnet.wavesnodes.com/blockchain_last.tar |
| stagenet | http://blockchain-stagenet.wavesnodes.com/blockchain_last.tar |

**Примечание**: Мы не можем гарантировать соответствие данных загруженных из других источников.

**Пример команд для загрузки файлов состояние блокчейна и запуска образа**:

```bash
mkdir -p /docker/waves/waves-data

wget -qO- http://blockchain-stagenet.wavesnodes.com/blockchain_last.tar --show-progress | tar -xvf - -C /docker/waves/waves-data
 
docker run -v /docker/waves/waves-data:/var/lib/waves -e WAVES_NETWORK=stagenet -e WAVES_WALLET_PASSWORD=myWalletSuperPassword -ti wavesplatform/wavesnode
```

### Сетевые порты

Параметры REST API ноды можно задать в секции [REST API](/ru/waves-node/node-configuration#настроики-rest-api) файла конфигурации ноды. Порты для входящих подключений ноды можно задать в секции [Настройки сети](/ru/waves-node/node-configuration#настроки-сети).

В следующем примере представлена команда для запуска ноды со следующими настройками:

* Порт REST-API включен и задан на socket `0.0.0.0:6870`
* Порт соединения ноды включен и задан на socket `0.0.0.0:6868`
* Порты `6868` и `6870` заданы от хоста до контейнера

```bash
docker run -v /docker/waves/waves-data:/var/lib/waves -v /docker/waves/waves-config:/etc/waves -p 6870:6870 -p 6868:6868 -e JAVA_OPTS="-Dwaves.network.declared-address=0.0.0.0:6868 -Dwaves.rest-api.port=6870 -Dwaves.rest-api.bind-address=0.0.0.0 -Dwaves.rest-api.enable=yes" -e WAVES_WALLET_PASSWORD=myWalletSuperPassword -ti  wavesplatform/wavesnode
```

**Примечание**: По умолчанию REST API использует порт 6869. Сетевой порт по умолчанию зависит от типа сети (MAINNET - 6868, STAGENET - 6862, TESTNET/custom - 6863).

Для проверки работоспособности REST API, перейдите по следующей ссылке со стороны хоста: http://localhost:6870/api-docs/index.html

### Расширения

Вы можете запускать расширения следующим образом:

1. Скопируйте все lib/*.jar файлы из расширения в любую директорию, например `plugins`.

2. Добавьте класс расширения в файле конфигурации ноды (например в `local.conf`):

   ```bash
   waves.extensions += com.johndoe.WavesExtension
   ```

3. Запустите образ с помощью команды:

   ```bash
   docker run -v "$(pwd)/plugins:/usr/share/waves/lib/plugins" -v "$(pwd)/local.conf:/etc/waves/local.conf" -i wavesplatform/wavesnode
   ```
