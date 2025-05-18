const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "../src/vLibs/index.ts"),
  output: {
    path: path.resolve(__dirname, "../lib"),
    filename: "index.js",
    library: {
      name: "vlibs",
      type: "umd",
    },
    clean: true,
  },
  externals: {
    vue: "Vue",
  },
  resolve: {
    extensions: [".ts", ".js", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
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
        include: path.resolve(__dirname, "../src/assets/icons"),
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
