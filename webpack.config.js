const HtmlWebPackPlugin = require("html-webpack-plugin");
const postcssCustomMedia = require('postcss-custom-media');

module.exports = {
  entry: './src/index.js',
  output: {
      path: __dirname + '/dist',
      filename: 'main.js',
      publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            },
          },
          { loader: 'postcss-loader', options: {
            ident: 'postcss',
            plugins: () => [
              postcssCustomMedia(/* pluginOptions */)
            ]
          } }
        ],
      },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file?name=[name].[ext]'}
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};