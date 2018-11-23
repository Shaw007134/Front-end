const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'buddle.js',
    path: path.resolve(__dirname, 'dist/js/')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader", // translates CSS into CommonJS
          options: { importLoaders: 1 }
        }, {
          loader: 'postcss-loader'
        },{
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  }
};