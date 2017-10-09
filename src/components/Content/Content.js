import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/*
A single class to handle WYSIWYG generated content, where only HTML tags are available
*/
const Content = ({
  small,
  medium,
  large,
  children,
  html,
  className,
  ...props
}) => {
  const classes = classNames('content', {
    'is-small': small,
    'is-medium': medium,
    'is-large': large
  }, className)

  if (html) return <div className={classes} dangerouslySetInnerHTML={{ __html: html }} {...props} />

  return <div className={classes} {...props}>{children}</div>
}

Content.displayName = 'Content'

Content.propTypes = {
  className: PropTypes.string,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node,
  html: PropTypes.string
}

export default Content
