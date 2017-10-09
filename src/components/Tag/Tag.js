import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/*
Small tag labels to insert anywhere
*/
const Tag = ({
  as: Span,
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
  className,
  ...props
}) => {
  const classes = classNames('tag', {
    'is-medium': medium,
    'is-large': large,
    'is-black': black,
    'is-dark': dark,
    'is-light': light,
    'is-white': white,
    'is-primary': primary,
    'is-info': info,
    'is-success': success,
    'is-warning': warning,
    'is-danger': danger
  }, className)

  return <Span className={classes} {...props} />
}

Tag.displayName = 'Tag'

Tag.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
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

Tag.defaultProps = {
  as: 'span'
}

export default Tag
