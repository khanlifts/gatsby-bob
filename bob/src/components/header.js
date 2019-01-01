// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from "styled-components"

const StyledHeader = styled.div`
  border-bottom: 1px solid gray;
  height: 102px;
  
  ul {
    list-style: none;
    text-align: center;
    vertical-align: middle;
    line-height: 102px;
    li {
      display: inline;
      margin-right: 2em;
    }
  }
`

const Header = props => (
  <StyledHeader>
    <ul>
      {props.menuItems.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
