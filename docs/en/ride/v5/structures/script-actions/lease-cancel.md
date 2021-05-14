# [Ride v5] LeaseCancel

:warning: This is the documentation for the Standard Library **version 5**, which becomes available after activation of feature #16 “Ride V5, dApp-to-dApp invocations”.

`LeaseCancel` is a structure that sets the lease cancellation parameters. The lease cancellation is performed only if the structure is included in the [callable function result](/en/ride/v5/functions/callable-function#invocation-result-2).

## Constructor

```ride
LeaseCancel(leaseId: ByteVector)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | leaseId | [ByteVector](/en/ride/v5/data-types/byte-vector) | Lease ID |
