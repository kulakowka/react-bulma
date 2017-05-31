import React from 'react'
import PropTypes from 'prop-types'

/*
A single class to handle WYSIWYG generated content, where only HTML tags are available
*/
const Content = ({
  small,
  medium,
  large,
  children,
  html,
  ...props
}) => {
  let className = 'content'
  if (small) className += ` is-small`
  if (medium) className += ` is-medium`
  if (large) className += ` is-large`

  if (html) return <div className={className} dangerouslySetInnerHTML={{ __html: html }} {...props} />

  return <div className={className} {...props}>{children}</div>
}

Content.displayName = 'Content'

Content.propTypes = {
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node,
  html: PropTypes.string
}

export default Content
