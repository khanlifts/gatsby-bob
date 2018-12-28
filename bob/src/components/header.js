// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  color: white;
  margin: 0 auto;
  height: 3rem; 
  text-align: center;
  background-color: black;
  padding: 3rem 0;
`

const Header = () => (
  <StyledHeader>
    Test
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
