module.exports = {
  siteMetadata: {
    title: 'Pandas eating lots',
    indexTitle: 'Amazing Pandas Eating Things',
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
    'gatsby-transformer-remark',
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    }
  ]
}