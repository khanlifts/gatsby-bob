import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from "styled-components"

import Header from './Header'

const StyledLayout = styled.div`
  background: black;
  color: white;
  transition: color 2s;
  overflow-x: hidden;
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
          <div>
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
