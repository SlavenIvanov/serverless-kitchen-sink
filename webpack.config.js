const slsw = require('serverless-webpack')
const path = require('path')

const dev = process.env.NODE_ENV !== 'production'

module.exports = {
  node: {
    __dirname: true
  },
  target: 'node',
  mode: dev ? 'none' : 'production',
  entry: slsw.lib.entries,
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{ test: /\.(ts|js)x?$/, exclude: /node_modules/, use: ['ts-loader'] }]
  },
  stats: {
    preset: 'minimal'
  },
  // 😎👇 Important to reduce bundle size (AWS packages these libs in the Lambda Runtime by default)
  externals: ['aws-sdk', '@aws-sdk/client-dynamodb', '@aws-sdk/lib-dynamodb']
}
