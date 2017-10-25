import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const FileCta = ({
  className,
  ...props
}) => {
  const classes = classNames('file-cta', className)

  return <span className={classes} {...props} />
}

FileCta.displayName = 'File.Cta'

FileCta.propTypes = {
  className: PropTypes.string
}

export default FileCta
