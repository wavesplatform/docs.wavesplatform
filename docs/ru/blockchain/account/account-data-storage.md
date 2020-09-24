# Хранилище данных аккаунта

**Хранилище данных аккаунта** — ассоциированное с [аккаунтом](/ru/blockchain/account/) хранилище записей данных в формате ключ-значение.

Ключ записи — уникальная строка.

Значение — данные одного из типов:

* строковый
* логический
* целочисленный
* массив байтов

Размер хранилища данных аккаунта неограничен. Ограничения на размер ключа и значения каждой записи см. в разделе [Транзакция данных](/ru/blockchain/transaction-type/data-transaction).

## Просмотр данных

Записи в хранилище данных любого аккаунта, как и другие данные блокчейна, открыты для чтения. Например, посмотреть записи можно в [Waves Explorer](https://wavesexplorer.com) — для этого найдите аккаунт по его [адресу](/ru/blockchain/account/address) или [псевдониму](/ru/blockchain/account/alias) и перейдите на вкладку **Data**. 

![](./_assets/data-storage-explorer.png)

Получить записи можно также с помощью [Node REST API](/ru/waves-node/node-api/) и [клиентских библиотек](/ru/building-apps/waves-api-and-sdk/client-libraries/), см. примеры в разделе [Как прочитать данные блокчейна](/ru/building-apps/how-to/basic/retrieve).

## Добавление, изменение, удаление<sup><img src="./_assets/feature15.svg"></sup> записей

Владелец аккаунта может добавить, изменить или удалить записи в хранилище данных аккаунта с помощью [транзакции данных](/ru/blockchain/transaction-type/data-transaction). Создать и отправить транзакцию можно с помощью одной из [клиентских библиотек](/ru/building-apps/waves-api-and-sdk/client-libraries/), см. примеры в разделе [Создание и отправка транзакций](/ru/building-apps/how-to/basic/transaction).

[Скрипт dApp](/ru/blockchain/account/dapp) может добавить, изменить или удалить записи в хранилище данных dApp в результате [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction) с помощью действий скрипта:
* [BinaryEntry](/ru/ride/structures/script-actions/binary-entry)
* [BooleanEntry](/ru/ride/structures/script-actions/boolean-entry)
* [IntegerEntry](/ru/ride/structures/script-actions/int-entry)
* [StringEntry](/ru/ride/structures/script-actions/string-entry)
* [DeleteEntry](/ru/ride/structures/script-actions/delete-entry)
