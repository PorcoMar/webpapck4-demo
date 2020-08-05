const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        AAA: "./script/index.js",
        app: "./script/app.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/, 
                use : ['style-loader', 'css-loader', 'less-loader'] // 处理css的loader
                // use: ExtractTextPlugin.extract({
                //     fallback: "style-loader",
                //     use: ["css-loader", "less-loader"]
                // })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use:[{
                    loader: 'url-loader',
                    options: {
                        outputPath: 'images/', // 生成路径 dist/images/
                        limit: 100000 // 小于1000b的文件转换为base64
                    }
                }]
            }
        ]
    },
    plugins: [
        // new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({ // 自动生成当前index.html到dist的模板文件
            filename: 'index.html',
            template: 'index.html',//配置html模板
            title: '这个是html模板',
            inject:true, //是否自动在模板文件添加 自动生成的js文件链接
            minify:{
                removeComments:true //是否压缩时 去除注释
            }
        }),
        new webpack.NamedModulesPlugin(),//模块热替换相关
        new webpack.HotModuleReplacementPlugin(),//模块热替换相关
        new CleanWebpackPlugin(), // 删除生成的目录 在webpack4中必须这样用
    ],
    devServer: {
        inline: true, // 打包后加入一个websocket客户端
        hot: true, // 热加载
        contentBase: path.join(__dirname, 'dist'), //开发服务器运行根目录
        host: 'localhost',
        port: 8080,
        compress: true //开发服务器是否启动gzip压缩
    },
    devtool: 'inline-source-map',//若有报错，报错信息会具体到某一个js文件的某一行
}