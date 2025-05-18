const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = (env = {}) => {
  const isLibBuild = env.BUILD_LIB === true;

  return {
    mode: "production",
    entry: isLibBuild ? "./src/index.ts" : "./src/main.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isLibBuild ? "index.js" : "bundle.js",
      publicPath: "/vLibs/",
      library: isLibBuild
        ? {
            type: "umd",
            name: "ZlLibs",
          }
        : undefined,
      clean: true,
    },
    externals: isLibBuild
      ? {
          vue: "Vue", // 组件库不打包 Vue
        }
      : {},
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true,
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.svg$/,
          loader: "svg-sprite-loader",
          options: {
            symbolId: "icon-[name]",
          },
          include: path.resolve(__dirname, "src/assets/icons"),
        },
      ],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [".ts", ".js", ".vue", ".json"],
    },
    plugins: [
      new VueLoaderPlugin(),
      ...(!isLibBuild
        ? [
            new HtmlWebpackPlugin({
              template: "./public/index.html",
            }),
          ]
        : []),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      hot: true,
      port: 8080,
    },
  };
};
