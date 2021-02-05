// 为了配合postcss-loader写在这里 但是也没看到什么效果
const autoPrefixer = require('autoprefixer');
const stylelint = require('stylelint');
module.exports = {
    plugins: [
        autoprefixer({
          grid: true,
          browsers: [
            '> 1%',
            'last 3 versions',
            'android 4.2',
            'ie 8'
          ]
        }),
        stylelint({
          config: {
            rules: {
              'declaration-no-important': true
            }
          }
        })
    ]
}
