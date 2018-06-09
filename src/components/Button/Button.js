import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/*
The classic button, in different colors, sizes, and states
 */
const Button = ({
  as: Btn,
  black,
  danger,
  dark,
  info,
  large,
  light,
  link,
  medium,
  fullwidth,
  outlined,
  primary,
  small,
  success,
  text,
  warning,
  white,
  inverted,
  hovered,
  focused,
  active,
  loading,
  rounded,
  className,
  ...props
}) => {
  const classes = classNames('button', {
    'is-black': black,
    'is-danger': danger,
    'is-dark': dark,
    'is-info': info,
    'is-large': large,
    'is-light': light,
    'is-link': link,
    'is-medium': medium,
    'is-outlined': outlined,
    'is-primary': primary,
    'is-small': small,
    'is-success': success,
    'is-text': text,
    'is-warning': warning,
    'is-white': white,
    'is-inverted': inverted,
    'is-hovered': hovered,
    'is-focused': focused,
    'is-active': active,
    'is-loading': loading,
    'is-fullwidth': fullwidth,
    'is-rounded': rounded,
    'is-static': props['static']
  }, className)

  delete props['static']

  return <Btn className={classes} {...props} />
}

Button.displayName = 'Button'

Button.defaultProps = {
  as: 'button'
}

Button.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  black: PropTypes.bool,
  danger: PropTypes.bool,
  dark: PropTypes.bool,
  info: PropTypes.bool,
  fullwidth: PropTypes.bool,
  large: PropTypes.bool,
  light: PropTypes.bool,
  link: PropTypes.bool,
  medium: PropTypes.bool,
  outlined: PropTypes.bool,
  primary: PropTypes.bool,
  small: PropTypes.bool,
  success: PropTypes.bool,
  text: PropTypes.bool,
  warning: PropTypes.bool,
  white: PropTypes.bool,
  inverted: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  active: PropTypes.bool,
  loading: PropTypes.bool,
  rounded: PropTypes.bool,
  static: PropTypes.bool
}

export default Button