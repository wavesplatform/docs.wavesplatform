# Токен (ассет)

**Токен** или **ассет** — цифровой актив на блокчейне, который может использоваться:

* как криптовалюта – для оплаты товаров и услуг в рамках какого-либо проекта, а также для краудфандинга;
* как объект или ресурс в играх и др.

Токен может представлять какой-либо объект или ресурс реального мира или виртуальную сущность.

Слова «токен» и «ассет» в экосистеме Waves используются как синонимы.

**WAVES** — основной токен на блокчейне Waves; подробнее о нем в разделе [WAVES](/ru/blockchain/token/waves).

Все остальные токены являются пользовательскими, то есть выпущены от имени какого-либо [аккаунта](/ru/blockchain/account/). Выпустить свой токен может любой аккаунт — достаточно наличия на балансе определенного количества WAVES на оплату комиссии. Новый токен сразу же доступен:

* для переводов между аккаунтами;
* для торговли на бирже [Waves.Exchange](https://waves.exchange/), разработанной командой Waves.Exchange (кроме невзаимозаменяемых токенов [NFT](/ru/blockchain/token/non-fungible-token); также временно недоступна торговля [смарт-ассетами](/ru/blockchain/token/smart-asset));
* для платежей, приложенных к [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction).

## Параметры пользовательского токена

Пример пользовательского токена: <https://wavesexplorer.com/assets/DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p>

Пример JSON-представления, возвращаемого методом `GET /assets​/details​/{assetId}` [Node REST API](/ru/waves-node/node-api/):

```json
{
  "assetId": "DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p",
  "issueHeight": 1806810,
  "issueTimestamp": 1574429393962,
  "issuer": "3PC9BfRwJWWiw9AREE2B3eWzCks3CYtg4yo",
  "issuerPublicKey": "BRnVwSVctnV8pge5vRpsJdWnkjWEJspFb6QvrmZvu3Ht",
  "name": "USD-N",
  "description": "Neutrino USD",
  "decimals": 6,
  "reissuable": false,
  "quantity": 999999999471258900,
  "scripted": false,
  "minSponsoredAssetFee": 7420,
  "originTransactionId": "DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p"
}
```

| Поле | Описание |
| :--- | :--- |
| assetId | ID токена: байты в кодировке base58. ID токена вычисляется как хеш параметров токена при выпуске. См. также раздел [ID токена](/ru/blockchain/token/token-id) |
| issueHeight | Высота блокчейна (порядковый номер блока), на которой произошел выпуск токена |
| issueTimestamp | Время выпуска токена: Unix-время в миллисекундах |
| issuer | [Адрес](/ru/blockchain/account/address) эмитента — аккаунта, выпустившего токен: байты в кодировке base58 |
| issuerPublicKey | [Открытый ключ](/ru/blockchain/account/#открытый-и-закрытый-кnючи-аккаунта) эмитента: байты в кодировке base58 |
| name | Название токена. От 4 до 16 байт (1 символ может занимать до 4 байт) |
| description | Описание токена. От 0 до 1000 байт |
| decimals | Количество знаков после запятой, от 0 до 8 |
| reissuable | Флаг возможности довыпуска |
| quantity | Общее количество токена на блокчейне, в [атомарных единицах](#атомарная-единица-токена). От 1 до 9&nbsp;223&nbsp;372&nbsp;036&nbsp;854&nbsp;775&nbsp;807. Количество может меняться в результате довыпуска и сжигания, см. [Операции с токеном](#операции-с-токеном) ниже |
| scripted | Наличие скрипта: `true` для смарт-ассета, `false` для обычного токена. [Подробнее о смарт-ассетах](/ru/blockchain/token/smart-asset) |
| minSponsoredAssetFee | Только для спонсорского ассета: количество ассета, эквивалентное 0,001 WAVES. [Подробнее о спонсировании](/ru/blockchain/waves-protocol/sponsored-fee)
| originTransactionId | ID [транзакции](/ru/blockchain/transaction/), выпустившей токен: байты в кодировке base58 |
| scriptDetails | Только для смарт-ассета: скрипт ассета и его параметры |

### Атомарная единица

Количество токена отображается по-разному в пользовательских интерфейсах и в JSON-представлении, используемом в Node REST API. В запросах и ответах API значения всех полей, содержащих количество токена, выражены в атомарных единицах и поэтому являются целым числом. Такое представление позволяет избежать проблемы точности вычислений.

Атомарная единица — это минимальная неделимая единица («копейка») токена, она равна 10<sup>–decimals</sup>.

Количество токена в JSON-представлении — это фактическое количество, умноженное на 10<sup>decimals</sup>.

Для USD-N в примере выше:

* `decimals` = 6,
* атомарная единица — 1/1&nbsp;000&nbsp;000 USD-N.
* `"quantity": 999999999471258900` соответствует 999&nbsp;999&nbsp;999&nbsp;471,258900 USD-N в пользовательских интерфейсах,

   `"minSponsoredAssetFee": 7420` соответствует 0,007420 USD-N.

## Выпуск токена

Чтобы выпустить токен, нужно отправить [транзакцию выпуска](/ru/blockchain/transaction-type/issue-transaction), указав в ней параметры токена:

* `name`
* `description`
* `decimals`
* `quantity`
* `reissuable`
* `script` (для выпуска [смарт-ассета](/ru/blockchain/token/smart-asset)).

[Пример транзакции](https://wavesexplorer.com/tx/DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p)

Создать транзакцию выпуска можно:
* В приложении [Waves.Exchange](https://waves.exchange/), разработанном командой Waves.Exchange. См. раздел [Создать ассет](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-online-desktop/online-desktop-asset/online-desktop-token-creation) документации Waves.Exchange.
* В [Waves IDE](https://waves-ide.com/), см. раздел [Выпуск смарт-ассета](https://docs.waves.tech/ru/building-apps/smart-contracts/tools/waves-ide#выпуск-смарт-ассета).
* С помощью одной из [клиентских библиотек](/ru/building-apps/waves-api-and-sdk/client-libraries/). См. также примеры в разделе [Выпуск токена. Управление токеном](/ru/building-apps/how-to/basic/transaction).

Комиссия за транзакцию составляет 1 WAVES для обычного токена или 0,001 WAVES для [невзаимозаменяемого токена (NFT)](/ru/blockchain/token/non-fungible-token).

Кроме того, токен может быть выпущен [скриптом dApp](/ru/blockchain/account/dapp) в результате [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction) — если результат вызываемой функции содержит действие [Issue](/ru/ride/structures/script-actions/issue). Минимальная комиссия за транзакцию вызова скрипта увеличивается на 1 WAVES за каждый выпускаемый токен, не являющийся NFT.

## Операции с токеном

* Перевод токена на другой аккаунт.

   Выполняется с помощью [транзакции перевода](/ru/blockchain/transaction-type/transfer-transaction) или [транзакции массового перевода](/ru/blockchain/transaction-type/mass-transfer-transaction).

   > [Скрипт dApp](/ru/blockchain/account/dapp) может перевести токен с помощью действия скрипта [ScriptTransfer](/ru/ride/structures/script-actions/issue) в результате [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction).

* Обмен (торговля).

   В обмене могут участвовать три аккаунта: один пользователь создает [ордер](/ru/blockchain/order) на покупку токена, другой — ордер на продажу. Матчер сводит ордера на покупку и продажу с подходящими параметрами и создает [транзакцию обмена](/ru/blockchain/transaction-type/exchange-transaction). Подробнее о матчере см. в [документации Waves.Exchange](https://docs.waves.exchange/ru/waves-matcher/).

* Сжигание.

   Уменьшение количества токена на аккаунте и тем самым на блокчейне. Сжигать токен может любой его владелец, не только эмитент. Сжигание [WAVES](/ru/blockchain/token/waves) невозможно.

   Выполняется с помощью [транзакции сжигания токена](/ru/blockchain/transaction-type/burn-transaction).

   > Скрипт dApp может сжечь токен с помощью действия скрипта [Burn](/ru/ride/structures/script-actions/burn) в рамках транзакции вызова скрипта.

### Операции, доступные только эмитенту

Следующие операции с токеном может выполнить только аккаунт, выпустивший токен:

* Настройка спонсирования.

   Эмитент токена может сделать его спонсорским — разрешить любым пользователям платить комиссию за транзакции вызова скрипта и транзакции перевода в этом токене (вместо WAVES). [Подробнее о спонсировании](/ru/blockchain/waves-protocol/sponsored-fee)

   Установка и отмена спонсирования выполняются с помощью [транзакции спонсирования](/ru/blockchain/transaction-type/sponsor-fee-transaction).

   > Скрипт dApp может настроить спонсирование токен с помощью действия скрипта [SponsorFee](/ru/ride/structures/script-actions/sponsor-fee) в рамках транзакции вызова скрипта.

* Довыпуск

   Увеличение количества токена на блокчейне. Возможность довыпуска регулируется полем `reissuable`.
   
   Выполняется с помощью [транзакции довыпуска](/ru/blockchain/transaction-type/reissue-transaction).
   
   > Скрипт dApp может довыпустить токен с помощью действия скрипта [Reissue](/ru/ride/structures/script-actions/reissue) в рамках транзакции вызова скрипта.

* Изменение скрипта ассета

   Выполняется с помощью [транзакции установки скрипта ассета](/ru/blockchain/transaction-type/set-asset-script-transaction). Если токен не является смарт-ассетом, то есть скрипт не был прикреплен при выпуске токена, то в дальнейшем прикрепить скрипт невозможно.

* Изменение названия и/или описания

   Выполняется с помощью [транзакции обновления информации ассета](/ru/blockchain/transaction-type/set-asset-script-transaction).
