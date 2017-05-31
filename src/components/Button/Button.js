import React from 'react'
import PropTypes from 'prop-types'

const Button = props =>
  <button className='button' {...props} />

Button.displayName = 'Button'

Button.propTypes = {
  children: PropTypes.node
}

export default Button
