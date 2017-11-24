import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const PageLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.node,
}


export default PageLayout
