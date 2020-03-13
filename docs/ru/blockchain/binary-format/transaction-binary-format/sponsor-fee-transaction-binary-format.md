# Бинарный формат транзакции спонсирования

> Узнать больше о [транзакции спонсирования](/ru/blockchain/transaction-type/set-asset-script-transaction)

## Транзакция версии 2

Бинарный формат версии 2 основан на [протобаф-схеме](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto).

> protobuf-schemas/proto/waves/transaction.proto

```
// Transactions
syntax = "proto3";
package waves;
  
option java_package = "com.wavesplatform.protobuf.transaction";
option csharp_namespace = "Waves";
  
import "waves/amount.proto";
import "waves/script.proto";
import "waves/recipient.proto";
import "waves/order.proto";
  
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
        UpdateAssetInfoTransactionData UpdateAssetInfo = 117;
    };
};
  
message SponsorFeeTransactionData {
    Amount min_fee = 1;
};
```

## Транзакция версии 1

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Указывает, что [версия транзакции](/ru/blockchain/transaction/transaction-version) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/ru/blockchain/transaction-type) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 14 |
| 3 | [Версия транзакции](/ru/blockchain/transaction/transaction-version) | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 1 |
| 4 | Открытый ключ аккаунта отправителя транзакции | chainId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 5 | [ID](/ru/blockchain/token/token-id) спонсируемого токена | assetId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 6 | Минимальная комиссия | minSponsoredAssetFee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 | Количество спонсируемого токена, которое будет равно минимальной комиссии в WAVES при оплате этим токеном |
| 7 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 8 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 9 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) | proofs | Array[[Подтверждение](/ru/blockchain/transaction/transaction-proof)] | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br>`N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер `N`-го подтверждения в байтах.<br>Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/7EL2XEGP1By427BeLcHPYeVnBzGsXen4egMAwQpWGBVR) в Node API.
