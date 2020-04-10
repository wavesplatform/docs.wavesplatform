# Как распространить токен (airdrop)

Airdrop — рассылка токена множеству адресов одновременно. Как правило, airdrop — это часть кампании по продвижению проекта, повышению узнаваемости и привлечению инвесторов.

Вы можете перевести свой токен всем активным адресам Waves. В этом примере мы составляем список адресов следующим образом:

* получаем последние `N` блоков из блокчейна;
* получаем открытые ключи отправителей транзакций в этих блоках;
* удаляем дубликаты;
* преобразуем открытые ключи в адреса.

Пожалуйста, учитывайте [ограничения API пула публичных нод](/ru/waves-node/api-limitations-of-the-pool-of-public-nodes). Для рассылки токенов мы рекомендуем использовать собственную ноду.

Убедитесь, что на вашем аккаунте достаточно WAVES для уплаты комиссии за переводы токена.

```python
import requests
import time
import pywaves as pw

node_url = 'https://nodes-testnet.wavesnodes.com'
pw.setNode(node = node_url, chain = 'testnet')

seed = 'insert your seed here'
my_address = pw.Address(seed=seed)

my_asset = pw.Asset('Ax54puR69NHfxqCE73DkyGHUiRb7Z6tHJZvx6ywWS49')
airdrop_amount = 100

sender_public_keys = []
addresses = []

depth = 10000

# Получение высоты блокчейна
blockchain_height = requests.get(f'{node_url}/blocks/height').json()['height']

# Перебираем последние блоки
for i in range(blockchain_height - depth, blockchain_height):

    # Получаем все транзакции в блоке
    try:
        response =  requests.get(f'{node_url}/blocks/at/{i}')
        transactions = response.json()['transactions']
    except ValueError:
        print('Error retrieving block ', i, '\nHTTP response code: ', response)

    # Извлекаем открытые ключи
    for transaction in transactions:
        if transaction['senderPublicKey'] not in sender_public_keys:
            sender_public_keys.append(transaction['senderPublicKey'])

    # time.sleep(1) # С https://nodes.wavesnodes.com можно получить только один блок в секунду

# Преобразование открытых ключей в адреса
for public_key in sender_public_keys:
    try:
        response = requests.get(f'{node_url}/addresses/publicKey/{public_key}')
        addresses.append(response.json()['address'])
    except ValueError:
        print('Error getting address from public key ', public_key, '\nHTTP response code: ', response)

# Перевод токена по адресам
for address in addresses:
    address_obj = pw.Address(address)
    my_address.sendAsset(address_obj, my_asset, airdrop_amount)
```
