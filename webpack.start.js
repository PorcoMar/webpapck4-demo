const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
  mode: process.env.NODE_ENV,
  plugins: [
    new HtmlWebpackPlugin({ // 自动生成当前index.html到dist的模板文件
        filename: 'index.html',
        template: 'index.html',//配置html模板
        inject:true, //是否自动在模板文件添加 自动生成的js文件链接
        minify:{
            removeComments:false //是否压缩时 去除注释
        }
    }),
  ],
  
});