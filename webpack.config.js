const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Webpack provides excellent documentation if you'd like to build your own configs in the future: https://webpack.js.org/concepts/

module.exports = (env) => ({
  mode: env.WEBPACK_SERVE ? "development" : "production",
  entry: "./src/index.ts",
  devtool: env.WEBPACK_SERVE ? "inline-source-map" : "source-map",
  devServer: {
    contentBase: "./dist",
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: path.resolve(__dirname, "./src"),
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", "json"],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: env.WEBPACK_SERVE ? "p5 Development" : "p5 Production",
      favicon: "./src/assets/favicon.ico",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
});
