# How to Read Price Data Provided by Band Protocol’s Oracle

In addition to [data native to the Waves blockchain](/en/building-apps/how-to/basic/retrieve), Waves developers also have access to various cryptocurrency price data provided by [Band Protocol](https://bandprotocol.com/)'s oracle.

## Bridge Contract Info

### Data Available

The price data originates from [data requests](https://github.com/bandprotocol/bandchain/wiki/System-Overview#oracle-data-request) made on BandChain. Band's bridge smart contract on Waves then retrieves and stores the results of those requests. Specifically, the following price pairs are available to be read from the bridge contract:

- BTC/USD
- ETH/USD
- WAVES/USD

These prices are automatically updated every 5 minutes. The smart contract itself is currently deployed on Waves testnet at [`3N54eKW5ZucDaRaGVUfzX8xRXv6Ve8M71tM`](https://wavesexplorer.com/testnet/address/3N54eKW5ZucDaRaGVUfzX8xRXv6Ve8M71tM/script). Along with the price data, developers will also have access to the following parameters:

- The symbol of the token associated with the price
- The multiplier used to calculate the stored price value
- The timestamp of when the specific price request was resolved on BandChain
- The Waves network block time at which the specific price data was updated

These parameters are intended to act as security parameters to help anyone using the data to verify that the data they are using is what they expect and, perhaps more importantly, actually valid.

### Bridge Contract Price Update Process

For the ease of development, the Band Foundation will be maintaining and updating the bridge contract with the latest price data. In the near future, we will be releasing guides on how developers can create similar contracts themselves to retrieve data from Band's oracle.

## Retrieving the Price Data

The code below shows an example of a relatively simple price database smart contract on Waves which retrieve price data from Band's bridge contract and store it in the contract's state. 

Specifically, the contract is set to only store price data from the bridge contract if the token symbol is `WAVES`, the multiplier is `100`, and the price data is requested using the oracle script ID of `1`. For more information on what oracle scripts are and how data requests work on BandChain in general, please see their [wiki](https://github.com/bandprotocol/bandchain/wiki/System-Overview#oracle-data-request) and [developer documentation](https://docs.bandchain.org/dapp-developers/requesting-data-from-bandchain)

```python
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}

func getBridgeAddress() = match addressFromString("3N54eKW5ZucDaRaGVUfzX8xRXv6Ve8M71tM") {
    case a: Address => a
    case _ => throw("fail to get bridge address")
}

@Callable(i)
func readFromBridge(symbol: String) = {
    let maxBlockHeightDeviation = 1000
    if (symbol != "BTC" && symbol != "WAVES" && symbol != "ETH") then throw("Invalid symbol")
    else
        let last_updated_blockheight = getIntegerValue(getBridgeAddress(),symbol + "/latest_block")
        if height - last_updated_blockheight > maxBlockHeightDeviation then throw("Data retrieved from bridge is too old")
        else 
            let price = getIntegerValue(getBridgeAddress(), symbol + "/value")
            WriteSet([DataEntry(symbol + "/price", price)])
}
```

#### Code Breakdown

Looking at the example contract above in more detail, it consists of two main functions.

First, there is the `getBridgeAddress` helper function. The function simply to retrieve address of the bridge contract. If successful, it returns the address. If it failed, it throws an error and reverts the transaction.

The contract's main application logic is then specified in `readFromBridge`. The function starts off by setting `maxBlockHeightDeviation`. This is the maximum difference between the currenct block height and the block height at which the price data was updated that we'll allow. 

The function then checks that the input token `symbol` one of the three available (`BTC`, `ETH`, `WAVES`). If that check passes, it continues to check that the current block `height` minus `last_updated_blockheight` is not more than the previously specified limit (`maxBlockHeightDeviation`) to ensure that the data is not too old. If both check passes, the contract finally retrieves the specified token's price value from the bridge contract, and save the retrieved value into its  state.
