import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/*
Bold notification blocks, to alert your users of something
*/
const Notification = ({
  primary,
  info,
  success,
  warning,
  danger,
  className,
  ...props
}) => {
  const classes = classNames('notification', {
    'is-primary': primary,
    'is-info': info,
    'is-success': success,
    'is-warning': warning,
    'is-danger': danger
  }, className)

  return <div className={classes} {...props} />
}

Notification.displayName = 'Notification'

Notification.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool
}

export default Notification
