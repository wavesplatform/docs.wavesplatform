# Documentation Updates

## June Articles

### Building Apps

Added guides:

* [How to Create dApp: Complete Tutorial](/en/building-apps/smart-contracts/writing-dapps)
* [Get Order List](/en/building-apps/how-to/basic/trading#get-order-list)

Tools:

* [Waves IDE](/en/building-apps/smart-contracts/tools/waves-ide)
* [Visual Studio Code Extension](/en/building-apps/smart-contracts/tools/ride-vscode)
* [Surfboard](/en/building-apps/smart-contracts/tools/surfboard)
* [Ride REPL](/en/building-apps/smart-contracts/tools/repl)

### Ride

#### Built-in Functions

* [bn256groth16Verify](/ru/ride/functions/built-in-functions/verification-functions#bn256groth16verify)

## May Articles

### Blockchain

* [Block Binary Format](/en/blockchain/binary-format/block-binary-format): version 4 and 5

### Ride

* Updated articles:
   * [Standard Library](/en/ride/script/standard-library)
   * [Script Types](/en/ride/script/script-types/)
   * [Limitations](/en/ride/limits/)
* Added the [Ride Components](/en/ride/advanced/components) article

#### Script Actions

* [SponsorFee](/en/ride/structures/script-actions/sponsor-fee)

#### Built-in Functions

* [ecrecover](/en/ride/functions/built-in-functions/verification-functions#ecrecover)
* [makeString](/en/ride/functions/built-in-functions/string-functions#makestring-list-string-string-string)
* [List functions](/en/ride/functions/built-in-functions/list-functions): `containsElement`, `indexOf`, `lastIndexOf`, `max`, `min`

## April articles

### Blockchain

* Added binary format descriptions for new versions of [transactions](/en/blockchain/binary-format/transaction-binary-format/) and [orders](/en/blockchain/binary-format/order-binary-format).
* Updated the [Transaction validation](/en/blockchain/transaction/transaction-validation) article.

### Building Apps

Added how-to guides:

* [Creating and Managing Custom Token](/en/building-apps/how-to/assets/issue)
* [Airdrop](/en/building-apps/how-to/assets/airdrop)
* [Receiving Payments](/en/building-apps/how-to/assets/payment)

## March Articles

### Blockchain

* [Transactions Root](/en/blockchain/block/merkle-root)

### Ride

#### Limitations

* [Data Weight](/en/ride/limits/weight)

#### Built-in Functions

* [createMerkleRoot](/en/ride/functions/built-in-functions/verification-functions#createmerkleroot)
* [transferTransactionFromProto](/en/ride/functions/built-in-functions/converting-functions#transfertransactionfromproto)

Updated the the following descriptions:
* [hashing functions](/en/ride/functions/built-in-functions/hashing-functions): `blake2b256`, `keccak256`, `sha256`;
* [verification functions](/en/ride/functions/built-in-functions/verification-functions): `groth16Verify`, `rsaVerify`, `sigVerify`.

## February Articles

### Building Apps

Added how-to guides:

* [Retrieving information from the blockchain](/en/building-apps/how-to/basic/retrieve)
* [Creating and broadcasting transactions to the blockchain](/en/building-apps/how-to/basic/transaction)
* [Buying and selling assets on exchange](/en/building-apps/how-to/basic/trading)

### Ride

#### Built-in Functions

* [calculateAssetId](/en/ride/functions/built-in-functions/blockchain-functions#calculate)
* [groth16Verify](/en/ride/functions/built-in-functions/verification-functions#groth16Verify)

## December Articles

### Blockchain network

* [Stage network](/en/blockchain/blockchain-network/stage-network)

### Blockchain

* Block
  * Block generation
    * [Generation signature](/en/blockchain/block/block-generation/generation-signature)

* Transaction type
   * [Update asset info transaction](/en/blockchain/transaction-type/update-asset-info-transaction)

* Binary format
   * [Update asset info transaction binary format](/en/blockchain/binary-format/transaction-binary-format/update-asset-info-transaction-binary-format)

### Ride

* [FOLD&lt;N&gt; Macro](/en/ride/fold-macro)
* Structures
  * Common structures
    * [BinaryEntry](/en/ride/structures/script-actions/binary-entry)
    * [BooleanEntry](/en/ride/structures/script-actions/boolean-entry)
    * [Burn](/en/ride/structures/script-actions/burn)
    * [DeleteEntry](/en/ride/structures/script-actions/delete-entry)
    * [IntegerEntry](/en/ride/structures/script-actions/int-entry)
    * [Issue](/en/ride/structures/script-actions/issue)
    * [Reissue](/en/ride/structures/script-actions/reissue)
    * [StringEntry](/en/ride/structures/script-actions/string-entry)

  * Transaction structures
    * [UpdateAssetInfoTransaction](/en/ride/structures/transaction-structures/update-asset-info-transaction)

### Node API

* [Request headers](/en/waves-node/node-api/headers)

### API & SDK

* [Signer](/en/building-apps/waves-api-and-sdk/client-libraries/signer)

## November articles

### Smart contracts

* [What is a Smart Account](/en/building-apps/smart-contracts/what-is-smart-account)
* [Creating smart account](/en/building-apps/smart-contracts/how-to-create-smart-account)

## October articles

### Programming

* [What is a Smart Asset](/en/building-apps/smart-contracts/what-is-smart-asset)
* [What is a dApp](/en/building-apps/smart-contracts/what-is-a-dapp)

### Blockchain

* [Mining](/en/blockchain/mining/) — <span style="color:green">updated</span>
  * [Mining reward](/en/blockchain/mining/mining-reward) — <span style="color:green">updated</span>

### Oracles

* [Data transaction tool](/en/ecosystem/waves-oracles/data-transaction-tool)

### Ride

* Data types
  * [ByteVector](/en/ride/data-types/byte-vector) — <span style="color:green">updated</span>
  * [Int](/en/ride/data-types/int) — <span style="color:green">updated</span>
* Functions
  * Built-in functions
    * [Byte array functions](/en/ride/functions/built-in-functions/byte-array-functions) — <span style="color:green">updated</span>
    * [Hashing functions](/en/ride/functions/built-in-functions/hashing-functions) — <span style="color:green">updated</span>
    * [Math functions](/en/ride/functions/built-in-functions/math-functions) — <span style="color:green">updated</span>
    * [String functions](/en/ride/functions/built-in-functions/string-functions) — <span style="color:green">updated</span>

### Glossary

* [Glossary](/en/blockchain/glossary)

## September articles

### Blockchain

* [Account](/en/blockchain/account/) — <span style="color:green">updated</span>
  * [Account balance](/en/blockchain/account/account-balance)
* [Leasing](/en/blockchain/leasing) — <span style="color:green">updated</span>
* [Order](/en/blockchain/order) — <span style="color:green">updated</span>

### Ride

* Script
  * [Script body](/en/ride/script/script-body)
  * [Script context](/en/ride/script/script-context)
  * Script types
    * [Account script](/en/ride/script/script-types/account-script) — <span style="color:green">updated</span>
  * [Standard Library](/en/ride/script/standard-library)
* Functions
  * [Built-in functions](/en/ride/functions/built-in-functions/) — <span style="color:green">updated</span>
    * [Verification functions](/en/ride/functions/built-in-functions/verification-functions) — <span style="color:green">updated</span>
* Variables
  * [Built-in variables](/en/ride/variables/built-in-variables)

### Waves node

* [Node configuration](/en/waves-node/node-configuration) — <span style="color:green">updated</span>

* Token Rating
  * [Token management](/en/ecosystem/waves-token-rating/token-management)

> Check out documentation repository on [Github](https://github.com/wavesplatform/docs.wavesplatform)
