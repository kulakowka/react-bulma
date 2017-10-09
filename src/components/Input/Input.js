import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Input = ({
  small,
  medium,
  large,
  className,
  ...props
}) => {
  const classes = classNames('input', {
    'is-small': small,
    'is-medium': medium,
    'is-large': large
  }, className)

  return <input className={classes} {...props} />
}

Input.displayName = 'Input'

Input.propTypes = {
  className: PropTypes.string,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  type: PropTypes.string.isRequired
}

Input.defaultProps = {
  type: 'text'
}

export default Input
