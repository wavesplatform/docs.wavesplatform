# Install Node on macOS

## Install OpenJDK 8

**Note.** Do not install OpenJDK 8 If you already have OpenJDK 11 installed. The node Installation is supported in both versions 8 and 11.

Install [OpenJDK 8](https://github.com/AdoptOpenJDK/homebrew-openjdk) with the following command:

```bash
brew cask install adoptopenjdk/openjdk/adoptopenjdk8
```

Check the JDK version with the following command:

```bash
java -version
```

If you see this result, you can move to the next step:

```bash
java version "1.8.0_201"
Java(TM) SE Runtime Environment (build 1.8.0_201-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.201-b09, mixed mode)
```

## Download Waves Package and Configure the Application

[Download the latest version](https://github.com/wavesplatform/Waves/releases) of `waves.jar` and the required [.conf](https://github.com/wavesplatform/Waves/tree/master/node) file (for Mainnet, Testnet or Stagenet) to any folder, for example `~/waves`.

Configuration file is **very important! The safety of your wallet and assets depends on it!**

Edit the `.conf` file with your favorite text editor. For details see [Node configuration](/en/waves-node/node-configuration) article.

Then start Terminal app `Terminal.app`, navigate to the folder with the jar file with the command `cd ~/waves` and start the node with the following command (replace {*} with actual package name):

```bash
java -jar {*}.jar waves.conf
```

## Additional Security

For added security, it is recommended to store your wallet and configuration applications on an encrypted partition. For details see the following [article](https://support.apple.com/en-us/HT208344).

Also, you may want to limit the use of these folders to designated users only. You can read about it [here](http://ss64.com/osx/chown.html).

If you decide to use RPC, you should protect it with macOS embedded or any other firewall. You can read about it [here](https://support.apple.com/en-us/HT201642). If your server is public and available to the Internet and you decide to enable and use RPC, then allow only certain methods using [Nginx's proxy\_pass module](http://nginx.org/ru/docs/http/ngx_http_proxy_module.html) and do not forget to set the API key hash in the configuration file.

Also, do not forget to keep the OS and other security software up-to-date.
