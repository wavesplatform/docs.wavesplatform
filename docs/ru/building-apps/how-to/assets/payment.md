# Как принимать платежи на сайте

Вы можете предоставить посетителям сайта возможность вносить оплату в WAVES, Neutrino, Ethereum и других поддерживаемых ассетах.

## С помощью Client Payment API, разработанного командой Waves.Exchange

Составьте ссылку для оплаты в следующем формате:

```http
https://waves.exchange/#send/{assetId}?recipient={yourAddress}&amount={amount}&referrer={yourDomain}&strict
```

Пример:

```html
<button onclick="location.href='https:/waves.exchange/#send/DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p?recipient=3P8pGyzZL9AUuFs9YRYPDV3vm73T48ptZxs&amount=1.2&referrer=https%3A%2F%2Fexample.com&strict'">1.2 USDN</button>
```

Пользователь переходит по ссылке, входит в аккаунт Waves.Exchange и подтверждает платеж. После этого пользователь перенаправляется по ссылке `referrer`, к которой добавлен идентификатор транзакции перевода, например:

```http
https://example.com/?txId=7RqYbd9setfkW4AX49nwwpELFjvr8V8MhPRtANsUMhbt
```

Более подробная информация о Waves.Exchange Client Payment API и о параметрах запроса к API представлена в разделе [Платежный API](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-client-api/waves-exchange-client-payment-api) документации Waves.Exchange.

## С помощью виджета Pay Crypto на основе Waves Signer

Чтобы подключить криптовалюту в качестве способа оплаты в онлайн-магазине, добавьте на сайт виджет Pay Crypto.

<details><summary>Как это работает</summary>
<p>
<img src="https://server.vlzhr.top/hosted/9446628-payment.gif" border"1">
</p>
</details>

Подробное описание приведено в статье [Как подключить крипто-платежи в интернет-магазине?](https://vk.com/@wavesprotocol-kak-podkluchit-kripto-platezhi-v-internet-magazine) и в репозитории [Pay Crypto](https://github.com/vlzhr/pay-crypto-widget) на GitHub.