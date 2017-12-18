import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Columns = ({
  className,
  isMobile,
  isDesktop,
  ...props
}) => {
  const classes = classNames('columns', {
    'is-desktop': isDesktop,
    'is-mobile': isMobile
  }, className)

  return <div className={classes} {...props} />
}

Columns.propTypes = {
  className: PropTypes.string,
  isMobile: PropTypes.bool,
  isDesktop: PropTypes.bool
}

export default Columns
