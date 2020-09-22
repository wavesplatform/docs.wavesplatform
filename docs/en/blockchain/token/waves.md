# WAVES

**WAVES** is the native [token](/en/blockchain/token/) of the Waves blockchain. [Block generators](/en/blockchain/node/mining-node) receive [transaction fees](/en/blockchain/transaction/transaction-fee) and [block rewards](/en/blockchain/mining/mining-reward) in WAVES, which encourages generators to maintain and develop the blockchain network infrastructure. The more WAVES the generator holds (by ownership or lease), the greater its chance to add the next block is.

## WAVES Parameters

WAVES is present on the blockchain since inception, there is no issue transaction for it, therefore the WAVES token does not have an ID. The REST API uses `null` for WAVES.

The number of decimal places (`decimals`) for WAVES is 8. The atomic unit called WAVELET is 1/100,000,000 WAVES.

In April 2016, 100 million WAVES were issued.

In October 2019, feature #14 “Block Reward and Community Driven Monetary Policy” was activated, which introduces [block reward](/en/blockchain/mining/mining-reward). Since that moment, the total supply of WAVES increases. The current quantity of WAVES can be found using [Data Services](/en/building-apps/waves-api-and-sdk/waves-data-service-api): <https://api.wavesplatform.com/v0/assets/WAVES> (the quantity is specified in WAVELETs).

## Leasing

The owner of WAVES can lease them via a [Lease transaction](/en/blockchain/transaction-type/lease-transaction). WAVES received on lease are included in the [generating balance](/en/blockchain/account/account-balance). Block generators send back different percentages as rewards to lessors. A lessor can cancel the lease at any time via a [Lease Cancel transaction](/en/blockchain/transaction-type/lease-transaction). [More about leasing](/en/blockchain/leasing)

## How to Get WAVES

You can buy WAVES tokens at [Waves.Exchange](https://waves.exchange/) developed by the third-party team from the community, or at one of the [centralized exchanges](https://coinmarketcap.com/currencies/waves/markets/).

In addition, cryptocurrency gateways can be used to transfer external cryptocurrencies such as Bitcoin, Ethereum etc. from the external blockchain to the Waves blockchain and vice versa. The gateway provides the user with the address on the external blockchain. After receiving a confirmation of transfer to this external address, the gateway transfers the corresponding asset (less fee) to the user's Waves address. For example, a number of cryptocurrency gateways are available on Waves.Exchange, see the [Transfer Cryptocurrency](https://docs.waves.exchange/en/waves-exchange/waves-exchange-online-desktop/online-desktop-trs-gtw/online-desktop-trs-asset) article in the Waves.Exchange documentation. The corresponding asset on the Waves blockchain is backed 1:1 with cryptocurrency on the external blockchain. The asset then can be exchanged for WAVES.
