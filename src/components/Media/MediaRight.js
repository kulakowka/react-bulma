import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const MediaRight = ({
  className,
  ...props
}) => {
  const classes = classNames('media-right', className)

  return <div className={classes} {...props} />
}

MediaRight.displayName = 'Media.Right'

MediaRight.propTypes = {
  className: PropTypes.string
}

export default MediaRight
