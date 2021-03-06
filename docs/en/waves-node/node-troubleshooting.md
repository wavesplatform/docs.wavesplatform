# Node Troubleshooting (Q&A)

This article provides answers to questions related to Waves Node.

## `How do I disconnect from other nodes?`

**Answer**: Stop the node by killing Waves java process or execute the following command:

```bash
# sudo systemctl stop waves
```

Then set `waves.network.known-peers` parameter to `[]` (default value) in your [node configuration file](/en/waves-node/node-configuration) and temporarily rename the `peers.dat` file.

Then run your Node again with the following command:

```bash
java -jar waves.jar waves.conf
```

## `My node deployed in Docker crashed right after running. Why? What do I do?`

**Answer**: If your node deployed in Docker crashed immediately after running, your Docker app might be out of memory.

**Solution**: Change Docker preferences, so that it can use more memory.

   1. In your Docker desktop app navigate to **Settings** >> **Resources** >> **Advanced**.

   2. Set **Memory** value to 4GB or more and click **Apply & Restart**.

## `My node crashed. Why? What do I do?`

**Answer**: A node may crash due to number of reasons. You can detect the reason by reviewing error messages in the log files. See the following cases and possible solutions for details.

### `"too many open files" error`

If your Linux-based machine running Waves node is also running many other tasks, in some cases your node might crash with the following error:

```bash
Caused by: org.iq80.leveldb.DBException: IO error: /var/lib/waves/data/33837022.ldb: Too many open files
```

The error is caused by the operating system limit of the number of simultaneously open files.

**Solution**: You can change the default values to `65536` of the following parameters in the `/etc/security/limits.conf` file:

```bash
* soft nofile 24000 #soft limits
* hard nofile 65000 #hard limits
```

and also add the following line in the `/etc/systemd/system.conf` file:

```bash
DefaultLimitNOFILE=65536
```

then reboot your machine.

### `"OutOfMemory" error`

If your machine has not enough dedicated JVM memory to run the node, the node will crash and the log file will contain "OutOfMemory" error messages.

Use the following command to check if there are such messages in your current log file:

```bash
sudo tail -n +1 /var/log/waves/waves.log | grep "OutOfMemory"
```

Use the following command to check if there are such messages in your archived log files:

```bash
sudo zgrep -i "OutOfMemory" /var/log/waves/*
```

Use the following command if you are using systemd and have no logs in /var/log/waves/ directory:

```bash
sudo journalctl -u waves | grep "OutOfMemory"
```

**Solution**: You can [increase the value of `-Xmx` parameter](#how-to-setup-xmx-parameter) (increase JVM maximum Heap Size).

### `the node process killed with OOM-Killer`

If your machine has not enough RAM for the needs of OS it might kill your node process and other processes that consume most of your RAM. In this case your log will contain messages about the node process being killed with OOM-killer.

Use the following command to check if there are such messages in your log:

```bash
$ journalctl -k | grep 'Kill'
```

The messages about the node process being killed with OOM-killer are similar to the following:

```bash
kernel: Out of memory: Kill process 6033 (java) score 367 or sacrifice child
kernel: Killed process 6033 (java) total-vm:29930040kB, anon-rss:10625048kB, file-rss:0kB, shmem-rss:24kB
```

**Solution**: Make sure that the value of `-Xmx` parameter does not exceed the amount of the available RAM (there is enough RAM for the needs of the OS). If the value of `-Xmx` parameter exceeds the available RAM, you can reduce the value of `-Xmx` parameter. [How to change the value of `-Xmx` parameter](#how-to-setup-xmx-parameter). You can also disable other heavy processes consuming the RAM and/or increase the amount of RAM by [adding swap space](https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-18-04). The value of `-Xmx` parameter must be not more than 3/4 of the available memory if the swap is enabled.

If the provided solutions do not help, send to Waves team the fragments of the involved logs and the fragment of `waves.log` with the records before the node crashed.

## `How to setup -Xmx parameter?`

**Answer**: You can set `-J-Xmx` parameter of your node either in `application.ini` file (DEB node) or by adding the `-Xmx` parameter in the command line starting the node (jar node). Use the following command (replace {*} with actual file name):

```bash
java -Xmx2g -jar {*}.jar {*}.conf
```

**Note**: Ubuntu Server version 18.04/20.04 should have at least 512MB of RAM for the needs of OS. If your total RAM is less than 2GB, you can expand it by [adding swap space](https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-18-04).

For example, if you want to dedicate 4 gigabytes to your DEB node, open `application.ini` file (MainNet DEB node path: `/etc/waves/application.ini`), find `-J-Xmx**` parameter and change it to `-J-Xmx4g`.

## Other Issues

If you have other node-related issues to report or discuss with Waves community, see [Keep in Touch](/en/keep-in-touch/) chapter for contact information.
