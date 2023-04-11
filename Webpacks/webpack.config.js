const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "script.min.js",
    path: path.resolve(__dirname, "htdocs"),
    clean: true,
  },
};
