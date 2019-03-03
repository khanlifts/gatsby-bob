import React from 'react'
import { FaFacebookF, FaBeer } from 'react-icons/fa'
import Scrollchor from 'react-scrollchor'

import StyledHeader from './StyledHeader'
import Logo from './Logo'

const Header = () => (
  <StyledHeader>
    <nav className="menu">
      <FaBeer className="fa-beer">MENU</FaBeer>
      <ul>
        <li><Scrollchor to="">Home</Scrollchor></li>
        <li><Scrollchor to="">Sponsoren</Scrollchor></li>
        <li><Scrollchor to="">Programm</Scrollchor></li>
        <li className="logo__item"><Scrollchor to=""><Logo/></Scrollchor></li>
        <li><Scrollchor to="">Kontakt</Scrollchor></li>
        <li><Scrollchor to="#impressions">Impressionen</Scrollchor></li>
        <li>
          <a href="https://www.facebook.com/Best-of-Beer-Festival-1770034253278039/" className="fa-facebook">
            <FaFacebookF/>
          </a>
        </li>
      </ul>
    </nav>
  </StyledHeader>
)

export default Header
