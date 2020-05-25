# Простое голосование на блокчейне Waves

Глава ТСЖ (товарищества собственников жилья) задает вопрос жильцам дома: "Уважаемые жильцы, согласны ли вы со строительством детской площадки во дворе вашего дома?".

На блокчейне Waves необходимо реализовать голосование жильцов дома за строительство детской площадки.

## План действий

1. Создадим [аккаунт](/ru/blockchain/account) главы ТСЖ.
2. Создадим аккаунты жильцов дома.
3. Создадим [dApp-скрипт](/ru/ride/script/script-types/dapp-script) с методом `vote`.
4. Привяжем dApp-скрипт к аккаунту главы ТСЖ, создав таким образом [dApp](/ru/blockchain/account/dapp).
5. Проголосуем с аккаунтов жильцов дома, вызвав метод `vote` dApp.
6. Узнаем результаты голосования.

## 1. Создание аккаунта главы ТСЖ

Зайдите в настройки [Waves IDE](https://ide.wavesplatform.com/).

![](./_assets/voting/account-settings.png)

Убедитесь, что выбрана [тестовая сеть](/ru/blockchain/blockchain-network/test-network).

![](./_assets/voting/account-settings-test.png)

Создайте аккаунт главы ТСЖ, выбрав  **Generate new account**.

![](./_assets/voting/account-new.png)

Переименуйте созданный аккаунт в "Глава ТСЖ".

![](./_assets/voting/account-chief.png)

Скопируйте [адрес](/ru/blockchain/account/address) главы ТСЖ и [с помощью Faucet](/ru/ecosystem/waves-explorer/account-balance-top-up-in-the-test-network) пополните его баланс на 10 [WAVES](/ru/blockchain/token/waves). [Токены](/ru/blockchain/token) понадобятся главе ТСЖ для оплаты [комиссии](/ru/blockchain/transaction/transaction-fee) за [транзакцию установки скрипта](/ru/blockchain/transaction-type/set-script-transaction), когда он будет привязывать [dApp-скрипт](/ru/ride/script/script-types/dapp-script) к своему аккаунту.

![](./_assets/voting/account-chief-balance.png)

## 2. Создание аккаунтов жильцов дома

Аналогично создайте аккаунты жильцов дома Алексея и Анны и пополните их балансы на 10 WAVES. Токены им понадобятся для оплаты комиссии за [транзакцию вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction), когда они будут голосовать, вызывая метод `vote` dApp.

![](./_assets/voting/accounts-residents.png)

## 3. Создание dApp-скрипта

Создайте [dApp-скрипт](/ru/ride/script/script-types/dapp-script), выбрав в выпадающем списке **DApp**.

![](./_assets/voting/new-dapp-script.png)

Переименуйте скрипт в "Голосование главы ТСЖ".

![](./_assets/voting/dapp-script-rename.png)

Замените автоматически сгенерированный код на следующий:

```ride
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}

func voterIsAllowedToVote(voterPublicKey: ByteVector) = {

    let alekseiPubKey = base58'8QvKvspfNF6cUv2DFMCfvT8SrbraERqXpNMEMqBfJZ3e'
    let annaPubKey = base58'AtYwJTqWNfwYrPnWVvfmnPTSTEioiLFzUTcZVttgDj1x'

    if (voterPublicKey != alekseiPubKey && voterPublicKey != annaPubKey)
    then
        false
    else
        true

}

@Callable(i)
func vote(theVote: Int) = {

    if (!voterIsAllowedToVote(i.callerPublicKey))
    then
        throw("Вы не можете голосовать, так как вас нет в списке голосующих!")
    else
        let dataFromStorage = this.getInteger(i.callerPublicKey.toBase58String())

        if (dataFromStorage.isDefined())
        then
            throw("Вы уже голосовали! Повтороное голосование запрещено.")
        else
            WriteSet([DataEntry(i.callerPublicKey.toBase58String(), theVote)])

}
```

### Пояснения к коду dApp-скрипта

#### Функция `vote`

Функция `vote` возвращает [структуру](/ru/ride/structures) `WriteSet`, внутри которой происходит запись голоса в [хранилище данных аккаунта](/ru/blockchain/account/account-data-storage) главы ТСЖ.

Перед функцией `vote` указана аннотация `@Callable`, которая делает данную функцию вызываемой у dApp. У данной аннотации `i` — переменная, содержащая информацию о транзакции, которая вызвала функцию `vote`. Мы используем переменную `i` в коде для получения открытого ключа аккаунта `i.callerPublicKey`, который отправил транзакцию вызова скрипта.

Для простоты, в функции `vote` нет никаких проверок значения переменной `theVote`.

#### Функция `voterIsAllowedToVote`

Функция `voterIsAllowedToVote` проверяет, что аккаунт, вызывающий скрипт, имеет право голосовать.

В данном примере значения открытых ключей жестко прописаны в коде скрипта. В реальном примере можно было бы считывать открытые ключи, например, из хранилища данных аккаунта главы ТСЖ (предварительно записав их туда).

Значения открытых ключей `alekseiPubKey` и `annaPubKey` возьмите из карточек аккаунтов Алексея и Анны.

![](./_assets/voting/public-key.png)

#### Функция `getInteger`

Функция `getInteger` получает значения из хранилища данных аккаунта по ключу:

```
let dataFromStorage = this.getInteger(i.callerPublicKey.toBase58String())
```

Размер и [сложность](/ru/ride/base-concepts/complexity) скрипта отображаются в панели под редактором скрипта.

![](./_assets/voting/script-complexity.png)

## 4. Привязка dApp-скрипта к аккаунту главы ТСЖ

Нажмите на кнопку **Deploy dAppscript**.

![](./_assets/voting/deploy-dapp-script.png)

В открывшемся окне, в комбинированном списке **Account**, выберите значение "Глава ТСЖ". Подпишите транзакцию, нажав **Add sign**.

![](./_assets/voting/add-sign.png)

Отметим, что подписать транзакцию можно также секретной фразой или с помощью [Waves Keeper](/ru/ecosystem/waves-keeper).

![](./_assets/voting/seed-and-waves-keeper.png)

Отправьте с аккаунта главы ТСЖ транзакцию установки скрипта, нажав **Publish**.

![](./_assets/voting/publish.png)

Таким образом, вы только что создали [dApp](/ru/blockchain/account/dapp).

В [Waves Explorer](https://wavesexplorer.com/testnet), _в тестовой сети_, найдите информацию об активности на адресе главы ТСЖ. Для этого введите адрес главы ТСЖ в строку поиска и нажмите **Enter**.

![](./_assets/voting/testnet-address.png)

По адресу главы ТСЖ отображаются две транзакции: [транзакция перевода](/ru/blockchain/transaction-type/transfer-transaction) (пополнение баланса на 10 WAVES с помощью faucet) и отправка транзакции установки скрипта. Отметим, что с баланса аккаунта главы ТСЖ списали комиссию за транзакцию установки скрипта в 0,001 WAVES.

![](./_assets/voting/waves-explorer-chief-transactions.png)

## 5. Голосование

Для того, чтобы проголосовать, жильцу необходимо отправить транзакцию вызова скрипта со своего аккаунта. В транзакции необходимо указать адрес dApp, имя вызываемого метода dApp, а также передаваемые в метод параметры.

Отправьте транзакцию вызова скрипта с аккаунта Алексея с помощью [REPL](/ru/building-apps/smart-contracts/tools/repl). Для этого в Waves IDE _выберите аккаунт Алексея_.

![](./_assets/voting/account-aleksei.png)

Далее в REPL выполните следующую команду:

```
broadcast(invokeScript({dApp: "3Mz2X8c4Gpf8uporPrkEHA5TH73pYDYg6vL", call: {function: "vote", args: [{type: "integer", value: 7}]} }))
```

Здесь `3Mz2X8c4Gpf8uporPrkEHA5TH73pYDYg6vL` — адрес аккаунта главы ТСЖ.

Если все прошло успешно, то вы увидите следующий результат (разверните объект `Promise` в консоли):

![](./_assets/voting/repl-success.png)

Аналогично проголосуйте с аккаунта Анны, _предварительно выбрав аккаунт Анны_ в Waves IDE:

```
broadcast(invokeScript({dApp: "3Mz2X8c4Gpf8uporPrkEHA5TH73pYDYg6vL", call: {function: "vote", args: [{type: "integer", value: 25}]} }))
```

Если вы попробуете повторно проголосовать с аккаунтов Алексея или Анны, то вы увидите ошибку:

![](./_assets/voting/repl-error-1.png)

Если вы попробуете проголосовать с аккаунта главы ТСЖ, то вы увидите ошибку:

![](./_assets/voting/repl-error-2.png)

## 6. Просмотр результатов голосования

На вкладке **Data** в Waves Explorer просмотрите содержимое хранилища данных аккаунта главы ТСЖ — в хранилище данных содержатся две записи.

![](./_assets/voting/voting-results.png)
