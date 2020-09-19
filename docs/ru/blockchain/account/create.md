# Как зарегистрировать аккаунт / создать кошелек Waves

Создание аккаунта Waves — это генерация ключей аккаунта и адреса на основе секретной фразы. 

:warning: **Предупреждение о безопасности**
* Секретная фраза или созданный из нее закрытый ключ предоставляют полный доступ к аккаунту, включая возможность распоряжаться средствами. Никогда не публикуйте и не пересылайте секретную фразу и закрытый ключ.
* Секретную фразу нельзя изменить: из другой секретной фразы (даже отличающейся на один символ) получится другая пара ключей, а следовательно, другой аккаунт.
* Если вы потеряете секретную фразу и закрытый ключ, вы утратите доступ к аккаунту навсегда, без возможности восстановления. Рекомендуем записать секретную фразу на бумаге и хранить в надежном месте.
* Если секретная фраза скомпрометирована (вы ее кому-то отправили или подозреваете, что ее узнали мошенники), немедленно создайте новый аккаунт и переведите на него все средства со старого.

Для создания аккаунта вы можете использовать одно из рекомендованных приложений:

* Расширение браузера [Waves Keeper](/ru/ecosystem/waves-keeper/)

   См. инструкции в разделе [Начало работы с Waves Keeper](https://docs.waves.tech/ru/ecosystem/waves-keeper/getting-started-with-keeper).

* Online-/desktop-/мобильное приложение [Waves.Exchange](https://waves.exchange/), разработанное сторонней командой из сообщества.

   См. инструкции в разделах [Создать аккаунт](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-online-desktop/online-desktop-account/online-desktop-creation) или [Создать аккаунт (mobile)](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-mobile/mobile-account/mobile-creation) документации Waves.Exchange.

* [WavesFX](https://wavesfx.github.io/), разработанное сторонней командой из сообщества.

Или одну из [клиентских библиотек](/ru/building-apps/waves-api-and-sdk/client-libraries/), например:

* TypeScript/JavaScript-библиотеку [ts-lib-crypto](https://github.com/wavesplatform/ts-lib-crypto) (также входит в состав [waves-transactions](https://wavesplatform.github.io/waves-transactions/index.html)):

   ```javascript
   const libCrypto = require('@waves/ts-lib-crypto')

   const seed = libCrypto.randomSeed() // or input your existing seed
   const sk = libCrypto.privateKey(seed)
   const pk = libCrypto.publicKey(seed)
   const addressBase58 = libCrypto.address(seed) // address for Mainnet
   const addressTestnetBase58 = libCrypto.address(seed, 'T') // address for Testnet
   ```

* Python-библиотеку [Pywaves](https://github.com/PyWaves/PyWaves)

   ```python
   import pywaves as pw

   # pw.setChain('testnet') # Mainnet by default

   # generate a new address
   myAddress = pw.Address(seed='<insert your seed here>')

   print(f'Your seed:   {myAddress.seed}')
   print(f'Private Key: {myAddress.privateKey}')
   print(f'Public Key:  {myAddress.publicKey}')
   print(f'Address:     {myAddress.address}')
   ```

* Java-библиотеку [WavesJ]()

   ```java
   String seed = Crypto.getRandomSeedPhrase();
   PrivateKey privateKey = PrivateKey.fromSeed(seed);
   PublicKey publicKey = PublicKey.from(privateKey);
   Address address = Address.from(publicKey);
   ```

Обратите внимание:
* Ключи аккаунта и адрес генерируются и хранятся локально. Никакие данные не нужно отправлять на ноду или куда-либо еще.
* Адрес сразу же доступен для перевода токенов — например, его можно указать в качестве получателя в [транзакции перевода](/ru/blockchain/transaction-type/transfer-transaction).
* Информация об адресе появляется на блокчейне вместе с первой транзакцией, в которой участвует аккаунт.
* Чтобы пользоваться аккаунтом в другом приложении или на другом устройстве, нужно ввести там секретную фразу и повторить генерацию ключей из нее.

## Как массово создавать кошельки для пользователей?

Централизованно генерировать аккаунты для пользователей — плохая практика. Владение секретной фразой и закрытым ключом позволяет делать что угодно от имени аккаунта. Хранить и передавать эти данные небезопасно: кроме риска злоупотребления, есть риск кражи или утечки данных.

Каждый пользователь должен создать свой аккаунт самостоятельно, а приложение должно запрашивать подпись пользователя отдельно для каждой транзакции. Для этого можно подключить на сайте библиотеку [Signer](/ru/building-apps/waves-api-and-sdk/client-libraries/signer) — она предоставляет пользователю возможность войти в свой аккаунт или создать его и подписывать транзакции, не передавая приложению секретную фразу или закрытый ключ.
