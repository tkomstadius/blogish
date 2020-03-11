import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      <span role="img" aria-label="construction">
        🚧
      </span>{' '}
      Under Construction{' '}
      <span role="img" aria-label="construction">
        🚧
      </span>
    </h1>
  </Layout>
)

export default IndexPage
