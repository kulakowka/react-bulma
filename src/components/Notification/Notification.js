import React from 'react'
import PropTypes from 'prop-types'

/*
Bold notification blocks, to alert your users of something
*/
const Notification = ({
  primary,
  info,
  success,
  warning,
  danger,
  ...props
}) => {
  let className = 'notification'
  if (primary) className += ` is-primary`
  if (info) className += ` is-info`
  if (success) className += ` is-success`
  if (warning) className += ` is-warning`
  if (danger) className += ` is-danger`

  return <div className={className} {...props} />
}

Notification.displayName = 'Notification'

Notification.propTypes = {
  primary: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool
}

export default Notification
