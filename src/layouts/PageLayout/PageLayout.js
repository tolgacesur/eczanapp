import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'

import Header from '../../components/Header'

export const PageLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <p className="footer-text">Github <a className="footer-text" href="https://github.com/tolgacesur">@tolgacesur</a><br/>Eczanelere Ait Veriler hastanebul.com.tr Sitesinden Alınmıştır.
    <br/>© 2017</p>
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.node,
}


export default PageLayout
