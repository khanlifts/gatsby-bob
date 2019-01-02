import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import WelcomeContainer from '../components/WelcomeContainer'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <WelcomeContainer/>
  </Layout>
)

export default IndexPage
