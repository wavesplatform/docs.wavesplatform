# Waves API

Waves предоставляет следующие API для работы с блокчейном:

* [Node REST API](/ru/waves-node/node-api/) (описан в главе «Нода») позволяет:
   * отправить на блокчейн подписанную транзакцию;
   * получать данные об аккаунтах, токенах, транзакциях, блоках и т. д.;
   * валидировать транзакции, использовать различные утилиты и многое другое.

   Каждый владелец ноды может включить на ней REST API. Команда Waves предоставляет пулы нод с публичным API.

* [Waves Data Service API](/ru/building-apps/waves-api-and-sdk/waves-data-service-api) предназначен для чтения данных из блокчейна, в том числе получения рыночных данных о торговле криптовалютой из транзакций обмена, списков транзакций по типу и др.

* [gRPC Server](/ru/waves-node/extensions/grpc-server/) (описан в главе «Нода») — расширение, которое позволяет владельцу ноды запускать на ней gRPC-сервисы. gRPC Server предоставляет информацию об аккаунтах, токенах, транзакциях и блоках, а также отправить подписанную транзакцию.

* [Blockchain Updates](/ru/waves-node/extensions/blockchain-updates) (описано в главе «Нода») — расширение, которое позволяет владельцу ноды отслеживать изменения, которые внесла каждая транзакция: в балансах аккаунтов, в хранилищах данных, в параметрах токенов и др.

* [Waves Keeper API](/ru/ecosystem/waves-keeper/waves-keeper-api) (описан в главе «Экосистема приложений») позволяет подписывать и отправлять транзакции и биржевые ордера от имени пользователя в браузере с установленным расширением Waves Keeper.

* [Waves Signer](/ru/building-apps/waves-api-and-sdk/client-libraries/signer) — TypeScript/JavaScript-библиотека, которая предоставляет интерфейс с библиотекой-провайдером подписи и дает возможность подписывать и отправлять транзакции от имени пользователей в любом браузере.

:bulb: Список клиентских библиотек для различных языков программирования представлен в разделе [Клиентские библиотеки](/ru/building-apps/waves-api-and-sdk/client-libraries/).

## Какой API использовать

Для получения различных данных блокчейна подойдут разные API.

| Данные | Решение |
| :--- | :--- |
| **Балансы** | |
| Текущий баланс аккаунта | [Node REST API](/ru/waves-node/node-api/)<br>[gRPC Server](/ru/waves-node/extensions/grpc-server/) |
| Изменение баланса по высоте блокчейна | [Blockchain Updates](/ru/waves-node/extensions/blockchain-updates) |
| **Токены** | |
| Поля токена, включая тикер; поиск токена по тикеру | [Data Service API](/ru/building-apps/waves-api-and-sdk/waves-data-service-api) |
| Распределение ассета по адресам | [Node REST API](/ru/waves-node/node-api/) |
| Изменение параметров токена | [Blockchain Updates](/ru/waves-node/extensions/blockchain-updates) |
| **Биржа** | |
| Данные об обмене для пары токенов: последняя цена, данные за 24 часа, свечи | [Data Service API](/ru/building-apps/waves-api-and-sdk/waves-data-service-api) |
| **Транзакции** | |
| Список транзакций по адресу | [Node REST API](/ru/waves-node/node-api/)<br>[gRPC Server](/ru/waves-node/extensions/grpc-server/) |
| Статус транзакции | [Node REST API](/ru/waves-node/node-api/)<br>[gRPC Server](/ru/waves-node/extensions/grpc-server/) |
| Результат транзакции вызова скрипта | [Node REST API](/ru/waves-node/node-api/)<br>[gRPC Server](/ru/waves-node/extensions/grpc-server/) |
| Поиск транзакций по типу и значениям полей | [Data Service API](/ru/building-apps/waves-api-and-sdk/waves-data-service-api) |
| Изменения, внесенные каждой транзакцией | [Blockchain Updates](/ru/waves-node/extensions/blockchain-updates) |
| **Записи данных** | |
| Текущие значения записей | [Node REST API](/ru/waves-node/node-api/)<br>[gRPC Server](/ru/waves-node/extensions/grpc-server/) |
| Изменение записей | [Blockchain Updates](/ru/waves-node/extensions/blockchain-updates) |
| **Лизинги** | |
| Активные лизинги | [Node REST API](/ru/waves-node/node-api/)<br>[gRPC Server](/ru/waves-node/extensions/grpc-server/) |
| Изменения лизингов | [Blockchain Updates](/ru/waves-node/extensions/blockchain-updates) |