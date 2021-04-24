const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'Oscypmaster',
    description: 'Smaczne i zdrowe sery góralskie.',
    image: '/logo.webp',
    author: 'oscypmaster'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-seo',
      options: {
        siteName: 'OSCYPMASTER',
        defaultSiteImage: '/images/logo.webp',
        siteUrl: 'https://oscypmaster.pl',
        favicon32: '/img/favicon-32x32.png',
        favicon16: '/img/favicon-16x16.png',
        htmlLanguage: 'pl',
        locale: 'pl_PL',
        appleTouch: '/img/apple-touch-icon.png',
        globalSchema: `{
          "@type": "WebSite",
          "@id": "https://oscypmaster.pl/#website",
          "url": "https://oscypmaster.pl/",
          "name": "OSCYPMASTER Żywiec",
          "publisher": {
            "@id": "Lukasz Garncarczyk"
          },
          "image": {
            "@type": "ImageObject",
            "@id": "http://oscypmaster.pl/static/logo-0c75c84648e608a1885836d7e597ec5c.webp",
            "url": "https://oscypmaster.pl/static/logo-0c75c84648e608a1885836d7e597ec5c.webp",
            "caption": "Oscypmaster Logo"
          }
        }`
      }
    },
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    }
  ]
};
