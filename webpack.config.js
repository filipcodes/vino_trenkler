const path = require("path");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  // Set to development/production
  mode: "production",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      //Možno som tu hovadinu spravil
      directory: path.resolve(__dirname, "src"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",

          "css-loader",

          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets",
              publicPath: "assets",
              emitFile: true,
            },
          },
          // {
          //   loader: "url-loader",
          //   options: {
          //     limit: 8000,
          //     name: "[name].[ext]",
          //   },
          // },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/template.html",
    }),
    new FaviconsWebpackPlugin("./src/assets/trenkler_logo.webp"),
    // new BundleAnalyzerPlugin(),
  ],
};
