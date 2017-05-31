import React from 'react'
import PropTypes from 'prop-types'

const Textarea = props =>
  <textarea className='textarea' {...props} />

Textarea.displayName = 'Textarea'

Textarea.propTypes = {
  children: PropTypes.node
}

export default Textarea
