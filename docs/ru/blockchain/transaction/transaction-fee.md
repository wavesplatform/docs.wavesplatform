# Комиссия за транзакцию

**Комиссия за транзакцию** — комиссия, которую владелец [аккаунта](/ru/blockchain/account) платит за отправку [транзакции](/ru/blockchain/transaction).

Отправитель может указать любой размер комиссии, но не меньше определенного минимального значения. Чем больше размер комиссии, тем быстрее транзакция попадет в новый [блок](/ru/blockchain/block).

> Если [смарт-аккаунт](/ru/blockchain/account/smart-account) отправляет [смарт-ассет](/ru/blockchain/token/smart-asset), то комиссия удваивается.
<br>Если транзакция валидируется [скриптом аккаунта](/ru/ride/script/script-types/account-script) или [скриптом ассета](/ru/ride/script/script-types/asset-script), то комиссия увеличивается на 0,004 WAVES


| Тип транзакции | ID типа транзакции | Минимальный размер комиссии в WAVES | Комментарии |
| :--- | :--- | :--- | :--- |
| [Транзакция вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction) | 16 | 0,005 + `B`<br> + 0,004 × `C`<br> + 0,004 × `D` + `K` | Если транзакция вызова скрипта отправляется со [смарт-аккаунта](/ru/blockchain/account/smart-account), то `B` = 0,004, в ином случае `B` = 0.<br>К транзакции вызова скрипта может быть приложено до двух платежей. `C` представляет количество различающихся [смарт-ассетов](/ru/blockchain/token/smart-asset) в этих платежах.<br>Транзакция вызова скрипта может инициировать перевод, довыпуск или сжигание одного или нескольких ассетов. `D` представляет собой количество смарт-ассетов среди этих операций.<br>Транзакция вызова скрипта может инициировать выпуск ассета. `K` представляет собой количество выпущенных ассетов, не являющихся [не взаимозаменяемыми токенами](/ru/blockchain/token/non-fungible-token) |
| [Транзакция выпуска](/ru/blockchain/transaction-type/issue-transaction) | 3 | 1 за обычный токен <br>0,001 за [не взаимозаменяемый токен](/ru/blockchain/token/non-fungible-token) | |
| [Транзакция данных](/ru/blockchain/transaction-type/data-transaction) | 12 | 0,001 за килобайт | |
| [Транзакция довыпуска](/ru/blockchain/transaction-type/reissue-transaction) | 5 | 1<br/>0,001 — начиная с версии ноды 1.2.0, после активации функциональности "Ride V4 and multiple attached payments for Invoke Script Transaction" (№ 16). См. [протокол активации](/ru/blockchain/waves-protocol/activation-protocol) | |
| [Транзакция закрытия лизинга](/ru/blockchain/transaction-type/lease-cancel-transaction) | 9 | 0,001 | |
| [Транзакция лизинга](/ru/blockchain/transaction-type/lease-transaction) | 8 | 0,001 | |
| [Транзакция массовой отправки](/ru/blockchain/transaction-type/mass-transfer-transaction) | 11 | 0,001 + 0,0005 × `N` | `N` — количество переводов внутри транзакции |
| [Транзакция обмена](/ru/blockchain/transaction-type/exchange-transaction) | 7 | 0,003 | |
| [Транзакция перевода](/ru/blockchain/transaction-type/transfer-transaction) | 4 | 0,001 | |
| [Транзакция сжигания токена](/ru/blockchain/transaction-type/burn-transaction) | 6 | 0,001 | |
| [Транзакция создания псевдонима](/ru/blockchain/transaction-type/alias-transaction) | 10 | 0,001 | |
| Транзакция спонсирования | 14 | 1 | |
| [Транзакция установки скрипта](/ru/blockchain/transaction-type/set-script-transaction) | 13 | 0,01 | |
| [Транзакция установки скрипта ассета](/ru/blockchain/transaction-type/set-asset-script-transaction) | 15 | 1 | | |
