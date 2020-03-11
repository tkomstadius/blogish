import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Emoji, { POSTS } from '../emoji/emoji'
import styles from './posts.module.css'

const Posts = () => {
  const {
    allMarkdownRemark: { totalCount, edges },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 5
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "YYYY-MM-DD")
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `
  )

  return (
    <div className={styles.container}>
      <p className={styles.count}>
        Post count: {totalCount} <Emoji type={POSTS} />
      </p>
      {edges.map(({ node }) => (
        <div key={node.id} className={styles.post}>
          <Link to={node.fields.slug} className={styles.link}>
            <h2 className={styles.title}>{node.frontmatter.title}</h2>
            <p className={styles.date}> - {node.frontmatter.date}</p>
            <p className={styles.excerpt}>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Posts
