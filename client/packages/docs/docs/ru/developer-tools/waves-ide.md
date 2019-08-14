# Waves IDE

## About

The main goal of [Waves Web IDE](https://ide.wavesplatform.com) is to give developers a great tool for developing [RIDE smart contracts](/waves-environment/waves-protocol/smart-contracts.md).  
the user can set default seed, default network byte and node url via the IDE settings. The IDE is also supported by [console\(REPL\)](/developer-tools/repl.md).

## Usage

### First steps

1. Rename s3.config.default.js -&gt; s3.config.js
2. make sure you have node-js &gt; [10.0](https://nodejs.org/en/download/package-manager/)

```npm
npm install
```

### Run dev server on localhost:8080

```npm
npm run server
```

### Build and deploy

```npm
npm start prod,deploy
```

{% prettyhint type="info" %} you can go through our <a href="/smart-contracts/video-tutorials-and-articels"> &nbsp;video tutorials and articles </a>  for practical examples. {% endprettyhint %}