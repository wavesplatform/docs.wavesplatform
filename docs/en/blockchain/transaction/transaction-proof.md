# Transaction Signature and Proofs

**Transaction proofs** are used for transaction verification, that is, the check that transaction is allowed by sender's account. The array of proofs can contain the transaction signature, or several signatures, or other data. The maximum nunber of proofs is 8.

> In earlier versions of some types of transactions the `signature` field is used instead of `proofs`.

## Signature

If the transaction sender is an ordinary account (without script), the array of proofs must contain the sender's digital signature.

The sender generates a signature using account's private key. Waves protocol uses Curve25519 (ED25519 with X25519 keys) to create and verify signatures. Signature generation is described in the [Cryptographic Practical Details](/en/blockchain/waves-protocol/cryptographic-practical-details) article. For  [Как подписать и отправить транзакцию](/ru/blockchain/transaction/#как-подписать-и-отправить-транзакцию).

Along with signature, the transaction contains the sender public key, so the node (and anyone) can verify the integrity of the transaction data and the authenticity of the signature, that is, make sure that the signature of the transaction matches the public key.

## Proofs

If the transaction sender is a [dApp](/en/blockchain/account/dapp) or a [smart account](/ru/blockchain/account/smart-account) the transaction is verified by the script assigned to the account instead of signature verification. The script allows or denies the transaction depending on whether it meets the specified conditions. In particular, the script can perform various checks of the confirmation array.

The widespread example is a smart account with multisignature where three co-owner users store shared funds. The account script allows the transaction on behalf of the smart account if the array of proofs contains valid signatures of at least two of the three co-owner accounts. The script code is available in [Waves IDE](https://waves-ide.com/): **Library → smart-accounts → Multisig.ride**.
