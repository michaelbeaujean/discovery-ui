const path = require('path');
const postcssCustomMedia = require('postcss-custom-media');

module.exports = {
  module: {
    rules: [
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
    ],
  },
};