module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        showSpinner: true,
        color: `tomato`,
        minimum: 2
      }
    }
  ]
};
