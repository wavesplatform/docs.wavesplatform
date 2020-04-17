# Бинарный формат транзакции

> Подробнее о [транзакции](/ru/blockchain/transaction).

Транзакции хранятся в блокчейне в бинарном формате (байтовом представлении). [Расширения](/ru/waves-node/extensions) ноды, в частности [gRPC-сервер](/ru/waves-node/extensions/grpc-server), могут работать непосредственно с данными в бинарном формате.

Подпись транзакции и ее идентификатор также формируются на основе бинарного формата, а именно байтов тела транзакции — всех полей, за исключением идентификатора, подписи, подтверждений. Правила генерации подписи и идентификатора транзакции рассмотрены в разделе [Cryptographic practical details](en/blockchain/waves-protocol/cryptographic-practical-details#signing).

Для всех строк используется кодировка UTF-8.

### Protobuf-схема

Бинарный формат старших версий транзакции соответствует protobuf-схеме [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto). Использование Protobuf облегчает разработку клиентских библиотек для блокчейна Waves, поскольку позволяет автоматически сериализовать транзакцию и тем самым упрощает генерацию подписи. См. [Protocol Buffers Developer Guide](https://developers.google.com/protocol-buffers/docs/overview?hl=ru).

Protobuf-схема для бинарного формата добавлена в версии ноды 1.2.0 и включается с активацией фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”. В настоящее время версии 1.2.x доступны только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

```protobuf
message SignedTransaction {
    Transaction transaction = 1;
    repeated bytes proofs = 2;
}

message Transaction {
    int32 chain_id = 1;
    bytes sender_public_key = 2;
    Amount fee = 3;
    int64 timestamp = 4;
    int32 version = 5;

    oneof data {
        GenesisTransactionData genesis = 101;
        PaymentTransactionData payment = 102;
        IssueTransactionData issue = 103;
        TransferTransactionData transfer = 104;
        ReissueTransactionData reissue = 105;
        BurnTransactionData burn = 106;
        ExchangeTransactionData exchange = 107;
        LeaseTransactionData lease = 108;
        LeaseCancelTransactionData lease_cancel = 109;
        CreateAliasTransactionData create_alias = 110;
        MassTransferTransactionData mass_transfer = 111;
        DataTransactionData data_transaction = 112;
        SetScriptTransactionData set_script = 113;
        SponsorFeeTransactionData sponsor_fee = 114;
        SetAssetScriptTransactionData set_asset_script = 115;
        InvokeScriptTransactionData invoke_script = 116;
        UpdateAssetInfoTransactionData update_asset_info = 117;
    };
};

message Amount {
    bytes asset_id = 1;
    int64 amount = 2;
};
```

| Поле | Размер | Описание |
| :--- | :--- | :--- |
| chain_id | 1 байт | [Байт сети](/ru/blockchain/blockchain-network/chain-id) |
| sender_public_key | 32 байта | Открытый ключ аккаунта отправителя транзакции |
| fee.amount | 8 байт | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) в минимальных единицах («копейках») ассета |
| fee.asset_id | • 32 байта, если комиссия в спонсорском ассете<br> • 0, если комиссия в WAVES | ID токена комиссии.<br>Комиссия в спонсорском ассете доступна только для транзакций вызова скрипта и транзакций перевода. См. раздел [Спонсирование комиссии](/ru/blockchain/waves-protocol/sponsored-fee)|
| timestamp | 8 байт | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp): Unix-время в миллисекундах. Транзакция не будет добавлена в блокчейн, если значение временной метки транзакции отличается от временной метки текущего блока более чем на 2 часа назад или 1,5 часа вперед. |
| version | 1 байт | [Версия транзакции](/ru/blockchain/transaction/transaction-version) |
| proofs | Размер каждого подтверждения — до 64 байт,<br>до 8 подтверждений | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof), используемые для проверки валидности. Массив может содержать подписи транзакции (но не ограничивается только подписями) |

Описание полей, зависящих от типа транзакции, представлено в следующих разделах:

* [Транзакция вызова скрипта](/ru/blockchain/binary-format/transaction-binary-format/invoke-script-transaction-binary-format)
* [Транзакция выпуска](/ru/blockchain/binary-format/transaction-binary-format/issue-transaction-binary-format)
* [Транзакция генезиса](/ru/blockchain/binary-format/transaction-binary-format/genesis-transaction-binary-format)
* [Транзакция данных](/ru/blockchain/binary-format/transaction-binary-format/data-transaction-binary-format)
* [Транзакция довыпуска](/ru/blockchain/binary-format/transaction-binary-format/reissue-transaction-binary-format)
* [Транзакция закрытия лизинга](/ru/blockchain/binary-format/transaction-binary-format/lease-cancel-transaction-binary-format)
* [Транзакция лизинга](/ru/blockchain/binary-format/transaction-binary-format/lease-transaction-binary-format)
* [Транзакция массового перевода](/ru/blockchain/binary-format/transaction-binary-format/mass-transfer-transaction-binary-format)
* [Транзакция обмена](/ru/blockchain/binary-format/transaction-binary-format/exchange-transaction-binary-format)
* [Транзакция обновления информации ассета](/ru/blockchain/binary-format/transaction-binary-format/update-asset-info-transaction-binary-format)
* [Транзакция перевода](/ru/blockchain/binary-format/transaction-binary-format/transfer-transaction-binary-format)
* [Транзакция сжигания токена](/ru/blockchain/binary-format/transaction-binary-format/burn-transaction-binary-format)
* [Транзакция создания псевдонима](/ru/blockchain/binary-format/transaction-binary-format/create-alias-transaction-binary-format)
* [Транзакция спонсирования](/ru/blockchain/binary-format/transaction-binary-format/sponsor-fee-transaction-binary-format)
* [Транзакция установки скрипта](/ru/blockchain/binary-format/transaction-binary-format/set-script-transaction-binary-format)
* [Транзакция установки скрипта ассета](/ru/blockchain/binary-format/transaction-binary-format/set-asset-script-transaction-binary-format)
