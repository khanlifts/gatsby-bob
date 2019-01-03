import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import WelcomeContainer from '../components/WelcomeContainer'
import NewsContainer from '../components/NewsContainer'
import IntroContainer from '../components/IntroContainer'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <WelcomeContainer />
    <NewsContainer />
    <IntroContainer />
  </Layout>
)

export default IndexPage
