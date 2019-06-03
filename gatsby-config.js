require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
  ]
}
