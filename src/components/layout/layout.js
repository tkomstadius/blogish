import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../header/header'
import Emoji, { CONSTRUCTION } from '../emoji/emoji'
import styles from './layout.module.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <h4 className={styles.footerText}>
          <Emoji type={CONSTRUCTION} /> Under Construction{' '}
          <Emoji type={CONSTRUCTION} />
        </h4>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
