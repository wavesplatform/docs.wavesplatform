# Транзакция спонсирования

Транзакция спонсирования устанавливает или отменяет спонсирование. Механизм спонсирования позволяет любым пользователям платить комиссию за транзакции вызова скрипта и транзакции перевода в спонсорском ассете (вместо WAVES). [Подробнее о спонсировании](/ru/blockchain/waves-protocol/sponsored-fee)

Только аккаунт, выпустивший ассет, может включать и выключать спонсирование.

Смарт-ассет не может быть спонсорским.

## Комиссия за транзакцию

Минимальная комиссия за транзакцию спонсирования:
• 0,001 — после активации фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”.
• 1 — до активации фичи № 15.

## JSON-представление

```json
{
    "senderPublicKey": "5HNegWomhj1nzyggf1oAvujNJGCqbzFjM72BLYtrBecw",
    "sender": "3N3ErpmUdJWy6DW4ruAr14YDis9UaiTwHd6",
    "feeAssetId": null,
    "proofs": ["5jF8WpF7jxf5SBMHMbc2WcfqX3R6fRvssBGSNfzAM8p3uSmno9XzYy5b565ez5fG9vqUGrENFvcrbhk36bzCaqkP"],
    "assetId": "p1vuxnGyfH9VFiuyKmsh25rn6MedjGbQu7d6Zt1sY4U",
    "fee": 100000000,
    "minSponsoredAssetFee": 100,
    "id": "5gHUMzmBfn4KP3tELzHtw3EYR947rzWUp5PuyF7hUW23",
    "type": 14,
    "version": 1,
    "timestamp": 1585725309659,
    "height": 934757
}
```

| Поле | Описание |
| :--- | :--- |
| minSponsoredAssetFee | Количество спонсорского ассета, эквивалентное 0,001 WAVES (100&nbsp;000 WAVELET), в минимальных единицах («копейках») ассета |
| assetId | ID токена в кодировке base58 |

Описание полей, общих для всех типов транзакций, представлено в разделе [JSON-представление транзакции](/ru/blockchain/transaction/#json-представление-транзакции).

## Бинарный формат

См. раздел [Бинарный формат транзакции спонсирования](/ru/blockchain/binary-format/transaction-binary-format/sponsor-fee-transaction-binary-format).

## Структура Ride

Для операций с транзакцией в смарт-контрактах используется структура [SponsorFeeTransaction](/ru/ride/structures/transaction-structures/sponsor-fee-transaction).
