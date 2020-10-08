# Lease

> :warning: Структура `Lease` добавлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 5**, которая в настоящее время доступна только на Stagenet.

`Lease` — структура, задающая параметры лизинга. Лизинг выполняется, только если структура включена в [результирующее выражение](/ru/ride/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции. [Подробнее о лизинге](/ru/blockchain/leasing)

Получить идентификатор лизинга можно с помощью функции [calculateLeaseId](/ru/ride/functions/built-in-functions/blockchain-functions#calculateleaseid).

## Конструктор

```ride
Lease(recipient: Address|Alias, amount: Int)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | recipient | [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias), которому будет выдан лизинг |
| 2 | amount | [Int](/ru/ride/data-types/int) | Количество WAVELET (то есть количество WAVES, умноженное на 10<sup>8</sup>), передаваемое в лизинг  |

### Пример

```
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
  
@Callable(i)
func foo() = {
  let lease = Lease(Alias("merry"),100000000)
  let id = calculateLeaseId(lease)
  [
    lease,
    BinaryEntry("lease", id)
  ]
}
```