import React from 'react'
import PropTypes from 'prop-types'

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

  let className = 'button'
  if (black) className += ` is-black`
  if (danger) className += ` is-danger`
  if (dark) className += ` is-dark`
  if (info) className += ` is-info`
  if (large) className += ` is-large`
  if (light) className += ` is-light`
  if (link) className += ` is-link`
  if (medium) className += ` is-medium`
  if (outlined) className += ` is-outlined`
  if (primary) className += ` is-primary`
  if (small) className += ` is-small`
  if (success) className += ` is-success`
  if (warning) className += ` is-warning`
  if (white) className += ` is-white`
  if (inverted) className += ` is-inverted`
  if (hovered) className += ` is-hovered`
  if (focused) className += ` is-focused`
  if (active) className += ` is-active`
  if (loading) className += ` is-loading`
  if (fullwidth) className += ` is-fullwidth`
  if (props['static']) className += ` is-static`

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
