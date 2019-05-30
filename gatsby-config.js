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
        endpoint: $GATSBY_MC_EndPoint_Link, // add your MC list endpoint here
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: $GATSBY_Instagram_Token
      }
    },
  ]
}
