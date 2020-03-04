# How to Receive Payments on Your Site

You can prodive your customers with the ability to make payments in WAVES, Neutrino, Ethereum or any other asset.

The easiest way is to use Waves.Exchange Payment API developed by Waves.Exchange team. Compose a payment URL in the following format:

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

For more information about Waves.Exchange Payment API and request parameters see the [Client Payment API](https://docs.waves.exchange/en/waves-exchange/waves-exchange-client-api/waves-exchange-client-payment-api) article in the Waves.Exchange documentation.
