# Lease

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/).

`Lease` — структура, задающая параметры лизинга. Лизинг выполняется, только если структура включена в [результирующее выражение](/ru/ride/v5/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции. [Подробнее о лизинге](/ru/blockchain/leasing)

Получить идентификатор лизинга можно с помощью функции [calculateLeaseId](/ru/ride/v5/functions/built-in-functions/blockchain-functions#calculateleaseid).

## Конструктор

```ride
Lease(recipient: Address|Alias, amount: Int, nonce: Int)
```

или 

```ride
Lease(recipient: Address|Alias, amount: Int)
```

Во втором случае значение `nonce = 0` подставляется автоматически.

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | recipient | [Address](/ru/ride/v5/structures/common-structures/address)&#124;[Alias](/ru/ride/v5/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias), которому будет выдан лизинг |
| 2 | amount | [Int](/ru/ride/v5/data-types/int) | Количество WAVELET (то есть количество WAVES, умноженное на 10<sup>8</sup>), передаваемое в лизинг |
| 3 | nonce | [Int](/ru/ride/v5/data-types/int) | Nonce, который используется для генерации ID лизинга. Если вызываемая функция создает несколько лизингов с одинаковыми параметрами, нужно использовать разные nonce |

### Пример

```
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
  
@Callable(i)
func foo() = {
  let lease = Lease(Alias("merry"),100000000)
  let id = calculateLeaseId(lease)
  (
    [
      lease,
      BinaryEntry("lease", id)
    ],
    null
  )
}
```