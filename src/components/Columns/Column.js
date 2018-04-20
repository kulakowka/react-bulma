import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Column = ({
  className,
  size,
  offset,
  ...props
}) => {
  const classes = classNames('column', {
    [`${size}`]: size,
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
