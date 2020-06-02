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

Примеры использования gRPC-клиентов, сгенерированных из .proto-файлов:

* [Подключения к сервису транзакций на Java](https://github.com/wavesplatform/WavesJ/blob/master/examples/src/main/java/GRPCTest.java)
* [Загрузка блоков на C#](https://github.com/wavesplatform/WavesCS/blob/master/WavesCSTests/ProtobufTest.cs)

## Установка расширения на ноду

gRPC Server можно установить на ноду двумя способами: с помощью DEB-пакета и с помощью ZIP-файла.

## Установка с помощью DEB-пакета

1.&nbsp;Скачайте DEB-пакет со страницы [Releases](https://github.com/wavesplatform/Waves/releases) (секция Assets) на GitHub. Для [Mainnet](/ru/blockchain/blockchain-network/main-network) это файл `grpc-server_{номер версии}_all.deb`, для [Testnet](/ru/blockchain/blockchain-network/test-network) — `grpc-server-testnet_{номер версии}_all.deb`.

2.&nbsp;Установите пакет с помощью команды:

```bash
sudo dpkg -i grpc-server_{номер версии}_all.deb
```

3.&nbsp;В файл конфигурации добавьте следующую строку:

```bash
waves.extensions += com.wavesplatform.api.grpc.GRPCServerExtension
```

Для Mainnet файл конфигурации находится по адресу `/etc/waves/waves.conf`, для Testnet — `/etc/waves-testnet/waves.conf`.

4.&nbsp;Перезапустите ноду.

Если нода запущена в Mainnet, выполните команду:

```bash
sudo systemctl restart waves
```

Если нода запущена в Testnet, выполните команду:

```bash
sudo systemctl restart waves-testnet
```

## Установка с помощью ZIP-файла

1.&nbsp;Скачайте ZIP-файл `grpc-server-{номер версии}.zip` со страницы [Releases](https://github.com/wavesplatform/Waves/releases) (секция Assets) на GitHub.

2.&nbsp;Распакуйте архив в папку с JAR-файлом ноды.

3.&nbsp;Создайте новый файл конфигурации или откройте существующий и добавьте в него строчку:

```bash
waves.extensions += com.wavesplatform.api.grpc.GRPCServerExtension
```

4.&nbsp;Выполните команду:

```bash
java -cp 'waves-all-1.0.0.jar:grpc-server-1.0.0/lib/*' com.wavesplatform.Application {название файла конфигурации}.conf
```
