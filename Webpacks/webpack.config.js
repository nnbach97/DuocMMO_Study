const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "script.min.js",
    path: path.resolve(__dirname, "htdocs"),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
