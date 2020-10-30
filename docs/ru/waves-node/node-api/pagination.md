# Постраничная выборка

Ряд методов возвращают ограниченное количество объектов. Для получения полного списка нужно использовать постраничную выборку с использованием параметров `limit` и `after`.

## Пример

Метод `GET /assets/{assetId}/distribution/{height}/limit/{limit}` возвращает распределение указанного ассета по адресам на блокчейне.

1. Получаем первую страницу:

   ```http
   http://nodes.wavesnodes.com/assets/DHgwrRvVyqJsepd32YbBqUeDH4GJ1N984X8QoekjgH8J/distribution/2304367/limit/10
   ```

   Ответ:

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

   где:

   * `hasNext` — наличие следующей страницы.
   * `lastItem` — последний адрес на странице.
   * `items` — страница распределения ассета по адресам.

2. Получаем следующую страницу. В параметре `after` нужно указать значение из `lastItem`.

   ```
   http://nodes.wavesnodes.com/assets/DHgwrRvVyqJsepd32YbBqUeDH4GJ1N984X8QoekjgH8J/distribution/2304367/limit/10?after=3P7B2p1ULjU7tGi4ho4u9dhGEbb2TGGbo7A
   ```



   Повторяем, пока не получим в ответе значение `"hasNext": false`.

