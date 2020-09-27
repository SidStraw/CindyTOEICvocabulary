const path = require('path')
module.exports = {
  runtimeCompiler: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Cindy 情境式多益單字課 複習進度表',
    },
  },
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          include: [path.join(__dirname, 'src')],
          options: {
            fix: true,
          },
        },
      ],
    },
  },
}
