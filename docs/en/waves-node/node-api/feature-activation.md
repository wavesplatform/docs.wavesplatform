# Activation

To support the Features Activation Protocol the following API method were added to the node/activation route. In response, the JSON that describes the current state of features will be returned.

```js
 {
   "height": 678929,
   "approvalInterval": 10000,
   "approvalThreshold": 8000,
   "nextCheck": 680000,
   "features": [
       {
           "id": 1,
           "blockhainStatus": "ACTIVATED",
           "nodeStatus": "SUPPORTED"
       },
       {
           "id": 2,
           "blockhainStatus": "APPROVED",
           "nodeStatus": "SUPPORTED"
       },
       {
           "id": 3,
           "blockchainStatus": "VOTING",
           "nodeStatus": "SUPPORTED",
           "supportBlocks": 7892
       },
       {
           "id": 4,
           "blockchainStatus": "VOTING",
           "nodeStatus": "UNSUPPORTED",
           "supportBlocks": 7892
       }
   ]
 }
```

Fields of returned object:

* `height` - current blockchain height on node

* `approvalInterval` - Approval or Activation periods length in blocks

* `approvalThreshold` - Number of blocks that supports a feature to approve it

* `nextCheck` - Next height to calculate approval or activation statuses of features

* `features` - List of all features

* `id` - Feature ID

* `blockchainStatus` - Current status of the feature on the blockchain, could be DEFINED, VOTING, APPROVED or ACTIVATED

* `nodeStatus` - Node feature status, could be SUPPORTED or UNSUPPORTED

* `supportBlocks` - Number of blocks that contains support for the feature