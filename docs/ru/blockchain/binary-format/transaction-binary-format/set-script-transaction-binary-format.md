# Бинарный формат транзакции установки скрипта

> Узнать больше о [транзакции установки скрипта](/ru/blockchain/transaction-type/set-script-transaction).

## Версия 2

Бинарный формат версии 2 соответствует protobuf-схеме [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto). Описание полей, общих для всех типов транзакций, представлено в разделе [Бинарный формат транзакции](/ru/blockchain/binary-format/transaction-binary-format/).

Версия 2 добавлена в версии ноды 1.2.0 и включается с активацией фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”. В настоящее время версии 1.2.x доступны только на [Stagenet](/ru/blockchain/blockchain-network/).

```
message SetScriptTransactionData {
    bytes script = 1;
};
```

| Поле | Размер | Описание |
| :--- | :--- | :--- |
| script | До 32&nbsp;767 байт | [Скрипт аккаунта](/ru/ride/script/script-types/account-script) или [dApp-скрипт](/ru/ride/script/script-types/dapp-script) |

## Версия 1

| № | Название поля | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Указывает что [версия транзакции](/ru/blockchain/transaction/transaction-version) является второй или выше.<br>Значение должно быть равно 0 |
| **2** | [ID типа транзакции](/ru/blockchain/transaction-type/) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 15 |
| **3** | [Версия транзакции](/ru/blockchain/transaction/transaction-version) | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 1 |
| **4** | [Байт сети](/ru/blockchain/blockchain-network/#байт-сети) | chainId | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 |87 — для Mainnet<br>84 — для Testnet<br>83 — для Stagenet |
| **5** | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| **6.1** | Флаг наличия скрипта |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — скрипт не установлен<br>1 — скрипт установлен |
| **6.2** | Длина скрипта |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | `S` | `S` = 0, если значение поля 6.1 равно 0.<br>`S` = 2, если значение поля 6.1 равно 1 |
| **6.3** | Скрипт | script | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0, если значение поля 6.1 равно 0.<br>1 <= `S` <= 32&nbsp;767`, если значение поля 6.1 равно 1 |
| **7** | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **8** | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 9 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) | proofs | См. раздел [Бинарный формат подтверждений](/ru/blockchain/binary-format/transaction-proof-binary-format) | `S` | Если массив пустой, то `S` = 3. <br>Если массив не пустой, то `S` = 3 + 2 × `N` + 64 × `N`, где `N` — количество подтверждений в массиве.<br>Максимальное количество подтверждений в массиве — 8. Размер каждого подтверждения — 64 байта |

> Поля, номера которых выделены жирным шрифтом, составляют байты тела транзакции.

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesnodes.com/transactions/info/8Nwjd2tcQWff3S9WAhBa7vLRNpNnigWqrTbahvyfMVrU) в Node API.
