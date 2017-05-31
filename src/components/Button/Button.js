import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  success,
  info,
  ...props
}) => {
  let className = 'button'
  if (success) className += ` is-success`
  if (info) className += ` is-info`

  return <button className={className} {...props} />
}

Button.displayName = 'Button'

Button.propTypes = {
  success: PropTypes.bool,
  info: PropTypes.bool
}

export default Button
