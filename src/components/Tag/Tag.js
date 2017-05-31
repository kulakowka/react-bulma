import React from 'react'
import PropTypes from 'prop-types'

/*
Small tag labels to insert anywhere
*/
const Tag = ({
  medium,
  large,
  black,
  dark,
  light,
  white,
  primary,
  info,
  success,
  warning,
  danger,
  ...props
}) => {
  let className = 'tag'
  if (medium) className += ` is-medium`
  if (large) className += ` is-large`
  if (black) className += ` is-black`
  if (dark) className += ` is-dark`
  if (light) className += ` is-light`
  if (white) className += ` is-white`
  if (primary) className += ` is-primary`
  if (info) className += ` is-info`
  if (success) className += ` is-success`
  if (warning) className += ` is-warning`
  if (danger) className += ` is-danger`

  return <span className={className} {...props} />
}

Tag.displayName = 'Tag'

Tag.propTypes = {
  medium: PropTypes.bool,
  large: PropTypes.bool,
  black: PropTypes.bool,
  dark: PropTypes.bool,
  light: PropTypes.bool,
  white: PropTypes.bool,
  primary: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool
}

export default Tag
