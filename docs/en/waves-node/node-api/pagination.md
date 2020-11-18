# Pagination

Some operations return a limited number of objects. To get a complete list of objects, obtain them page by page using the `limit` and `after` parameters.

## Example 1: Asset Distribution

The [GET /assets/{assetId}/distribution/{height}/limit/{limit}](https://nodes.wavesnodes.com/api-docs/index.html#/assets/balanceDistributionAtHeight_1) operation returns the distribution of the specified asset by addresses on the blockchain.

1. Obtain the first page:

   ```http
   http://nodes.wavesnodes.com/assets/DHgwrRvVyqJsepd32YbBqUeDH4GJ1N984X8QoekjgH8J/distribution/2304367/limit/10
   ```

   Response body:

   ```json
   {
      "hasNext":true,
      "lastItem":"3P7B2p1ULjU7tGi4ho4u9dhGEbb2TGGbo7A",
      "items": {
         "3P9qYJA5RxiQLz3EPY6UaFaQ3rg4p1pdHRU":9,
         "3P7T1BigJaTwN6ywymvXWGHuQGF3usWYWYz":9064,
         "3P7B2p1ULjU7tGi4ho4u9dhGEbb2TGGbo7A":7836,
         "3P76TmRjfjhdN9KEmwSnzQHpLrMRuf1qV29":21172,
         "3PNUaXNaukMQUmCW6hjoe6A8riWmuGbenog":195,
         "3PJaDyprvekvPXPuAtxrapacuDJopgJRaU3":121376,
         "3P9o3ZYwtHkaU1KxsKkFjJqJKS3dLHLC9oF":120845,
         "3P5YD9kDiNMLAYnXdM49dPkfm6eqZHcoEXH":13,
         "3PL4heGXQ64hKzQAbAgR1Br9YuZTDzEAUoN":8,
         "3P5Q1B4qtBBynGg7dQextkwzEVLGQLJ7v9M":129911
      }
   }
   ```

   where:

   * `hasNext` indicates that the next page exists.
   * `lastItem` is the last address on the current page.
   * `items` is the page of the distribution of the asset by addresses.

2. Obtain the next page: specify the `lastItem` value as the `after` request parameter.

   ```
   http://nodes.wavesnodes.com/assets/DHgwrRvVyqJsepd32YbBqUeDH4GJ1N984X8QoekjgH8J/distribution/2304367/limit/10?after=3P7B2p1ULjU7tGi4ho4u9dhGEbb2TGGbo7A
   ```

   Repeat until you get `"hasNext": false`.

## Example 2: List of Transactions by Address

The [GET /transactions​/address​/{address}​/limit​/{limit}](https://nodes.wavesnodes.com/api-docs/index.html#/transactions/addressLimit_1) operation returns a list of transactions where the specified address is involved.

1. Obtain the first page:

   ```http
   https://nodes.wavesnodes.com/transactions/address/3P9HYzM3bXsCNxwFqUdGuVehBHsST2j1Krw/limit/5
   ```

   Response body:

   ```json
   [
     [
       {
         "type": 13,
         "id": "BzCAPT4HPVHuiReKwAmk89KKEEmpoJ62LcgjSAYHnrgM",
         "sender": "3P9HYzM3bXsCNxwFqUdGuVehBHsST2j1Krw",
         "senderPublicKey": "DSXU8zNGq52tbWodp8TxYJzmkzWdQSUzPnXTsTi3ns8v",
         "fee": 1000000,
         "feeAssetId": null,
         "timestamp": 1599462273720,
         "proofs": [
           "L3kXwHTV4z5GFcf95JXGoYyhmo9sFf3T4X7vh1LeexM7poZNEVjbJ6PKpGnE6eMUdc42Zmr6yJQeuGkuzKwtHsP"
         ],
         "version": 2,
         "chainId": 87,
         "script": "base64:AAIEAAAAAAAAAAQIAhIAAAAAAAAAAAEAAAABaQEAAAAEY2FsbAAAAAAEAAAAB2Fzc2V0SWQBAAAAIMX6SSCEk9eQw75VOnmVi9MynhAS+sJMwHTrHS6ZbNa3BAAAAAlyZWNpcGllbnQBAAAAGgFUi4X8guYFA6UaWalwnv2bzYA6OOF4lbcpCQAETAAAAAIJAQAAAA5TY3JpcHRUcmFuc2ZlcgAAAAMJAQAAAAdBZGRyZXNzAAAAAQUAAAAJcmVjaXBpZW50AAAAAAAAAAlgBQAAAAdhc3NldElkCQAETAAAAAIJAQAAAARCdXJuAAAAAgUAAAAHYXNzZXRJZAAAAAAAAAERcAUAAAADbmlsAAAAAFRunt0=",
         "applicationStatus": "succeeded",
         "height": 2230266
       },
       {
         "type": 11,
         "id": "5m6jYwqoHt1fum3te5YmYFMFqWoLsBsWFow9YKANo9jS",
         "sender": "3P3622MuSQQoYnZJ8R8bvsjpgZ559ij3nsJ",
         "senderPublicKey": "AmQNrNgUEhmeRbt1sdnpbAqD2fqHwEBGoinB3g3NxucD",
         "fee": 5100000,
         "feeAssetId": null,
         "timestamp": 1594142832923,
         "proofs": [
           "3y2a5w55XgiVDVb97bd14hGrRX4oM1QLNhxa5BVB24gQczg9RFp3rsj1UxEjcRx7M3Q28B4K8S8xxmHyN4mhKbKb"
         ],
         "version": 1,
         "assetId": "81HnQ1PWViWUiv39NGkPjbfDehW1edjeJe6XxVhw1TPZ",
         "attachment": "2nv6Fav8HoKJrNZUb1aHuuMBiprjN9xkvBTWSB1UPcunGB3B83d9QQoeUiu7qJALFpxGmT7RuZAsFp6eTN2H3ZiWmruhQEKveeXVXfhP6jvZ6wSPhPvkJ7yPxbPaTauQZT3v4t1J8SU27VqNKKGpALDvDJcKVn1hr52HjkxXreTS4s",
         "transferCount": 100,
         "totalAmount": 10000,
         "transfers": [
           {
             "recipient": "3P9HYzM3bXsCNxwFqUdGuVehBHsST2j1Krw",
             "amount": 100
           }
         ],
         "height": 2140380
       },
       {
         "type": 4,
         "id": "8iXxao22vjAiRaCVcNGwXTK3TT8R1KpzeTNrHGeMUi1x",
         "sender": "3PAZr4pyUPSAzLu2WAbqr1A4EZn3nHfFb6U",
         "senderPublicKey": "39SHAVwihVrQ5oDxVbV3ipB6WnCrEhqRQdSWi2DRJnR9",
         "fee": 100000,
         "feeAssetId": null,
         "timestamp": 1594140332612,
         "proofs": [
           "7QmigQviTJvSfYMLjVz2kCanF9FvyvwyEpUgzPGuo9hNCVbLJ9W3zuu8sxUk56GXTCRjv4qFuP23sGSoxfSt9T4"
         ],
         "version": 2,
         "recipient": "3P9HYzM3bXsCNxwFqUdGuVehBHsST2j1Krw",
         "assetId": "GS5RfWDS8ytVnxqr7M2pnqeFuu7BpSwGnADTcw23FvbZ",
         "feeAsset": null,
         "amount": 1,
         "attachment": "",
         "height": 2140339
       },
       {
         "type": 4,
         "id": "Ew9DmzDgfZMfE5pLns7nrBDDw7ak4TqW3aMaetv5YTtQ",
         "sender": "3P5Ky57bFcE4bqNmcpRYsuNnzKNpHnuT6Ai",
         "senderPublicKey": "6FFRhRZQbt8YTXTjcL71CYq4Cx34gvAVdyFfsmL1Nw3q",
         "fee": 100000,
         "feeAssetId": null,
         "timestamp": 1578159810305,
         "proofs": [
           "4inRodLQNASwAZmQWfg9wFcrafBxt8XGjsqvuu651UqVyvNK1RfvD1kzjtP3gqRsTaN5tRFReM2UsDHtq8QL83po"
         ],
         "version": 2,
         "recipient": "3P9HYzM3bXsCNxwFqUdGuVehBHsST2j1Krw",
         "assetId": "8Yw4QmskrQauQeNjgh2fTQ4swmkNm85GTQzdHEf6QdUU",
         "feeAsset": null,
         "amount": 550000000,
         "attachment": "3cdoipiKbLBweYBgvay72xUe8WjA24XCcyyfxPmJimVgtvSUfecpFhFe2GdotgUwNhHKT6dqAHcp8FeESFpqPv3RoxcSR62Bv3LG",
         "height": 1869844
       },
       {
         "type": 13,
         "id": "E2Thrzgh922KwcxrgAedVQxQiTRQsKe1YXtXRJgjG4J7",
         "sender": "3P9HYzM3bXsCNxwFqUdGuVehBHsST2j1Krw",
         "senderPublicKey": "DSXU8zNGq52tbWodp8TxYJzmkzWdQSUzPnXTsTi3ns8v",
         "fee": 1400000,
         "feeAssetId": null,
         "timestamp": 1575384877523,
         "proofs": [
           "4F3soipeZTHqFwmC8msLQgmzBhv1mjMMzHHPFb44fYnYdVgH1ReMHjimaLWPjKRRwL8UUwCczsAe3HKjbkcEuXvz"
         ],
         "version": 1,
         "script": null,
         "chainId": 87,
         "height": 1823004
       }
     ]
   ]
   ```

2. Obtain the next page: specify the `id` of the last obtained transaction as the `after` request parameter.

   ```
   https://nodes.wavesnodes.com/transactions/address/3P9HYzM3bXsCNxwFqUdGuVehBHsST2j1Krw/limit/5?after=E2Thrzgh922KwcxrgAedVQxQiTRQsKe1YXtXRJgjG4J7
   ```

   Repeat until you get an empty array.
