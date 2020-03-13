# Бинарный формат транзакции данных

> Узнать больше о [транзакции данных](/ru/blockchain/transaction-type/data-transaction)

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
  
message DataTransactionData {
    message DataEntry {
        string key = 1;
        oneof value {
            int64 int_value = 10;
            bool bool_value = 11;
            bytes binary_value = 12;
            string string_value = 13;
        };
    };
    repeated DataEntry data = 1;
};
```

## Транзакция версии 1

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии | | [Byte](/ru/blockchain/blockchain/blockchain-data-types)  | 1 | Указывает, что [версия транзакции](/ru/blockchain/transaction/transaction-version) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/ru/blockchain/transaction-type) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 12 |
| 3 | [Версия транзакции](/ru/blockchain/transaction/transaction-version) | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 1 |
| 4 | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 5 | Количество элементов в массиве данных | | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | |
| 6.1 | Длина ключа 1-го элемента | | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | |
| 6.2 | Ключ 1-го элемента | key | [String](/ru/blockchain/blockchain/blockchain-data-types) | 4 × `L` | `L` — длина ключа |
| 6.3 | Тип данных 1-го элемента | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | |
| 6.4 | Длина данных 1-го элемента |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | Текущее поле присутствует только если значением поля данных является массив байтов или строка.<br>Текущее поле отсутствует, если значением поля данных является целое число или логический тип |
| 6.5 | Данные 1-го элемента | value | `T` | Зависит от размера данных | `T` — один из следующих: <br> - [Long](/ru/blockchain/blockchain/blockchain-data-types)<br> - Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)]<br> - [Boolean](/ru/blockchain/blockchain/blockchain-data-types)<br> - [String](/ru/blockchain/blockchain/blockchain-data-types) |
| 6.6 | Длина ключа 2-го элемента | | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | |
| 6.7 | Ключ 2-го элемента | key | [String](/ru/blockchain/blockchain/blockchain-data-types) | 4 × `L` | `L` — длина ключа |
| 6.8 | Тип данных 2-го элемента | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | |
| 6.9 | Длина данных 2-го элемента |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | Текущее поле присутствует только если значением поля данных является массив байтов или строка.<br>Текущее поле отсутствует, если значением поля данных является целое число или логический тип |
| 6.10 | Данные 2-го элемента | value | `T` | Зависит от размера данных | `T` — один из следующих: <br> - [Long](/ru/blockchain/blockchain/blockchain-data-types)<br> - Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)]<br> - [Boolean](/ru/blockchain/blockchain/blockchain-data-types)<br> - [String](/ru/blockchain/blockchain/blockchain-data-types) |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| 6.[5 × N - 4] | Длина ключа N-го элемента | | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | |
| 6.[5 × N - 3] | Ключ N-го элемента | key | [String](/ru/blockchain/blockchain/blockchain-data-types) | 4 × `L` | `L` — длина ключа |
| 6.[5 × N - 2] | Тип данных N-го элемента | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | |
| 6.[5 × N - 1] | Длина данных N-го элемента |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 | Текущее поле присутствует только если значением поля данных является массив байтов или строка.<br>Текущее поле отсутствует, если значением поля данных является целое число или логический тип |
| 6.[5 × N] | Данные N-го элемента | value | `T` | Зависит от размера данных | `T` — один из следующих: <br> - [Long](/ru/blockchain/blockchain/blockchain-data-types)<br> - Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)]<br> - [Boolean](/ru/blockchain/blockchain/blockchain-data-types)<br> - [String](/ru/blockchain/blockchain/blockchain-data-types) |
| 7 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 8 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 9 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) | proofs | [Подтверждения](/ru/blockchain/transaction/transaction-proof) | `S` | Если массив пустой, то `S`= 3. <br>Если массив не пустой, то `S`= 3 + 2 × `N` + \(`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>\), <br>где <br>`N` — количество подтверждений в массиве, <br>`P`<sub>n</sub> — размер `N`-го подтверждения в байтах.<br> Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции <a id="json-representation"></a>

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/EByjQAWDRGrmc8uy7xRGy2zsQXZQq59bav7h8oTTJyHC) в Node API.
