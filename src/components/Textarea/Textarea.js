import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Textarea = ({
  as: Element,
  small,
  medium,
  large,
  hovered,
  focused,
  primary,
  info,
  success,
  warning,
  danger,
  className,
  ...props
}) => {
  const classes = classNames('textarea', {
    'is-small': small,
    'is-medium': medium,
    'is-large': large,
    'is-hovered': hovered,
    'is-focused': focused,
    'is-primary': primary,
    'is-info': info,
    'is-success': success,
    'is-warning': warning,
    'is-danger': danger
  }, className)

  return <Element className={classes} {...props} />
}

Textarea.displayName = 'Textarea'

Textarea.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  primary: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool
}

Textarea.defaultProps = {
  as: 'textarea'
}

export default Textarea
