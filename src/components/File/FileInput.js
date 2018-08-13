import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const FileInput = ({
  className,
  ...props
}) => {
  const classes = classNames('file-input', className)

  return <input className={classes} type='file' {...props} />
}

FileInput.displayName = 'File.Input'

FileInput.propTypes = {
  className: PropTypes.string
}

export default FileInput
