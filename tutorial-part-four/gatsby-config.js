module.exports = {
  siteMetadata: {
    title: 'Pandas eating lots',
    picTitle: 'Those are some cool pandas aight?'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    }
  ]
}