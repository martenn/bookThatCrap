const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getPath = file => path.resolve(__dirname, file);

module.exports = {
  entry: getPath('./src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: getPath('./dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
  ],
  devServer: {
    static: getPath('./dist'),
    port: 4201,
    hot: true,
    historyApiFallback: true,
  },
};
