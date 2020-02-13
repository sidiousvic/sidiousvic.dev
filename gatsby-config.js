require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyzer",
    //   options: {
    //     analyzerPort: 3000,
    //     production: true
    //   }
    // },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `Vicelog`,
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`
      }
    }
  ]
};
