const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./new-site-vue/vue/main/main.js",
    // dostavka: "./new-site-vue/vue/dostavka/dostavka.js",
    // opt: "./new-site-vue/vue/opt/opt.js",
  },
  // entry: "./new-site-vue/vue/main/main.js",
  devtool: "source-map",
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "./new-site-vue/build/"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "ignore-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!images", "!images/**/*"],
    }),

    new MiniCssExtractPlugin({
      filename: "css/[name].min.css",
    }),

    new VueLoaderPlugin(),

    new CopyPlugin({
      patterns: [
        {
          from: "./new-site-vue/images",
          to: "./images/[path][name].webp",
          toType: "template",
          globOptions: {
            copyUnmodified: true,
            force: false,
            ignore: ["/**/*.svg"],
          },
        },

        {
          from: "./new-site-vue/images",
          to: "./images",
          globOptions: {
            copyUnmodified: true,
            force: false,
          },
        },
      ],
    }),
  ],
};
