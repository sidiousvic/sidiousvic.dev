const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const pages = await graphql(`
    {
      allPrismicPost {
        edges {
          node {
            uid
            data {
              title {
                text
              }
              body {
                html
              }
              timestamp
            }
          }
        }
      }
    }
  `);
  const template = path.resolve("src/templates/post.jsx");
  pages.data.allPrismicPost.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid
      }
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        //  all three imports forwarded to three.exports file
        three$: path.resolve("./src/three.x.ts")
      },
      extensions: [".ts", ".tsx", ".js"]
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
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ["file-loader"]
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
