import React from 'react'
import PropTypes from 'prop-types'

const Textarea = ({
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
  ...props
}) => {
  let className = 'textarea'

  if (small) className += ` is-small`
  if (medium) className += ` is-medium`
  if (large) className += ` is-large`

  if (hovered) className += ` is-hovered`
  if (focused) className += ` is-focused`

  if (primary) className += ` is-primary`
  if (info) className += ` is-info`
  if (success) className += ` is-success`
  if (warning) className += ` is-warning`
  if (danger) className += ` is-danger`

  return <textarea className={className} {...props} />
}

Textarea.displayName = 'Textarea'

Textarea.propTypes = {
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

export default Textarea
