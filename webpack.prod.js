const { merge } = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //webpack4不需要uglifyjs-webpack-plugin，只要设置mode=production就会自动压缩代码
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurifyCssWebpack = require('purifycss-webpack');// 删除冗余css代码
const glob = require('glob') // 引入glob模块,用于扫描全部html文件中所引用的css
const path = require('path');

module.exports = merge(common, {
  mode: process.env.NODE_ENV, //mode:production自动压缩代码
  plugins: [
    new HtmlWebpackPlugin({ // 自动生成当前index.html到dist的模板文件
        filename: 'index.html',
        template: 'index.html',//配置html模板
        inject:true, //是否自动在模板文件添加 自动生成的js文件链接
        minify:{
            removeComments:true //是否压缩时 去除注释
        }
    }),
    new PurifyCssWebpack({
        paths: glob.sync(path.join(__dirname, 'src/*.html')) // 同步扫描所有html文件中所引用的css
    })
  ],

  
});