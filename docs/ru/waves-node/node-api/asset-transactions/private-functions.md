# Приватные функции

Следующие приватные методы устарели:

* `POST /assets/issue`
* `POST /assets/transfer`
* `POST /assets/reissue`
* `POST /assets/burn`
* `POST /assets/masstransfer`

Используйте вместо них метод `POST /transactions/sign`, указав в теле запроса тип транзакции. Подробности и примеры см. в разделе [Работа с транзакциями в REST API ноды](/ru/waves-node/transactions).
