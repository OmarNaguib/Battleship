const path = require("path");

module.exports = {
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.gif$/,
        type: "asset/inline",
      },
      {
        test: /\.(ttf|eot|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    alias: {
      config$: "./configs/app-config.js",
      react: "./vendor/react-master",
    },
    extensions: [".js", ".jsx"],
    modules: [
      "node_modules",
      "bower_components",
      "shared",
      "/shared/vendor/modules",
    ],
  },
};
