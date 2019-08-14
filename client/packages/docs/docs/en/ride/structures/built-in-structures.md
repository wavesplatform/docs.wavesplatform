<div style="overflow-x:auto;">
  <h1>Build-in structures</h1>
<table border="1">
<tr>
  <th>Structure name</th>
  <th>Parameters</th>
</tr>
<tr><td><a id="AssetPair">AssetPair</a></td><td>

<table>
<tr><td>amountAsset</td><td>
  OPTION[<a href="#ByteVector">ByteVector</a>]
</td></tr><tr><td>priceAsset</td><td>
  OPTION[<a href="#ByteVector">ByteVector</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="Order">Order</a></td><td>

<table>
<tr><td>id</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>matcherPublicKey</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>assetPair</td><td>
  <a href="#AssetPair">AssetPair</a>
</td></tr><tr><td>orderType</td><td>
   <a href="#Buy">Buy</a>
   <a href="#Sell">Sell</a>
</td></tr><tr><td>price</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>amount</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>timestamp</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>expiration</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>matcherFee</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>matcherFeeAssetId</td><td>
  OPTION[<a href="#ByteVector">ByteVector</a>]
</td></tr><tr><td>sender</td><td>
  <a href="#Address">Address</a>
</td></tr><tr><td>senderPublicKey</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>bodyBytes</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>proofs</td><td>
  LIST[<a href="#ByteVector">ByteVector</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="Transaction">Transaction</a></td><td>

<a href="#ReissueTransaction">ReissueTransaction</a> <a href="#BurnTransaction">BurnTransaction</a> <a href="#MassTransferTransaction">MassTransferTransaction</a> <a href="#ExchangeTransaction">ExchangeTransaction</a> <a href="#TransferTransaction">TransferTransaction</a> <a href="#SetAssetScriptTransaction">SetAssetScriptTransaction</a> <a href="#InvokeScriptTransaction">InvokeScriptTransaction</a> <a href="#IssueTransaction">IssueTransaction</a> <a href="#LeaseTransaction">LeaseTransaction</a> <a href="#LeaseCancelTransaction">LeaseCancelTransaction</a> <a href="#CreateAliasTransaction">CreateAliasTransaction</a> <a href="#SetScriptTransaction">SetScriptTransaction</a> <a href="#SponsorFeeTransaction">SponsorFeeTransaction</a> <a href="#DataTransaction">DataTransaction</a> 
</td></tr>
<tr><td><a id="GenesisTransaction">GenesisTransaction</a></td><td>

<table>
<tr><td>amount</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>recipient</td><td>
   <a href="#Address">Address</a>
   <a href="#Alias">Alias</a>
</td></tr><tr><td>id</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>fee</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>timestamp</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>version</td><td>
  <a href="#Int">Int</a>
</td></tr></table>
</td></tr>
<tr><td><a id="PaymentTransaction">PaymentTransaction</a></td><td>

<table>
<tr><td>amount</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>recipient</td><td>
   <a href="#Address">Address</a>
   <a href="#Alias">Alias</a>
</td></tr><tr><td>id</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>fee</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>timestamp</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>version</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>sender</td><td>
  <a href="#Address">Address</a>
</td></tr><tr><td>senderPublicKey</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>bodyBytes</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>proofs</td><td>
  LIST[<a href="#ByteVector">ByteVector</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="ReissueTransaction">ReissueTransaction</a></td><td>

<table>
<tr><td>quantity</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>assetId</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>reissuable</td><td>
  <a href="#Boolean">Boolean</a>
</td></tr><tr><td>id</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>fee</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>timestamp</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>version</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>sender</td><td>
  <a href="#Address">Address</a>
</td></tr><tr><td>senderPublicKey</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>bodyBytes</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>proofs</td><td>
  LIST[<a href="#ByteVector">ByteVector</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="BurnTransaction">BurnTransaction</a></td><td>

<table>
<tr><td>quantity</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>assetId</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>id</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>fee</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>timestamp</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>version</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>sender</td><td>
  <a href="#Address">Address</a>
</td></tr><tr><td>senderPublicKey</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>bodyBytes</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>proofs</td><td>
  LIST[<a href="#ByteVector">ByteVector</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="MassTransferTransaction">MassTransferTransaction</a></td><td>

<table>
<tr><td>feeAssetId</td><td>
  OPTION[<a href="#ByteVector">ByteVector</a>]
</td></tr><tr><td>assetId</td><td>
  OPTION[<a href="#ByteVector">ByteVector</a>]
</td></tr><tr><td>totalAmount</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>transfers</td><td>
  LIST[<a href="#Transfer">Transfer</a>]
</td></tr><tr><td>transferCount</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>attachment</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>id</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>fee</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>timestamp</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>version</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>sender</td><td>
  <a href="#Address">Address</a>
</td></tr><tr><td>senderPublicKey</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>bodyBytes</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>proofs</td><td>
  LIST[<a href="#ByteVector">ByteVector</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="ExchangeTransaction">ExchangeTransaction</a></td><td>

<table>
<tr><td>buyOrder</td><td>
  <a href="#Order">Order</a>
</td></tr><tr><td>sellOrder</td><td>
  <a href="#Order">Order</a>
</td></tr><tr><td>price</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>amount</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>buyMatcherFee</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>sellMatcherFee</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>id</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>fee</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>timestamp</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>version</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>sender</td><td>
  <a href="#Address">Address</a>
</td></tr><tr><td>senderPublicKey</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>bodyBytes</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>proofs</td><td>
  LIST[<a href="#ByteVector">ByteVector</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="TransferTransaction">TransferTransaction</a></td><td>

<table>
<tr><td>feeAssetId</td><td>
  OPTION[<a href="#ByteVector">ByteVector</a>]
</td></tr><tr><td>amount</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>assetId</td><td>
  OPTION[<a href="#ByteVector">ByteVector</a>]
</td></tr><tr><td>recipient</td><td>
   <a href="#Address">Address</a>
   <a href="#Alias">Alias</a>
</td></tr><tr><td>attachment</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>id</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>fee</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>timestamp</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>version</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>sender</td><td>
  <a href="#Address">Address</a>
</td></tr><tr><td>senderPublicKey</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>bodyBytes</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>proofs</td><td>
  LIST[<a href="#ByteVector">ByteVector</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="SetAssetScriptTransaction">SetAssetScriptTransaction</a></td><td>

<table>
<tr><td>script</td><td>
  OPTION[<a href="#ByteVector">ByteVector</a>]
</td></tr><tr><td>assetId</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>id</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>fee</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>timestamp</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>version</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>sender</td><td>
  <a href="#Address">Address</a>
</td></tr><tr><td>senderPublicKey</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>bodyBytes</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>proofs</td><td>
  LIST[<a href="#ByteVector">ByteVector</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="InvokeScriptTransaction">InvokeScriptTransaction</a></td><td>

<table>
<tr><td>dappAddress</td><td>
  <a href="#Address">Address</a>
</td></tr><tr><td>payment</td><td>
  OPTION[<a href="#AttachedPayment">AttachedPayment</a>]
</td></tr><tr><td>feeAssetId</td><td>
  OPTION[<a href="#ByteVector">ByteVector</a>]
</td></tr><tr><td>function</td><td>
  <a href="#String">String</a>
</td></tr><tr><td>args</td><td>
  LIST[<a href="#UNION(Boolean|ByteVector|Int|String)">UNION(Boolean|ByteVector|Int|String)</a>]
</td></tr><tr><td>id</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>fee</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>timestamp</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>version</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>sender</td><td>
  <a href="#Address">Address</a>
</td></tr><tr><td>senderPublicKey</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>bodyBytes</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>proofs</td><td>
  LIST[<a href="#ByteVector">ByteVector</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="IssueTransaction">IssueTransaction</a></td><td>

<table>
<tr><td>quantity</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>name</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>description</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>reissuable</td><td>
  <a href="#Boolean">Boolean</a>
</td></tr><tr><td>decimals</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>script</td><td>
  OPTION[<a href="#ByteVector">ByteVector</a>]
</td></tr><tr><td>id</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>fee</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>timestamp</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>version</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>sender</td><td>
  <a href="#Address">Address</a>
</td></tr><tr><td>senderPublicKey</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>bodyBytes</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>proofs</td><td>
  LIST[<a href="#ByteVector">ByteVector</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="LeaseTransaction">LeaseTransaction</a></td><td>

<table>
<tr><td>amount</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>recipient</td><td>
   <a href="#Address">Address</a>
   <a href="#Alias">Alias</a>
</td></tr><tr><td>id</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>fee</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>timestamp</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>version</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>sender</td><td>
  <a href="#Address">Address</a>
</td></tr><tr><td>senderPublicKey</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>bodyBytes</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>proofs</td><td>
  LIST[<a href="#ByteVector">ByteVector</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="LeaseCancelTransaction">LeaseCancelTransaction</a></td><td>

<table>
<tr><td>leaseId</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>id</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>fee</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>timestamp</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>version</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>sender</td><td>
  <a href="#Address">Address</a>
</td></tr><tr><td>senderPublicKey</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>bodyBytes</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>proofs</td><td>
  LIST[<a href="#ByteVector">ByteVector</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="CreateAliasTransaction">CreateAliasTransaction</a></td><td>

<table>
<tr><td>alias</td><td>
  <a href="#String">String</a>
</td></tr><tr><td>id</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>fee</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>timestamp</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>version</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>sender</td><td>
  <a href="#Address">Address</a>
</td></tr><tr><td>senderPublicKey</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>bodyBytes</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>proofs</td><td>
  LIST[<a href="#ByteVector">ByteVector</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="SetScriptTransaction">SetScriptTransaction</a></td><td>

<table>
<tr><td>script</td><td>
  OPTION[<a href="#ByteVector">ByteVector</a>]
</td></tr><tr><td>id</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>fee</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>timestamp</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>version</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>sender</td><td>
  <a href="#Address">Address</a>
</td></tr><tr><td>senderPublicKey</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>bodyBytes</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>proofs</td><td>
  LIST[<a href="#ByteVector">ByteVector</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="SponsorFeeTransaction">SponsorFeeTransaction</a></td><td>

<table>
<tr><td>assetId</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>minSponsoredAssetFee</td><td>
  OPTION[<a href="#Int">Int</a>]
</td></tr><tr><td>id</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>fee</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>timestamp</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>version</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>sender</td><td>
  <a href="#Address">Address</a>
</td></tr><tr><td>senderPublicKey</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>bodyBytes</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>proofs</td><td>
  LIST[<a href="#ByteVector">ByteVector</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="DataTransaction">DataTransaction</a></td><td>

<table>
<tr><td>data</td><td>
  LIST[<a href="#DataEntry">DataEntry</a>]
</td></tr><tr><td>id</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>fee</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>timestamp</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>version</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>sender</td><td>
  <a href="#Address">Address</a>
</td></tr><tr><td>senderPublicKey</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>bodyBytes</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>proofs</td><td>
  LIST[<a href="#ByteVector">ByteVector</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="WriteSet">WriteSet</a></td><td>

<table>
<tr><td>data</td><td>
  LIST[<a href="#DataEntry">DataEntry</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="AttachedPayment">AttachedPayment</a></td><td>

<table>
<tr><td>assetId</td><td>
  OPTION[<a href="#ByteVector">ByteVector</a>]
</td></tr><tr><td>amount</td><td>
  <a href="#Int">Int</a>
</td></tr></table>
</td></tr>
<tr><td><a id="ScriptTransfer">ScriptTransfer</a></td><td>

<table>
<tr><td>recipient</td><td>
   <a href="#Address">Address</a>
   <a href="#Alias">Alias</a>
</td></tr><tr><td>amount</td><td>
  <a href="#Int">Int</a>
</td></tr><tr><td>asset</td><td>
  OPTION[<a href="#ByteVector">ByteVector</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="TransferSet">TransferSet</a></td><td>

<table>
<tr><td>transfers</td><td>
  LIST[<a href="#ScriptTransfer">ScriptTransfer</a>]
</td></tr></table>
</td></tr>
<tr><td><a id="ScriptResult">ScriptResult</a></td><td>

<table>
<tr><td>data</td><td>
  <a href="#WriteSet">WriteSet</a>
</td></tr><tr><td>transfers</td><td>
  <a href="#TransferSet">TransferSet</a>
</td></tr></table>
</td></tr>
<tr><td><a id="Invocation">Invocation</a></td><td>

<table>
<tr><td>caller</td><td>
  <a href="#Address">Address</a>
</td></tr><tr><td>callerPublicKey</td><td>
  <a href="#ByteVector">ByteVector</a>
</td></tr><tr><td>payment</td><td>
  OPTION[<a href="#AttachedPayment">AttachedPayment</a>]
</td></tr></table>
</td></tr>
</table>
</div>