# Install Node on Ubuntu

This article explains how to install Waves node on Linux-based machines.
You install Java first, then the node itself using one of the provided methods.

The most common and convenient method to install/upgrade Waves node on Linux-based machines is described in [Installation from APT Repository](#Installation-from-APT-Repository) section.

The alternative methods are described in [Installation from Deb Package on Deb-based Linux (Ubuntu, Debian)](#Installation-from-Deb-Package-on-Deb-based-Linux-(Ubuntu,-Debian)) and [Installation for Advanced Users](#Installation-for-Advanced-Users) sections.

## Install Java (OpenJDK 8)

**Note**: Do not install OpenJDK 8 If you already have OpenJDK 11 installed. The node Installation is supported in both versions 8 and 11.

Install OpenJDK 8 with the following command:

```cpp
sudo apt-get update
sudo apt-get install openjdk-8-jre
```

Now check the JDK version with the following command:

```bash
java -version
```

If you see that the resulting version is such as below or higher, you can move to the next step:

```bash
java version "1.8.0_201"
Java(TM) SE Runtime Environment (build 1.8.0_201-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.201-b09, mixed mode)
```

## Installation from APT Repository

**Note:** The Waves package is supported on Debian 8.0+, Ubuntu 16.04+ and their forks.

The most convenient method to install/upgrade Waves Node on Linux is probably by means of APT repository. The repository provides Mainnet, Testnet and Stagenet packages.
When this installation method is used, the related dependencies (namely OpenJDK 8) will also be automatically downloaded.

To install the latest version of a package for Mainnet from the APT repository, run the following commands:

```bash
curl -sL http://apt.wavesplatform.com/apt-key.gpg | sudo apt-key add -
sudo add-apt-repository "deb https://apt.wavesplatform.com/ xenial mainnet"
sudo apt update
sudo apt install waves
```

Start the node with the following command (`waves-testnet` for Testnet):

```bash
sudo systemctl start waves.service
```

Enable autoload on start with the following command:

```bash
sudo systemctl enable waves.service
```

Once new version of Waves Node is released, you can update the package by running the following commands:

```bash
sudo apt update
sudo apt upgrade
```

## Installation from Deb Package on Deb-based Linux (Ubuntu, Debian)

[Download the latest waves deb package](https://github.com/wavesplatform/Waves/releases) and install it with the following command:

```bash
sudo dpkg -i waves*.deb
```

The node configuration file is embedded into the `.deb` package and unpacked to `/usr/share/waves/conf/waves.conf` (or `waves-testnet` folder for Testnet) and symlinked to `/etc/waves/waves.conf`. Edit the configuration file with caution. For details see [Node Configuration](/en/waves-node/node-configuration) article.

Start the node with the following command (`waves-testnet` for Testnet):

```bash
sudo systemctl start waves.service
```

Enable autoload on start with the following command:

```bash
sudo systemctl enable waves.service
```

You can find waves app logs in journald storage with the following command:

```bash
journalctl -u waves.service -f
```

You can read about journald tips [here](https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs).

## Installation for Advanced Users

[Download the latest version](https://github.com/wavesplatform/Waves/releases) of `waves.jar` and the required configuration [.conf](https://github.com/wavesplatform/Waves/tree/master/node) file (for Mainnet, Testnet or Stagenet) to any folder, for example `/opt/waves`.

Open and edit the config file with your favorite text editor. For details see [Node Configuration](/en/waves-node/node-configuration) article.

Then start console, navigate to the folder with the `.jar` file with the command `cd /opt/waves` and start the node with the following command (replace {*} with actual file name):

```bash
java -jar {*}.jar {*}.conf
```

<!-- ### Installation from Source

* add to your ~/.bashrc for increase memory for jvm:

  ```bash
  SBT_OPTS="-XX:MaxJavaStackTraceDepth=5000 -Xmx2536M -XX:+CMSClassUnloadingEnabled -Xss2M"
  ```
  
* Run the following command in console:

  ```bash
  sudo apt install sbt
  ```

* Clone the repository:

  ```bash
  git clone git@github.com:wavesplatform/Waves.git
  ```

* Run SBT at project folder:

  ```bash
  cd waves_project
  sbt
  packageAll
  ```

* Import project to Intellij Idea

* Download featured `Scala` plugin for Intellij

* On import of the project select this checkbox:

  ```bash
  [x] Use sbt shell for build and import
  ```

* Increase heap size to 2048 MB,

* Setup plugin "Scala Fmt"

* Enjoy -->

## Additional Security

For added security, it is recommended to store your wallet and configuration applications on an encrypted partition. You can read about it [here](https://help.ubuntu.com/community/EncryptedFilesystems).

Also, you may want to limit the use of the node folders to only the specified users. You can read about it [here](http://manpages.ubuntu.com/manpages/precise/man1/chown.1.html). The scripts in deb packages create the user `waves` and the waves app, wallet and data folders by default belong to this user.

If you decide to use RPC, you should protect it with embedded in ubuntu `ufw` or any other firewall. You can read about it [here](https://www.digitalocean.com/community/tutorials/how-to-setup-a-firewall-with-ufw-on-an-ubuntu-and-debian-cloud-server). If your server is public and available to the Internet and you decide to enable and use RPC, then allow only certain methods using [Nginx's proxy\_pass module](http://nginx.org/ru/docs/http/ngx_http_proxy_module.html) and do not forget to set the `apiKeyHash` in waves.conf.

Also, do not forget to update the OS and install software security updates.
