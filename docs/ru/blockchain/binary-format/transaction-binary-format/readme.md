# Бинарный формат транзакции

> Подробнее о [транзакции](/ru/blockchain/transaction).

Транзакции хранятся в блокчейне в бинарном формате (байтовом представлении). [Расширения](/ru/waves-node/extensions) ноды, в частности [gRPC-сервер](/ru/waves-node/extensions/grpc-server), могут работать непосредственно с данными в бинарном формате.

Их использование существенно упрощает разработку клиентских библиотек для работы с блокчейном Waves.

### Protobuf-схема

Начиная с блоков версии 5, бинарный формат транзакции соответствует protobuf-схеме [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto). См. [Protocol Buffers Developer Guide](https://developers.google.com/protocol-buffers/docs/overview?hl=ru).

Версия 5 добавлена в версии ноды 1.2.0 и включается с активацией [фичи № 15 “VRF and Protobuf”](/ru/waves-node/features/features). В настоящее время версии 1.2.x доступны только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

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
| proofs | Размер каждого подтверждения — до 64 байт,<br>до 8 подтверждений| [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof), используемые для проверки валидности. Массив может содержать подписи транзакции (но не ограничивается только подписями) |
| chain_id | 1 байт | [Байт сети](/ru/blockchain/blockchain-network/chain-id) |
| sender_public_key | 32 байта | Открытый ключ аккаунта отправителя транзакции |
| fee.asset_id | • 32 байта, если комиссия в спонсорском токене<> | ID токена комиссии: • WAVES|
| fee.amount | 8 байт | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) в нормализованном виде (то есть умноженная на 10<sup>decimals</sup>, для WAVES 10<sup>8</sup>) |
| timestamp | 8 байт | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp): Unix-время в миллисекундах |
| version | 1 байт | [Версия транзакции](/ru/blockchain/transaction/transaction-version) |

## Бинарные форматы по типам транзакций

Описание бинарного формата для каждого типа транзакции представлено в следующих разделах:

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
