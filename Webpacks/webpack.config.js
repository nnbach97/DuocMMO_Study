const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isDevelopment = Boolean(env.development);
  console.log("isDevelopment", isDevelopment);
  return {
    mode: isDevelopment ? "development" : "production",
    entry: {
      app: "./src/index.js",
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "htdocs"),
      clean: true,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
      new HtmlWebpackPlugin({
        title: "Webpack app",
        filename: "index.html",
        template: "./src/tempalte.html",
      }),
    ],
    devtool: isDevelopment ? "source-map" : false,
    module: {
      rules: [
        {
          test: /\.s[ac]ss|css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
    devServer: {
      static: {
        directory: "dist",
      },
      port: 6789,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
    },
  };
};
