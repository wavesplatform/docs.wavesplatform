# [Ride v5] Встроенные переменные

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/variables/built-in-variables)

**Встроенная переменная** — [переменная](/ru/ride/v5/variables/) [Стандартной библиотеки](/ru/ride/script/standard-library).

<table style="width:100%">
  <tr>
    <th align="left">№</th>
    <th align="left">Название</th>
    <th align="left">Описание</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Buy</td>
    <td>Тип <a href="/ru/blockchain/order">ордера</a></td>
  </tr>
  <tr>
    <td>2</td>
    <td>
      <ul>
        <li>CEILING</li>
        <li>DOWN</li>
        <li>FLOOR</li>
        <li>HALFEVEN</li>
        <li>HALFUP</li>
      </ul>
    </td>
    <td>
      <a href="/ru/ride/v5/functions/built-in-functions/math-functions">Переменные округления</a>, которые используются в <a href="/ru/ride/v5/functions/built-in-functions/math-functions">математических функциях</a> <code>fraction</code>, <code>log</code>, <code>pow</code>
    </td>
  </tr>
  <tr>
    <td>3</td>
    <td>lastBlock</td>
    <td><a href="/ru/blockchain/glossary#высота-блокчейна">Высота блокчейна</a> в момент выполнения скрипта</td>
  </tr>
  <tr>
    <td>4</td>
    <td>height</td>
    <td>Информация о последнем <a href="/ru/blockchain/block">блоке</a> блокчейна в момент выполнения скрипта</td>
  </tr>
  <tr>
    <td>5</td>
    <td>nil</td>
    <td>Переменная, которая содержит пустой <a href="/ru/ride/v5/data-types/list">список.</a><br>Используется для создания списков. Например, вместо:<br>
<pre>
<code class=“lang-ride”>
    let a = [5,6]
</code>
</pre>
    можно написать:
<pre>
<code class=“lang-ride”>
    let b = 5::6::nil
</code>
</pre>
      Списки создаются обоими способами. Первый способ — синтаксический сахар
    </td>
  </tr>
  <tr>
    <td>6</td>
    <td>
      <ol>
        <li>NOALG</li><li>MD5</li>
        <li>SHA1</li><li>SHA224</li>
        <li>SHA256</li><li>SHA384</li>
        <li>SHA512</li><li>SHA3224</li>
        <li>SHA3256</li><li>SHA3384</li>
        <li>SHA3512</li></ol>
    </td>
    <td>
      Переменные, которые передаются первым параметром в функцию <a href="/ru/ride/v5/functions/built-in-functions/verification-functions">rsaVerify</a>
    </td>
  </tr>
  <tr>
    <td>7</td>
    <td>Sell</td>
    <td>Тип <a href="/ru/blockchain/order">ордера</a></td>
  </tr>
  <tr>
    <td>8</td>
    <td>this</td>
    <td>• Для <a href="/ru/ride/script/script-types/dapp-script">скрипта dApp</a> или <a href="/ru/ride/script/script-types/account-script">скрипта аккаунта</a> — структура <a href="/ru/ride/structures/common-structures/address">Address</a><br/>• Для <a href="/ru/ride/script/script-types/asset-script">скрипта ассета</a> — структура <a href="/ru/ride/structures/common-structures/asset">Asset</a></td>
  </tr>
  <tr>
    <td>9</td>
    <td>tx</td>
    <td><a href="/ru/blockchain/transaction">Транзакция</a> или <a href="/ru/blockchain/order">ордер</a></td>
  </tr>
  <tr>
    <td>10</td>
    <td>unit</td>
    <td>Переменная, которая содержит объект типа <a href="/ru/ride/v5/data-types/unit">Unit</a>. <br><b>Пример 1</b><br> Функция <code>deposit</code> переводит 5 <a href="/ru/blockchain/token/waves">WAVELET</a> на аккаунт, который <a href="/ru/ride/v5/functions/callable-function">вызвал</a> эту функцию.

<pre>
<code class=“lang-ride”>
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}

@Callable(inv)
func deposit() = {
  TransferSet([
    ScriptTransfer(inv.caller, 5, unit) \# Перевести 5 WAVELET на аккаунт inv.caller. Вместо ID токена указан unit
  ])
}
</code>
</pre>

У WAVES нет <a href="/ru/blockchain/token/token-id">ID токена</a>; вместо ID передается <code>unit</code>.<br><b>Пример 2</b><br>Функция <a href="/ru/ride/v5/functions/built-in-functions/blockchain-functions"><tt>assetInfo</tt></a> запрашивает информацию о токене по его ID. Далее функция <code>isDefined</code> проверяет, что токен с таким ID существует на блокчейне.
<pre>
<code class=“lang-ride”>
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}

let asset = assetInfo(base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS')
token.isDefined()
</code>
</pre>
Вместо вызова функции <code>isDefined</code> можно использовать равенство с <code>unit</code>.
<pre>
<code class=“lang-ride”>
asset != unit
\# Выражение asset != unit эквивалентно выражению token.isDefined()
</code>
</pre>
  </td>
  </tr>
</table>
