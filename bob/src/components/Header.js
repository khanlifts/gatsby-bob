import PropTypes from 'prop-types'
import React from 'react'

// import { FiMenu } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa'
import Scrollchor from 'react-scrollchor'

import StyledHeader from './StyledHeader'
import Logo from './Logo'

const Header = () => (
  <StyledHeader>
    <nav className="menu">
      <ul>
        <li><Scrollchor to="">Home</Scrollchor></li>
        <li className="sub-menu"><Scrollchor to="">Sponsoren</Scrollchor>
          {/*<ul>*/}
            {/*<li><a href="#">Sponsoren</a></li>*/}
            {/*<li><a href="#">Bierfreunde</a></li>*/}
          {/*</ul>*/}
        </li>
        <li className="mobile-menu-item"><Scrollchor to="">Bierfreunde</Scrollchor></li>
        <li className="sub-menu"><Scrollchor to="">Programm</Scrollchor>
          {/*<ul>*/}
            {/*<li><a>Biere</a></li>*/}
            {/*<li><a>Booklet</a></li>*/}
            {/*<li><a>Bands</a></li>*/}
            {/*<li><a>Infos</a></li>*/}
          {/*</ul>*/}
        </li>
        <li className="mobile-menu-item"><Scrollchor to="">Biere</Scrollchor></li>
        <li className="mobile-menu-item"><Scrollchor to="">Bierfreunde</Scrollchor></li>
        <li className="mobile-menu-item"><Scrollchor to="">Booklets</Scrollchor></li>
        <li className="mobile-menu-item"><Scrollchor to="">Bands</Scrollchor></li>
        <li className="mobile-menu-item"><Scrollchor to="">Infos</Scrollchor></li>
        <li className="logo__item"><Scrollchor to=""><Logo/></Scrollchor></li>
        <li><Scrollchor to="">Kontakt</Scrollchor></li>
        <li><Scrollchor to="#impressions">Impressionen</Scrollchor>{/*<ul>*/}
            {/*<li><a href="#">Bilder 2018</a></li>*/}
          {/*</ul>*/}
        </li>
        <li className="mobile-menu-item"><Scrollchor>Bilder 2018</Scrollchor></li>
        <li>
          <a href="https://www.facebook.com/Best-of-Beer-Festival-1770034253278039/" className="fa-icon">
            <FaFacebookF/>
          </a>
        </li>
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
