import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from "styled-components"

import Header from './header'

const StyledLayout = styled.div`
  height: 100vh;
  background: black;
  color: white;
  
  a, li:hover {
    cursor: pointer;
    color: #B28564;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuItems
          }
        }
      }
    `}
    render={data => {
      return (
      <>
        <StyledLayout>
          <Header menuItems={data.site.siteMetadata.menuItems} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: `0`,
            }}
          >
            {children}
          </div>
        </StyledLayout>
      </>
    )}}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
