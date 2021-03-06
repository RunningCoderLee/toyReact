const path = require('path')

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: {
    main: './index.js',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-proposal-class-properties'],
              [
                '@babel/plugin-transform-react-jsx',
                {
                  // importSource: 'ToyReact',
                  pragma: 'ToyReact.createElement',
                },
              ],
            ],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: false,
  },
}
