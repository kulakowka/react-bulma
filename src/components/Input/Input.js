import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
  small,
  medium,
  large,
  ...props
}) => {
  let className = 'input'
  if (small) className += ' is-small'
  if (medium) className += ' is-medium'
  if (large) className += ' is-large'

  return <input className={className} {...props} />
}

Input.displayName = 'Input'

Input.propTypes = {
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  type: PropTypes.string.isRequired
}

Input.defaultProps = {
  type: 'text'
}

export default Input
