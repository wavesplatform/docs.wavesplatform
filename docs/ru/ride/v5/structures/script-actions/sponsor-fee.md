# SponsorFee

> :warning: Структура `SponsorFee` добавлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**.

`SponsorFee` — cтруктура, задающая настройки спонсирования. Подробнее о спонсировании см. в разделе [Спонсирование комиссии](/ru/blockchain/waves-protocol/sponsored-fee). Установка или отмена спонсирования выполняется, только если структура включена в результирующее выражение вызываемой функции. Подробнее см. в разделе [Вызываемая функция](/ru/ride/v5/functions/callable-function).

Установка/отмена спонсирования доступна, только если ассет выпущен аккаунтом dApp (в том числе в рамках этого же вызова скрипта) и не является смарт-ассетом.

## Конструктор

```ride
SponsorFee(assetId: ByteVector, minSponsoredAssetFee: Int|Unit)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Идентификатор ассета |
| 2 | minSponsoredAssetFee | [Int](/ru/ride/v5/data-types/int)&#124;[Unit](/ru/ride/v5/data-types/unit) | Количество спонсорского ассета, эквивалентное 0,001 WAVES. Указывается в минимальных единицах («копейках») спонсорского ассета.<br>Значение `unit` — отключение спонсирования |

## Пример

```
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
  
@Callable(i)
func issueAndSponsor() = {
  let issue = Issue("Spring", "", 100000, 2, true, unit, 0)
  let id = calculateAssetId(issue)
  [
    issue,
    SponsorFee(id, 300)
  ]
}
```

В результате вызова функции `issueAndSponsor` будет выпущен ассет и включено спонсирование. Минимальная комиссия в спонсорском ассете составит 3 Spring.
