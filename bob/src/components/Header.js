import PropTypes from 'prop-types'
import React from 'react'
// import { Link } from "gatsby"
// import { FiMenu } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa'

import StyledHeader from './StyledHeader'
import Logo from './Logo'

const Header = () => (
  <StyledHeader>
    <nav className="menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li className="sub-menu"><a href="#">Sponsoren</a>
          <ul>
            <li><a href="#">Sponsoren</a></li>
            <li><a href="#">Bierfreunde</a></li>
          </ul>
        </li>
        <li className="sub-menu"><a href="#">Programm</a>
          <ul>
            <li><a href="#">Biere</a></li>
            <li><a href="#">Booklet 2018</a></li>
            <li><a href="#">Bands</a></li>
            <li><a href="#">Infos</a></li>
          </ul>
        </li>
        <li className="logo__item"><a href="#"><Logo/></a></li>
        <li><a href="#">Kontakt</a></li>
        <li><a href="#">Impressionen 2018</a>
          <ul>
            <li><a href="#">Bilder 2018</a></li>
          </ul>
        </li>
        <li><a href="#"><FaFacebookF/></a></li>
      </ul>
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
