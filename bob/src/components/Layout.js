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
  font-size: calc(14px + (22 - 14) * ((100vw - 300px) / (1600 - 300)));
  line-height: 1.8;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => {
      return (
      <>
        <StyledLayout>
          <Header />
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
