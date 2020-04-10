# Install Node on Windows

## Install OpenJDK 8

**Note.** Do not install OpenJDK 8 If you already have OpenJDK 11 installed. The node Installation is supported in both versions 8 and 11.

Install OpenJDK 8 from [this link](https://access.redhat.com/documentation/en-us/openjdk/8/html/openjdk_8_for_windows_getting_started_guide/getting_started_with_openjdk_for_windows).

Then open Windows Command line and check the JDK version with the following command:

```bash
java -version
```

If you see this result, you can move to the next step:

```bash
java version "1.8.0_201"
Java(TM) SE Runtime Environment (build 1.8.0_201-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.201-b09, mixed mode)
```

## Download Waves package and configure the application

[Download the latest version](https://github.com/wavesplatform/Waves/releases) of `waves.jar` and the required [.conf](https://github.com/wavesplatform/Waves/tree/master/node) file (for Mainnet, Testnet or Stagenet) to you machine.

Open and carefully edit the config file with your favorite text editor. **This is very important! The safety of your wallet and assets depends on this!**. For details see [Node Configuration](/en/waves-node/node-configuration) article.

Then open Windows Command line, navigate to the folder with the `.jar` file and start the node with the following command (replace {*} with actual file name):

```bash
java -jar {*}.jar {*}.conf
```

## Additional Security

For added security, it is recommended to store your wallet and configuration applications on an encrypted partition. You can use software like [BitLocker](https://technet.microsoft.com/en-us/library/cc731549%28v=ws.10%29.aspx), [TrueCrypt](http://truecrypt.sourceforge.net/), [AxCrypt](http://www.axcrypt.net/), [FreeOTFE](https://sourceforge.net/projects/freeotfe.mirror/), [GostCrypt](https://www.gostcrypt.org/), [VeraCrypt](https://veracrypt.codeplex.com/) or else. You choose this application **at your own risk**!

Also, you may want to limit the use of node folders to designated users only. You can read about it [here](https://technet.microsoft.com/en-us/library/cc754344%28v=ws.11%29.aspx).

If you decide to use RPC, you should protect it with Windows embedded or any other firewall. You can read about it [here](http://www.howtogeek.com/112564/how-to-create-advanced-firewall-rules-in-the-windows-firewall/). If your server is public and available to the Internet and you decide to enable and use RPC, then allow only certain methods using [Nginx's proxy\_pass module](http://nginx.org/ru/docs/http/ngx_http_proxy_module.html) and do not forget to set the API key hash in waves config.

Also, do not forget to install an anti-virus and to keep the OS and security software up-to-date.
