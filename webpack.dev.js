const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: process.env.NODE_ENV,
    plugins: [
        new HtmlWebpackPlugin({ // 自动生成当前index.html到dist的模板文件
            filename: 'index.html',
            template: 'index.html',//配置html模板
            inject:true, //是否自动在模板文件添加 自动生成的js文件链接
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),//模块热替换相关(webpack自帶模塊,devServer中hot如为true这里就不需要配置了)
        new CleanWebpackPlugin(), // 删除生成的目录 在webpack4中必须这样用
    ],
    devServer: {
        inline: true, // 打包后加入一个websocket客户端 true会自动刷新页面
        hot: true, // 热加载 刷新改变的地方
        contentBase: path.join(__dirname, 'dist'), //开发服务器运行根目录
        host: 'localhost',
        port: 8080,
        compress: false //开发服务器是否启动gzip压缩
    },
    devtool: 'inline-source-map', //若有报错，报错信息会具体到某一个js文件的某一行
});