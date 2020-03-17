# Troubleshooting

This article describes known issues of Waves Node and their possible solutions.

## Simultaneously Open Files

   If your Linux-based machine running Waves node also runs many other tasks, in some cases your node might crash with the following error:

   ```bash
   Caused by: org.iq80.leveldb.DBException: IO error: /var/lib/waves/data/33837022.ldb: Too many open files
   ```

   The error is caused by the operating system limit of the number of simultaneously open files.

   In this case the solution is to change the default values to `65536` of the following parameters in the `/etc/security/limits.conf` file:

   ```bash
    * soft nofile 24000 #soft limits
    * hard nofile 65000 #hard limits
   ```

   and also add the following line in the `/etc/systemd/system.conf` file:

   ```bash
   DefaultLimitNOFILE=65536
   ```

then reboot your machine.

## Other Issues

If you have other node-related issues to report or discuss with Waves community, see [Keep in Touch](/en/keep-in-touch) chapter for contact information.
