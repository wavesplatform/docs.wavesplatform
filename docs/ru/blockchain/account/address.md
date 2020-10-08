# Адрес

**Адрес** — атрибут [аккаунта](/ru/blockchain/account/), который генерируется из [открытого ключа](/ru/blockchain/account/#ключи-аккаунта). Адрес содержит байт сети — идентификатор [сети блокчейна](/ru/blockchain/blockchain-network/#байт-сети), поэтому адрес в сети Mainnet нельзя использовать в сети Testnet и наоборот.

Адрес представляет собой массив байтов длиной 26 (см. раздел [Бинарный формат адреса](/ru/blockchain/binary-format/address-binary-format)). В пользовательских интерфейсах адрес представлен в кодировке [base58](https://ru.wikipedia.org/wiki/Base58).

Пример адреса:

```
3PDfnPknnYrg2k2HMvkNLDb3Y1tDTtEnp9X
```

> Если адрес начинается с `3P`, то, как правило, он относится к Mainnet, а если с `3M` или `3N` — к Testnet или Stagenet.

Адрес используется для получения информации об аккаунте:
* [балансах токенов](/ru/blockchain/account/account-balance),
* записях в [хранилище данных](/ru/blockchain/account/account-data-storage),
* [псевдонимах](/ru/blockchain/account/alias),
* [прикрепленном скрипте](/ru/blockchain/account/dapp) и др.

См. примеры в разделе [Как прочитать данные из блокчейна](/ru/building-apps/how-to/basic/retrieve).

Адрес указывается:
* в [транзакциях перевода](/ru/blockchain/transaction-type/transfer-transaction), [массового перевода](/ru/blockchain/transaction-type/mass-transfer-transaction) и [лизинга](/ru/blockchain/transaction-type/lease-transaction) в качестве идентификатора получателя;
* в [транзакциях вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction).
