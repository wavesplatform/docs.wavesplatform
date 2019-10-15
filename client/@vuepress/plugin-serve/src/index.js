const { existsSync } = require('fs')
const { resolve } = require('path')
const express = require('express')
const chalk = require('chalk')
const opn = require('opn')

const name = 'vuepress-plugin-serve'

module.exports = (options, context) => ({
  name,

  extendCli (cli) {
    let { notFoundPath = '404.html' } = options
    notFoundPath = resolve(context.outDir, notFoundPath)

    cli
      .command(options.commandName || 'serve', 'serve generated files')
      .option('-b, --build', 'build project before serving')
      .option('-p, --port <port>', 'use specified port (default: 8080)')
      .option('-c, --cache [cache]', 'set the directory of cache')
      .option('--dest <dest>', 'the output directory for build process')
      .option('--no-cache', 'clean the cache before build')
      .option('--host <host>', 'use specified host (default: 0.0.0.0)')
      .option('--open', 'open browser when ready')
      .allowUnknownOptions()
      .action(async (cliOptions) => {
        const {
          chainWebpack,
          define,
          alias,
        } = options

        // register special webpack options
        context.pluginAPI
          .registerOption('CHAIN_WEBPACK', chainWebpack, name)
          .registerOption('DEFINE', define, name)
          .registerOption('ALIAS', alias, name)

        // build project first if there is no 404.html
        let has404 = existsSync(notFoundPath)

        // build project first if specified
        if (cliOptions.build || !has404) {
          await context.build()
          has404 = existsSync(notFoundPath)
        }

        // ensure that a 404 file exists
        if (!has404) {
          throw new Error('No 404.html was found.')
        }

        const {
          port = options.port || context.siteConfig.port || 8080,
          host = options.host || context.siteConfig.host || 'localhost',
        } = cliOptions

        // express instance
        const app = express()

        // serve static files
        app.use(context.base, express.static(context.outDir, options.staticOptions))

        // fallback to base url
        app.get(/.*/, (req, res, next) => {
          if (req.path.startsWith(context.base)) {
            res.sendFile(notFoundPath)
          } else {
            res.redirect(context.base)
          }
        })

        // create server
        const server = app.listen(port, host, async () => {
          // apply afterServer hook
          if (typeof options.afterServer === 'function') {
            await options.afterServer(app, server)
          }

          const url = `http://${host}:${port}${context.base}`
          console.log(`VuePress server listening at ${chalk.blue(url)}`)

          // open browser when ready
          if (cliOptions.open) opn(url)
        })

        // apply beforeServer hook
        if (typeof options.beforeServer === 'function') {
          options.beforeServer(app, server)
        }
      })
  },
})
