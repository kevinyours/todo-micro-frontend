const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products', // app 이름
      filename: 'remoteEntry.js', // manifest 파일이름
      exposes: {
        './ProductsIndex': './src/bootstrap', // filename alias
      },
      // shared: ['faker'], // 공유 디펜던시 설정
      shared: {
        faker: {
          singleton: true,
        },
      }, // 공유 디펜던시 설정
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
