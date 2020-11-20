# Private Functions

The following private functions have been deprecated:

* `POST /assets/issue`
* `POST /assets/transfer`
* `POST /assets/reissue`
* `POST /assets/burn`
* `POST /assets/masstransfer`

Use `POST /transactions/sign` instead, specifying the transaction type in the request body. For details and examples, see the [How to Operate with Transactions](/en/waves-node/transactions) article.
