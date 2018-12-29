import React from "react"
import Header from '../components/header'
import {Link} from 'gatsby'

export default () =>
  <div>
    <Header headerText={'Welcome Page'} />
    <Link to='/about'>About</Link>
  </div>
