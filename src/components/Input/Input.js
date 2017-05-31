import React from 'react'
import PropTypes from 'prop-types'

const Input = props =>
  <input className='input' {...props} />

Input.displayName = 'Input'

Input.propTypes = {
  type: PropTypes.string.isRequired
}

Input.defaultProps = {
  type: 'text'
}

export default Input
