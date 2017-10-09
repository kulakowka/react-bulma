import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/*
The classic button, in different colors, sizes, and states
 */
const Button = props => {
  const {
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
    warning,
    white,
    inverted,
    hovered,
    focused,
    active,
    loading,
    ...otherProps
  } = props

  const className = classNames('button', {
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
    'is-warning': warning,
    'is-white': white,
    'is-inverted': inverted,
    'is-hovered': hovered,
    'is-focused': focused,
    'is-active': active,
    'is-loading': loading,
    'is-fullwidth': fullwidth,
    'is-static': props['static'],
  });

  const Btn = props['static'] ? 'span' : 'button'

  delete otherProps['static']

  return <Btn className={className} {...otherProps} />
}

Button.displayName = 'Button'

Button.propTypes = {
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
  warning: PropTypes.bool,
  white: PropTypes.bool,
  inverted: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  active: PropTypes.bool,
  loading: PropTypes.bool
  // isStatic: PropTypes.bool
}

export default Button
