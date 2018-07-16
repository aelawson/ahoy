import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: path.resolve(__dirname, "app/index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  node: {
    fs: 'empty'
  },
  devtool: "source-map",
  devServer: {
    compress: true,
    port: 8080,
    historyApiFallback: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".less"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          "awesome-typescript-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html"
    })
  ]
}
