# Методы распределения

Существуют сценари, когда нужно, чтобы активы распределялись между сторонами или между исполняемыми контрактами.

## Методы

Проблемы с рассылкой активов одновременно нескольким владельцам:

* "Тяжелый" запрос занимает время _**/asset/distribution**_.
* Уязвимость к DDOS атакам для нод, которые использут данный метод без нумерации (пагинации).

Для решения данных проблем, используйте метод **GET /assets/{assetId}/distribution/{height}** для получения распределения баланса для заданной высоты блока (до 2,000 блоков). Метод работает с пагинацией.  
Максимальное количество адресов в одном запросе регулируется параметром **limit**, который по умолчанию подразумевает 1000 адресов. Можно изменить данный параметр **distribution-address-limit** в файле **Application.Conf** вашей ноды. Вы можете включить адрес следующего запроса, чтобы получить следующую часть распределения активов, используя опциональный параметр **After** .

## Примеры

Предположим, что нужно распределить ассет `DHgwrRvVyqJsepd32YbBqUeDH4GJ1N984X8QoekjgH8J` на высоте 1352994 с лимитом - 10 адресов:

**1. Первый запрос:**

```js
http://nodes.wavesnodes.com/assets/DHgwrRvVyqJsepd32YbBqUeDH4GJ1N984X8QoekjgH8J/distribution/1352994/limit/10
```

**2. Первый ответ:**

```js
{
  "hasNext" : true,
  "lastItem" : "3PHyfTkzkaC7dv29RDCYL8XHx2EaZU8Nk2X",
  "items" : {
    "3PC4roN512iugc6xGVTTM2XkoWKEdSiiscd" : 5630,
    "3PPKF2pH4KMYgsDixjrhnWrPycVHr1Ye37V" : 3540364,
    "3PMzLSxyP9hgGNAmFgmHZ7ei9cCibbk6nYC" : 1,
    "3P59RUApvri6pS2LpCuem3ypsF8hGbTuhJW" : 5,
    "3PCW1xqHcXLb9irik43tDrYY2xuVGsdvfH3" : 4,
    "3P1y6WPuhP69FLPd4yjRhjDEaBukyJdHq2y" : 1,
    "3PHyfTkzkaC7dv29RDCYL8XHx2EaZU8Nk2X" : 1,
    "3P2Z9TJdHejPZHM4qoX6i2No2n2cXSnVPPE" : 1,
    "3PC4ybZEUecdDfDRgNPCySdjeGc9jJsJ1v7" : 1,
    "3PPfAGBSZbTka5jCL3iXmQycXdgySbCj3kK" : 5
  }
}
```

Где:

* **hasNext** - true если есть следующий запрос.
* **lastItem**: адрес последнего объекта (используйте параметра 'lastItem' чтобы получить следующую порцию).
* **items**: список адресов для распределения.

**1. Запрос на получение 10 адресов для распределения на высоте 1353075 и после адрес LastItem - 3PPfAGBSZbTka5jCL3iXmQycXdgySbCj3kK :**

```js
http://nodes.wavesnodes.com/assets/DHgwrRvVyqJsepd32YbBqUeDH4GJ1N984X8QoekjgH8J/distribution/1353075/limit/10?after=3PPfAGBSZbTka5jCL3iXmQycXdgySbCj3kK
```

**2. Ответ на запрос на получение следующий 10 адресов для распределения:**

```js
{
  "hasNext" : true,
  "lastItem" : "3P4TXRsqDJm2ZGBD5mAZjePf5agmXMeuDb9",
  "items" : {
    "3P4TXRsqDJm2ZGBD5mAZjePf5agmXMeuDb9" : 5,
    "3PHczp777nxGPj4JTocuDa8sdVohzuxk3Bc" : 1,
    "3PBhRmXaAmusZ68fR4s8fx5ej7BnjaakghA" : 5,
    "3PAFYk89L1DLhyTzV8n4pa3Tu3Ag6qJAJof" : 5,
    "3P1y6WPuhP69FLPd4yjRhjDEaBukyJdHq2y" : 1,
    "3PGa2ZKine8AEoWW6bUcQ361n4EDDk9KY3N" : 5,
    "3PChKs3ZTQ8RaosngtpkpFCGPcfQ7rJ6FkH" : 5,
    "3PHyfTkzkaC7dv29RDCYL8XHx2EaZU8Nk2X" : 1,
    "3P2Z9TJdHejPZHM4qoX6i2No2n2cXSnVPPE" : 1,
    "3PGBDioYWFZXyfMvEwwrwKMBzNLxVZ3ax7G" : 4
  }
}
```

**3. Следующие запросы для получения адресов будут аналогичными.**

`DHgwrRvVyqJsepd32YbBqUeDH4GJ1N984X8QoekjgH8J` in **after** param in _**N**_ request should be substituted with **lastItem **from _**N-1**_ response and Repeat until **hasNext == false**.

