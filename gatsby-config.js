require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Front-end Development Agency London &middot; Pagepro`,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.GATSBY_MC_ENDPOINT_LINK, // add your MC list endpoint here
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `pagepro_`,
        access_token: process.env.GATSBY_INSTAGRAM_TOKEN,
        instagram_id: process.env.GATSBY_INSTAGRAM_ID,
      },
    },
    `gatsby-plugin-meta-redirect` // make sure to put last in the array
  ]
}


