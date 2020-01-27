---
sidebarDepth: 3
---

# Signer

## Общие сведения

Waves Signer — TypeScript/JavaScript-библиотека, которая позволяет вашему веб-приложению взаимодействовать с блокчейном Waves. Используя Signer, вы сможете легко создавать и подписывать транзакции.

Signer предоставляет протокол для взаимодействия с Провайдером — внешней библиотекой, которая выполняет аутентификацию пользователей и генерирует подтверждения транзакций. Ваше приложение, как и Signer, не имеет доступа к закрытому ключу и секретной фразе (seed) пользователя.

![](./_assets/signer.png)

В данный момент вы можете подключить одного из следующих провайдеров:

* [ProviderSeed](https://github.com/wavesplatform/provider-seed) разработан командой Waves и создает аккаунт пользователя из секретной фразы. ProviderSeed можно использовать на этапе разработки и отладки приложения.
* [ProviderWeb](https://gitlab.waves.exchange/we-public/provider-web) — приложение-кошелек, разработанное Waves.Exchange, которое хранит в зашифрованном виде секретную фразу и закрытый ключ пользователя, гарантируя, что средства пользователей защищены от хакеров и вредоносных веб-сайтов.

Вы также можете разработать собственного Провайдера, см. подраздел [Интерфейс Провайдера](#интерфейс-провайдера).

В коде можно использовать [типы TypeScript](https://github.com/wavesplatform/ts-types/blob/master/transactions/index.d.ts).

## Начало работы

### 1. Установка библиотек Signer и Провайдера

* Чтобы установить Signer, используйте команду

   ```bash
   npm i @waves/signer
   ```

* Чтобы установить ProviderSeed от Waves, используйте команду

   ```bash
   npm i @waves/provider-seed @waves/waves-transactions
   ```

* Чтобы установить ProviderWeb от Waves.Exchange, используйте команду

   ```bash
   npm i @waves.exchange/provider-web
   ```

### 2. Подключение библиотек

Инициализируйте библиотеки в приложении.

* Для работы с Testnet и ProviderSeed:

   ```js
   import Signer from '@waves/signer';
   import { ProviderSeed } from '@waves/provider-seed';
   import { libs } from '@waves/waves-transactions';

   const seed = libs.crypto.randomSeed(15);
   const signer = new Signer({
     // Укажите адрес ноды, подключенной к Testnet
     NODE_URL: 'https://pool.testnet.wavesnodes.com'
   });
   signer.setProvider(new ProviderSeed(seed));
   ```

* Для работы с Testnet и Waves.Exchange ProviderWeb:

   ```js
   import Signer from '@waves/signer';
   import Provider from '@waves.exchange/provider-web';
   
   const signer = new Signer({
     // Укажите адрес ноды, подключенной к Testnet
     NODE_URL: 'https://pool.testnet.wavesnodes.com'
   });
   signer.setProvider(new Provider());
   ```

* Для работы с Mainnet и Waves.Exchange ProviderWeb:

   ```js
   import Signer from '@waves/signer';
   import Provider from '@waves.exchange/provider-web';
   
   const signer = new Signer();
   signer.setProvider(new Provider());
   ```

Теперь ваше приложение может использовать функции Signer.

### 3. Базовый пример

Ваше приложение готово к работе с блокчейном Waves. Попробуем использовать базовые функции: аутентифицировать пользователя, получить его баланс, перевести токены.

```js
const user = await signer.login();
const balances = await signer.getBalance();
const [broadcastedTransfer] = await signer
  .transfer({amount: 100000000, recipient: 'alias:T:merry'}) // Перевод 1 WAVES алиасу merry
  .broadcast(); // Promise будет разрешен после подписания транзакции пользователем и получения ответа ноды

const [signedTransfer] = await signer
  .transfer({amount: 100000000, recipient: 'alias:T:merry'}) // Перевод 1 WAVES алиасу merry
  .sign(); // Promise будет разрешен после подписания транзакции пользователем
```

### Другие примеры

Пример приложения, реализующего кнопку сбора пожертвований: <https://github.com/vlzhr/crypto-donate>.


## Конструктор

```js
new Signer({
  NODE_URL: 'string',
})
```

Создает объект с перечисленными ниже [методами](#методы).

**Параметры:**

| Имя параметра | Значение по умолчанию | Описание |
| :--- | :--- | :--- |
| NODE_URL | https://nodes.wavesnodes.com | Нода, используемая для доступа к блокчейну |

<!-- | MATCHER_URL | https://matcher.waves.exchange/ | Матчер, используемый для исполнения ордеров | -->

## Методы

* [Данные пользователя](#данные-пользователя)

   * [login](#login)
   * [logout](#logout)
   * [getBalance](#getbalance)
   * [getSponsoredBalances](#getsponsoredbalances)

* [Создание транзакций](#создание-транзакций)

   * [Общие параметры](#общие-параметры)
   * [Как подписать и отправить транзакцию](#как-подписать-и-отправить-транзакцию)
   * [alias](#alias)
   * [burn](#burn)
   * [cancelLease](#cancellease)
   * [data](#data)
   * [invoke](#invoke)
   * [issue](#issue)
   * [lease](#lease)
   * [massTransfer](#mass-transfer)
   * [reissue](#reissue)
   * [setAssetScript](#setassetscript)
   * [setScript](#setscript)
   * [sponsorship](#sponsorship)
   * [transfer](#transfer)
   * [batch](#batch)

* [Прочие](#методы)

   * [broadcast](#broadcast)
   * [setProvider](#setprovider)
   * [waitTxConfirm](#waittxconfirm)

### Данные пользователя

#### login

Выполняет вход в аккаунт пользователя; если у пользователя еще нет аккаунта — создает его.

```js
login();
```

**Возвращает:**
Promise пользовательских данных: адреса и публичного ключа.

**Пример вызова:**

```ts
const {address, publicKey} = await signer.login();
```

**Пример результата:**

```js
{
  address: '3P8pGyzZL9AUuFs9YRYPDV3vm73T48ptZxs',
  publicKey: 'FuChbN7t3gvW5esgARFytKNVuHSCZpXSYf1y3eDSruEN',
}
```

#### logout

Выполняет выход из аккаунта.

```js
logout();
```

**Возвращает:** Promise\<void\>.

**Пример вызова:**
```ts
await signer.logout();
```

#### getBalance

Если пользователь вошел в аккаунт, получает текущий баланс всех ассетов в портфеле пользователя.

```js
getBalance();
```

**Возвращает:** Promise списка ассетов и их балансов.

**Пример вызова:**

```ts
const balances = await signer.getBalance();
```

**Пример результата:**

```js
[{
  assetId: 'WAVES',
  assetName: 'Waves',
  decimals: 8,
  amount: 100000000,
  isMyAsset: false,
  tokens: 1,
  sponsorship: null,
  isSmart: false
},
{
  assetId: 'AcrRM9STdBu5PNiFveTCbRFTS8tADhKcsbC2KBp8A4tx',
  assetName: 'CoffeeCoin',
  decimals: 3,
  amount: 1500,
  isMyAsset: false,
  tokens: 1.5,
  isSmart: false,
  sponsorship: 500
}]
```

**Поля результата:**

| Имя поля | Описание |
| :--- | :--- |
| assetId | Идентификатор ассета в кодировке Base58 |
| assetName | Название ассета |
| decimals | Количество знаков после запятой в балансе ассета |
| amount | Баланс ассета, умноженный на 10^`decimals`. Например, для WAVES `decimals` равно 8, поэтому фактическое количество WAVES умножается на 10^8. `{ "WAVES": 677728840 }` означает 6,77728840 WAVES |
| isMyAsset | `true`, если ассет выпущен текущим пользователем |
| tokens | Баланс ассета для отображения в приложении |
| sponsorship | Количество спонсорского ассета, взимаемое с пользователей (эквивалент 0,001 WAVES), умноженное на  10^`decimals`<br>`null` — если токен не является спосорским |
| isSmart | `true` для [смарт-ассетов](/ru/smart-contracts/what-is-smart-asset) |

#### getSponsoredBalances

Если пользователь вошел в аккаунт, получает текущий баланс спонсорских ассетов в портфеле пользователя. См. [Спонсирование](/ru/blockchain/waves-protocol/sponsored-fee).

```js
getSponsoredBalances();
```

**Возвращает:** Promise списка ассетов и их балансов.

**Пример вызова:**

```ts
const sponsoredBalances = await signer.getSponsoredBalances();
```

**Пример результата:**

```js
[{
  assetId: 'AcrRM9STdBu5PNiFveTCbRFTS8tADhKcsbC2KBp8A4tx',
  assetName: 'CoffeeCoin',
  decimals: 3,
  amount: 1500,
  isMyAsset: false,
  tokens: 1.5,
  isSmart: false,
  sponsorship: 500
}]
```

**Поля результата** такие же, как у метода [getBalance](#getbalance).

### Создание транзакций

Следующие методы создают транзакции (но не подписывают их и не отправляют в блокчейн):

* [alias](#alias)
* [burn](#burn)
* [cancelLease](#cancellease)
* [data](#data)
* [exchange](#exchange)
* [invoke](#invoke)
* [issue](#issue)
* [lease](#lease)
* [massTransfer](#masstransfer)
* [reissue](#reissue)
* [setAssetScript](#setassetscript)
* [setScript](#setscript)
* [sponsorship](#sponsorship)
* [transfer](#transfer)

> Проверьте, какие типы транзакций поддерживает используемый вами Провайдер.

#### Общие параметры

Каждый из методов создания транзакции имеет необязательные параметры, которые в большинстве случаев не требуется указывать в явном виде:

| Имя поля | Описание | Значение по умолчанию |
| :--- | :--- | :--- |
| chainId | 'W'.charCodeAt(0) или 87 — Mainnet<br/>'T'.charCodeAt(0) или 84 — Testnet<br/>'S'.charCodeAt(0) или 83 — Stagenet | Определяется конфигурацией ноды Waves, указанной в [Конструкторе](#конструктор) |
| fee | Комиссия за транзакцию | Рассчитывается автоматически, как описано в разделе [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| proofs | Массив подтверждений транзакции | Добавляется методом `sign` или `broadcast` (см. подраздел [Как подписать и отправить транзакцию](#как-подписать-и-отправить-транзакцию)). Если вы указываете подтверждение вручную, оно также добваляется в массив |
| senderPublicKey | Открытый ключ отправителя транзакции в кодировке Base58 | Возвращается методом [login](#login) |

#### Как подписать и отправить транзакцию

Каждый из методов создания транзакции возвращает объект, у которого есть методы `sign` и `broadcast`.

Чтобы подписать транзакцию, используйте метод `sign`. Пример:

```js
signer.invoke({
   dApp: address,
   call: { function: name, args: convertedArgs },
}).sign();
```

Чтобы подписать транзакцию и сразу отправить ее в блокчейн, используйте метод `broadcast`. Пример:

```js
signer.invoke({
   dApp: address,
   call: { function: name, args: convertedArgs },
}).broadcast();
```

> В методе `broadcast` можно использовать те же опции, что и в методе [signer.broadcast](#broadcast), описание которого приведено ниже.

Вы можете подписать или отправить сразу несколько транзакций. Пример:

```js
signer.alias({ 'new_alias', })
  .data([{ key: 'value', type: 'number', value: 1 ])
  .transfer({ recipient: '3P8pGyzZL9AUuFs9YRYPDV3vm73T48ptZxs', amount: 10000 })
}).broadcast();
```

#### alias

Создает [транзакцию создания псевдонима](/ru/blockchain/transaction-type/alias-transaction).

```js
alias(data: {
  alias: 'string'
})
```

**Параметры:**

| Имя параметра | Значение по умолчанию | Описание |
| :--- | :--- | :--- |
| alias* | | Короткое, удобное для запоминания имя адреса. См. [Псевдоним](/ru/blockchain/account/alias) |

\* Обязательный параметр.

См. [Общие параметры](#общие-параметры) для описания остальных параметров.

**Пример вызова:**

```js
const data = {
  alias: 'new_alias',
}

const [tx] = await signer
  .alias(data)
  .broadcast();
```

#### burn

Создает [транзакцию сжигания токена](/ru/blockchain/transaction-type/burn-transaction).

```js
burn(data: {
    assetId*: 'string',
    quantity*: LONG,
})
```

**Параметры:**

| Имя параметра | Значение по умолчанию | Описание |
| :--- | :--- | :--- |
| assetId* | | Идентификатор сжигаемого ассета в кодировке Base58 |
| quantity* | | Количество сжигаемого ассета, умноженный на 10^`decimals`. Например, для WAVES `decimals` равно 8, поэтому фактическое количество WAVES умножается на 10^8. `{ "WAVES": 677728840 }` означает 6,77728840 WAVES  |

\* Обязательный параметр.

См. [Общие параметры](#общие-параметры) для описания остальных параметров.

**Пример вызова:**

```js
const data = {
  assetId: '4uK8i4ThRGbehENwa6MxyLtxAjAo1Rj9fduborGExarC',
  quantity: 100,
}

const [tx] = await signer
  .burn(data)
  .broadcast();
```

#### cancelLease

Создает [транзакцию закрытия лизинга](/ru/blockchain/transaction-type/lease-cancel-transaction).

```js
cancelLease(data: {
    leaseId: 'string',
})
```

**Параметры:**

| Имя параметра | Значение по умолчанию | Описание |
| :--- | :--- | :--- |
| leasetId* | | Идентификатор транзакции лизинга в кодировка Base58 |

\* Обязательный параметр.

См. [Общие параметры](#общие-параметры) для описания остальных параметров.

**Пример вызова:**

```js
const data = {
  leaseId: '69HK14PEHq2UGRfRYghVW8Kc3487uJaoUmk2ntT4kw7X',
}

const [tx] = await signer
  .cancelLease(data)
  .broadcast();
```

#### data

Создает [транзакцию данных](/ru/blockchain/transaction-type/data-transaction).

```js
data(data: [{
  key: 'string',
  type: 'string' | 'integer' | 'binary' | 'boolean',
  value: 'string' | number | boolean,
])
```

**Параметры:**

| Имя параметра | Значение по умолчанию | Описание |
| :--- | :--- | :--- |
| key* | | Ключ записи. Не более 100 символов |
| type | | Тип записи |
| value* | | Значение записи. Не более 5 Кбайт |

\* Обязательный параметр.

См. [Общие параметры](#общие-параметры) для описания остальных параметров.

**Пример вызова:**

```js
const data = [
  { key: 'name', type: 'string', value: 'Lorem ipsum dolor sit amet' },
  { key: 'value', type: 'number', value: 1234567 },
  { key: 'flag', type: 'boolean', value: true }
]

const [tx] = await signer
  .data(data)
  .broadcast();
```

<!-- <a id="exchange"></a>
#### exchange

Создает [транзакцию обмена](/ru/blockchain/transaction-type/data-transaction).

```js
exchange(data: {
  buyOrder: IExchangeTransactionOrder<LONG> & IWithProofs (??),
  sellOrder: IExchangeTransactionOrder<LONG> & IWithProofs,
  price: LONG,
  amount: LONG,
  buyMatcherFee: LONG,
  sellMatcherFee: LONG,
})
```

**Параметры:**

| Имя поля | Значение по умолчанию | Описание |
| :--- | :--- | :--- |
| buyOrder* | | Key of a record. Maximum of 100 characters |
| sellOrder* | | Type of a record |
| price* | | Value of a record. Maximum of 5 Kbytes |
| amount* | | Value of a record. Maximum of 5 Kbytes |
| buyMatcherFee* | | Value of a record. Maximum of 5 Kbytes |
| sellMatcher* | | Value of a record. Maximum of 5 Kbytes |

\* Обязательный параметр.

См. [Общие параметры](#общие-параметры) для описания остальных параметров.

**Возвращает:** Promise of ???

**Пример вызова:**

```js
const data = {}

const [tx] = await signer
  .exchange(data)
  .broadcast();
```-->

#### invoke

Создает [транзакцию вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction).

```js
invoke(data: {
  dApp: 'string',
  fee: LONG,
  payment: [{
    assetId: 'string',
    amount: LONG,
  }],
  call: {
    function: 'string',
    args: [{
      type: 'integer' | 'string' | 'binary',
      value: number | 'string',
    }],
  },
})
```

**Параметры:**

| Имя параметра | Значение по умолчанию | Описание |
| :--- | :--- | :--- |
| dApp* | | Адрес в кодировке Base58 или псевдоним (с префиксом `alias:T:`) dApp-скрипта, который нужно вызвать |
| fee | | Рекомендуем указать комиссию в зависимости от количества действий, выполняемых при вызове функции (см. раздел [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee)) |
| payment | | Платежи, приложенные к вызову. Не более двух платежей |
| payment.assetId* | | Идентификатор ассета платежа в кодировке Base58. `WAVES` или `null` соответствуют WAVES |
| payment.amount* | | Количество ассета, умноженное на 10^`decimals`. Например, для WAVES `decimals` равно 8, поэтому фактическое количество WAVES умножается на 10^8. `{ "WAVES": 677728840 }` означает 6,77728840 WAVES |
| call | Вызывается функция по умолчанию | Параметры вызываемой функции |
| call.function* | | Имя вызываемой функции |
| call.args* | | Аргументы вызываемой функции |
| call.args.type* | | Тип аргумента |
| call.args.value* | | Значение аргумента |

\* Обязательный параметр.

См. [Общие параметры](#общие-параметры) для описания остальных параметров.

**Пример вызова:**

```ts
const data = {
  dApp: '3Fb641A9hWy63K18KsBJwns64McmdEATgJd',
  fee: 1000000,
  payment: [{
    assetId: '73pu8pHFNpj9tmWuYjqnZ962tXzJvLGX86dxjZxGYhoK',
    amount: 7,
  }],
  call: {
    function: 'foo',
    args: [
      { type: 'integer', value: 1 },
      { type: 'binary', value: 'base64:AAA=' },
      { type: 'string', value: 'foo' }
    ],
  },
}

const [tx] = await signer
  .invoke(data)
  .broadcast();
```

#### issue

Создает [транзакцию выпуска](/ru/blockchain/transaction-type/issue-transaction).

```js
issue(data: {
  name: 'string',
  decimals: 'number',
  quantity: LONG,
  reissuable: boolean,
  description: 'string',
  script: 'string',
})
```

**Параметры:**

| Имя параметра | Значение по умолчанию | Описание |
| :--- | :--- | :--- |
| name* | | Название ассета |
| decimals* | | Количество знаков после запятой |
| quantity* | | Количество ассета, умноженное на 10^`decimals` |
| reissuable* | | `true` – довыпуск возможен;<br>`false` — довыпуск невозможен |
| description* | | Описание ассета |
| script | | Скрипт ассета в кодировке Base64 (с префиксом `base64:`) |

\* Обязательный параметр.

См. [Общие параметры](#общие-параметры) для описания остальных параметров.

**Пример вызова:**

```js
const data = {
  name: 'MyToken',
  decimals: 8,
  quantity: 100000000000,
  reissuable: true,
  description: 'It is a gaming token',
}

const [tx] = await signer
  .issue(data)
  .broadcast();
```

#### lease

Создает [транзакцию лизинга](/ru/blockchain/transaction-type/lease-transaction).

```js
lease(data: {
    amount: LONG,
    recipient: 'string',
})
```

**Параметры:**

| Имя параметра | Значение по умолчанию | Описание |
| :--- | :--- | :--- |
| amount* | | Количество WAVES, умноженное на 10^`decimals`. `{ "WAVES": 677728840 }` означает 6,77728840 WAVES |
| recipient* | | [Адрес](/ru/blockchain/account/address) получателя в кодировке Base58 или алиас получателя (с префиксом `alias:T:`) |

\* Обязательный параметр.

См. [Общие параметры](#общие-параметры) для описания остальных параметров.

**Пример вызова:**

```js
const data = {
    amount: 10000,
    recipient: 'alias:T:merry',
}

const [tx] = await signer
  .lease(data)
  .broadcast();
```

#### massTransfer

Создает [транзакцию массового перевода](/ru/blockchain/transaction-type/mass-transfer-transaction).

```js
massTransfer(data: {
  assetId: 'string',
  transfers: [{
    amount: LONG,
    recipient: 'string',
  }],
  attachment: 'string',
})
```

**Параметры:**

| Имя параметра | Значение по умолчанию | Описание |
| :--- | :--- | :--- |
| assetId | WAVES | Идентификатор ассета в кодировке Base58 |
| transfers* | | Список переводов |
| transfers.amount* | | Количество ассета, умноженное на 10^`decimals`. Например, для WAVES `decimals` равно 8, поэтому фактическое количество WAVES умножается на 10^8. `{ "WAVES": 677728840 }` означает 6,77728840 WAVES |
| transfers.recipient* | | [Адрес](/ru/blockchain/account/address) получателя в фодировке Base58 или алиас получателя (с префиксом `alias:T:`) |
| attachment | | Произвольные данные, прикладываемые к транзакции. Обычно используются для комментария к переводу. Не более 140 байт |

\* Обязательный параметр.

См. [Общие параметры](#общие-параметры) для описания остальных параметров.

**Пример вызова:**

```js
const data = [
    {
      amount: 100,
      recipient: '3P23fi1qfVw6RVDn4CH2a5nNouEtWNQ4THs',
    },
    {
      amount: 200,
      recipient: 'alias:T:merry',
    },
]

const [tx] = await signer
  .massTransfer(data)
  .broadcast();
```

#### reissue

Создает [транзакцию довыпуска](/ru/blockchain/transaction-type/reissue-transaction).

```js
reissue(data: {
  assetId: 'string',
  quantity: LONG,
  reissuable: boolean,
})
```

**Параметры:**

| Имя параметра | Значение по умолчанию | Описание |
| :--- | :--- | :--- |
| assetId* | | Идентификатор ассета в кодировке Base58 |
| quantity* | | Количество ассета к довыпуску, умноженное на 10^`decimals` |
| reissuable* | | `true` – повторный довыпуск возможен.<br>`false` — повторный довыпуск невозможен |

\* Обязательный параметр.

См. [Общие параметры](#общие-параметры) для описания остальных параметров.

**Пример вызова:**

```js
const data = {
  assetId: 'AcrRM9STdBu5PNiFveTCbRFTS8tADhKcsbC2KBp8A4tx'
  quantity: 100000000000,
  reissuable: true,
}

const [tx] = await signer
  .reissue(data)
  .broadcast();
```

#### setAssetScript

Создает [транзакцию установки скрипта ассета](/ru/blockchain/transaction-type/set-asset-script-transaction).

```js
setAssetScript(data: {
  assetId: 'string',
  script: 'string',
})
```

**Параметры:**

| Имя параметра | Значение по умолчанию | Описание |
| :--- | :--- | :--- |
| assetId* | | Идентификатор ассета в кодировке Base58 |
| script | | Скрипт ассета в кодировке Base64 (с префиксом `base64:`) |

\* Обязательный параметр.

См. [Общие параметры](#общие-параметры) для описания остальных параметров.


**Пример вызова:**

```js
const data = {
  assetId: 'AcrRM9STdBu5PNiFveTCbRFTS8tADhKcsbC2KBp8A4tx',
  script: 'base64:AwZd0cYf...',
}

const [tx] = await signer
  .setAssetScript(data)
  .broadcast();
```

#### setScript

Создает [транзакцию установки скрипта](/ru/blockchain/transaction-type/set-script-transaction).

```js
setScript(data: {
  script: 'string',
})
```

**Параметры:**

| Имя параметра | Значение по умолчанию | Описание |
| :--- | :--- | :--- |
| script | | [Скрипт аккаунта](/ru/ride/script/script-types/account-scriptl) или [dApp-скрипт](/ru/ride/script/script-types/dapp-script) в кодировке Base64 (с префиксом `base64:`). `null` — отмена установки скрипта |

См. [Общие параметры](#общие-параметры) для описания остальных параметров.


**Пример вызова:**

```js
const data = {
  script: 'base64:AAIDAAAAAAAAAAQIARIAAAAAAAAAAA...',
}

const [tx] = await signer
  .setScript(data)
  .broadcast();
```

#### sponsorship

Создает [транзакцию спонсирования](/ru/blockchain/waves-protocol/sponsored-fee).

```js
sponsorship(data: {
    assetId: 'string',
    minSponsoredAssetFee: LONG,
})
```

**Параметры:**

| Имя параметра | Значение по умолчанию | Описание |
| :--- | :--- | :--- |
| assetId* | | Идентификатор ассета в кодировке Base58 |
| minSponsoredAssetFee | | Количество спонсорского ассета, взимаемое с пользователей (эквивалент 0,001 WAVES), умноженное на  10^`decimals` |

\* Обязательный параметр.

См. [Общие параметры](#общие-параметры) для описания остальных параметров.


**Пример вызова:**

```js
const data = {
  assetId: 'AcrRM9STdBu5PNiFveTCbRFTS8tADhKcsbC2KBp8A4tx',
  minSponsoredAssetFee: 314,
}

const [tx] = await signer
  .sponsorship(data)
  .broadcast();
```

#### transfer

Создает [транзакцию перевода](/ru/blockchain/transaction-type/transfer-transaction).

```js
transfer(data: {
  recipient: 'string',
  amount: LONG,
  assetId: 'string',
  attachment: 'string',
  feeAssetId: 'string',
})
```

**Параметры:**

| Имя параметра | Значение по умолчанию | Описание |
| :--- | :--- | :--- |
| recipient* | | [Адрес](/ru/blockchain/account/address) получателя в кодировке Base58 или алиас получателя (с префиксом `alias:T:`) |
| amount* | | Количество ассета, умноженное на 10^`decimals`. Например, для WAVES `decimals` равно 8, поэтому фактическое количество WAVES умножается на 10^8. `{ "WAVES": 677728840 }` означает 6,77728840 WAVES  |
| assetId | WAVES | Идентификатор ассета в кодировке Base58. `null` или отсутствующий параметр означает WAVES |
| attachment | | Произвольные данные, прикладываемые к транзакции. Обычно используются для комментария к переводу. Не более 140 байт |
| feeAssetId | WAVES | Идентификатор ассета, в котором будет уплачена комиссия за перевод, в кодировке Base58. `null` или отсутствующий параметр означает WAVES |

\* Обязательный параметр.

См. [Общие параметры](#общие-параметры) для описания остальных параметров.


**Пример вызова:**

```js
const data = {
  recipient: '3P8pGyzZL9AUuFs9YRYPDV3vm73T48ptZxs',
  amount: 10000,
  }

const [tx] = await signer
  .transfer(data)
  .broadcast();
```

#### batch

Создает список транзакций.

```js
batch([{
  type: number,
  ... // поля, зависящие от типа транзакции
}])
```

**Параметры:**

| Имя параметра | Значение по умолчанию | Описание |
| :--- | :--- | :--- |
| type* | | [Идентификатор типа транзакции](/ru/blockchain/transaction-type) |

\* Обязательный параметр.

**Пример вызова:**

```js
const [transfer, alias, issue] = await signer.batch([
  {
    type: 4,
    recipient: 'alias:T:merry',
    amount: 100000000
  },
  {
    type: 10,
    alias: 'send33'
  },
  {
    type: 3,
    name: 'SomeTokenName',
    description: 'Some Token Description',
    reissuable: false,
    quantity: 100,
    decimals: 1
  }
]).sign(); // Или broadcast
```

В этом примере метод `sign` возвращает массив подписанных транзакций, в том же порядке, в котором они были приведены в `batch`.

### Прочие методы

#### broadcast

Оправляет ранее подписанные транзакции в блокчейн.

```js
broadcast(tx,[options])
```

**Возвращает:** Promise ответа ноды. См. описание метода [POST /transactions/broadcast](https://docs.wavesplatform.com/ru/waves-node/node-api/transactions.html#section-8b7f977c1b3f2832df49d3d3738dc0cf) Node API.

**Параметры:**

| Имя параметра | Значение по умолчанию | Описание |
| :--- | :--- | :--- |
| tx* | | Подписанная транзакция или массив подписанных транзакций |
| options.chain | false | [Тип: boolean] Отправлять следующую транзакцию только после того, как в блокчейн добавлен блок с предыдущей транзакцией и затем еще количество блоков, указанное в параметре `options.confirmations` |
| options.confirmations | -1 | Уровень подтверждения, при котором будет разрешен Promise:<br>меньше 0 – Promise разрешается, когда транзакция попадает в UTX pool<br>0 – Promise разрешается, когда блок, содержащий транзакцию, попадает в блокчейн<br>1 – Promise разрешается, когда в блокчейн добавляется еще один блок и т. д. |

\* Обязательный параметр.

**Пример вызова:**

```js
const [transfer1] = await signer.transfer({amount: 1, recipient: 'alias:T:merry'}).sign();
const [transfer2] = await signer.transfer({amount: 1, recipient: 'alias:T:merry'}).sign();

await signer.broadcast([transfer1, transfer2], {chain: true, confirmations: 2});
```

В этом примере последовательность событий следующая:

* Транзакция `transfer1` передается на ноду и помещается в UTX pool.
* Блок с транзакцией `transfer1` и еще два блока добавляются в блокчейн.
* Транзакиця `transfer2` передается на ноду и помещается в UTX pool.
* Блок с транзакцией `transfer2` и еще два блока добавляются в блокчейн.
* Происходит разрешение Promise, и вы можете сообщить пользователю, что его транзакции подтверждены.

#### setProvider

Устанавливает Провайдера, который используется для подписания транзакций. Требования к Провайдеру приведены в разделе [Интерфейс Провайдера](#интерфейс-провайдера).

```js
setProvider(provider);
```

**Параметры:**

| Имя параметра | Значение по умолчанию | Описание |
| :--- | :--- | :--- |
| provider* | | Объект, который реализует интерфейс провайдера |

\* Обязательный параметр.

**Пример вызова:**
```js
signer.setProvider(new Provider());
```

#### waitTxConfirm

Ожидает появления транзакции в блокчейне.

```js
waitTxConfirm(tx, confirmations)
```

**Параметры:**

| Имя параметра | Значение по умолчанию | Описание |
| :--- | :--- | :--- |
| tx* | | Транзакция или массив транзакций, отправленных в блокчейн |
| confirmations* | | Количество блоков, добавленных в блокчейн после блока, содержащего транзакцию |

\* Обязательный параметр.

**Пример вызова:**
```ts
const [tx] = await signer
  .transfer({amount: 10000000, recipient: 'alias:T:merry'})
  .broadcast();

signer.waitTxConfirm(tx, 1).then((tx) => {
  // Требуется еще один блок в блокчейне
}});
```

## Интерфейс Провайдера

Провайдер должен предоставлять следующий интерфейс:

```js
interface IProvider {

    /**
     * Устанавливает соединение с нодой Waves
     * @param options
     */
    connect(options: {NODE_URL: string, NETWORK_BYTE: number}): Promise<void>;

    /**
     * Выполняет вход в аккаунт пользователя
     */
    login(): Promise<{addres: string, publicKey: string}>;

    /**
     * Выполняет выход из аккаунта пользователя
     */
    logout(): Promise<void>;

    /**
     * Подписывает транзакции в массиве
     * @param list
     */
    sign(list: Array<TTransactionParamWithType>): Promise<Array<TTransactionWithProofs<TLong> & IWithId>>;
}
```
