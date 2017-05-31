import React from 'react'
import PropTypes from 'prop-types'

const Field = props =>
  <div className='field' {...props} />

Field.displayName = 'Field'

Field.propTypes = {
  children: PropTypes.node
}

export default Field
