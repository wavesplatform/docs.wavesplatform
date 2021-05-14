# How to Operate Transactions in Node REST API

> Before you start, we recommend that you read the [Transaction](/en/blockchain/transaction/) chapter.

## Step 1 (Optional). Calculate Fee

The [minimum transaction fee](/en/blockchain/transaction/transaction-fee) depends on the transaction type, whether the script is assigned to the sender's account, smart assets involved, data size, actions performed by the script being invoked, etc.

You can use the [POST /transactions/calculateFee](https://nodes.wavesnodes.com/api-docs/index.html#/transactions/calculateFee_1) operation to calculate the minimum fee. In the request body, specify the transaction data in JSON, including `type` and `senderPublicKey`. If you want to calculate the fee in the sponsored asset, specify the `feeAssetId` field in the request body. The `sender` and `fee` fields are ignored.

Request example:

```bash
curl -X POST "https://nodes-testnet.wavesnodes.com/transactions/calculateFee"\
  -H "Content-Type: application/json"\
  -d '{"type":16,"senderPublicKey":"YTuAsoF3fqvdgyuGRXJGY4WFEfDCvMwjyJdWYuiEBRS","call":{"function":"deposit","args":[]},"payment":[{"amount":300000000,"assetId":null}],"dApp":"3N9yCRmNsLK2aPStjLBne3EUiPSKvVHYgKk"}'
```

Request body:

```json
{
  "type": 16,
  "senderPublicKey": "YTuAsoF3fqvdgyuGRXJGY4WFEfDCvMwjyJdWYuiEBRS",
  "call": {
    "function": "deposit",
    "args": []
  },
  "payment": [{
     "amount": 300000000,
     "assetId": null
  }],
  "dApp": "3N9yCRmNsLK2aPStjLBne3EUiPSKvVHYgKk"
}
```

Response body:

```json
{
  "feeAssetId": null,
  "feeAmount": 500000
}
```

## Step 2. Sign Transaction

: warning: Using the Node REST API, you can sign a transaction only on behalf of the account from the [node wallet](/en/waves-node/how-to-work-with-node-wallet). If you are not the node owner or you want to sign a transaction on behalf of an account outside the node wallet, use [client libraries](/en/building-apps/waves-api-and-sdk/client-libraries/) instead. See also the [Secure Transactions Signing](/en/building-apps/#secure-transactions-signing) and [How to Create Transaction and Send It to Blockchain](/en/building-apps/how-to/basic/transaction) articles.

The following operations are used to generate a signature:

* [POST /transactions/sign](https://nodes.wavesnodes.com/api-docs/index.html#/transactions/sign) signs a transaction on behalf of the account whose address is specified in the `sender` field.
* [POST /transactions/sign/{signerAddress}](https://nodes.wavesnodes.com/api-docs/index.html#/transactions/signWithSigner_1) signs a transaction on behalf of the specified account.

> The operations are not applicable for Exchange transactions and Update Asset Info transactions.

The endpoints are private, so you should specify your [API key](/en/waves-node/node-api/api-key) in the request header. In the request body, paste the transaction data in JSON, including `type` and ` sender`. If `timestamp` is omitted, current node's time is used. `senderPublicKey` is ignored.

The operations return the signed transaction in JSON format. The response body can be passed as a request body to the [POST /debug/validate](https://nodes.wavesnodes.com/api-docs/index.html#/debug/validate) and [POST /transactions/broadcast](https://nodes.wavesnodes.com/api-docs/index.html#/transactions/signedBroadcast_1) operations (see the next steps).

Request example:

```bash
curl -X POST "http://127.0.0.1:6869/transactions/sign"\
  -H "X-API-Key: my-api-key"\
  -H "Content-Type: application/json"\
  -d '{"type":16,"sender":"3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT","call":{"function":"deposit","args":[]},"payment":[{"amount":300000000,"assetId":null}],"dApp":"3N9yCRmNsLK2aPStjLBne3EUiPSKvVHYgKk","feeAssetId":null,"fee":500000}'
```

Request body:

```json
{
  "type": 16,
  "sender": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",
  "call": {
    "function": "deposit",
    "args": []
  },
  "payment": [{
    "amount":300000000,
    "assetId":null
  }],
  "dApp": "3N9yCRmNsLK2aPStjLBne3EUiPSKvVHYgKk",
  "feeAssetId": null,
  "fee":500000
}
```

Response:

```
{
  "type": 16,
  "id": "FZp47sYFC4BXKfJqRQrcYNJQmaNiD3YSxMQk9XJtyEMN",
  "sender": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",
  "senderPublicKey": "YTuAsoF3fqvdgyuGRXJGY4WFEfDCvMwjyJdWYuiEBRS",
  "fee": 500000,
  "feeAssetId": null,
  "timestamp": 1603966204510,
  "proofs": [
    "R3QeLwQL7LFzMxd2vBGw7f9P73SgMLBPMh5FkuQLMzBtkoi6PCzhtRLMw9PpjSKVDbHgVEMPDn9BQYjEKZpeDPZ"
  ],
  "version": 1,
  "dApp": "3N9yCRmNsLK2aPStjLBne3EUiPSKvVHYgKk",
  "payment": [
    {
      "amount": 300000000,
      "assetId": null
    }
  ],
  "call": {
    "function": "deposit",
    "args": []
  }
}
```

Here are examples of requests and responses to sign transactions of different types (HTTP message body only):

<details><summary>Issue a token</summary>
<p>Request:<p>
 <pre class="language-json"><code>
{
   "type": 3,
   "sender": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",
   "fee": 100000000,
   "name": "My awesome asset",
   "quantity": 100000000000,
   "description": "Some description",
   "decimals": 8,
   "reissuable": true
}
</code></pre>

<p>Response:<p>
 <pre class="language-json"><code>
{
  "type": 3,
  "id": "3P2bbWLmTSGjMR3QndmsjoK8qfoFmF8WS3CZgBa9oXAT",
  "sender": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",
  "senderPublicKey": "YTuAsoF3fqvdgyuGRXJGY4WFEfDCvMwjyJdWYuiEBRS",
  "fee": 100000000,
  "feeAssetId": null,
  "timestamp": 1603800170840,
  "proofs": [
    "3AwKNaYkqVQiGe7t8ja4Uedu7Fej1dYxj2pWQ6cWTtSp25Txxd4amGBBbGSwGe6vpmHgcqt8sMnyVFBf3qiMRYM6"
  ],
  "signature": "3AwKNaYkqVQiGe7t8ja4Uedu7Fej1dYxj2pWQ6cWTtSp25Txxd4amGBBbGSwGe6vpmHgcqt8sMnyVFBf3qiMRYM6",
  "version": 1,
  "assetId": "3P2bbWLmTSGjMR3QndmsjoK8qfoFmF8WS3CZgBa9oXAT",
  "name": "My awesome asset",
  "quantity": 100000000000,
  "reissuable": true,
  "decimals": 8,
  "description": "Some description"
}
</code></pre>

</details>

<details><summary>Reissue a token</summary>
<p>Request:<p>
 <pre class="language-json"><code>
{
  "type": 5,
  "quantity": 22300000,
  "assetId": "3P2bbWLmTSGjMR3QndmsjoK8qfoFmF8WS3CZgBa9oXAT",
  "sender": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",
  "reissuable": true,
  "fee": 100000
}
</code></pre>

<p>Response:<p>
 <pre class="language-json"><code>
{
  "type": 5,
  "id": "GPCpzoBHLB8DwAhnHqKBGMYXtHCBTbnvcd926b71PjcM",
  "sender": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",
  "senderPublicKey": "YTuAsoF3fqvdgyuGRXJGY4WFEfDCvMwjyJdWYuiEBRS",
  "fee": 100000,
  "feeAssetId": null,
  "timestamp": 1603800874579,
  "proofs": [
    "3YpxnYvLGYycPW5xjTr2XjKYFEz4ueNBddgS8L77H1T4RjPkhyBjoXn4cdKdsLrt9covjWtAyCUyLfcRDXVYC8Nf"
  ],
  "signature": "3YpxnYvLGYycPW5xjTr2XjKYFEz4ueNBddgS8L77H1T4RjPkhyBjoXn4cdKdsLrt9covjWtAyCUyLfcRDXVYC8Nf",
  "version": 1,
  "assetId": "3P2bbWLmTSGjMR3QndmsjoK8qfoFmF8WS3CZgBa9oXAT",
  "quantity": 22300000,
  "reissuable": true
}
</code></pre>

</details>

<details><summary>Burn a token</summary>
<p>Request:<p>
 <pre class="language-json"><code>
{
  "type": 6,
  "sender": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",
  "fee": 100000,
  "assetId": "AP5dp4LsmdU7dKHDcgm6kcWmeaqzWi2pXyemrn4yTzfo",
  "amount": 50000
}
</code></pre>

<p>Response:<p>
 <pre class="language-json"><code>
{
  "type": 6,
  "id": "DucNGQJBRpXenfSgarCkR3DUYuQj5MMr1TW1ABfCUc3t",
  "sender": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",
  "senderPublicKey": "YTuAsoF3fqvdgyuGRXJGY4WFEfDCvMwjyJdWYuiEBRS",
  "fee": 100000,
  "feeAssetId": null,
  "timestamp": 1603801004117,
  "proofs": [
    "4rFoAFvkpijj2kqSaxCmiYFkR1WNCTrN8ptH1aZpQSTCq8bTcHUNTFvpkfPKcpERiGp1jEW7MfxG3N3Bog48GLVN"
  ],
  "signature": "4rFoAFvkpijj2kqSaxCmiYFkR1WNCTrN8ptH1aZpQSTCq8bTcHUNTFvpkfPKcpERiGp1jEW7MfxG3N3Bog48GLVN",
  "version": 1,
  "assetId": "AP5dp4LsmdU7dKHDcgm6kcWmeaqzWi2pXyemrn4yTzfo",
  "amount": 50000
}
</code></pre>
</details>

<details><summary>Transfer a token</summary>
<p>Request:<p>
 <pre class="language-json"><code>
{
  "type": 4,
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "sender": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",
  "recipient": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7",
  "fee": 100000,
  "amount": 55000000,
  "attachment": "BJa6cfyGUmzBFTj3vvvaew"
}
</code></pre>

<p>Response:<p>
 <pre class="language-json"><code>
{
  "type": 4,
  "id": "GGwwGp1LcjeTVCxbMG8moWnoWcEk2cEaXGnModccTqNK",
  "sender": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",
  "senderPublicKey": "YTuAsoF3fqvdgyuGRXJGY4WFEfDCvMwjyJdWYuiEBRS",
  "fee": 100000,
  "feeAssetId": null,
  "timestamp": 1603801131797,
  "proofs": [
    "3ZirDPKF5kiVvtP4vLyDrmuGch1QU6jv5agqHAV37Efzsim992Y9DBRK7UZnaD4TB34JTGn4xPSCJ8c1dUBXSYiZ"
  ],
  "signature": "3ZirDPKF5kiVvtP4vLyDrmuGch1QU6jv5agqHAV37Efzsim992Y9DBRK7UZnaD4TB34JTGn4xPSCJ8c1dUBXSYiZ",
  "version": 1,
  "recipient": "3Mx2afTZ2KbRrLNbytyzTtXukZvqEB8SkW7",
  "assetId": "E9yZC4cVhCDfbjFJCc9CqkAtkoFy5KaCe64iaxHM2adG",
  "feeAsset": null,
  "amount": 55000000,
  "attachment": "BJa6cfyGUmzBFTj3vvvaew"
}
</code></pre>

</details>

<details><summary>Mass transfer</summary>
<p>Request:<p>
 <pre class="language-json"><code>
{
  "type": 11,
  "sender": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",
  "fee" : 200000,
  "assetId" : null,
  "attachment" : "59QuUcqP6p",
  "transfers" : [ {
    "recipient" : "3NCpyPuNzUaB7LFS4KBzwzWVnXmjur582oy",
    "amount" : 100000000
  }, {
    "recipient" : "3N4RfbJ3CH8x77UNd61ufSiwg1BHBHoec74",
    "amount" : 200000000
  } ]
}
</code></pre>

<p>Response:<p>
 <pre class="language-json"><code>
{
  "type": 11,
  "id": "7M3ckLwiyuiJNsfhsxCahmRt9Q1nrsgP2MMUqQL2YSpu",
  "sender": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",
  "senderPublicKey": "YTuAsoF3fqvdgyuGRXJGY4WFEfDCvMwjyJdWYuiEBRS",
  "fee": 200000,
  "feeAssetId": null,
  "timestamp": 1603801437593,
  "proofs": [
    "STaYrxE5Wk83XtumYGPu7yfbbAHm1R76w9PjyPjNBV9vXJR1h93oTHEP8Z9CLeTYUNZpLMBae3mmPicxyckUwf6"
  ],
  "version": 1,
  "assetId": null,
  "attachment": "59QuUcqP6p",
  "transferCount": 2,
  "totalAmount": 300000000,
  "transfers": [
    {
      "recipient": "3NCpyPuNzUaB7LFS4KBzwzWVnXmjur582oy",
      "amount": 100000000
    },
    {
      "recipient": "3N4RfbJ3CH8x77UNd61ufSiwg1BHBHoec74",
      "amount": 200000000
    }
  ]
}
</code></pre>
</details>


<details><summary>Lease</summary>
<p>Request:<p>
 <pre class="language-json"><code>
{
  "type": 8,
  "sender": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",
  "fee": 100000,
  "amount": 500000000,
  "recipient": "3MsiqWCW2b42CiCpz9mjYXXJPZ1YN4bBsex"
}
</code></pre>
<p>Response:<p>
<pre class="language-json"><code>
{
  "type": 8,
  "id": "EStUvNzQC2tKZrZoAcgLteq8zcABYMHXjTBjs46L9WdT",
  "sender": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",
  "senderPublicKey": "YTuAsoF3fqvdgyuGRXJGY4WFEfDCvMwjyJdWYuiEBRS",
  "fee": 100000,
  "feeAssetId": null,
  "timestamp": 1603794794973,
  "proofs": [
    "2SfpDto35Ta78jfRCKdLpYXpVEv8FVTXvTpjhyqHvd6CJS2SBZ7Jxjw6a2Ty1SysaFcwY9rFwHYK9vWjtUz62fDT"
  ],
  "signature": "2SfpDto35Ta78jfRCKdLpYXpVEv8FVTXvTpjhyqHvd6CJS2SBZ7Jxjw6a2Ty1SysaFcwY9rFwHYK9vWjtUz62fDT",
  "version": 1,
  "amount": 500000000,
  "recipient": "3MsiqWCW2b42CiCpz9mjYXXJPZ1YN4bBsex"
}
</code></pre>
</details>

<details><summary>Lease cancel</summary>
<p>Request:<p>
<pre class="language-json"><code>
{
  "type": 9,
  "sender": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",
  "fee": 100000,
  "leaseId": "EStUvNzQC2tKZrZoAcgLteq8zcABYMHXjTBjs46L9WdT"
}
</code></pre>

<p>Response:<p>
 <pre class="language-json"><code>
{
  "type": 9,
  "id": "2pSaHnJJfg4Nbkas9bRQR7AAtPUJSAwFfRppemkhuhh2",
  "sender": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",
  "senderPublicKey": "YTuAsoF3fqvdgyuGRXJGY4WFEfDCvMwjyJdWYuiEBRS",
  "fee": 100000,
  "feeAssetId": null,
  "timestamp": 1603795159001,
  "proofs": [
    "xEhNg4HEYLBr9k3mM8iEhKeyD7F7uHVvr5zusNzXJVoLa3d9R1Dn9trjaXvjGLsPVnpQe9pTDtxCennvMZ12Gfk"
  ],
  "signature": "xEhNg4HEYLBr9k3mM8iEhKeyD7F7uHVvr5zusNzXJVoLa3d9R1Dn9trjaXvjGLsPVnpQe9pTDtxCennvMZ12Gfk",
  "version": 1,
  "leaseId": "EStUvNzQC2tKZrZoAcgLteq8zcABYMHXjTBjs46L9WdT"
}
</code></pre>
</details>


<details><summary>Create an alias</summary>
<p>Request:<p>
<pre class="language-json"><code>
{
  "type": 10,
  "sender": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",
  "fee": 100000,
  "alias": "my-interesting-name"
}
</code></pre>

<p>Response:</p>
<pre class="language-json"><code>
{
  "type": 10,
  "id": "GWdGQtoDxQvKS3WDAvYUVtA6pdvt38HUBz6tSq7M5JVp",
  "sender": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",
  "senderPublicKey": "YTuAsoF3fqvdgyuGRXJGY4WFEfDCvMwjyJdWYuiEBRS",
  "fee": 100000,
  "feeAssetId": null,
  "timestamp": 1603794108196,
  "proofs": [
    "4UWDu4eAqMVQT2a4UPYuFNr1ipEWS9ccfJNCsM2Wf9oapsZRS6fYm95BD17h9stKPLACaNSQ7eBEvFQL8TqdAnGc"
  ],
  "signature": "4UWDu4eAqMVQT2a4UPYuFNr1ipEWS9ccfJNCsM2Wf9oapsZRS6fYm95BD17h9stKPLACaNSQ7eBEvFQL8TqdAnGc",
  "version": 1,
  "alias": "my-interesting-name"
}
</code></pre>
</details>

## Step 3 (optional). Pre-validate Transaction

After signing, you can immediately send the transaction to the blockchain. However, after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”, it is possible that the transaction fails but the sender is still charged a fee (for details, see the [Transaction Validation](/en/blockchain/transaction/transaction-validation) article).
* An Invoke Script transaction: in case of a dApp script execution error after the complexity of performed computations exceeded the threshold for saving failed transactions.
* An Invoke Script Transaction or an Exchange transaction with a smart asset involved: in case the asset script denies the transaction.

For such transactions, pre-validation can help to reduce unnecessary costs. You should not pre-validate transactions of other types, as well as transactions in which smart assets are not used and the complexity of the callable function is less than the threshold.

Pre-validation is the check whether the transaction is successful under the current state of the blockchain. By the time of broadcast the state may change, so the transaction may fail even if pre-validation is passed.

To pre-validate the transaction, use the public operation [POST /debug/validate](https://nodes.wavesnodes.com/api-docs/index.html#/debug/validate). In the request body, paste the signed transaction in JSON, for example, the response body from step 2.

The `valid` field of the response contains the result of transaction validation. If the validation failed, the `error` field indicates the reason.


<details><summary>Request example</summary>
<pre class="language-bash"><code>
curl -X POST "https://nodes-testnet.wavesnodes.com/debug/validate"\
  -H "Content-Type: application/json"\
  -d '{\
  "type":16,\
  "id":"FZp47sYFC4BXKfJqRQrcYNJQmaNiD3YSxMQk9XJtyEMN",\
  "sender":"3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",\
  "senderPublicKey":"YTuAsoF3fqvdgyuGRXJGY4WFEfDCvMwjyJdWYuiEBRS",\
  "fee":500000,\
  "feeAssetId":null,\
  "timestamp":1603966204510,\
  "proofs":["R3QeLwQL7LFzMxd2vBGw7f9P73SgMLBPMh5FkuQLMzBtkoi6PCzhtRLMw9PpjSKVDbHgVEMPDn9BQYjEKZpeDPZ"],\
  "version":1,\
  "dApp":"3N9yCRmNsLK2aPStjLBne3EUiPSKvVHYgKk",\
  "payment":[{"amount":300000000,"assetId":null}],\
  "call":{"function":"deposit","args":[]}\
  }'
</code></pre>
</details>
<details><summary>Response example in case of successful validation</summary>
 <pre class="language-json"><code>
{
  "valid": true,
  "validationTime": 10,
  "trace": [
    {
      "dApp": "3N9yCRmNsLK2aPStjLBne3EUiPSKvVHYgKk",
      "function": "deposit",
      "args": [],
      "result": {
        "actions": [
          {
            "key": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",
            "value": 600000000,
            "type": "dataItem"
          }
        ],
        "vars": [
          {
            "name": "i",
            "value": "Invocation(\n\tpayments = [AttachedPayment(\n\tamount = 300000000\n\tassetId = Unit\n)]\n\tcallerPublicKey = base58'YTuAsoF3fqvdgyuGRXJGY4WFEfDCvMwjyJdWYuiEBRS'\n\tfeeAssetId = Unit\n\ttransactionId = base58'FZp47sYFC4BXKfJqRQrcYNJQmaNiD3YSxMQk9XJtyEMN'\n\tcaller = Address(\n\t\tbytes = base58'3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT'\n\t)\n\tfee = 500000\n)"
          },
          {
            "name": "pmt",
            "value": "AttachedPayment(\n\tamount = 300000000\n\tassetId = Unit\n)"
          },
          {
            "name": "@p",
            "value": "true"
          },
          {
            "name": "currentKey",
            "value": "3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT"
          },
          {
            "name": "this",
            "value": "Address(\n\tbytes = base58'3N9yCRmNsLK2aPStjLBne3EUiPSKvVHYgKk'\n)"
          },
          {
            "name": "$match0",
            "value": "300000000"
          },
          {
            "name": "a",
            "value": "300000000"
          },
          {
            "name": "currentAmount",
            "value": "300000000"
          },
          {
            "name": "newAmount",
            "value": "600000000"
          }
        ]
      }
    }
  ]
}
</code></pre>
</details>

<details><summary>Response example in case of error</summary>
 <pre class="language-json"><code>
{
  "valid": false,
  "validationTime": 13,
  "trace": [
    {
      "dApp": "3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx",
      "function": "finalizeCurrentPrice",
      "args": [
        "3349803",
        "4do4rns1wYViDz2ebFXVZ31Bc2gRi8jT9TqLaq7HZGNWQDetCoUjZwcrRbbaUU7j5mJaKXx9uQj2BpG6BGD6mtVK",
        "3349803",
        "4jnxoCVKPpNyQD6zqSDz9HmYQyyxvCUdeq5rY1CdiEnh2MkHtUoNJuRDMDc56R2AUaTPdDgzSYsUWAtRpQm78f36",
        "3349803",
        "49bMpgqbjLGwf4kszH11xyCiztoeTKWWeo22sdizwrgcj1dYKXextzrRGfVWV2DpEhKmKxfSHyZ7RhB2eCDgjCMu",
        "3349803",
        "4cCRstr5c69gT7otZvVgzGDRwzi2MfGFusKmUaUsATw65qjJz7hbDbJssQzEhxfHxDQkhY5Sn1oJiMmRCahxfVDz",
        "3349803",
        "65EqRPVDQzCd7xgZVZhEHgJGb6U1FYacSA3EwrgVtLovNNXak7wVRg5E79UxJYEYkL3gyT1Q15CeYWUc3tJq8bfg"
      ],
      "error": {
        "type": "Account",
        "vars": [
          {
            "name": "this",
            "value": "Address(\n\tbytes = base58'3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx'\n)"
          },
          {
            "name": "@value",
            "value": "false"
          },
          {
            "name": "isBlocked",
            "value": "false"
          },
          {
            "name": "height",
            "value": "1239024"
          },
          {
            "name": "@alternative",
            "value": "0"
          },
          {
            "name": "@b",
            "value": "0"
          },
          {
            "name": "@p",
            "value": "true"
          },
          {
            "name": "@value",
            "value": "57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv,57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv,57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv,57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv,57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv"
          },
          {
            "name": "pubKeyOracles",
            "value": "57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv,57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv,57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv,57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv,57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv"
          },
          {
            "name": "pubKeyOraclesList",
            "value": "[\"57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv\", \"57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv\", \"57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv\", \"57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv\", \"57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv\"]"
          },
          {
            "name": "i",
            "value": "Invocation(\n\tpayments = []\n\tcallerPublicKey = base58'BvJEWY79uQEFetuyiZAF5U4yjPioMj9J6ZrF9uTNfe3E'\n\tfeeAssetId = Unit\n\ttransactionId = base58'2c8gRgHf6jYAUBNnPhXEBUePcoCJPujAmxzaxGNzQv6F'\n\tcaller = Address(\n\t\tbytes = base58'3Mw48B85LvkBUhhDDmUvLhF9koAzfsPekDb'\n\t)\n\tfee = 500000\n)"
          },
          {
            "name": "@a",
            "value": "57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv"
          },
          {
            "name": "@b",
            "value": "BvJEWY79uQEFetuyiZAF5U4yjPioMj9J6ZrF9uTNfe3E"
          },
          {
            "name": "@p",
            "value": "false"
          }
        ],
        "reason": "Out of turn finalization: 1239024 block should be finalize by 57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv"
      }
    }
  ],
  "error": "Error while executing account-script: Out of turn finalization: 1239024 block should be finalize by 57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv"
}
</code></pre>
</details>

## Step 4. Broadcast Transaction

To send a transaction to the blockchain, use the public operation [POST /transactions/broadcast](https://nodes.wavesnodes.com/api-docs/index.html#/transactions/signedBroadcast_1). In the request body, paste the signed transaction in JSON, for example, the response body from step 2.

<details><summary>Request example</summary>
 <pre class="language-bash"><code>
curl -X POST "https://nodes-testnet.wavesnodes.com/transactions/broadcast"\
  -H "Content-Type: application/json"\
  -d '{\
  "type":16,\
  "id":"FZp47sYFC4BXKfJqRQrcYNJQmaNiD3YSxMQk9XJtyEMN",\
  "sender":"3NAM4ijPv7rwFBqcshqv41CVhKoSK22nEoT",\
  "senderPublicKey":"YTuAsoF3fqvdgyuGRXJGY4WFEfDCvMwjyJdWYuiEBRS",\
  "fee":500000,\
  "feeAssetId":null,\
  "timestamp":1603966204510,\
  "proofs":["R3QeLwQL7LFzMxd2vBGw7f9P73SgMLBPMh5FkuQLMzBtkoi6PCzhtRLMw9PpjSKVDbHgVEMPDn9BQYjEKZpeDPZ"],\
  "version":1,\
  "dApp":"3N9yCRmNsLK2aPStjLBne3EUiPSKvVHYgKk",\
  "payment":[{"amount":300000000,"assetId":null}],\
  "call":{"function":"deposit","args":[]}\
  }'
</code></pre>
</details>

HTTP response codes:

- 200: the transaction is added to the UTX pool.
- 4xx or 501: the transaction is rejected.
- 500 or 503: server error without specifying whether a transaction is added to the UTX pool or not.

In the last case, check the transaction status (see the next step) or broadcast the same transaction (with the same ID) again. If you create and sign a new transaction with a different `timestamp` (default value is the current time), such a transaction has a different ID; so it may turn out that both transactions are executed, for example, two identical transfers to the same recipient.

In case of success, the broadcast operation returns a JSON representation of the transaction with all parameters, including optional ones (in fact, the response body can match the request body).

> For the node to accept transactions using the `POST /transactions/broadcast` operation, the node must be connected to at least the number of peers specified in the `waves.rest-api.minimum-peers` parameter (3 by default), see the [REST API Settings](/en/waves-node/node-configuration#rest-api-settings) section.

## Step 5. Check Transaction Status

To check if a transaction is added to the blockchain, use one of the public operations:
* [GET /transaction/status](https://nodes.wavesnodes.com/api-docs/index.html#/transactions/status_3) for check the status of one or more transactions.
* [POST /transaction/status](https://nodes.wavesnodes.com/api-docs/index.html#/transactions/status_4) for a large number of transactions.

Request example:

```
curl -X GET "https://nodes-testnet.wavesnodes.com/transactions/status?id=FZp47sYFC4BXKfJqRQrcYNJQmaNiD3YSxMQk9XJtyEMN"
```

Response example:

```json
[
  {
    "status": "confirmed",
    "height": 1241807,
    "confirmations": 1,
    "applicationStatus": "succeeded",
    "id": "FZp47sYFC4BXKfJqRQrcYNJQmaNiD3YSxMQk9XJtyEMN"
  }
]
```

where:

- `status` is the transaction status:
   - `not_found`: transaction not found,
   - `unconfirmed`: transaction is in the UTX pool,
   - `confirmed`: transaction is added to a block or microblock.
- `height` is the sequential number of the block that contains the transaction.
- `confirmations` is the number of blocks added on top of the one that contains the transaction, i.e. the current blockchain height minus the block height.
- `applicationStatus` indicates the execution result (see the [Transaction Validation](/en/blockchain/transaction/transaction-validation) article for details):
   - `succeeded`: the transaction is successful,
   - `script_execution_failed`: the dApp script or an asset script failed. Such a transaction doesn't entail changes in balances (other than charging a fee) and account data storages.

Rarely the last block or microblock may be rolled back. Therefore, if you have dependent transactions, better wait for 1–2 confirmations and only then broadcast the next transaction.
