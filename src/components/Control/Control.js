import React from 'react'
import PropTypes from 'prop-types'

const Control = props =>
  <div className='control' {...props} />

Control.displayName = 'Control'

Control.propTypes = {
  children: PropTypes.node
}

export default Control
