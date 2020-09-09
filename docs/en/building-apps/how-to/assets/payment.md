# How to Receive Payments on Your Site

You can provide your customers with the ability to make payments in WAVES, Neutrino, Ethereum or any other supported asset.

## Using Client Payment API Developed by Waves.Exchange Team

Compose a payment URL in the following format:

```http
https://waves.exchange/#send/{assetId}?recipient={yourAddress}&amount={amount}&referrer={yourDomain}&strict
```

Example:

```html
<button onclick="location.href='https:/waves.exchange/#send/DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p?recipient=3P8pGyzZL9AUuFs9YRYPDV3vm73T48ptZxs&amount=1.2&referrer=https%3A%2F%2Fexample.com&strict'">1.2 USDN</button>
```

The user follows this link, logs in on the Waves.Exchange site and confirms payment. After that user is redirected to `referrer` URL appended with transfer transaction ID, for example:

```http
https://example.com/?txId=7RqYbd9setfkW4AX49nwwpELFjvr8V8MhPRtANsUMhbt
```

For more information about Waves.Exchange Client Payment API and request parameters see the [Client Payment API](https://docs.waves.exchange/en/waves-exchange/waves-exchange-client-api/waves-exchange-client-payment-api) article in the Waves.Exchange documentation.

## Using Pay Crypto Widget Powered by Waves Signer

Add Pay Crypto widget to integrate crypto payment option to your site.

<details><summary>How it works</summary>
<img src="https://server.vlzhr.top/hosted/9446628-payment.gif" border"1">
</details>

See detailed explanations in the [How to add crypto payments to your online store?](https://medium.com/wavesprotocol/how-to-add-crypto-payments-to-your-online-store-b528b739cdfb) article and in the [Pay Crypto](https://github.com/vlzhr/pay-crypto-widget) GitHub repository.
