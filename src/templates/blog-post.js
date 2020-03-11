import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import styles from './blog-post.module.css'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        <p className={styles.date}>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
