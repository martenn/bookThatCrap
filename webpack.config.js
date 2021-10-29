const path = require('path');

const getPath = file => path.resolve(__dirname, file);

module.exports = {
  entry: getPath('./src/index.ts'),
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
  devServer: {
    contentBase: getPath('./dist'),
  },
};
