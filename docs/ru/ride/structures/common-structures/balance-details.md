# BalanceDetails

> :warning: Структура `BalanceDetails` представлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая доступна начиная с версии ноды 1.2.0 после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”.

Структура, содержащая балансы WAVES аккаунта. Эту структуру возвращает встроенная функция [wavesBalance](/ru/ride/functions/built-in-functions/account-data-storage-functions#waves-balance). О видах баланса см. в разделe [Баланс аккаунта](/ru/blockchain/account/account-balance).

## Конструктор

``` ride
BalanceDetails(available: Int, regular: Int, generating: Int, effective: Int)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | available | [Int](/ru/ride/data-types/int) | Доступный баланс |
| 2 | regular | [Int](/ru/ride/data-types/int) | Регулярный баланс |
| 3 | generating | [Int](/ru/ride/data-types/int) | Генерирующий баланс |
| 4 | effective | [Int](/ru/ride/data-types/int) | Эффективный баланс |

Все балансы представлены в минимальных единицах — [WAVELET](/ru/blockchain/token/wavelet).