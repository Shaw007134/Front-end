const path = require("path");
module.exports = {
  target: "node",
  entry: {
    app: path.join(__dirname, "../client/server-entry.js")
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "../dist"),
    publicPath: "",
    // 存放静态资源路径，用于区分不同文件以及可设置cdn域名
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        loader: "babel-loader"
      },
      {
        test: /.js$/,
        loader: "babel-loader",
        exclude: [path.join(__dirname, "../node_modules")]
      }
    ]
  }
};
