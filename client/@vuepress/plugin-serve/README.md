# [vuepress-plugin-serve](https://vuepress.github.io/plugins/serve.html)

[![npm](https://img.shields.io/npm/v/vuepress-plugin-serve.svg)](https://www.npmjs.com/package/vuepress-plugin-serve)

A [VuePress](https://vuepress.vuejs.org/) plugin that serves generated files.

## CLI

After using this plugin, VuePress will add a `serve` command. This command will created a server based on the generated files. It has the following options:

### --build

Execute `vuepress build` before creating the server.

### --open

Open the browser when the server is ready.

### --host `<host>`

See [host](./config.md#host).

### --port `<port>`

See [port](./config.md#port).

## Options

### commandName

- **type:** `string`
- **default:** `'serve'`

Vuepress-plugin-serve will add a vuepress command. This option can be used to specify the command name.

### host

- **type:** `string`
- **default:** `'localhost'`

Specify the host to use for the server.

### port

- **type:** `number`
- **default:** `8080`

Specify the port to use for the server.

### notFoundPath

- **type:** `string`
- **default:** `'404.html'`

Path for "404 not found" page.

### staticOptions

- **type:** `object`
- **default:** `{}`

Options for [serve-static](https://github.com/expressjs/serve-static#servestaticroot-options).

### beforeServer

- **type:** `(app, server) => void`
- **default:** `undefined`

Executed before the server accepts client information. Similar to VuePress's [beforeDevServer](https://v1.vuepress.vuejs.org/en/plugin/option-api.html#beforedevserver) option.

### afterServer

- **type:** `async (app, server) => void`
- **default:** `undefined`

Executed after the server accepts client information. Similar to VuePress's [afterDevServer](https://v1.vuepress.vuejs.org/en/plugin/option-api.html#afterdevserver) option.

### chainWebpack

- **type:** `(config: Config) => void`
- **default:** `undefined`

This hook will be called when the server is being built.

See [chainWebpack](https://v1.vuepress.vuejs.org/plugin/option-api.html#chainwebpack).

### define

- **type:** `Record<string, string> | (() => Record<string, string>)`
- **default:** `{}`

This hook will be called when the server is being built.

See [define](https://v1.vuepress.vuejs.org/plugin/option-api.html#define).

### alias

- **type:** `Record<string, string> | (() => Record<string, string>)`
- **default:** `{}`

This hook will be called when the server is being built.

See [alias](https://v1.vuepress.vuejs.org/plugin/option-api.html#alias).

## Contribution

Contribution Welcome!
