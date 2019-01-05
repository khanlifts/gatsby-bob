import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from "styled-components"

import Header from './Header'

const StyledLayout = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: black;
  color: white;
  transition: color 2s;
  overflow-x: hidden;
  font-family: Bitter, sans-serif;
  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
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
