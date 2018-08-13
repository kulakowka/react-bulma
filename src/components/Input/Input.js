import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Input = ({
  className,
  danger,
  focused,
  hovered,
  info,
  large,
  loading,
  medium,
  primary,
  small,
  success,
  warning,
  rounded,
  ...props
}) => {
  const classes = classNames('input', {
    'is-danger': danger,
    'is-focused': focused,
    'is-hovered': hovered,
    'is-info': info,
    'is-large': large,
    'is-medium': medium,
    'is-primary': primary,
    'is-small': small,
    'is-success': success,
    'is-warning': warning,
    'is-rounded': rounded
  }, className)

  return <input className={classes} {...props} />
}

Input.displayName = 'Input'

Input.propTypes = {
  className: PropTypes.string,
  danger: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  info: PropTypes.bool,
  large: PropTypes.bool,
  loading: PropTypes.bool,
  medium: PropTypes.bool,
  primary: PropTypes.bool,
  small: PropTypes.bool,
  success: PropTypes.bool,
  type: PropTypes.string.isRequired,
  warning: PropTypes.bool,
  rounded: PropTypes.bool
}

Input.defaultProps = {
  type: 'text'
}

export default Input
