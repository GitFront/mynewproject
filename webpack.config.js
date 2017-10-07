var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './src/js/main.js'), // 指定打包的JS入口文件
  output: { // 打包好的输出配置项
    path: path.join(__dirname, './dist'), // 设置输出路径
    filename: 'bundle.js' // 设置输出的文件名
  },
  plugins: [ // 配置webpack插件的节点
    new OpenBrowserPlugin({
      url: 'http://localhost:3004'
    }),
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'), // 指定模板文件的路径
      filename: 'index.html' // 指定内存中生成页面的名称
    })
  ],
  module: { // 所有第三方loader配置节点
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, // 处理普通样式的loader
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, // 处理sass样式的loader
      {
        test: /\.(jpg|jpeg|png|gif|bmp)$/,
        use: 'url-loader'
      }, // 处理样式中图片URL路径的loader
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: 'url-loader'
      }, // 处理 字体文件路径 的loader
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }, // babel-loader
      {
        test: /\.vue$/,
        use: 'vue-loader'
      } // vue-loader
    ]
  }
}