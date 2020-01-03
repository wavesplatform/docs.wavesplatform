# gRPC Server

**gRPC Server** — [расширение ноды](/ru/waves-node/extensions), которое позволяет запускать [gRPC](https://en.wikipedia.org/wiki/GRPC)-сервисы на [ноде](/ru/blockchain/node).

gRPC-сервисы предоставляют информацию об:

* [аккаунтах](/ru/blockchain/account)
* [блоках](/ru/blockchain/block)
* [блокчейне](/ru/blockchain/blockchain)
* [токенах](/ru/blockchain/token)
* [транзакциях](/ru/blockchain/transaction)

## Установка расширения на ноду

Смотрите страницу [Установка gRPC Server](/ru/waves-node/extensions/grpc-server/grpc-server-installation).

## Генерация клиента

Для подключения к gRPC-сервисам используются клиенты, которые [генерируются](https://grpc.io/docs/tutorials/) из [.proto-файлов](https://github.com/wavesplatform/Waves/tree/master/grpc-server/src/main/protobuf).

Примеры использования gRPC-клиентов, сгенерированных из .proto-файлов:

* [Подключения к сервису транзакций на Java](https://github.com/wavesplatform/WavesJ/blob/master/examples/src/main/java/GRPCTest.java)
* [Загрузка блоков на C#](https://github.com/wavesplatform/WavesCS/blob/master/WavesCSTests/ProtobufTest.cs)
