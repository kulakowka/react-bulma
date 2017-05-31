import React from 'react'
import PropTypes from 'prop-types'

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
  ...props
}) => {
  let className = 'progress'
  if (primary) className += ` is-primary`
  if (info) className += ` is-info`
  if (success) className += ` is-success`
  if (warning) className += ` is-warning`
  if (danger) className += ` is-danger`
  if (small) className += ` is-small`
  if (medium) className += ` is-medium`
  if (large) className += ` is-large`

  return <progress {...props} className={className} value={value} max={max} />
}

Progress.displayName = 'Progress'

Progress.propTypes = {
  primary: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  larg: PropTypes.bool,
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
