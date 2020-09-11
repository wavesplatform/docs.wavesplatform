# WAVES

**WAVES** — системный токен блокчейна Waves. [Генераторы блоков](/ru/blockchain/node/mining-node) получают в WAVES [комиссии за транзакции](/ru/blockchain/transaction/transaction-fee) и [вознаграждение за создание блока](/ru/blockchain/mining/mining-reward) — это стимулирует генераторов поддерживать и развивать инфраструктуру сети блокчейна. Чем больше WAVES на балансе генератора — собственных или полученных в лизинг — тем выше шансы шанс добавить следующий блок в цепочку.

## Параметры WAVES

WAVES присутствует на блокчейне с момента создания, для него нет транзакции выпуска, поэтому токен WAVES не имеет ID. В REST API для WAVES используется значение `null`.

Количество знаков после запятой (`decimals`) для WAVES равно 8. Атомарная единица — 1/100 000 000 WAVES — называется WAVELET.

В апреле 2016 было выпущено 100 миллионов WAVES. Текущее количество WAVES можно узнать с помощью [Data Services](/ru/building-apps/waves-api-and-sdk/waves-data-service-api): <https://api.wavesplatform.com/v0/assets/WAVES> (количество указано в WAVELET).

## Лизинг

Владелец WAVES может передать их в лизинг с помощью [транзакции лизинга](/ru/blockchain/transaction-type/lease-transaction). WAVES, полученные в лизинг, учитываются в генерирующем балансе. Генераторы блоков предлагают различные вознаграждения лизингодателям. В любой момент лизингодатель может отменить лизинг c помощью [транзакции отмены лизинга](/ru/blockchain/transaction-type/lease-transaction). [Подробнее о лизинге](/ru/blockchain/leasing)
