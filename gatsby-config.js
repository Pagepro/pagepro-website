require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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


