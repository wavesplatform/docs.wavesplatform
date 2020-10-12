# WAVES

**WAVES** — системный токен блокчейна Waves. [Генераторы блоков](/ru/blockchain/node/mining-node) получают в WAVES [комиссии за транзакции](/ru/blockchain/transaction/transaction-fee) и [вознаграждение за создание блока](/ru/blockchain/mining/mining-reward) — это стимулирует генераторов поддерживать и развивать инфраструктуру сети блокчейна. Чем больше WAVES на балансе генератора — собственных или полученных в лизинг — тем выше шансы шанс добавить следующий блок в цепочку.

## Параметры WAVES

WAVES присутствует на блокчейне с момента создания, для него нет транзакции выпуска, поэтому токен WAVES не имеет ID. В REST API для WAVES используется значение `null`.

Количество знаков после запятой (`decimals`) для WAVES равно 8. Атомарная единица — 1/100 000 000 WAVES — называется WAVELET.

В апреле 2016 было выпущено 100 миллионов WAVES.

В октябре 2019 была активирована фича № 14 “Block Reward and Community Driven Monetary Policy”, которая вводит [вознаграждение за генерацию блоков](/ru/blockchain/mining/mining-reward). С этого момента общее количество WAVES увеличивается. Текущее общее количество WAVES можно узнать с помощью [Data Services](/ru/building-apps/waves-api-and-sdk/waves-data-service-api): <https://api.wavesplatform.com/v0/assets/WAVES> (количество указано в WAVELET).

## Лизинг

Владелец WAVES может передать их в лизинг с помощью [транзакции лизинга](/ru/blockchain/transaction-type/lease-transaction). WAVES, полученные в лизинг, учитываются в [генерирующем балансе](/ru/blockchain/account/account-balance). Генераторы блоков предлагают различные вознаграждения лизингодателям. В любой момент лизингодатель может отменить лизинг c помощью [транзакции отмены лизинга](/ru/blockchain/transaction-type/lease-transaction). [Подробнее о лизинге](/ru/blockchain/leasing)

## Как получить WAVES

Купить токены WAVES можно на бирже [Waves.Exchange](https://waves.exchange/), разработанной сторонней командой из сообщества, или на одной из [централизованных бирж](https://coinmarketcap.com/currencies/waves/markets/).

Кроме того, можно использовать криптовалютные шлюзы для перевода внешних криптовалют, таких как Bitcoin, Ethereum и др., из внешнего блокчейна на блокчейн Waves и обратно. Шлюз сообщает пользователю адрес на внешнем блокчейне и, получив подтверждение перевода на этот внешний адрес, переводит соответствующий ассет (за вычетом комиссии) на Waves-адрес пользователя. Например, ряд криптовалютных шлюзов доступны на Waves.Exchange, см. раздел [Переводы криптовалют](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-online-desktop/online-desktop-trs-gtw/online-desktop-trs-asset) документации Waves.Exchange. Полученный ассет обеспечен криптовалютой на внешнем блокчейне в соотношении 1:1. Ассет можно затем обменять на WAVES на бирже.
