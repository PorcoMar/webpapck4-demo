const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const development = process.env.NODE_ENV === 'development';
const production = process.env.NODE_ENV === 'production';
console.log('development', development)
console.log('production', production)
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
        // use : ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'] // 处理css的loader 按照数组顺序将资源交给loader处理
        // use: [{
        //     loader: 'style-loader'
        //   },
        //   {
        //     loader: 'css-loader'
        //   },
        //   {
        //     loader: 'less-loader'
        //   },
        //   {
        //     loader: 'postcss-loader'
        //   }
        // ]
        use: [{
          loader: MiniCssExtractPlugin.loader, // MiniCssExtractPlugin 将css分离出来 webpack4新特性（废除extract-text-webpack-plugin）
          options: {
            publicPath: '../'
          }
        },
        'css-loader', 'less-loader'
      ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',  // 配置了name生成的图片和原名保持一致 不配置则是hash乱码
            outputPath: './images/', // 生成路径 dist/images/
            limit: 100000 // 小于1000b的文件转换为base64以减少http请求
          }
        }],
        include: /assets/ //只会转化asstes下的图片
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/, //预防拖慢打包速度
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, //启动缓存机制，在重复打包未改变过的模块时防止二次编译，也会加快打包速度
            presets: ['@babel/preset-env']
            // presets: [
            //   ['env', {
            //     modules: false
            //   }]
            // ] // 由于@bebel/preset-env会将es6Module转化为CommomJS，这会导致webpack中的tree-shaking失效，将modules设为false会禁用募模块化语句的转化，而将es6dModule语法交给webpack处理
          }
        }
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}