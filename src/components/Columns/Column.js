import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Column = ({
  className,
  size,
  offset,
  hasTextCentered,
  hasTextLeft,
  hasTextRight,
  ...props
}) => {
  const classes = classNames('column', {
    [`${size}`]: size,
    'has-text-centered': hasTextCentered,
    'has-text-right': hasTextRight,
    'has-text-left': hasTextLeft,
    [`${offset}`]: offset
  }, className)

  return <div className={classes} {...props} />
}

Column.displayName = 'Column'

Column.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  offset: PropTypes.string,
  hasTextCentered: PropTypes.bool,
  hasTextLeft: PropTypes.bool,
  hasTextRight: PropTypes.bool
}

export default Column
