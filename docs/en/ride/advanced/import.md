# Import Libraries

You can create a library script containing function and variable definitions and import the library to other scripts.

When compiling a dApp script, account or asset script that has imported libraries, the used functions and variables from the libraries are added to the compiled script. The names of functions and variables must be unique within the main script and all connected libraries.

## Script library

The library script should start with [directives](/en/ride/script/directives):

```scala
{-# STDLIB_VERSION 5 #-}
```

After the directives, you can define variables and functions. Functions should not have [annotations](/en/ride/functions/annotations).

Example:

```scala
{-# STDLIB_VERSION 5 #-}

let someConstant = 42

func doSomething() = {
    height + someConstant
}
```

## Import Library

The IMPORT directive is used to connect libraries.

In [Waves IDE](/en/building-apps/smart-contracts/tools/waves-ide) you can specify script names from local storage in the directive. Example:

```scala
{-# IMPORT lib1,my_lib2 #-}
```

In [Surfboard](/en/building-apps/smart-contracts/tools/surfboard), you can also specify path relative to the current folder:

```scala
{-# IMPORT lib3,/dir/lib4 #-}
```

After the directive, you can use functions and variables from the imported libraries as if they are defined in the script itself.

## Developer Tools

User libraries are supported in:

* Waves IDE for Stagenet, including Ride REPL

   How to access: use Waves IDE for Stagenet <https://stagenet.waves-ide.com/>.

* Surfboard beta version, including Ride REPL

   How to access: install the beta version using the command

   ```bash
   npm i @waves/surfboard@beta
   ```
