<div style="overflow-x:auto;">
<h1>Operators</h1>
<table border="1">
 <tr>
  <th>Operator name</th>
  <th>Calculational cost</br></th>
  <th>Description</th>
  <th>Params</th>
  <th>Result type</th>
 </tr>
<tr><td>*</td>
<td>1</td>
<td>Integer multiplication</td>
<td>
<table>
<tr><td>a</td>
<td> <a href="#Int">Int</a>
</td>
<td>multiplyer</td></tr>
<tr><td>b</td>
<td> <a href="#Int">Int</a>
</td>
<td>multiplyer</td></tr>
</table>
</td>
<td> <a href="#Int">Int</a>
</td>
</tr>
<tr><td>/</td>
<td>1</td>
<td>Integer devision</td>
<td>
<table>
<tr><td>a</td>
<td> <a href="#Int">Int</a>
</td>
<td>divisible</td></tr>
<tr><td>b</td>
<td> <a href="#Int">Int</a>
</td>
<td>divisor</td></tr>
</table>
</td>
<td> <a href="#Int">Int</a>
</td>
</tr>
<tr><td>%</td>
<td>1</td>
<td>Modulo</td>
<td>
<table>
<tr><td>a</td>
<td> <a href="#Int">Int</a>
</td>
<td>divisible</td></tr>
<tr><td>b</td>
<td> <a href="#Int">Int</a>
</td>
<td>divisor</td></tr>
</table>
</td>
<td> <a href="#Int">Int</a>
</td>
</tr>
<tr><td>+</td>
<td>1</td>
<td>Integer sum</td>
<td>
<table>
<tr><td>a</td>
<td> <a href="#Int">Int</a>
</td>
<td>term</td></tr>
<tr><td>b</td>
<td> <a href="#Int">Int</a>
</td>
<td>term</td></tr>
</table>
</td>
<td> <a href="#Int">Int</a>
</td>
</tr>
<tr><td>-</td>
<td>1</td>
<td>Integer substitution</td>
<td>
<table>
<tr><td>a</td>
<td> <a href="#Int">Int</a>
</td>
<td>term</td></tr>
<tr><td>b</td>
<td> <a href="#Int">Int</a>
</td>
<td>term</td></tr>
</table>
</td>
<td> <a href="#Int">Int</a>
</td>
</tr>
<tr><td>+</td>
<td>10</td>
<td>Limited strings concatination</td>
<td>
<table>
<tr><td>a</td>
<td> <a href="#String">String</a>
</td>
<td>prefix</td></tr>
<tr><td>b</td>
<td> <a href="#String">String</a>
</td>
<td>suffix</td></tr>
</table>
</td>
<td> <a href="#String">String</a>
</td>
</tr>
<tr><td>+</td>
<td>10</td>
<td>Limited bytes vectors concatination</td>
<td>
<table>
<tr><td>a</td>
<td> <a href="#ByteVector">ByteVector</a>
</td>
<td>prefix</td></tr>
<tr><td>b</td>
<td> <a href="#ByteVector">ByteVector</a>
</td>
<td>suffix</td></tr>
</table>
</td>
<td> <a href="#ByteVector">ByteVector</a>
</td>
</tr>
<tr><td>&#61;&#61;</td>
<td>1</td>
<td>Equality</td>
<td>
<table>
<tr><td>a</td>
<td> T
</td>
<td>value</td></tr>
<tr><td>b</td>
<td> T
</td>
<td>value</td></tr>
</table>
</td>
<td> <a href="#Boolean">Boolean</a>
</td>
</tr>
<tr><td>!&#61;</td>
<td>1</td>
<td>Inequality</td>
<td>
<table>
<tr><td>@a</td>
<td> T
</td>
<td>value</td></tr>
<tr><td>@b</td>
<td> T
</td>
<td>value</td></tr>
</table>
</td>
<td> <a href="#Boolean">Boolean</a>
</td>
</tr>
<tr><td>&gt;&#61;</td>
<td>1</td>
<td>Integer grater or equal comparation</td>
<td>
<table>
<tr><td>a</td>
<td> <a href="#Int">Int</a>
</td>
<td>term</td></tr>
<tr><td>b</td>
<td> <a href="#Int">Int</a>
</td>
<td>term</td></tr>
</table>
</td>
<td> <a href="#Boolean">Boolean</a>
</td>
</tr>
<tr><td>&gt;</td>
<td>1</td>
<td>Integer grater comparation</td>
<td>
<table>
<tr><td>a</td>
<td> <a href="#Int">Int</a>
</td>
<td>term</td></tr>
<tr><td>b</td>
<td> <a href="#Int">Int</a>
</td>
<td>term</td></tr>
</table>
</td>
<td> <a href="#Boolean">Boolean</a>
</td>
</tr>
<tr><td>-</td>
<td>1</td>
<td>Change integer sign</td>
<td>
<table>
<tr><td>@n</td>
<td> <a href="#Int">Int</a>
</td>
<td>value</td></tr>
</table>
</td>
<td> <a href="#Int">Int</a>
</td>
</tr>
<tr><td>!</td>
<td>1</td>
<td>unary negation</td>
<td>
<table>
<tr><td>@p</td>
<td> <a href="#Boolean">Boolean</a>
</td>
<td>boolean</td></tr>
</table>
</td>
<td> <a href="#Boolean">Boolean</a>
</td>
</tr>
</table>
</div>