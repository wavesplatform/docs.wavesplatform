# Типы транзакций

На блокчейне Waves реализовано множество типов транзакций. Их условное разделение на категории представлено на схеме.

![](./_assets/types.png)

## Токенизация

| ID типа транзакции | Название | Описание |
| :--- | :--- | :--- |
| 3 | [Транзакция выпуска](/ru/blockchain/transaction-type/issue-transaction) | Выпускает токен |
| 5 | [Транзакция довыпуска](/ru/blockchain/transaction-type/reissue-transaction) | Довыпускает токен |
| 6 | [Транзакция сжигания токена](/ru/blockchain/transaction-type/burn-transaction) | Уменьшает количество токена |
| 15 | [Транзакция установки скрипта ассета](/ru/blockchain/transaction-type/set-asset-script-transaction) | Изменяет скрипт ассета |
| 17 | [Транзакция обновления информации ассета](/ru/blockchain/transaction-type/update-asset-info-transaction) | Изменяет название и описание токена |

> Транзакция обновления информации ассета добавлена в версии ноды 1.2.0. Возможность использовать эту транзакцию включается после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”.

## Использование

| ID типа транзакции | Название | Описание |
| :--- | :--- | :--- |
| 4 | [Транзакция перевода](/ru/blockchain/transaction-type/transfer-transaction) | Переводит токен на другой аккаунт |
| 7 | [Транзакция обмена](/ru/blockchain/transaction-type/exchange-transaction) | Обменивает два различных токена между двумя аккаунтами. Содержит два встречных биржевых ордера — на покупку и продажу |
| 10 | [Транзакция создания псевдонима](/ru/blockchain/transaction-type/create-alias-transaction) | Создает псевдоним адреса |
| 11 | [Транзакция массового перевода](/ru/blockchain/transaction-type/mass-transfer-transaction) | Переводит токен, до 100 получателей |
| 12 | [Транзакция данных](/ru/blockchain/transaction-type/data-transaction) | Добавляет, изменяет или удаляет запись в хранилище данных аккаунта отправителя |
| 13 | [Транзакция установки скрипта](/ru/blockchain/transaction-type/set-script-transaction) | Устанавливает dApp-скрипт или скрипт аккаунта |
| 16 | [Транзакция вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction) | Вызывает функцию скрипта dApp |

## Сеть

| ID типа транзакции | Название | Описание |
| :--- | :--- | :--- |
| 8 |[Транзакция лизинга](/ru/blockchain/transaction-type/lease-transaction) | Передает WAVES в лизинг |
| 9 | [Транзакция закрытия лизинга](/ru/blockchain/transaction-type/lease-cancel-transaction) | Прекращает лизинг |
| 14 | [Транзакция спонсирования](/ru/blockchain/transaction-type/sponsor-fee-transaction) | Устанавливает или отменяет спонсирование |

## Генезис

| ID типа транзакции | Название | Описание |
| :--- | :--- | :--- |
| 1 | [Транзакция генезиса](/ru/blockchain/transaction-type/genesis-transaction) | Начисляет [WAVES](/ru/blockchain/token/waves) на [аккаунт](/ru/blockchain/account/) при первоначальном распределении во время создания блокчейна |
