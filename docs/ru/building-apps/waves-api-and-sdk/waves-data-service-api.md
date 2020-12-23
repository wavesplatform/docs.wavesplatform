# Waves Data Service API

Дата-сервис Waves агрегирует данные блокчейна в реляционную базу данных PostrgreSQL и обеспечивает быстрый и удобный поиск информации по множеству фильтров.

API дата-сервиса позволяет получить следующие данные:

* Список транзакций, в том числе транзакций каждого типа, с отбором по значениям полей. Доступна постраничная выборка.
* Данные токенов по ID или биржевым тикерам.
* Рыночные данные о торговле криптовалютой.

Команда Waves предоставляет инстансы дата-сервиса с общедоступными *публичными* методами API. Интерактивная документация в Swagger UI доступна по ссылкам:
* Mainnet: <https://api.wavesplatform.com/v0/docs/>
* Testnet: <https://api.testnet.wavesplatform.com/v0/docs/>
* Stagenet: <https://api.stagenet.wavesplatform.com/v0/docs/>

## Получение рыночных данных

API дата-сервисов предоставляет рыночные данные по **любой паре ассетов**. Источником данных являются транзакции обмена.

* Методы [\*/pairs\*](https://api.wavesplatform.com/v0/docs/#/pairs) предоставляют текущие рыночные данные: цену последней сделки и данные за последние 24 часа: минимальную, максимальную и среднюю цену, объем и количество сделок и др.

   :warning: Если по паре ассетов не было ни одной сделки (транзакции) за последние 24 часа, текущие рыночные данные по этой паре недоступны.

* Метод [\*/candles\*](https://api.wavesplatform.com/v0/docs/#/candles) предоставляет данные для графика свечей OHCLV (open-high-low-close-volume) за выбранный период.

<details>
   <summary>Если в ответе отсутствуют данные</summary>

Если методы возвращают null или Not found по выбранной паре `{amountAsset}/{priceAsset}`, причины могут быть следующие:

1. Ассеты указаны в запросе в неправильном порядке. Необходимо определить, какой из ассетов является amount-ассетом (базовой валютой), а какой — price-ассетом (валютой котировки):
   * Вы можете посмотреть ассетные пары и идентификаторы ассетов в приложении Waves.Exchange (для [Mainnet](https://waves.exchange/), [Testnet](https://testnet.waves.exchange/) или [Stagenet](https://stagenet.waves.exchange/)), разработанном сторонней командой из сообщества. Первый ассет в паре — это amount-ассет, второй — price-ассет.

      ![](./_assets/asset-pair.png)

   * Вы также можете определить пары с помощью метода `GET /matcher/settings` API матчера (для [Mainnet](https://matcher.waves.exchange), [Testnet](https://matcher-testnet.waves.exchange) или [Stagenet](https://matcher-stagenet.waves.exchange)):
      * Если оба ассета есть в списке `priceAssets`, price-ассетом является тот, который следует первым.
      * Если в списке есть только один ассет из пары, он и является price-ассетом.
      * Если обоих ассетов нет в списке, их ID в байтовом представлении нужно отсортировать лексикографически: первый (наименьший) является price-ассетом.

   Подробнее см. раздел [Matcher API](https://docs.waves.exchange/ru/waves-matcher/matcher-api) документации Waves.Exchange.

2. Не было транзакций обмена в тот период, за который метод предоставляет данные (последние 24 часа для методов `*/pairs*`). Проверить это можно с помощью метода [GET ​/transactions​/exchange](https://api.wavesplatform.com/v0/docs/#/transactions/searchTxsExchange), получив, например, 10 последних транзакций обмена по этой паре.
</details>

### Матчер

Рыночные данные доступны по всем [матчерам](https://docs.waves.exchange/ru/waves-matcher/) — отправителям транзакций обмена или по выбранному матчеру.

Чтобы получить данные по выбранному матчеру, укажите в запросе адрес матчера.

:bulb: Адрес матчера Waves.Exchange:
* Mainnet: 3PEjHv3JGjcWNpYEEkif2w8NXV4kbhnoGgu
* Testnet: 3N8aZG6ZDfnh8YxS6aNcteobN8eXTWHaBBd
* Stagenet: 3MQkebjth2vaisUu7ENGYWEij3qWQdLxibe

## Собственный инстанс дата-сервиса

Вы можете запустить собственный инстанс дата-сервиса Waves по [инструкции](https://github.com/wavesplatform/data-service/blob/develop/README.md) в репозитории дата-сервиса на Github.

