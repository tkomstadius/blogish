import React from 'react'

export const CONSTRUCTION = 'construction'
export const POSTS = 'pencil'

const Emoji = ({ type }) => {
  const getEmoji = () => {
    switch (type) {
      case CONSTRUCTION:
        return '🚧'
      case POSTS:
        return '📝'
      default:
        return '🤷‍♀️'
    }
  }

  return (
    <span role="img" aria-label={type}>
      {getEmoji()}
    </span>
  )
}

export default Emoji
