import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/*
A versatile delete cross
*/
const Delete = ({
  as: Btn,
  className,
  small,
  medium,
  large,
  ...props
}) => {
  const classes = classNames('delete', {
    'is-small': small,
    'is-medium': medium,
    'is-large': large
  }, className)

  return <Btn className={classes} {...props} />
}

Delete.displayName = 'Delete'

Delete.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool
}

Delete.defaultProps = {
  as: 'div'
}

export default Delete
