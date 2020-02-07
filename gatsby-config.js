module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-eslint",
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        analyzerPort: 3000,
        production: true
      }
    }
  ]
};
