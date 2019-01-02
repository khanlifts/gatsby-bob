import PropTypes from 'prop-types'
import React from 'react'
import { Link } from "gatsby"
import { FiMenu } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa'

import StyledHeader from './StyledHeader'
import Logo from './Logo'

const Header = props => (
  <StyledHeader>
    <nav>
      <Link className={'nav-links'}><FiMenu className={'menu-icon'}/></Link>
      <Link to={'/'}><Logo /></Link>
      {props.menuItems.map((item, key) => (
        <Link
          className={'nav-links'}
          key={key}
          to={item}
        >
          {item.toUpperCase()}
        </Link>
      ))}
      <Link className={'nav-links'}><FaFacebookF className={'fb-icon'}/></Link>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
