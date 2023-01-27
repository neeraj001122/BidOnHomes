const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssPlugin = require("mini-css-extract-plugin");
 //configuration of our application
module.exports = {
  //the entery point of our application.
  entry: "./src/index.js",
  //the out we want from webpack the clean statment cleans our past data with new data.
  output: {
    filename: "BidOnHomes.js",
    path: path.join(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new miniCssPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: miniCssPlugin.loader }, { loader: "css-loader" }],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    historyApiFallback: true
  },
};
