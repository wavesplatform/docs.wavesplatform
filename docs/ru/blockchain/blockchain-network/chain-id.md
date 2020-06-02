# Байт сети

**Байт сети** — настройка блокчейна, которая влияет на формирование [адреса](/ru/blockchain/account/address).

Связка адреса и байта сети в [бинарном формате транзакции](/ru/blockchain/binary-format/transaction-binary-format/) делает невозможным перенос транзакций между разными [сетями блокчейна](/ru/blockchain/blockchain-network/).

В качестве байта сети используется любой [ASCII](https://ru.wikipedia.org/wiki/ASCII)-символ за исключением [управляющих символов](https://ru.wikipedia.org/wiki/ASCII#Управляющие_символы). Байт сети задается настройкой `address-scheme-character` в файле конфигурации ноды.

Для [Основной сети](/ru/blockchain/blockchain-network/main-network) байтом сети является 'W' или 87 (ASCII код буквы 'W').

Для [Тестовой сети](/ru/blockchain/blockchain-network/test-network) байтом сети является 'T' или 84 (ASCII код  буквы 'T').

Для [Экспериментальной сети](/ru/blockchain/blockchain-network/stage-network) байтом сети является 'S' или 83 (ASCII код буквы 'S').
