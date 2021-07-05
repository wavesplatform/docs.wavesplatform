# SponsorFeeTransaction

Структура [транзакции спонсирования](/ru/blockchain/transaction-type/sponsor-fee-transaction).

## Конструктор

``` ride
SponsorFeeTransaction(assetId: ByteVector, minSponsoredAssetFee: Int|Unit, id: ByteVector, fee: Int, timestamp: Int, version: Int, sender: Address, senderPublicKey: ByteVector, bodyBytes: ByteVector, proofs: List[ByteVector])
```

Поля структуры

| № | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/ru/ride/data-types/byte-vector)) | [Идентификатор токена](/ru/blockchain/token/token-id) |
| 2 | minSponsoredAssetFee | [Int](/ru/ride/data-types/int)&#124;[Unit](/ru/ride/data-types/unit) | Количество спонсорского ассета, эквивалентное 0,001 WAVES (100 000 WAVELET). Целое число, выраженное в [атомарных единицах](/ru/blockchain/token/#atomic-unit) («копейках») ассета.<br>`unit` – отмена спонсирования |
| 3 | id | [ByteVector](/ru/ride/data-types/byte-vector) | ID транзакции |
| 4 | fee | [Int](/ru/ride/data-types/int) | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) |
| 5 | timestamp | [Int](/ru/ride/data-types/int) | Временная метка транзакции |
| 6 | version | [Int](/ru/ride/data-types/int) | Версия транзакции |
| 7 | sender | [Address](/ru/ride/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) отправителя транзакции |
| 8 | senderPublicKey | [ByteVector](/ru/ride/data-types/byte-vector) | Открытый ключ отправителя транзакции |
| 9 | bodyBytes | [ByteVector](/ru/ride/data-types/byte-vector) | [Байты тела транзакции](/ru/blockchain/glossary#б) |
| 10 | proofs | [List](/ru/ride/data-types/list)[[ByteVector](/ru/ride/data-types/byte-vector)] | [Подтверждения](/ru/blockchain/transaction/transaction-proof) |
