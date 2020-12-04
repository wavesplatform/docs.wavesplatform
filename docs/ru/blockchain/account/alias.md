# Псевдоним

**Псевдоним** — короткое, удобное для запоминания имя [адреса](/ru/blockchain/account/address). Псевдоним уникален в сети блокчейна.

У одного адреса может быть несколько псевдонимов.

Псевдоним можно использовать вместо адреса:
* В [транзакциях перевода](/ru/blockchain/transaction-type/transfer-transaction), [массового перевода](/ru/blockchain/transaction-type/mass-transfer-transaction), [лизинга](/ru/blockchain/transaction-type/lease-transaction) в качестве идентификатора получателя, а также в [транзакциях вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction).
* Для поиска аккаунта в [Waves Explorer](https://wavesexplorer.com/).

Псевдоним невозможно удалить.

## Требования к псевдониму

Длина псевдонима — от 4 до 30 байт (1 символ может занимать до 4 байт).

В псевдониме допускаются следующие символы:

* строчные латинские буквы
* цифры
* точка
* знак нижнего подчеркивания
* дефис
* @

## Создание псевдонима

Чтобы создать псевдоним, нужно отправить [транзакцию создания псевдонима](/ru/blockchain/transaction-type/create-alias-transaction). Создать транзакцию создания псевдонима можно:
* В приложении [Waves.Exchange](https://waves.exchange/), разработанном сторонней командой из сообщества. См. раздел [Создать персональный алиас](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-online-desktop/online-desktop-account/online-desktop-alias) документации Waves.Exchange.
* С помощью одной из [клиентских библиотек](/ru/building-apps/waves-api-and-sdk/client-libraries/). См. также примеры в разделе [Создание и отправка транзакций](/ru/building-apps/how-to/basic/transaction).

## Просмотр псевдонимов

Список псевдонимов аккаунта, как и другие данные блокчейна, открыт для чтения. Например, посмотреть его можно в [Waves Explorer](https://wavesexplorer.com) — для этого найдите аккаунт по его [адресу](/ru/blockchain/account/address) и перейдите на вкладку **Aliases**.

В [Node REST API](/ru/waves-node/node-api/) получить список псевдонимов по адресу можно с помощью метода `GET ​/alias​/by-address​/{address}`, а адрес по псевдониму — с помощью метода `GET /alias/by-alias/{alias}`.

## Бинарный формат

См. раздел [Бинарный формат псевдонима](/ru/blockchain/binary-format/alias-binary-format).
