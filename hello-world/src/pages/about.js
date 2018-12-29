import React from "react"
import {Link} from 'gatsby'
import Header from '../components/header'

export default () => (
  <div style={{ color: `teal` }}>
    <Link to={'/contact'}>Contact</Link>
    <Header headerText={'About Gatsby and Cyril'} />
    <p>Such wow. Very React.</p>
  </div>
)