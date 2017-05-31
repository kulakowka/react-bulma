import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({
  children,
  ...props
}) =>
  <label className='checkbox'>
    <input type='checkbox' {...props} />
    {' '}
    {children}
  </label>

Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = {
  children: PropTypes.node
}

export default Checkbox
