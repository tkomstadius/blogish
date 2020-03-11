import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Posts from '../components/posts/posts'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3 style={{ margin: '1em 0' }}>
      This is were I sometimes write things that I picked up from my mind
    </h3>
    <Posts />
  </Layout>
)

export default IndexPage
