module.exports = {
  siteMetadata: {
    title: 'Pandas eating lots',
    picTitle: 'Those are some cool pandas aight?'
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    }
  ]
}