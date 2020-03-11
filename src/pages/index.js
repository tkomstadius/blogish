import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Posts from '../components/posts/posts'
import Emoji, { CONSTRUCTION } from '../components/emoji/emoji'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Posts />
    <h1 style={{ margin: '1em 0 2em' }}>
      <Emoji type={CONSTRUCTION} /> Under Construction{' '}
      <Emoji type={CONSTRUCTION} />
    </h1>
  </Layout>
)

export default IndexPage
