import React from 'react'
import PropTypes from 'prop-types'

const CardContent = ({
  children
}) =>
  <div className='card-content'>
    {children}
  </div>

CardContent.displayName = 'Card.Content'

CardContent.propTypes = {
  children: PropTypes.node
}

export default CardContent
