import React from 'react'
import PropTypes from 'prop-types'

const Link = ({
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
  children,
  ...props
}) => {
  let className = 'link'
  if (black) className += ` button is-black`
  if (danger) className += ` button is-danger`
  if (dark) className += ` button is-dark`
  if (info) className += ` button is-info`
  if (large) className += ` button is-large`
  if (light) className += ` button is-light`
  if (link) className += ` button is-link`
  if (medium) className += ` button is-medium`
  if (outlined) className += ` button is-outlined`
  if (primary) className += ` button is-primary`
  if (small) className += ` button is-small`
  if (success) className += ` button is-success`
  if (warning) className += ` button is-warning`
  if (white) className += ` button is-white`
  if (inverted) className += ` button is-inverted`
  if (hovered) className += ` button is-hovered`
  if (focused) className += ` button is-focused`
  if (active) className += ` button is-active`
  if (loading) className += ` button is-loading`
  if (fullwidth) className += ` button is-fullwidth`
  return <a className={className} {...props}>{children}</a>
}

Link.displayName = 'Link'

Link.propTypes = {
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
  loading: PropTypes.bool,
  children: PropTypes.node,
}
Link.defaultProps = {
  children: ''
}

export default Link
