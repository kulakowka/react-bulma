import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MediaContent = ({
  className,
  ...props
}) => {
  const classes = classNames('media-content', className)

  return <div className={classes} {...props} />
}

MediaContent.displayName = 'Media.Content'

MediaContent.propTypes = {
  className: PropTypes.string
}

export default MediaContent
