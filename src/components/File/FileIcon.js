import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const FileIcon = ({
  as: Span,
  className,
  ...props
}) => {
  const classes = classNames('file-icon', className)

  return <Span className={classes} {...props} />
}

FileIcon.displayName = 'File.Icon'

FileIcon.propTypes = {
  className: PropTypes.string,
  as: PropTypes.string
}

FileIcon.defaultProps = {
  as: 'span'
}

export default FileIcon
