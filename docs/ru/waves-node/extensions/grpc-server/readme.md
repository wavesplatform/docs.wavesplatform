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

gRPC Server можно установить на ноду двумя способами: с помощью DEB-пакета и с помощью ZIP-файла.

## Установка с помощью DEB-пакета

1. Скачайте последнюю версию DEB-пакета со страницы [Releases](https://github.com/wavesplatform/Waves/releases) (секция Assets).

   Имя пакета с расширением:

   * для Mainnet `grpc-server_{номер версии}_all.deb`
   * для Testnet `grpc-server-testnet_{номер версии}_all.deb`
   * для Stagenet `grpc-server-stagenet_{номер версии}_all.deb`

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

3. Отредактируйте файл конфигурации ноды (см. раздел [Конфигурация ноды](/ru/waves-node/node-configuration)): добавьте gRPC Server в секцию `waves.extensions`:

   
   ```
   waves {
      ...
      extensions = [
         com.wavesplatform.api.grpc.GRPCServerExtension
      ]
   }
   ```

   Для Mainnet файл конфигурации находится по адресу `/etc/waves/waves.conf`, для Testnet — `/etc/waves-testnet/waves.conf`, для Stagenet — `/etc/waves-stagenet/waves.conf`

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

## Установка с помощью TGZ-архива

1. Скачайте TGZ-архив с расширением со страницы [Releases](https://github.com/wavesplatform/Waves/releases) (секция Assets) на GitHub.

   Имя TGZ-архива с расширением:

   * для Mainnet `grpc-server-{номер версии}.deb`
   * для Testnet `grpc-server-testnet-{номер версии}.deb`
   * для Stagenet `grpc-server-stagenet_{номер версии}.deb`

2. Распакуйте архив в папку с JAR-файлом ноды.

3. Создайте новый файл конфигурации или откройте существующий и добавьте gRPC Server в секцию `waves.extensions`:

   
   ```
   waves {
      ...
      extensions = [
         com.wavesplatform.api.grpc.GRPCServerExtension
      ]
   }
   ```

4.&nbsp;Выполните команду:

```bash
java -cp 'waves-all-1.0.0.jar:grpc-server-{номер версии}/lib/*' com.wavesplatform.Application {название файла конфигурации}.conf
```

   В Windows используйте `;` вместо `:`

   ```bash
   java -cp 'waves-all-{номер версии}.jar;grpc-server-{номер версии}/lib/*' com.wavesplatform.Application {имя файла конфигурации}.conf
   ```