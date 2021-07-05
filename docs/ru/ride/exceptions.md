# Исключения

Прервать выполнение скрипта можно с помощью функции [throw](/en/ride/functions/built-in-functions/exception-functions):

```ride
func main(amount: Int) = {
   if (amount > 0)
   then
        "Done!"
   else
        throw("Error!")
}
```

В Ride нет обработки исключений. После выбрасывания исключения выполнение скрипта прекращается. Транзакция при этом отбрасывается либо сохраняется на блокчейне как неуспешная, подробнее см. в разделе [Валидация транзакции](/ru/blockchain/transaction/transaction-validation).
