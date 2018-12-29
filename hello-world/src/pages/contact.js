import React from "react"
import {Link} from 'gatsby'
import Header from '../components/header'

export default () => (
  <div style={{ color: `purple` }}>
    <Link to='/about'>About</Link>
    <Header headerText={'Contact Page'} />
    <p>Such wow. Very React.</p>
  </div>
)