const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {
  const { mode = 'development' } = env;

  const isProd = env.mode === 'production';
  const isDev = env.mode === 'development';

  return {
    mode: isProd ? 'production' : isDev && 'development',

    output: {
      filename: 'bundle.js',
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        // images
        {
          test: /\.(png|jpg|jpeg|ico|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name]-[sha1:hash:7].[ext]',
              },
            },
          ],
        },
        // fonts
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'fonts',
                name: '[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(css)/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
        {
          test: /\.(s[ca]ss)/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(ttf|eot|svg|woff2|woff)$/,
          loader: 'file-loader',
          options: {
            outputPath: 'fonts',
          },
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'main.css',
      }),
    ],
    devServer: {
      open: true,
    },
    devtool: 'source-map',
  };
};
