# Peers

## POST /peers/connect

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Подключиться к пиру.

**Запрос:**

```js
{
	"host":"127.0.0.1",
	"port":"9084"
}
```

## GET /peers/connected
![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Возвращает список всех пиров подключенных к ноде в данный момент.

**Пример ответа в JSON:**

```js
{
  "peers": [
    {
      "address": "52.51.92.182/52.51.92.182:6863",
      "declaredAddress": "N/A",
      "peerName": "zx 182",
      "peerNonce": 183759
    },
    {
      "address": "ec2-52-28-66-217.eu-central-1.compute.amazonaws.com/52.28.66.217:6863",
      "declaredAddress": "N/A",
      "peerName": "zx 217",
      "peerNonce": 1021800
    }
  ]
}
```

## GET /peers/blacklisted

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Возвращает список всех пиров, которые находятся в чёрном списке.

## GET /peers/all

![master](https://img.shields.io/badge/MAINNET-available-4bc51d.svg)

Возвращает список всех пиров, которые не находятся в чёрном списке и имеют публично доступный адрес.
