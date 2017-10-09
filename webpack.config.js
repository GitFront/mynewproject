var path = require("path");
var webpack = require("webpack");
var htmlWebpackPlugin = require("html-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, './src/js/main.js'),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: 'bundle.js'
    },
    plugins: [
        new OpenBrowserPlugin({
            url: 'http://localhost:3008'
        }),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|jpeg|gif|bmp)$/,use:'url-loader'},
            {test:/\.(ttf|eot|woff|woff2|svg)$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
            
        ]
    }
}