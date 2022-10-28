const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('js')
      .use('babel-loader')
        .tap(options => {
          options['cacheDirectory'] = "artifacts/.cache/babel-loader/"
          return options
        })
    config
      .plugin('eslint')
      .tap(args => {
        args[0].cacheLocation = '/usr/src/app/artifacts/.cache/eslint/5fc34bca.json'
        return args
      })
  }
})
