# Airdrop

An airdrop is a simultaneous sending of tokens to multiple addresses. As a rule, the airdrop is used as a part of a marketing campaign to promote a project, increase its recognition, and attract investors.

You can transfer your token to all the active Waves addresses. In this example, we make a list of addresses as follows:

* get last `N` blocks from the blockchain;
* get sender public keys from transactions in these blocks;
* delete duplicates;
* convert public keys to addresses.

Please keep in mind that Waves public nodes have limitations listed in the [API limitations of the pool of public nodes](/en/waves-node/api-limitations-of-the-pool-of-public-nodes) article. We recommend to use your own node to perform airdrop.

Make sure that your account has enough WAVES to pay the fee for asset transfers.

```python
import requests
import time
import pywaves as pw

seed = 'insert your seed here'
my_address = pw.Address(seed)

my_asset = pw.Asset('Ax54puR69NHfxqCE73DkyGHUiRb7Z6tHJZvx6ywWS49')
airdrop_amount = 100

node_url = 'https://nodes-testnet.wavesnodes.com'
pw.setNode(node = node_url, chain = 'testnet')

sender_public_keys = []
addresses = []

depth = 10000

# Get blockchain height
blockchain_height = requests.get(f'{node_url}/blocks/height').json()['height']

# Iterate through the last blocks
for i in range(blockchain_height - depth, blockchain_height):

    # Get all the transactions of the block
    try:
        response =  requests.get(f'{node_url}/blocks/at/{i}')
        transactions = response.json()['transactions']
    except ValueError:
        print('Error retrieving block ', i, '\nHTTP response code: ', response)

    # Extract public keys
    for transaction in transactions:
        if transaction['senderPublicKey'] not in sender_public_keys:
            sender_public_keys.append(transaction['senderPublicKey'])

    # time.sleep(1) # Only 1 block per second if you use public mainnet nodes

# Convert public keys to address
for public_key in sender_public_keys:
    try:
        response = requests.get(f'{node_url}/addresses/publicKey/{public_key}')
        addresses.append(responce.json()['address'])
    except ValueError:
        print('Error getting address from public key ', public_key, '\nHTTP response code: ', response)

# Send asset to the addresses
for address in addresses:
    my_address.sendAsset(address, my_asset, airdrop_amount)
```
