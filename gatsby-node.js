const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        //  all three imports forwarded to three.exports file
        three$: path.resolve("./src/three.exports.js")
      },
      extensions: [".tsx", ".ts", ".js"]
    },
    optimization: {
      minimizer: [new UglifyJsPlugin()]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"]
        },
        {
          test: /\.obj$/,
          use: ["file-loader"]
        }
      ]
    }
  });
};
