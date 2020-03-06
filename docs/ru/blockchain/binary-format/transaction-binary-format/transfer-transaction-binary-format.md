# Бинарный формат транзакции перевода

> Узнать больше о [транзакции перевода](/ru/blockchain/transaction-type/transfer-transaction)

## Protobuf-схема

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

message Attachment {
    oneof attachment {
        int64 int_value = 1;
        bool bool_value = 2;
        bytes binary_value = 3;
        string string_value = 4;
    };
}

message TransferTransactionData {
    Recipient recipient = 1;
    Amount amount = 2;
    Attachment attachment = 3;
};
```

## Транзакция версии 2

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Указывает, что [версия транзакции](/ru/blockchain/transaction/transaction-version) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/ru/blockchain/transaction-type) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 4 |
| 3 | [Версия транзакции](/ru/blockchain/transaction/transaction-version) | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 2 |
| 4 | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 5 | Флаг типа переводимого токена |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — [WAVES](/ru/blockchain/token/waves)<br>1 — другой токен |
| 6 | [ID](/ru/blockchain/token/token-id) переводимого токена | assetId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0 если значение поля 5 равно 0.<br>`S` = 32 если значение поля 5 не равно 0 |
| 7 | Флаг типа токена комиссии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — WAVES<br>1 — другой токен |
| 8 | ID токена комиссии | feeAssetId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0 если значение поля 7 равно 0.<br>`S` = 32 если значение поля 7 не равно 0 |
| 9 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 10 | Количество токена для перевода | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 11 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 12 | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) получателя | recipient | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | Если первым байтом поля является 1, то за ним следует адрес. `S` в этом случае равняется 26.<br>Если первым байтом поля является 2, то за ним следует псевдоним. В этом случае 8 <= `S` <= 34 |
| 13 | Длина вложения |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 |  |
| 14 | Вложение | attachment | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | До 140 включительно | Может включать произвольные данные |
| 15 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) | proofs | Array[[Подтверждение](/ru/blockchain/transaction/transaction-proof)] | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br>`N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер N-го подтверждения в байтах.<br>Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/2UMEGNXwiRzyGykG8voDgxnwHA7w5aX5gmxdcf9DZZjL) в Node API. В JSON-представлении значения полей `feeAsset` и `feeAssetId` идентичны.  

## Транзакция версии 1

| Порядковый номер поля | Название поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [ID типа транзакции](/ru/blockchain/transaction-type) | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 4 |
| 2 | [Подпись транзакции](/ru/blockchain/transaction/transaction-signature) | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 64 |  |
| 3 | Открытый ключ аккаунта отправителя транзакции | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 4 | Флаг типа переводимого токена | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — [WAVES](/ru/blockchain/token/waves)<br>1 — другой токен |
| 5 | [ID](/ru/blockchain/token/token-id) переводимого токена | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0 если значение поля 4 равно 0.<br>`S` = 32 если значение поля 4 не равно 0 |
| 6 | Флаг типа токена комиссии | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — WAVES<br>1 — другой токен |
| 7 | ID токена комиссии | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0 если значение поля 4 равно 0.<br>`S` = 32 если значение поля 4 не равно 0 |
| 8 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 9 | Количество токена для перевода | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 10 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 11 | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) получателя | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | Если первым байтом поля является 1, то за ним следует адрес. `S` в этом случае равняется 26<br>Если первым байтом поля является 2, то за ним следует псевдоним. В этом случае 8 <= `S` <= 34  |
| 12 | Длина вложения | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 |  |
| 13 | Вложение | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | До 140 включительно | Может включать произвольные данные |
