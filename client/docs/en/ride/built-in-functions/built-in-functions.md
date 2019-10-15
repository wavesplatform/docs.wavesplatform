<h1>Built-in functions</h1>
<div style="overflow-x:auto;">
   <table border="1">
      <tr>
         <th>Function Name</th>
         <th>Cost(complexity)</th>
         <th>Description</th>
         <th>Params</th>
         <th>Return Type</th>
      </tr>
      <tr>
         <td>fraction</td>
         <td>1</td>
         <td>Multiply and dividion with big integer intermediate representation</td>
         <td>
            <table>
               <tr>
                  <td>value</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>multiplyer</td>
               </tr>
               <tr>
                  <td>numerator</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>multiplyer</td>
               </tr>
               <tr>
                  <td>denominator</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>divisor</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Int">Int</a></td>
      </tr>
      <tr>
         <td>size</td>
         <td>1</td>
         <td>Size of bytes str</td>
         <td>
            <table>
               <tr>
                  <td>byteVector</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>vector</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Int">Int</a></td>
      </tr>
      <tr>
         <td>toBytes</td>
         <td>1</td>
         <td>Bytes array representation</td>
         <td>
            <table>
               <tr>
                  <td>b</td>
                  <td>  <a href="#Boolean">Boolean</a></td>
                  <td>value</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#ByteVector">ByteVector</a></td>
      </tr>
      <tr>
         <td>toBytes</td>
         <td>1</td>
         <td>Bytes array representation</td>
         <td>
            <table>
               <tr>
                  <td>n</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>value</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#ByteVector">ByteVector</a></td>
      </tr>
      <tr>
         <td>toBytes</td>
         <td>1</td>
         <td>Bytes array representation</td>
         <td>
            <table>
               <tr>
                  <td>s</td>
                  <td>  <a href="#String">String</a></td>
                  <td>value</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#ByteVector">ByteVector</a></td>
      </tr>
      <tr>
         <td>take</td>
         <td>1</td>
         <td>Take firsts bytes subvector</td>
         <td>
            <table>
               <tr>
                  <td>xs</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>vector</td>
               </tr>
               <tr>
                  <td>number</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>Bytes number</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#ByteVector">ByteVector</a></td>
      </tr>
      <tr>
         <td>drop</td>
         <td>1</td>
         <td>Skip firsts bytes</td>
         <td>
            <table>
               <tr>
                  <td>xs</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>vector</td>
               </tr>
               <tr>
                  <td>number</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>Bytes number</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#ByteVector">ByteVector</a></td>
      </tr>
      <tr>
         <td>takeRight</td>
         <td>19</td>
         <td>Take vector tail</td>
         <td>
            <table>
               <tr>
                  <td>@xs</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>vector</td>
               </tr>
               <tr>
                  <td>@number</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>taking size</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#ByteVector">ByteVector</a></td>
      </tr>
      <tr>
         <td>dropRight</td>
         <td>19</td>
         <td>Cut vectors tail</td>
         <td>
            <table>
               <tr>
                  <td>@xs</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>vector</td>
               </tr>
               <tr>
                  <td>@number</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>cuting size</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#ByteVector">ByteVector</a></td>
      </tr>
      <tr>
         <td>size</td>
         <td>1</td>
         <td>Scting size in characters</td>
         <td>
            <table>
               <tr>
                  <td>xs</td>
                  <td>  <a href="#String">String</a></td>
                  <td>string</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Int">Int</a></td>
      </tr>
      <tr>
         <td>toString</td>
         <td>1</td>
         <td>String representation</td>
         <td>
            <table>
               <tr>
                  <td>b</td>
                  <td>  <a href="#Boolean">Boolean</a></td>
                  <td>value</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#String">String</a></td>
      </tr>
      <tr>
         <td>toString</td>
         <td>1</td>
         <td>String representation</td>
         <td>
            <table>
               <tr>
                  <td>n</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>value</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#String">String</a></td>
      </tr>
      <tr>
         <td>take</td>
         <td>1</td>
         <td>Take string prefix</td>
         <td>
            <table>
               <tr>
                  <td>xs</td>
                  <td>  <a href="#String">String</a></td>
                  <td>sctring</td>
               </tr>
               <tr>
                  <td>number</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>prefix size in characters</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#String">String</a></td>
      </tr>
      <tr>
         <td>drop</td>
         <td>1</td>
         <td>Remmove sring prefix</td>
         <td>
            <table>
               <tr>
                  <td>xs</td>
                  <td>  <a href="#String">String</a></td>
                  <td>string</td>
               </tr>
               <tr>
                  <td>number</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>prefix size</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#String">String</a></td>
      </tr>
      <tr>
         <td>takeRight</td>
         <td>19</td>
         <td>Take string suffix</td>
         <td>
            <table>
               <tr>
                  <td>@xs</td>
                  <td>  <a href="#String">String</a></td>
                  <td>String</td>
               </tr>
               <tr>
                  <td>@number</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>suffix size in characters</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#String">String</a></td>
      </tr>
      <tr>
         <td>dropRight</td>
         <td>19</td>
         <td>Remove string suffix</td>
         <td>
            <table>
               <tr>
                  <td>@xs</td>
                  <td>  <a href="#String">String</a></td>
                  <td>string</td>
               </tr>
               <tr>
                  <td>@number</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>suffix size in characters</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#String">String</a></td>
      </tr>
      <tr>
         <td>_isInstanceOf</td>
         <td>1</td>
         <td>Internal function to check value type</td>
         <td>
            <table>
               <tr>
                  <td>obj</td>
                  <td>  T</td>
                  <td>value</td>
               </tr>
               <tr>
                  <td>of</td>
                  <td>  <a href="#String">String</a></td>
                  <td>type name</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Boolean">Boolean</a></td>
      </tr>
      <tr>
         <td>isDefined</td>
         <td>1</td>
         <td>Check the value is defined</td>
         <td>
            <table>
               <tr>
                  <td>@a</td>
                  <td>  OPTION[T]</td>
                  <td>Option value</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Boolean">Boolean</a></td>
      </tr>
      <tr>
         <td>extract</td>
         <td>13</td>
         <td>Extract value from option or fail</td>
         <td>
            <table>
               <tr>
                  <td>@a</td>
                  <td>  OPTION[T]</td>
                  <td>Optional value</td>
               </tr>
            </table>
         </td>
         <td>  T</td>
      </tr>
      <tr>
         <td>throw</td>
         <td>1</td>
         <td>Fail script</td>
         <td>
            <table>
               <tr>
                  <td>err</td>
                  <td>  <a href="#String">String</a></td>
                  <td>Error message</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Nothing">Nothing</a></td>
      </tr>
      <tr>
         <td>throw</td>
         <td>1</td>
         <td>Fail script</td>
         <td>
            <table></table>
         </td>
         <td>  <a href="#Nothing">Nothing</a></td>
      </tr>
      <tr>
         <td>getElement</td>
         <td>2</td>
         <td>Get list element by position</td>
         <td>
            <table>
               <tr>
                  <td>arr</td>
                  <td>  LIST[T]</td>
                  <td>list</td>
               </tr>
               <tr>
                  <td>pos</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>element position</td>
               </tr>
            </table>
         </td>
         <td>  T</td>
      </tr>
      <tr>
         <td>size</td>
         <td>2</td>
         <td>Size of list</td>
         <td>
            <table>
               <tr>
                  <td>arr</td>
                  <td>  LIST[T]</td>
                  <td>list</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Int">Int</a></td>
      </tr>
      <tr>
         <td>value</td>
         <td>13</td>
         <td>Extract value from option or fail</td>
         <td>
            <table>
               <tr>
                  <td>@a</td>
                  <td>  OPTION[T]</td>
                  <td>Optional value</td>
               </tr>
            </table>
         </td>
         <td>  T</td>
      </tr>
      <tr>
         <td>valueWithErrorMessage</td>
         <td>13</td>
         <td>Extract value from option or fail with message</td>
         <td>
            <table>
               <tr>
                  <td>@a</td>
                  <td>  OPTION[T]</td>
                  <td>Optional value</td>
               </tr>
               <tr>
                  <td>@msg</td>
                  <td>  String</td>
                  <td>Error message</td>
               </tr>
            </table>
         </td>
         <td>  T</td>
      </tr>
      tr>
      <td>extractWithErrorMessage</td>
      <td>13</td>
      <td>Extract value from option or fail with message</td>
      <td>
         <table>
            <tr>
               <td>@a</td>
               <td>  OPTION[T]</td>
               <td>Optional value</td>
            </tr>
            <tr>
               <td>@msg</td>
               <td>  String</td>
               <td>Error message</td>
            </tr>
         </table>
      </td>
      <td>  T</td>
      </tr>
      <tr>
         <td>cons</td>
         <td>2</td>
         <td>Construct a new List[T]</td>
         <td>
            <table>
               <tr>
                  <td>head</td>
                  <td>  A</td>
                  <td>head</td>
               </tr>
               <tr>
                  <td>tail</td>
                  <td>  LIST[B]</td>
                  <td>tail</td>
               </tr>
            </table>
         </td>
         <td>  LIST[]</td>
      </tr>
      <tr>
         <td>toUtf8String</td>
         <td>20</td>
         <td>Convert UTF8 bytes to string</td>
         <td>
            <table>
               <tr>
                  <td>u</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>utf8</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#String">String</a></td>
      </tr>
      <tr>
         <td>toInt</td>
         <td>10</td>
         <td>Deserialize big endian 8-bytes value</td>
         <td>
            <table>
               <tr>
                  <td>bin</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>8-bytes BE binaries</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Int">Int</a></td>
      </tr>
      <tr>
         <td>toInt</td>
         <td>10</td>
         <td>Deserialize big endian 8-bytes value</td>
         <td>
            <table>
               <tr>
                  <td>bin</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>8-bytes BE binaries</td>
               </tr>
               <tr>
                  <td>offet</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>bytes offset</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Int">Int</a></td>
      </tr>
      <tr>
         <td>indexOf</td>
         <td>20</td>
         <td>index of substring</td>
         <td>
            <table>
               <tr>
                  <td>str</td>
                  <td>  <a href="#String">String</a></td>
                  <td>String for analize</td>
               </tr>
               <tr>
                  <td>substr</td>
                  <td>  <a href="#String">String</a></td>
                  <td>String for searching</td>
               </tr>
            </table>
         </td>
         <td>  OPTION[<a href="#Int">Int</a>]</td>
      </tr>
      <tr>
         <td>indexOf</td>
         <td>20</td>
         <td>index of substring after offset</td>
         <td>
            <table>
               <tr>
                  <td>str</td>
                  <td>  <a href="#String">String</a></td>
                  <td>String for analize</td>
               </tr>
               <tr>
                  <td>substr</td>
                  <td>  <a href="#String">String</a></td>
                  <td>String for searching</td>
               </tr>
               <tr>
                  <td>offset</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>offset</td>
               </tr>
            </table>
         </td>
         <td>  OPTION[<a href="#Int">Int</a>]</td>
      </tr>
      <tr>
         <td>split</td>
         <td>100</td>
         <td>split string by separator</td>
         <td>
            <table>
               <tr>
                  <td>str</td>
                  <td>  <a href="#String">String</a></td>
                  <td>String for splitting</td>
               </tr>
               <tr>
                  <td>separator</td>
                  <td>  <a href="#String">String</a></td>
                  <td>separator</td>
               </tr>
            </table>
         </td>
         <td>  LIST[<a href="#String">String</a>]</td>
      </tr>
      <tr>
         <td>parseInt</td>
         <td>20</td>
         <td>parse string to integer</td>
         <td>
            <table>
               <tr>
                  <td>str</td>
                  <td>  <a href="#String">String</a></td>
                  <td>String for parsing</td>
               </tr>
            </table>
         </td>
         <td>  OPTION[<a href="#Int">Int</a>]</td>
      </tr>
      <tr>
         <td>parseIntValue</td>
         <td>20</td>
         <td>parse string to integer with fail on errors</td>
         <td>
            <table>
               <tr>
                  <td>str</td>
                  <td>  <a href="#String">String</a></td>
                  <td>String for parsing</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Int">Int</a></td>
      </tr>
      <tr>
         <td>pow</td>
         <td>100</td>
         <td>Math pow</td>
         <td>
            <table>
               <tr>
                  <td>base</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>bases value</td>
               </tr>
               <tr>
                  <td>bp</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>bases decimal</td>
               </tr>
               <tr>
                  <td>exponent</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>exponents value</td>
               </tr>
               <tr>
                  <td>ep</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>exponents decimal</td>
               </tr>
               <tr>
                  <td>rp</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>results decimal</td>
               </tr>
               <tr>
                  <td>round</td>
                  <td>  <a href="#Down">Down</a> <a href="#Up">Up</a> <a href="#HalfUp">HalfUp</a> <a href="#HalfDown">HalfDown</a> <a href="#Ceiling">Ceiling</a> <a href="#Floor">Floor</a> <a href="#HalfEven">HalfEven</a></td>
                  <td>round method</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Int">Int</a></td>
      </tr>
      <tr>
         <td>log</td>
         <td>100</td>
         <td>Math log</td>
         <td>
            <table>
               <tr>
                  <td>value</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>value</td>
               </tr>
               <tr>
                  <td>ep</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>value decimal</td>
               </tr>
               <tr>
                  <td>base</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>bases value</td>
               </tr>
               <tr>
                  <td>bp</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>bases decimal</td>
               </tr>
               <tr>
                  <td>rp</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>results decimal</td>
               </tr>
               <tr>
                  <td>round</td>
                  <td>  <a href="#Down">Down</a> <a href="#Up">Up</a> <a href="#HalfUp">HalfUp</a> <a href="#HalfDown">HalfDown</a> <a href="#Ceiling">Ceiling</a> <a href="#Floor">Floor</a> <a href="#HalfEven">HalfEven</a></td>
                  <td>round method</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Int">Int</a></td>
      </tr>
      <tr>
         <td>keccak256</td>
         <td>10</td>
         <td>256 bit Keccak/SHA-3/TIPS-202</td>
         <td>
            <table>
               <tr>
                  <td>bytes</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>value</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#ByteVector">ByteVector</a></td>
      </tr>
      <tr>
         <td>blake2b256</td>
         <td>10</td>
         <td>256 bit BLAKE</td>
         <td>
            <table>
               <tr>
                  <td>bytes</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>value</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#ByteVector">ByteVector</a></td>
      </tr>
      <tr>
         <td>sha256</td>
         <td>10</td>
         <td>256 bit SHA-2</td>
         <td>
            <table>
               <tr>
                  <td>bytes</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>value</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#ByteVector">ByteVector</a></td>
      </tr>
      <tr>
         <td>sigVerify</td>
         <td>100</td>
         <td>check signature</td>
         <td>
            <table>
               <tr>
                  <td>message</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>value</td>
               </tr>
               <tr>
                  <td>sig</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>signature</td>
               </tr>
               <tr>
                  <td>pub</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>public key</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Boolean">Boolean</a></td>
      </tr>
      <tr>
         <td>toBase58String</td>
         <td>10</td>
         <td>Base58 encode</td>
         <td>
            <table>
               <tr>
                  <td>bytes</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>value</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#String">String</a></td>
      </tr>
      <tr>
         <td>fromBase58String</td>
         <td>10</td>
         <td>Base58 decode</td>
         <td>
            <table>
               <tr>
                  <td>str</td>
                  <td>  <a href="#String">String</a></td>
                  <td>base58 encoded string</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#ByteVector">ByteVector</a></td>
      </tr>
      <tr>
         <td>toBase64String</td>
         <td>10</td>
         <td>Base64 encode</td>
         <td>
            <table>
               <tr>
                  <td>bytes</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>value</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#String">String</a></td>
      </tr>
      <tr>
         <td>fromBase64String</td>
         <td>10</td>
         <td>Base64 decode</td>
         <td>
            <table>
               <tr>
                  <td>str</td>
                  <td>  <a href="#String">String</a></td>
                  <td>base64 encoded string</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#ByteVector">ByteVector</a></td>
      </tr>
      <tr>
         <td>rsaVerify</td>
         <td>100</td>
         <td>check RSA signature</td>
         <td>
            <table>
               <tr>
                  <td>digest</td>
                  <td>  <a href="#NOALG">NOALG</a> <a href="#MD5">MD5</a>
                     <a href="#SHA1">SHA1</a>
                     <a href="#SHA224">SHA224</a>
                     <a href="#SHA256">SHA256</a>
                     <a href="#SHA384">SHA384 </a>
                     <a href="#SHA512">SHA512</a>
                     <a href="#SHA3224">SHA3224</a>
                     <a href="#SHA3256">SHA3256</a>
                     <a href="#SHA3384">SHA3384</a>
                     <a href="#SHA3512">SHA3512</a>
                  </td>
                  <td>digest algorithm</td>
               </tr>
               <tr>
                  <td>message</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>value</td>
               </tr>
               <tr>
                  <td>sig</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>signature</td>
               </tr>
               <tr>
                  <td>pub</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>public key</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Boolean">Boolean</a></td>
      </tr>
      <tr>
         <td>checkMerkleProof</td>
         <td>30</td>
         <td>Check validity of merkle tree proof</td>
         <td>
            <table>
               <tr>
                  <td>merkleRoot</td>
                  <td> <a href="#ByteVector">ByteVector</a>
                  <td>root hash of merkle tree</td>
               </tr>
               <tr>
                  <td>merkleProof</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>proof bytes</td>
               </tr>
               <tr>
                  <td>valueBytes</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>bytes of value to be prooven</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Boolean">Boolean</a></td>
      </tr>
      <tr>
         <td>toBase16String</td>
         <td>10</td>
         <td>Base16 encode</td>
         <td>
            <table>
               <tr>
                  <td>bytes</td>
                  <td> <a href="#ByteVector">ByteVector</a>
                  <td>value</td>
               </tr>
            </table>
         <td>  <a href="#String">String</a></td>
      </tr>
      <tr>
         <td>fromBase16String</td>
         <td>10</td>
         <td>Base16 decode</td>
         <td>
            <table>
               <tr>
                  <td>str</td>
                  <td> <a href="#String">String</a>
                  <td>base 16 encoded string</td>
               </tr>
            </table>
         <td>  <a href="#ByteVector">ByteVector</a></td>
      </tr>
      <tr>
         <td>transactionHeightById</td>
         <td>100</td>
         <td>get height when transaction was stored to blockchain</td>
         <td>
            <table>
               <tr>
                  <td>id</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>transaction Id</td>
               </tr>
            </table>
         </td>
         <td>  OPTION[<a href="#Int">Int</a>]</td>
      </tr>
      <tr>
         <td>getInteger</td>
         <td>100</td>
         <td>get data from the account state</td>
         <td>
            <table>
               <tr>
                  <td>addressOrAlias</td>
                  <td>   <a href="#Address">Address</a>
                     <a href="#Alias">Alias</a>
                  </td>
                  <td>account</td>
               </tr>
               <tr>
                  <td>key</td>
                  <td>  <a href="#String">String</a></td>
                  <td>key</td>
               </tr>
            </table>
         </td>
         <td>  OPTION[<a href="#Int">Int</a>]</td>
      </tr>
      <tr>
         <td>getBoolean</td>
         <td>100</td>
         <td>get data from the account state</td>
         <td>
            <table>
               <tr>
                  <td>addressOrAlias</td>
                  <td>   <a href="#Address">Address</a>
                     <a href="#Alias">Alias</a>
                  </td>
                  <td>account</td>
               </tr>
               <tr>
                  <td>key</td>
                  <td>  <a href="#String">String</a></td>
                  <td>key</td>
               </tr>
            </table>
         </td>
         <td>  OPTION[<a href="#Boolean">Boolean</a>]</td>
      </tr>
      <tr>
         <td>getBinary</td>
         <td>100</td>
         <td>get data from the account state</td>
         <td>
            <table>
               <tr>
                  <td>addressOrAlias</td>
                  <td>   <a href="#Address">Address</a>
                     <a href="#Alias">Alias</a>
                  </td>
                  <td>account</td>
               </tr>
               <tr>
                  <td>key</td>
                  <td>  <a href="#String">String</a></td>
                  <td>key</td>
               </tr>
            </table>
         </td>
         <td>  OPTION[<a href="#ByteVector">ByteVector</a>]</td>
      </tr>
      <tr>
         <td>getString</td>
         <td>100</td>
         <td>get data from the account state</td>
         <td>
            <table>
               <tr>
                  <td>addressOrAlias</td>
                  <td>   <a href="#Address">Address</a>
                     <a href="#Alias">Alias</a>
                  </td>
                  <td>account</td>
               </tr>
               <tr>
                  <td>key</td>
                  <td>  <a href="#String">String</a></td>
                  <td>key</td>
               </tr>
            </table>
         </td>
         <td>  OPTION[<a href="#String">String</a>]</td>
      </tr>
      <tr>
         <td>getInteger</td>
         <td>10</td>
         <td>Find and extract data by key</td>
         <td>
            <table>
               <tr>
                  <td>data</td>
                  <td>  LIST[<a href="#DataEntry">DataEntry</a>]</td>
                  <td>DataEntry vector, usally tx.data</td>
               </tr>
               <tr>
                  <td>key</td>
                  <td>  <a href="#String">String</a></td>
                  <td>key</td>
               </tr>
            </table>
         </td>
         <td>  OPTION[<a href="#Int">Int</a>]</td>
      </tr>
      <tr>
         <td>getBoolean</td>
         <td>10</td>
         <td>Find and extract data by key</td>
         <td>
            <table>
               <tr>
                  <td>data</td>
                  <td>  LIST[<a href="#DataEntry">DataEntry</a>]</td>
                  <td>DataEntry vector, usally tx.data</td>
               </tr>
               <tr>
                  <td>key</td>
                  <td>  <a href="#String">String</a></td>
                  <td>key</td>
               </tr>
            </table>
         </td>
         <td>  OPTION[<a href="#Boolean">Boolean</a>]</td>
      </tr>
      <tr>
         <td>getBinary</td>
         <td>10</td>
         <td>Find and extract data by key</td>
         <td>
            <table>
               <tr>
                  <td>data</td>
                  <td>  LIST[<a href="#DataEntry">DataEntry</a>]</td>
                  <td>DataEntry vector, usally tx.data</td>
               </tr>
               <tr>
                  <td>key</td>
                  <td>  <a href="#String">String</a></td>
                  <td>key</td>
               </tr>
            </table>
         </td>
         <td>  OPTION[<a href="#ByteVector">ByteVector</a>]</td>
      </tr>
      <tr>
         <td>getString</td>
         <td>10</td>
         <td>Find and extract data by key</td>
         <td>
            <table>
               <tr>
                  <td>data</td>
                  <td>  LIST[<a href="#DataEntry">DataEntry</a>]</td>
                  <td>DataEntry vector, usally tx.data</td>
               </tr>
               <tr>
                  <td>key</td>
                  <td>  <a href="#String">String</a></td>
                  <td>key</td>
               </tr>
            </table>
         </td>
         <td>  OPTION[<a href="#String">String</a>]</td>
      </tr>
      <tr>
         <td>getInteger</td>
         <td>30</td>
         <td>Extract data by index</td>
         <td>
            <table>
               <tr>
                  <td>@data</td>
                  <td>  LIST[<a href="#DataEntry">DataEntry</a>]</td>
                  <td>DataEntry vector, usally tx.data</td>
               </tr>
               <tr>
                  <td>@index</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>index</td>
               </tr>
            </table>
         </td>
         <td>  OPTION[<a href="#Int">Int</a>]</td>
      </tr>
      <tr>
         <td>getBoolean</td>
         <td>30</td>
         <td>Extract data by index</td>
         <td>
            <table>
               <tr>
                  <td>@data</td>
                  <td>  LIST[<a href="#DataEntry">DataEntry</a>]</td>
                  <td>DataEntry vector, usally tx.data</td>
               </tr>
               <tr>
                  <td>@index</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>index</td>
               </tr>
            </table>
         </td>
         <td>  OPTION[<a href="#Boolean">Boolean</a>]</td>
      </tr>
      <tr>
         <td>getBinary</td>
         <td>30</td>
         <td>Extract data by index</td>
         <td>
            <table>
               <tr>
                  <td>@data</td>
                  <td>  LIST[<a href="#DataEntry">DataEntry</a>]</td>
                  <td>DataEntry vector, usally tx.data</td>
               </tr>
               <tr>
                  <td>@index</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>index</td>
               </tr>
            </table>
         </td>
         <td>  OPTION[<a href="#ByteVector">ByteVector</a>]</td>
      </tr>
      <tr>
         <td>getString</td>
         <td>30</td>
         <td>Extract data by index</td>
         <td>
            <table>
               <tr>
                  <td>@data</td>
                  <td>  LIST[<a href="#DataEntry">DataEntry</a>]</td>
                  <td>DataEntry vector, usally tx.data</td>
               </tr>
               <tr>
                  <td>@index</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>index</td>
               </tr>
            </table>
         </td>
         <td>  OPTION[<a href="#String">String</a>]</td>
      </tr>
      <tr>
         <td>addressFromPublicKey</td>
         <td>82</td>
         <td>Convert public key to account address</td>
         <td>
            <table>
               <tr>
                  <td>@publicKey</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>public key</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Address">Address</a></td>
      </tr>
      <tr>
         <td>addressFromString</td>
         <td>124</td>
         <td>Decode account address</td>
         <td>
            <table>
               <tr>
                  <td>@string</td>
                  <td>  <a href="#String">String</a></td>
                  <td>string address represntation</td>
               </tr>
            </table>
         </td>
         <td>  OPTION[<a href="#Address">Address</a>]</td>
      </tr>
      <tr>
         <td>addressFromRecipient</td>
         <td>100</td>
         <td>Extract address or lookup alias</td>
         <td>
            <table>
               <tr>
                  <td>AddressOrAlias</td>
                  <td>   <a href="#Address">Address</a>
                     <a href="#Alias">Alias</a>
                  </td>
                  <td>address or alias, usually tx.recipient</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Address">Address</a></td>
      </tr>
      <tr>
         <td>assetBalance</td>
         <td>100</td>
         <td>get asset balance for account</td>
         <td>
            <table>
               <tr>
                  <td>addressOrAlias</td>
                  <td>   <a href="#Address">Address</a>
                     <a href="#Alias">Alias</a>
                  </td>
                  <td>account</td>
               </tr>
               <tr>
                  <td>assetId</td>
                  <td>  OPTION[<a href="#ByteVector">ByteVector</a>]</td>
                  <td>assetId (WAVES if none)</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Int">Int</a></td>
      </tr>
      <tr>
         <td>wavesBalance</td>
         <td>109</td>
         <td>get WAVES balanse for account</td>
         <td>
            <table>
               <tr>
                  <td>@addressOrAlias</td>
                  <td>   <a href="#Address">Address</a>
                     <a href="#Alias">Alias</a>
                  </td>
                  <td>account</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Int">Int</a></td>
      </tr>
      <tr>
         <td>getIntegerValue</td>
         <td>100</td>
         <td>get data from the account state (fail on error)</td>
         <td>
            <table>
               <tr>
                  <td>@addressOrAlias</td>
                  <td>   <a href="#Address">Address</a>
                     <a href="#Alias">Alias</a>
                  </td>
                  <td>account</td>
               </tr>
               <tr>
                  <td>@key</td>
                  <td>  <a href="#String">String</a></td>
                  <td>key</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Int">Int</a></td>
      </tr>
      <tr>
         <td>getBooleanValue</td>
         <td>100</td>
         <td>get data from the account state (fail on error)</td>
         <td>
            <table>
               <tr>
                  <td>@addressOrAlias</td>
                  <td>   <a href="#Address">Address</a>
                     <a href="#Alias">Alias</a>
                  </td>
                  <td>account</td>
               </tr>
               <tr>
                  <td>@key</td>
                  <td>  <a href="#String">String</a></td>
                  <td>key</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Boolean">Boolean</a></td>
      </tr>
      <tr>
         <td>getBinaryValue</td>
         <td>100</td>
         <td>get data from the account state (fail on error)</td>
         <td>
            <table>
               <tr>
                  <td>@addressOrAlias</td>
                  <td>   <a href="#Address">Address</a>
                     <a href="#Alias">Alias</a>
                  </td>
                  <td>account</td>
               </tr>
               <tr>
                  <td>@key</td>
                  <td>  <a href="#String">String</a></td>
                  <td>key</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#ByteVector">ByteVector</a></td>
      </tr>
      <tr>
         <td>getStringValue</td>
         <td>100</td>
         <td>get data from the account state (fail on error)</td>
         <td>
            <table>
               <tr>
                  <td>@addressOrAlias</td>
                  <td>   <a href="#Address">Address</a>
                     <a href="#Alias">Alias</a>
                  </td>
                  <td>account</td>
               </tr>
               <tr>
                  <td>@key</td>
                  <td>  <a href="#String">String</a></td>
                  <td>key</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#String">String</a></td>
      </tr>
      <tr>
         <td>getIntegerValue</td>
         <td>10</td>
         <td>Find and extract data by key (fail on error)</td>
         <td>
            <table>
               <tr>
                  <td>@data</td>
                  <td>  LIST[<a href="#DataEntry">DataEntry</a>]</td>
                  <td>DataEntry vector, usally tx.data</td>
               </tr>
               <tr>
                  <td>@key</td>
                  <td>  <a href="#String">String</a></td>
                  <td>key</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Int">Int</a></td>
      </tr>
      <tr>
         <td>getBooleanValue</td>
         <td>10</td>
         <td>Find and extract data by key (fail on error)</td>
         <td>
            <table>
               <tr>
                  <td>@data</td>
                  <td>  LIST[<a href="#DataEntry">DataEntry</a>]</td>
                  <td>DataEntry vector, usally tx.data</td>
               </tr>
               <tr>
                  <td>@key</td>
                  <td>  <a href="#String">String</a></td>
                  <td>key</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Boolean">Boolean</a></td>
      </tr>
      <tr>
         <td>getBinaryValue</td>
         <td>10</td>
         <td>Find and extract data by key (fail on error)</td>
         <td>
            <table>
               <tr>
                  <td>@data</td>
                  <td>  LIST[<a href="#DataEntry">DataEntry</a>]</td>
                  <td>DataEntry vector, usally tx.data</td>
               </tr>
               <tr>
                  <td>@key</td>
                  <td>  <a href="#String">String</a></td>
                  <td>key</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#ByteVector">ByteVector</a></td>
      </tr>
      <tr>
         <td>getStringValue</td>
         <td>10</td>
         <td>Find and extract data by key (fail on error)</td>
         <td>
            <table>
               <tr>
                  <td>@data</td>
                  <td>  LIST[<a href="#DataEntry">DataEntry</a>]</td>
                  <td>DataEntry vector, usally tx.data</td>
               </tr>
               <tr>
                  <td>@key</td>
                  <td>  <a href="#String">String</a></td>
                  <td>key</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#String">String</a></td>
      </tr>
      <tr>
         <td>getIntegerValue</td>
         <td>30</td>
         <td>Extract data by index (fail on error)</td>
         <td>
            <table>
               <tr>
                  <td>@@data</td>
                  <td>  LIST[<a href="#DataEntry">DataEntry</a>]</td>
                  <td>DataEntry vector, usally tx.data</td>
               </tr>
               <tr>
                  <td>@@index</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>index</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Int">Int</a></td>
      </tr>
      <tr>
         <td>getBooleanValue</td>
         <td>30</td>
         <td>Extract data by index (fail on error)</td>
         <td>
            <table>
               <tr>
                  <td>@@data</td>
                  <td>  LIST[<a href="#DataEntry">DataEntry</a>]</td>
                  <td>DataEntry vector, usally tx.data</td>
               </tr>
               <tr>
                  <td>@@index</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>index</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Boolean">Boolean</a></td>
      </tr>
      <tr>
         <td>getBinaryValue</td>
         <td>30</td>
         <td>Extract data by index (fail on error)</td>
         <td>
            <table>
               <tr>
                  <td>@@data</td>
                  <td>  LIST[<a href="#DataEntry">DataEntry</a>]</td>
                  <td>DataEntry vector, usally tx.data</td>
               </tr>
               <tr>
                  <td>@@index</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>index</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#ByteVector">ByteVector</a></td>
      </tr>
      <tr>
         <td>getStringValue</td>
         <td>30</td>
         <td>Extract data by index (fail on error)</td>
         <td>
            <table>
               <tr>
                  <td>@@data</td>
                  <td>  LIST[<a href="#DataEntry">DataEntry</a>]</td>
                  <td>DataEntry vector, usally tx.data</td>
               </tr>
               <tr>
                  <td>@@index</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>index</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#String">String</a></td>
      </tr>
      <tr>
         <td>addressFromStringValue</td>
         <td>124</td>
         <td>Decode account address (fail on error)</td>
         <td>
            <table>
               <tr>
                  <td>@@string</td>
                  <td>  <a href="#String">String</a></td>
                  <td>string address represntation</td>
               </tr>
            </table>
         </td>
         <td>  <a href="#Address">Address</a></td>
      </tr>
      <tr>
         <td>assetInfo</td>
         <td>100</td>
         <td>get asset info by id</td>
         <td>
            <table>
               <tr>
                  <td>id</td>
                  <td>  <a href="#ByteVector"> ByteVector</a></td>
                  <td>asset Id</td>
               </tr>
            </table>
         </td>
         <td>  OPTION[<a href="#Asset">Asset</a>]</td>
      </tr>
      <tr>
         <td>blockInfoByHeight</td>
         <td>100</td>
         <td>Lookup block by height and return info if it exists</td>
         <td>
            <table>
               <tr>
                  <td>height</td>
                  <td>  <a href="#Int">Int</a></td>
                  <td>block height</td>
               </tr>
            </table>
         </td>
         <td>  OPTION[<a href="#BlockInfo">BlockInfo</a>]</td>
      </tr>
      <tr>
         <td>transferTransactionById</td>
         <td>100</td>
         <td>Lookup transfer transaction</td>
         <td>
            <table>
               <tr>
                  <td>id</td>
                  <td>  <a href="#ByteVector">ByteVector</a></td>
                  <td>transfer transaction id</td>
               </tr>
            </table>
         </td>
         <td>
            <a href="#TransferTransaction">TransferTransaction</a>
         </td>
      </tr>
   </table>
</div>
