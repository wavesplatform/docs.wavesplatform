# gRPC Server

**gRPC Server** — [расширение ноды](/ru/waves-node/extensions/), которое позволяет запускать [gRPC](https://en.wikipedia.org/wiki/GRPC)-сервисы.

gRPC-сервисы предоставляют информацию про:

* [аккаунты](/ru/blockchain/account/)
* [блоки](/ru/blockchain/block/)
* [блокчейн](/ru/blockchain/blockchain/)
* [токены](/ru/blockchain/token/)
* [транзакции](/ru/blockchain/transaction/)

## Генерация клиента

Для подключения к gRPC-сервисам используются клиенты, которые [генерируются](https://grpc.io/docs/tutorials/) из [proto-файлов](https://github.com/wavesplatform/protobuf-schemas).

Пример использования gRPC-клиента, сгенерированного из .proto-файлов: [Загрузка блоков на C#](https://github.com/wavesplatform/WavesCS/blob/master/WavesCSTests/ProtobufTest.cs)

## Установка расширения на ноду

gRPC Server можно установить на ноду двумя способами: с помощью DEB-пакета и с помощью TGZ-архива.

### Установка с помощью DEB-пакета

1. Скачайте последнюю версию DEB-пакета со страницы [Releases](https://github.com/wavesplatform/Waves/releases) (секция Assets).

   Имя пакета с расширением:

   • для Mainnet `grpc-server_{номер версии}_all.deb`

   • для Testnet `grpc-server-testnet_{номер версии}_all.deb`

   • для Stagenet `grpc-server-stagenet_{номер версии}_all.deb`

2. Установите пакет.

   Для Mainnet:

   ```bash
   sudo dpkg -i grpc-server_{номер версии}_all.deb
   ```

   Для Testnet:

   ```bash
   sudo dpkg -i grpc-server-testnet_{номер версии}_all.deb
   ```

   Для Stagenet:

   ```bash
   sudo dpkg -i grpc-server-stagenet_{номер версии}_all.deb
   ```

3. Отредактируйте файл конфигурации ноды (см. раздел [Конфигурация ноды](/ru/waves-node/node-configuration)). Для Mainnet файл конфигурации находится по адресу `/etc/waves/waves.conf`, для Testnet — `/etc/waves-testnet/waves.conf`, для Stagenet — `/etc/waves-stagenet/waves.conf`.

   3.1. Добавьте gRPC Server в секцию `waves.extensions`:

   
   ```
   waves {
      ...
      extensions = [
         com.wavesplatform.api.grpc.GRPCServerExtension
      ]
   }
   ```

   3.2. Если требуется изменить порт для подключения клиента (по умолчанию 6870), добавьте настройку:

   ```
   waves {
      ...
      grpc {
         port = 6877 # Укажите порт
   }
   ```

4. Перезапустите ноду.

   Для Mainnet:

   ```bash
   sudo systemctl restart waves
   ```

   Для Testnet:

   ```bash
   sudo systemctl restart waves-testnet
   ```

   Для Stagenet:

   ```bash
   sudo systemctl start waves-stagenet
   ```

### Установка с помощью TGZ-архива

1. Скачайте TGZ-архив с расширением со страницы [Releases](https://github.com/wavesplatform/Waves/releases) (секция Assets) на GitHub.

   Имя TGZ-архива с расширением:

   • для Mainnet `grpc-server-{номер версии}.tgz`

   • для Testnet `grpc-server-testnet-{номер версии}.tgz`

   • для Stagenet `grpc-server-stagenet-{номер версии}.tgz`

2. Распакуйте архив в папку с JAR-файлом ноды.

3. Создайте новый файл конфигурации или откройте существующий  (см. раздел [Конфигурация ноды](/ru/waves-node/node-configuration)).

   3.1. Добавьте gRPC Server в секцию `waves.extensions`:

   
   ```
   waves {
      ...
      extensions = [
         com.wavesplatform.api.grpc.GRPCServerExtension
      ]
   }
   ```

   3.2. Если требуется изменить порт для подключения клиента (по умолчанию 6870), добавьте настройку:

   ```
   waves {
      ...
      grpc {
         port = 6877 # Укажите порт
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
