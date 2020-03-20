# Install from Source (Building SBT)

This installation method implicates building DEB or JAR package from Waves git source code files, then running the node from your own DEB or JAR package. The method can be useful for blockchain developers, who want to customize the node files before installation as well as for the advanced node owners, who want check that the source code files of the running node are 100% safe to run.

> :bulb: For OSX - homebrew is preferable choice. You can install java with `brew cask install java` and sbt with `brew install sbt@1`. Build/Test steps are common for any OS (but you should use `\` instead of `/` in Windows).

To build and test your Waves Node, follow the steps:

## 1. Setup the Environment

### Installing Java

Install Java with the following command:

```bash
sudo apt-get update
sudo apt-get install default-jre default-jdk
```

>**Note**: To increase memory of Linux-based JVM (Java Virtual Machine) in the `~/.bashrc` file add the following:
>  ```bash
>  SBT_OPTS="-XX:MaxJavaStackTraceDepth=5000 -Xmx2536M -XX:+CMSClassUnloadingEnabled -Xss2M"
>  ```

### Installing SBT

Please follow the SBT installation instructions depending on your operating system ([Mac](https://www.scala-sbt.org/1.0/docs/Installing-sbt-on-Mac.html), [Windows](https://www.scala-sbt.org/1.0/docs/Installing-sbt-on-Windows.html), [Linux](https://www.scala-sbt.org/1.0/docs/Installing-sbt-on-Linux.html)).

## 2. Obtaining Source Codes

```bash
git clone https://github.com/wavesplatform/Waves.git
cd Waves
```

## 3. Running Unit Tests

```bash
sbt test
```

## 4. Building Packages

* ### Mainnet

```bash
sbt packageAll
```

* ### Testnet

```bash
sbt -Dnetwork=testnet packageAll
```

## 5. Installing DEB Package

Replace {folder} with actual folder name where the DEB package is located. Replace {*} with actual file name:

```bash
sudo dpkg -i {folder}/*.deb
```

## 6. Running Fat JAR

Replace {folder} with actual folder name where the JAR package is located. Replace {*} with actual file name \(it should have "all"-word\):

```bash
java -jar {folder}/*.jar path/to/config/file
```
