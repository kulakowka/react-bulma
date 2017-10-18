import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const FileLabel = ({
  as: Label,
  className,
  ...props
}) => {
  const classes = classNames('file-label', className)

  return <Label className={classes} {...props} />
}

FileLabel.displayName = 'File.Label'

FileLabel.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string
}

FileLabel.defaultProps = {
  as: 'label'
}

export default FileLabel
