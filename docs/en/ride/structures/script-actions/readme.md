# Script actions

Script actions are executed, that is, they make changes on the blockchain only if they are included in the resulting expression of the callable function. See more details in the [Callable function](/en/ride/functions/callable-function) article.

| Action | Standard library version | Description |
|---|---|
| [BinaryEntry](/en/ride/structures/script-actions/binary-entry) | 4 | Add or modify a binary entry of the [account data storage](/en/blockchain/account/account-data-storage) |
| [BooleanEntry](/en/ride/structures/script-actions/boolean-entry) | 4 | Add or modify a boolean entry |
| [Burn](/en/ride/structures/script-actions/burn) | 4 | Burn a token |
| [DataEntry](/en/ride/structures/script-actions/data-entry) | 3 | Add or modify an entry of any type |
| [DeleteEntry](/en/ride/structures/script-actions/delete-entry) | 4 | Delete an entry |
| [IntegerEntry](/en/ride/structures/script-actions/int-entry) | 4 | Add or modify an integer entry |
| [Issue](/en/ride/structures/script-actions/issue) | 4 | Issue a token |
| [Reissue](/en/ride/structures/script-actions/reissue) | 4 | Reissue a token |
| [ScriptTransfer](/en/ride/structures/script-actions/script-transfer) | 3, 4 | Transfer a token |
| [SponsorFee](/en/ride/structures/script-actions/sponsor-fee) | 4 | Set up a sponsorship |
| [StringEntry](/en/ride/structures/script-actions/string-entry) | 4 | Add or modify a string entry |

> :warning: Standard Library Version 4 becomes available since node version 1.2.0, after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”. Versions 1.2.x are currently available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.
