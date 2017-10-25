import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const FileLabel = ({
  as: Span,
  className,
  ...props
}) => {
  const classes = classNames('file-name', className)

  return <Span className={classes} {...props} />
}

FileLabel.displayName = 'File.Name'

FileLabel.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string
}

FileLabel.defaultProps = {
  as: 'span'
}

export default FileLabel
