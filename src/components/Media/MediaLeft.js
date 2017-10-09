import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MediaLeft = ({
  className,
  ...props
}) => {
  const classes = classNames('media-left', className)

  return <div className={classes} {...props} />
}

MediaLeft.displayName = 'Media.Left'

MediaLeft.propTypes = {
  className: PropTypes.string
}

export default MediaLeft
