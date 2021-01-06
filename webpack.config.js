const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const outputPath = "./build/";

module.exports = (env = {}, argv) => {
  const isProduction = argv.mode === "production";
  console.log("isProduction", isProduction);
  let config = {
    context: path.resolve(__dirname, "./"),
    entry: {
      app: ["./src/js/app.js"],

      //  vendor: [
      //"./vendor/css/pure-min.css",
      //"./vendor/css/grids-responsive-min.css",
      // "./vendor/css/jquery.slotmachine.min.css",
      //  ],
    },
    plugins: [
      new MiniCssExtractPlugin({}),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }),
    ],
    output: {
      path: path.resolve(__dirname, "build"),
      publicPath: "",
      filename: "./[name].js",
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: "initial",
            name: "vendor",
            test: /[\\/]node_modules[\\/]/,
              enforce: true
          },
        },
      },
      runtimeChunk: false,
    },
    devtool: "source-map",

    module: {
      rules: [
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
          test: /\.css$/,
          exclude: /font-awesome/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
        {
          test: /\.css$/,
          include: /font-awesome/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
              },
            },
          ],
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[path][name].[ext]",
              },
            },
            {
              loader: "image-webpack-loader",
              options: {
                //disable: false,
                mozjpeg: {
                  //progressive: true,
                  //quality: 15,
                  //quality: 100
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4,
                },
                gifsicle: {
                  interlaced: false,
                },
                webp: {
                  quality: 75,
                },
              },
            },
          ],
        },
      ],
    },
  };
  return config;
};
