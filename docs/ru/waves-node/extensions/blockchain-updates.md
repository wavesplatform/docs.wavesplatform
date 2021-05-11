---
sidebarDepth: 3
---

# Расширение Blockchain Updates

**Blockchain Updates** — [расширение ноды](/ru/waves-node/extensions/), которое отправляет по [gRPC](https://en.wikipedia.org/wiki/GRPC) сообщения об изменениях на блокчейне.

> Это документация Blockchain Updates для версии ноды **1.2.20** и выше. Эта версия Blockchain Updates несовместима с предыдущими: приложения, работающие с предыдущими версиями, не смогут использовать эту версию. См. раздел [Переход с предыдущей версии](#переход-с-предыдущей-версии) ниже.

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

## Требования к оборудованию

Для ноды с расширением Blockchain Updates рекомендуется увеличить дисковое пространство на 50 Гбайт SSD (например, на высоте 2422450 для хранения данных расширения используется 35 Гбайт).

## Запуск ноды с расширением

:warning: **Важно:** для работы расширения Blockchain Updates необходима база данных блокчейна с полной историей изменений с момента создания блокчейна. Для получения такой базы данных используйте один из следующих способов:
* Запустите ноду с расширением с нуля и дождитесь синхронизации блокчейна в обычном режиме работы ноды (см. раздел [Синхронизировать блокчейн Waves](/ru/waves-node/options-for-getting-actual-blockchain/)).
* Импортируйте блокчейн из бинарного файла (см. раздел [Импортировать и экспортировать блокчейн](/ru/waves-node/options-for-getting-actual-blockchain/import-from-the-blockchain)).
* Загрузите базу данных из архива (см. раздел [Загрузить актуальный блокчейн](/ru/waves-node/options-for-getting-actual-blockchain/state-downloading-and-applying.md)), при этом вместо архива `blockchain_last.tar` используйте архив `blockchain-updates_last.tar`, доступный по тем же ссылкам.

Ноду с расширением можно установить двумя способами: из DEB-пакета и из JAR-файла. Расширение Blockchain Updates находится в том же пакете и архиве, что и [gRPC Server](/ru/waves-node/extensions/grpc-server/). Установить эти расширения можно как вместе, так и по отдельности, отличаются только настройки в файле конфигурации ноды.

### Установка из DEB-пакета

1. Скачайте последнюю версию DEB-пакетов ноды и расширения со страницы [Releases](https://github.com/wavesplatform/Waves/releases) (секция Assets) на GitHub.

   Имя пакета с расширением:

   • для Mainnet: `grpc-server_{номер версии}_all.deb`

   • для Testnet: `grpc-server-testnet_{номер версии}_all.deb`

   • для Stagenet: `grpc-server-stagenet_{номер версии}_all.deb`

2. Установите пакеты:

   Для Mainnet:

   ```bash
   sudo dpkg -i waves_{номер версии}_all.deb
   sudo dpkg -i grpc-server_{номер версии}_all.deb
   ```

   Для Testnet:

   ```bash
   sudo dpkg -i waves-testnet_{номер версии}_all.deb
   sudo dpkg -i grpc-server-testnet_{номер версии}_all.deb
   ```

   Для Stagenet:

   ```bash
   sudo dpkg -i waves-stagenet_{номер версии}_all.deb
   sudo dpkg -i grpc-server-stagenet_{номер версии}_all.deb
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

   3.2. Если требуется изменить порт для подключения клиента (по умолчанию 6881), добавьте настройку:

   ```
   waves {
      ...
      blockchain-updates {
         grpc-port = 6888 # Укажите порт
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
   sudo systemctl start waves-stagenet
   ```

Если расширение работает, в [log-файле](/ru/waves-node/logging-configuration) ноды появятся сообщения:

```
BlockchainUpdates extension starting with settings <...>
BlockchainUpdates startup check successful at height <...>
BlockchainUpdates extension started gRPC API on port <...>
```

### Установка из JAR-файла

1. Скачайте последнюю версию JAR-файла ноды и TGZ-архива с расширением со страницы [Releases](https://github.com/wavesplatform/Waves/releases) (секция Assets) на GitHub.

   Имя TGZ-архива с расширением:

   • для Mainnet: `grpc-server-{номер версии}.tgz`

   • для Testnet: `grpc-server-testnet-{номер версии}.tgz`

   • для Stagenet: `grpc-server-stagenet-{номер версии}.tgz`

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

   3.2. Если требуется изменить порт для подключения клиента (по умолчанию 6881), добавьте настройку:

   ```
   waves {
      ...
      blockchain-updates {
         grpc-port = 6888 # Укажите порт
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
* [GetBlockUpdatesRange](#GetBlockUpdatesRange) — возвращает массив изменений, порожденных блоками в указанном диапазоне высоты.
* [Subscribe](#Subscribe) — возвращает поток сообщений об изменениях, вначале исторические данные (то есть изменения до текущей высоты блокчейна), затем текущие события в реальном времени. Опционально можно указать начальную и/или конечную высоту.

Структуру запросов и ответов можно посмотреть в файле [blockchain_updates.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/events/grpc/blockchain_updates.proto).

### Subscribe

Функция `Subscribe` возвращает все события в реальном времени: добавление блока, добавление микроблока, откат блока, откат микроблока (см. описание протокола [Waves-NG](/en/blockchain/waves-protocol/waves-ng-protocol)).

В случае разрыва соединения рекомендуем откатить последний блок на клиенте и возобновить получение событий с предыдущего блока.

Параметры:

| Имя | Тип | Описание |
| :--- | :--- | :--- |
| from_height | int32 | Начальная высота. Необязательный параметр, по умолчанию 1 |
| to_height | int32 | Конечная высота. Необязательный параметр, по умолчанию высота не ограничена |

Функция возвращает поток сообщений об изменениях `SubscribeEvent`.

Поля сообщения:

| Имя | Тип | Описание |
| :--- | :--- | :--- |
| update.id | bytes | ID последнего блока или микроблока на блокчейне после события |
| update.height | int32 | Высота |
| update.update | Append или Rollback | Событие: добавление или откат блока или микроблока. См. [Формат событий](#формат-событий) ниже |
| referenced_assets | repeated StateUpdate.AssetInfo | Ассеты, участвующие в событии. См. [AssetInfo](#AssetInfo) ниже |

### GetBlockUpdatesRange

Функция `GetBlockUpdatesRange` возвращает только исторические данные об уже примененных блоках. Рекомендуем использовать ее для аналитических задач, для которых достаточно обновления, например, раз в час или раз в сутки. Конечную высоту диапазона лучше указывать на несколько блоков меньше текущей, чтобы избежать проблем в случае отката высоты.

Параметры:

| Имя | Тип | Описание |
| :--- | :--- | :--- |
| from_height | int32 | Начальная высота. Обязательный параметр |
| to_height | int32 | Конечная высота. Обязательный параметр |

Функция возвращает массив сообщений об изменениях. Формат сообщения такой же, как для функции `Subscribe`, но содержит только сообщения о добавлении блока.

## Формат событий

Структуру событий можно посмотреть в файле [events.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/events/events.proto).

Некоторые изменения на блокчейне не привязаны ни к одной транзакции, а происходят на уровне блока. В частности, изменение баланса генератора блока: 40% комиссии за транзакцию, которые получает генератор текущего блока, привязаны к транзакции, а 60%, которые получает генератор следующего блока, ассоциированы только с этим блоком. Вознаграждение за создание блока также ассоциировано только с блоком.

Если комиссия за транзакцию указана в спонсорском ассете, то Blockchain Updates возвращает, кроме изменения балансов отправителя и генератора блока, изменение баланса спонсора: он получает сумму комиссии в спонсорском ассете и выплачивает эквивалентную сумму в WAVES. [Подробнее о спонсировании](/ru/blockchain/waves-protocol/sponsored-fee)

### Append: добавление блока

При получении событий в реальном времени сообщение о добавлении блока может содержать транзакции и порожденные ими изменения (создан ключевой блок + микроблок) либо транзакции могут отсутствовать (создан только ключевой блок).

Поля сообщения:

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| block | [Block](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/block.proto) | Данные блока: заголовки и транзакции. См. также раздел [Бинарный формат блока](/ru/blockchian/binary-format/block-binary-format) |
| updated_waves_amount | int64 | Общее количество WAVES с учетом вознаграждения за создание блока |
| transaction_ids | repeated bytes | Идентификаторы транзакций в блоке |
| transactions_metadata | repeated TransactionMetadata | Дополнительная информация о транзакциях. См. [TransactionMetadata](#TransactionMetadata) ниже |
| state_update | StateUpdate | Изменения состояния блокчейна, привязанные к блоку. См. [StateUpdate](#StateUpdate) ниже |
| transaction_state_updates | repeated StateUpdate | Изменения состояния блокчейна, привязанные к транзакциям. См. [StateUpdate](#StateUpdate) ниже |


`transaction_ids`, `transactions_metadata`, `transaction_state_updates` — параллельные массивы: одному порядковому номеру соответствуют данные об одной и той же транзакции. Если дополнительная информация отсутствует, в массиве `transactions_metadata` по этому индексу находится пустое значение.

<details><summary><b>Пример</b></summary>

```json
{
  "id" : "7gcuQwOgRC8Cz+wWquTieR15PA+kctdFcSf10E98l7inxH5NOY7+BRmMSbVi/jxcvpluywxSVM/uIAIKxbtkCA==",
  "height" : 2,
  "append" : {
    "block" : {
      "block" : {
        "header" : {
          "chainId" : 84,
          "reference" : "8SKLHdB+1z/Pi99SOdhHyA4aL/GOOsdCXKaCADyGjG3mh4hIuzzeI7P1/1ePyyuMXnJoTHe9rpCoIS7RieKICw==",
          "baseTarget" : "60",
          "generationSignature" : "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
          "featureVotes" : [ ],
          "timestamp" : "1614956693029",
          "version" : 2,
          "generator" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "rewardVote" : "-1",
          "transactionsRoot" : ""
        },
        "signature" : "7gcuQwOgRC8Cz+wWquTieR15PA+kctdFcSf10E98l7inxH5NOY7+BRmMSbVi/jxcvpluywxSVM/uIAIKxbtkCA==",
        "transactions" : [ {
          "transaction" : {
            "chainId" : 84,
            "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
            "fee" : {
              "assetId" : "",
              "amount" : "1000000"
            },
            "timestamp" : "1614956690976",
            "version" : 1,
            "transfer" : {
              "recipient" : {
                "publicKeyHash" : "PTrYhPoEKSe51sN99wr1wL2VFsU="
              },
              "amount" : {
                "assetId" : "",
                "amount" : "100000000"
              },
              "attachment" : ""
            }
          },
          "proofs" : [ "WIkitBii4d0LjMCxRiC6i+9QPVXQyKJxvRLj/uIao6KDP9dnd4oCEPIcKJPXiVnrAp1xExti3levPAtK7lDqDw==" ]
        }, {
          "transaction" : {
            "chainId" : 84,
            "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
            "fee" : {
              "assetId" : "",
              "amount" : "1000000"
            },
            "timestamp" : "1614956690977",
            "version" : 2,
            "lease" : {
              "recipient" : {
                "publicKeyHash" : "PTrYhPoEKSe51sN99wr1wL2VFsU="
              },
              "amount" : "1000000000"
            }
          },
          "proofs" : [ "VOdvKFrjMeq8YodWYsuMIlI2XuUB3hYP85l49pqKzDRL+s4+2OqeZWxNZAwynyrtD39woxy/mZaV01TKQSPYDw==" ]
        }, {
          "transaction" : {
            "chainId" : 84,
            "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
            "fee" : {
              "assetId" : "",
              "amount" : "100000000"
            },
            "timestamp" : "1614956690978",
            "version" : 2,
            "issue" : {
              "name" : "test",
              "description" : "",
              "amount" : "1000",
              "decimals" : 0,
              "reissuable" : true,
              "script" : ""
            }
          },
          "proofs" : [ "6vyW+hzk5g5wgwJAjfdcSCCQxECjLa2tX+SDYm7b20/vzADqNXNjrcV6ra1Qvl/OLQcJdppcnUrVBpEjfxPKAA==" ]
        }, {
          "transaction" : {
            "chainId" : 84,
            "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
            "fee" : {
              "assetId" : "",
              "amount" : "1000000"
            },
            "timestamp" : "1614956690979",
            "version" : 2,
            "reissue" : {
              "assetAmount" : {
                "assetId" : "hsQkyz38InYtnW1muswEf7qEeAsRpc5SG4MC27K/mRc=",
                "amount" : "1000"
              },
              "reissuable" : true
            }
          },
          "proofs" : [ "5adqKEbN0OHdpBhrRtBgfGtXhWK8zFOkuNOrnUYTsU2wAjrdVJrG/xjHHBh0e0NBbg3WEpUeOl93WyqitIKpDA==" ]
        }, {
          "transaction" : {
            "chainId" : 84,
            "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
            "fee" : {
              "assetId" : "",
              "amount" : "3000000"
            },
            "timestamp" : "1614956690980",
            "version" : 1,
            "dataTransaction" : {
              "data" : [ {
                "key" : "test",
                "stringValue" : "test"
              } ]
            }
          },
          "proofs" : [ "ZiR8Xy5rN5CZ/5sPQEAd3qQ9vdj4tenpD58T4Hla5TpCWi3va+o391X6bQ0evwfBMP6EVfJ8e5d0toFzStRrCQ==" ]
        } ]
      },
      "updatedWavesAmount" : "10000000600000000"
    },
    "transactionIds" : [ "l7zm8/8YT753CHgPrsTJU4ol/luwt3rUM1xSob4vA6E=", "YXkv6kf4P+C8Hed93ouMQs9SQRRLF9+l+6S165ZQS3w=", "hsQkyz38InYtnW1muswEf7qEeAsRpc5SG4MC27K/mRc=", "1gevjcLmf8R6lqRP8iWmWvU8rTHyWGRVmj4aFLlvvXo=", "XOHOVbrsTJa9Kg0VjEZHY7ckqdUpKTP+aZ7KJZWGzVA=" ],
    "transactionsMetadata" : [ {
      "transfer" : {
        "recipientAddress" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME="
      }
    }, {
      "leaseMeta" : {
        "recipientAddress" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME="
      }
    }, { }, { }, { } ],
    "stateUpdate" : {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001242400000"
        },
        "amountBefore" : "10000000600000000"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ ],
      "assets" : [ ],
      "individualLeases" : [ ]
    },
    "transactionStateUpdates" : [ {
      "balances" : [ {
        "address" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "100000000"
        },
        "amountBefore" : "0"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001141400000"
        },
        "amountBefore" : "10000001242400000"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ ],
      "assets" : [ ],
      "individualLeases" : [ ]
    }, {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001140400000"
        },
        "amountBefore" : "10000001141400000"
      } ],
      "leasingForAddress" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "inAfter" : "0",
        "outAfter" : "1000000000",
        "inBefore" : "0",
        "outBefore" : "0"
      }, {
        "address" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "inAfter" : "1000000000",
        "outAfter" : "0",
        "inBefore" : "0",
        "outBefore" : "0"
      } ],
      "dataEntries" : [ ],
      "assets" : [ ],
      "individualLeases" : [ {
        "leaseId" : "YXkv6kf4P+C8Hed93ouMQs9SQRRLF9+l+6S165ZQS3w=",
        "statusAfter" : "ACTIVE",
        "amount" : "1000000000",
        "sender" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
        "recipient" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "originTransactionId" : "YXkv6kf4P+C8Hed93ouMQs9SQRRLF9+l+6S165ZQS3w="
      } ]
    }, {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001040400000"
        },
        "amountBefore" : "10000001140400000"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "hsQkyz38InYtnW1muswEf7qEeAsRpc5SG4MC27K/mRc=",
          "amount" : "1000"
        },
        "amountBefore" : "0"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ ],
      "assets" : [ {
        "after" : {
          "assetId" : "hsQkyz38InYtnW1muswEf7qEeAsRpc5SG4MC27K/mRc=",
          "issuer" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "decimals" : 0,
          "name" : "test",
          "description" : "",
          "reissuable" : true,
          "volume" : "1000",
          "sponsorship" : "0",
          "nft" : false,
          "lastUpdated" : 2,
          "safeVolume" : "A+g="
        }
      } ],
      "individualLeases" : [ ]
    }, {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001039400000"
        },
        "amountBefore" : "10000001040400000"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "hsQkyz38InYtnW1muswEf7qEeAsRpc5SG4MC27K/mRc=",
          "amount" : "2000"
        },
        "amountBefore" : "1000"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ ],
      "assets" : [ {
        "before" : {
          "assetId" : "hsQkyz38InYtnW1muswEf7qEeAsRpc5SG4MC27K/mRc=",
          "issuer" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "decimals" : 0,
          "name" : "test",
          "description" : "",
          "reissuable" : true,
          "volume" : "1000",
          "sponsorship" : "0",
          "nft" : false,
          "lastUpdated" : 2,
          "safeVolume" : "A+g="
        },
        "after" : {
          "assetId" : "hsQkyz38InYtnW1muswEf7qEeAsRpc5SG4MC27K/mRc=",
          "issuer" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "decimals" : 0,
          "name" : "test",
          "description" : "",
          "reissuable" : true,
          "volume" : "2000",
          "sponsorship" : "0",
          "nft" : false,
          "lastUpdated" : 2,
          "safeVolume" : "B9A="
        }
      } ],
      "individualLeases" : [ ]
    }, {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001036400000"
        },
        "amountBefore" : "10000001039400000"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "dataEntry" : {
          "key" : "test",
          "stringValue" : "test"
        },
        "dataEntryBefore" : {
          "key" : "test"
        }
      } ],
      "assets" : [ ],
      "individualLeases" : [ ]
    } ]
  },
  "referencedAssets" : [ {
    "id" : "hsQkyz38InYtnW1muswEf7qEeAsRpc5SG4MC27K/mRc=",
    "decimals" : 0,
    "name" : "test"
  } ]
}
```
</details>

### Append: добавление микроблока

В сообщении о добавлении микроблока присутствуют только те транзакции и порожденные ими изменения, которых не было в предшествующем блоке/микроблоке.

Поля сообщения:

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| micro_block | [SignedMicroBlock](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/block.proto) | Данные микроблока |
| updated_transactions_root | int64 | [Корневой хеш](/ru/blockchain/block/merkle-root) всех транзакций текущего блока |
| transaction_ids | repeated bytes | Идентификаторы транзакций в микроблоке |
| transactions_metadata | repeated TransactionMetadata | Дополнительная информация о транзакциях. См. [TransactionMetadata](#TransactionMetadata) ниже |
| state_update | StateUpdate | Изменения состояния блокчейна, привязанные к блоку. См. [StateUpdate](#StateUpdate) ниже |
| transaction_state_updates | repeated StateUpdate | Изменения состояния блокчейна, привязанные к транзакциям. См. [StateUpdate](#StateUpdate) |

`transaction_ids`, `transactions_metadata`, `transaction_state_updates` — параллельные массивы: одному порядковому номеру соответствуют данные об одной и той же транзакции. Если дополнительная информация отсутствует, в массиве `transactions_metadata` по этому индексу находится пустое значение.

<details><summary><b>Пример</b></summary>

```json
{
  "id" : "PM99HiRDmeepqQ9ezrTjs85WnjTavOuTfC84X7mdL9IHEI9dMdZ43JXQCYHFoy9ul9RLIsUL/vtwaFt1FeIODA==",
  "height" : 2,
  "append" : {
    "microBlock" : {
      "microBlock" : {
        "microBlock" : {
          "version" : 3,
          "reference" : "kMZ1rAlt+eNoHqHfuM6R5MS1NslQXDUJ2R3AreDjYWHEU5YIaU9unXZTTRcOBq/8zQEeI57scSgF7zH94N21Bw==",
          "updatedBlockSignature" : "PM99HiRDmeepqQ9ezrTjs85WnjTavOuTfC84X7mdL9IHEI9dMdZ43JXQCYHFoy9ul9RLIsUL/vtwaFt1FeIODA==",
          "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "transactions" : [ {
            "transaction" : {
              "chainId" : 84,
              "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
              "fee" : {
                "assetId" : "",
                "amount" : "1000000"
              },
              "timestamp" : "1614955693251",
              "version" : 1,
              "transfer" : {
                "recipient" : {
                  "publicKeyHash" : "PTrYhPoEKSe51sN99wr1wL2VFsU="
                },
                "amount" : {
                  "assetId" : "",
                  "amount" : "100000000"
                },
                "attachment" : ""
              }
            },
            "proofs" : [ "c7gEcrOqeKhyJgdY0HO6lmp9WCCHJTMjL0IZhehtTvRIFMZWGPb5YOTumytK3dGi1vORxvw1UmBNioLxJBdSAw==" ]
          }, {
            "transaction" : {
              "chainId" : 84,
              "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
              "fee" : {
                "assetId" : "",
                "amount" : "1000000"
              },
              "timestamp" : "1614955693252",
              "version" : 2,
              "lease" : {
                "recipient" : {
                  "publicKeyHash" : "PTrYhPoEKSe51sN99wr1wL2VFsU="
                },
                "amount" : "1000000000"
              }
            },
            "proofs" : [ "sTTAbbdtEFRbwqlly2fc16oWpu5+hJN5am2AQvz5gix162EEepo/SqoTkIjMJ3OgnGWSBKXstJcqYtwPTPEZBQ==" ]
          }, {
            "transaction" : {
              "chainId" : 84,
              "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
              "fee" : {
                "assetId" : "",
                "amount" : "100000000"
              },
              "timestamp" : "1614955693253",
              "version" : 2,
              "issue" : {
                "name" : "test",
                "description" : "",
                "amount" : "1000",
                "decimals" : 0,
                "reissuable" : true,
                "script" : ""
              }
            },
            "proofs" : [ "iPmPbzPN9tff59mPowWT2zFocMVp4IKxZhGHQfisrQLrNw1zRmGBUuL34T6AgYmvKuPuL38TWd4VMBUPsSmWDQ==" ]
          }, {
            "transaction" : {
              "chainId" : 84,
              "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
              "fee" : {
                "assetId" : "",
                "amount" : "1000000"
              },
              "timestamp" : "1614955693254",
              "version" : 2,
              "reissue" : {
                "assetAmount" : {
                  "assetId" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
                  "amount" : "1000"
                },
                "reissuable" : true
              }
            },
            "proofs" : [ "41dTNu6FK52a0aWIo0iHQ7F2qJteanKBVdyrD3PJC//xOr5zSWMv+JZ9BsJRs1INQGr0+nLVAnvoYq/aFdb1Cg==" ]
          }, {
            "transaction" : {
              "chainId" : 84,
              "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
              "fee" : {
                "assetId" : "",
                "amount" : "3000000"
              },
              "timestamp" : "1614955693255",
              "version" : 1,
              "dataTransaction" : {
                "data" : [ {
                  "key" : "test",
                  "stringValue" : "test"
                } ]
              }
            },
            "proofs" : [ "ryDXoAbjbOvLZasQ6/QE+9ewT2D009y8NA5qJQbA/nxS+QHCSj6CVHvVaoagSwykAujIn9FiA3tY4nSqEjX3AA==" ]
          } ]
        },
        "signature" : "GlRrocxMSmUugmNdtVXueL/5gKNxoLQEXVgrtTD8sXHAzM4s9lpiIGLJ0Kajwvq8jS1isxpgkBRPnCSo/t4cCw==",
        "totalBlockId" : "PM99HiRDmeepqQ9ezrTjs85WnjTavOuTfC84X7mdL9IHEI9dMdZ43JXQCYHFoy9ul9RLIsUL/vtwaFt1FeIODA=="
      },
      "updatedTransactionsRoot" : ""
    },
    "transactionIds" : [ "pRhzG3hnik7QM0SBcSUJeUUASaqCrJoX+nFzY+qydE0=", "egBkLVBeTLm4tPaPhuo6SkAFYY35TWFIGQFn5K4EGp4=", "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=", "Ya9WrfvwSsxRzgmvrbf4t4S+k6SrTuesJ8MPJNf148w=", "Ht2ILo1jmsy1Do8AdwMtFb3rAzybI43bNP62e3nPkws=" ],
    "transactionsMetadata" : [ {
      "transfer" : {
        "recipientAddress" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME="
      }
    }, {
      "leaseMeta" : {
        "recipientAddress" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME="
      }
    }, { }, { }, { } ],
    "stateUpdate" : {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001242400000"
        },
        "amountBefore" : "10000001200000000"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ ],
      "assets" : [ ],
      "individualLeases" : [ ]
    },
    "transactionStateUpdates" : [ {
      "balances" : [ {
        "address" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "100000000"
        },
        "amountBefore" : "0"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001141400000"
        },
        "amountBefore" : "10000001242400000"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ ],
      "assets" : [ ],
      "individualLeases" : [ ]
    }, {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001140400000"
        },
        "amountBefore" : "10000001141400000"
      } ],
      "leasingForAddress" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "inAfter" : "0",
        "outAfter" : "1000000000",
        "inBefore" : "0",
        "outBefore" : "0"
      }, {
        "address" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "inAfter" : "1000000000",
        "outAfter" : "0",
        "inBefore" : "0",
        "outBefore" : "0"
      } ],
      "dataEntries" : [ ],
      "assets" : [ ],
      "individualLeases" : [ {
        "leaseId" : "egBkLVBeTLm4tPaPhuo6SkAFYY35TWFIGQFn5K4EGp4=",
        "statusAfter" : "ACTIVE",
        "amount" : "1000000000",
        "sender" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
        "recipient" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "originTransactionId" : "egBkLVBeTLm4tPaPhuo6SkAFYY35TWFIGQFn5K4EGp4="
      } ]
    }, {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001040400000"
        },
        "amountBefore" : "10000001140400000"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
          "amount" : "1000"
        },
        "amountBefore" : "0"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ ],
      "assets" : [ {
        "after" : {
          "assetId" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
          "issuer" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "decimals" : 0,
          "name" : "test",
          "description" : "",
          "reissuable" : true,
          "volume" : "1000",
          "sponsorship" : "0",
          "nft" : false,
          "lastUpdated" : 2,
          "safeVolume" : "A+g="
        }
      } ],
      "individualLeases" : [ ]
    }, {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001039400000"
        },
        "amountBefore" : "10000001040400000"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
          "amount" : "2000"
        },
        "amountBefore" : "1000"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ ],
      "assets" : [ {
        "before" : {
          "assetId" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
          "issuer" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "decimals" : 0,
          "name" : "test",
          "description" : "",
          "reissuable" : true,
          "volume" : "1000",
          "sponsorship" : "0",
          "nft" : false,
          "lastUpdated" : 2,
          "safeVolume" : "A+g="
        },
        "after" : {
          "assetId" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
          "issuer" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "decimals" : 0,
          "name" : "test",
          "description" : "",
          "reissuable" : true,
          "volume" : "2000",
          "sponsorship" : "0",
          "nft" : false,
          "lastUpdated" : 2,
          "safeVolume" : "B9A="
        }
      } ],
      "individualLeases" : [ ]
    }, {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001036400000"
        },
        "amountBefore" : "10000001039400000"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "dataEntry" : {
          "key" : "test",
          "stringValue" : "test"
        },
        "dataEntryBefore" : {
          "key" : "test"
        }
      } ],
      "assets" : [ ],
      "individualLeases" : [ ]
    } ]
  },
  "referencedAssets" : [ {
    "id" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
    "decimals" : 0,
    "name" : "test"
  } ]
}
```
</details>

### Rollback: откат блока или микроблока

Поля сообщения:

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| type | RollbackType | Тип сообщения: BLOCK — откат блока, MICROBLOCK — откат микроблока |
| removed_transaction_ids | repeated bytes | ID транзакций, которые были удалены в результате отката |
| removed_blocks | repeated [Block](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/block.proto) | Блоки, которые были удалены в результате отката. В случае отката микроблока — пустой массив |
| rollback_state_update | StateUpdate | Изменения состояния блокчейна, которые произошли в результате отката (обратные изменениям, порожденным транзакциями и блоками/микроблоками). См. [StateUpdate](#StateUpdate) ниже |

**Примеры:**

<details><summary>Откат блока</summary>

```json
{
  "id" : "fJP16HbHyQ2Bib7fEUoZAS9Hm/IjCprhYxa3XuYKdY+7No72rCHtoXgInd3Pn9WMS3k9KvJMRMZbJTeYDdz0AA==",
  "height" : 1,
  "rollback" : {
    "type" : "BLOCK",
    "removedTransactionIds" : [ "Ht2ILo1jmsy1Do8AdwMtFb3rAzybI43bNP62e3nPkws=", "Ya9WrfvwSsxRzgmvrbf4t4S+k6SrTuesJ8MPJNf148w=", "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=", "egBkLVBeTLm4tPaPhuo6SkAFYY35TWFIGQFn5K4EGp4=", "pRhzG3hnik7QM0SBcSUJeUUASaqCrJoX+nFzY+qydE0=" ],
    "removedBlocks" : [ {
      "header" : {
        "chainId" : 84,
        "reference" : "fJP16HbHyQ2Bib7fEUoZAS9Hm/IjCprhYxa3XuYKdY+7No72rCHtoXgInd3Pn9WMS3k9KvJMRMZbJTeYDdz0AA==",
        "baseTarget" : "60",
        "generationSignature" : "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
        "featureVotes" : [ ],
        "timestamp" : "1614955695404",
        "version" : 3,
        "generator" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
        "rewardVote" : "-1",
        "transactionsRoot" : ""
      },
      "signature" : "PM99HiRDmeepqQ9ezrTjs85WnjTavOuTfC84X7mdL9IHEI9dMdZ43JXQCYHFoy9ul9RLIsUL/vtwaFt1FeIODA==",
      "transactions" : [ {
        "transaction" : {
          "chainId" : 84,
          "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "fee" : {
            "assetId" : "",
            "amount" : "1000000"
          },
          "timestamp" : "1614955693251",
          "version" : 1,
          "transfer" : {
            "recipient" : {
              "publicKeyHash" : "PTrYhPoEKSe51sN99wr1wL2VFsU="
            },
            "amount" : {
              "assetId" : "",
              "amount" : "100000000"
            },
            "attachment" : ""
          }
        },
        "proofs" : [ "c7gEcrOqeKhyJgdY0HO6lmp9WCCHJTMjL0IZhehtTvRIFMZWGPb5YOTumytK3dGi1vORxvw1UmBNioLxJBdSAw==" ]
      }, {
        "transaction" : {
          "chainId" : 84,
          "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "fee" : {
            "assetId" : "",
            "amount" : "1000000"
          },
          "timestamp" : "1614955693252",
          "version" : 2,
          "lease" : {
            "recipient" : {
              "publicKeyHash" : "PTrYhPoEKSe51sN99wr1wL2VFsU="
            },
            "amount" : "1000000000"
          }
        },
        "proofs" : [ "sTTAbbdtEFRbwqlly2fc16oWpu5+hJN5am2AQvz5gix162EEepo/SqoTkIjMJ3OgnGWSBKXstJcqYtwPTPEZBQ==" ]
      }, {
        "transaction" : {
          "chainId" : 84,
          "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "fee" : {
            "assetId" : "",
            "amount" : "100000000"
          },
          "timestamp" : "1614955693253",
          "version" : 2,
          "issue" : {
            "name" : "test",
            "description" : "",
            "amount" : "1000",
            "decimals" : 0,
            "reissuable" : true,
            "script" : ""
          }
        },
        "proofs" : [ "iPmPbzPN9tff59mPowWT2zFocMVp4IKxZhGHQfisrQLrNw1zRmGBUuL34T6AgYmvKuPuL38TWd4VMBUPsSmWDQ==" ]
      }, {
        "transaction" : {
          "chainId" : 84,
          "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "fee" : {
            "assetId" : "",
            "amount" : "1000000"
          },
          "timestamp" : "1614955693254",
          "version" : 2,
          "reissue" : {
            "assetAmount" : {
              "assetId" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
              "amount" : "1000"
            },
            "reissuable" : true
          }
        },
        "proofs" : [ "41dTNu6FK52a0aWIo0iHQ7F2qJteanKBVdyrD3PJC//xOr5zSWMv+JZ9BsJRs1INQGr0+nLVAnvoYq/aFdb1Cg==" ]
      }, {
        "transaction" : {
          "chainId" : 84,
          "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "fee" : {
            "assetId" : "",
            "amount" : "3000000"
          },
          "timestamp" : "1614955693255",
          "version" : 1,
          "dataTransaction" : {
            "data" : [ {
              "key" : "test",
              "stringValue" : "test"
            } ]
          }
        },
        "proofs" : [ "ryDXoAbjbOvLZasQ6/QE+9ewT2D009y8NA5qJQbA/nxS+QHCSj6CVHvVaoagSwykAujIn9FiA3tY4nSqEjX3AA==" ]
      } ]
    } ],
    "rollbackStateUpdate" : {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000000600000000"
        },
        "amountBefore" : "10000001036400000"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
          "amount" : "0"
        },
        "amountBefore" : "2000"
      }, {
        "address" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "0"
        },
        "amountBefore" : "100000000"
      } ],
      "leasingForAddress" : [ {
        "address" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "inAfter" : "0",
        "outAfter" : "0",
        "inBefore" : "1000000000",
        "outBefore" : "0"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "inAfter" : "0",
        "outAfter" : "0",
        "inBefore" : "0",
        "outBefore" : "1000000000"
      } ],
      "dataEntries" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "dataEntry" : {
          "key" : "test"
        },
        "dataEntryBefore" : {
          "key" : "test",
          "stringValue" : "test"
        }
      } ],
      "assets" : [ {
        "before" : {
          "assetId" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
          "issuer" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "decimals" : 0,
          "name" : "test",
          "description" : "",
          "reissuable" : true,
          "volume" : "2000",
          "sponsorship" : "0",
          "nft" : false,
          "lastUpdated" : 2,
          "safeVolume" : "B9A="
        }
      } ],
      "individualLeases" : [ {
        "leaseId" : "egBkLVBeTLm4tPaPhuo6SkAFYY35TWFIGQFn5K4EGp4=",
        "statusAfter" : "INACTIVE",
        "amount" : "1000000000",
        "sender" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
        "recipient" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "originTransactionId" : "egBkLVBeTLm4tPaPhuo6SkAFYY35TWFIGQFn5K4EGp4="
      } ]
    }
  },
  "referencedAssets" : [ {
    "id" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
    "decimals" : 0,
    "name" : "test"
  } ]
}
```
</details>
<details><summary>Откат микроблока</summary>

```json
{
  "id" : "EmnPnXsOTq90SzwR3Qa0IsWhw4CmZKdgLsbfEa9TbYv/FGCK7dHFn+j2V8raFpwIzawihhLO5WJRDN+8EP/jBg==",
  "height" : 2,
  "rollback" : {
    "type" : "MICROBLOCK",
    "removedTransactionIds" : [ "Hfg/QwbcdGzIOSl6U0FXj/aD4nDYUhJge7FrOo6H+yc=", "i7r7ySkIkiL6hiRIDuYAroH7sd8ottXj1dryf6n/vdI=", "Eg82h+UU/rRKorf8f08HeKeoN4W431XsEJcxxJK+ZNc=", "pdjI2EDDWvIUi/mCJOGtR4AGVOmfOqkPpuuwskJjR/I=", "UbF1cV8thQ7koJzBOAqslD4wrtq7sCJAoJjBI5srLyo=" ],
    "removedBlocks" : [ ],
    "rollbackStateUpdate" : {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001200000000"
        },
        "amountBefore" : "10000001036400000"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "Eg82h+UU/rRKorf8f08HeKeoN4W431XsEJcxxJK+ZNc=",
          "amount" : "0"
        },
        "amountBefore" : "2000"
      }, {
        "address" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "0"
        },
        "amountBefore" : "100000000"
      } ],
      "leasingForAddress" : [ {
        "address" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "inAfter" : "0",
        "outAfter" : "0",
        "inBefore" : "1000000000",
        "outBefore" : "0"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "inAfter" : "0",
        "outAfter" : "0",
        "inBefore" : "0",
        "outBefore" : "1000000000"
      } ],
      "dataEntries" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "dataEntry" : {
          "key" : "test"
        },
        "dataEntryBefore" : {
          "key" : "test",
          "stringValue" : "test"
        }
      } ],
      "assets" : [ {
        "before" : {
          "assetId" : "Eg82h+UU/rRKorf8f08HeKeoN4W431XsEJcxxJK+ZNc=",
          "issuer" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "decimals" : 0,
          "name" : "test",
          "description" : "",
          "reissuable" : true,
          "volume" : "2000",
          "sponsorship" : "0",
          "nft" : false,
          "lastUpdated" : 2,
          "safeVolume" : "B9A="
        }
      } ],
      "individualLeases" : [ {
        "leaseId" : "i7r7ySkIkiL6hiRIDuYAroH7sd8ottXj1dryf6n/vdI=",
        "statusAfter" : "INACTIVE",
        "amount" : "1000000000",
        "sender" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
        "recipient" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "originTransactionId" : "i7r7ySkIkiL6hiRIDuYAroH7sd8ottXj1dryf6n/vdI="
      } ]
    }
  },
  "referencedAssets" : [ {
    "id" : "Eg82h+UU/rRKorf8f08HeKeoN4W431XsEJcxxJK+ZNc=",
    "decimals" : 0,
    "name" : "test"
  } ]
}
```
</details>

### StateUpdate

Изменения состояния блокчейна, порожденные транзакцией, блоком, микроблоком или откатом.

В отличие от транзакций, адреса аккаунтов в `StateUpdate` представлены полностью, включая тип сущности, байт сети и контрольную сумму. См. раздел [Бинарный формат адреса](/ru/blockchain/binary-format/address-binary-format).

#### Изменения балансов аккаунтов

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| balances.address | bytes | Адрес |
| balances.amount_after | [Amount](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/amount.proto) | Новый баланс |
| balances.amount_before | int64 | Прежний баланс |

#### Изменения лизинговых балансов аккаунта

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| leasing_for_address.address | bytes | Адрес |
| leasing_for_address.in_after | int64 | Новая сумма полученных лизингов |
| leasing_for_address.out_after | int64 | Новая сумма отправленных лизингов |
| leasing_for_address.in_before | int64 | Прежняя сумма полученных лизингов |
| leasing_for_address.out_before | int64 | Прежняя сумма отправленных лизингов |

#### Изменения записей в хранилищах данных

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| data_entries.address | bytes | Адрес |
| data_entries.data_entry | [DataTransactionData.DataEntry](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto#L67) | Запись с новым значением |
| data_entries.data_entry_before | [DataTransactionData.DataEntry](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto#L67) | Запись с прежним значением |

#### Изменения лизингов

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| individual_leases.lease_id | bytes | Идентификатор лизинга |
| individual_leases.status_after | LeaseStatus | Новый статус лизинга: ACTIVE или INACTIVE |
| individual_leases.amount | int64 | Сумма лизинга |
| individual_leases.sender | bytes | Адрес отправителя лизинга |
| individual_leases.recipient | bytes | Адрес получателя лизинга |
| individual_leases.origin_transaction_id | bytes | Транзакция, породившая создание, изменение или отмену лизинга |

#### Изменения параметров токена

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| assets.before | AssetDetails | Прежние параметры токена. В случае выпуска токена — пустое значение. См. [AssetDetails](#AssetDetails) ниже |
| assets.after | AssetDetails | Новые параметры токена. В случае отката блока/микроблока, породившего выпуск токена, — пустое значение |

#### AssetDetails

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| asset_id | bytes | ID токена |
| issuer | bytes | Адрес, выпустивший токен |
| decimals | int32 | Количество знаков после запятой |
| name | string | Название токена |
| description | string | Описание токена |
| reissuable | bool | Флаг возможности довыпуска |
| volume | int64 | Общее количество токена, в атомарных единицах |
| script_info.script | bytes | Скомпилированный скрипт ассета |
| script_info.complexity | int64 | Сложность скрипта ассета |
| sponsorship | int64 | Если токен является спонсорским ассетом — количество ассета, эквивалентное 0,001 WAVES, в атомарных единицах. Иначе — пустое значение |
| nft | bool | Признак того, что токен является [NFT](/ru/blockchain/token/non-fungible-token) |
| last_updated | int32 | Высота, на которой произошло последнее изменение параметров токена |
| safe_volume | bytes | Поле связано с прошлым поведением в блокчейне, когда можно было довыпустить ассет таким образом, чтобы общее количество превысило максимальное значение int64. Содержит точное количество токена. Можно игнорировать, если клиент не нуждается в такой точности.  Кодировка: как Java BigInteger, см. <https://docs.oracle.com/javase/7/docs/api/java/math/BigInteger.html#toByteArray()> |

#### AssetInfo

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| id | bytes | ID токена |
| decimals | int32 | Количество знаков после запятой |
| name | string | Название токена |

### TransactionMetadata

Дополнительная информация о транзакции.

В отличие от транзакций, адреса аккаунтов в `TransactionMetadata` представлены полностью, включая тип сущности, байт сети и контрольную сумму. См. раздел [Бинарный формат адреса](/ru/blockchain/binary-format/address-binary-format).

#### Для транзакции вызова скрипта

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| d_app_address | bytes | Адрес dApp |
| function_name | string | Имя вызываемой функции |
| arguments | repeated Argument | Аргументы функции |
| payments | repeated [Amount](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/amount.proto) | Приложенные к транзакции платежи |
| result | [InvokeScriptResult](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/invoke_script_result.proto) | Результаты действий, выполненных вызываемой функцией |

#### Для транзакции перевода

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| recipient_address | bytes | Адрес получателя |

#### Для транзакции массового перевода

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| recipient_addresses | repeated bytes | Адреса получателей |

#### Для транзакции лизинга

| Имя поля | Тип | Описание |
| :--- | :--- | :--- |
| recipient_address | bytes | Адрес получателя |

## Переход с предыдущей версии

Если вы использовали Blockchain Updates предыдущих версий и хотите перейти на версию 1.2.20:

1. Заново получите историю изменений:

   1.1. Удалите файлы базы данных: они находятся в каталоге, указанном в настройке [waves.db.directory](/ru/waves-node/node-configuration#настройки-базы-данных) (по умолчанию — в подкаталоге `data` основного каталога ноды).

   1.2. Удалите файлы расширения: они находятся в подкаталоге `blockchain-updates` основного каталога ноды.

   1.3. Загрузите или импортируйте блокчейн (см. подраздел [Запуск ноды с расширением](#запуск-ноды-с-расширением) выше).

2. Скачайте обновленные protobuf-схемы и сгенерируйте клиентские заглушки, см. [Генерация клиента](#генерация-клиента) выше. Мигрируйте код своего приложения на новые заглушки.

После перехода на текущую версию вы можете начать использовать поля, которые были добавлены. Описание новых возможностей см. в [Release Notes 1.2.20](https://github.com/wavesplatform/Waves/releases/tag/v1.2.20). Изменения в схемах не затронули большинство полей предыдущей версии.
