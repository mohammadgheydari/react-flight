const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
// const MinifyPlugin = require("babel-minify-webpack-plugin");
const ASSET_PATH = process.env.ASSET_PATH || "/";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
    // publicPath: "/assets/", // string
    // publicPath: "/public/"
    // publicPath: "http://localhost:8080/"
    publicPath: ASSET_PATH
  },
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader"
        // options: {
        //   limit: 10000
        // }
      }
    ]
  },
  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    // maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" })
    // new MinifyPlugin()
  ],
  stats: {
    errorDetails: true
  },
  devServer: {
    historyApiFallback: true
  }
};
