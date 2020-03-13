# Бинарный формат транзакции массового перевода

> Узнать больше о [транзакции массового перевода](/ru/blockchain/transaction-type/mass-transfer-transaction)

## Транзакция версии 2

Бинарный формат версии 2 основан на [протобаф-схеме](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto).

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

message Attachment {
    oneof attachment {
        int64 int_value = 1;
        bool bool_value = 2;
        bytes binary_value = 3;
        string string_value = 4;
    };
}

message MassTransferTransactionData {
    message Transfer {
        Recipient address = 1;
        int64 amount = 2;
    };
    bytes asset_id = 1;
    repeated Transfer transfers = 2;
    Attachment attachment = 3;
};
```

## Транзакция версии 1

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | [ID типа транзакции](/ru/blockchain/transaction-type) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 11 |
| 2 | [Версия транзакции](/ru/blockchain/transaction/transaction-version) | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 2 |
| 3 | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 4.1 | Флаг WAVES/токен |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Равен 0, если переводится [WAVES](/ru/blockchain/token/waves).<br>Равен 1, если переводится другой токен |
| 4.2 | ID токена | assetId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | S | S = 0 если значение поля "Флаг WAVES/токен" равно 0.<br>S = 32 если значение поля "Флаг WAVES/токен" равно 1 |
| 5.1 | Количество переводов | transferCount | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | Количество переводов токенов в транзакции |
| 5.2 | Сумма всех переводов  | totalAmount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 5.3 | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) получателя перевода 1 | recipient | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | Если первым байтом поля является 1, то за ним следует адрес. `S` в этом случае равняется 26.<br>Если первым байтом поля является 2, то за ним следует псевдоним. В этом случае 8 <= `S` <= 34 |
| 5.4 | Количество токена в переводе 1 | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 5.5 | Адрес или псевдоним получателя перевода 2 | recipient | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | Если первым байтом поля является 1, то за ним следует адрес. `S` в этом случае равняется 26.<br>Если первым байтом поля является 2, то за ним следует псевдоним. В этом случае 8 <= `S` <= 34 |
| 5.6 | Количество токена в переводе 2 | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| 5.[2× N + 1] | Адрес или псевдоним получателя перевода N | recipient | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | Если первым байтом поля является 1, то за ним следует адрес. `S` в этом случае равняется 26.<br>Если первым байтом поля является 2, то за ним следует псевдоним. В этом случае 8 <= `S` <= 34 |
| 5.[2× N + 2] | Количество токена в переводе N | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 6 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 7 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 8.1 | Длина поля "Вложение" |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 |  |
| 8.2 | Вложение |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | Произвольные данные, прикладываемые к транзакции |
| 9 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) | proofs | [Подтверждения](/ru/blockchain/transaction/transaction-proof) | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br> `N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер `N`-го подтверждения в байтах.<br>Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/3LRfudet7avpQcW1AdauiBGb8SSRAaoCugDzngDPLVcv) в Node API.
