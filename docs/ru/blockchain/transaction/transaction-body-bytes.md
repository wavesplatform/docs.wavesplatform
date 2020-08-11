# Байты тела транзакции

**Байты тела транзакции** — это, как правило, все поля [бинарного представления](/ru/blockchain/binary-format/transaction-binary-format/) транзакции, за исключением:
- идентификатора транзакции (он не хранится на блокчейне),
- флага версии,
- подтверждений (`proofs`) или подписи (`signature`), в зависимости от версии транзакции.

Состав байтов тела транзакции приведен в описании бинарного представления каждого типа и версии транзакции.

На основе байтов тела транзакции формируется [ID транзакции](/ru/blockchain/transaction/transaction-id) и [подпись транзакции](/ru/blockchain/transaction/transaction-signature). Правила генерации подписи и идентификатора транзакции рассмотрены в разделе [Cryptographic practical details](/en/blockchain/waves-protocol/cryptographic-practical-details#signing).

