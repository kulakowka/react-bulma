import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/*
Native HTML progress bars
*/
const Progress = ({
  value,
  max,
  primary,
  info,
  success,
  warning,
  danger,
  small,
  medium,
  large,
  className,
  ...props
}) => {
  const classes = classNames('progress', {
    'is-primary': primary,
    'is-info': info,
    'is-success': success,
    'is-warning': warning,
    'is-danger': danger,
    'is-small': small,
    'is-medium': medium,
    'is-large': large
  }, className)

  return <progress className={classes} value={value} max={max} {...props} />
}

Progress.displayName = 'Progress'

Progress.propTypes = {
  className: PropTypes.node,
  primary: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  max: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

Progress.defaultProps = {
  value: 0,
  max: 100
}

export default Progress
