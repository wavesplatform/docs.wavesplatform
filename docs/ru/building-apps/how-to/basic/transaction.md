# Как создать транзакцию и добавить ее в блокчейн

Все события на блокчейне представлены в виде транзакций. Например:

* транзакция данных записывает информацию в хранилище данных аккаунта;
* транзакция перевода отправляет заданное количество токенов с одного аккаунта на другой.

В Waves предусмотрено множество типов транзакций, см. раздел [Тип транзакции](/ru/blockchain/transaction-type/). Набор полей транзакции зависит от ее типа.

**Подтверждение транзакции**

В Waves каждая транзакция отправлена с какого-либо аккаунта. Транзакция, отправленная с обычного аккаунта (без установленного скрипта), должна содержать подтверждение — цифровую подпись отправителя. (Смарт-аккаунты и dApp могут устанавливать собственные правила верификации исходщих транзакций.) Подробнее см. в разделе [Подтверждение транзакциии](/ru/blockchain/transaction/transaction-proof).

Есть два способа сгенерировать подтверждение транзакции:

* Если приложение отправляет транзакции от вашего имени, вы можете использовать свою секретную фразу (seed) для подписания транзакций. Этот способ описан в подразделе [Подписание с помощью секретной фразы](#подписание-с-помощью-секретной-фразы) ниже.
* Если приложение отправляет транзакции от имени разных пользователей, мы не рекомендуем запрашивать у них секретную фразу. Вместо этого используйте официальное приложение-кошелек — например, разработанное командой Waves.Exchange. Этот способ описан в подразделе [Подписание от имени пользователя](#подписание-от-имени-пользователя) ниже.

**Комиссия за транзакцию**

Транзакции в Waves очень дешевые, но не бесплатные. В каждой транзакции должна быть указана комиссия не менее минимальной. Минимальные комиссии представлены в разделе [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee).

> :bulb: На Testnet пользователи могут пополнять баланс WAVES с помощью [Testnet Faucet](/ru/ecosystem/waves-explorer/account-balance-top-up-in-the-test-network).

**Процесс**

Чтобы поместить транзакцию в блокчейн:

1. Заполните поля транзакции.
2. Подпишите транзакцию: сгенерируйте подтверждение и добавьте его к транзакции.
3. Отправьте транзакцию на ноду Waves.

Вы можете отправить транзакцию на свою собственную ноду или одну из нод с публичным API:

* Testnet: <https://nodes-testnet.wavesnodes.com>
* Mainnet: <https://nodes.wavesnodes.com>

Нода проверяет валидность транзакции. Если проверка прошла успешно, транзакция помещается в очередной сгенерированный блок, в противном случае транзакция отвергается блокчейном.

## Подписание с помощью секретной фразы

### С помощью JavaScript

Используйте библиотеку `waves-transactions`. Для генерации подписи используется секретная фраза (seed) аккаунта. Если комиссия за транзакцию не указана, она рассчитывается автоматически.

Описание функций приведено в [документации библиотеки](https://wavesplatform.github.io/waves-transactions/index.html) на Github.

```javascript
import { broadcast } from "@waves/waves-transactions";
import { data, transfer } from "@waves/waves-transactions";

const nodeUrl = 'https://nodes-testnet.wavesnodes.com';
const seed = 'insert your seed here';

  // Транзакция данных: добавляет записи в хранилище данных аккаунта-отправителя

  const records = [
    { key: 'integerVal', value: 1 },
    { key: 'booleanVal', value: true },
    { key: 'stringVal', value: 'Lorem ipsum dolor sit amet' }
  ]

  const dataTx = data({ data: records }, seed); // Создание и подписание транзакции данных

  broadcast(dataTx,nodeUrl).then(resp => console.log(resp));

  // Транзакция перевода: отправляет 1 WAVES на заданный адрес

  const money = {
    recipient: '3N1HYdheNiiTtHgi2n3jLAek6N3H4guaciG',
    amount: 100000000 // Фактическое количество ассета нужно умножить на 10^decimals
  }

  const transferTx = transfer(money, seed); // Создание и подписание транзакции перевода

  broadcast(transferTx,nodeUrl).then(resp => console.log(resp));

```

### С помощью Python

Используйте библиотеку [PyWaves](https://github.com/PyWaves/PyWaves), разработанную сообществом Waves. Класс `Address` предназначен для операций в блокчейне. Подробнее см. в [документации библиотеки](https://github.com/PyWaves/PyWaves/blob/master/README.md) на Github.

```python
import pywaves as pw

myAddress = pw.Address(seed='insert your seed here')

data = [{'type':'string', 'key': 'stringVal', 'value':'Lorem ipsum dolor sit amet'},
        {'type':'integer',  key: 'integerVal', value: 1 },
        {'type':'boolean',  key: 'booleanVal', value: true }]

myAddress.dataTransaction(data)
myAddress.sendWaves(recipient = pw.Address('3P8pGyzZL9AUuFs9YRYPDV3vm73T48ptZxs'),
                    amount = 100000000)
```

## Подписание от имени пользователя

### С помощью JavaScript

Используйте библиотеку `Signer` вместе с библиотекой `ProviderWeb`, разработанной командой Waves.Exchange.

`ProviderWeb` открывает окно, в котором пользователь может подтвердить транзакцию. Затем `ProviderWeb` генерирует подтверждение транзакции.

Если комиссия за транзакцию не указана, она рассчитывается автоматически.

> :warning: `ProviderWeb` поддерживает подписание транзакций всех типов, кроме транзакций обмена.

Полное описание приведено в документации [Signer](/ru/building-apps/waves-api-and-sdk/client-libraries/signer).

**Пример:**

```javascript
import Signer from '@waves/signer';
import Provider from '@waves.exchange/provider-web';

// Инициализация библиотеки

const signer = new Signer({
  NODE_URL: 'https://nodes-testnet.wavesnodes.com'
});
signer.setProvider(new Provider());

// Транзакция данных: добавляет записи в хранилище данных аккаунта-отправителя

const records = [
  { key: 'integerVal', value: 1 },
  { key: 'booleanVal', value: true },
  { key: 'stringVal', value: 'Lorem ipsum dolor sit amet' }
]

const dataTx = signer
  .data({ data: records })
  .broadcast();

dataTx.then(resp => console.log(resp));

console.log('Data tx: ' + dataTx);

// Транзакция перевода: отправляет 1 WAVES на заданный адрес

const money = {
  recipient: '3N1HYdheNiiTtHgi2n3jLAek6N3H4guaciG',
  amount: 100000000,
  }

const transferTx = signer
  .transfer(money)
  .broadcast();
  
transferTx.then(resp => console.log(resp));
```
