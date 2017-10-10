import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Link = ({
  as: A,
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
  className,
  ...props
}) => {
  const classes = classNames('link', {
    'button is-black': black,
    'button is-danger': danger,
    'button is-dark': dark,
    'button is-info': info,
    'button is-large': large,
    'button is-light': light,
    'button is-link': link,
    'button is-medium': medium,
    'button is-outlined': outlined,
    'button is-primary': primary,
    'button is-small': small,
    'button is-success': success,
    'button is-warning': warning,
    'button is-white': white,
    'button is-inverted': inverted,
    'button is-hovered': hovered,
    'button is-focused': focused,
    'button is-active': active,
    'button is-loading': loading,
    'button is-fullwidth': fullwidth
  }, className)

  return <A className={classes} {...props} />
}

Link.displayName = 'Link'

Link.propTypes = {
  as: PropTypes.node,
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
  children: PropTypes.node
}

Link.defaultProps = {
  as: 'a'
}

export default Link
