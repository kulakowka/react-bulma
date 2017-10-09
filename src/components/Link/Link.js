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
    'is-fullwidth': fullwidth
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
